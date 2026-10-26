import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, writeFile, rm, readdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { PUBLIC_ORIGIN } from "../scripts/public-health.mjs";
import { recordObservation, MAX_EVENTS } from "../scripts/public-health-state.mjs";

const paths = ["/", "/kitchen-installation", "/contact", "/robots.txt", "/sitemap.xml"];
function report(second, failure = null) {
  return { checkedAt: new Date(Date.UTC(2026, 9, 26, 20, 0, second)).toISOString(), origin: PUBLIC_ORIGIN, ok: !failure, checks: paths.map(path => ({ path, ok: path !== failure, status: path === failure ? 503 : 200, reason: path === failure ? "http_status" : "passed" })) };
}
async function fixture(t) {
  const dir = await mkdtemp(join(tmpdir(), "ff-health-test-"));
  t.after(async () => {
    const target = resolve(dir);
    assert.equal(dirname(target), resolve(tmpdir()));
    assert.ok(basename(target).startsWith("ff-health-test-"));
    await rm(target, { recursive: true, force: true });
  });
  return { dir, statePath: join(dir, "state.json") };
}
test("persisted observations produce one failure event, no repeat, changed failure and one recovery", async t => {
  const options = await fixture(t);
  const states = [];
  for (const [second, failure] of [[0,null],[1,"/contact"],[2,"/contact"],[3,"/"],[4,null],[5,null]]) states.push(await recordObservation(report(second, failure), options));
  assert.deepEqual(states.map(x => x.transition), ["healthy","new_or_changed","ongoing","new_or_changed","recovered","healthy"]);
  assert.deepEqual(states.map(x => x.retainedEvents), [0,1,1,2,3,3]);
  assert.ok(states.every(x => x.notificationSent === false));
  assert.equal(JSON.parse(await readFile(options.statePath)).events.length, 3);
  assert.deepEqual(await readdir(options.dir), ["state.json"]);
});
test("separate Node invocations share the on-disk incident checkpoint", async t => {
  const options = await fixture(t);
  const moduleUrl = new URL("../scripts/public-health-state.mjs", import.meta.url).href;
  const script = `import {recordObservation} from ${JSON.stringify(moduleUrl)}; console.log(JSON.stringify(await recordObservation(JSON.parse(process.argv[1]),{statePath:process.argv[2]})));`;
  const run = observation => JSON.parse(execFileSync(process.execPath, ["--input-type=module", "-e", script, JSON.stringify(observation), options.statePath], { encoding: "utf8" }));
  assert.equal(run(report(0, "/contact")).transition, "new_or_changed");
  assert.equal(run(report(1, "/contact")).transition, "ongoing");
  assert.equal(run(report(2)).transition, "recovered");
});
test("only approved public status fields persist; input bodies and extra properties are excluded", async t => {
  const options = await fixture(t);
  const input = report(0, "/contact");
  input.body = "synthetic-secret-marker";
  input.checks[0].message = "synthetic-secret-marker";
  await recordObservation(input, options);
  assert.equal((await readFile(options.statePath, "utf8")).includes("synthetic-secret-marker"), false);
});
test("invalid origins, private routes, duplicate paths, dates and inconsistent results are rejected before state creation", async t => {
  const options = await fixture(t);
  const mutations = [r => {r.origin="https://example.org";}, r => {r.checks[0].path="/private-case-studies";}, r => {r.checks[0].path="/contact";}, r => {r.checkedAt="yesterday";}, r => {r.ok=false;}, r => {r.checks[0].status=700;}, r => {r.checks[0].reason="private-error";}];
  for (const mutate of mutations) { const input=report(0); mutate(input); await assert.rejects(recordObservation(input, options), /invalid_observation/); }
  assert.deepEqual(await readdir(options.dir), []);
});
test("out-of-order and replayed observations preserve the last valid checkpoint", async t => {
  const options = await fixture(t);
  await recordObservation(report(5, "/"), options);
  const before = await readFile(options.statePath, "utf8");
  for (const second of [4,5]) await assert.rejects(recordObservation(report(second), options), /observation_not_newer/);
  assert.equal(await readFile(options.statePath, "utf8"), before);
  assert.deepEqual(await readdir(options.dir), ["state.json"]);
});
test("corrupt and oversized state is preserved rather than silently reset", async t => {
  const options = await fixture(t);
  for (const damaged of ["{not-json", JSON.stringify({version:2}), "x".repeat(256*1024+1)]) {
    await writeFile(options.statePath, damaged);
    await assert.rejects(recordObservation(report(0), options), /invalid_state/);
    assert.equal(await readFile(options.statePath, "utf8"), damaged);
  }
});
test("held locks stop a competing writer without deleting its lock or previous state", async t => {
  const options = await fixture(t);
  await recordObservation(report(0), options);
  const before = await readFile(options.statePath, "utf8");
  await writeFile(options.statePath + ".lock", "existing-writer");
  await assert.rejects(recordObservation(report(1, "/contact"), options), /state_locked/);
  assert.equal(await readFile(options.statePath, "utf8"), before);
  assert.equal(await readFile(options.statePath + ".lock", "utf8"), "existing-writer");
});
test("incident history is bounded and records the number of older events discarded", async t => {
  const options = await fixture(t);
  let result;
  for (let second=0; second<MAX_EVENTS+3; second++) result = await recordObservation(report(second, second%2 ? null : "/contact"), options);
  assert.equal(result.retainedEvents, MAX_EVENTS);
  assert.equal(result.droppedEvents, 3);
  assert.ok((await readFile(options.statePath)).byteLength < 256*1024);
});
test("tampered history fails closed and keeps the file available for inspection", async t => {
  const options = await fixture(t);
  await recordObservation(report(0, "/"), options);
  const state = JSON.parse(await readFile(options.statePath)); state.events[0].id = "changed";
  const damaged = JSON.stringify(state); await writeFile(options.statePath, damaged);
  await assert.rejects(recordObservation(report(1), options), /invalid_state/);
  assert.equal(await readFile(options.statePath, "utf8"), damaged);
});
