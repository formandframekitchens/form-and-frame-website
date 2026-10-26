import { expect, test } from "@playwright/test";

test.skip(process.env.VERCEL_ENV !== "preview", "Requires a preview build and runtime.");

test("preview does not mount analytics or send customer enquiries", async ({ page, request }) => {
  const analyticsRequests: string[] = [];
  await page.route(/google-analytics\.com|googletagmanager\.com/, route => {
    analyticsRequests.push(route.request().url());
    return route.abort();
  });
  await page.goto("/contact?service=kitchen-installation");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("button", { name: "Accept analytics" })).toHaveCount(0);
  expect(await page.locator('script[src*="googletagmanager"]').count()).toBe(0);
  expect(analyticsRequests).toEqual([]);
  // The preview boundary rejects even before parsing or contacting an email provider.
  const response = await request.post("/api/enquiries", { data: "synthetic-preview-probe" });
  expect(response.status()).toBe(503);
  expect(await response.json()).toEqual({
    ok: false,
    error: "This review preview does not send enquiries. Please use the live website to contact Form & Frame.",
  });
});
