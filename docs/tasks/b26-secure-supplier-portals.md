# B26 — Secure supplier presentation portals

Implement through Codex Cloud only.

Goal: create secure, supplier-specific Form & Frame installer-presentation portals for B&Q, Magnet, Wickes and Wren.

Requirements:
- Private/noindex architecture; exclude from sitemap and public navigation.
- Build separate supplier-specific presentation routes/content for B&Q, Magnet, Wickes and Wren while sharing reusable components.
- Add a real access-control gate suitable for supplier-specific links/codes using server-side environment configuration; no access secret may be exposed in client source or committed to the repository.
- Do not store raw DBS, identity documents, UTR, insurance certificates, home addresses or other sensitive documents in the public repository.
- Portal sections: introduction/coverage, 20+ years experience, design/CAD/manufacturing knowledge, kitchen-installation capability, trade-network/compliance status, flagship K01 summary, further evidence, documentation status, contact CTA.
- Use only verified facts. Mark evidence that is not yet supplied as pending/available on request rather than inventing it.
- Do not claim official supplier approval before approval exists.
- Public site SEO must not link/index these portals.
- Add analytics event support for supplier portal views only after access, using non-PII supplier identifier.
- Document environment variables/access management and how to revoke/rotate access.
- Update workflow to B26 / reserve B27.
- Run security-focused tests plus lint/type/build.
- PATCH-TRANSFER MODE: do not push. Return complete unified diff, tests, local HEAD SHA.