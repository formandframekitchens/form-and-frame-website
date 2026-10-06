import { expect, test } from "@playwright/test";
import { publicGalleryProjects } from "../app/lib/gallery-projects";

const kitchen = publicGalleryProjects.find(project => project.category === "Kitchen Installation")!;
const joinery = publicGalleryProjects.find(project => project.galleryId === "G32")!;

test("kitchen and joinery journeys stay in their own portfolios", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/kitchens");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Kitchens");
  await expect(page.locator(".gallery-card")).toHaveCount(publicGalleryProjects.filter(project => project.category === "Kitchen Installation").length);
  expect(await page.locator(".gallery-card-project-id").allTextContents()).toContain(kitchen.galleryId);
  expect(await page.locator(".gallery-card-project-id").allTextContents()).not.toContain(joinery.galleryId);
  await expect.poll(() => page.locator(".gallery-card img").first().evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("kitchens.png"), fullPage: true });
  await page.getByRole("link", { name: `View ${kitchen.title}`, exact: true }).click();
  await expect(page.getByRole("navigation", { name: "Breadcrumb", exact: true }).getByRole("link", { name: "Kitchens", exact: true })).toHaveAttribute("href", "/kitchens");
  await page.getByRole("link", { name: "Send an enquiry", exact: true }).click();
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("kitchen-installation");
  await expect(page.locator('input[name="project"]')).toHaveValue(kitchen.slug);

  await page.goto("/bespoke-joinery/projects");
  await expect(page.locator(".gallery-card")).toHaveCount(publicGalleryProjects.filter(project => project.category !== "Kitchen Installation").length);
  await expect(page.getByRole("navigation", { name: "Filter projects by furniture type" }).getByRole("link", { name: /^Kitchens/ })).toHaveCount(0);
  await page.getByRole("searchbox", { name: "Find a project" }).fill("G32");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page).toHaveURL(/\/bespoke-joinery\/projects\?q=G32/);
  await expect(page.locator(".gallery-card")).toHaveCount(1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("joinery-search.png"), fullPage: true });
  await page.getByRole("link", { name: `View ${joinery.title}`, exact: true }).click();
  await expect(page.getByRole("navigation", { name: "Breadcrumb", exact: true }).getByRole("link", { name: "Bespoke joinery projects", exact: true })).toHaveAttribute("href", "/bespoke-joinery/projects");
  await page.getByRole("link", { name: "Send an enquiry", exact: true }).click();
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("bespoke-joinery");
  await expect(page.locator('input[name="project"]')).toHaveValue(joinery.slug);
  expect(errors).toEqual([]);
});

test("joinery search cannot leak kitchen results and works without scripts", async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL: String(testInfo.project.use.baseURL) });
  const page = await context.newPage();
  await page.goto("/bespoke-joinery/projects?category=kitchens");
  await expect(page.locator(".gallery-card")).toHaveCount(0);
  await page.getByRole("link", { name: "Clear filters", exact: true }).click();
  await page.getByRole("searchbox").fill("G53");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page.locator(".gallery-card")).toHaveCount(0);
  await page.getByRole("searchbox").fill("G32");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page.locator(".gallery-card")).toHaveCount(1);
  await context.close();
});

test("portfolio metadata, sitemap and project breadcrumbs agree", async ({ request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const route of ["/kitchens", "/bespoke-joinery/projects"]) {
    expect(sitemap).toContain(`https://formandframekitchens.co.uk${route}</loc>`);
    const html = await (await request.get(route)).text();
    expect(html).toContain(`rel="canonical" href="https://formandframekitchens.co.uk${route}"`);
    expect(html).toContain('"@type":"CollectionPage"');
  }
  const filtered = await (await request.get("/bespoke-joinery/projects?q=G32")).text();
  expect(filtered).toContain('name="robots" content="noindex, follow"');
  const html = await (await request.get(`/gallery/${kitchen.slug}`)).text();
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  expect(schemas.find(schema => schema["@type"] === "BreadcrumbList").itemListElement[1].item).toBe("https://formandframekitchens.co.uk/kitchens");
  expect(html).toContain(`rel="canonical" href="https://formandframekitchens.co.uk/gallery/${kitchen.slug}"`);
});
