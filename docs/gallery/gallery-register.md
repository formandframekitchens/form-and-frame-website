# Form & Frame Gallery Register

This is the permanent internal tracking register for website gallery case studies.

## Current checkpoint — 5 October 2026 / B14

Resume from [B14 photo corrections](b14-photo-corrections.md). Owner-approved photo reassignments are LIVE via PR #77 / merge `63b003b`; production `dpl_EL4zQfhSWxViiASzJMqWhun1ZNRC` is READY. All six affected galleries, image assignments, redirects and enquiry flows passed live desktop/mobile verification.

- G51 uses the closed-door wardrobe image as its cover/first photo and remains classified as wardrobes.
- G28 is merged into G27. G27 now includes all six unique Manchester wardrobe, island and dressing-table photos. G28's URL redirects permanently and its number is retired.
- G43's original images 4 and 6 move to G44 and G45 respectively. Its original image 5 is removed from the public website. G45's original images 8 and 9 move to G43 as the same home-office room.
- G61 — Esher Luxury Residence — Modern Alcove Units contains G45's original images 6 and 7, showing one separate installation.
- Result: 54 public project records and 273 unique photographs. Other gallery records are unchanged. Exact source filenames and original image-number mapping are recorded in the B14 document.
- Next unassigned gallery ID: G62. Next development batch: B15. G40 remains reserved; do not reopen the duplicate proposal.

## Historical checkpoint — B13 (superseded by B14)

The previous resume pointer at the end of this file is historical. Resume from [B13 completion](b13-completion.md), which records the approved corrections and four prepared lanes.

- B13 shared corrections: LIVE via PR #71 / merge 0d28003; production dpl_8kpjDr4ADvUnvkaZbNnPmG97ih8M READY and public gallery verified. Search, category filters, real-project links, project-aware enquiries, photo-dialog accessibility and private access requests are active.
- Final public set: 54 records, 275 image references and 274 unique photographs, including all four additions. Every route and public image passed live verification. G53 is merged into G01; its old URL redirects permanently. G01 retains the established route and uses the 12 clean HIGH RES kitchen photographs.
- G12 and G31 now lead with full furniture views. G28 leads with the full island/table image already verified in the same Manchester project (also used in G27). G32 copy describes the pale illuminated alcove units shown in its photographs.
- G40 remains reserved. PR #68 duplicates h0024.jpg already included in G45 and was closed as superseded on 5 October.
- G57–G60 below are the four distinct prepared projects. Competing draft branches for Fulham media wall, Garsdale wardrobes, shoe storage and study bookcase duplicate G32, G27, G07 and G12 respectively; do not integrate those proposals.
- All 34 prepared WebP/AVIF assets passed SHA-256 and Git blob SHA checks. G57 excludes its WEB RES copy; G58 selects three distinct views and omits three near-identical repeats. G60 has one verified full-piece source viewed through a doorway; no wider honest source is available.

| New ID | Prepared branch | Public selection | Status |
| --- | --- | --- | --- |
| G57 | g57-full-wall-white-library-bookcase | Four HIGH RES views | LIVE: PR #72, production route verified |
| G58 | g58-esher-bathroom-vanity-mirror | Three distinct HIGH RES views | LIVE: PR #73, production route verified |
| G59 | g59-traditional-radiator-covers-shelving | Five HIGH RES views; complete radiator cover first | LIVE: PR #74, production route verified |
| G60 | g60-esher-make-up-table | One HIGH RES overall view | LIVE: PR #75, production route verified |

Next unassigned stable gallery ID is G61. Additional unreviewed archive projects remain source-review work. The protected Alex selection remains private and is not part of the public project count.

Rules:
- Tracking number is a stable development ID (G01, G02, etc.). It is shown as a small badge on gallery cards and project pages, but is not added to public SEO titles.
- One distinct furniture item can become its own case study even when several items are from the same property.
- Only strong completed-project photography is promoted into the main gallery.
- Weaker projects remain at the bottom or on HOLD.
- Every new gallery follows the same lane sequence: source review -> item split -> image selection -> HIGH RES mapping -> ingest/optimisation -> Git blob SHA verification -> SEO/case study -> Vercel preview -> route verification -> PR -> merge -> production verification -> LIVE.
- Do not reuse a G-number unless the owner explicitly clears it for reassignment. G40 is the current explicit exception.
- Current review order is ascending by stable G-number. G-numbers never change when display order changes.

