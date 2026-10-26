// This reconciled public branch intentionally excludes the private deployment
// catalogue. A separate reviewed migration is required before production.
export function assertPreviewTarget(env = process.env) {
  if ([env.VERCEL_ENV, env.VERCEL_TARGET_ENV].includes("production")) {
    throw new Error("Preview-only branch: private-data reconciliation and owner production approval are still required.");
  }
}
assertPreviewTarget();
