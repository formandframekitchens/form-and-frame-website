import "server-only";
import { createHash, timingSafeEqual } from "node:crypto";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { siteUrl } from "../site";

export const PRIVATE_COOKIE = "ff_private_portfolio";
export const SESSION_SECONDS = 60 * 60 * 12;
export const privateHeaders = {
  "Cache-Control": "private, no-store, max-age=0",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow, noarchive, noimageindex",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
};

export function portfolioConfigured() {
  return Boolean(process.env.PRIVATE_PORTFOLIO_PASSWORD &&
    (process.env.PRIVATE_PORTFOLIO_SESSION_SECRET?.length ?? 0) >= 32);
}

function key() {
  // Independent random signing secret; rotating either setting invalidates sessions.
  return createHash("sha256").update(`${process.env.PRIVATE_PORTFOLIO_SESSION_SECRET}\0${process.env.PRIVATE_PORTFOLIO_PASSWORD}`).digest();
}

export function passwordMatches(password: string) {
  if (!portfolioConfigured() || password.length > 256) return false;
  const digest = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(digest(password), digest(process.env.PRIVATE_PORTFOLIO_PASSWORD!));
}

export async function createPrivateSession() {
  if (!portfolioConfigured()) throw new Error("Private portfolio unavailable");
  return new SignJWT({ access: "private-portfolio" })
    .setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("12h")
    .setAudience("form-frame-private-portfolio").setIssuer("form-frame")
    .sign(key());
}

export async function isPrivateAuthorized() {
  if (!portfolioConfigured()) return false;
  const token = (await cookies()).get(PRIVATE_COOKIE)?.value;
  if (!token || token.length > 2048) return false;
  try {
    const { payload } = await jwtVerify(token, key(), {
      algorithms: ["HS256"], audience: "form-frame-private-portfolio", issuer: "form-frame", maxTokenAge: "12h",
      requiredClaims: ["exp", "iat"],
    });
    return payload.access === "private-portfolio" && typeof payload.exp === "number" &&
      payload.exp <= Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  } catch { return false; }
}

export function allowedFormOrigin(request: Request) {
  if (request.headers.get("sec-fetch-site") === "cross-site") return null;
  const origin = request.headers.get("origin");
  if (!origin) return null;
  const allowed = new Set([new URL(siteUrl).origin]);
  for (const host of [process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL, process.env.VERCEL_PROJECT_PRODUCTION_URL]) {
    if (host) allowed.add(`https://${host}`);
  }
  if (!process.env.VERCEL) {
    const local = new URL(request.url);
    // Next may represent a loopback request internally as localhost even when
    // the browser used 127.0.0.1. Both remain local-only and retain the port.
    if (["localhost", "127.0.0.1"].includes(local.hostname)) {
      allowed.add(`http://localhost:${local.port}`);
      allowed.add(`http://127.0.0.1:${local.port}`);
    }
  }
  return allowed.has(origin) ? origin : null;
}

// Local-only limiter. Deployed requests use an atomic shared counter in private storage.
const attempts = new Map<string, { count: number; until: number }>();
export function allowLoginAttempt(request: Request) {
  const now = Date.now();
  for (const [id, entry] of attempts) if (entry.until <= now) attempts.delete(id);
  const ip = process.env.VERCEL ? request.headers.get("x-vercel-forwarded-for") ?? "unknown" : "local";
  const id = createHash("sha256").update(ip).digest("hex");
  const entry = attempts.get(id) ?? { count: 0, until: now + 10 * 60_000 };
  if (attempts.size >= 10_000 && !attempts.has(id)) return false;
  entry.count += 1;
  attempts.set(id, entry);
  return entry.count <= 10;
}

export const privateCookieOptions = {
  httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict" as const,
  path: "/", maxAge: SESSION_SECONDS,
};
