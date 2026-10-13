# B29 — Bespoke Joinery gallery curation

Owner instruction: 13 October 2026. Base: `a0a1e8a909b8b0d12dcbaa17bba07f000cf65032`. Branch: `b29-gallery-curation`.

The architect visually reviewed all 95 public joinery covers and 239 additional image previews, then provided an exact editorial order and 15 existing-photo cover choices. The opening selection prioritises finished-room impact, clear joinery, balanced composition, useful lighting and a mix of furniture types. Installation-stage and weaker photographs remain available lower in the selection. This is editorial judgement, with no public quality scores or new workmanship claims.

`app/lib/gallery-curation.ts` applies the full sequence only when the requested portfolio is Bespoke Joinery, including its search and category-filter subsets. The general `/gallery` retains its established family grouping and bottom selection. Kitchens, related-project ranking and category landing-page preferences are unchanged. Future unranked joinery remains visible after the curated selection.

The 15 chosen cover images move from their original positions to the front of their existing galleries, so the card and the first viewer image agree. Other image objects keep their relative order. Cover choices are shared wherever that project is presented. Every image, caption, alt text, route, gallery membership and hidden record is retained; image bytes are unchanged. `docs/gallery/b29-curation.json` records the full order, original image indices, public image paths and selection rationale.

No new galleries, new images, retouching, template changes or dependencies are introduced. The next development batch is B30; the next new gallery remains G109, with K01 still reserved for the separately gated case study.

Validation uses the existing gallery integrity, visibility, bottom-order, portfolio, search and first-visible-image checks, plus lint, TypeScript and production build. No new tests are required for this reversible editorial change. The architect reviews the exact preview commit before the standing-authorised master merge, then checks production. No runner or marketing schedule settings change.

Author validation on 13 October 2026: production build passed with 141 generated pages; TypeScript passed; lint passed with the existing raw-image warning in the private progress gallery. The focused existing desktop/mobile selection passed 19 tests with one viewport-independent skip, without test edits. The first visible photograph still has to load with a positive natural width and use contain framing. A one-off runtime comparison verified the exact 95-ID order and 15 original-image permutations across 45 search/category combinations, unchanged general-gallery/Kitchens/related-project ordering, 96 public galleries, 346 public images and zero changed image files. The architect independently compared all 101 records with the base: 15 approved image-order/cover changes and 86 otherwise identical records.
