import { expect, test } from "@playwright/test";

test("public project films load on demand, play, seek and retain readable descriptions", async ({ page }, testInfo) => {
  await page.route(/google-analytics\.com|googletagmanager\.com/, route => route.abort());
  const mediaRequests: string[] = [];
  page.on("request", request => { if (/\/projects\/k01\/videos\/.*\.mp4/.test(request.url())) mediaRequests.push(request.url()); });
  for (const room of ["kitchen", "loft-dressing-room"]) {
    mediaRequests.length = 0;
    await page.goto(`/case-studies/k01-surbiton/${room}#films`);
    const decline = page.getByRole("button", { name: "Decline analytics" });
    if (await decline.isVisible()) await decline.click();
    const films = page.locator("#films");
    await films.scrollIntoViewIfNeeded();
    await expect(films).toBeVisible();
    expect(mediaRequests).toHaveLength(0);
    const videos = films.locator("video");
    await expect(videos).toHaveCount(room === "kitchen" ? 1 : 2);
    for (const video of await videos.all()) {
      await expect(video).toHaveAttribute("preload", "none");
      await expect(video).toHaveAttribute("controls", "");
      const describedBy = (await video.getAttribute("aria-describedby"))!.split(" ");
      for (const id of describedBy) await expect(page.locator(`#${id}`)).toBeVisible();
      await video.evaluate(async element => { const film = element as HTMLVideoElement; film.muted = true; await film.play(); });
      await expect.poll(() => video.evaluate(element => (element as HTMLVideoElement).currentTime)).toBeGreaterThan(0.2);
      await video.evaluate(element => { const film = element as HTMLVideoElement; film.pause(); film.currentTime = film.duration - 0.5; });
      await expect.poll(() => video.evaluate(element => { const film = element as HTMLVideoElement; return !film.seeking && film.duration - film.currentTime < 1; })).toBe(true);
      expect(await video.evaluate(element => (element as HTMLVideoElement).error)).toBeNull();
      await video.evaluate(element => { (element as HTMLVideoElement).currentTime = 0; });
    }
    expect(mediaRequests.length).toBeGreaterThan(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await films.screenshot({ path: testInfo.outputPath(`${room}-films.png`) });
    const schema = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(value => JSON.parse(value)).flatMap(value => value["@graph"] ?? [value]);
    expect(schema.find(value => value["@type"] === "CreativeWork").dateModified).toBe(room === "kitchen" ? "2026-10-25" : "2026-10-24");
  }
});
