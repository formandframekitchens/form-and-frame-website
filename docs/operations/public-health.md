# Public website health

The manual checker makes five GET requests to the permanent public homepage, fitting page, contact page, robots file and sitemap. It follows no redirects, posts no forms, uses no credentials and stores no page bodies. It checks HTTP status, content type, critical content and unintended noindex signals. Each request has a seven-second timeout and a 2 MiB response limit.

Run `node scripts/public-health.mjs` for a one-off observation. An optional output filename saves the sanitised result. The workflow is manual only: no cron, customer mail or external alert integration is enabled. GitHub exposes workflow_dispatch after the workflow exists on the default branch; this draft branch is not merged. Default GitHub notification settings remain owner-controlled.

A pure incidentTransition helper distinguishes new/changed, ongoing and recovered failures. No external notifications are sent. A future scheduled monitor needs an approved interval, budget, state storage and alert destination. Do not claim continuous monitoring from this prototype.

For an incident, compare the deployment alias and last approved revision, inspect the failed public route, then check hosting logs without customer payloads. Do not resubmit genuine enquiries or automatically promote/rollback a deployment. Restoring availability does not prove inbox delivery or SEO gains.

Controlled tests use synthetic responses for errors, unexpected redirects, wrong content, oversized bodies and repeated incidents. The production observation is read-only and separate from those failure tests.
