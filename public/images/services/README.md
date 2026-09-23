# Service imagery

Use one folder per service or supplier:

- kitchen-installation
- howdens
- wren
- ikea
- magnet
- wickes
- benchmarx
- b-and-q
- in-frame-kitchens
- internal-door-installation

Recommended filenames inside each folder:

- hero.webp — wide hero image, ideally 16:10 or 3:2
- detail-01.webp — image/text split image, ideally 4:3
- gallery-01.webp through gallery-06.webp — landscape or portrait project images

Keep the original high-resolution photographs outside the repository. Optimised WebP/AVIF derivatives can be added here later.

Image data is controlled in app/lib/service-images.ts so captions, alt text and project/location notes can be updated without changing page JSX.
