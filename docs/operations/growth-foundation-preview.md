# Reconciled preview foundation

This branch restores the approved public website state from the recorded live-source snapshot and adds dependency and PR verification work. It is **preview-only**. Production remains on the existing deployment until the owner approves a separately reviewed release.

## Source and old PR decisions

The live source and current remote master share base commit `5b939da`. The local parent checkout is not the deployment source. All 1,115 recorded deployment files matched before reconciliation. Public application code and approved public media were copied into this isolated branch.

Drafts #102, #104 and #106 contain older joinery disclosure/layout checks plus runner notes. #108 also changes one bookcase description. Their patches were inspected. They are not merged here: current approved layouts, all-project galleries and content remain the baseline. The drafts remain open for separate disposition; this work does not claim every old proposal was adopted.

## Private-data boundary

Private project narratives, catalogues, captions, media indexes, source photographs and environment files are excluded. The private routes use synthetic data to test authentication, session expiry, origin checks and denial of unauthenticated media. There are no real private media paths in the fixture.

The prebuild guard rejects Vercel production targets. **Do not remove that guard or promote this deployment.** An approved secure private-data migration and production review are prerequisites. The untouched live source retains the real portfolio.

Hosted previews omit Google Analytics and reject enquiry submissions before parsing or calling the mail provider. A dedicated preview-build test verifies both boundaries with a fake measurement ID and synthetic request.

## Dependency changes

Next.js and eslint-config-next are pinned to16.4.3. The undici lockfile is updated. A scoped Zod4.6.7 override replaces the older version pinned by @vercel/cli-config, retaining Blob2.8.0. Remove the override when the upstream chain supports a patched version. Audit checks and application tests validate the candidate; an audit result alone is not proof of exploitability or a penetration test.

## Review and release process

1. Commit sanitized source to a codex/ branch and open a draft PR.
2. Run the Preview quality workflow: publication screen, production dependency audit, lint, release-guard tests, build, types and focused desktop/mobile browser tests.
3. Build a protected preview for the exact revision. Do not disable hosting protection or create bypass links.
4. Review public visuals and behaviour plus synthetic access controls. No real enquiry test or real customer email is sent.
5. Present test evidence and remaining migration requirements to the owner.
6. Production remains a separate approval and cannot use this synthetic-data preview as-is.

GitHub master was observed without branch protection. This PR adds checks; it does not silently claim required-check enforcement or change repository permissions. Legacy gallery automations are scoped to their historical branches/manifests and are not triggered by this PR's files.

## Local checks

`npm ci`, `npm run check:repository`, `npm run test:guards`, `npm run lint`, `npm run build`, `npm run typecheck`, `npm run test:ci`.

Browser tests run on loopback with explicit fake local credentials. Preview deployments must use their own existing authorized environment configuration. Never copy production secrets into CI or commit local environment files.
