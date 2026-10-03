# Form & Frame Gallery Register

This is the permanent internal tracking register for website gallery case studies.

Rules:
- Tracking number is a stable development ID (G01, G02, etc.). It is shown as a small badge on gallery cards and project pages, but is not added to public SEO titles.
- One distinct furniture item can become its own case study even when several items are from the same property.
- Only strong completed-project photography is promoted into the main gallery.
- Weaker projects remain at the bottom or on HOLD.
- Every new gallery follows: source review -> image selection -> optimisation -> SEO/case study -> preview -> approval -> live.
- Do not reuse a G-number.
- Process only one G-number at a time. Complete and verify its checkpoint before starting the next.
- Current review order is ascending by stable G-number, with G01 at the top. A later manual display order may change presentation without changing G-numbers.
- G-numbers never change when display order changes.

## Safety fuse
STOP THE ENTIRE GALLERY SEQUENCE IMMEDIATELY if any of these occurs:
- the same tool/action fails twice or enters a repeated error loop;
- project identity is uncertain or may duplicate an existing gallery;
- image source or which furniture item an image belongs to is unclear;
- branch, commit, pull request or production state cannot be verified;
- Vercel preview does not reach READY or the expected project route cannot be verified;
- asset transfer is incomplete or final image files cannot be verified in the branch;
- the case study would require invented facts.

When the fuse fires:
1. Do not retry the failing step repeatedly.
2. Do not start the next G-number.
3. Record the G-number, failed checkpoint and reason in the Resume pointer / Fuse stop note.
4. Return control to the user so the next prompt can diagnose and repair the workflow.

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
| G35 | Belgravia Kids Room / Home Office Furniture | QUEUED | Professional pictures / Belgravia |
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
| G47 | Bespoke Media Wall with Display Shelving | PREVIEW BUILDING / FUSE STOP | Aram high res images 1–11; Drive ingest passed; 22/22 generated assets verified; case study added |
| G48 | AIDA Stourcliff Road Project | QUEUED / REVIEW SPLIT | 47 professional images; may split further |

## HOLD / not included in G01-G48
- Modern Alcove Units: unfinished/weak presentation in current set.
- Rise & Fall TV Unit: WhatsApp-only low-resolution photography.
- Wine Rack work-in-progress set: useful detail photography but no strong finished-room set yet.
- Visualisations / Samples / product-render collections: not counted as completed-project case studies.
- Bed projects: keep at the bottom / HOLD unless a strong finished set is found.

Current confirmed minimum: 45 distinct case-study slots, plus retired duplicate references G05, G10 and G18.


## Resume pointer
- Last live gallery: G46 — London Luxury Salon Joinery
- Current gallery: G47 — Bespoke Media Wall with Display Shelving
- G47 source hierarchy: recent Sep 24 Aram project -> high res; WITH LOGO excluded
- G47 visual selection: HIGH RES images 1–11 only
- G47 branch: g47-bespoke-media-wall-display-shelving
- Initial ingest failure root cause: missing GOOGLE_DRIVE_SERVICE_ACCOUNT_JSON
- Repair method: temporary signed source_url values, matching successful G45/G46 workflow
- Repaired Actions run 37109360072: SUCCESS
- Ingest commit: e6b74992bade66e4f0dba79c041ea4e27b95bef4
- Generated assets verified against ingest report: 22/22 Git blob SHAs matched
- G47 case study commit: fdcd5eca1f6c192392e3bcaf811842c5f832cf3d
- G47 location intentionally omitted because source does not establish it safely
- Vercel preview deployment: Fv3E4SdqMbG2T2sDtHHthLSWzos2
- First preview check: PENDING
- Second allowed preview check: PENDING
- Safety fuse: TRIPPED — no third preview poll performed
- Remaining Aram source split identified but NOT numbered/started:
  - images 12–21: dark bar/display cabinet
  - images 22–31: bespoke dressing table / make-up storage
  - images 32 + 35: coordinated bedroom storage cabinets
  - images 33–34: bedroom TV cabinet
  - images 36–39: dark bathroom fitted storage
  - images 40–42: bathroom TV frame
- G48 — AIDA Stourcliff Road Project remains QUEUED / REVIEW SPLIT and has NOT started
- Resume exactly at: one fresh Vercel status check for case-study commit fdcd5eca1f6c192392e3bcaf811842c5f832cf3d; if READY, create/verify PR, merge, production verify, mark G47 LIVE, then continue the next gallery; if failed, diagnose once before any later G-number
