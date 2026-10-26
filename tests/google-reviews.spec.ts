import { expect, test } from "@playwright/test";
import { execFileSync } from "node:child_process";
import { getGoogleReviewsConfig, verifiedGoogleUrl, GOOGLE_BUSINESS_PROFILE_URL, GOOGLE_REVIEW_URL } from "../app/lib/google-reviews";

test("review destinations reject unsafe URLs and keep reading distinct from writing", () => {
  for (const value of ["http://google.com/maps/example", "https://google.com.example.org/reviews", "https://user:password@google.com/maps", "https://google.com:8443/maps", "not a URL"]) {
    expect(verifiedGoogleUrl(value)).toBeUndefined();
  }
  expect(verifiedGoogleUrl("https://g.page/r/example/review")).toBe("https://g.page/r/example/review");
  expect(getGoogleReviewsConfig("", "")).toMatchObject({ profileUrl: undefined, reviewUrl: undefined });
  const config = getGoogleReviewsConfig(GOOGLE_BUSINESS_PROFILE_URL, GOOGLE_REVIEW_URL);
  expect(config.profileUrl).not.toBe(config.reviewUrl);
  expect(config.reviews).toEqual([]);
});

test("public entry points expose verified links in server HTML without invented ratings", async ({ request }) => {
  for (const path of ["/", "/kitchen-installation", "/contact"]) {
    const response = await request.get(path);
    expect(response.ok(), path).toBe(true);
    const html = await response.text();
    expect(html).toContain('href="' + GOOGLE_BUSINESS_PROFILE_URL + '"');
    expect(html).toContain('href="' + GOOGLE_REVIEW_URL + '"');
    expect((html.match(/id="google-reviews-title"/g) || []).length).toBe(1);
    expect(html).not.toContain('<blockquote');
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const encoded = JSON.stringify(schemas);
    expect(encoded).not.toContain('"aggregateRating"');
    expect(encoded).not.toContain('"review"');
  }
});

test("rendered actions fail closed independently when an environment URL is invalid", () => {
  const render = (profile: string, review: string) => execFileSync(process.execPath, ["tests/helpers/render-google-reviews.mjs"], {
    env: { ...process.env, GOOGLE_BUSINESS_PROFILE_URL: profile, GOOGLE_BUSINESS_PROFILE_REVIEW_URL: review }, encoding: "utf8",
  });
  const profileOnly = render(GOOGLE_BUSINESS_PROFILE_URL, "https://invalid.example/review");
  expect(profileOnly).toContain("View our Google profile");
  expect(profileOnly).not.toContain("Leave a Google review");
  const reviewOnly = render("https://invalid.example/profile", GOOGLE_REVIEW_URL);
  expect(reviewOnly).not.toContain("View our Google profile");
  expect(reviewOnly).toContain("Leave a Google review");
  expect(render("https://invalid.example/profile", "https://invalid.example/review")).toBe("");
});
