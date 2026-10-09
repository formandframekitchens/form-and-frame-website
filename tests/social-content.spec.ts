import { expect, test } from "@playwright/test";
import { instagramProfileUrl, socialContent } from "../app/lib/social-content";

test("social content is a lightweight, curated set of three first-party destinations", () => {
  expect(socialContent).toHaveLength(3);
  expect(new Set(socialContent.map(item => item.id)).size).toBe(3);

  for (const item of socialContent) {
    expect(item.image.src).toMatch(/^\/images\//);
    expect(item.siteHref).toMatch(/^\/(?!\/)/);
    expect(item.instagramHref).toBe(instagramProfileUrl);
  }
});

test("homepage presents accessible website-first social cards", async ({ page }) => {
  await page.goto("/");
  const section = page.locator(".social-section");

  await expect(section.getByRole("heading", { name: "Latest from Form & Frame" })).toBeVisible();
  await expect(section.locator("article")).toHaveCount(3);
  await expect(section.locator("img")).toHaveCount(3);
  await expect(section.locator('img[loading="lazy"]')).toHaveCount(3);
  await expect(section.locator('[data-analytics="instagram"]')).toHaveCount(3);

  for (const image of await section.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate(img => (img as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }

  for (const item of socialContent) {
    await expect(section.getByRole("link", { name: new RegExp(item.siteLabel, "i") })).toHaveAttribute("href", item.siteHref);
  }
});
