import { expect, test } from "@playwright/test";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { formatArticleDate, newsArticles } from "../app/lib/news";
import { archiveGalleryProjects } from "../app/lib/gallery-archive-oct13";
import { galleryProjects, publicGalleryProjects } from "../app/lib/gallery-projects";
import manifest from "../docs/gallery/b28-import-manifest.json";

test("approved archive adds distinct groups and unchanged source photographs", () => {
  expect(archiveGalleryProjects).toHaveLength(31);
  expect(publicGalleryProjects).toHaveLength(96);
  expect(galleryProjects).toHaveLength(101);
  expect(manifest.images).toHaveLength(69);
  expect(publicGalleryProjects.reduce((sum, project) => sum + project.images.length, 0)).toBe(346);
  expect(new Set(manifest.images.map(image => image.sha256)).size).toBe(69);
  for (const image of manifest.images) {
    expect(createHash("sha256").update(readFileSync(`public${image.publicPath}`)).digest("hex"), image.publicPath).toBe(image.sha256);
  }
  expect(publicGalleryProjects.find(project => project.galleryId === "G29")?.images).toHaveLength(7);
});

test("news is discoverable and articles expose dates, sources and usable project links", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await page.getByRole("link", { name: "All news & ideas", exact: false }).click();
  await expect(page).toHaveURL(/\/news$/);
  await expect(page.locator(".news-card")).toHaveCount(newsArticles.length);
  await expect(page.getByText(/not photographs of the supplier products/)).toBeVisible();
  for (const article of newsArticles) {
    await page.goto(`/news/${article.slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(article.title);
    await expect(page.locator(".news-byline")).toContainText(formatArticleDate(article.published));
    await expect(page.locator(".news-article-figure figcaption")).toContainText("not a supplier product");
    for (const source of article.sources) await expect(page.getByRole("link", { name: `${source.title} ↗`, exact: true })).toHaveAttribute("href", source.url);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), article.slug).toBe(true);
    await expect.poll(() => page.locator(".news-article-image img").evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    await page.screenshot({ path: testInfo.outputPath(`${article.slug}.png`) });
  }
  await page.locator(".news-article-figure a").click();
  await page.getByRole("link", { name: "Send an enquiry", exact: true }).click();
  await expect(page.locator('input[name="project"]')).toHaveValue("fulham-alcove-units");
  expect(errors).toEqual([]);
});

test("news metadata, article schema, RSS and sitemap remain consistent", async ({ request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  const feed = await request.get("/news/feed.xml");
  expect(feed.headers()["content-type"]).toContain("application/rss+xml");
  const rss = await feed.text();
  expect(rss.match(/<item>/g)).toHaveLength(newsArticles.length);
  for (const article of newsArticles) {
    const url = `https://formandframekitchens.co.uk/news/${article.slug}`;
    const html = await (await request.get(`/news/${article.slug}`)).text();
    expect(html).toContain(`rel="canonical" href="${url}"`);
    expect(html).toContain('property="og:type" content="article"');
    expect(html).toContain('"@type":"Article"');
    expect(html).toContain('"@type":"BreadcrumbList"');
    expect(sitemap).toContain(`${url}</loc>`);
    expect(rss).toContain(url);
  }
  expect((await request.get("/news/not-a-real-article")).status()).toBe(404);
});
