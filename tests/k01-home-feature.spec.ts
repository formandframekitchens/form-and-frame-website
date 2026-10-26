import { test, expect } from "@playwright/test";

test("K01 photographs, sequence and project routes work without JavaScript", async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: testInfo.project.use.viewport });
  const page = await context.newPage();
  await page.goto(process.env.VERIFY_BASE_URL || "/");
  const feature = page.locator("#featured-kitchen");
  await expect(feature.getByRole("heading", { name: "A bespoke kitchen. Every detail considered." })).toBeVisible();
  await expect(feature.getByRole("list", { name: "Cabinet opening sequence" }).locator("li")).toHaveText(["01Closed", "02Opening", "03Raised"]);
  const original = feature.getByRole("img", { name: /Three original portrait photographs/ });
  await original.scrollIntoViewIfNeeded();
  await expect(original).toBeVisible();
  const dimensions = await original.evaluate((image: HTMLImageElement) => ({ width: image.naturalWidth, height: image.naturalHeight }));
  expect(dimensions.width / dimensions.height).toBeCloseTo(2184 / 1280, 1);
  for (const slug of ["kitchen", "cinema-tv-unit", "bedroom-wardrobe", "loft-dressing-room"]) {
    const response = await page.request.get(`/case-studies/k01-surbiton/${slug}`);
    expect(response.status()).toBe(200);
  }
  await expect(feature.getByRole("link", { name: "Discuss your kitchen" })).toHaveAttribute("href", /service=bespoke-kitchens/);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
  expect(await page.locator("video[autoplay]").count()).toBe(0);
  await feature.screenshot({ path: `test-results/k01-feature-${testInfo.project.name}.png` });
  await context.close();
});
