# Master Runner pilot 001

## Identity and scope

- Task ID: `form-frame-runner-pilot-001`.
- Repository: `formandframekitchens/form-and-frame-website`.
- Required and observed HEAD: `0fb230f1df1c3e635734614cc7df88832684b4a3`.
- Author check date: 12 October 2026, Windows PowerShell.
- Author status: **blocked** by incomplete E2E validation.
- Sole authored path: `docs/operations/master-runner-pilot-001.md`.

This owner-authorised documentation-only pilot exercises queue pickup, a fresh dependency setup by the parent, authoring in a second repository, independent parent gates and exact draft delivery. Receiving and executing this task is author-side evidence of pickup; it does not independently verify the parent's queue or setup logs.

The task brief says the parent prepares this exact checkout with `npm.cmd ci` before authoring. `node_modules` was present, and the checks used it. The author did not run an installation, approve scripts or independently witness the parent's dependency-install result. No package manifest or lockfile was changed.

## Instructions and preservation

Read root `AGENTS.md`, `README.md`, `docs/development-workflow.md`, `docs/tasks/b23-b27-integration.md`, `docs/website-audit/implementation-report.md`, `docs/website-audit/content-register.md`, `docs/analytics.md` and `docs/case-studies.md`. Inspected the package scripts and Playwright configuration. Read the installed Next.js Node.js deployment guide at `node_modules/next/dist/docs/01-app/01-getting-started/17-deploying.md`, which requires building before starting the production server.

The task's explicit restrictions override general workflow instructions to install dependencies or start development. Only the required configured production-backed E2E invocation started a local server; no watcher was started. Website code, tests, configuration, assets, package manifests and lockfile were not authored or changed. Existing preflight fixes are retained. No Valdas edits, credentials reads, permission changes, commits, pushes, PR creation, merges or deployments were performed.

Verified facts and provenance remain governed by existing records. No fabricated projects, reviews or media were added. Existing AI-image disclosures, analytics privacy constraints, private supplier access controls and noindex/sitemap exclusions remain unchanged. K01 remains an editorial draft subject to its owner approval, client permission and cleared genuine-media publication gate. This document contains no private logs or credentials.

The supplied base includes unmerged PR102 fixes, according to the task brief. This pilot neither supersedes PR102 nor authorises production release. Historical npm audit concerns remain unresolved historical findings: no fresh audit was run, no vulnerability counts are asserted here and no dependency fixes are claimed.

## Actual author checks

Commands ran in the required order using the existing dependencies.

| Command | Actual result | Evidence and limits |
| --- | --- | --- |
| `npm.cmd run lint` | Passed, exit 0 | ESLint reported 0 errors and 1 warning: existing `@next/next/no-img-element` at `app/progress-gallery/page.tsx:89:19`. Warning remains unresolved. |
| `npm.cmd run build` | Passed, exit 0 | Next.js 16.3.5 compiled successfully, finished its TypeScript stage and generated 106/106 static pages. A missing-build-cache warning was emitted. This is local build evidence, not deployment evidence. |
| `node node_modules/typescript/bin/tsc --noEmit` | Passed, exit 0 | No diagnostics. |
| `npm.cmd run test:e2e`, with process-local `CI=1` | Incomplete; blocked | Playwright announced 124 tests using 2 workers. Progress contained pass/skip markers and a `T` timeout marker; the server emitted `Internal: NoFallbackError` messages. The process then remained silent for several minutes without a final summary. The author sent Ctrl+C to stop the stalled invocation; it returned exit 1 without further output. |

E2E final passed, failed, skipped and interrupted counts are **unavailable**, not zero. No final `.last-run.json` was available when checked before interruption. No failed test identity or assertion detail was returned. The 124 announced tests are a scheduled total, not a completed-test count. Skip markers were observed, so this report does not claim all tests ran. The task brief's previous operator result of **113 passed / 11 skipped** is historical evidence only and is not the result of this invocation.

No exact `taskkill` / `Access is denied.` denial was observed. Consequently the `source_completed_validation_deferred` exception does not apply. The timeout marker and incomplete run remain unresolved; no assertions were weakened, sandbox bypass attempted or second server-owning test run launched. Ctrl+C ended the command session; successful cleanup of the owned browser server was not independently verified and remains a limitation for the parent to inspect.

Initial `git status --short` showed a clean checkout. A subsequent ordinary `git diff --name-only` emitted Windows filename-length errors for existing asset paths. Read-only checks using command-local `git -c core.longpaths=true` succeeded and showed no tracked changes before document authoring; no persistent Git setting was changed. Final scope verification uses the same command-local option.

## Separate lifecycle gates

1. **Author checks:** the three checks above passed; E2E is incomplete. This documentation is authored, but the pilot is blocked and cannot be represented as fully validated.
2. **Independent parent validation:** pending. The parent must independently run the configured full build/lint/E2E validation and resolve the incomplete author E2E outcome before draft publication. Parent validation results are not present in this report.
3. **GitHub draft publication:** not performed. The parent must deliver the exact reviewed change through the normal lifecycle only after its gates pass. No draft URL or delivery SHA exists from this author session.
4. **Vercel exact-SHA preview review:** not performed. Any later preview must be tied to the exact delivered SHA and reviewed under normal owner approval policy; a local build is not preview approval.
5. **Production:** not performed or authorised by this pilot. Normal approval and merge/release policy remains in force, including the separate PR102 status.

The unresolved E2E run prevents claiming successful end-to-end pilot delivery. Later lifecycle stages must record their own genuine results rather than inheriting the historical preflight counts or these local build results as approval.
