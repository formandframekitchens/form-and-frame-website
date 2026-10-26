import { get } from "@vercel/blob";
import { isPrivateAuthorized, privateHeaders } from "@/app/lib/private-portfolio/auth";
import { privateAssets } from "@/app/lib/private-portfolio/catalogue";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function serve(request: Request, context: { params: Promise<{ id: string }> }, head = false) {
  if (!(await isPrivateAuthorized())) return new Response("Not found", { status: 404, headers: privateHeaders });
  const { id } = await context.params;
  const asset = Object.hasOwn(privateAssets, id) ? privateAssets[id] : undefined;
  if (!asset) return new Response("Not found", { status: 404, headers: privateHeaders });
  const headers = new Headers({ ...privateHeaders, "Content-Type": asset.kind === "video" ? "video/mp4" : "image/webp", "Accept-Ranges": "bytes", "Content-Length": String(asset.bytes), "Content-Disposition": `inline; filename="${asset.file}"` });
  let start = 0, end = asset.bytes - 1;
  const range = head ? null : request.headers.get("range");
  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match || (!match[1] && !match[2])) return new Response(null, { status: 416, headers: { ...privateHeaders, "Content-Range": `bytes */${asset.bytes}` } });
    start = match[1] ? Number(match[1]) : Math.max(0, asset.bytes - Number(match[2]));
    end = match[1] && match[2] ? Math.min(Number(match[2]), end) : end;
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= asset.bytes) return new Response(null, { status: 416, headers: { ...privateHeaders, "Content-Range": `bytes */${asset.bytes}` } });
    headers.set("Content-Range", `bytes ${start}-${end}/${asset.bytes}`);
    headers.set("Content-Length", String(end - start + 1));
  }
  if (head) return new Response(null, { headers });
  try {
    // Local review only. Media never lives under public/ or enters a deployment bundle.
    if (!process.env.VERCEL && process.env.PRIVATE_PORTFOLIO_LOCAL_MEDIA_DIR) {
      const { createReadStream } = await import("node:fs");
      const { stat } = await import("node:fs/promises");
      const { join } = await import("node:path");
      const { Readable } = await import("node:stream");
      const file = join(process.env.PRIVATE_PORTFOLIO_LOCAL_MEDIA_DIR, asset.file);
      if ((await stat(file)).size !== asset.bytes) throw new Error("Media mismatch");
      const stream = Readable.toWeb(createReadStream(file, { start, end })) as ReadableStream;
      return new Response(stream, { status: range ? 206 : 200, headers });
    }
    const result = await get(asset.pathname, { access: "private", abortSignal: request.signal,
      headers: range ? { Range: `bytes=${start}-${end}` } : undefined });
    if (!result || result.statusCode !== 200) throw new Error("Media unavailable");
    // The SDK exposes all successful reads as 200. Preserve actual byte-range
    // semantics from its raw response headers so video seeking works correctly.
    if (range && result.headers.get("content-range") !== headers.get("Content-Range")) {
      await result.stream.cancel();
      throw new Error("Media range unavailable");
    }
    return new Response(result.stream, { status: range ? 206 : 200, headers });
  } catch {
    return new Response("Media temporarily unavailable. Please reload this page.", { status: 503, headers: privateHeaders });
  }
}

export const GET = (request: Request, context: { params: Promise<{ id: string }> }) => serve(request, context);
export const HEAD = (request: Request, context: { params: Promise<{ id: string }> }) => serve(request, context, true);
