# B28 — gallery-first joinery, archive photographs and news

Owner instruction: 13 October 2026. Base: `3d2f7c22ac38d1b1b1dd6a750cd614ef90be9a8b`.

The architect writes the brief and reviews a separate Codex author's implementation. The author implements and tests on `b28-gallery-first-news`. The architect reviews the exact commit's preview, approves and merges to `master`, then verifies production. The owner explicitly authorised production merging without another confirmation for this development work. This does not authorise spending, outreach or unverified business claims. Existing runner settings are unchanged.

## Implemented scope

- `/bespoke-joinery` opens with real project galleries, compact native search/filter controls and project enquiries. Service and category guidance remains below the portfolio. The old `/bespoke-joinery/projects` URL redirects permanently while preserving its query string; category URLs remain available.
- 31 archive gallery groups, G78–G108, and one extra G29 view use 69 approved web images with unchanged bytes. 277 already-present images are not imported again. The result is 96 public groups / 346 public gallery photographs. Five hidden records and the owner's bottom order remain unchanged. Gallery groups are not asserted to be separate commissions. K01 remains a separate unpublished case-study draft.
- Public provenance explains that Arnas's archive includes collaborative work. Installation-stage photographs are distinguished from finished-room claims. New descriptions avoid unsupported locations, exact materials and sole-manufacture claims.
- Three original dated articles, `/news`, article metadata/schema, source links, RSS and contextual portfolio links. Existing project photographs are explicitly not presented as supplier range photographs. Source-check dates do not imply manufacturer launch dates.
- Next and its ESLint configuration patched from 16.3.5 to 16.3.8; locked transitive `sharp` and `source-map-js` updated to compatible fixes. No major-version audit downgrade applied.

## Evidence and safeguards

`docs/gallery/b28-import-manifest.json` records source repository commit, public gallery URL, destination path and SHA-256 for each imported image. It deliberately excludes private source metadata. No originals were deleted or bulk duplicated. The existing Google reviews, supplier access, analytics privacy, AI concept disclosures and enquiry delivery controls remain in place.

Daily marketing scheduling is a separate owner decision after reviewing the architect's proposed strategy. B28 does not start a background runner or schedule.

## Validation

Run lint, TypeScript, production build, portfolio/joinery/gallery/news/SEO and enquiry/privacy-related checks. Review desktop/mobile screenshots and then the exact Vercel preview commit before merging. Record actual results in the release handoff; this brief alone is not verification evidence.

Author checks on 13 October 2026: production build (141 generated pages), TypeScript and lint passed; lint retains one pre-existing raw-image warning in the private progress gallery. The gallery/joinery/portfolio/news/SEO suite reached 52 passed and four viewport-independent skips across its initial run and corrected focused reruns. A further protected-portal, enquiry-validation, analytics-privacy, branding, trust and case-study regression selection passed 53 tests with one viewport-independent skip. Image assertions continue to require loaded photographs with a positive natural width.

Setup/recovery record: sandbox dependency download failed DNS resolution once; the network-authorised retry succeeded. Sandbox SWC path canonicalisation failed once; the authorised local build succeeded. Initial browser checks hit a stale AI-disclosure test expectation and local image-request/load delays. The disclosure assertion now matches the existing “AI concept image” wording. No-JavaScript navigation waits for the usable document rather than every eagerly fetched below-fold image. Two G44 bookcase checks still failed on a pending local responsive-image request; the original and responsive endpoints returned 200, and both checks passed against the persistent local preview after the exact image request was verified. Independent exact-preview verification of that hero remains a release gate; these checks do not establish an upstream image defect.

Dependency audit after patching: production dependencies report zero findings. The full development audit retains five high-severity entries in the `braces` → `micromatch` → `fast-glob` → Next ESLint plugin/configuration chain. The audit's proposed downgrade to ESLint configuration 14.2.35 is not applied. Locked versions are Next/ESLint configuration 16.3.8, sharp 0.35.5 and source-map-js 1.2.2.
