import "server-only";
import { createHmac } from "node:crypto";
import { get, put } from "@vercel/blob";
import { allowLoginAttempt } from "./auth";

type Bucket = { count: number; until: number };
type State = { global: Bucket; clients: Record<string, Bucket> };
const pathname = "private-case-studies/security/login-limits-v1.json";
const windowMs = 10 * 60_000;

export async function checkLoginLimit(request: Request): Promise<"allowed" | "limited" | "unavailable"> {
  if (!process.env.VERCEL) return allowLoginAttempt(request) ? "allowed" : "limited";
  // Vercel overwrites this header at its trusted ingress. Raw IPs are never saved.
  const ip = request.headers.get("x-vercel-forwarded-for")?.split(",")[0].trim() || "unknown";
  const client = createHmac("sha256", process.env.PRIVATE_PORTFOLIO_SESSION_SECRET!).update(ip).digest("hex");
  for (let retry = 0; retry < 5; retry++) {
    try {
      const now = Date.now();
      const result = await get(pathname, { access: "private", useCache: false });
      if (result && result.statusCode !== 200) return "unavailable";
      const state: State = result ? await new Response(result.stream).json() : { global: { count: 0, until: now + windowMs }, clients: {} };
      if (state.global.until <= now) state.global = { count: 0, until: now + windowMs };
      for (const [id, bucket] of Object.entries(state.clients)) if (bucket.until <= now) delete state.clients[id];
      const bucket = state.clients[client] ?? { count: 0, until: now + windowMs };
      // Shared limits survive concurrent requests and separate server instances.
      if (bucket.count >= 10 || state.global.count >= 100) return "limited";
      bucket.count++;
      state.global.count++;
      state.clients[client] = bucket;
      await put(pathname, JSON.stringify(state), {
        access: "private", addRandomSuffix: false, contentType: "application/json",
        ...(result ? { ifMatch: result.blob.etag } : { allowOverwrite: false }),
      });
      return "allowed";
    } catch {
      // An ETag conflict means another request consumed an attempt first.
      // Retry the read/conditional write; storage failure always fails closed.
      if (retry === 4) return "unavailable";
    }
  }
  return "unavailable";
}
