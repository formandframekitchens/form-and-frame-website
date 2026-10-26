import { createHash } from "node:crypto";

// Keep multipart overhead below the hosting request ceiling as well as checking each file.
export const MAX_ENQUIRY_BODY_BYTES = 4 * 1024 * 1024 + 64 * 1024;

export class EnquiryRequestError extends Error {
  status: number;
  constructor(status: number, message: string) { super(message); this.status = status; }
}

export async function readEnquiryForm(request: Request, maxBytes = MAX_ENQUIRY_BODY_BYTES) {
  const origin = request.headers.get("origin");
  if ((origin && origin !== new URL(request.url).origin) || request.headers.get("sec-fetch-site") === "cross-site") {
    throw new EnquiryRequestError(403, "Please send your enquiry from this website.");
  }
  const type = request.headers.get("content-type") || "";
  if (!type.toLowerCase().startsWith("multipart/form-data;")) {
    throw new EnquiryRequestError(415, "Please use the enquiry form to send your details.");
  }
  const length = request.headers.get("content-length");
  if (length && (!/^\d+$/.test(length) || Number(length) > maxBytes)) {
    throw new EnquiryRequestError(413, "This enquiry is too large. Keep attachments below 4 MB in total.");
  }
  if (!request.body) throw new EnquiryRequestError(400, "The enquiry was empty. Please try again.");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  const deadline = Date.now() + 15_000;
  try {
    while (true) {
      let timer: ReturnType<typeof setTimeout> | undefined;
      const next = await Promise.race([
        reader.read(),
        new Promise<never>((_, reject) => {
          timer = setTimeout(() => reject(new EnquiryRequestError(408, "The upload took too long. Please try again.")), Math.max(1, deadline - Date.now()));
        }),
      ]).finally(() => clearTimeout(timer));
      if (next.done) break;
      size += next.value.byteLength;
      if (size > maxBytes) throw new EnquiryRequestError(413, "This enquiry is too large. Keep attachments below 4 MB in total.");
      chunks.push(next.value);
    }
    return await new Response(Buffer.concat(chunks), { headers: { "content-type": type } }).formData();
  } finally {
    await reader.cancel().catch(() => undefined);
    reader.releaseLock();
  }
}

// A retry across midnight must not change the email body associated with the same key.
export function submissionReference(submissionId: string) {
  return `FF-${createHash("sha256").update(submissionId).digest("hex").slice(0, 16).toUpperCase()}`;
}

export class EnquiryDeliveryError extends Error {
  code: "provider_unavailable" | "provider_rejected" | "provider_rate_limited" | "provider_invalid_response";
  status?: number;
  constructor(code: EnquiryDeliveryError["code"], status?: number) {
    super(code); this.code = code; this.status = status;
  }
}

type DeliveryOptions = { fetcher?: typeof fetch; sleep?: (ms: number) => Promise<void>; timeoutMs?: number };

export async function sendResendEmail(apiKey: string, message: object, idempotencyKey: string, options: DeliveryOptions = {}) {
  const fetcher = options.fetcher || fetch;
  const sleep = options.sleep || (ms => new Promise(resolve => setTimeout(resolve, ms)));
  const body = JSON.stringify(message);
  for (let attempt = 0; attempt < 3; attempt++) {
    let response: Response;
    try {
      response = await fetcher("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": idempotencyKey },
        body, cache: "no-store", signal: AbortSignal.timeout(options.timeoutMs ?? 6000),
      });
    } catch {
      if (attempt === 2) throw new EnquiryDeliveryError("provider_unavailable");
      await sleep(300 * 2 ** attempt);
      continue;
    }
    const result = await response.json().catch(() => null);
    if (response.ok) {
      if (typeof result?.id === "string" && result.id) return { id: result.id };
      if (attempt === 2) throw new EnquiryDeliveryError("provider_invalid_response");
    } else {
      const retryable = response.status === 429 || response.status >= 500 || (response.status === 409 && result?.name === "concurrent_idempotent_requests");
      const code = response.status === 429 ? "provider_rate_limited" : "provider_rejected";
      if (!retryable || attempt === 2) throw new EnquiryDeliveryError(code, response.status);
      const retryAfter = response.headers.get("retry-after");
      if (retryAfter) {
        const delay = /^\d+(\.\d+)?$/.test(retryAfter) ? Number(retryAfter) * 1000 : Date.parse(retryAfter) - Date.now();
        // Do not hold a customer request indefinitely or retry earlier than the provider asks.
        if (!Number.isFinite(delay) || delay > 2000) throw new EnquiryDeliveryError(code, response.status);
        await sleep(Math.max(300, delay));
        continue;
      }
    }
    await sleep(300 * 2 ** attempt);
  }
  throw new EnquiryDeliveryError("provider_unavailable");
}

export function deliveryFailureCode(error: unknown) {
  return error instanceof EnquiryDeliveryError ? error.code : "provider_unavailable";
}