## Gallery Cover & Grouping Rule — permanent
- Gallery cards are grouped by project family so projects sharing the same public project name/location stay adjacent.
- Within a family, cards are ordered by stable G-number.
- The gallery card cover and the first image in the project carousel MUST be the same image.
- Cover priority: straight/front or full-pair view -> overall full composition -> full room view -> widest available view.
- Do not use a side view, close-up, hardware/material detail, single component, doorway crop, or partial furniture view as the first image when a fuller composition exists.
- For paired/symmetrical fitted furniture such as alcove units, the first image should show the complete pair whenever a suitable source image exists.
- If no honest full-scale source photograph exists, do not substitute an image from another project. Record the project as a source-quality exception until a suitable photograph is found.
- G40 owner override: the former Belgravia Leather Wardrobe is merged into G35. Its three leather/brass detail images now live inside G35. G40 is cleared for reassignment to a future distinct project.

## Gallery Batch Workflow v2 — permanent operating rule
- Maintain up to FIVE active gallery lanes at once when the work is independent.
- Source review, image classification, HIGH RES mapping, ingest, optimisation and asset verification may run independently across those lanes.
- Each gallery gets its own branch, state, checkpoint and fuse. A failure in one lane does NOT stop the other independent lanes.
- Shared integration into `master` remains SERIAL: gallery case-study integration / PR / merge / production verification is completed one gallery at a time in G-number order because the galleries share `app/lib/gallery-projects.ts` and production state.
- While an async step is BUILDING / PENDING / IN_PROGRESS, do productive work on the other active lanes instead of ending the prompt.
- Do not repeatedly poll an async step. After productive work elsewhere, one fresh check may be made. Two consecutive checks with no state change parks only that lane until the next productive cycle.
- When a parked lane becomes READY/SUCCESS later in the same prompt, resume it immediately.
- If a lane fails, diagnose the failed step once, apply one reasoned repair, and continue that lane. If the same failure repeats twice, park that lane and continue the other independent lanes.
- Never continue a lane past an unverified asset transfer, uncertain project identity, uncertain image ownership, invented case-study facts, an unverified branch/commit/PR, or an unverified preview/production route.
- A GLOBAL fuse applies only when the problem is genuinely shared across all lanes (for example GitHub authentication failure, Drive access failure affecting every source, repository corruption, or a platform-wide deployment failure). In that case, stop dependent actions but continue any safe independent review/classification work.
- The gallery register is the durable source of truth across chat limits. Every parked lane must record branch, commit/run/deployment IDs, last verified checkpoint, failure reason if any, and exact resume action.
- Signed temporary `source_url` values are added at ingest trigger time whenever the Drive service credential is unavailable, using the proven G45–G48 transfer path.
- WEB RES images are for visual classification only; HIGH RES clean originals are canonical for ingestion. WITH LOGO/watermarked copies are excluded.
- Do not destructively crop joinery. If a required ratio would cut the furniture, preserve the joinery and use an extension/outpaint workflow where needed rather than cutting the object.

## Per-gallery fuse
Park ONLY the affected gallery lane when:
- the same action fails twice;
- project identity or image-to-item assignment is uncertain;
- asset transfer or SHA verification is incomplete;
- branch/commit/PR state cannot be verified;
- preview or production route fails verification;
- completing the case study would require invented facts.

When a lane fuse fires:
1. Stop retrying that action.
2. Record the exact checkpoint and reason.
3. Continue other independent active galleries.
4. Return to the parked lane after other productive work or when a fresh check is justified.
5. Do not advance that lane to LIVE until every required checkpoint is verified.

