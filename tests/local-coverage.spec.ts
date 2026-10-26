import { expect, test } from "@playwright/test";
import { latestNewsArticles } from "../app/lib/news";

test("named local coverage is visible, matches service schema and qualifies the enquiry", async ({ page, request }, testInfo) => {
  await page.goto("/areas");
  const coverage = page.locator("#local-coverage");
  for (const town of ["Luton", "Dunstable", "Houghton Regis", "Flitwick", "Ampthill", "Leighton Buzzard", "Linslade", "Harpenden", "Hitchin"]) await expect(coverage).toContainText(town);
  const identity = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.map(node => JSON.parse(node.textContent || "{}"))).then(items => items.find(item => item["@type"] === "Organization"));
  expect(identity.areaServed.length).toBe(28);
  for (const place of identity.areaServed) await expect(coverage).toContainText(place);
  for (const route of ["/kitchen-installation", "/bespoke-joinery/wardrobes", "/bespoke-joinery/under-stairs-storage"]) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
    const schemas = [...(await response.text()).matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    expect(schemas.find(item => item["@type"] === "Service").areaServed, route).toEqual(identity.areaServed);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("local-coverage.png"), fullPage: true });
  await coverage.getByRole("link", { name: "Check your address and project with us" }).click();
  const location = page.getByRole("textbox", { name: "Postcode / town", exact: true });
  await expect(location).toHaveAccessibleDescription(/check the journey, access and visits/);
  await location.fill("Example project town");
  await expect(location).toHaveValue("Example project town");
  await page.goto("/");
  await expect(page.locator(".news-card")).toHaveCount(3);
  for (const article of latestNewsArticles().slice(0, 3)) {
    await expect(page.locator(`.news-card a[href="/news/${article.slug}"]`)).toBeVisible();
  }
});
