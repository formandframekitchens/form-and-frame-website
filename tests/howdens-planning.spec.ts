import { expect, test } from "@playwright/test";

test("Howdens planning leads to an independent, prefilled fitting enquiry", async ({ page }, testInfo) => {
  await page.goto("/kitchen-installation/howdens");
  await expect(page.locator("#supplier-planning")).toContainText("Prepare for the stone template");
  await expect(page.locator("#supplier-planning a[href$='.pdf']")).toHaveCount(1);
  await page.locator("#supplier-planning").scrollIntoViewIfNeeded();
  await page.screenshot({ path: testInfo.outputPath("howdens-planning.png") });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.getByRole("link", { name: "Read our mixed-finish kitchen planning notes" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Mixed-finish Howdens kitchens");
  await expect(page.locator("main")).toContainText("not a claim that these ranges launched today");
  await page.getByRole("link", { name: /Send your kitchen plan for a fitting review/ }).click();
  await expect(page.locator('select[name="supplier"]')).toHaveValue("howdens");
  await expect(page.locator('select[name="service"]')).toHaveValue("kitchen-installation");
  await expect(page.locator('select[name="installation"]')).toHaveValue("own-kitchen");
  await page.goto("/kitchen-installation/wren");
  await expect(page.locator("#supplier-planning")).toHaveCount(0);
});
