# Secure supplier presentation portals

The B&Q, Magnet, Wickes and Wren presentations live at `/supplier-portals/<supplier>`. They are intentionally absent from navigation and the sitemap, emit `noindex, nofollow, nocache` metadata, and are disallowed in `robots.txt`. These controls reduce discovery; the server-side access gate is the security boundary.

## Environment variables

Configure these as encrypted server environment variables in each Vercel environment that should serve a portal:

- `SUPPLIER_PORTAL_SIGNING_SECRET`: a cryptographically random value of at least 32 characters, shared by the four gates.
- `SUPPLIER_PORTAL_B_AND_Q_ACCESS_CODE`
- `SUPPLIER_PORTAL_MAGNET_ACCESS_CODE`
- `SUPPLIER_PORTAL_WICKES_ACCESS_CODE`
- `SUPPLIER_PORTAL_WREN_ACCESS_CODE`

Each access code must be at least 12 characters. Generate independent random codes (a password manager is suitable); do not reuse customer, staff or supplier passwords. Never prefix these variables with `NEXT_PUBLIC_`, place their values in source control, analytics, screenshots, tickets or presentation URLs, or send all suppliers the same code.

Successful entry creates a supplier-scoped, HTTP-only, SameSite=Strict cookie for 12 hours. The signed cookie includes a random nonce and expiry that is checked server-side on every access. Its HMAC binds the supplier, current access code and signing secret. Raw codes are never returned to the browser. The private portal view event is emitted from an authorized server-rendered marker once the B22 analytics script is ready; it sends only the stable supplier slug and a private-access flag. Existing public supplier installation measurement is retained. Pages and endpoints carry no-store and X-Robots-Tag headers; login/logout reject cross-origin form submissions.

## Grant, revoke and rotate

1. Set or replace only the relevant supplier code in Vercel and redeploy all affected environments.
2. Share the route and code separately through appropriate channels.
3. To revoke one supplier, replace or remove that supplier's code and redeploy. Existing cookies immediately fail validation because the code fingerprint changes.
4. To revoke every supplier session, rotate `SUPPLIER_PORTAL_SIGNING_SECRET` and redeploy. Then issue new codes if compromise is suspected.
5. Test the locked page, a rejected code, successful entry, supplier isolation, logout and the absence of portal content from HTML before access.

Preview and production variables are managed independently. Missing or undersized values fail closed and show a contact message. Do not store DBS records, identity documents, UTR details, insurance certificates, home addresses, private plans or other sensitive evidence in this repository. Exchange onboarding evidence through an approved private channel and publish only a reviewed status summary.
