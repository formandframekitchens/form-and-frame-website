import { expect, test } from "@playwright/test";
import { latestNewsArticles, newsArticles } from "../app/lib/news";

test("news topics filter accessibly and keep dated supplier news connected to services", async ({ page }) => {
  await page.goto("/news");
  await expect(page.locator(".news-card:visible")).toHaveCount(newsArticles.length);
  await page.getByRole("button", { name: "Supplier updates", exact: true }).click();
  await expect(page.getByRole("button", { name: "Supplier updates", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".news-card:visible")).toHaveCount(newsArticles.filter(article => article.topic === "supplier-news").length);
  await page.getByRole("link", { name: /Dulux’s 2027 colour/ }).click();
  await expect(page.locator(".news-byline")).toContainText("19 October 2026");
  await expect(page.getByRole("link", { name: /Dulux UK — Soulful Sage announcement/ })).toHaveAttribute("href", "https://www.dulux.co.uk/en/colour-inspiration/colour-of-the-year-2027-soulful-sage");
  await page.getByRole("link", { name: "Explore fitted alcove units ↗", exact: true }).click();
  await expect(page).toHaveURL(/\/bespoke-joinery\/alcove-units$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.goto("/news");
  await page.getByRole("button", { name: "Materials & design", exact: true }).click();
  await expect(page.locator(".news-card:visible")).toHaveCount(2);
  await page.getByRole("button", { name: "All updates", exact: true }).click();
  await expect(page.locator(".news-card:visible")).toHaveCount(newsArticles.length);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("news remains complete without JavaScript and homepage keeps three previews", async ({ browser, request }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3105/news");
  await expect(page.locator(".news-card:visible")).toHaveCount(newsArticles.length);
  await page.goto("http://127.0.0.1:3105/news/lift-up-kitchen-cabinet-clearance");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Lift-up kitchen cupboards");
  await expect(page.locator(".news-article section")).toHaveCount(6);
  await context.close();
  const home = await (await request.get("/")).text();
  expect(home.match(/class="news-card"/g)).toHaveLength(3);
  for (const article of latestNewsArticles().slice(0, 3)) expect(home).toContain(`/news/${article.slug}`);
});


test("editorial draft is readable but not advertised as published", async ({ page, request }) => {
  const slug = "lift-up-kitchen-cabinet-clearance";
  await page.goto(`/news/${slug}`);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Lift-up kitchen cupboards");
  await expect(page.locator(".news-byline")).toContainText("Draft for review — not published");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.locator("figcaption")).toContainText("Original AI concept");
  await expect(page.locator(".news-article-image img")).toBeVisible();
  const json = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(text => JSON.parse(text));
  const article = json.find(item => item['@type'] === "Article");
  expect(article.datePublished).toBeUndefined();
  for (const path of ["/", "/news", "/news/feed.xml", "/sitemap.xml"]) expect(await (await request.get(path)).text()).not.toContain(`/news/${slug}`);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
