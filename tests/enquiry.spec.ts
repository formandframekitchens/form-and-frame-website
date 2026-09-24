import { expect, test } from "@playwright/test";
import { enquiryEmail } from "../app/lib/enquiry";

const servicePaths = ["bespoke-joinery", "kitchen-installation", "internal-door-installation", "joinery-installation"];
const suppliers = ["howdens", "wren", "ikea", "magnet", "wickes", "benchmarx", "b-and-q"];

test("four numbered service rows keep their routes and fit on a laptop", async ({ page }, testInfo) => {
  await page.goto("/services");
  const rows = page.locator(".services-hub-row");
  await expect(rows).toHaveCount(4);
  for (const [index, path] of servicePaths.entries()) {
    await expect(rows.nth(index)).toHaveAttribute("href", `/${path}`);
    await expect(rows.nth(index).locator(".services-card-number")).toHaveText(`0${index + 1}`);
    await expect(rows.nth(index).locator("img")).toBeVisible();
    await expect.poll(() => rows.nth(index).locator("img").evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  if (testInfo.project.name === "desktop") {
    for (const row of await rows.all()) await expect(row).toBeInViewport({ ratio: 1 });
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("services.png") });
  const list = await page.locator('script[type="application/ld+json"]').textContent();
  expect(JSON.parse(list!).itemListElement.map((item: { position: number }) => item.position)).toEqual([1, 2, 3, 4]);
});

test("chosen kitchen and supplier carry into an editable enquiry and survive reload", async ({ page }, testInfo) => {
  await page.goto("/kitchen-installation");
  await page.getByRole("radio", { name: "I have my own kitchen", exact: false }).check();
  await page.getByRole("radio", { name: "B&Q", exact: true }).check();
  await page.screenshot({ path: testInfo.outputPath("kitchen-choice.png"), fullPage: false });
  await page.getByRole("link", { name: "Continue to enquiry" }).click();
  await expect(page).toHaveURL(/service=kitchen-installation&supplier=b-and-q&installation=own-kitchen#enquiry-form$/);
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("kitchen-installation");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue("b-and-q");
  await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveValue("own-kitchen");
  await page.reload();
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue("b-and-q");
  await page.getByRole("combobox", { name: "Kitchen supplier", exact: true }).selectOption("wren");
  await page.getByLabel("Name", { exact: true }).fill("Test visitor");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue("wren");
  await page.getByRole("combobox", { name: "Service", exact: true }).selectOption("internal-door-installation");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveCount(0);
  await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveCount(0);
  await page.getByRole("combobox", { name: "Service", exact: true }).selectOption("kitchen-installation");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue("");
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue("Test visitor");
});

test("in-frame, overseas, design and planning choices retain the right context", async ({ page }) => {
  await page.goto("/kitchen-installation");
  await page.getByRole("radio", { name: "I have an in-frame kitchen", exact: false }).check();
  await page.getByRole("radio", { name: "Other / overseas supplier", exact: true }).check();
  await page.getByRole("link", { name: "Continue to enquiry" }).click();
  await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveValue("in-frame-installation");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue("other");
  await page.goBack();
  await page.getByRole("radio", { name: "I need a kitchen designed & supplied", exact: false }).check();
  await page.getByRole("link", { name: "Continue to enquiry" }).click();
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("in-frame-kitchens");
  await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveValue("design-supply-installation");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveCount(0);
  await page.goBack();
  await page.getByRole("radio", { name: "I’m still planning", exact: false }).check();
  await page.getByRole("link", { name: "Continue to enquiry" }).click();
  await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveValue("advice");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue("not-chosen");
});

test("supplier detail pages preserve both enquiry links and prefill", async ({ page }) => {
  for (const supplier of suppliers) {
    await page.goto(`/kitchen-installation/${supplier}`);
    const hero = page.getByRole("link", { name: "Request a quote" });
    const footer = page.getByRole("link", { name: "Start my enquiry" });
    const href = `/contact?service=kitchen-installation&supplier=${supplier}&installation=own-kitchen#enquiry-form`;
    await expect(hero).toHaveAttribute("href", href);
    await expect(footer).toHaveAttribute("href", href);
    await hero.click();
    await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue(supplier);
  }
});

test("service detail enquiries and ordinary contact links still work", async ({ page }) => {
  for (const service of ["bespoke-joinery", "internal-door-installation", "joinery-installation", "in-frame-kitchens"]) {
    await page.goto(`/${service}`);
    await page.getByRole("link", { name: "Request a quote" }).click();
    await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue(service);
  }
  await page.goto("/contact#enquiry-form");
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("");
  await expect(page.getByLabel("Name", { exact: true })).toBeVisible();
});

test("unknown and incompatible URL selections do not enter the enquiry", async ({ page }) => {
  await page.goto("/contact?service=unknown&supplier=howdens&installation=own-kitchen#enquiry-form");
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveCount(0);
  await page.goto("/contact?service=kitchen-installation&supplier=%3Cscript%3E&installation=design-supply-installation#enquiry-form");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue("");
  await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveValue("");
  await page.goto("/contact?service=internal-door-installation&supplier=ikea&installation=own-kitchen#enquiry-form");
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("internal-door-installation");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveCount(0);
});

test("kitchen choices work with the keyboard", async ({ page }) => {
  await page.goto("/kitchen-installation");
  const radio = page.getByRole("radio", { name: "I have my own kitchen", exact: false });
  await radio.focus();
  await page.keyboard.press("Space");
  await expect(radio).toBeChecked();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("radio", { name: "I have an in-frame kitchen", exact: false })).toBeChecked();
  await page.getByRole("link", { name: "Continue to enquiry" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveValue("in-frame-installation");
});

test("existing routes, canonical URLs, descriptions and sitemap are preserved", async ({ page, request }) => {
  const paths = ["/", "/services", "/contact", "/in-frame-kitchens", ...servicePaths.map(path => `/${path}`), ...suppliers.map(supplier => `/kitchen-installation/${supplier}`)];
  for (const path of paths) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://formandframekitchens.co.uk${path === "/" ? "" : path}`);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.+/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  }
  await page.goto("/contact?service=kitchen-installation&supplier=ikea");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://formandframekitchens.co.uk/contact");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  const xml = await sitemap.text();
  for (const path of paths) expect(xml).toContain(`https://formandframekitchens.co.uk${path}</loc>`);
});

test("prepared email includes readable choices and omits stale kitchen details", () => {
  const data = new FormData();
  data.set("name", "Test visitor");
  data.set("service", "kitchen-installation");
  data.set("supplier", "b-and-q");
  data.set("installation", "in-frame-installation");
  data.set("message", "Please review my plans.");
  const email = enquiryEmail(data);
  expect(email.subject).toBe("Website enquiry — Kitchen installation");
  expect(email.body).toContain("Kitchen requirement: I have an in-frame kitchen");
  expect(email.body).toContain("Kitchen supplier: B&Q");
  expect(email.body).toContain("Please review my plans.");
  data.set("service", "bespoke-joinery");
  const changed = enquiryEmail(data);
  expect(changed.body).not.toContain("Kitchen supplier:");
  expect(changed.body).not.toContain("Kitchen requirement:");
});
