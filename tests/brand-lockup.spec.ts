import { expect, test } from "@playwright/test";

test("brand lock-ups stay accessible and proportional", async ({ page, request }, testInfo) => {
  await page.goto("/");

  const lockups = page.getByRole("link", { name: "Form and Frame home" });
  await expect(lockups).toHaveCount(2);
  await expect(lockups.first()).toHaveAttribute("href", "/");
  await expect(lockups.last()).toHaveAttribute("href", "/");

  for (const lockup of await lockups.all()) {
    await expect(lockup.locator(".brand-mark")).toBeVisible();
    await expect(lockup.locator(".brand-name")).toHaveText("FORM & FRAME");
  }

  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  const header = await lockups.first().boundingBox();
  expect(header?.width).toBeLessThan(page.viewportSize()!.width * 0.75);

  await page.screenshot({ path: testInfo.outputPath("brand-header.png") });
  await page.setViewportSize({ width: 768, height: 1024 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(lockups.first()).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("brand-tablet.png") });

  const signatureLogo = await request.get("/brand/form-and-frame-lockup.png");
  expect(signatureLogo.status()).toBe(200);
  expect(signatureLogo.headers()["content-type"]).toBe("image/png");
});
