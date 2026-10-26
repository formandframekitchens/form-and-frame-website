import { test } from "node:test";
import assert from "node:assert/strict";
import { readEnquiryForm, submissionReference, sendResendEmail, deliveryFailureCode } from "../app/lib/enquiry-delivery.ts";

const message = { from: "sender@example.invalid", to: ["test@example.invalid"], subject: "Synthetic", text: "No real message" };
const response = (status, body, headers = {}) => new Response(JSON.stringify(body), { status, headers });

test("same logical send keeps exact payload and key through transient/network retries", async () => {
  const calls = []; const delays = [];
  const result = await sendResendEmail("fake-local-key", message, "test-business", {
    fetcher: async (url, init) => { calls.push({ url, ...init }); if (calls.length === 1) throw new Error("network"); return calls.length === 2 ? response(503, { message: "private response" }) : response(200, { id: "synthetic-id" }); },
    sleep: async ms => { delays.push(ms); },
  });
  assert.equal(result.id, "synthetic-id"); assert.equal(calls.length, 3); assert.deepEqual(delays, [300, 600]);
  for (const call of calls) { assert.equal(call.body, JSON.stringify(message)); assert.equal(call.headers["Idempotency-Key"], "test-business"); }
});

test("permanent errors do not retry or expose provider text", async () => {
  let calls = 0;
  await assert.rejects(() => sendResendEmail("fake", message, "test", { fetcher: async () => { calls++; return response(422, { message: "customer@example.invalid secret" }); } }), error => error.message === "provider_rejected" && !JSON.stringify(error).includes("customer@"));
  assert.equal(calls, 1);
});

test("rate-limit delay respected; long Retry-After ends request without an early retry", async () => {
  const delays = []; let calls = 0;
  await sendResendEmail("fake", message, "test", { fetcher: async () => ++calls === 1 ? response(429, {}, { "Retry-After": "1" }) : response(200, { id: "ok" }), sleep: async ms => { delays.push(ms); } });
  assert.deepEqual(delays, [1000]);
  calls = 0;
  await assert.rejects(() => sendResendEmail("fake", message, "test", { fetcher: async () => { calls++; return response(429, {}, { "Retry-After": "60" }); } }), { code: "provider_rate_limited" });
  assert.equal(calls, 1);
});

test("provider timeout and malformed success are bounded at three attempts", async () => {
  let calls = 0;
  const keepAlive = setInterval(() => {}, 1000);
  try {
    await assert.rejects(() => sendResendEmail("fake", message, "test", { timeoutMs: 5, sleep: async () => {}, fetcher: async (_url, init) => { calls++; return new Promise((_, reject) => init.signal.addEventListener("abort", () => reject(new Error("timeout")), { once: true })); } }), { code: "provider_unavailable" });
  } finally { clearInterval(keepAlive); }
  assert.equal(calls, 3);
  calls = 0;
  await assert.rejects(() => sendResendEmail("fake", message, "test", { sleep: async () => {}, fetcher: async () => { calls++; return response(200, {}); } }), { code: "provider_invalid_response" });
  assert.equal(calls, 3);
});

test("concurrent duplicate retries, conflicting changed payload does not", async () => {
  let calls = 0;
  await sendResendEmail("fake", message, "test", { sleep: async () => {}, fetcher: async () => ++calls === 1 ? response(409, { name: "concurrent_idempotent_requests" }) : response(200, { id: "ok" }) });
  assert.equal(calls, 2); calls = 0;
  await assert.rejects(() => sendResendEmail("fake", message, "test", { fetcher: async () => { calls++; return response(409, { name: "invalid_idempotent_request" }); } }), { code: "provider_rejected" });
  assert.equal(calls, 1);
});

test("reference is stable across dates and contains no user-supplied characters", () => {
  const realNow = Date.now; Date.now = () => 0;
  const first = submissionReference("same-id"); Date.now = () => 86400001;
  try { assert.equal(first, submissionReference("same-id")); assert.match(first, /^FF-[A-F0-9]{16}$/); assert.notEqual(first, submissionReference("different-id")); } finally { Date.now = realNow; }
  assert.equal(deliveryFailureCode(new Error("private customer detail")), "provider_unavailable");
});

test("multipart read accepts valid same-site form and rejects cross-site and wrong content types", async () => {
  const form = new FormData(); form.set("name", "Synthetic");
  const parsed = await readEnquiryForm(new Request("https://example.invalid/api/enquiries", { method: "POST", body: form, headers: { origin: "https://example.invalid" } }));
  assert.equal(parsed.get("name"), "Synthetic");
  await assert.rejects(() => readEnquiryForm(new Request("https://example.invalid/api/enquiries", { method: "POST", body: form, headers: { origin: "https://other.invalid" } })), { status: 403 });
  await assert.rejects(() => readEnquiryForm(new Request("https://example.invalid/api/enquiries", { method: "POST", body: "{}" })), { status: 415 });
});

test("declared oversized and streaming oversized bodies rejected before parsing", async () => {
  let cancelled = false;
  const stream = new ReadableStream({ start(c) { c.enqueue(new Uint8Array(20)); }, cancel() { cancelled = true; } });
  await assert.rejects(() => readEnquiryForm(new Request("https://example.invalid/api/enquiries", { method: "POST", body: stream, duplex: "half", headers: { "content-type": "multipart/form-data; boundary=test" } }), 10), { status: 413 });
  assert.equal(cancelled, true);
  await assert.rejects(() => readEnquiryForm(new Request("https://example.invalid/api/enquiries", { method: "POST", body: "small", headers: { "content-type": "multipart/form-data; boundary=test", "content-length": "200" } }), 10), { status: 413 });
});
