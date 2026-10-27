const dateFields = ["receivedAt", "firstHumanResponseAt", "quotedAt", "wonAt", "lostAt"];
const missing = value => value == null || value === "";
const londonDay = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London", year: "numeric", month: "2-digit", day: "2-digit" });

function parseDate(value) {
  if (missing(value)) return null;
  if (typeof value !== "string") return false;
  const match = /^(\d{4})-(\d{2})-(\d{2})(?:T([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d)(?:\.(\d{1,3}))?)?(Z|[+-](?:0\d|1[0-4]):[0-5]\d))?$/.exec(value);
  if (!match) return false;
  const year = Number(match[1]), month = Number(match[2]), day = Number(match[3]);
  const calendar = new Date(Date.UTC(year, month - 1, day));
  if (year < 1000 || calendar.getUTCFullYear() !== year || calendar.getUTCMonth() !== month - 1 || calendar.getUTCDate() !== day) return false;
  if (!match[4]) return { day: value, time: null };
  if (/^[+-]14:(?!00)/.test(match[8])) return false;
  const time = Date.parse(value);
  return Number.isFinite(time) ? { day: londonDay.format(new Date(time)), time } : false;
}

function precedes(first, second) {
  if (!first || !second) return false;
  return first.time !== null && second.time !== null ? first.time < second.time : first.day < second.day;
}

function emptyMetrics() {
  return { genuineEnquiries: null, qualificationPending: null, qualified: null, quoted: null, won: null, lost: null, firstResponseSample: 0, medianFirstHumanResponseHours: null, qualifiedToQuoteRate: null };
}

/** Pure offline aggregation. Never loads, stores, transmits or echoes source records. */
export function leadMetrics(records) {
  const issues = [];
  const excluded = { qa: 0, explicitlyDuplicated: 0, unconfirmed: 0, notGenuine: 0 };
  const limits = "Counts cover supplied, validated unique records only. They do not establish complete business or source-attribution coverage. Missing records and withheld invalid totals are not zero enquiries.";
  const result = { status: "needs-review", ...emptyMetrics(), suppliedRecords: Array.isArray(records) ? records.length : null, collapsedDuplicates: 0, excluded, issues, limits };
  if (!Array.isArray(records)) {
    issues.push({ row: null, field: "records", code: "expected-array" });
    return result;
  }
  if (!records.length) return { ...result, status: "no-records" };
  const groups = new Map();
  for (const [index, record] of records.entries()) {
    const row = index + 1;
    if (!record || typeof record !== "object" || Array.isArray(record)) {
      issues.push({ row, field: "record", code: "expected-object" });
      continue;
    }
    let invalid = false;
    for (const field of ["genuine", "isQa", "qualified"]) {
      if (record[field] != null && typeof record[field] !== "boolean") {
        issues.push({ row, field, code: "expected-boolean-or-null" });
        invalid = true;
      }
    }
    if (!missing(record.duplicateOf) && (typeof record.duplicateOf !== "string" || !record.duplicateOf.trim())) {
      issues.push({ row, field: "duplicateOf", code: "invalid-reference" });
      invalid = true;
    }
    if (invalid) continue;
    const eligible = record.genuine === true && record.isQa !== true && !record.duplicateOf;
    if (record.isQa === true) excluded.qa++;
    else if (record.duplicateOf) excluded.explicitlyDuplicated++;
    else if (record.genuine === false) excluded.notGenuine++;
    else if (record.genuine == null) excluded.unconfirmed++;
    const reference = typeof record.enquiryReference === "string" ? record.enquiryReference.trim() : "";
    if (!reference) {
      if (eligible) issues.push({ row, field: "enquiryReference", code: "required-for-genuine-enquiry" });
      continue;
    }
    const group = groups.get(reference) ?? [];
    group.push({ row, record, eligible });
    groups.set(reference, group);
  }

  const real = [];
  const signature = record => JSON.stringify([record.genuine ?? null, record.isQa === true, record.duplicateOf || null, record.qualified ?? null, ...dateFields.map(field => record[field] ?? null)]);
  for (const group of groups.values()) {
    if (!group.some(item => item.eligible)) continue;
    const first = group[0];
    if (group.some(item => signature(item.record) !== signature(first.record))) {
      issues.push({ rows: group.map(item => item.row), field: "enquiryReference", code: "conflicting-records" });
      continue;
    }
    result.collapsedDuplicates += group.length - 1;
    const dates = {};
    for (const field of dateFields) {
      dates[field] = parseDate(first.record[field]);
      if (dates[field] === false) issues.push({ row: first.row, field, code: "invalid-calendar-date-or-zoned-timestamp" });
    }
    if (dates.wonAt && dates.lostAt) issues.push({ row: first.row, field: "outcome", code: "both-won-and-lost" });
    for (const field of dateFields.slice(1)) {
      if (precedes(dates[field], dates.receivedAt)) issues.push({ row: first.row, field, code: "before-enquiry" });
    }
    if (precedes(dates.wonAt, dates.quotedAt)) issues.push({ row: first.row, field: "wonAt", code: "before-recorded-quote" });
    real.push({ record: first.record, dates });
  }
  if (issues.length) return result;
  if (!real.length) return { ...result, status: "no-genuine-records" };
  const responses = real.flatMap(({ dates }) => {
    if (dates.receivedAt?.time == null || dates.firstHumanResponseAt?.time == null) return [];
    return [(dates.firstHumanResponseAt.time - dates.receivedAt.time) / 3600000];
  }).sort((a, b) => a - b);
  const qualified = real.filter(({ record }) => record.qualified === true);
  return {
    ...result, status: "calculated", genuineEnquiries: real.length,
    qualificationPending: real.filter(({ record }) => record.qualified == null).length,
    qualified: qualified.length, quoted: real.filter(({ dates }) => dates.quotedAt).length,
    won: real.filter(({ dates }) => dates.wonAt).length, lost: real.filter(({ dates }) => dates.lostAt).length,
    firstResponseSample: responses.length,
    medianFirstHumanResponseHours: responses.length ? (responses[Math.floor((responses.length - 1) / 2)] + responses[Math.floor(responses.length / 2)]) / 2 : null,
    qualifiedToQuoteRate: qualified.length ? qualified.filter(({ dates }) => dates.quotedAt).length / qualified.length : null,
  };
}
