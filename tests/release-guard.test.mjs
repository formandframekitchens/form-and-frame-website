import { test } from "node:test";
import assert from "node:assert/strict";
import { assertPreviewTarget } from "../preview-target.mjs";
test("either production target is rejected", () => {
  assert.throws(() => assertPreviewTarget({ VERCEL_ENV: "production" }), /Preview-only/);
  assert.throws(() => assertPreviewTarget({ VERCEL_TARGET_ENV: "production" }), /Preview-only/);
});
test("local and protected preview targets remain buildable", () => {
  assert.doesNotThrow(() => assertPreviewTarget({}));
  assert.doesNotThrow(() => assertPreviewTarget({ VERCEL_ENV: "preview" }));
});
