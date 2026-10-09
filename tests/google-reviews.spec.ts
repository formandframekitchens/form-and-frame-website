import { expect, test } from "@playwright/test";
import { execFileSync } from "node:child_process";
import { getGoogleReviewsConfig, verifiedGoogleUrl } from "../app/lib/google-reviews";

test("Google review configuration accepts verified Google HTTPS destinations only", () => {
  expect(verifiedGoogleUrl("https://g.page/r/example/review")).toBe("https://g.page/r/example/review");
  expect(verifiedGoogleUrl("https://maps.app.goo.gl/example")).toBe("https://maps.app.goo.gl/example");
  expect(verifiedGoogleUrl("http://google.com/maps/example")).toBeUndefined();
  expect(verifiedGoogleUrl("https://google.com.example.org/reviews")).toBeUndefined();
  expect(verifiedGoogleUrl("https://user:password@google.com/maps")).toBeUndefined();
  expect(verifiedGoogleUrl("https://google.com:8443/maps")).toBeUndefined();
  expect(verifiedGoogleUrl("not a URL")).toBeUndefined();
  expect(getGoogleReviewsConfig("").reviewUrl).toBeUndefined();
});

test("unconfigured pages hide review claims and rating schema", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Server output is independent of viewport.");
  for (const path of ["/", "/kitchen-installation"]) {
    const html = await (await request.get(path)).text();
    expect(html).not.toContain("Read our Google reviews");
    expect(html).not.toContain("Leave a Google review");
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    expect(schemas.some(schema => "aggregateRating" in schema || "review" in schema)).toBe(false);
  }
});

test("configured trust panel links to checked Google destination without invented reviews", () => {
  const render = (url: string) => execFileSync(process.execPath, ["tests/helpers/render-google-reviews.mjs"], {
    env: { ...process.env, GOOGLE_BUSINESS_PROFILE_REVIEW_URL: url }, encoding: "utf8",
  });
  const html = render("https://g.page/r/example/review");
  expect(html).toContain("Read our Google reviews");
  expect(html).toContain("Leave a Google review");
  expect(html).toContain('href="https://g.page/r/example/review"');
  expect(html).not.toContain("<blockquote");
  expect(html).not.toContain("application/ld+json");
  expect(render("https://invalid.example/reviews")).toBe("");
});
