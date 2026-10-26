import { expect, test } from "@playwright/test";
import { articleModifiedAt, newsArticles } from "../app/lib/news";

test("Wren scope and corner advice lead to a prefilled independent fitting enquiry", async ({ page }) => {
  await page.goto("/kitchen-installation/wren");
  const planning = page.locator("#supplier-planning");
  await expect(planning).toContainText("supply-only");
  await expect(planning).toContainText("Wren kitchen fitting enquiry in Luton or Dunstable");
  await expect(planning).not.toContainText("Howdens");
  await expect(planning).toContainText("20 October 2026");
  await page.getByRole("link", { name: "Plan your Wren corner-storage opening", exact: true }).click();
  await expect(page).toHaveURL(/wren-corner-storage-fitting-checks$/);
  await expect(page.locator(".news-article")).toContainText("do not provide a launch date");
  await page.getByRole("link", { name: "Send your Wren fitting brief ↗", exact: true }).click();
  await expect(page.locator('select[name="service"]')).toHaveValue("kitchen-installation");
  await expect(page.locator('select[name="supplier"]')).toHaveValue("wren");
  await expect(page.locator('select[name="installation"]')).toHaveValue("own-kitchen");
  await page.goto("/kitchen-installation/howdens");
  await expect(page.locator("#supplier-planning")).toContainText("Howdens kitchen fitting enquiry");
  await expect(page.locator("#supplier-planning")).toContainText("19 October 2026");
});

test("source checks do not change editorial dates, and published dates agree across metadata", async ({ request }) => {
  const article = newsArticles.find(item => item.slug === "wren-corner-storage-fitting-checks")!;
  expect(articleModifiedAt({ ...article, checked: "2026-10-25" })).toBe(article.publishedAt);
  const updated = "2026-10-26T09:00:00Z";
  expect(articleModifiedAt({ ...article, checked: "2026-10-27", updatedAt: updated })).toBe(updated);
  const html = await (await request.get(`/news/${article.slug}`)).text();
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  const schema = schemas.find(item => item["@type"] === "Article");
  expect(schema.datePublished).toBe(article.publishedAt);
  expect(schema.dateModified).toBe(article.publishedAt);
  expect(html).toContain(`property="article:modified_time" content="${article.publishedAt}"`);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toMatch(/kitchen-installation\/wren<\/loc>\s*<lastmod>2026-10-20<\/lastmod>/);
});
