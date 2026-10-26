import { test, expect } from "@playwright/test";
import { SignJWT } from "jose";
import { createHash } from "node:crypto";

test("private pages and media disclose nothing before authentication", async ({ page, request }) => {
  const response = await page.goto("/private-case-studies/synthetic-preview");
  await expect(page.getByLabel("Please enter your access code")).toBeVisible();
  expect(await page.content()).not.toContain("Synthetic access-control example");
  expect(await page.content()).not.toContain("googletagmanager");
  expect(response?.headers()["x-robots-tag"]).toContain("noindex");
  for (const method of ["get", "head"] as const) {
    const media = await request[method]("/api/private-case-studies/media/synthetic-preview-photo", { headers: { Range: "bytes=0-100" } });
    expect(media.status()).toBe(404);
    expect(media.headers()["cache-control"]).toContain("no-store");
  }
  expect(await (await request.get("/sitemap.xml")).text()).not.toContain("private-case-studies");
});

test("cross-site login/logout, forged and expired sessions fail", async ({ request, context, page }) => {
  for (const endpoint of ["login", "logout"]) {
    const response = await request.post(`/api/private-case-studies/${endpoint}`, { form: { password: "local-private-test-only" }, headers: { Origin: "https://untrusted.example" }, maxRedirects: 0 });
    expect(response.status()).toBe(403);
  }
  const key = createHash("sha256").update("local-private-test-secret-at-least-32-characters\0local-private-test-only").digest();
  const expired = await new SignJWT({ access: "private-portfolio" }).setProtectedHeader({ alg: "HS256" }).setIssuedAt(Math.floor(Date.now()/1000)-120).setExpirationTime(Math.floor(Date.now()/1000)-60).setAudience("form-frame-private-portfolio").setIssuer("form-frame").sign(key);
  for (const value of [expired, "forged.invalid.token"]) {
    await context.addCookies([{ name: "ff_private_portfolio", value, domain: "127.0.0.1", path: "/" }]);
    await page.goto("/private-case-studies/synthetic-preview");
    await expect(page.getByLabel("Please enter your access code")).toBeVisible();
  }
});

test("valid login unlocks only synthetic content and logout locks it", async ({ page, context }) => {
  await page.goto("/private-case-studies/synthetic-preview");
  await page.getByLabel("Please enter your access code").fill("local-private-test-only");
  await page.getByRole("button", { name: "View private case studies" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Synthetic access-control example");
  const cookie = (await context.cookies()).find(item => item.name === "ff_private_portfolio");
  expect(cookie?.httpOnly).toBe(true);
  expect(cookie?.sameSite).toBe("Strict");
  expect(cookie?.secure).toBe(true);
  expect((await page.goto("/private-case-studies/missing-fixture"))?.status()).toBe(404);
  await page.goto("/private-case-studies/synthetic-preview");
  await page.getByRole("button", { name: "Lock portfolio" }).click();
  await expect(page.getByLabel("Please enter your access code")).toBeVisible();
});
