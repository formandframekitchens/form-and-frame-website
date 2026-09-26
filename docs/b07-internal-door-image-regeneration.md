# B07 — Internal Door Image Regeneration Hand-off

## Final-production rule

The genuine project photographs may be used for branch review with non-destructive `object-fit: contain`, but production-ready B07 is not final until the selected door photographs have been regenerated/refined as dedicated web assets.

Do not describe normal resizing, format conversion, sharpening or CSS containment as AI regeneration.

## Output specification

- 1600 × 2000 px (4:5 portrait)
- WebP, sRGB
- Keep the complete door and frame visible.
- Preserve the genuine door design, glazing, ironmongery, frame, finish and project details.
- Extend only surrounding wall, ceiling, floor or room surfaces where necessary.
- Conservative clarity/upscaling only; no stylisation or architectural redesign.

## Source-to-final mapping

- `matching-internal-doors-brass-ironmongery.webp` ← `black-oak-brass-inlay-internal-door-set.jpg`
- `dark-timber-panelled-internal-door-installation.webp` ← `bespoke-dark-timber-panelled-internal-door.jpg`
- `black-glazed-double-internal-door-installation.webp` ← `glazed-black-oak-double-internal-doors.jpg`
- `sliding-pocket-door-installation.webp` ← `sliding-pocket-door-and-folding-door-installation.jpg`

## Regeneration rule

Use the supplied genuine photograph as the sole source. Preserve the actual door/set, frame, glazing, ironmongery, timber finish, proportions and identifiable project details. Create a natural 4:5 architectural photograph by extending only existing surrounding surfaces needed to fit the canvas. Keep the complete door and frame visible with breathing room. Do not redesign the door, change hardware, invent joinery, alter glazing, add branding/text, or fabricate a different project.

## Integration

After regeneration, add the final WebP files under `public/images/internal-doors/`, update the image references and alt text, keep the common 4:5 layout, and re-run lint, typecheck, build and responsive checks before production approval.
