import { expect, test } from "@playwright/test";
import { GA_ENABLED, trackEvent } from "../app/lib/analytics";

test("analytics is disabled without a configured measurement ID", () => {
  expect(GA_ENABLED).toBe(false);
  expect(() => trackEvent("enquiry_start", { source_path: "/contact" })).not.toThrow();
});

test("analytics implementation does not include personal enquiry fields", async () => {
  const source = await import("node:fs/promises").then(fs => fs.readFile("app/components/google-analytics.tsx", "utf8"));
  for (const field of ["name", "email", "phone", "location", "message", "files", "reference", "submissionId"]) {
    expect(source).not.toContain(`data.get("\${field}")`);
  }
  expect(source).not.toContain("searchParams");
});
