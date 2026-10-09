import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: "http://127.0.0.1:3105",
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
    launchOptions: { executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH || undefined },
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1366, height: 768 } } },
    { name: "mobile", use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
  ],
  webServer: {
    env: {
      PROGRESS_GALLERY_ACCESS_CODE: "local-gallery-test-only",
      GOOGLE_BUSINESS_PROFILE_REVIEW_URL: "",
      // Explicit local-only fixtures, never production credentials.
      SUPPLIER_PORTAL_SIGNING_SECRET: "local-test-signing-secret-at-least-32-characters",
      SUPPLIER_PORTAL_B_AND_Q_ACCESS_CODE: "local-b-and-q-code",
      SUPPLIER_PORTAL_MAGNET_ACCESS_CODE: "local-magnet-code",
      SUPPLIER_PORTAL_WICKES_ACCESS_CODE: "local-wickes-code",
      SUPPLIER_PORTAL_WREN_ACCESS_CODE: "local-wren-code",
      RESEND_API_KEY: "",
    },
    command: "npm run start -- --hostname 127.0.0.1 --port 3105",
    url: "http://127.0.0.1:3105",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
