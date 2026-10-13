# Form & Frame site icon — B30 reference update

The site icon uses the wardrobe symbol measured from the owner's light/dark Form & Frame Kitchens references: separate tapered mirrored Fs, fine central division, thin top/bottom rails and two warm-gold handles. A white square background keeps the dark lines visible in both light and dark browser interfaces. Small-size rasterisation naturally softens the finest lines.

- Shared editable geometry: `app/lib/brand-artwork.json`; rendered vector: `public/brand/form-and-frame-mark.svg`.
- Browser fallback: `app/favicon.ico`, containing 16, 32, 48, 64, 128 and 256 pixel images.
- Site/search icon: `app/icon.png`, 192 × 192 pixels.
- Apple home-screen icon: `app/apple-icon.png`, 180 × 180 pixels.

Run `node scripts/render-brand-assets.mjs` to regenerate the icons and public logo assets from the shared source. Next.js discovers the root-level icon files and emits their links on every page. Existing URLs remain in place. Header/footer lockups use the same reference geometry; the separate enquiry-email attachment is unchanged.

Google must recrawl the homepage and icon before its search appearance can update. See [Google's favicon guidance](https://developers.google.com/search/docs/appearance/favicon-in-search). Search display is controlled by Google; this change provides the correct public image and metadata.
