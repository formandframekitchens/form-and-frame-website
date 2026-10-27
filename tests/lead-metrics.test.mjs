import { test } from "node:test";
import assert from "node:assert/strict";
import { leadMetrics } from "../scripts/lead-metrics.mjs";

const row = overrides => ({ enquiryReference: "SYNTH-001", genuine: true, qualified: true, receivedAt: "2026-10-01T09:00:00Z", ...overrides });

test("repeated copies of one reference count once without mutating the input", () => {
  const record = Object.freeze(row({ quotedAt: "2026-10-02", firstHumanResponseAt: "2026-10-01T11:00:00Z" }));
  const result = leadMetrics(Object.freeze([record, { ...record }]));
  assert.equal(result.status, "calculated");
  assert.equal(result.genuineEnquiries, 1);
  assert.equal(result.quoted, 1);
  assert.equal(result.collapsedDuplicates, 1);
  assert.equal(result.medianFirstHumanResponseHours, 2);
});

test("different references remain separate even when their other values match", () => {
  const result = leadMetrics([row({}), row({ enquiryReference: "SYNTH-002" })]);
  assert.equal(result.genuineEnquiries, 2);
  assert.equal(result.collapsedDuplicates, 0);
});

test("conflicting revisions and QA classifications do not select an arbitrary winner", () => {
  for (const other of [row({ qualified: false }), row({ quotedAt: "2026-10-02" }), row({ isQa: true }), row({ genuine: null })]) {
    const result = leadMetrics([row({}), other]);
    assert.equal(result.status, "needs-review");
    assert.equal(result.genuineEnquiries, null);
    assert.equal(result.issues[0].code, "conflicting-records");
  }
});

test("invalid quote dates cannot become a quote or conversion", () => {
  for (const quotedAt of ["not-a-date", "2026-02-30", "2026-13-01", "10/02/2026", "2026-10-02T11:00", "2026-10-02T25:00:00Z", "2026-10-02T09:00:00+14:30", 123, true, " "]) {
    const result = leadMetrics([row({ quotedAt })]);
    assert.equal(result.status, "needs-review", String(quotedAt));
    assert.equal(result.quoted, null);
    assert.equal(result.qualifiedToQuoteRate, null);
  }
});

test("invalid outcomes and chronological contradictions require review", () => {
  for (const extra of [{ wonAt: "later" }, { lostAt: "2026-02-30" }, { wonAt: "2026-10-03", lostAt: "2026-10-04" }, { quotedAt: "2026-09-30" }, { firstHumanResponseAt: "2026-10-01T08:00:00Z" }, { quotedAt: "2026-10-03", wonAt: "2026-10-02" }]) {
    const result = leadMetrics([row(extra)]);
    assert.equal(result.status, "needs-review");
    assert.equal(result.won, null);
  }
});

test("date-only records retain quote counts but do not invent response hours", () => {
  const result = leadMetrics([row({ receivedAt: "2026-10-01", firstHumanResponseAt: "2026-10-02", quotedAt: "2026-10-03" })]);
  assert.equal(result.status, "calculated");
  assert.equal(result.quoted, 1);
  assert.equal(result.firstResponseSample, 0);
  assert.equal(result.medianFirstHumanResponseHours, null);
});

test("mixed date precision does not reject a quotation on the same London day", () => {
  const result = leadMetrics([row({ receivedAt: "2026-10-01T23:30:00Z", quotedAt: "2026-10-02" })]);
  assert.equal(result.status, "calculated");
  assert.equal(result.quoted, 1);
});

test("explicit offsets and the clock change preserve elapsed response time", () => {
  const result = leadMetrics([row({ receivedAt: "2026-10-25T01:30:00+01:00", firstHumanResponseAt: "2026-10-25T01:30:00+00:00" })]);
  assert.equal(result.medianFirstHumanResponseHours, 1);
});

test("QA, marked duplicates and unknown genuine status remain outside the real total", () => {
  const result = leadMetrics([row({}), row({ enquiryReference: "SYNTH-QA", isQa: true }), row({ enquiryReference: "SYNTH-DUP", duplicateOf: "SYNTH-001" }), { genuine: null }]);
  assert.equal(result.genuineEnquiries, 1);
  assert.deepEqual(result.excluded, { qa: 1, explicitlyDuplicated: 1, unconfirmed: 1, notGenuine: 0 });
});

test("empty and wholly unverified records are unavailable, not zero business enquiries", () => {
  assert.equal(leadMetrics([]).status, "no-records");
  assert.equal(leadMetrics([]).genuineEnquiries, null);
  assert.equal(leadMetrics([{ genuine: null }]).status, "no-genuine-records");
  assert.equal(leadMetrics([{ genuine: null }]).genuineEnquiries, null);
});

test("malformed rows, missing IDs and coerced flags cannot produce a report", () => {
  for (const input of [null, {}, [null], [42], [row({ enquiryReference: " " })], [row({ isQa: "false" })], [row({ genuine: "yes" })], [row({ qualified: "pending" })], [row({ duplicateOf: {} })]]) {
    assert.equal(leadMetrics(input).status, "needs-review");
    assert.equal(leadMetrics(input).genuineEnquiries, null);
  }
});

test("errors and aggregate output never echo record values or customer details", () => {
  const record = row({ enquiryReference: "PRIVATE-REF", name: "PRIVATE-NAME", email: "PRIVATE-EMAIL", quotedAt: "PRIVATE-BAD-DATE" });
  const output = JSON.stringify(leadMetrics([record]));
  for (const marker of ["PRIVATE-REF", "PRIVATE-NAME", "PRIVATE-EMAIL", "PRIVATE-BAD-DATE"]) assert.equal(output.includes(marker), false);
});

test("median and qualification conversion use their explicit valid subsets", () => {
  const result = leadMetrics([row({ firstHumanResponseAt: "2026-10-01T10:00:00Z", quotedAt: "2026-10-02" }), row({ enquiryReference: "SYNTH-002", firstHumanResponseAt: "2026-10-01T12:00:00Z" }), row({ enquiryReference: "SYNTH-003", qualified: null })]);
  assert.equal(result.genuineEnquiries, 3);
  assert.equal(result.qualificationPending, 1);
  assert.equal(result.firstResponseSample, 2);
  assert.equal(result.medianFirstHumanResponseHours, 2);
  assert.equal(result.qualifiedToQuoteRate, 0.5);
});

test("calendar validation accepts real leap days and rejects non-leap days", () => {
  assert.equal(leadMetrics([row({ receivedAt: "2028-02-29", quotedAt: "2028-03-01" })]).status, "calculated");
  assert.equal(leadMetrics([row({ receivedAt: "2027-02-29" })]).status, "needs-review");
});
