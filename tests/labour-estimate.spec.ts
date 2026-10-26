import { expect, test } from "@playwright/test";
import { labourEstimate } from "../app/lib/labour-estimate";

test("agreed labour arithmetic keeps the specialist multiplier and rejects ambiguous quantities", () => {
  expect(labourEstimate("3", 1)).toBe(900);
  expect(labourEstimate("3", 2)).toBe(1800);
  expect(labourEstimate("1", 2)).toBe(600);
  for (const value of ["", "0", "-1", "1.5", "1e2", "Infinity", " 3 ", "366", "0003"]) expect(labourEstimate(value, 1), value).toBeNull();
  for (const team of [0, 1.5, 3, Number.NaN]) expect(labourEstimate("3", team)).toBeNull();
});

test("server HTML explains the limits even without JavaScript and assumes no duration", async ({ request }) => {
  const html = await (await request.get("/kitchen-installation")).text();
  expect(html).toContain("Labour only, not a project quotation.");
  expect(html).not.toContain("\u00c2\u00a3");
  expect(html).toContain("£300");
  expect(html).toContain("does not estimate how many days your kitchen needs");
  expect(html).toContain("Enter days to see the labour amount.");
  expect(html).toContain("<noscript>");
  expect(html).toContain("Your entries stay on this page and are not sent or saved.");
});
