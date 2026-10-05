# B15 — Gallery visibility and order

Owner's requested update, 5 October 2026. Baseline: master `a3719a05aec09ec48ab89607ccb15473ad2f6e46`. Branch: `b15-gallery-visibility-order`.

## Hidden projects

G46, G26, G23, G21 and G22 are unpublished from the gallery, search, filters, related projects, joinery service recommendations and sitemap. Their gallery routes return 404/noindex and their enquiry project references are no longer accepted.

All 54 project records and 273 photographs remain saved; 49 projects are public. This is reversible publication control, not authenticated protection of existing image URLs.

## Bottom selection

The final eleven cards appear in this owner-specified order:

G12 → G13 → G15 → G17 → G16 → G06 → G11 → G07 → G04 → G02 → G03.

The same relative order applies when searching or filtering. Family grouping continues for the other projects; this explicit bottom selection takes precedence. G-numbers, project contents, image ordering and public URLs of the remaining projects are unchanged.

## Maintenance and verification

- Central settings: `app/lib/gallery-visibility.ts`. Remove an ID from `hiddenGalleryIds` and redeploy to restore the saved project. Change `bottomGalleryIds` only on the owner's direction.
- Production build passes. Lint has no errors and two existing unrelated warnings.
- Gallery suite: 24 applicable checks pass across desktop/mobile; two redundant mobile HTTP checks are skipped. The first new mobile ordering check read before navigation finished; it now waits for the filtered result and passed a focused desktop/mobile rerun.
- Checks cover all 49 public routes, canonical URLs, sitemap, all five hidden routes/search/enquiry references, recommendations, service links, ordering, filters, photo dialogs and private gallery access.
- Publication uses the numbered B15 PR, verified Vercel preview, merge to master and live checks. Keep the per-operation fuse: diagnose and change approach if an operation fails repeatedly.
- Next new website batch: B16. Next unassigned gallery ID: G62. G40 remains reserved.