| No. | Project | Status | Priority / source note |
|---|---|---|---|
| G01 | Stourcliff White Handleless Kitchen | LIVE | Canonical established route; absorbs G53 photographs |
| G02 | Soho Bespoke Bookcase | LIVE | Soho 13 |
| G03 | Soho Walk-In Wardrobe | LIVE | Soho 13 |
| G04 | Grey & Black Bespoke Media Wall | LIVE | Canonical media-wall gallery; absorbs the G18 image set |
| G05 | Golden Textured-Front Cabinet | MERGED INTO G19 | Same source job/files as G19 Putney Heath Bespoke Cabinets; duplicate retired and never reused |
| G06 | Built-In Window Seat with Drawer Storage | LIVE | Existing / Eric source duplicate |
| G07 | Soho Shoe-Storage Cabinet | LIVE / LOW | Keep at bottom of gallery |
| G08 | Black Oak Media Wall with Brass Inlay | LIVE | Chelsea / black TV source |
| G09 | Natural Walnut Bespoke Bookcase | LIVE | Nuotraukos puslapiui / strong professional set |
| G10 | Duplicate Dark Oak Bookcase Set | MERGED INTO G02 | Same Soho Bespoke Bookcase job; selected images merged into G02; G10 retired and never reused |
| G11 | Westminster Polished Brass Panelled Doors | LIVE | Westminster source / selected 4-image set |
| G12 | Bookcase in Esher | LIVE | Existing Esher bookcase set; personal/designer name removed |
| G13 | Cream Bespoke TV Unit | LIVE | Gallery 1 / clean original photography; branded-logo JPG set retired |
| G14 | Crocodile-Front Bespoke Cabinet | LIVE | Gallery 4 / Drive ingest verified; 5-image WebP + AVIF set |
| G15 | S&C Bespoke TV Unit | LIVE | Gallery 6 / first fresh Drive ingest trial passed; 5-image WebP + AVIF set |
| G16 | S&C Bespoke Bookcase | LIVE | Gallery 7 / 6-image Drive ingest passed; WebP + AVIF set |
| G17 | Grey Bespoke Sideboard | LIVE / LOWER | Gallery 10 / four-image set; Drive ingest passed |
| G18 | Dubai Bespoke TV Unit | MERGED INTO G04 | Same job as G04; five useful images merged into canonical G04; G18 retired and never reused |
| G19 | Putney Heath Bespoke Cabinets | LIVE | Arno 07 / clean 6-image WebP + AVIF set; branded-logo source copies replaced; absorbs duplicate G05 source job |
| G20 | Highgate Fitted Wardrobes | LIVE | Arno 06 / 3-image fitted-wardrobe set; Drive ingest passed |
| G21 | Northwood Bespoke TV Unit | LIVE | Split from Arno 05 / 2-image TV-unit set; office images reserved for G22 |
| G22 | Northwood Home Office | LIVE | Split from Arno 05 / 3 clean images; duplicate/logo preflight passed; Drive ingest passed |
| G23 | Putney Flat Bespoke TV Unit | LIVE | Arno 04 / 3 clean images; duplicate/logo preflight passed; Drive ingest passed |
| G24 | Earls Court Bespoke TV Unit | MERGED INTO G13 | Same TV-unit photography as G13 Cream Bespoke TV Unit; duplicate retired and never reused |
| G25 | Earls Court Floating Shelf & Mirror Wall | LIVE | Split from Arno 03 / 1 unique clean image; duplicate/logo preflight passed; Drive ingest passed |
| G26 | Putney Bespoke TV Unit | LIVE | Arno 01 / 4 unique clean images; duplicate source photo excluded; logo preflight passed; Drive ingest passed |
| G27 | Manchester Walk-In Wardrobe | LIVE | Complete wardrobe, island and dressing-table project; six unique images after absorbing G28; B14 live verified |
| G28 | Manchester Make-Up Island & Dressing Table | MERGED INTO G27 | Owner confirmed the same project; photos retained once in G27, old URL redirects; ID retired and never reused |
| G29 | Virginia Water Wine Room | LIVE | Wentworth / 6 clean images; duplicate/logo preflight passed; Drive ingest passed after push-race retry |
| G30 | Fulham Wine Cellar | LIVE | Clean HIGH RES MH0031–MH0035; duplicate/logo preflight passed; Drive ingest passed |
| G31 | Fulham Home Office | LIVE | Clean HIGH RES MH0025–MH0028; duplicate/logo preflight passed; Drive ingest passed |
| G32 | Fulham Alcove Units | LIVE | Clean HIGH RES MH0016–MH0018; duplicate/logo preflight passed; Drive ingest and SHA verification passed |
| G33 | Fulham Juice Bar Joinery | LIVE | Clean HIGH RES 7-image set; watermarked web copies and adjacent media-wall project excluded; Drive ingest and SHA verification passed |
| G34 | Fulham Antique Mirror Feature | LIVE | Clean HIGH RES MH0036–MH0040; duplicate/logo preflight passed; Drive ingest and SHA verification passed; preview verified |
| G35 | Belgravia Kids Room / Home Office Furniture | LIVE | G35 includes former G40 leather-wardrobe detail images;  14 mapped HIGH RES originals; 28/28 generated assets verified; PR #54 merged; preview and production routes verified |
| G36 | Belgravia Bathroom Furniture & Antique Mirror | LIVE | 5 mapped HIGH RES originals; 10/10 generated assets verified; PR #55 merged; preview and production routes verified |
| G37 | Belgravia Walk-In Wardrobe | LIVE | 6 mapped HIGH RES originals; 12/12 generated assets verified; PR #56 merged; preview and production routes verified |
| G38 | Belgravia Dining Room & TV Furniture | LIVE | 7 mapped HIGH RES originals; 14/14 generated assets verified; PR #57 merged; preview and production routes verified |
| G39 | Belgravia Master Bedroom Furniture | LIVE | 7 mapped HIGH RES originals; 14/14 generated assets verified; PR #58 merged; preview and production routes verified |
| G40 | CLEARED FOR REASSIGNMENT | MERGED INTO G35 / RESERVED EMPTY | Former Belgravia Leather Wardrobe merged into G35 by owner instruction; old URL redirects to G35; G40 may be assigned to a new distinct project |
| G41 | Esher Luxury Residence — Walk-In Wardrobe | LIVE | 7 mapped HIGH RES originals; 14/14 generated assets verified; PR #60 merged; gallery record restored by PR #64 integrity repair; final production route verified |
| G42 | Esher Luxury Residence — Kids Room TV Unit | LIVE | 3 mapped HIGH RES originals; 6/6 generated assets verified; PR #61 merged; gallery record restored by PR #64 integrity repair; final production route verified |
| G43 | Esher Luxury Residence — Home Office | LIVE | Five photographs: original 1–3 plus original G45 8–9; C0054 moved to G44, A0007 to G45, B0007 removed; B14 verified |
| G44 | Esher Luxury Residence — Bookcase with Leather & Brass Detail | LIVE | Original four photographs plus C0054 from original G43 image 4; B14 verified |
| G45 | Esher Luxury Residence — Alcove Units | LIVE | Rooflit-room installation only: original 1–5 plus A0007 from original G43 image 6; other rooms moved to G61/G43; B14 verified |
| G46 | London Luxury Salon Joinery | LIVE | 10 clean selected salon images; LOGO folder excluded; Drive ingest and SHA verification passed; corrected preview passed; production READY |
| G47 | Bespoke Media Wall with Display Shelving | LIVE | Aram high res images 1–11; ingest, asset verification, preview and production verification passed; PR #44 merged |
| G48 | Stourcliff Bespoke Media Wall | LIVE | AIDA high res images 1, 2, 4, 5, 6, 7; ingest, SHA verification, preview, merge and production route verification passed |
| G49 | Stourcliff Mirrored Wardrobes | LIVE | AIDA high res images 12–16; 10/10 assets verified; preview and production routes verified; PR #46 merged |
| G50 | Stourcliff Dressing Table | LIVE | AIDA high res images 20–22; 6/6 assets verified; preview and production routes verified; PR #47 merged |
| G51 | Stourcliff Fitted Wardrobe & Shoe Storage | LIVE | Closed doors (original image 2) first; wardrobe classification; five photographs retained; B14 verified |
| G52 | Stourcliff Bathroom Vanity & Storage | LIVE | AIDA high res images 28–32; 10/10 assets verified; preview and production routes verified; PR #50 merged |
| G53 | Stourcliff White Handleless Kitchen | MERGED INTO G01 | Same kitchen; 12 clean images retained in G01; former G53 URL redirects; ID retired and never reused |
| G54 | Stourcliff Bespoke Radiator Cover | LIVE | AIDA high res images 8 and 11; 4/4 assets verified; preview and production routes verified; PR #52 merged |
| G55 | Stourcliff Recessed Display Niche | LIVE | AIDA high res image 46; 2/2 assets verified; preview and production routes verified; PR #53 merged |
| G56 | Esher Luxury Residence — Wine Cellar | LIVE | 2 mapped HIGH RES originals; 4/4 generated assets verified; PR #64 merged; also restored G41–G43 gallery records; final production route verified |
| G57 | Full-Wall White Library Bookcase | LIVE | Four HIGH RES views selected; WEB RES image excluded; PR #72; preview and production verified |
| G58 | Esher Luxury Residence — Bathroom Vanity & Mirror | LIVE | Three distinct HIGH RES views; repeated exposures omitted; PR #73; preview and production verified |
| G59 | Traditional Radiator Covers & Fitted Shelving | LIVE | Five HIGH RES views; complete radiator cover first; PR #74; preview and production verified |
| G60 | Esher Luxury Residence — Make-Up Table | LIVE | One HIGH RES full-piece view through doorway; documented source-quality exception; PR #75; preview and production verified |
| G61 | Esher Luxury Residence — Modern Alcove Units | LIVE | B0001/B0004, original G45 images 6–7; one distinct modern alcove pair, two verified photos; PR #77 preview/production verified |

