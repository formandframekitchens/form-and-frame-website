# Form & Frame Website Development Workflow

## Current sequence - 9 October 2026 / B23–B27 integration

- Integration branch: `b23-b27-integration`, PR #98, based on latest `master` with live B22.
- B23: wardrobe-mark/header/footer lock-up; `/brand/form-and-frame-lockup.svg` and 1440×320 PNG for email signatures. Display at 360×80 or smaller, link the complete logo to `https://formandframekitchens.co.uk/`, and use alt text `Form & Frame`. The PNG is generated from the committed SVG, never a replacement for the approved brand geometry.
- B24: Google reviews/trust is empty until verified reviews or a checked Google Business Profile review URL is configured. See `docs/google-reviews.md`. No fabricated reviews or self-serving rating schema.
- B25: three first-party “Latest from Form & Frame” items in `app/lib/social-content.ts`, with outbound Instagram measurement. Use only verified profile/post links and existing approved public images; no third-party widget.
- B26: four server-gated supplier presentations. See `docs/supplier-portals.md` for secure environment configuration and rotation. Missing configuration fails closed; private routes are noindex and absent from sitemap/navigation. B22 public supplier tracking remains intact; private view events require the authorized server-rendered marker and GA readiness.
- B27: `/case-studies/k01-surbiton` is an editorial draft, noindex and excluded from the sitemap and public portfolio links. Verified project facts only; no fabricated or unapproved media. See `docs/case-studies.md` for the publication gate.
- B22: all existing page/contact/enquiry/gallery/public-supplier GA4 events and privacy controls are retained. `NEXT_PUBLIC_GA_MEASUREMENT_ID` remains required to collect analytics. No enquiry PII or query strings are added to new events.
- Existing gallery routes, visibility, image ordering, approved assets and enquiry behavior are preserved.
- B28 is reserved as the next batch and is **not implemented** here; next unassigned gallery: G78.

### Validation and local development

Use the existing checkout; each cloud task is isolated. Run `npm ci`, `npm run lint`, `npm run build`, and `npx tsc --noEmit`. Start local development with `npm run dev`. Build before production-backed browser tests: `CI=1 npm run test:e2e`. The runner provides explicit local-only access fixtures and disables real email delivery/review claims. Production credentials belong only in deployment settings.

If Playwright browser downloads are unavailable but system Chromium is installed, use `PLAYWRIGHT_EXECUTABLE_PATH=/usr/bin/chromium CI=1 npm run test:e2e`. The two-worker suite covers desktop and mobile. Use `B23_B27_GA_TEST=1 NEXT_PUBLIC_GA_MEASUREMENT_ID=G-CODEXTEST npm run build` followed by `B23_B27_GA_TEST=1 NEXT_PUBLIC_GA_MEASUREMENT_ID=G-CODEXTEST PLAYWRIGHT_EXECUTABLE_PATH=/usr/bin/chromium CI=1 npm run test:e2e -- tests/integration-analytics.spec.ts` for intercepted, non-network analytics assertions. Rebuild without the test ID afterward; never deploy a test measurement ID.

## Previous sequence - B22

B19/B20 portfolios and local enquiries and B21 AI concept-image disclosures remain live and unchanged.

## Branch numbering

Every new development batch uses one increasing branch number.

Format:

- Codex task: `[B06] Short task name`
- Git branch: `b06-short-task-name`
- Pull request: `[B06] Short task name`
- Vercel preview: automatically inherits the same Git branch name
- Merge commit: `[B06] Short task name`
- Production / solid version: `master`

## Meaning

### TEST
Any numbered `bNN-...` branch is a development/test version.

Example:

`b06-supplier-logos`

This is the version reviewed in Vercel before production.

### SOLID
`master` is the approved live production version.

We do not create a second "solid" branch for each task. Once a numbered test branch is approved, it is merged into `master`.

This keeps the structure simple:

`B06 TEST -> preview in Vercel -> approved -> merge to master SOLID`

### Previous sequence (B18)

- B18 — Form & Frame wardrobe favicon with gold handles, browser and phone icons.
- Branch: `b18-brand-favicon`.
- Next new website batch: B19; next unassigned gallery: G78.

### Previous sequence (B17)

- B17 — Local bespoke joinery and kitchen SEO, gallery descriptions and image naming.
- Branch: `b17-local-bespoke-seo`.
- Existing gallery numbers, page routes, hidden selections and bottom order retained.
- Next new website batch: B18; next unassigned gallery: G78.

### Previous sequence (B16)

- B16 — Professional joinery galleries and item separation.
- Branch: `b16-professional-joinery-galleries`.
- G62–G77 add the confirmed Esher, Aram-source and Belgravia furniture items.
- Next new website batch: B17; next unassigned gallery: G78.

### Previous sequence (B15)

- B15 — Owner-directed gallery visibility and bottom ordering.
- Branch: `b15-gallery-visibility-order`.
- Next new website batch: B16; next unassigned gallery: G62.

### Previous sequence (B14)

- B14 — Owner-directed gallery photo corrections and Manchester merge.
- Branch: `b14-gallery-photo-corrections`.

### Previous sequence (B13)

- B13 — Gallery completion, navigation, enquiries and content reconciliation.
- Branch: `b13-gallery-completion`.
- Four already prepared gallery branches retain their assigned G57–G60 lane names; each is integrated and verified separately under this batch.
- Next new website batch: B14. Check remote branches before assigning it in case another task has reserved a later number.
- Earlier B07–B12 work exists in repository history. Numbers are never reused.

## Historical sequence (superseded)

Current development batch:

- B06 — Bespoke joinery selection and category pages
- Git branch: `b06-bespoke-joinery`

Previous approved batch:

- B05 — Services hub and kitchen selection flow, merged into `master`

Next development batch:

- B07 — next website change

Then:

- B08
- B09
- etc.

Numbers are never reused, even if a branch is abandoned.

## Naming rules

1. Always use two digits: B05, B06, B07.
2. Git branch names use lowercase `bNN-`.
3. Keep the descriptive part short and readable.
4. Codex instructions always state the branch number at the top.
5. PR titles always begin with the same branch number.
6. Vercel previews should therefore display the same numbered Git branch.
7. After approval, the merge commit into master also begins with the same branch number.
8. Never start a new website batch without assigning the next number first.

## Example

Codex:
`[B06] Add supplier logos and brand assets`

Git:
`b06-supplier-logos`

PR:
`[B06] Supplier logos and brand assets`

Vercel:
preview for `b06-supplier-logos`

Production:
merge to `master` with commit title `[B06] Supplier logos and brand assets`
