import { createHash, randomUUID } from "node:crypto";
import { dirname, resolve } from "node:path";
import { lstat, mkdir, open, readFile, rename, unlink } from "node:fs/promises";
import { incidentTransition, PUBLIC_ORIGIN } from "./public-health.mjs";

const PATHS = ["/", "/kitchen-installation", "/contact", "/robots.txt", "/sitemap.xml"];
const REASONS = new Set(["passed", "http_status", "content_type", "body_too_large", "request_failed_or_timed_out", "unexpected_noindex", "critical_content_missing"]);
const EVENT_STATES = new Set(["new_or_changed", "recovered"]);
export const MAX_EVENTS = 50;
const MAX_STATE_BYTES = 256 * 1024;

function fail(code) { throw new Error(code); }
function timestamp(value) {
  if (typeof value !== "string" || !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d{3}Z$/.test(value) || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString() !== value) fail("invalid_observation");
  return value;
}

// Explicitly select fields: response bodies, error messages and extra properties never persist.
export function safeObservation(report) {
  if (report?.origin !== PUBLIC_ORIGIN || !Array.isArray(report.checks) || report.checks.length !== PATHS.length) fail("invalid_observation");
  const checks = PATHS.map(path => {
    const matches = report.checks.filter(check => check?.path === path);
    if (matches.length !== 1) fail("invalid_observation");
    const check = matches[0];
    if (typeof check.ok !== "boolean" || !REASONS.has(check.reason) || check.ok !== (check.reason === "passed")) fail("invalid_observation");
    if (check.status !== undefined && (!Number.isInteger(check.status) || check.status < 100 || check.status > 599)) fail("invalid_observation");
    if (check.ok && check.status !== 200) fail("invalid_observation");
    return { path, ok: check.ok, reason: check.reason, ...(check.status === undefined ? {} : { status: check.status }) };
  });
  if (report.ok !== checks.every(check => check.ok)) fail("invalid_observation");
  return { checkedAt: timestamp(report.checkedAt), origin: PUBLIC_ORIGIN, ok: report.ok, checks };
}

function eventId(state, observation) {
  return createHash("sha256").update(JSON.stringify({ state, observation })).digest("hex");
}

function safeState(value) {
  if (value?.version !== 1 || !Array.isArray(value.events) || value.events.length > MAX_EVENTS || !Number.isSafeInteger(value.droppedEvents) || value.droppedEvents < 0) fail("invalid_state");
  try {
    const latest = safeObservation(value.latest);
    let previousTime = "";
    const events = value.events.map(event => {
      const observation = safeObservation(event?.observation);
      if (!EVENT_STATES.has(event.state) || event.id !== eventId(event.state, observation) || observation.checkedAt <= previousTime || observation.checkedAt > latest.checkedAt || (event.state === "recovered") !== observation.ok) fail("invalid_state");
      previousTime = observation.checkedAt;
      return { id: event.id, state: event.state, observation };
    });
    return { version: 1, latest, events, droppedEvents: value.droppedEvents };
  } catch { fail("invalid_state"); }
}

async function loadState(path) {
  try {
    const stat = await lstat(path);
    if (!stat.isFile() || stat.isSymbolicLink() || stat.size > MAX_STATE_BYTES) fail("invalid_state");
    const bytes = await readFile(path);
    if (bytes.length > MAX_STATE_BYTES) fail("invalid_state");
    return safeState(JSON.parse(bytes.toString("utf8")));
  } catch (error) {
    if (error.code === "ENOENT") return null;
    fail("invalid_state");
  }
}

export async function recordObservation(report, { statePath } = {}) {
  const current = safeObservation(report);
  if (typeof statePath !== "string" || !statePath.trim()) fail("state_path_required");
  const path = resolve(statePath);
  await mkdir(dirname(path), { recursive: true });
  const lockPath = `${path}.lock`;
  let lock;
  try { lock = await open(lockPath, "wx", 0o600); }
  catch (error) { if (error.code === "EEXIST") fail("state_locked"); throw error; }
  const temporary = `${path}.tmp-${randomUUID()}`;
  try {
    const previous = await loadState(path);
    if (previous && current.checkedAt <= previous.latest.checkedAt) fail("observation_not_newer");
    const transition = incidentTransition(previous?.latest, current);
    const event = EVENT_STATES.has(transition.state) ? { id: eventId(transition.state, current), state: transition.state, observation: current } : null;
    const events = [...(previous?.events ?? []), ...(event ? [event] : [])];
    const removed = Math.max(0, events.length - MAX_EVENTS);
    const state = { version: 1, latest: current, events: events.slice(-MAX_EVENTS), droppedEvents: (previous?.droppedEvents ?? 0) + removed };
    const file = await open(temporary, "wx", 0o600);
    try { await file.writeFile(JSON.stringify(state, null, 2) + "\n"); await file.sync(); }
    finally { await file.close(); }
    await rename(temporary, path);
    return { checkedAt: current.checkedAt, ok: current.ok, transition: transition.state, event, retainedEvents: state.events.length, droppedEvents: state.droppedEvents, notificationSent: false };
  } finally {
    try { await unlink(temporary).catch(error => { if (error.code !== "ENOENT") throw error; }); }
    finally { await lock.close(); await unlink(lockPath); }
  }
}
