# B16 — Professional joinery galleries

Owner-authorised publication from the 5 October 2026 professional-photo audit. Baseline master: `215ab5b2d885f3b6b9361bed687b473ad05ac168`. Branch: `b16-professional-joinery-galleries`.

## Item register

| ID | Furniture | Source | Photos |
| --- | --- | --- | --- |
| G62 | Esher entrance wardrobe and bench | 8 Leys Road E0001–E0003 | 3 |
| G63 | Esher decorative mirrored wardrobes | 8 Leys Road M0043–M0047 | 5 |
| G64 | Dining display and drinks cabinet | Aram 19, 17, 21, 14, 13, 15 | 6 |
| G65 | Lift-up mirror dressing table | Aram 22, 31, 29, 25, 27, 30 | 6 |
| G66 | Fitted eaves cupboard | Aram 32 | 1 |
| G67 | Bedroom TV cabinet | Aram 33, 34 | 2 |
| G68 | Ventilated eaves cabinet | Aram 35 | 1 |
| G69 | Sloping-ceiling bathroom storage | Aram 36–39 | 4 |
| G70 | Belgravia bedroom wardrobe | IMG_9826_1, 9825, 9830, 9838 | 4 |
| G71 | Belgravia bedroom study desk | IMG_9807, 9768, 9789 | 3 |
| G72 | Belgravia living-room TV wall | IMG_0063_1 | 1 |
| G73 | Belgravia headboard and bedside cabinets | IMG_0021_1, 0034_1, 0035_1 | 3 |
| G74 | Belgravia round-basin vanity shelf | IMG_0060_1 | 1 |
| G75 | Belgravia rectangular-basin vanity | IMG_9977, 9990_1 | 2 |
| G76 | Belgravia light fitted study desk | IMG_9711_2, 9713 | 2 |
| G77 | Belgravia padded headboard and bedroom storage | IMG_9742_1, 9761, 9740, 9749, 9763_2 | 5 |

The final photo-level review corrects two groupings in the initial audit: the pale study desk is separate from the darker bedroom desk; the curved padded bed wall is separate from the flatter bed wall/bookcase scheme. Hence 16 new galleries rather than the initial 14. IMG_9763_2 stays with the earlier bedroom scheme as a wardrobe-edge detail, not with the later glossy wardrobe.

## Existing galleries

- G35 now focuses on the bed wall and bookcases (IMG_9814_2, 9817, 9823_1), with its complete view first.
- G36 retains the decorative-bowl cloakroom vanity; the other two bathrooms move to G74/G75.
- G38 retains dining display cabinetry; the living-room TV wall moves to G72.
- G39 retains the integrated TV/dressing-table wall, with an overall view first; bed/bedside furniture moves to G73.
- G41 retains the four dark walk-in wardrobe views; entrance and decorative mirrored wardrobes move to G62/G63.
- All established gallery routes remain unchanged. Old image URLs remain available for existing links, but each photograph is assigned to one current gallery only.
- G47 retains its public name and URL. Its source family's new furniture is grouped beside it through an internal catalogue mapping. Source client/designer names and unconfirmed locations are not added to public titles, URLs or image names.

## Photo and content integrity

- 70 saved projects, 65 public projects, 299 unique current photo references.
- 69 photographs prepared across the new and narrowed galleries: 45 authenticated HIGH RES downloads/cached originals verified against the audit SHA-256 values, plus 24 previously verified web assets retained without recompression.
- 138 WebP/AVIF assets. Maximum long edge 2000px, WebP target 500KB, AVIF target 400KB, full aspect ratio retained. No invented views, crops or upscaling.
- Each published photo has an item-specific filename and individually written visible-content caption/alt text. New and narrowed pages have distinct summaries, descriptions, keywords, highlights and case-study copy.
- [Photo register](b16-photo-register.csv) maps each source to its gallery, output name and caption. [Encoding results](image-jobs/results/b16-professional-joinery.json) record original dimensions, source hashes, output hashes and Git blob SHAs.
- Source Drive folders and originals remain unchanged. No signed download URLs or credentials are committed.

## Preserved decisions and held material

All B14 corrections and B15 settings remain intact. G46/G26/G23/G21/G22 remain hidden; the eleven bottom cards retain the owner's order. G28/G40/G53 are not recreated. Removed B0007 is not restored. Private Alex photographs remain outside the public gallery.

The second Stourcliff bedroom is still awaiting an identifying filename; existing G49/G51 are preserved. Stourcliff photo 45 and Aram 40–42 remain supporting/limited views, not new complete-furniture galleries. The Aram photo-35 cabinet is described by its visible grille rather than asserting an unconfirmed radiator function.

## Verification and publication

Production build passes. Lint has no errors and two pre-existing unrelated warnings. Asset verification covers all 138 checksums/blob SHAs, valid aspect ratios, unique current photo references and all 49 unaffected records.

The gallery browser suite passes 24 checks; two duplicate mobile HTTP checks are skipped. It covers new pages on desktop/mobile, image loading, single-image controls, enquiry prefill, filters, hidden routes, sitemap, canonicals, private access and bottom ordering. The Windows test-server cleanup stalled after every check had finished; stopping only that run's leftover port-3105 server released the successful exit. Publication proceeds through the numbered PR, a verified Vercel preview, merge to master and production verification. The user's current instruction authorises the merge and release.

Next website batch: B17. Next unassigned gallery: G78. G40 remains reserved.