## HOLD / not included in active gallery set
- Modern Alcove Units: unfinished/weak presentation in current set.
- Rise & Fall TV Unit: WhatsApp-only low-resolution photography.
- Wine Rack work-in-progress set: useful detail photography but no strong finished-room set yet.
- Visualisations / Samples / product-render collections: not counted as completed-project case studies.
- Bed projects: keep at the bottom / HOLD unless a strong finished set is found.

Current reconciliation: 54 case-study records through G61. Retired duplicate IDs are G05, G10, G18, G24, G28 and G53; G40 is reserved after its former content was merged into G35. Stable IDs are never renumbered to close those gaps.


## Historical checkpoint before B13 (superseded)
- Gallery Batch Workflow v2 remains the permanent operating rule.
- Latest completed batch: Esher Luxury Residence G41–G44 plus G56 Wine Cellar.
- Highest live gallery ID: G56 — Esher Luxury Residence — Wine Cellar.
- Source hierarchy:
  - recent Sep-24 folder: Esher Luxury Residence (internal Drive source folder remains `8 Leys Road`, ID 1nh0q7YOvMEaNM9OwfxJIFLUhEtP18X-c)
  - WEB Foto: 1UsPjmWOMFJU-5ix2Gr98wY5Xa1FnIpsE — review/classification only
  - WEB RES: 19V1wHSajf41-YeC700BBN94oHjEQueFl — filename mapping/reference
  - HIGH RES: 1NdfGvZOsej1maLwkQcFQ4pwCMGGpJec- — canonical ingest originals
  - With LOGO excluded
