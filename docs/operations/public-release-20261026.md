# Public improvements with the private site preserved

This branch is a protected **public review**, based on the reconciled live public site. It excludes the private-catalogue loader migration from the earlier proposal.

The intended public changes are:

- Clarify the owner-confirmed £300 per specialist per eight-hour day, with no VAT added and separately agreed extras.
- Retain enquiry details after delivery failures; keep retries idempotent; bound upload size and request time; improve error accessibility.
- Add an optional contact-time preference, explicitly a request rather than a confirmed appointment.
- Apply the tested dependency updates without a redesign.
- Show the lift-up-cupboard guide only as a review draft, excluded from the live article collection, feed and sitemap.

No existing stylesheets, homepage imagery, gallery ordering, navigation, private passwords, session settings, protected route handlers or private media destinations are part of the public patch.

## Two distinct validation boundaries

1. **This repository and protected preview:** public code and approved public assets, with synthetic private fixtures. Build, lint, types, dependency audit, enquiry/privacy tests and desktop/mobile review run here. Hosted preview submissions are disabled and analytics are omitted.
2. **The existing full source on the owner's machine:** only an explicit public-file allowlist is applied. The real private catalogue stays in place, with checksums compared against the verified live baseline. Real private authentication, media and public flows are tested locally. Private content and local evidence never enter this public repository or its preview.

The online preview is not a production artifact. Its production build guard remains enforced. Do not merge or promote this branch as the complete live website.

After the owner reviews the preview and separately approves publication, recheck the live deployment and full-source manifest, stage a production candidate from the preserved full source using the existing authorised workflow, verify it and only then promote it. Any changed source or failed preservation/access check stops the release. Keep the current live deployment as rollback.

This approach requires no new storage, catalogue transfer, access change or redesign. The private migration proposal remains deferred.
