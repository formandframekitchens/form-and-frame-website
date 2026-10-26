import { expect, test } from "@playwright/test";
import { publicGalleryProjects } from "../app/lib/gallery-projects";

const kitchen = publicGalleryProjects.find(project => project.category === "Kitchen Installation")!;
const joinery = publicGalleryProjects.find(project => project.galleryId === "G32")!;

test("K01 rooms are discoverable in their correct portfolios and furniture filters", async ({ page }, testInfo) => {
  test.setTimeout(90_000);
  await page.goto("/kitchens");
  await expect(page.locator("[data-k01-room]")).toHaveCount(1);
  await expect(page.locator('[data-k01-room="kitchen"] a')).toHaveAttribute("href", "/case-studies/k01-surbiton/kitchen");
  await page.goto("/bespoke-joinery?q=K01");
  await expect(page.locator(".gallery-card")).toHaveCount(6);
  await expect(page.locator('[data-k01-room="kitchen"]')).toHaveCount(0);
  const cards = page.locator("[data-k01-room]");
  expect(await cards.evaluateAll(items => items.map(item => item.getAttribute("data-k01-room")))).toEqual(["living-room", "entrance", "bedroom", "loft", "internal-doors", "under-stairs"]);
  for (const img of await cards.locator("img").all()) await img.evaluate(async element => { const image=element as HTMLImageElement; image.loading="eager"; await image.decode(); });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("k01-joinery-collection.png"), fullPage: true });
  const collection=(await page.locator('script[type="application/ld+json"]').allTextContents()).map(value=>JSON.parse(value)).find(schema=>schema['@type']==='CollectionPage');
  expect(collection.mainEntity.itemListElement.map((item:{url:string})=>new URL(item.url).pathname)).toEqual(await cards.locator("a").evaluateAll(items=>items.map(item=>item.getAttribute("href"))));
  for (const [category,rooms] of Object.entries({wardrobes:["bedroom","loft"],"entertainment-units":["living-room"],"unique-furniture":["entrance","loft"],"internal-doors":["internal-doors"],"under-stairs-storage":["under-stairs"]})) {
    await page.goto(`/bespoke-joinery?category=${category}&q=K01`);
    expect(await page.locator("[data-k01-room]").evaluateAll(items=>items.map(item=>item.getAttribute("data-k01-room"))),category).toEqual(rooms);
  }
  await page.goto("/bespoke-joinery/under-stairs-storage");
  await expect(page.locator('.service-hero-visual img')).toHaveAttribute("src", /projects%2Fk01%2Ffinished/);
  await expect(page.locator('[data-k01-room="under-stairs"] a')).toBeVisible();
  await page.locator('[data-k01-room="under-stairs"] a').click();
  await expect(page.getByRole("link",{name:"← Bespoke joinery projects",exact:true})).toHaveAttribute("href","/bespoke-joinery");
  const before=page.locator("#under-stairs-panel-site");
  await expect(before.getByRole("heading")).toHaveText("Before fitting");
  await expect(before.locator("button img")).toHaveCount(1);
  await before.scrollIntoViewIfNeeded();
  await before.locator("button img").evaluate(async element=>{const image=element as HTMLImageElement;image.loading="eager";await image.decode();});
  await expect(before.locator("button img")).toHaveAttribute("src",/p18.webp/);
  if(testInfo.project.name==='desktop')expect(await before.locator("button img").evaluate(element=>Number(new URL((element as HTMLImageElement).currentSrc).searchParams.get('w')))).toBeGreaterThanOrEqual(1280);
  await before.screenshot({path:testInfo.outputPath("under-stairs-before.png")});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test("kitchen and joinery journeys stay in their own portfolios", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/kitchens");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Kitchens");
  await expect(page.locator(".gallery-card")).toHaveCount(publicGalleryProjects.filter(project => project.category === "Kitchen Installation").length + 1);
  expect(await page.locator(".gallery-card-project-id").allTextContents()).toContain(kitchen.galleryId);
  expect(await page.locator(".gallery-card-project-id").allTextContents()).not.toContain(joinery.galleryId);
  await expect.poll(() => page.locator(".gallery-card img").first().evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("kitchens.png"), fullPage: true });
  await page.locator(`.gallery-card a[href="/gallery/${kitchen.slug}"]`).click();
  await expect(page.getByRole("navigation", { name: "Breadcrumb", exact: true }).getByRole("link", { name: "Kitchens", exact: true })).toHaveAttribute("href", "/kitchens");
  await page.getByRole("link", { name: "Send an enquiry", exact: true }).click();
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("kitchen-installation");
  await expect(page.locator('input[name="project"]')).toHaveValue(kitchen.slug);

  await page.goto("/bespoke-joinery");
  await expect(page.locator(".gallery-card")).toHaveCount(publicGalleryProjects.filter(project => project.category !== "Kitchen Installation").length + 6);
  await expect(page.getByRole("navigation", { name: "Filter projects by furniture type" }).getByRole("link", { name: /^Kitchens/ })).toHaveCount(0);
  await page.getByRole("searchbox", { name: "Find a project" }).fill("G32");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page).toHaveURL(/\/bespoke-joinery\?q=G32/);
  await expect(page.locator(".gallery-card")).toHaveCount(1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("joinery-search.png"), fullPage: true });
  await page.locator(`.gallery-card a[href="/gallery/${joinery.slug}"]`).click();
  await expect(page.getByRole("navigation", { name: "Breadcrumb", exact: true }).getByRole("link", { name: "Bespoke joinery projects", exact: true })).toHaveAttribute("href", "/bespoke-joinery");
  await page.getByRole("link", { name: "Send an enquiry", exact: true }).click();
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("bespoke-joinery");
  await expect(page.locator('input[name="project"]')).toHaveValue(joinery.slug);
  expect(errors).toEqual([]);
});

test("joinery search cannot leak kitchen results and works without scripts", async ({ browser }, testInfo) => {
  test.setTimeout(90_000);
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce", viewport: testInfo.project.use.viewport, baseURL: String(testInfo.project.use.baseURL) });
  const page = await context.newPage();
  await page.goto("/bespoke-joinery?category=kitchens");
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
  for (const route of ["/kitchens", "/bespoke-joinery"]) {
    expect(sitemap).toContain(`https://formandframekitchens.co.uk${route}</loc>`);
    const html = await (await request.get(route)).text();
    expect(html).toContain(`rel="canonical" href="https://formandframekitchens.co.uk${route}"`);
    expect(html).toContain('"@type":"CollectionPage"');
  }
  const filtered = await (await request.get("/bespoke-joinery?q=G32")).text();
  expect(filtered).toContain('name="robots" content="noindex, follow"');
  const html = await (await request.get(`/gallery/${kitchen.slug}`)).text();
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  expect(schemas.find(schema => schema["@type"] === "BreadcrumbList").itemListElement[1].item).toBe("https://formandframekitchens.co.uk/kitchens");
  expect(html).toContain(`rel="canonical" href="https://formandframekitchens.co.uk/gallery/${kitchen.slug}"`);
});

test("legacy joinery portfolio redirects with its filters and is absent from sitemap", async ({ request }) => {
  const response = await request.get("/bespoke-joinery/projects?category=wardrobes&q=G27", { maxRedirects: 0 });
  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe("/bespoke-joinery?category=wardrobes&q=G27");
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("/bespoke-joinery/projects</loc>");
});