- G41 — Esher Luxury Residence — Walk-In Wardrobe
  - 7 HIGH RES originals
  - 14/14 WebP + AVIF blob SHAs verified
  - PR #60 merged at 89c754877810beaf4666e364a24b582f1ed352c3
  - final production route /gallery/esher-luxury-residence-walk-in-wardrobe: VERIFIED HTTP 200
- G42 — Esher Luxury Residence — Kids Room TV Unit
  - 3 HIGH RES originals
  - 6/6 WebP + AVIF blob SHAs verified
  - PR #61 merged at 5c09c8d8b7cb957fd58e6004bc5dfd82ef9a5f4b
  - final production route /gallery/esher-luxury-residence-kids-room-tv-unit: VERIFIED HTTP 200
- G43 — Esher Luxury Residence — Home Office
  - 6 HIGH RES originals
  - 12/12 WebP + AVIF blob SHAs verified
  - PR #62 merged at 75b612fe30f825b5bc1289e78603ee853a0d7154
  - final production route /gallery/esher-luxury-residence-home-office: VERIFIED HTTP 200
- G44 — Esher Luxury Residence — Bookcase with Leather & Brass Detail
  - 4 HIGH RES originals
  - 8/8 WebP + AVIF blob SHAs verified
  - PR #63 merged at 1e1ba909c5cfc835accf45baf85481513c965a3c
  - production deployment dpl_HxvDGfR7PFzJ9S8Jeig7cFDi2UjB: READY
  - final production route /gallery/esher-luxury-residence-bookcase-leather-brass: VERIFIED HTTP 200
- G56 — Esher Luxury Residence — Wine Cellar
  - 2 HIGH RES originals (w0038, w0039)
  - 4/4 WebP + AVIF blob SHAs verified
  - exact preview head 55e702304936f900dd3edad13b3b6172951a822c: READY
  - preview integrity check: G41, G42, G43, G44 and G56 all HTTP 200
  - PR #64 merged at 184264b6c29656d00d66e335d2cd6e7d00899efc
  - production deployment dpl_FKunriYkYA35CM3Q59qcnyAQaK2V: READY
  - final production route /gallery/esher-luxury-residence-wine-cellar: VERIFIED HTTP 200
- Integrity repair performed in PR #64:
  - verified image assets for G41–G43 had remained on master, but later serialized gallery-project file updates had dropped their case-study records
  - PR #64 restored exactly one G41, G42 and G43 gallery record, preserved exactly one G44/G45 record, and added exactly one G56 record
  - all five requested public routes were re-verified on the final production deployment
- Esher Luxury Residence additional single-image candidates remain unnumbered:
  - WEB 31: make-up table
  - WEB 32: bathroom mirror
- Next new stable gallery ID available: G57.
- Resume at next-source review / G57 assignment. Do not repeat G41–G44 or G56.
