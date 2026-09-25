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

test("seven kitchen rows have unique images and keep supporting content below the opening screen", async ({ page }, testInfo) => {
  await page.goto("/kitchen-installation");
  const rows = page.locator(".kitchen-selection .services-hub-row");
  const paths = ["/in-frame-kitchens", "/bespoke-kitchens", ...suppliers.slice(0,5).map(supplier => "/kitchen-installation/" + supplier)];
  await expect(rows).toHaveCount(7);
  for (const [index, path] of paths.entries()) {
    await expect(rows.nth(index)).toHaveAttribute("href", path);
    await expect(rows.nth(index).locator(".services-card-number")).toHaveText("0" + (index + 1));
    await expect.poll(() => rows.nth(index).locator("img").evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }
  expect(new Set(await rows.locator("img").evaluateAll(images => images.map(image => image.getAttribute("src")))).size).toBe(7);
  if (testInfo.project.name === "desktop") {
    for (const row of await rows.all()) await expect(row).toBeInViewport({ ratio: 1 });
  }
  expect(await page.locator("#suppliers").evaluate(element => element.getBoundingClientRect().top)).toBeGreaterThanOrEqual(testInfo.project.use.viewport!.height - 1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("kitchen-choice.png") });
  for (const row of await rows.all()) await row.scrollIntoViewIfNeeded();
  await page.locator(".kitchen-selection").screenshot({ path: testInfo.outputPath("kitchen-selection.png") });
});

test("supplier choice leads through its detail page to an editable enquiry", async ({ page }) => {
  await page.goto("/services");
  await page.locator('.services-hub-row[href="/kitchen-installation"]').click();
  await page.locator('.kitchen-selection a[href="/kitchen-installation/ikea"]').click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("IKEA kitchen installation");
  await page.getByRole("link", { name: "Request a quote" }).click();
  await expect(page).toHaveURL(/service=kitchen-installation&supplier=ikea&installation=own-kitchen#enquiry-form$/);
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("kitchen-installation");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue("ikea");
  await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveValue("own-kitchen");
  await page.reload();
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue("ikea");
  await page.getByRole("combobox", { name: "Kitchen supplier", exact: true }).selectOption("wren");
  await page.getByLabel("Name", { exact: true }).fill("Test visitor");
  await page.getByRole("combobox", { name: "Service", exact: true }).selectOption("internal-door-installation");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveCount(0);
  await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveCount(0);
  await page.getByRole("combobox", { name: "Service", exact: true }).selectOption("kitchen-installation");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue("");
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue("Test visitor");
});

test("Form and Frame supplied kitchens keep distinct enquiry choices", async ({ page }) => {
  for (const [service, installation] of [["in-frame-kitchens", "design-supply-installation"], ["bespoke-kitchens", "bespoke-design-supply-installation"]]) {
    await page.goto("/kitchen-installation");
    await page.locator('.kitchen-selection a[href="/' + service + '"]').click();
    const enquiryUrl = "/contact?service=" + service + "&installation=" + installation + "#enquiry-form";
    await expect(page.locator("#service-quote .button").first()).toHaveAttribute("href", enquiryUrl);
    await page.getByRole("link", { name: "Request a quote" }).click();
    await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue(service);
    await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveValue(installation);
    await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveCount(0);
  }
  await page.goto("/in-frame-kitchens");
  await page.getByRole("link", { name: "Enquire about installation only" }).click();
  await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveValue("in-frame-installation");
  await expect(page.getByRole("combobox", { name: "Kitchen supplier", exact: true })).toHaveValue("other");
  await page.goto("/kitchen-installation");
  await page.getByRole("link", { name: "Still choosing my kitchen" }).click();
  await expect(page.getByRole("combobox", { name: "Kitchen requirement", exact: true })).toHaveValue("advice");
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

test("kitchen rows work with the keyboard and without JavaScript", async ({ page, browser }) => {
  await page.goto("/kitchen-installation");
  await page.locator(".kitchen-selection .services-hub-row").first().focus();
  await page.keyboard.press("Tab");
  await expect(page.locator(".kitchen-selection .services-hub-row").nth(1)).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/bespoke-kitchens$/);
  const context = await browser.newContext({ javaScriptEnabled: false });
  const plain = await context.newPage();
  await plain.goto("http://127.0.0.1:3105/kitchen-installation");
  await plain.locator('.kitchen-selection a[href="/kitchen-installation/howdens"]').click();
  await expect(plain.getByRole("heading", { level: 1 })).toHaveText("Howdens kitchen installation");
  await context.close();
});

test("existing routes, canonical URLs, descriptions and sitemap are preserved", async ({ page, request }) => {
  const paths = ["/", "/services", "/contact", "/in-frame-kitchens", "/bespoke-kitchens", ...servicePaths.map(path => `/${path}`), ...suppliers.map(supplier => `/kitchen-installation/${supplier}`)];
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
  data.set("service", "bespoke-kitchens");
  data.set("installation", "bespoke-design-supply-installation");
  const bespoke = enquiryEmail(data);
  expect(bespoke.subject).toBe("Website enquiry — Bespoke kitchen");
  expect(bespoke.body).toContain("Kitchen supplier: Form & Frame");
  expect(bespoke.body).not.toContain("B&Q");
  data.set("service", "bespoke-joinery");
  const changed = enquiryEmail(data);
  expect(changed.body).not.toContain("Kitchen supplier:");
  expect(changed.body).not.toContain("Kitchen requirement:");
});


test("enquiry API rejects incomplete submissions before delivery", async ({ request }) => {
  const response = await request.post("/api/enquiries", {
    multipart: {
      service: "kitchen-installation",
      privacyAccepted: "yes",
    },
  });
  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.ok).toBe(false);
  expect(body.fields.name).toBeTruthy();
  expect(body.fields.contact).toBeTruthy();
  expect(body.fields.location).toBeTruthy();
  expect(body.fields.message).toBeTruthy();
});

test("valid enquiry does not claim acceptance when provider is unconfigured", async ({ request }) => {
  const response = await request.post("/api/enquiries", {
    multipart: {
      name: "Preview test",
      email: "preview@example.com",
      location: "LU1",
      service: "kitchen-installation",
      preferredContact: "email",
      message: "Controlled preview validation test.",
      privacyAccepted: "yes",
      submissionId: "preview-test-id",
    },
  });
  expect(response.status()).toBe(503);
  const body = await response.json();
  expect(body.ok).toBe(false);
  expect(body.code).toBe("provider_not_configured");
  expect(body.reference).toBeUndefined();
});

test("enquiry API rejects a file whose bytes do not match its declared type", async ({ request }) => {
  const response = await request.post("/api/enquiries", {
    multipart: {
      name: "Preview test",
      phone: "07123456789",
      location: "LU1",
      service: "internal-door-installation",
      preferredContact: "phone",
      message: "Controlled attachment validation test.",
      privacyAccepted: "yes",
      files: {
        name: "not-really-a.pdf",
        mimeType: "application/pdf",
        buffer: Buffer.from("this is not a pdf"),
      },
    },
  });
  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.ok).toBe(false);
  expect(body.fields.files).toMatch(/file type/i);
});
