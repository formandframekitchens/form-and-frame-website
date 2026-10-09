import { expect, test, type Page } from "@playwright/test";

test.skip(process.env.B23_B27_GA_TEST !== "1", "Requires the explicitly enabled, intercepted GA test build.");

async function events(page: Page) {
  return page.evaluate(() => (window.dataLayer || []).map(item => Array.from(item as ArrayLike<unknown>)));
}

async function ready(page: Page) {
  await expect.poll(async () => (await events(page)).filter(item => item[1] === "page_view").length).toBeGreaterThan(0);
}

test.beforeEach(async ({ page }) => {
  // Never contact Google, Instagram or send email in these assertions.
  await page.route("https://www.googletagmanager.com/**", route => route.fulfill({ contentType: "application/javascript", body: "/* intercepted test loader */" }));
  await page.route(/https:\/\/[^/]*google-analytics\.com\//, route => route.abort());
});

test("B22 page, enquiry and contact events coexist with B25 Instagram events without PII", async ({ page }) => {
  await page.goto("/?private=do-not-track");
  await ready(page);
  await page.evaluate(() => {
    document.addEventListener("click", event => {
      const href = (event.target as Element).closest("a")?.getAttribute("href") || "";
      if (/^(https:\/\/wa.me\/|https:\/\/www.instagram.com\/|tel:|mailto:)/.test(href)) event.preventDefault();
    });
  });
  await page.locator('.social-card-instagram').first().click();
  await page.locator('.site-footer a[href^="tel:"]').click();
  await page.locator('.site-footer a[href^="mailto:"]').click();
  await page.locator('.site-footer a[data-analytics="instagram"]').click();
  const homeEvents = await events(page);
  expect(homeEvents.some(item => item[1] === "phone_click")).toBe(true);
  expect(homeEvents.some(item => item[1] === "email_click")).toBe(true);
  await page.goto("/kitchen-installation/wren?private=do-not-track");
  await ready(page);
  await expect.poll(async () => (await events(page)).some(item => item[1] === "supplier_portal_view")).toBe(true);
  await page.getByRole("link", { name: "Request a quote" }).click();
  await expect(page).toHaveURL(/\/contact\?/);
  await page.getByLabel("Name", { exact: true }).fill("Private test name");
  await page.getByRole("textbox", { name: /^Email/ }).fill("private-test@example.com");
  await page.getByRole("textbox", { name: "Project details", exact: true }).fill("Private test message");
  await page.getByLabel("Postcode / town", { exact: true }).fill("Private test town");
  await page.locator('input[name="privacyAccepted"]').check();
  await page.route("**/api/enquiries", route => route.fulfill({ json: { ok: true, reference: "PRIVATE-REFERENCE" } }));
  await page.getByRole("button", { name: /Send enquiry/ }).click();
  await expect.poll(async () => (await events(page)).some(item => item[1] === "enquiry_submit_success")).toBe(true);
  const recorded = await events(page);
  for (const name of ["enquiry_start", "kitchen_plan_enquiry", "primary_cta_click", "supplier_portal_view", "enquiry_submit_success"]) {
    expect(recorded.some(item => item[1] === name), name).toBe(true);
  }
  const serialized = JSON.stringify(recorded);
  for (const value of ["Private test name", "private-test@example.com", "Private test message", "Private test town", "PRIVATE-REFERENCE", "do-not-track"]) expect(serialized).not.toContain(value);
  await page.goto("/gallery/fulham-alcove-units");
  await ready(page);
  expect((await events(page)).filter(item => item[1] === "page_view")).toHaveLength(1);
  expect((await events(page)).some(item => item[1] === "important_case_study_view")).toBe(true);
});

test("private supplier event waits for GA readiness and server authorization", async ({ page, context }) => {
  await page.goto("/supplier-portals/wren");
  await ready(page);
  expect((await events(page)).some(item => item[1] === "supplier_portal_view")).toBe(false);
  await page.getByLabel("Access code", { exact: true }).fill("local-wren-code");
  await page.getByRole("button", { name: "Open presentation" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Installation capability for Wren");
  await ready(page);
  await expect.poll(async () => (await events(page)).filter(item => item[1] === "supplier_portal_view").length).toBe(1);
  expect((await events(page)).find(item => item[1] === "supplier_portal_view")?.[2]).toEqual({ supplier: "wren", access: "private" });
  await page.getByRole("button", { name: "Lock presentation" }).click();
  await expect(page.getByLabel("Access code", { exact: true })).toBeVisible();
  expect((await context.cookies()).some(cookie => cookie.name === "ff_supplier_portal_wren")).toBe(false);
});

test("B25 outbound card/footer analytics send stable identifiers only", async ({ page }) => {
  await page.goto("/");
  await ready(page);
  await page.evaluate(() => document.addEventListener("click", event => {
    if ((event.target as Element).closest('[data-analytics="instagram"]')) event.preventDefault();
  }));
  await page.locator('.social-card-instagram').first().click();
  await page.locator('.site-footer [data-analytics="instagram"]').click();
  const outbound = (await events(page)).filter(item => item[1] === "instagram_outbound_click");
  expect(outbound.map(item => item[2])).toEqual([
    { source_path: "/", content_id: "kitchen-installation" },
    { source_path: "/", content_id: "profile" },
  ]);
  const config = (await events(page)).find(item => item[0] === "config");
  expect(config?.[2]).toEqual({ send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
});
