import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const supplierPortalSlugs = ["b-and-q", "magnet", "wickes", "wren"] as const;
export type SupplierPortalSlug = (typeof supplierPortalSlugs)[number];

const supplierNames: Record<SupplierPortalSlug, string> = {
  "b-and-q": "B&Q",
  magnet: "Magnet",
  wickes: "Wickes",
  wren: "Wren",
};

const codeVariables: Record<SupplierPortalSlug, string> = {
  "b-and-q": "SUPPLIER_PORTAL_B_AND_Q_ACCESS_CODE",
  magnet: "SUPPLIER_PORTAL_MAGNET_ACCESS_CODE",
  wickes: "SUPPLIER_PORTAL_WICKES_ACCESS_CODE",
  wren: "SUPPLIER_PORTAL_WREN_ACCESS_CODE",
};

export function isSupplierPortalSlug(value: string): value is SupplierPortalSlug {
  return supplierPortalSlugs.includes(value as SupplierPortalSlug);
}

export function supplierPortalName(slug: SupplierPortalSlug) {
  return supplierNames[slug];
}

export function supplierPortalCookie(slug: SupplierPortalSlug) {
  return `ff_supplier_portal_${slug.replaceAll("-", "_")}`;
}

function configuredCode(slug: SupplierPortalSlug) {
  return process.env[codeVariables[slug]]?.trim() ?? "";
}

function signingSecret() {
  return process.env.SUPPLIER_PORTAL_SIGNING_SECRET?.trim() ?? "";
}

function safeEqual(left: string, right: string) {
  if (!left || !right) return false;
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export function supplierPortalIsConfigured(slug: SupplierPortalSlug) {
  return configuredCode(slug).length >= 12 && signingSecret().length >= 32;
}

export function supplierPortalCodeMatches(slug: SupplierPortalSlug, input: string) {
  if (!supplierPortalIsConfigured(slug)) return false;
  return safeEqual(input, configuredCode(slug));
}

export const supplierPortalSessionSeconds = 60 * 60 * 12;

function tokenSignature(slug: SupplierPortalSlug, payload: string) {
  return createHmac("sha256", signingSecret())
    .update(`form-frame-supplier-portal:v2:${slug}:${configuredCode(slug)}:${payload}`)
    .digest("hex");
}

export function expectedSupplierPortalToken(slug: SupplierPortalSlug, now = Date.now()) {
  if (!supplierPortalIsConfigured(slug)) return "";
  const expires = Math.floor(now / 1000) + supplierPortalSessionSeconds;
  const payload = `${expires}.${randomBytes(16).toString("hex")}`;
  return `${payload}.${tokenSignature(slug, payload)}`;
}

export function supplierPortalTokenMatches(slug: SupplierPortalSlug, token: string, now = Date.now()) {
  if (!supplierPortalIsConfigured(slug)) return false;
  const match = /^(\d{10})\.([a-f0-9]{32})\.([a-f0-9]{64})$/.exec(token);
  if (!match) return false;
  const expires = Number(match[1]);
  const current = Math.floor(now / 1000);
  if (expires <= current || expires > current + supplierPortalSessionSeconds) return false;
  return safeEqual(match[3], tokenSignature(slug, `${match[1]}.${match[2]}`));
}

export async function isSupplierPortalAuthorized(slug: SupplierPortalSlug) {
  const supplied = (await cookies()).get(supplierPortalCookie(slug))?.value ?? "";
  return supplierPortalTokenMatches(slug, supplied);
}

// Next's internal request URL can use the listening hostname rather than the
// browser-facing host. Use the incoming Host and deployment proxy protocol for
// origin validation and redirects, never a user-provided destination parameter.
export function supplierPortalRequestOrigin(request: Request) {
  const url = new URL(request.url);
  const host = request.headers.get("host");
  if (host) url.host = host;
  const protocol = request.headers.get("x-forwarded-proto");
  if (protocol === "https" || protocol === "http") url.protocol = `${protocol}:`;
  return url.origin;
}

export function supplierPortalRequestAllowed(request: Request) {
  const origin = request.headers.get("origin");
  return (!origin || origin === supplierPortalRequestOrigin(request)) &&
    request.headers.get("sec-fetch-site") !== "cross-site";
}
