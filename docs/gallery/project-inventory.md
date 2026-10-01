# B11 Gallery project inventory

Working source of truth for the Form & Frame Gallery implementation.

## Naming rules

- Public titles must describe the joinery, not the client, designer or previous company.
- Interior-designer names are not used in public titles, slugs, image filenames, metadata or alt text.
- Personal names are not used.
- Locations are used only where they are supported by the source folder or otherwise confirmed.
- If the exact area is uncertain, use `London` or `West London`.
- Material species and metal finishes are only named where the photography or source naming supports them.
- Visualisations, renders, samples and unfinished/work-in-progress-only folders are excluded.
- Duplicate folders are consolidated into one case study.
- One commission may become several case studies when it clearly contains distinct pieces.

## Priority order

The Gallery landing page should begin with:
1. Latest completed handleless kitchen installation — current homepage photography.
2. Additional strong kitchen work as it is identified.
3. Highest-quality bespoke joinery case studies.
4. Remaining finished projects, ordered for visual variety rather than by furniture category.

## Publishable case-study inventory

| # | Public case-study title | Public location | Source confidence | Status |
|---|---|---|---|---|
| 01 | Latest Handleless Kitchen Installation | Luton / Bedfordshire | Existing live homepage photography | Ready; must lead Gallery |
| 02 | Natural Walnut Bespoke Bookcase | London | Folder explicitly identifies natural walnut | Ready |
| 03 | Illuminated Display Bookcase | London | Finished photography inspected | Ready |
| 04 | Polished-Brass Panelled Joinery | West London | Source explicitly identifies polished brass panels/doors | Ready |
| 05 | Full-Height Bespoke Library Wall | London | Finished photography inspected | Ready |
| 06 | Illuminated Walk-In Wardrobe | London | Finished photography inspected | Ready |
| 07 | Bespoke Shoe-Storage Cabinet | London | Finished photography inspected | Ready |
| 08 | Champagne-Toned Display Cabinetry | London | Finished professional photography; neutralised source naming | Ready |
| 09 | Light-Veneered Display Joinery with Integrated Lighting | London | Finished professional photography; neutralised source naming | Ready |
| 10 | Dark Timber Wine Display Joinery | London | Finished photography available in residential collection | Ready after final image selection |
| 11 | Modern Alcove Cabinetry | London | Finished photography | Ready |
| 12 | Soho Bespoke Bookcase | Soho, London | Source location explicit | A2.2 polished assets imported |
| 13 | Soho Walk-In Wardrobe | Soho, London | Source location explicit | Ready |
| 14 | Soho Shoe-Storage Cabinet | Soho, London | Source location explicit | Ready |
| 15 | Grey & Black Bespoke Media Wall | London | Finished photography | Ready |
| 16 | Golden Textured-Front Cabinet | London | Source identifies golden leather/textured fronts | Ready |
| 17 | Textured-Front Bespoke Cabinet | London | Source identifies crocodile-effect/textured fronts | Ready |
| 18 | Grey Bespoke Sideboard | London | Finished photography | Ready |
| 19 | Black Bespoke Media Unit | London | Finished web-optimised photography | Ready |
| 20 | Cream Bespoke Media Unit | London | Finished photography available | Ready after final image selection |
| 21 | Dark Display Bookcase | London | Finished web-optimised photography | Ready |
| 22 | Dark Timber Entertainment Unit | London | Finished web photography | Ready |
| 23 | Putney Bespoke Media Unit | Putney, London | Source location explicit | Ready |
| 24 | Chelsea Penthouse Media Unit | Chelsea, London | Source location explicit | Ready |
| 25 | Earls Court Media Wall, Floating Shelf & Mirrored Panels | Earls Court, London | Source location explicit | Ready |
| 26 | Putney Flat Media Unit | Putney, London | Source location explicit | Ready |
| 27 | Northwood Media Unit & Home Office | Northwood, London | Source location explicit | Ready |
| 28 | Highgate Fitted Wardrobes | Highgate, London | Source location explicit | Ready |
| 29 | Putney Heath Bespoke Cabinetry | Putney Heath, London | Source location explicit | Ready |
| 30 | Architectural Media Unit | International residential commission | Source says Dubai; public SEO should not target Dubai | Ready |
| 31 | Walk-In Wardrobe & Dressing Island | Manchester | Source location explicit and web-ready images exist | Ready |
| 32 | Belgravia Dining-Room Joinery | Belgravia, London | Professional web photography | Ready |
| 33 | Belgravia Walk-In Wardrobe | Belgravia, London | Professional web photography | Ready |
| 34 | Belgravia Bathroom Joinery & Antique-Mirror Details | Belgravia, London | Professional web photography/source filenames | Ready |
| 35 | Belgravia Home Office & Children's Joinery | Belgravia, London | Professional web photography/source filenames | Ready |
| 37 | Virginia Water Wine Room | Virginia Water, Surrey | Source location explicit | Ready |
| 38 | Rise-and-Fall Media Cabinet | London | Finished photography; source designer naming excluded | Ready |
| 39 | Built-In Window Seat with Drawer Storage | London | Finished photography; source designer naming excluded | Ready |
| 40 | Contemporary Residential Joinery Collection | London | Large finished-photo set | Needs item grouping before import |
| 41 | Multi-Room Residential Joinery Collection | London | Large finished-photo set | Needs item grouping before import |

