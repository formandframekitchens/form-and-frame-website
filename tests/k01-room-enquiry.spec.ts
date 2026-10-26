import { expect, test } from "@playwright/test";

test("public room evidence leads to its matching service and editable enquiry type", async ({ page, request }) => {
  for (const [room, category] of [["bedroom-wardrobe", "wardrobes"], ["loft-dressing-room", "wardrobes"], ["cinema-tv-unit", "entertainment-units"], ["entrance", "unique-furniture"], ["under-stairs", "under-stairs-storage"]]) {
    await page.goto(`/case-studies/k01-surbiton/${room}`);
    const serviceLink = page.locator(`main a.text-link[href="/bespoke-joinery/${category}"]`);
    await expect(serviceLink).toBeVisible();
    expect((await request.get(`/bespoke-joinery/${category}`)).status()).toBe(200);
    const html = await (await request.get(`/case-studies/k01-surbiton/${room}`)).text();
    expect(html).toContain(`/bespoke-joinery/${category}`);
    await page.locator('#service-quote a[href^="/contact?"]').click();
    await expect(page.locator('select[name="service"]')).toHaveValue("bespoke-joinery");
    await expect(page.locator('select[name="joinery"]')).toHaveValue(category);
    await expect(page.locator('textarea[name="message"]')).toContainText("K01 case study");
    await page.locator('select[name="joinery"]').selectOption(category === "wardrobes" ? "bookcases" : "wardrobes");
    await expect(page.locator('select[name="joinery"]')).not.toHaveValue(category);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});
