import { expect, test } from "@playwright/test";
import { existsSync } from "node:fs";
import path from "node:path";
import { galleryProjects, publicGalleryProjects } from "../app/lib/gallery-projects";
import { hiddenGalleryIds } from "../app/lib/gallery-visibility";
import { categoriesForProject, filterGalleryProjects, galleryEnquirySelection, relatedGalleryProjects } from "../app/lib/gallery-catalog";
import { enquiryDetails } from "../app/lib/enquiry-email";

test("gallery records preserve unique identities, complete covers and valid assets", () => {
  expect(new Set(galleryProjects.map(project => project.galleryId)).size).toBe(galleryProjects.length);
  expect(new Set(galleryProjects.map(project => project.slug)).size).toBe(galleryProjects.length);
  expect(galleryProjects.some(project => project.galleryId === "G53")).toBe(false);
  for (const project of galleryProjects) {
    expect(categoriesForProject(project).length, project.galleryId).toBeGreaterThan(0);
    expect(project.cover.src).toBe(project.images[0].src);
    for (const image of project.images) expect(existsSync(path.join(process.cwd(), "public", image.src)), image.src).toBe(true);
  }
  expect(filterGalleryProjects({ category: "", q: "G53" }).map(project => project.galleryId)).toEqual(["G01"]);
  const alcoves = galleryProjects.find(project => project.galleryId === "G32")!;
  expect(relatedGalleryProjects(alcoves).some(project => project.galleryId === "G45")).toBe(true);
  expect(JSON.stringify(alcoves)).not.toMatch(/dark|brass/i);
});

test("prepared projects display their verified images and retain enquiry context", async ({ page, request }, testInfo) => {
  test.setTimeout(120_000);
  for (const project of galleryProjects.filter(item => ["G57", "G58", "G59", "G60"].includes(item.galleryId) || Number(item.galleryId.slice(1)) >= 62)) {
    await page.goto("/gallery/" + project.slug);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(project.title);
    await expect(page.locator(".project-carousel-counter")).toHaveText(`1 / ${project.images.length}`);
    await expect.poll(() => page.locator(".project-carousel-image-button img").evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    for (const image of project.images) expect((await request.get(image.src)).status(), image.src).toBe(200);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.locator(".project-carousel-main").scrollIntoViewIfNeeded();
    await page.screenshot({ path: testInfo.outputPath(project.galleryId + ".png") });
    if (project.images.length === 1) {
      await expect(page.locator(".project-carousel-arrow, .project-carousel-thumbnails")).toHaveCount(0);
      await page.getByRole("button", { name: /^Open larger image/ }).click();
      const close = page.getByRole("button", { name: "Close enlarged image" });
      await page.keyboard.press("Tab");
      await expect(close).toBeFocused();
      await page.keyboard.press("Escape");
    }
    await page.getByRole("link", { name: "Send an enquiry" }).click();
    await expect(page.locator('input[name="project"]')).toHaveValue(project.slug);
    await expect(page.getByRole("combobox", { name: "Furniture / joinery type", exact: true })).toHaveValue(galleryEnquirySelection(project).joinery!);
  }
});

test("category filters, search, reload and empty results work", async ({ page }, testInfo) => {
  await page.goto("/gallery");
  await expect(page.locator(".gallery-card")).toHaveCount(publicGalleryProjects.length);
  await page.getByRole("navigation", { name: "Filter projects by furniture type" }).getByRole("link", { name: /^Bookcases/ }).click();
  const count = filterGalleryProjects({ category: "bookcases", q: "" }).length;
  await expect(page.locator(".gallery-card")).toHaveCount(count);
  await expect(page).toHaveURL(/category=bookcases/);
  await page.getByRole("searchbox", { name: "Find a project" }).fill("Esher");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Esher");
  await page.reload();
  await expect(page.getByRole("searchbox")).toHaveValue("Esher");
  expect(await page.locator(".gallery-card").count()).toBe(filterGalleryProjects({ category: "bookcases", q: "Esher" }).length);
  await page.getByRole("searchbox").fill("NoSuchFurniture987");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page.getByRole("heading", { name: "No projects match this search" })).toBeVisible();
  await page.getByRole("link", { name: "View all projects", exact: true }).click();
  await expect(page.locator(".gallery-card")).toHaveCount(publicGalleryProjects.length);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("gallery-index.png") });
});

