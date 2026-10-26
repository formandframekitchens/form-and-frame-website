import { NextResponse } from "next/server";
import { allowedFormOrigin, createPrivateSession, passwordMatches, portfolioConfigured, PRIVATE_COOKIE, privateCookieOptions, privateHeaders } from "@/app/lib/private-portfolio/auth";
import { checkLoginLimit } from "@/app/lib/private-portfolio/login-limit";

export async function POST(request: Request) {
  const origin = allowedFormOrigin(request);
  if (!origin) return new Response("Forbidden", { status: 403, headers: privateHeaders });
  if (!portfolioConfigured()) return new Response("Private portfolio temporarily unavailable.", { status: 503, headers: privateHeaders });
  const limit = await checkLoginLimit(request);
  if (limit === "unavailable") return new Response("Private portfolio temporarily unavailable. Please try again shortly.", { status: 503, headers: privateHeaders });
  if (limit === "limited") return new Response("Too many attempts. Please try again in 10 minutes.", { status: 429, headers: { ...privateHeaders, "Retry-After": "600" } });
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) return new Response("Invalid form", { status: 415, headers: privateHeaders });
  const reader = request.body?.getReader();
  if (!reader) return new Response("Invalid form", { status: 400, headers: privateHeaders });
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > 4096) { await reader.cancel(); return new Response("Form too large", { status: 413, headers: privateHeaders }); }
    chunks.push(value);
  }
  const form = new URLSearchParams(Buffer.concat(chunks).toString("utf8"));
  const destination = new URL("/private-case-studies", origin);
  if (!passwordMatches(form.get("password") ?? "")) {
    destination.searchParams.set("error", "password");
    return NextResponse.redirect(destination, { status: 303, headers: privateHeaders });
  }
  const next = form.get("next") ?? "";
  if (/^\/private-case-studies\/[a-z0-9-]+$/.test(next)) destination.pathname = next;
  const response = NextResponse.redirect(destination, { status: 303, headers: privateHeaders });
  response.cookies.set(PRIVATE_COOKIE, await createPrivateSession(), privateCookieOptions);
  return response;
}
