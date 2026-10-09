# B23 — Premium Form & Frame brand lock-up

Implement through Codex Cloud only.

Goal: upgrade the visible Form & Frame identity so the website opens with a crisp, premium horizontal logo lock-up using the already-approved wardrobe mark.

Requirements:
- Inspect existing approved brand/logo assets and use the existing approved wardrobe mark; do not invent or redesign a different symbol.
- Header: wardrobe mark on the left, Form & Frame wording on the right, balanced as one horizontal lock-up.
- Make the identity visually stronger and more premium without overpowering navigation or damaging mobile layout.
- SVG/vector-first, crisp at all supported viewport densities.
- Clicking the complete lock-up returns to the homepage.
- Add a coordinated branded lock-up in the footer.
- Provide a stable public logo asset suitable for Form & Frame transactional/business email signatures; it must be usable as a clickable image linking to https://formandframekitchens.co.uk when emails are authored.
- Preserve accessibility, alt/aria labelling, keyboard behaviour and current navigation.
- Check desktop, tablet and narrow mobile proportions.
- Do not alter unrelated gallery/content or create a new logo concept.
- Update docs/development-workflow.md to record B23 and reserve B24.
- Run lint/type/build and focused browser/responsive checks.
- PATCH-TRANSFER MODE: do not push. Return a complete unified diff from the branch starting point to completed local HEAD in fenced diff blocks, split if needed, plus tests and local HEAD SHA.