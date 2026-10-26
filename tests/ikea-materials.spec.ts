import { expect, test } from "@playwright/test";
import { articleModifiedAt, formatArticleDate, latestNewsArticles, newsArticles } from "../app/lib/news";

test("IKEA system and services checks lead to the correct fitting enquiry", async ({ page }, testInfo) => {
  await page.goto("/kitchen-installation/ikea");
  const planning = page.locator("#supplier-planning");
  await expect(planning).toContainText("METOD");
  await expect(planning).toContainText("ENHET");
  await expect(planning).toContainText("An assumed gap behind a cabinet is not a service plan");
  await expect(planning).toContainText("Luton or Dunstable");
  await expect(planning.locator('a[href*="ikea.com/gb/en/"]')).toHaveCount(3);
  await planning.scrollIntoViewIfNeeded();
  await page.screenshot({ path: testInfo.outputPath("ikea-planning.png"), fullPage: true });
  await page.screenshot({ path: testInfo.outputPath("ikea-planning-detail.png") });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.locator("summary").filter({ hasText: "Can existing pipes and sockets stay where they are?" }).click();
  await expect(page.locator("details[open]")).toContainText("no single clearance");
  await page.getByRole("link", { name: "Start my enquiry", exact: false }).click();
  await expect(page.locator('select[name="service"]')).toHaveValue("kitchen-installation");
  await expect(page.locator('select[name="supplier"]')).toHaveValue("ikea");
  await expect(page.locator('select[name="installation"]')).toHaveValue("own-kitchen");
});

test("updated materials advice retains its publication date and joins local services", async ({ page, request }, testInfo) => {
  const article = newsArticles.find(item => item.slug === "egger-26-plus-materials-textures")!;
  await page.goto(`/news/${article.slug}`);
  await expect(page.locator(".news-byline")).toContainText("Published 13 October 2026");
  await expect(page.locator(".news-byline")).toContainText("Updated 21 October 2026");
  await expect(page.locator(".news-article")).toContainText("25 February 2026");
  await expect(page.locator(".news-article")).toContainText("Review a wardrobe across the whole elevation");
  await expect(page.locator(".news-article")).toContainText("Give a media unit its own practical brief");
  await expect(page.locator(".news-article")).not.toContainText("example of existing project work");
  await expect(page.locator("figcaption")).toContainText("AI concept");
  await page.locator(".news-article").scrollIntoViewIfNeeded();
  await page.screenshot({ path: testInfo.outputPath("materials-article.png"), fullPage: true });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  const html = await (await request.get(`/news/${article.slug}`)).text();
  const schema = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(match => JSON.parse(match[1])).find(item => item["@type"] === "Article");
  expect(schema.datePublished).toBe("2026-10-13");
  expect(schema.dateModified).toBe(article.updatedAt);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain(`<loc>https://formandframekitchens.co.uk/news/${article.slug}</loc>\n<lastmod>${article.updatedAt}</lastmod>`);
  expect(sitemap).toMatch(/kitchen-installation\/ikea<\/loc>\s*<lastmod>2026-10-21<\/lastmod>/);
  await page.getByRole("link", { name: "Send your fitted-furniture brief ↗", exact: true }).click();
  await expect(page.locator('select[name="service"]')).toHaveValue("bespoke-joinery");
});

test("latest updates and RSS expose revisions without republishing older articles", async ({ page, request }) => {
  await page.goto("/news");
  const first = latestNewsArticles()[0];
  await expect(page.locator(".news-card h2").first()).toHaveText(first.title);
  await expect(page.locator(".news-card-date").first()).toContainText(formatArticleDate(articleModifiedAt(first)));
  const rss = await (await request.get("/news/feed.xml")).text();
  expect(rss.match(/<item>/g)).toHaveLength(newsArticles.length);
  expect(rss).toContain(`<lastBuildDate>${new Date(articleModifiedAt(first)).toUTCString()}</lastBuildDate>`);
  const egger = rss.match(/<item><title>EGGER 26[\s\S]*?<\/item>/)![0];
  expect(egger).toContain("Tue, 13 Oct 2026 07:00:00 GMT");
  const existing = newsArticles.find(item => item.slug === "wren-corner-storage-fitting-checks")!;
  expect(articleModifiedAt({ ...existing, checked: "2026-11-01" })).toBe(existing.publishedAt);
  await page.goto("/news/warm-kitchen-colours-2026");
  await expect(page.locator(".news-article")).toContainText("Howdens Halesworth Ash Green");
  await expect(page.locator(".news-article")).not.toContainText("existing Form & Frame portfolio work");
});