test("owner's bottom selection stays last, including filtered results", async ({ page }) => {
  await page.goto("/gallery");
  const ids = await page.locator(".gallery-card-project-id").allTextContents();
  expect(ids).toHaveLength(publicGalleryProjects.length);
  expect(ids.slice(-11)).toEqual(["G12", "G13", "G15", "G17", "G16", "G06", "G11", "G07", "G04", "G02", "G03"]);
  expect(ids.some(id => hiddenGalleryIds.includes(id))).toBe(false);
  await page.getByRole("navigation", { name: "Filter projects by furniture type" }).getByRole("link", { name: /^Bookcases/ }).click();
  await expect.poll(async () => (await page.locator(".gallery-card-project-id").allTextContents()).slice(-3)).toEqual(["G12", "G16", "G02"]);
});

test("hidden galleries are retained but unpublished from routes, search and enquiries", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Publication checks do not depend on viewport.");
  const hidden = galleryProjects.filter(project => hiddenGalleryIds.includes(project.galleryId));
  expect(hidden).toHaveLength(5);
  expect(galleryProjects).toHaveLength(publicGalleryProjects.length + hidden.length);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const project of hidden) {
    const response = await request.get("/gallery/" + project.slug);
    expect(response.status(), project.galleryId).toBe(404);
    expect(await response.text()).toContain('name="robots" content="noindex"');
    expect(sitemap).not.toContain("/gallery/" + project.slug + "</loc>");
    expect(await (await request.get("/gallery?q=" + project.galleryId)).text()).not.toContain('class="gallery-card"');
    const contact = await (await request.get("/contact?service=bespoke-joinery&project=" + project.slug)).text();
    expect(contact).not.toContain('class="enquiry-project-reference"');
    const enquiry = await request.post("/api/enquiries", { multipart: { service: "bespoke-joinery", project: project.slug } });
    expect(enquiry.status()).toBe(400);
    expect((await enquiry.json()).fields.project).toBeTruthy();
  }
  for (const project of publicGalleryProjects) {
    expect(relatedGalleryProjects(project).some(item => hiddenGalleryIds.includes(item.galleryId))).toBe(false);
  }
});

test("search and category navigation also work without JavaScript", async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL: String(testInfo.project.use.baseURL) });
  const page = await context.newPage();
  await page.goto("/gallery");
  await page.getByRole("searchbox").fill("G32");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page.locator(".gallery-card")).toHaveCount(1);
  await page.getByRole("link", { name: "View Fulham Alcove Units", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Fulham Alcove Units");
  await context.close();
});

test("project enquiry prefill carries a validated removable project reference", async ({ page }) => {
  await page.goto("/gallery/fulham-alcove-units");
  await page.getByRole("link", { name: "Send an enquiry" }).click();
  await expect(page.getByRole("textbox", { name: "Name", exact: true })).toBeInViewport();
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("bespoke-joinery");
  await expect(page.getByRole("combobox", { name: "Furniture / joinery type", exact: true })).toHaveValue("alcove-units");
  await expect(page.locator(".enquiry-project-reference")).toContainText("G32 · Fulham Alcove Units");
  await page.reload();
  await expect(page.locator('input[name="project"]')).toHaveValue("fulham-alcove-units");
  let submittedProject = "";
  await page.route("**/api/enquiries", async route => {
    submittedProject = route.request().postData() ?? "";
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, reference: "LOCAL-GALLERY-TEST" }) });
  });
  await page.getByLabel("Name", { exact: true }).fill("Gallery test");
  await page.getByRole("textbox", { name: /^Phone optional/ }).fill("07123456789");
  await page.getByLabel("Postcode / town", { exact: true }).fill("LU1");
  await page.getByRole("textbox", { name: "Project details", exact: true }).fill("I am interested in a similar alcove project.");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: /Send enquiry/ }).click();
  await expect(page.getByRole("button", { name: /^Enquiry received/ })).toBeVisible();
  expect(submittedProject).toContain('name="project"');
  expect(submittedProject).toContain("fulham-alcove-units");
  await page.reload();
  await page.getByRole("button", { name: "Remove gallery project reference" }).click();
  await expect(page.locator('input[name="project"]')).toHaveCount(0);
  await page.reload();
  await page.getByRole("combobox", { name: "Service", exact: true }).selectOption("kitchen-installation");
  await expect(page.locator(".enquiry-project-reference")).toHaveCount(0);
});

