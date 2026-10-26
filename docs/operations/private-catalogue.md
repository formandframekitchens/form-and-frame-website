# Private catalogue release dependency

This branch contains synthetic fixtures only. It must not replace production yet.

The new server-only loader checks portfolio authorization before retrieving catalogue data. Local and protected preview environments use synthetic fixtures even when a catalogue path is configured. An unknown deployed environment fails closed. Production requires PRIVATE_PORTFOLIO_CATALOGUE_PATH matching private-portfolio/catalogue/<version>.json in the existing private Blob store.

The versioned JSON shape is { schemaVersion: 1, projects, assets, stories }. The parser validates field types, bounded collections, safe media filenames/pathnames, unique project slugs and referenced image/video assets. Unknown fields are discarded. The read is capped at 2 MiB and six seconds. A single validated server-memory cache entry expires after 60 seconds and is consulted only after authentication. Use immutable version paths and change the configured pointer for a release; do not overwrite published catalogue versions.

No private project data, media binaries or credentials are included in this repository. No bundle has been uploaded and no production environment setting changed. The existing media route still applies authentication, no-store/noindex headers and byte-range checks. Catalogue failures return an unavailable view or media 503; they never switch to a public or synthetic production fallback.

Before production: obtain exact source/destination approval; assemble and validate the approved existing catalogue outside public Git; privately upload and verify one version; check all actual references and supported schema constraints; review the exact production candidate, credential/environment scope, rollback and authenticated/unauthenticated media behaviour. The production build guard remains in place until this separate release review.

Validation uses synthetic data only: npm run test:private-data; private-portfolio and portfolios browser suites; build/lint/types and release guards. This is architecture readiness, not a completed private migration.
