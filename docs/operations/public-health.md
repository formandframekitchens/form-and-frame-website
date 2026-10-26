# Public website health

The manual checker makes five GET requests to the permanent public homepage, fitting page, contact page, robots file and sitemap. It follows no redirects, posts no forms, uses no credentials and stores no page bodies. It checks HTTP status, content type, critical content and unintended noindex signals. Each request has a seven-second timeout and a 2 MiB response limit.

Run `node scripts/public-health.mjs` for a one-off observation. An optional output filename saves the sanitised result. The workflow is manual only: no cron, customer mail or external alert integration is enabled. GitHub exposes workflow_dispatch after the workflow exists on the default branch; this draft branch is not merged. Default GitHub notification settings remain owner-controlled.

For a manual check that remembers the previous observation, run:

```sh
node scripts/public-health-monitor.mjs --state .health-state/production.json
```

This makes the same five public GET requests and atomically saves a local checkpoint. A new or changed failure creates one incident event. An unchanged failure remains ongoing with no duplicate event. Recovery creates one event; repeated healthy checks stay quiet. Output explicitly says `notificationSent: false`. Exit codes are 0 for healthy, 1 for a detected public-site failure, and 2 for invalid arguments or an unusable state checkpoint.

State contains only the fixed public route paths, HTTP status/reason, timestamps and the latest 50 incident events. Older event removal is counted. It is a bounded observation history, not a notification delivery queue, authenticated audit log or customer-data store. Response bodies and arbitrary error text are never retained. Keep the state under the ignored `.health-state` directory or an explicitly selected private local operations folder, outside public assets. It is excluded from Git and Vercel uploads at the documented path.

An exclusive lock prevents concurrent writers. Damaged, oversized and out-of-order state is rejected without resetting the previous checkpoint. A process crash may leave a lock or temporary file: first confirm no checker process is running, preserve the files for inspection, and explicitly clear the stale lock before retrying. Do not automatically remove locks or treat a state error as a healthy website. The local file inherits the host's directory access controls; this is not encrypted storage.

The existing GitHub manual workflow still produces only a one-off report; it does not share this local state. No recurrence or external notifications are enabled. A scheduled monitor still needs an approved interval, durable execution/state location and alert destination. Do not claim continuous monitoring or mobile push delivery from this prototype.

For an incident, compare the deployment alias and last approved revision, inspect the failed public route, then check hosting logs without customer payloads. Do not resubmit genuine enquiries or automatically promote/rollback a deployment. Restoring availability does not prove inbox delivery or SEO gains.

Controlled tests use synthetic responses for errors, unexpected redirects, wrong content, oversized bodies and repeated incidents. The production observation is read-only and separate from those failure tests.
