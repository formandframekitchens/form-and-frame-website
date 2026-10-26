import { expect, test } from "@playwright/test";
import { newsArticles } from "../app/lib/news";

test("kitchen evidence routes reach readable project stages without JavaScript", async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce", viewport: testInfo.project.use.viewport, baseURL: String(testInfo.project.use.baseURL) });
  const page = await context.newPage();
  for (const [label, target] of [["See kitchen and stone drawings", "kitchen-panel-design"], ["See the work on site", "kitchen-panel-site"], ["See the finished kitchen", "kitchen-panel-finished"]]) {
    await page.goto("/kitchens#kitchen-journey");
    await page.getByRole("link", { name: label }).click();
    await expect(page.locator(`#${target}`)).toBeVisible();
    await expect(page.locator(`#${target} img`).first()).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await context.close();
});

test("handleless detail evidence leads to a contextual kitchen enquiry", async ({ page }, testInfo) => {
  await page.goto("/gallery/handleless-kitchen-installation#installation-details");
  const details = page.locator("#installation-details");
  for (const img of await details.locator("img").all()) await img.evaluate(async element => { const image = element as HTMLImageElement; image.loading = "eager"; await image.decode(); });
  await expect(details.getByRole("heading", { name: "Laundry behind a matching door" })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await details.screenshot({ path: testInfo.outputPath("handleless-details.png") });
  await details.getByRole("link", { name: "Send those details with your installation enquiry" }).click();
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("kitchen-installation");
  await expect(page.locator('input[name="project"]')).toHaveValue("handleless-kitchen-installation");
});

test("substantive paint update preserves publication and truthful imagery", async ({ page, request }) => {
  const article = newsArticles.find(item => item.slug === "dulux-soulful-sage-2027-fitted-furniture")!;
  await page.goto(`/news/${article.slug}`);
  await expect(page.getByRole("heading", { name: "Make a small finish schedule for the fitter" })).toBeVisible();
  await expect(page.locator("figcaption")).toContainText("AI concept");
  await expect(page.locator("main")).not.toContainText("our existing alcove-unit project");
  const schema = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(value => JSON.parse(value)).find(value => value["@type"] === "Article");
  expect(schema.datePublished).toBe(article.publishedAt);
  expect(schema.dateModified).toBe(article.updatedAt);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain(`/news/${article.slug}</loc>`);
  expect(sitemap).toContain(article.updatedAt);
  const feed = await (await request.get("/news/feed.xml")).text();
  expect(feed).toContain(article.slug);
  await page.goto("/");
  await expect(page.locator(".news-preview .news-card")).toHaveCount(3);
  await expect(page.locator(".news-preview .news-card").first()).toContainText("Dulux");
});