## Excluded source groups

- Luxury salon project photography — excluded by owner request; do not import or publish.
- All folders explicitly labelled visualisations/renders.
- Sample-board/sample-development photography.
- Wine-rack folders containing only work-in-progress imagery.
- Photoshop templates and design working files.
- Duplicate/logo-stamped copies where clean originals are available.
- Videos are not part of the initial Gallery build unless separately approved later.

## Already imported on B11

The first 24 finished photographs are already stored under SEO-friendly paths for these eight case studies:

- Natural Walnut Bespoke Bookcase
- Illuminated Display Bookcase
- Polished-Brass Panelled Joinery
- Full-Height Bespoke Library Wall
- Illuminated Walk-In Wardrobe
- Bespoke Shoe-Storage Cabinet
- Champagne-Toned Display Cabinetry
- Light-Veneered Display Joinery with Integrated Lighting

The two previously designer-derived asset folder names have been replaced with neutral public names. No designer names remain in those asset paths.


## Gallery image production standard

Every photograph must be polished for the web **before** it is committed to the website repository.

### Standard output

- Finished photography only.
- Public Gallery ratio: **4:3 landscape**.
- Standard dimensions: **1800 × 1350 px**.
- Standard format: **WebP**.
- Target file size: generally **150–450 KB per image**; keep below **500 KB** unless preserving critical fine detail requires slightly more.
- Strip unnecessary EXIF / camera metadata.
- Use consistent colour profile suitable for browsers (sRGB).
- Apply modest sharpening only after resize when needed.
- Do not over-process colour, contrast or saturation; the photographs must remain credible representations of the finished work.
- Crop position must be reviewed manually so important joinery, edges, doors, metalwork, grain, lighting and proportions are not cut away.
- Portrait or unusually framed originals may be cropped/reframed into the 4:3 web composition where the finished piece remains properly represented. If a safe crop would cut into or distort the joinery, use AI outpainting to extend the surrounding room/background naturally to the required 4:3 frame. Never stretch, reshape or invent the joinery itself. The finished furniture must remain geometrically faithful to the source photograph.
- Duplicate and near-duplicate angles should not be imported.
- Prefer 3–5 strong photographs per case study for the first Gallery build rather than uploading every available frame.

### SEO asset naming

Before upload, every image filename must:
- use lowercase;
- use hyphens instead of spaces;
- describe the visible joinery and useful detail;
- avoid client names, designer names and previous company names;
- avoid camera filenames such as IMG_1234 / DSC_1234;
- avoid keyword stuffing.

Example:
`natural-walnut-bespoke-bookcase-led-shelving-01.webp`

### Quality-control sequence for each project

1. Select finished photographs.
2. Remove duplicates and weak angles.
3. Review crop manually.
4. If a safe 4:3 crop would cut into the joinery, AI-outpaint the surrounding scene while preserving the joinery exactly.
5. Convert to 4:3.
6. Resize to 1800 × 1350 px.
7. Convert/compress to WebP.
8. Check final file size and image quality.
9. Apply SEO filename.
10. Upload to the project-specific Gallery folder.
11. Verify the committed files remotely before starting the next project.



## Execution safety rule — stop on repeated failure

For this Gallery project, do **not** continue retrying the same failing operation in a loop.

Operational rule:

1. A task segment must have a clearly defined output and verification point.
2. If a tool/action fails once, inspect the error and retry only once with a corrected approach.
3. If the corrected retry fails, **stop that segment immediately**.
4. Before any further action, inspect the remote state to establish exactly what succeeded and what did not.
5. Do not count temporary/unreferenced objects (for example an unattached Git blob) as completed work. A segment counts as complete only when the intended files are committed to the B11 branch and verified remotely.
6. After two failed attempts on the same transfer method, switch method rather than repeating it.
7. If the alternative method is not available or would risk corrupting/duplicating work, stop and report the blocker before continuing.
8. Work on **one project at a time** for image import/processing. Finish → commit → verify → report, then start the next project.
9. Never spend extended time silently retrying a failing transfer or conversion process.
10. Production `master` remains untouched until the completed Gallery preview is explicitly approved.


## Next implementation task

Image Batch A2:
- add the next 6–8 strongest case studies only;
- use finished photographs only;
- rename every imported image before it enters the repository;
- stop after the batch and verify the remote branch before proceeding.
