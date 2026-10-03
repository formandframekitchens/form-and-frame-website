# Form & Frame Gallery Register

This is the permanent internal tracking register for website gallery case studies.

Rules:
- Tracking number is a stable development ID (G01, G02, etc.). It is shown as a small badge on gallery cards and project pages, but is not added to public SEO titles.
- One distinct furniture item can become its own case study even when several items are from the same property.
- Only strong completed-project photography is promoted into the main gallery.
- Weaker projects remain at the bottom or on HOLD.
- Every new gallery follows the same lane sequence: source review -> item split -> image selection -> HIGH RES mapping -> ingest/optimisation -> Git blob SHA verification -> SEO/case study -> Vercel preview -> route verification -> PR -> merge -> production verification -> LIVE.
- Do not reuse a G-number.
- Current review order is ascending by stable G-number. G-numbers never change when display order changes.

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
| G01 | Handleless Kitchen Installation | LIVE | Existing kitchen case study |
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
| G27 | Manchester Walk-In Wardrobe | LIVE | Manchester HIGH RES / 3 clean originals; logo folders excluded; duplicate preflight passed; Drive ingest passed |
| G28 | Manchester Make-Up Island & Dressing Table | LIVE | Manchester HIGH RES / 3 clean originals matched from labelled web set; logo folders excluded; Drive ingest passed |
| G29 | Virginia Water Wine Room | LIVE | Wentworth / 6 clean images; duplicate/logo preflight passed; Drive ingest passed after push-race retry |
| G30 | Fulham Wine Cellar | LIVE | Clean HIGH RES MH0031–MH0035; duplicate/logo preflight passed; Drive ingest passed |
| G31 | Fulham Home Office | LIVE | Clean HIGH RES MH0025–MH0028; duplicate/logo preflight passed; Drive ingest passed |
| G32 | Fulham Alcove Units | LIVE | Clean HIGH RES MH0016–MH0018; duplicate/logo preflight passed; Drive ingest and SHA verification passed |
| G33 | Fulham Juice Bar Joinery | LIVE | Clean HIGH RES 7-image set; watermarked web copies and adjacent media-wall project excluded; Drive ingest and SHA verification passed |
| G34 | Fulham Antique Mirror Feature | LIVE | Clean HIGH RES MH0036–MH0040; duplicate/logo preflight passed; Drive ingest and SHA verification passed; preview verified |
| G35 | Belgravia Kids Room / Home Office Furniture | LIVE | 14 mapped HIGH RES originals; 28/28 generated assets verified; PR #54 merged; preview and production routes verified |
| G36 | Belgravia Bathroom Furniture & Antique Mirror | LIVE | 5 mapped HIGH RES originals; 10/10 generated assets verified; PR #55 merged; preview and production routes verified |
| G37 | Belgravia Walk-In Wardrobe | LIVE | 6 mapped HIGH RES originals; 12/12 generated assets verified; PR #56 merged; preview and production routes verified |
| G38 | Belgravia Dining Room & TV Furniture | LIVE | 7 mapped HIGH RES originals; 14/14 generated assets verified; PR #57 merged; preview and production routes verified |
| G39 | Belgravia Master Bedroom Furniture | LIVE | 7 mapped HIGH RES originals; 14/14 generated assets verified; PR #58 merged; preview and production routes verified |
| G40 | Belgravia Leather Wardrobe | LIVE | 3 mapped HIGH RES originals; 6/6 generated assets verified; PR #59 merged; preview and production routes verified |
| G41 | Esher Luxury Residence — Walk-In Wardrobe | LIVE | 7 mapped HIGH RES originals; 14/14 generated assets verified; PR #60 merged; gallery record restored by PR #64 integrity repair; final production route verified |
| G42 | Esher Luxury Residence — Kids Room TV Unit | LIVE | 3 mapped HIGH RES originals; 6/6 generated assets verified; PR #61 merged; gallery record restored by PR #64 integrity repair; final production route verified |
| G43 | Esher Luxury Residence — Home Office | LIVE | 6 mapped HIGH RES originals; 12/12 generated assets verified; PR #62 merged; gallery record restored by PR #64 integrity repair; final production route verified |
| G44 | Esher Luxury Residence — Bookcase with Leather & Brass Detail | LIVE | 4 mapped HIGH RES originals; 8/8 generated assets verified; PR #63 merged; final production route verified |
| G45 | Esher Luxury Residence — Alcove Units | LIVE | 9 clean HIGH RES images mapped; logo/web versions excluded; Drive ingest and SHA verification passed |
| G46 | London Luxury Salon Joinery | LIVE | 10 clean selected salon images; LOGO folder excluded; Drive ingest and SHA verification passed; corrected preview passed; production READY |
| G47 | Bespoke Media Wall with Display Shelving | LIVE | Aram high res images 1–11; ingest, asset verification, preview and production verification passed; PR #44 merged |
| G48 | Stourcliff Bespoke Media Wall | LIVE | AIDA high res images 1, 2, 4, 5, 6, 7; ingest, SHA verification, preview, merge and production route verification passed |
| G49 | Stourcliff Mirrored Wardrobes | LIVE | AIDA high res images 12–16; 10/10 assets verified; preview and production routes verified; PR #46 merged |
| G50 | Stourcliff Dressing Table | LIVE | AIDA high res images 20–22; 6/6 assets verified; preview and production routes verified; PR #47 merged |
| G51 | Stourcliff Fitted Wardrobe & Shoe Storage | LIVE | AIDA high res images 23–27; 10/10 assets verified; preview and production routes verified; PR #49 merged |
| G52 | Stourcliff Bathroom Vanity & Storage | LIVE | AIDA high res images 28–32; 10/10 assets verified; preview and production routes verified; PR #50 merged |
| G53 | Stourcliff White Handleless Kitchen | LIVE | AIDA high res images 33–44; 24/24 assets verified; preview and production routes verified; PR #51 merged |
| G54 | Stourcliff Bespoke Radiator Cover | LIVE | AIDA high res images 8 and 11; 4/4 assets verified; preview and production routes verified; PR #52 merged |
| G55 | Stourcliff Recessed Display Niche | LIVE | AIDA high res image 46; 2/2 assets verified; preview and production routes verified; PR #53 merged |
| G56 | Esher Luxury Residence — Wine Cellar | LIVE | 2 mapped HIGH RES originals; 4/4 generated assets verified; PR #64 merged; also restored G41–G43 gallery records; final production route verified |

## HOLD / not included in active gallery set
- Modern Alcove Units: unfinished/weak presentation in current set.
- Rise & Fall TV Unit: WhatsApp-only low-resolution photography.
- Wine Rack work-in-progress set: useful detail photography but no strong finished-room set yet.
- Visualisations / Samples / product-render collections: not counted as completed-project case studies.
- Bed projects: keep at the bottom / HOLD unless a strong finished set is found.

Current confirmed minimum: 56 distinct case-study slots, plus retired duplicate references G05, G10, G18 and G24.


## Resume pointer
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
