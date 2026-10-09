# B23–B27 integration

Integrate the already-completed Codex work from PRs #91, #92, #93, #94 and #95 onto the CURRENT latest master, which already contains B22.

Purpose: produce one coherent production-ready implementation of today's B23–B27 work without losing any batch because the original branches were all created independently from B22.

Required sources:
- PR #91 B23 premium Form & Frame brand lock-up
- PR #92 B24 Google reviews/trust
- PR #93 B25 Instagram-to-website content
- PR #94 B26 secure supplier portals
- PR #95 B27 K01 Surbiton case-study framework
- Current master and root AGENTS.md
- Current docs/development-workflow.md

Requirements:
1. Recreate/integrate the implementation intent of ALL five completed Codex patches onto latest master.
2. Resolve overlapping changes in app/globals.css, app/lib/analytics.ts, app/components/google-analytics.tsx, docs/development-workflow.md, robots/sitemap and any other shared files so no batch removes another batch's functionality.
3. Preserve B22 GA4 exactly in substance, including privacy constraints and enquiry tracking.
4. B23: premium wardrobe-mark + Form & Frame horizontal header/footer lock-up, homepage linking, public SVG and PNG email-signature assets.
5. B24: genuine Google reviews/trust system, empty until verified data/profile URL is configured, no fabricated reviews or self-serving AggregateRating/Review schema.
6. B25: lightweight “Latest from Form & Frame” section using first-party content and Instagram outbound analytics.
7. B26: secure B&Q/Magnet/Wickes/Wren supplier portals, server-side access control, noindex/sitemap exclusion, no secrets in repo, fail closed until env vars configured.
8. B27: K01 Surbiton draft/noindex case-study framework with verified facts only; no exact address or fabricated media.
9. Do NOT implement B28 in this integration.
10. Preserve current live galleries, visibility rules, image ordering and enquiries.
11. Run lint, TypeScript, production build, focused/request tests and any available browser checks.
12. PATCH-TRANSFER MODE: do not rely on git push from this legacy task environment.
13. Return ONE COMPLETE unified diff from the integration branch starting point to completed local HEAD. If too large, split into ordered PATCH 1/N comments.
14. For any binary file, especially the B23 PNG, provide a base64 payload or another complete machine-transportable representation in the PR comments so ChatGPT can reproduce the exact Codex-authored binary through the authenticated GitHub connector.
15. Report exact local HEAD and tests.
