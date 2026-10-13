# B31 — Compact logo wording

Owner instruction: 13 October 2026. Base: `832ac261a114d707ff3b68cc4e130d6fb6784bd4`. Branch: `b31-compact-logo-wording`. Next batch: B32.

The owner approved the B30 artwork and requested tighter vertical grouping of FORM & FRAME, the gold divider and KITCHENS beside the wardrobe. Only their y positions change in the shared artwork: wordmark 8 → 30, divider 74.6 → 70 and subtitle 109 → 82. The text group's actual outlined vertical bounds become 30–97.33, centred at 63.66 in the 128-unit canvas, beside the unchanged wardrobe centred at 64. The gaps around the divider are 8.35 and 9.9 units.

All x positions, scales, letter outlines, colours, divider dimensions and wardrobe geometry remain unchanged. The public lockup SVG/PNG are regenerated from the shared source. Symbol-only icons and the mark SVG remain byte-identical. Header/footer sizes, CSS, navigation, gallery content and all other website behaviour are unchanged.

Use lint, TypeScript, production build and the existing brand smoke tests, then inspect desktop and 390/320px header/footer renders. No new tests or unrelated regression suite are needed. The architect reviews the exact deployment preview before the standing-authorised master release and production check; the author does not create or merge the PR.

Author validation on 13 October 2026: production build passed with 141 generated pages; TypeScript passed; lint passed with the pre-existing private progress-gallery raw-image warning. Both existing desktop/mobile brand smoke checks passed. Header/footer screenshots at 1366, 390 and 320px show the compact centred grouping; one-off browser checks found no overflow, navigation collision or page errors. Git confirms the mark SVG, favicon, site/Apple icons, header component and CSS have no changes.
