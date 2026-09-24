import { expect, test } from "@playwright/test";
import { enquiryEmail } from "../app/lib/enquiry";

const categories = [
  ["wardrobes", "Bespoke wardrobes"],
  ["alcove-units", "Bespoke alcove units"],
  ["bookcases", "Bespoke bookcases"],
  ["entertainment-units", "Entertainment units"],
  ["office-furniture", "Office furniture"],
  ["under-stairs-storage", "Under-stairs storage"],
  ["unique-furniture", "Unique furniture"],
];

test("first service opens seven illustrated joinery choices with a clean opening screen", async ({ page }, testInfo) => {
  await page.goto("/services");
  await page.locator('.services-hub-row[href="/bespoke-joinery"]').click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Choose your bespoke joinery");
  const rows = page.locator(".joinery-selection .services-hub-row");
  await expect(rows).toHaveCount(7);
  for (const [index, [slug, title]] of categories.entries()) {
    await expect(rows.nth(index)).toHaveAttribute("href", `/bespoke-joinery/${slug}`);
    await expect(rows.nth(index).getByRole("heading")).toHaveText(title);
    await expect.poll(() => rows.nth(index).locator("img").evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    if (testInfo.project.name === "desktop") await expect(rows.nth(index)).toBeInViewport({ ratio: 1 });
  }
  expect(new Set(await rows.locator("img").evaluateAll(images => images.map(image => image.getAttribute("src")))).size).toBe(7);
  expect(await page.locator("#joinery-details").evaluate(element => element.getBoundingClientRect().top)).toBeGreaterThanOrEqual(testInfo.project.use.viewport!.height - 1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("joinery-landing.png") });
  await page.locator(".joinery-selection").screenshot({ path: testInfo.outputPath("joinery-selection.png") });
  const itemList = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent())!);
  expect(itemList.itemListElement.map((item: { position: number }) => item.position)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test("every category has a usable destination and passes its identity to the enquiry", async ({ page, request }, testInfo) => {
  for (const [slug, title] of categories) {
    await page.goto("/bespoke-joinery");
    await page.locator(`.joinery-selection a[href="/bespoke-joinery/${slug}"]`).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(title);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://formandframekitchens.co.uk/bespoke-joinery/${slug}`);
    await expect.poll(() => page.locator(".service-hero-visual img").evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    await expect(page.locator(".service-hero-visual figcaption")).toHaveCount(0);
    await expect(page.getByText(/Photography slot ready|AI-generated|Coming soon/i)).toHaveCount(0);
    const enquiryUrl = `/contact?service=bespoke-joinery&joinery=${slug}#enquiry-form`;
    await expect(page.getByRole("link", { name: "Start my enquiry" })).toHaveAttribute("href", enquiryUrl);
    if (slug === "wardrobes") await page.screenshot({ path: testInfo.outputPath("wardrobes-page.png"), fullPage: true });
    await page.getByRole("link", { name: "Discuss my project" }).click();
    await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("bespoke-joinery");
    await expect(page.getByRole("combobox", { name: "Joinery type", exact: true })).toHaveValue(slug);
    await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveCount(0);
  }
  const sitemap = await request.get("/sitemap.xml");
  const xml = await sitemap.text();
  for (const [slug] of categories) expect(xml).toContain(`https://formandframekitchens.co.uk/bespoke-joinery/${slug}</loc>`);
  expect((await request.get("/bespoke-joinery/not-a-category")).status()).toBe(404);
});

test("joinery selections survive reload, stay editable and discard invalid or stale context", async ({ page }) => {
  await page.goto("/contact?service=bespoke-joinery&joinery=under-stairs-storage&supplier=ikea&installation=own-kitchen#enquiry-form");
  const category = page.getByRole("combobox", { name: "Joinery type", exact: true });
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
  const rows = page.locator(".joinery-selection .services-hub-row");
  await rows.first().focus();
  await page.keyboard.press("Tab");
  await expect(rows.nth(1)).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/bespoke-joinery\/alcove-units$/);
  await page.getByRole("link", { name: "Back to all bespoke joinery" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Choose your bespoke joinery");
  const context = await browser.newContext({ javaScriptEnabled: false });
  const plain = await context.newPage();
  await plain.goto("http://127.0.0.1:3105/bespoke-joinery");
  await plain.locator('.joinery-selection a[href="/bespoke-joinery/bookcases"]').click();
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
