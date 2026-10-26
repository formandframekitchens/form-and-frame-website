import test from "node:test";
import assert from "node:assert/strict";
import { cacheBundleReader, parsePrivateBundle, readBundleStream, resolvePrivatePortfolio, MAX_BUNDLE_BYTES } from "../app/lib/private-portfolio/bundle.ts";

const photo = { id: "synthetic-photo", thumbnail: "synthetic-photo", alt: "Synthetic test only", width: 1, height: 1 };
const sample = () => ({ schemaVersion: 1, projects: [{ slug: "synthetic-test", title: "Synthetic title", category: "Test", summary: "No customer data", cover: photo, photos: [photo], workshopPhotos: [], videos: [] }], assets: { "synthetic-photo": { file: "synthetic.webp", pathname: "private-portfolio/synthetic/photo.webp", kind: "image", width: 1, height: 1, bytes: 100 } }, stories: { "synthetic-test": { introduction: "Synthetic", scope: [], sections: [] } } });
const stream = value => new ReadableStream({ start(controller) { controller.enqueue(new TextEncoder().encode(JSON.stringify(value))); controller.close(); } });
const options = extra => ({ authorized: true, environment: "production", cataloguePath: "private-portfolio/catalogue/v1.json", fixture: sample(), read: async () => sample(), ...extra });

test("valid synthetic bundle retains explicit project and media references", async () => {
  const parsed = parsePrivateBundle(sample());
  assert.equal(parsed.projects[0].title, "Synthetic title");
  assert.equal(parsed.assets["synthetic-photo"].kind, "image");
  assert.deepEqual(await readBundleStream(stream(sample()), new AbortController().signal), parsed);
});
test("schema, duplicate projects and dangling references fail closed", () => {
  for (const alter of [s=>s.schemaVersion=2,s=>s.projects.push(s.projects[0]),s=>s.projects[0].cover={...photo,id:"missing"},s=>s.assets={},s=>s.stories.other=s.stories["synthetic-test"]]) {
    const s=sample(); alter(s); assert.throws(()=>parsePrivateBundle(s), /Invalid private portfolio bundle/);
  }
});
test("unsafe filenames, remote paths, traversal and header characters are rejected", () => {
  for (const [key,value] of [["file","../escape.webp"],["file",'a".webp'],["pathname","https://untrusted.invalid/x"],["pathname","../x"],["pathname","private/%2e%2e/x"],["pathname","private\\x"],["pathname","private/x\r\nX-Test:1"]]) {
    const s=sample(); s.assets["synthetic-photo"][key]=value; assert.throws(()=>parsePrivateBundle(s));
  }
});
test("invalid dimensions, bytes, text and oversized structures are rejected", () => {
  for(const alter of [s=>s.assets["synthetic-photo"].bytes=1.5,s=>s.projects[0].cover={...photo,width:0},s=>s.projects[0].title="x".repeat(501),s=>s.projects[0].photos=Array(501).fill(photo),s=>s.projects[0].videos=[{id:"synthetic-photo",poster:"synthetic-photo",title:"Synthetic",quality:"test",duration:1,width:1,height:1}]]) {
    const s=sample();alter(s);assert.throws(()=>parsePrivateBundle(s));
  }
});
test("bundle stream enforces actual bytes and valid JSON", async () => {
  const large=new ReadableStream({start(c){c.enqueue(new Uint8Array(MAX_BUNDLE_BYTES+1));}});
  await assert.rejects(readBundleStream(large,new AbortController().signal));
  await assert.rejects(readBundleStream(new ReadableStream({start(c){c.enqueue(new TextEncoder().encode("invalid json"));c.close();}}),new AbortController().signal));
});
test("aborted stream reading stops without returning partial content", async () => {
  const c=new AbortController();const pending=readBundleStream(new ReadableStream(),c.signal);c.abort();await assert.rejects(pending);
});
test("unauthorized access performs no catalogue read", async () => {
  let reads=0;const result=await resolvePrivatePortfolio(options({authorized:false,read:async()=>{reads++;return sample();}}));
  assert.deepEqual(result,{status:"unauthorized"});assert.equal(reads,0);
});
test("preview uses synthetic fixtures even when a production path is configured", async () => {
  let reads=0;const result=await resolvePrivatePortfolio(options({environment:"preview",read:async()=>{reads++;throw Error("must not run");}}));
  assert.equal(result.status,"available");assert.equal(reads,0);
});
test("production rejects missing or unsafe path and unknown environments", async () => {
  for(const extra of [{cataloguePath:undefined},{cataloguePath:"https://untrusted.invalid/x"},{cataloguePath:"private-portfolio/catalogue/../v1.json"},{environment:"unknown"}]) {
    let reads=0; assert.deepEqual(await resolvePrivatePortfolio(options({...extra,read:async()=>{reads++;return sample();}})),{status:"unavailable"});assert.equal(reads,0);
  }
});
test("production returns only validated data and sanitizes reader failures", async () => {
  assert.equal((await resolvePrivatePortfolio(options({read:async()=>parsePrivateBundle(sample())}))).status,"available");
  const result=await resolvePrivatePortfolio(options({read:async()=>{throw Error("PRIVATE_CONTENT_DO_NOT_REPORT");}}));
  assert.deepEqual(result,{status:"unavailable"});assert.doesNotMatch(JSON.stringify(result),/PRIVATE_CONTENT/);
});
test("deadline bounds even a stalled reader and aborts its signal", async () => {
  let signal;const result=await resolvePrivatePortfolio(options({timeoutMs:10,read:async(_path,s)=>{signal=s;return new Promise(()=>{});}}));
  assert.deepEqual(result,{status:"unavailable"});assert.equal(signal.aborted,true);
});

test("validated catalogue cache is bounded, expires and never substitutes a different path", async () => {
  let reads=0,now=0;const read=cacheBundleReader(async()=>{reads++;return parsePrivateBundle(sample());},()=>now);
  const signal=new AbortController().signal;
  await read("one",signal);await read("one",signal);assert.equal(reads,1);
  now=60001;await read("one",signal);assert.equal(reads,2);
  await read("two",signal);assert.equal(reads,3);
  const aborted=new AbortController();aborted.abort();await assert.rejects(read("two",aborted.signal));
});
