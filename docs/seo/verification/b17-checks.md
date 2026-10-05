# B17 verification

Checked 5 October 2026 against a production build.

- `npm run build`: passed; 101 generated routes.
- `npm run lint`: no errors. One existing Next Image warning remains in the unchanged private progress-gallery page.
- `npm run test:e2e` with Chrome: 68 passed, 4 intentionally skipped duplicate viewport checks; 58.5 seconds.
- 27 additional page/viewport reviews across desktop, mobile and tablet: no horizontal overflow or browser errors. The homepage heading and mobile joinery image frame were corrected during review.
- Every sitemap page has a unique title and description, one H1, an indexable crawler response and its canonical public URL.
- All 277 public photos appear in the image sitemap. All 515 renamed encodings return unchanged bytes; their previous URLs issue permanent redirects.
- Compared the assets with the pre-B17 Git version: 515 encodings are byte-identical. All 70 stored gallery identities, page slugs, confirmed locations and photo sequences are retained. The five hidden gallery records are unchanged.
- Gallery order, filters, no-JavaScript navigation, keyboard photo dialog, enquiry prefill, invalid-input rejection, private gallery protection and notification payloads passed the existing suite. No external test email was sent.

This verification does not measure Google rankings, Keyword Planner bid data or real-user Core Web Vitals. Those require the account data and follow-up described in the SEO plan.
