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

test("price link brings the labour heading into view before a correctly selected enquiry", async ({ page }) => {
  await page.goto("/kitchen-installation");
  await page.getByRole("link", { name: "See the labour scope and separate costs" }).click();
  await expect(page).toHaveURL(/\/kitchen-installation#kitchen-fitting-prices$/);
  const pricing = page.locator("#kitchen-fitting-prices");
  await expect(pricing.getByRole("heading", { level: 2 })).toBeInViewport({ ratio: 1 });
  await expect(pricing).toContainText("Materials, waste disposal and other expenses are additional");
  await pricing.getByRole("link", { name: "Discuss my fitting price" }).click();
  await expect(page.locator('select[name="service"]')).toHaveValue("kitchen-installation");
  await expect(page.locator('select[name="installation"]')).toHaveValue("own-kitchen");
});

test("keyboard activation reaches the labour heading without manual scrolling", async ({ page }) => {
  await page.goto("/kitchen-installation");
  await page.getByRole("link", { name: "See the labour scope and separate costs" }).press("Enter");
  await expect(page).toHaveURL(/\/kitchen-installation#kitchen-fitting-prices$/);
  await expect(page.locator("#kitchen-fitting-prices").getByRole("heading", { level: 2 })).toBeInViewport({ ratio: 1 });
});
