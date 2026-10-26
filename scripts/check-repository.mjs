import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
const tracked = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" }).split("\0").filter(Boolean);
const forbidden = /(^|\/)(?:\.env(?:\.|$)|private-media\/|private-review\/|private-data\/|marketing\/|test-results[^/]*\/)|^app\/lib\/private-portfolio\/.*\.json$/;
const failures = tracked.filter(file => forbidden.test(file));
const secretPatterns = [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, /\b(?:ghp_|github_pat_|gho_)[A-Za-z0-9_]{25,}/, /\bvercel_blob_rw_[A-Za-z0-9_]{15,}/];
for (const file of tracked.filter(file => /\.(?:[cm]?[jt]sx?|json|ya?ml|md|txt|css)$/.test(file))) {
  if (file === "scripts/check-repository.mjs") continue;
  const text = readFileSync(file, "utf8");
  if (secretPatterns.some(pattern => pattern.test(text))) failures.push(file + " (possible credential)");
}
if (failures.length) throw new Error("Repository publication check failed:\n" + failures.join("\n"));
console.log(`Repository publication check passed for ${tracked.length} tracked paths.`);
