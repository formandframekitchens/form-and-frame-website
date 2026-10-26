// This reconciled public branch intentionally excludes the private deployment
// catalogue. Production must use the separately checked existing full source;
// a private-catalogue migration is not part of this public release.
export function assertPreviewTarget(env = process.env) {
  if ([env.VERCEL_ENV, env.VERCEL_TARGET_ENV].includes("production")) {
    throw new Error("Preview-only branch: use the private-preserving full source after owner production approval. Never promote synthetic fixtures.");
  }
}
assertPreviewTarget();
