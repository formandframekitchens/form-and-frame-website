# Form & Frame Gallery Register

This is the permanent internal tracking register for website gallery case studies.

Rules:
- Tracking number is internal and is not added to public SEO titles.
- One distinct furniture item can become its own case study even when several items are from the same property.
- Only strong completed-project photography is promoted into the main gallery.
- Weaker projects remain at the bottom or on HOLD.
- Every new gallery follows: source review -> image selection -> optimisation -> SEO/case study -> preview -> approval -> live.
- Do not reuse a G-number.
- Process only one G-number at a time. Complete and verify its checkpoint before starting the next.

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
| G04 | Grey & Black Bespoke Media Wall | LIVE | Existing strong media-wall set |
| G05 | Golden Textured-Front Cabinet | LIVE | Golden-front cabinet |
| G06 | Built-In Window Seat with Drawer Storage | LIVE | Existing / Eric source duplicate |
| G07 | Soho Shoe-Storage Cabinet | LIVE / LOW | Keep at bottom of gallery |
| G08 | Black Oak Media Wall with Brass Inlay | LIVE | Chelsea / black TV source |
| G09 | Natural Walnut Bespoke Bookcase | LIVE | Nuotraukos puslapiui / strong professional set |
| G10 | Duplicate Dark Oak Bookcase Set | MERGED INTO G02 | Same Soho Bespoke Bookcase job; selected images merged into G02; G10 retired and never reused |
| G11 | Westminster Polished Brass Panelled Doors | LIVE | Westminster source / selected 4-image set |
| G12 | Alexander James Bespoke Bookcase | LIVE | Alexander James source |
| G13 | Cream Bespoke TV Unit | LIVE | Gallery 1 |
| G14 | Crocodile-Front Bespoke Cabinet | LIVE | Gallery 4 / Drive ingest verified; 5-image WebP + AVIF set |
| G15 | S&C Bespoke TV Unit | LIVE | Gallery 6 / first fresh Drive ingest trial passed; 5-image WebP + AVIF set |
| G16 | S&C Bespoke Bookcase | LIVE | Gallery 7 / 6-image Drive ingest passed; WebP + AVIF set |
| G17 | Grey Bespoke Sideboard | LIVE / LOWER | Gallery 10 / four-image set; Drive ingest passed |
| G18 | Dubai Bespoke TV Unit | QUEUED | Arno 08 |
| G19 | Putney Heath Bespoke Cabinets | QUEUED | Arno 07 |
| G20 | Highgate Fitted Wardrobes | QUEUED | Arno 06 |
| G21 | Northwood Bespoke TV Unit | QUEUED | Split from Arno 05 |
| G22 | Northwood Home Office | QUEUED | Split from Arno 05 |
| G23 | Putney Flat Bespoke TV Unit | QUEUED | Arno 04 |
| G24 | Earls Court Bespoke TV Unit | QUEUED | Split from Arno 03 |
| G25 | Earls Court Floating Shelf & Mirror Wall | QUEUED | Split from Arno 03 |
| G26 | Putney Bespoke TV Unit | QUEUED | Arno 01 |
| G27 | Manchester Walk-In Wardrobe | QUEUED | Professional pictures / Manchester |
| G28 | Manchester Make-Up Island & Dressing Table | QUEUED | Professional pictures / Manchester |
| G29 | Virginia Water Wine Room | QUEUED | Professional pictures / Wentworth |
| G30 | Maria's House Wine Cellar | QUEUED | Professional pictures / Maria's House |
| G31 | Maria's House Home Office | QUEUED | Professional pictures / Maria's House |
| G32 | Maria's House Alcove Units | QUEUED | Professional pictures / Maria's House |
| G33 | Maria's House Juice Bar Joinery | QUEUED | Professional pictures / Maria's House |
| G34 | Maria's House Antique Mirror Feature | QUEUED | Professional pictures / Maria's House |
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
| G45 | 8 Leys Road Alcove Units | QUEUED | Professional pictures / 8 Leys |
| G46 | Gillie Green Project | QUEUED / REVIEW SPLIT | 21 professional images; may split further |
| G47 | Aram Project | QUEUED / REVIEW SPLIT | 42 professional images; may split further |
| G48 | AIDA Stourcliff Road Project | QUEUED / REVIEW SPLIT | 47 professional images; may split further |

## HOLD / not included in G01-G48
- Modern Alcove Units: unfinished/weak presentation in current set.
- Rise & Fall TV Unit: WhatsApp-only low-resolution photography.
- Wine Rack work-in-progress set: useful detail photography but no strong finished-room set yet.
- Visualisations / Samples / product-render collections: not counted as completed-project case studies.
- Bed projects: keep at the bottom / HOLD unless a strong finished set is found.

Current confirmed minimum: 47 distinct case-study slots, plus retired duplicate reference G10.


## Resume pointer
- Last live gallery: G17 — Grey Bespoke Sideboard
- G17 production deployment: VERIFIED READY
- G17 live route: VERIFIED with all 4 images
- Permanent gallery ingest workflow: STABLE
- Next gallery: G18 — Dubai Bespoke TV Unit
- Continue sequentially through G21 only while every checkpoint passes
- Safety fuse status: ARMED
