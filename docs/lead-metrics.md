# Offline enquiry-metrics validation

`scripts/lead-metrics.mjs` exports a pure `leadMetrics(records)` function. It has no file, network, database or browser-storage access. The website does not load it. This is a tested reporting component, not an adopted customer ledger or automated lead integration.

Pass reviewed records with an anonymous `enquiryReference`, boolean/null `genuine`, optional boolean/null `isQa` and `qualified`, and optional `duplicateOf`. Date fields are `receivedAt`, `firstHumanResponseAt`, `quotedAt`, `wonAt` and `lostAt`. Dates accept `YYYY-MM-DD`; precise timestamps must include an explicit timezone, such as `2026-10-27T09:00:00Z`. CSV values such as `yes` or `pending` must be deliberately mapped before calling the function; there is no implicit coercion or CSV importer.

- Exact repeated references are counted once. Conflicting measurement fields for one reference require review; no version is silently selected.
- QA, marked duplicates and unconfirmed genuine status are reported separately.
- Missing IDs for genuine enquiries, invalid dates, outcomes before receipt, wins before the recorded quotation, and simultaneous won/lost dates withhold totals. The owner must resolve the source record; the tool does not rewrite it.
- Response-hour measurements need both precise zoned timestamps. Date-only records remain usable for stage counts, but do not assume midnight. Mixed-precision ordering uses the Europe/London business day.
- Empty or wholly unverified data returns unavailable totals. A valid report covers only the supplied records; it does not prove complete business coverage or search attribution.
- Diagnostic issues contain row numbers, field names and codes. Neither customer fields nor reference values are echoed.

Status values are `calculated`, `needs-review`, `no-records` and `no-genuine-records`. Inspect `status` before using totals. `qualificationPending`, `firstResponseSample`, `excluded` and `collapsedDuplicates` explain the reporting coverage.

The existing customer-data location, access and retention decisions remain with the owner. Do not commit real records or run this tool over an unapproved source. Tests use synthetic records only:

```sh
node --test tests/lead-metrics.test.mjs
```
