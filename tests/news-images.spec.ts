import { expect, test } from "@playwright/test";
import { newsArticles } from "../app/lib/news";

test("news uses credited external imagery across cards, articles and search previews", async ({ page, request }, testInfo) => {
  test.setTimeout(60_000);
  await page.goto("/news");
  await expect(page.locator(".news-card")).toHaveCount(newsArticles.length);
  await expect(page.locator(".news-card .news-image-credit")).toHaveCount(newsArticles.length);
  await expect(page.locator(".news-card .news-image-credit a")).toHaveCount(newsArticles.filter(article => article.image.creditUrl).length);
  for (const image of await page.locator(".news-card-image img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }
  await page.locator(".news-card").first().scrollIntoViewIfNeeded();
  await page.screenshot({ path: testInfo.outputPath("news-index.png"), fullPage: true });
  await page.screenshot({ path: testInfo.outputPath("news-preview.png") });
  for (const article of newsArticles) {
    expect(article.image.src).toMatch(/^\/images\/news\//);
    const asset = await request.get(article.image.src);
    expect(asset.ok()).toBeTruthy();
    expect(asset.headers()["content-type"]).toContain("image/webp");
    await page.goto(`/news/${article.slug}`);
    const img = page.locator(".news-article-image img");
    await img.scrollIntoViewIfNeeded();
    await expect(img).toHaveAttribute("alt", article.image.alt);
    await expect.poll(() => img.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    await expect(page.locator("figcaption")).toContainText(article.image.caption);
    if (article.image.creditUrl) {
      await expect(page.locator("figcaption a")).toHaveAttribute("href", article.image.creditUrl);
    } else {
      await expect(page.locator("figcaption")).toContainText("AI concept");
      await expect(page.locator("figcaption a")).toHaveCount(0);
    }
    await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute("content", `https://formandframekitchens.co.uk${article.image.src}`);
    await expect(page.locator('meta[name="twitter:image"]').first()).toHaveAttribute("content", `https://formandframekitchens.co.uk${article.image.src}`);
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    const schema = schemas.map(text => JSON.parse(text)).find(item => item["@type"] === "Article");
    expect(schema.image).toEqual([`https://formandframekitchens.co.uk${article.image.src}`]);
    if (article.slug === "dulux-soulful-sage-2027-fitted-furniture") {
      await page.screenshot({ path: testInfo.outputPath("ai-article.png") });
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await page.goto("/");
  await expect(page.locator(".news-preview .news-card")).toHaveCount(3);
  const previewSources = await page.locator(".news-preview img").evaluateAll(images => images.map(image => decodeURIComponent(image.getAttribute("src") ?? "")));
  expect(previewSources.every(src => src.includes("/images/news/"))).toBe(true);
});
