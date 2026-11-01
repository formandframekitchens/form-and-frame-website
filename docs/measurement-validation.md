# Offline review validation

`scripts/measurement-quality.mjs` checks supplied comparison records and synthetic-safe query aggregates. It does not connect to Google, read files or publish a report. It is not loaded by the public website.

The equal-period check requires the same source, scope, filters, timezone and grouping, declared settled coverage and an extraction after the final reporting day has ended. The extraction time must be an actual ISO date/time with an explicit UTC offset or `Z`; the reporting timezone must resolve in `Intl.DateTimeFormat`. Completion is based on the calendar day in that timezone, including daylight-saving changes. It is not based on UTC midnight or a fixed 24-hour period assumption.

Google's daily Search Console grouping uses Pacific Time. Its 24-hour view differs and is outside this daily-period tool: [official date and timezone guidance](https://support.google.com/webmasters/answer/17011259?hl=en), checked 27 October 2026. For Analytics, record the verified property reporting timezone. Elapsed time alone does not establish that delayed source data is settled; separate coverage evidence is still required.

`ownerOutcomes` requires the boolean `true` for owner confirmation. It preserves unknown stages and rejects contradictions among every known pair of enquiry, qualification and won-job counts, including when the middle stage is unknown. An owner's dated zero is not carried forward automatically.

Query samples remain distinct from property totals, missing metrics remain null, and a contact event is not an enquiry. The tool checks the supplied record; the human reviewer must verify source identity, extraction settings, completeness and genuine business evidence. No future outcome review is completed by running tests.

```sh
node --test tests/measurement-quality.test.mjs tests/reporting-boundaries.test.mjs
```

Tests contain invented metrics and dates only. No real analytics extracts, customer records, private reference locations or account credentials belong in this repository.
