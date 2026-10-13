import { expect, test } from "@playwright/test";
import { enquiryEmail } from "../app/lib/enquiry";

const categories = [
  ["wardrobes", "Bespoke fitted wardrobes"],
  ["alcove-units", "Bespoke alcove units"],
  ["bookcases", "Bespoke bookcases"],
  ["entertainment-units", "Bespoke media walls & TV units"],
  ["office-furniture", "Bespoke home office furniture"],
  ["under-stairs-storage", "Under-stairs storage"],
  ["unique-furniture", "Individual bespoke furniture"],
];

test("joinery opens real projects immediately, with optional filters and service links", async ({ page }, testInfo) => {
  await page.goto("/services");
  await page.locator('.services-hub-row[href="/bespoke-joinery"]').click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Bespoke joinery, room by room");
  await expect(page.locator(".joinery-selection")).toHaveCount(0);
  await expect(page.locator(".gallery-card").first()).toBeVisible();
  expect(await page.locator(".gallery-card-image").first().evaluate(element => element.getBoundingClientRect().top)).toBeLessThan(testInfo.project.use.viewport!.height);
  await expect.poll(() => page.locator(".gallery-card img").first().evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await expect(page.locator(".gallery-card img").first()).toHaveCSS("object-fit", "contain");
  await page.getByText("Filter by furniture type", { exact: true }).click();
  await page.getByRole("navigation", { name: "Filter projects by furniture type" }).getByRole("link", { name: /^Wardrobes/ }).click();
  await expect(page).toHaveURL(/category=wardrobes/);
  await expect(page.getByRole("status")).toContainText("Wardrobes");
  await page.getByRole("link", { name: "Clear filters", exact: true }).click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("joinery-landing.png") });
  const collection = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(value => JSON.parse(value)).find(value => value['@type'] === 'CollectionPage');
  expect(collection.mainEntity.itemListElement.length).toBe(await page.locator(".gallery-card").count());
});

test("every category has a usable destination and passes its identity to the enquiry", async ({ page, request }, testInfo) => {
  test.setTimeout(90_000);
  for (const [slug, title] of categories) {
    await page.goto("/bespoke-joinery");
    await page.locator(`.joinery-service-links a[href="/bespoke-joinery/${slug}"]`).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(title);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), slug).toBe(true);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://formandframekitchens.co.uk/bespoke-joinery/${slug}`);
    await expect.poll(() => page.locator(".service-hero-visual img").evaluate(image => (image as HTMLImageElement).naturalWidth), { timeout: 15_000 }).toBeGreaterThan(0);
    if (slug === "under-stairs-storage") {
      await expect(page.locator(".service-hero-visual figcaption")).toContainText("AI concept image");
      await expect(page.locator(".service-hero-visual figcaption")).toContainText("not a completed Form & Frame project");
    } else {
      await expect(page.locator(".service-hero-visual figcaption")).toHaveCount(0);
    }
    await expect(page.getByText(/Photography slot ready|Coming soon/i)).toHaveCount(0);
    const enquiryUrl = `/contact?service=bespoke-joinery&joinery=${slug}#enquiry-form`;
    await expect(page.getByRole("link", { name: "Start my enquiry" })).toHaveAttribute("href", enquiryUrl);
    if (slug === "wardrobes") await page.screenshot({ path: testInfo.outputPath("wardrobes-page.png"), fullPage: true });
    await page.getByRole("link", { name: "Discuss my project" }).click();
    await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("bespoke-joinery");
    await expect(page.getByRole("combobox", { name: "Furniture / joinery type", exact: true })).toHaveValue(slug);
    await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveCount(0);
  }
  const sitemap = await request.get("/sitemap.xml");
  const xml = await sitemap.text();
  for (const [slug] of categories) expect(xml).toContain(`https://formandframekitchens.co.uk/bespoke-joinery/${slug}</loc>`);
  expect((await request.get("/bespoke-joinery/not-a-category")).status()).toBe(404);
});

test("joinery selections survive reload, stay editable and discard invalid or stale context", async ({ page }) => {
  await page.goto("/contact?service=bespoke-joinery&joinery=under-stairs-storage&supplier=ikea&installation=own-kitchen#enquiry-form");
  const category = page.getByRole("combobox", { name: "Furniture / joinery type", exact: true });
  await expect(category).toHaveValue("under-stairs-storage");
  await page.reload();
  await expect(category).toHaveValue("under-stairs-storage");
  await category.selectOption("office-furniture");
  await page.getByLabel("Name", { exact: true }).fill("Joinery visitor");
  await expect(category).toHaveValue("office-furniture");
  const service = page.getByRole("combobox", { name: "Service", exact: true });
  await service.selectOption("kitchen-installation");
  await expect(category).toHaveCount(0);
  await service.selectOption("bespoke-joinery");
  await expect(category).toHaveValue("");
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue("Joinery visitor");
  await page.goto("/contact?service=bespoke-joinery&joinery=%3Cscript%3E#enquiry-form");
  await expect(category).toHaveValue("");
  await page.goto("/contact?service=kitchen-installation&joinery=wardrobes#enquiry-form");
  await expect(category).toHaveCount(0);
});

test("joinery links work with a keyboard and without JavaScript", async ({ page, browser }) => {
  await page.goto("/bespoke-joinery");
  const rows = page.locator(".joinery-service-links a");
  await rows.first().focus();
  await page.keyboard.press("Tab");
  await expect(rows.nth(1)).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/bespoke-joinery\/alcove-units$/);
  await page.getByRole("link", { name: "Back to all bespoke joinery" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Bespoke joinery, room by room");
  const context = await browser.newContext({ javaScriptEnabled: false });
  const plain = await context.newPage();
  // With scripts disabled, the browser eagerly fetches below-fold images; the
  // navigation checks only require the server-rendered, interactive document.
  await plain.goto("http://127.0.0.1:3105/bespoke-joinery", { waitUntil: "domcontentloaded" });
  await plain.locator('.joinery-service-links a[href="/bespoke-joinery/bookcases"]').click();
  await expect(plain.getByRole("heading", { level: 1 })).toHaveText("Bespoke bookcases");
  await context.close();
});

test("prepared email names the joinery category and removes it for other services", () => {
  const data = new FormData();
  data.set("service", "bespoke-joinery");
  data.set("joinery", "under-stairs-storage");
  data.set("supplier", "wren");
  data.set("installation", "own-kitchen");
  const email = enquiryEmail(data);
  expect(email.body).toContain("Joinery type: Under-stairs storage");
  expect(email.body).not.toContain("Kitchen supplier:");
  data.set("service", "kitchen-installation");
  expect(enquiryEmail(data).body).not.toContain("Joinery type:");
});
