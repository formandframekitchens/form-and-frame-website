# Form & Frame site icon — B18

The site icon reproduces the wardrobe symbol from the owner's supplied Form & Frame Kitchens logo, without the wordmark. It uses the mirrored F-shaped doors, central division, top and bottom rails, and two gold handles. The lines are slightly strengthened for legibility at small tab sizes. A white square background keeps the dark lines visible in both light and dark browser interfaces.

- Editable vector: `public/brand/form-and-frame-mark.svg`.
- Browser fallback: `app/favicon.ico`, containing 16, 32, 48, 64, 128 and 256 pixel images.
- Site/search icon: `app/icon.png`, 192 × 192 pixels.
- Apple home-screen icon: `app/apple-icon.png`, 180 × 180 pixels.

Next.js discovers these root-level files and emits their icon links on every page. The header wordmark and email branding are unchanged. The old default favicon is replaced at its existing URL.

Google must recrawl the homepage and icon before its search appearance can update. See [Google's favicon guidance](https://developers.google.com/search/docs/appearance/favicon-in-search). Search display is controlled by Google; this change provides the correct public image and metadata.
