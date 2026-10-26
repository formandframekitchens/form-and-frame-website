import { pathToFileURL } from "node:url";
import { writeFile } from "node:fs/promises";

export const PUBLIC_ORIGIN = "https://formandframekitchens.co.uk";
const checks = [
  { path: "/", type: "text/html", markers: [/Form\s*(?:&amp;|&)\s*Frame/i, /Kitchen/i] },
  { path: "/kitchen-installation", type: "text/html", markers: [/Kitchen/i, /300/, /href=["']\/contact/] },
  { path: "/contact", type: "text/html", markers: [/name=["']message/, /name=["']privacyAccepted/, /Send enquiry/] },
  { path: "/robots.txt", type: "text/plain", markers: [/Sitemap:\s*https:\/\/formandframekitchens\.co\.uk\/sitemap\.xml/i, /Disallow:\s*\/private-case-studies/i] },
  { path: "/sitemap.xml", type: "xml", markers: [/<urlset\b/, /https:\/\/formandframekitchens\.co\.uk\/kitchen-installation/] },
];

async function readBounded(response, maxBytes) {
  if (Number(response.headers.get("content-length")) > maxBytes) throw new Error("body_too_large");
  if (!response.body) return "";
  const reader = response.body.getReader(); const parts = []; let count = 0;
  try {
    for (;;) { const { done, value } = await reader.read(); if (done) break; count += value.byteLength; if (count > maxBytes) throw new Error("body_too_large"); parts.push(value); }
    return Buffer.concat(parts).toString("utf8");
  } finally { await reader.cancel().catch(() => {}); reader.releaseLock(); }
}

export async function runHealthCheck({ fetcher = fetch, timeoutMs = 7000, maxBytes = 2 * 1024 * 1024 } = {}) {
  const results = [];
  for (const check of checks) {
    const started = Date.now();
    try {
      const response = await fetcher(new URL(check.path, PUBLIC_ORIGIN), { method: "GET", redirect: "manual", signal: AbortSignal.timeout(timeoutMs), headers: { "User-Agent": "FormAndFrame-OwnerHealthCheck/1.0", "Accept": check.type === "xml" ? "application/xml" : check.type } });
      if (response.status !== 200) { await response.body?.cancel(); results.push({ path: check.path, ok: false, status: response.status, reason: "http_status", elapsedMs: Date.now() - started }); continue; }
      if (!(response.headers.get("content-type") || "").includes(check.type)) { await response.body?.cancel(); results.push({ path: check.path, ok: false, status: response.status, reason: "content_type", elapsedMs: Date.now() - started }); continue; }
      const body = await readBounded(response, maxBytes);
      const noindex = check.type === "text/html" && (/noindex/i.test(response.headers.get("x-robots-tag") || "") || /<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(body));
      const missing = check.markers.some(marker => !marker.test(body));
      results.push({ path: check.path, ok: !missing && !noindex, status: response.status, reason: noindex ? "unexpected_noindex" : missing ? "critical_content_missing" : "passed", elapsedMs: Date.now() - started });
    } catch (error) {
      results.push({ path: check.path, ok: false, reason: error?.message === "body_too_large" ? "body_too_large" : "request_failed_or_timed_out", elapsedMs: Date.now() - started });
    }
  }
  return { checkedAt: new Date().toISOString(), origin: PUBLIC_ORIGIN, ok: results.every(r => r.ok), checks: results, limitation: "GET/content availability only; does not test inbox delivery, private access, rankings or customer conversion." };
}

export function incidentTransition(previous, current) {
  const signature = current.checks.filter(r => !r.ok).map(r => `${r.path}:${r.reason}:${r.status ?? ""}`).sort().join("|");
  const previousSignature = previous?.checks?.filter(r => !r.ok).map(r => `${r.path}:${r.reason}:${r.status ?? ""}`).sort().join("|");
  return { signature, state: signature ? previousSignature === signature ? "ongoing" : "new_or_changed" : previousSignature ? "recovered" : "healthy", notificationSent: false };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const report = await runHealthCheck();
  if (process.argv[2]) await writeFile(process.argv[2], JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify(report, null, 2));
  if (!report.ok) process.exitCode = 1;
}
