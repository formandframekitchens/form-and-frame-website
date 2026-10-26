import { expect, test, type Page } from "@playwright/test";

test.skip(process.env.B23_B27_GA_TEST !== "1", "Requires the explicitly enabled, intercepted GA test build.");

async function events(page: Page) {
  return page.evaluate(() => (window.dataLayer || []).map(item => Array.from(item as ArrayLike<unknown>)));
}

async function ready(page: Page) {
  const choice = page.getByRole("button", { name: "Allow analytics", exact: true });
  if (await page.evaluate(() => JSON.parse(localStorage.getItem("ff_analytics_choice_v1") || "null")?.choice !== "accepted")) await choice.click();
  await expect.poll(async () => (await events(page)).filter(item => item[1] === "page_view").length).toBeGreaterThan(0);
}

test.beforeEach(async ({ page }) => {
  // Never contact Google, Instagram or send email in these assertions.
  await page.route("https://www.googletagmanager.com/**", route => route.fulfill({ contentType: "application/javascript", body: "/* intercepted test loader */" }));
  await page.route(/https:\/\/[^/]*google-analytics\.com\//, route => route.abort());
});

test("installation portfolio downloads work without consent and are measured only after opt-in", async ({ page, request }) => {
  await page.goto("/kitchens");
  const link = page.getByRole("link", { name: "Download installation portfolio", exact: true });
  await expect(link).toHaveAttribute("href", "/downloads/form-and-frame-installation-portfolio.pdf");
  const [first] = await Promise.all([page.waitForEvent("download"), link.click()]);
  expect(first.suggestedFilename()).toBe("form-and-frame-installation-portfolio.pdf");
  expect(await page.evaluate(() => typeof window.gtag)).toBe("undefined");
  const response = await request.get("/downloads/form-and-frame-installation-portfolio.pdf");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect(response.headers()["x-robots-tag"]).toBe("noindex");
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  expect((await response.body()).length).toBeLessThan(500_000);
  await ready(page);
  await Promise.all([page.waitForEvent("download"), link.click()]);
  await expect.poll(async () => (await events(page)).filter(item => item[1] === "installation_portfolio_download").length).toBe(1);
  expect((await events(page)).find(item => item[1] === "installation_portfolio_download")?.[2]).toEqual({ source_path: "/kitchens", content_id: "installation-portfolio" });
  expect((await events(page)).some(item => item[1] === "enquiry_submit_success")).toBe(false);
});

test("public K01 proof views and service progression require consent and exclude private routes", async ({ page }) => {
  await page.goto("/case-studies/k01-surbiton/kitchen?email=private-do-not-track");
  expect(await page.evaluate(() => typeof window.gtag)).toBe("undefined");
  await ready(page);
  await expect.poll(async () => (await events(page)).filter(item => item[1] === "important_case_study_view").length).toBe(1);
  expect((await events(page)).find(item => item[1] === "important_case_study_view")?.[2]).toEqual({ project: "k01-surbiton", content_id: "/case-studies/k01-surbiton/kitchen", source_path: "/case-studies/k01-surbiton/kitchen" });
  await page.getByRole("link", { name: "Explore kitchen installation ↗", exact: true }).click();
  await expect(page).toHaveURL(/\/kitchen-installation$/);
  await expect.poll(async () => (await events(page)).filter(item => item[1] === "project_service_click").length).toBe(1);
  expect((await events(page)).find(item => item[1] === "project_service_click")?.[2]).toEqual({ content_id: "/case-studies/k01-surbiton/kitchen", destination_path: "/kitchen-installation" });
  expect((await events(page)).some(item => item[1] === "enquiry_submit_success")).toBe(false);
  expect(JSON.stringify(await events(page))).not.toContain("private-do-not-track");
  await page.goto("/case-studies/k01-surbiton");
  await ready(page);
  await expect.poll(async () => (await events(page)).some(item => item[1] === "important_case_study_view")).toBe(true);
  await page.getByRole("button", { name: "Cookie preferences", exact: true }).click();
  await page.getByRole("button", { name: "Decline analytics", exact: true }).click();
  await page.goto("/case-studies/k01-surbiton/bedroom-wardrobe");
  expect(await page.evaluate(() => typeof window.gtag)).toBe("undefined");
  await page.goto("/private-case-studies");
  expect(await page.locator("main[data-public-project]").count()).toBe(0);
  expect(await page.evaluate(() => typeof window.gtag)).toBe("undefined");
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
  await page.locator('a[href^="https://wa.me/"]:visible').first().click();
  await page.locator('.site-footer a[href^="tel:"]').click();
  await page.locator('.site-footer a[href^="mailto:"]').click();
  await page.locator('.site-footer a[data-analytics="instagram"]').click();
  const homeEvents = await events(page);
  expect(homeEvents.filter(item => item[1] === "whatsapp_click")).toHaveLength(1);
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
  await page.route("**/api/enquiries", route => route.fulfill({ status: 503, json: { ok: false, error: "Controlled failed enquiry" } }));
  await page.getByRole("button", { name: /Send enquiry/ }).click();
  await expect(page.getByText("Controlled failed enquiry")).toBeVisible();
  expect((await events(page)).filter(item => item[1] === "enquiry_submit_success")).toHaveLength(0);
  await page.route("**/api/enquiries", route => route.fulfill({ json: { ok: true, reference: "PRIVATE-REFERENCE" } }));
  await page.getByRole("button", { name: /Send enquiry/ }).click();
  await expect.poll(async () => (await events(page)).some(item => item[1] === "enquiry_submit_success")).toBe(true);
  const recorded = await events(page);
  expect(recorded.filter(item => item[1] === "enquiry_submit_success")).toHaveLength(1);
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
  expect(config?.[2]).toMatchObject({ send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
});

test("analytics needs consent, preserves campaign attribution and stops after withdrawal", async ({ page }) => {
  let loads = 0;
  page.on("request", request => { if (request.url().includes("googletagmanager.com")) loads++; });
  await page.goto("/?utm_source=google&utm_medium=organic&email=do-not-track");
  await expect(page.getByRole("region", { name: "Analytics cookie choice" })).toBeVisible();
  expect(loads).toBe(0);
  expect(await page.evaluate(() => typeof window.gtag)).toBe("undefined");
  await page.getByRole("button", { name: "Decline analytics", exact: true }).click();
  await page.reload();
  await expect(page.getByRole("button", { name: "Cookie preferences", exact: true })).toBeVisible();
  expect(loads).toBe(0);
  await page.getByRole("button", { name: "Cookie preferences", exact: true }).click();
  await page.getByRole("button", { name: "Allow analytics", exact: true }).click();
  await ready(page);
  expect(loads).toBe(1);
  const recorded = await events(page);
  expect(JSON.stringify(recorded)).not.toContain("do-not-track");
  expect(JSON.stringify(recorded)).toContain("utm_source=google");
  await page.getByRole("button", { name: "Cookie preferences", exact: true }).click();
  await page.getByRole("button", { name: "Decline analytics", exact: true }).click();
  await expect.poll(() => page.evaluate(() => typeof window.gtag)).toBe("undefined");
  expect(loads).toBe(1);
  await page.goto("/private-case-studies/curved-headboard");
  await expect(page.getByLabel("Please enter your access code")).toBeVisible();
  expect(await page.getByRole("region", { name: "Analytics cookie choice" }).count()).toBe(0);
  expect(loads).toBe(1);
});


test("news service progression is consented, distinct from enquiries and contains stable identifiers", async ({ page }) => {
  await page.goto("/news/wren-corner-storage-fitting-checks?email=do-not-track");
  expect(await page.evaluate(() => typeof window.gtag)).toBe("undefined");
  await ready(page);
  await page.getByRole("link", { name: "Independent Wren kitchen installation ↗", exact: true }).click();
  await expect(page).toHaveURL(/\/kitchen-installation\/wren$/);
  await expect.poll(async () => (await events(page)).filter(item => item[1] === "news_service_click").length).toBe(1);
  const record = (await events(page)).find(item => item[1] === "news_service_click");
  expect(record?.[2]).toEqual({ article_slug: "wren-corner-storage-fitting-checks", destination_path: "/kitchen-installation/wren" });
  expect((await events(page)).some(item => item[1] === "enquiry_submit_success")).toBe(false);
  expect(JSON.stringify(await events(page))).not.toContain("do-not-track");
  await page.getByRole("button", { name: "Cookie preferences", exact: true }).click();
  await page.getByRole("button", { name: "Decline analytics", exact: true }).click();
  await page.goto("/news/wren-corner-storage-fitting-checks");
  expect(await page.evaluate(() => typeof window.gtag)).toBe("undefined");
});
