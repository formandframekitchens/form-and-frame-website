import { expect, test } from "@playwright/test";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import imageRedirects from "../app/lib/gallery-image-redirects.json";
import { publicGalleryProjects } from "../app/lib/gallery-projects";

test("all sitemap pages expose unique indexable metadata and self canonicals", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "The crawler response is independent of viewport.");
  test.setTimeout(180_000);
  const xml = await (await request.get("/sitemap.xml")).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const url of urls) {
    const response = await request.get(new URL(url).pathname);
    expect(response.status(), url).toBe(200);
    const html = await response.text();
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    expect(canonical, url).toBeTruthy();
    expect(new URL(canonical!).href, url).toBe(new URL(url).href);
    expect(html, url).not.toMatch(/<meta name="(?:robots|googlebot)" content="[^"]*noindex/);
    expect([...html.matchAll(/<h1(?:\s|>)/g)], url).toHaveLength(1);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
    expect(title, url).toBeTruthy();
    expect(description, url).toBeTruthy();
    expect(titles.has(title!), `Duplicate title: ${url}`).toBe(false);
    expect(descriptions.has(description!), `Duplicate description: ${url}`).toBe(false);
    titles.add(title!); descriptions.add(description!);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    expect(schemas.some(schema => schema['@id'] === "https://formandframekitchens.co.uk/#business"), url).toBe(true);
  }
  expect([...xml.matchAll(/<image:loc>/g)]).toHaveLength(publicGalleryProjects.reduce((total, project) => total + project.images.length, 0));
  for (const project of publicGalleryProjects) for (const image of project.images) expect(xml).toContain(image.src + "</image:loc>");
});

test("renamed gallery assets retain permanent old links and unchanged image bytes", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Asset migration is independent of viewport.");
  test.setTimeout(180_000);
  // Check every original encoding, including AVIF companions, in small batches.
  for (let i = 0; i < imageRedirects.length; i += 8) {
    await Promise.all(imageRedirects.slice(i, i + 8).map(async redirect => {
      const previous = await request.get(redirect.source, { maxRedirects: 0 });
      expect(previous.status(), redirect.source).toBe(308);
      expect(previous.headers().location).toBe(redirect.destination);
      const current = await request.get(redirect.destination);
      expect(current.status(), redirect.destination).toBe(200);
      expect(current.headers()['content-type']).toMatch(/^image\//);
      const actual = createHash('sha256').update(await current.body()).digest('hex');
      const expected = createHash('sha256').update(readFileSync(path.join(process.cwd(), 'public', redirect.destination))).digest('hex');
      expect(actual, redirect.destination).toBe(expected);
    }));
  }
});

test("new local and materials pages work on desktop and mobile without overlapping hero copy", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const route of ['/', '/areas', '/areas/luton', '/guides/joinery-materials-finishes', '/bespoke-kitchens']) {
    await page.goto(route);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route).toBe(true);
    if (route === '/') {
      const heading = await page.locator('.hero h1').boundingBox();
      const description = await page.locator('.hero-description').boundingBox();
      expect(heading && description && (heading.x + heading.width <= description.x || heading.y + heading.height <= description.y)).toBe(true);
      await expect.poll(() => page.locator('.kitchen-carousel-slide.is-active img').evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    await page.screenshot({ path: testInfo.outputPath((route.replace(/\//g, '-') || 'home') + '.png'), fullPage: route === '/areas' });
  }
  await page.goto('/areas/luton');
  await page.getByRole('link', { name: 'Explore fitted wardrobes' }).click();
  await page.getByRole('link', { name: 'Discuss my project', exact: true }).click();
  await expect(page.getByRole('combobox', { name: 'Furniture / joinery type', exact: true })).toHaveValue('wardrobes');
  await page.goto('/guides/joinery-materials-finishes');
  await page.getByRole('link', { name: 'Start my enquiry', exact: true }).click();
  await expect(page.getByRole('combobox', { name: 'Service', exact: true })).toHaveValue('bespoke-joinery');
  expect(errors).toEqual([]);
});
