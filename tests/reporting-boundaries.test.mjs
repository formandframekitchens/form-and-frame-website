import { test } from 'node:test';
import assert from 'node:assert/strict';
import { comparePeriods, ownerOutcomes } from '../scripts/measurement-quality.mjs';

const period = (start, end, overrides = {}) => ({ source: 'gsc', scope: 'property', start, end, timezone: 'America/Los_Angeles', grouping: ['date'], filters: { country: 'gbr', search_type: 'web' }, includeFreshData: false, extractedAt: '2026-11-08T08:00:00Z', coverage: { status: 'complete', dataThrough: end, evidence: 'SYNTHETIC coverage declaration; not real reporting data' }, metrics: { clicks: 1 }, ...overrides });
const compare = (extractedAt, overrides = {}) => comparePeriods(period('2026-10-25', '2026-10-31', { extractedAt, ...overrides }), period('2026-11-01', '2026-11-07', { extractedAt, ...overrides }));

test('Pacific winter day must end locally, not at UTC midnight', () => {
  for (const instant of ['2026-11-08T01:00:00Z', '2026-11-08T07:59:59.999Z']) {
    const result = compare(instant);
    assert.equal(result.comparable, false);
    assert.equal(result.metrics, null);
    assert.ok(result.reasons.some(reason => reason.includes('reporting timezone')));
  }
  assert.equal(compare('2026-11-08T08:00:00Z').comparable, true);
});

test('Pacific summer day uses the daylight-saving boundary', () => {
  const check = extractedAt => comparePeriods(period('2026-10-14', '2026-10-20', { extractedAt }), period('2026-10-21', '2026-10-27', { extractedAt }));
  assert.equal(check('2026-10-28T06:59:59Z').comparable, false);
  assert.equal(check('2026-10-28T07:00:00Z').comparable, true);
});

test('equal calendar periods remain equal across the London clock change', () => {
  const overrides = { source: 'ga4', timezone: 'Europe/London', qaExcluded: true, filters: { source: 'google', medium: 'organic' }, extractedAt: '2026-10-28T00:00:00Z' };
  assert.equal(comparePeriods(period('2026-10-14', '2026-10-20', overrides), period('2026-10-21', '2026-10-27', overrides)).comparable, true);
});

test('positive-offset reporting day can finish before the UTC date changes', () => {
  const overrides = { source: 'ga4', timezone: 'Pacific/Auckland', qaExcluded: true, filters: { source: 'google', medium: 'organic' }, extractedAt: '2026-11-07T11:00:00Z' };
  assert.equal(comparePeriods(period('2026-10-25', '2026-10-31', overrides), period('2026-11-01', '2026-11-07', overrides)).comparable, true);
});

test('invalid timezone cannot certify a complete period', () => {
  for (const timezone of ['Unknown/Zone', ' ', null, 3]) assert.equal(compare('2026-11-09T12:00:00Z', { timezone }).comparable, false);
});

test('ambiguous, impossible and malformed extraction times require review', () => {
  for (const extractedAt of ['2026-11-09', '2026-11-09T12:00:00', '2026-11-31T12:00:00Z', '2026-11-09T25:00:00Z', '2026-11-09T12:00:00+14:30', 1794225600000, null]) assert.equal(compare(extractedAt).comparable, false);
  assert.equal(compare('2026-11-08T09:00:00+01:00').comparable, true);
});

test('owner confirmation is an explicit boolean, never coerced from strings', () => {
  for (const confirmedByOwner of ['false', 'true', 1, {}, false, null]) assert.equal(ownerOutcomes({ confirmedByOwner, asOf: '2026-10-27', genuineEnquiries: 7 }).genuineEnquiries, null);
  assert.equal(ownerOutcomes({ confirmedByOwner: true, asOf: '2026-10-27', genuineEnquiries: 0 }).genuineEnquiries, 0);
});

test('unknown intermediate qualification cannot hide impossible won-job totals', () => {
  assert.throws(() => ownerOutcomes({ confirmedByOwner: true, asOf: '2026-10-27', genuineEnquiries: 0, qualifiedEnquiries: null, wonJobs: 2 }), /inconsistent/);
  const result = ownerOutcomes({ confirmedByOwner: true, asOf: '2026-10-27', genuineEnquiries: 2, qualifiedEnquiries: null, wonJobs: 1 });
  assert.equal(result.qualifiedEnquiries, null);
  assert.equal(result.wonJobs, 1);
});
