# B14 — Owner-directed gallery photo corrections

Baseline: master `66c1b99c1688869691102d93cda96fd7b2415724`, 5 October 2026. All image numbers below refer to the owner's original live ordering at that commit, before any moves.

## Exact reassignment

| Original reference | Result |
| --- | --- |
| G51 image 2, closed wardrobe doors | G51 cover and image 1; old image 1 becomes image 2; wardrobe classification retained |
| G28 complete gallery | Merged into G27, retaining six unique photographs; shared overall photo appears once |
| G43 image 4, C0054.jpg | Appended to G44 as image 5 |
| G43 image 5, B0007.jpg | Removed from all galleries and both public WebP/AVIF files deleted |
| G43 image 6, A0007.jpg | Appended to G45 as image 6 |
| G45 images 6 and 7, B0001.jpg / B0004.jpg | New G61 — Esher Luxury Residence — Modern Alcove Units; complete room view first, individual unit second |
| G45 images 8 and 9, h0018.jpg / h0024.jpg | Appended to G43 as images 4 and 5, showing the seating area in the same home-office project |

G45 images 6 and 7 show the same modern alcove installation; they form one new gallery. The established public place name remains Esher, Surrey. The new title distinguishes these units from G45's illuminated alcoves in the rooflit room.

Final image counts: G51 5; G27 6; G43 5; G44 5; G45 6; G61 2. Public total remains 54 galleries, now with 273 distinct image references/files. The other 48 project records are unchanged.

G28 is retired and never reused. Its old gallery URL permanently redirects to G27, searching G28 finds G27, and old enquiry project references resolve to G27. G61 belongs to the alcove-unit and bookcase filters; its enquiry selects alcove units. Manchester remains primarily classified as wardrobes and is also discoverable under unique furniture.

## Source integrity and operating checkpoint

- These dependent reassignments use already published canonical photographs and are integrated together on `b14-gallery-photo-corrections`. Keeping the correction together avoids temporarily duplicating or orphaning moved photographs.
- All 38 WebP/AVIF files in the three affected Esher ingest reports passed SHA-256 and Git blob SHA verification before reassignment/removal. No new ingest, image generation or destructive crop was required.
- Existing image URLs for retained photographs remain stable. Original ingest reports remain historical provenance; this document is the authoritative gallery assignment correction. Do not re-add B0007.jpg from the old G43 source manifest.
- Covers, captions, descriptions, search classifications and enquiry references were checked against the corrected photo sets. G51's copy now accurately describes the shoe cupboard behind doors.
- Production build passed. Lint: no errors, two pre-existing warnings. Existing gallery suite: 21 passed, one redundant mobile route check skipped.
- Targeted desktop/mobile browser checks passed for all six galleries: exact thumbnail order, closed-door cover, image loading, classification, enquiry prefill/landing position, G28 redirect/search and legacy enquiry reference; no page errors.
- Local HTTP checks passed for all affected routes, image URLs, canonical links, sitemap changes, the 308 redirect and both removed asset URLs returning 404.
- Status: verified locally; next checkpoint is exact-head Vercel preview, then merge and live verification. Two repeat failures park only the affected operation; diagnose and change approach rather than retrying indefinitely.
- Next new batch: B15. Next unassigned gallery ID: G62. G40 remains reserved.
