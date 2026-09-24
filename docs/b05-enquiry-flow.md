# B05 — Services and kitchen enquiries

The existing `services-hub-and-enquiry` branch remains the B05 TEST branch. Review its preview before merging into `master` (SOLID).

## Visitor journey

- `/services` presents four horizontal numbered rows with thumbnails, short descriptions and links to the existing service routes.
- `/kitchen-installation` starts with four choices: an existing kitchen, fitting a supplied in-frame kitchen, a complete in-frame design/supply/installation project, or early-stage advice.
- Installation enquiries can select any of the seven existing suppliers, another/overseas supplier, or “Not chosen yet”.
- The enquiry link carries `service`, `supplier` and `installation` identifiers to `/contact`, with `#enquiry-form` as the destination.
- Supplier detail pages pass their supplier in both quote links. Other service pages pass their service.

Example: `/contact?service=kitchen-installation&supplier=b-and-q&installation=own-kitchen#enquiry-form`.

The shared options and URL validation live in `app/lib/enquiry.ts`. Unknown values and incompatible kitchen details are ignored. Visitors can edit the prefilled fields; changing the service clears the previous kitchen choices. Prepared emails contain readable labels for the final selections.

The form continues to prepare an email in the visitor's email application. It does not send a server-side submission or upload files.

## Routes and imagery

All existing routes, supplier links, metadata, canonical URLs and sitemap entries remain available. Query variants retain the canonical `/contact` URL. The Services ItemList retains the four routes in order.

Kitchen and cabinetry thumbnails use existing website photographs. Wardrobe and door thumbnails are SVG illustrations, labelled as illustrations in their alternative text; they replace missing image references without presenting invented portfolio photographs.

## Verification

Run `npm run build`, `npm run lint`, then `npm run test:e2e`. Playwright starts the production build on port 3105. Install its Chromium browser with `npx playwright install chromium`, or set `PLAYWRIGHT_CHANNEL=msedge` to use an installed Microsoft Edge browser. In PowerShell, use `$env:PLAYWRIGHT_CHANNEL = 'msedge'`.

The browser suite covers desktop (1366 × 768) and mobile (390 × 844), all four kitchen choices, seven suppliers, service links, refresh, editable selections, invalid URL values, keyboard use, email content, canonical URLs and sitemap coverage. Screenshots and failure traces are saved under ignored `test-results/`.