test("project references are validated in URLs, API and notification content", async ({ page, request }) => {
  await page.goto("/contact?service=bespoke-joinery&project=%3Cscript%3E");
  await expect(page.locator(".enquiry-project-reference")).toHaveCount(0);
  const response = await request.post("/api/enquiries", { multipart: { project: "fulham-alcove-units", service: "kitchen-installation" } });
  expect(response.status()).toBe(400);
  expect((await response.json()).fields.project).toBeTruthy();
  const data = new FormData();
  data.set("service", "bespoke-joinery");
  data.set("joinery", "alcove-units");
  data.set("project", "fulham-alcove-units");
  const rows = Object.fromEntries(enquiryDetails(data, "LOCAL-TEST"));
  expect(rows["Gallery inspiration"]).toBe("G32 · Fulham Alcove Units");
  expect(rows["Gallery link"]).toBe("https://formandframekitchens.co.uk/gallery/fulham-alcove-units");
  data.set("project", "<script>");
  expect(Object.fromEntries(enquiryDetails(data, "LOCAL-TEST"))["Gallery inspiration"]).toBeUndefined();
});

test("photo dialog traps focus, navigates and restores the opener", async ({ page }, testInfo) => {
  await page.goto("/gallery/fulham-alcove-units");
  const opener = page.getByRole("button", { name: /^Open larger image/ });
  await opener.click();
  const dialog = page.getByRole("dialog");
  const close = dialog.getByRole("button", { name: "Close enlarged image" });
  await expect(close).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(dialog.getByRole("button", { name: "Next image" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(close).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await expect(dialog.locator(".project-lightbox-footer")).toContainText("2 / 4");
  await expect(dialog.locator("img")).toHaveCSS("object-fit", "contain");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("photo-dialog.png") });
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(opener).toBeFocused();
  await opener.click();
  await page.getByRole("button", { name: "Close enlarged image" }).click();
  await expect(opener).toBeFocused();
});

test("joinery pages connect to relevant completed projects", async ({ page }) => {
  for (const category of ["wardrobes", "alcove-units", "bookcases", "entertainment-units", "office-furniture", "unique-furniture"]) {
    await page.goto("/bespoke-joinery/" + category);
    expect(await page.locator("#completed-projects .gallery-card").count()).toBeGreaterThan(0);
    expect((await page.locator(".gallery-card-project-id").allTextContents()).some(id => hiddenGalleryIds.includes(id))).toBe(false);
    await expect(page.locator("#completed-projects .text-link")).toHaveAttribute("href", "/gallery?category=" + category);
  }
  await page.goto("/bespoke-joinery/under-stairs-storage");
  await expect(page.locator("#completed-projects")).toHaveCount(0);
});

test("public routes, canonical URLs, sitemap and duplicate redirect stay valid", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Route checks do not depend on viewport.");
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const project of publicGalleryProjects) {
    const response = await request.get("/gallery/" + project.slug);
    expect(response.status(), project.galleryId).toBe(200);
    const html = await response.text();
    expect(html).toContain('rel="canonical" href="https://formandframekitchens.co.uk/gallery/' + project.slug + '"');
    expect(sitemap).toContain("/gallery/" + project.slug + "</loc>");
    expect(galleryEnquirySelection(project).project).toBe(project.slug);
  }
  expect(sitemap).not.toContain("/gallery/stourcliff-white-handleless-kitchen</loc>");
  const retired = await request.get("/gallery/stourcliff-white-handleless-kitchen", { maxRedirects: 0 });
  expect(retired.status()).toBe(308);
  expect(retired.headers().location).toBe("/gallery/handleless-kitchen-installation");
});

test("private access request reaches a prefilled enquiry", async ({ page }) => {
  await page.goto("/progress-gallery");
  await page.getByRole("link", { name: "Request access from Form & Frame" }).click();
  await expect(page.getByRole("textbox", { name: "Project details", exact: true })).toHaveValue("I would like to request access to the private progress gallery.");
  await expect(page.getByRole("combobox", { name: "Service", exact: true })).toHaveValue("other");
});

test("private login, lock and unauthorised image protection work locally", async ({ page, request }) => {
  const image = await request.get("/api/progress-gallery/image/alex-progress/2024-07-22/20240722-172629.jpg");
  expect(image.status()).toBe(404);
  await page.goto("/progress-gallery");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await page.getByLabel("Access code").fill("incorrect-local-test");
  await page.getByRole("button", { name: "Open private gallery" }).click();
  await expect(page.getByText("The access code is not valid.")).toBeVisible();
  // Exercise authentication with a local fixture; no production credentials or private images are fetched.
  await page.route("**/api/progress-gallery/image/**", route => route.fulfill({ status: 200, contentType: "image/svg+xml", body: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"/>' }));
  await page.getByLabel("Access code").fill("local-gallery-test-only");
  await page.getByRole("button", { name: "Open private gallery" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Project progress gallery");
  await page.getByRole("button", { name: "Lock gallery" }).click();
  await expect(page.getByLabel("Access code")).toBeVisible();
});
