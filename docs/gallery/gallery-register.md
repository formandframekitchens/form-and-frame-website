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
| G35 | Belgravia Kids Room / Home Office Furniture | REVIEW ACTIVE | Sep-24 Belgravia project; WEB Foto descriptive set + HIGH RES canonical originals |
| G36 | Belgravia Bathroom Furniture & Antique Mirror | QUEUED | Professional pictures / Belgravia |
| G37 | Belgravia Walk-In Wardrobe | QUEUED | Professional pictures / Belgravia |
| G38 | Belgravia Dining Room & TV Furniture | QUEUED | Professional pictures / Belgravia |
| G39 | Belgravia Master Bedroom Furniture | QUEUED | Professional pictures / Belgravia |
| G40 | Belgravia Leather Wardrobe | QUEUED | Professional pictures / Belgravia |
| G41 | 8 Leys Road Walk-In Wardrobe | QUEUED | Professional pictures / 8 Leys |
| G42 | 8 Leys Road Kids Room TV Unit | QUEUED | Professional pictures / 8 Leys |
| G43 | 8 Leys Road Home Office | QUEUED | Professional pictures / 8 Leys |
| G44 | 8 Leys Road Bookcase with Leather & Brass Detail | QUEUED | Professional pictures / 8 Leys |
| G45 | 8 Leys Road Alcove Units | LIVE | 9 clean HIGH RES images mapped; logo/web versions excluded; Drive ingest and SHA verification passed |
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

## HOLD / not included in active gallery set
- Modern Alcove Units: unfinished/weak presentation in current set.
- Rise & Fall TV Unit: WhatsApp-only low-resolution photography.
- Wine Rack work-in-progress set: useful detail photography but no strong finished-room set yet.
- Visualisations / Samples / product-render collections: not counted as completed-project case studies.
- Bed projects: keep at the bottom / HOLD unless a strong finished set is found.

Current confirmed minimum: 45 distinct case-study slots, plus retired duplicate references G05, G10 and G18.


## Resume pointer
- Gallery Batch Workflow v2 is the permanent operating rule.
- Last live gallery: G55 — Stourcliff Recessed Display Niche
- G51 — Stourcliff Fitted Wardrobe & Shoe Storage
  - PR #49 merged at 53f337b9c18b7fc00101cb67576bd0fcf943877b
  - production deployment dpl_EVxD8KC352Y5b4LbZaC8m6bY28jx: READY
  - public route /gallery/stourcliff-fitted-wardrobe-shoe-storage: VERIFIED HTTP 200
- G52 — Stourcliff Bathroom Vanity & Storage
  - PR #50 merged at 88f8b9bd2f44d090c28655336dcd9ccb080afa68
  - production deployment dpl_82RTDSQcN6CgGiuuCfJbVbRqLtXT: READY
  - public route /gallery/stourcliff-bathroom-vanity-storage: VERIFIED HTTP 200
- G53 — Stourcliff White Handleless Kitchen
  - PR #51 merged at 6ca7471851838d5beaf4a602f9a5ad86adac7d2c
  - production deployment dpl_76qec7sLmh6HhktxELMCe6wok6Gu: READY
  - public route /gallery/stourcliff-white-handleless-kitchen: VERIFIED HTTP 200
- G54 — Stourcliff Bespoke Radiator Cover
  - PR #52 merged at 06e8d40bad2a51f6607f64500e32ad3bda00cacd
  - production deployment dpl_DgXNju8dXcMQh97BarZanTaZC4vC: READY
  - public route /gallery/stourcliff-bespoke-radiator-cover: VERIFIED HTTP 200
- G55 — Stourcliff Recessed Display Niche
  - PR #53 merged at bf98f454bcac16285a59afe64f1fa68c21d77878
  - production deployment dpl_FSRw1HtkE7FuV9tMJVjiiVjBkqro: READY
  - public route /gallery/stourcliff-recessed-display-niche: VERIFIED HTTP 200
- AIDA remaining decisions:
  - image 45 small vanity/counter detail: HOLD, too weak alone
  - image 47 hall context: HOLD, not a standalone joinery project
  - images 17–19 bed/headboard context: HOLD unless stronger standalone joinery evidence is found
  - images 9–10 remain room context only; not separate gallery items
- Active Belgravia source:
  - recent Sep-24 folder: Belgravia project (1Wxw__wVyuD6qL4rywt5MmFjYjBfVcWPL)
  - WEB Foto folder: 1wq371pFynlOREPe2X1xdNSHFA43G53Pj
  - HIGH RES folder: 1uPkVUv8HWy1YqVvHQ5PawtUEUB3WCezC
  - WEB Foto has 42 descriptive review images; HIGH RES has 47 canonical originals
- G35 review is ACTIVE: Belgravia Kids Room / Home Office Furniture. WEB images 33–42 have been sampled and confirm a coherent kids-room/home-office fitted furniture group.
- Existing queued Belgravia IDs remain reserved:
  - G35 Kids Room / Home Office Furniture
  - G36 Bathroom Furniture & Antique Mirror
  - G37 Walk-In Wardrobe
  - G38 Dining Room & TV Furniture
  - G39 Master Bedroom Furniture
  - G40 Leather Wardrobe
- Next exact work: finish G35 WEB selection, visually map the selected WEB images to HIGH RES originals, then open parallel ingest lanes for G35–G39 where the mapping is unambiguous. G40 remains the fifth lane if the leather-wardrobe set is distinct after visual review.
