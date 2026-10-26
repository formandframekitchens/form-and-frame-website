import { expect, test, type Page } from "@playwright/test";

async function fillEnquiry(page: Page) {
  await page.goto("/contact?service=kitchen-installation&installation=own-kitchen");
  await page.getByLabel("Name", { exact: true }).fill("Synthetic preview customer");
  await page.locator('[name="email"]').fill("qa@example.invalid");
  await page.getByLabel("Postcode / town", { exact: true }).fill("Luton");
  await page.getByLabel("Project details").fill("Synthetic test only. Please do not send.");
  await page.locator('[name="privacyAccepted"]').check();
}

test("retry retains details and identity; editing the enquiry creates a new identity", async ({ page }) => {
  const ids: string[] = [];
  await page.route("**/api/enquiries", async route => {
    const request = new Request("https://example.invalid/api/enquiries", { method: "POST", headers: { "content-type": route.request().headers()["content-type"] }, body: new Uint8Array(route.request().postDataBuffer()!) });
    const form = await request.formData(); ids.push(String(form.get("submissionId")));
    await route.fulfill({ status: 502, json: { ok: false, error: "Synthetic provider failure. Please retry." } });
  });
  await fillEnquiry(page);
  const send = page.getByRole("button", { name: "Send enquiry" });
  await send.click();
  await expect(page.getByRole("alert").filter({ hasText: "Synthetic provider failure" })).toBeFocused();
  await expect(page.getByLabel("Project details")).toHaveValue("Synthetic test only. Please do not send.");
  await send.click(); await expect(send).toBeEnabled();
  await expect.poll(() => ids.length).toBe(2); expect(ids[0]).toBe(ids[1]);
  await page.getByLabel("Project details").fill("Changed synthetic project. Still no real message.");
  await send.click(); await expect(send).toBeEnabled();
  await expect.poll(() => ids.length).toBe(3); expect(ids[2]).not.toBe(ids[1]);
});

test("in-flight form prevents duplicate sends and preserves accessible success", async ({ page }) => {
  let calls = 0; let finish: (() => void) | undefined;
  await page.route("**/api/enquiries", async route => {
    calls++; await new Promise<void>(resolve => { finish = resolve; });
    await route.fulfill({ json: { ok: true, reference: "FF-SYNTHETIC", acknowledgementSent: false } });
  });
  await fillEnquiry(page);
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect.poll(() => calls).toBe(1);
  await expect(page.getByRole("button", { name: "Sending…", exact: true })).toBeDisabled();
  await expect(page.getByLabel("Project details")).toBeDisabled();
  finish!();
  await expect(page.getByRole("status").filter({ hasText: "Enquiry received" })).toBeFocused();
  await expect(page.getByText("Reference: FF-SYNTHETIC", { exact: true })).toBeVisible();
  expect(calls).toBe(1);
});

test("keyboard submission and attachment error associations work on each viewport", async ({ page }, info) => {
  await page.goto("/contact?service=kitchen-installation");
  await page.getByRole("button", { name: "Send enquiry" }).press("Enter");
  await expect(page.locator('[name="email"]')).toHaveAttribute("aria-describedby", "contact-error");
  await expect(page.locator('[name="phone"]')).toHaveAttribute("aria-invalid", "true");
  const picker = page.getByLabel("Choose plans and photographs");
  await picker.setInputFiles({ name: "phone.heic", mimeType: "image/heic", buffer: Buffer.from("synthetic") });
  await expect(picker).toHaveAttribute("aria-describedby", "file-help files-error");
  await expect(page.locator("#files-error")).toContainText("HEIC/HEIF");
  await picker.setInputFiles({ name: "plan.pdf", mimeType: "application/pdf", buffer: Buffer.from("%PDF-synthetic") });
  await expect(page.getByRole("button", { name: "Remove plan.pdf", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Remove plan.pdf", exact: true }).press("Enter");
  await expect(page.getByRole("button", { name: "Remove plan.pdf", exact: true })).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.locator(".enquiry-form").screenshot({ path: info.outputPath("accessible-enquiry.png") });
});

test("server rejects cross-site, honeypot and excessive text without email delivery", async ({ request }) => {
  const cross = await request.post("/api/enquiries", { headers: { origin: "https://other.invalid" }, multipart: { name: "Synthetic" } });
  expect(cross.status()).toBe(403);
  const bot = await request.post("/api/enquiries", { multipart: { website: "filled", name: "Synthetic" } });
  expect(bot.status()).toBe(400); expect((await bot.json()).ok).toBe(false);
  const long = await request.post("/api/enquiries", { multipart: { name: "x".repeat(121), email: "qa@example.invalid", location: "Luton", message: "Synthetic", service: "kitchen-installation", preferredContact: "email", privacyAccepted: "yes", submissionId: "synthetic-unique-id" } });
  expect(long.status()).toBe(400); expect((await long.json()).fields.name).toContain("120");
});

test("confirmed eight-hour labour day renders on shared pricing routes", async ({ request }) => {
  for (const path of ["/kitchen-installation", "/areas/luton", "/areas/dunstable"]) {
    const html = await (await request.get(path)).text();
    expect(html.includes("per specialist per 8-hour day"), path).toBe(true);
    expect(/no VAT added/i.test(html), path).toBe(true);
  }
});
