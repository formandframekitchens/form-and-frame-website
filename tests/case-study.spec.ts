import { expect, test } from "@playwright/test";
import { caseStudies, isCaseStudyPublished } from "../app/lib/case-studies";

test("publication requires owner approval and all required genuine assets", () => {
  const study = caseStudies[0];
  expect(isCaseStudyPublished(study)).toBe(false);
  expect(isCaseStudyPublished({ ...study, status: "published", publicationApproved: true })).toBe(false);
  const media = study.media.map(slot => ({ ...slot, asset: { format: "image" as const, approved: true, src: "/images/approved-example.webp", alt: "Approved test fixture", width: 800, height: 600 } }));
  expect(isCaseStudyPublished({ ...study, status: "published", media })).toBe(false);
  expect(isCaseStudyPublished({ ...study, status: "published", publicationApproved: true, media })).toBe(true);
  expect(isCaseStudyPublished({ ...study, status: "published", publicationApproved: true, media: media.map(slot => ({ ...slot, asset: { ...slot.asset, approved: false } })) })).toBe(false);
});

test("K01 remains a complete, noindex editorial draft", async ({ page, request }, testInfo) => {
  const response = await request.get("/case-studies/k01-surbiton");
  expect(response.status()).toBe(200);
  const html = await response.text();
  expect(html).toContain('name="robots" content="noindex, nofollow, noarchive"');
  expect(html).toContain('rel="canonical" href="https://formandframekitchens.co.uk/case-studies/k01-surbiton"');
  expect(html).not.toContain("<meta property=\"og:image\"");

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("k01-surbiton");
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Disallow: /case-studies/k01-surbiton");

  await page.goto("/case-studies/k01-surbiton");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("A whole-home joinery project in Surbiton");
  await expect(page.getByText("Editorial preview · not yet published")).toBeVisible();
  for (const heading of ["The brief", "Design development", "Manufacture coordination", "Installation", "Technical challenge", "Multi-trade coordination", "Outcome"]) {
    await expect(page.getByText(heading, { exact: true }).first()).toBeVisible();
  }
  await expect(page.getByRole("heading", { name: "Final asset checklist" })).toBeVisible();
  await expect(page.locator(".case-study-media-slot img")).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("k01-surbiton-draft.png"), fullPage: true });
});
