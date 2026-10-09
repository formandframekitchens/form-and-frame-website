import { expect, test } from "@playwright/test";

const portals = [
  { slug: "b-and-q", name: "B&Q", code: "local-b-and-q-code", marker: "specified cabinet range" },
  { slug: "magnet", name: "Magnet", code: "local-magnet-code", marker: "Magnet project" },
  { slug: "wickes", name: "Wickes", code: "local-wickes-code", marker: "Wickes project" },
  { slug: "wren", name: "Wren", code: "local-wren-code", marker: "Wren project" },
];

test("supplier portals are private and excluded from discovery", async ({ request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  const robots = await (await request.get("/robots.txt")).text();

  expect(sitemap).not.toContain("supplier-portals");
  expect(robots).toContain("Disallow: /supplier-portals/");

  for (const portal of portals) {
    const response = await request.get(`/supplier-portals/${portal.slug}`);
    const html = await response.text();
    expect(html).toContain("presentation");
    expect(html).toMatch(/name="robots" content="[^"]*noindex[^"]*nofollow[^"]*nocache/);
    expect(html).not.toContain(portal.marker);
    expect(html).not.toContain("More than 20 years");
  }
});

test("invalid access fails closed without setting a session", async ({ request }) => {
  const response = await request.post("/api/supplier-portals/wren/login", {
    form: { code: "wrong-code-value" },
    maxRedirects: 0,
  });
  expect(response.status()).toBe(303);
  expect(response.headers().location).toContain("/supplier-portals/wren?error=1");
  expect(response.headers()["set-cookie"]).toBeUndefined();
});

for (const portal of portals) {
  test(`${portal.name} code unlocks only its own presentation and logout revokes it`, async ({ request }) => {
    const login = await request.post(`/api/supplier-portals/${portal.slug}/login`, {
      form: { code: portal.code },
      maxRedirects: 0,
    });
    expect(login.status()).toBe(303);
    const cookie = login.headers()["set-cookie"];
    expect(cookie).toContain("HttpOnly");
    expect(cookie.toLowerCase()).toContain("samesite=strict");
    expect(cookie).toContain(`Path=/supplier-portals/${portal.slug}`);
    expect(cookie).not.toContain(portal.code);

    const requestCookie = cookie.split(";", 1)[0];
    const unlocked = await request.get(`/supplier-portals/${portal.slug}`, { headers: { cookie: requestCookie } });
    expect(await unlocked.text()).toContain(portal.marker);

    const other = portals.find(item => item.slug !== portal.slug)!;
    const isolated = await request.get(`/supplier-portals/${other.slug}`, { headers: { cookie: requestCookie } });
    expect(await isolated.text()).not.toContain(other.marker);

    const logout = await request.post(`/api/supplier-portals/${portal.slug}/logout`, {
      headers: { cookie: requestCookie },
      maxRedirects: 0,
    });
    expect(logout.status()).toBe(303);
    expect(logout.headers()["set-cookie"]).toContain("Expires=Thu, 01 Jan 1970");
  });
}

test("B22 public supplier tracking and authorized private portal tracking coexist", async () => {
  const source = await import("node:fs/promises").then(fs => fs.readFile("app/components/google-analytics.tsx", "utf8"));
  const portalTracker = await import("node:fs/promises").then(fs => fs.readFile("app/components/supplier-portal-view.tsx", "utf8"));
  expect(source).toContain('trackEvent("supplier_portal_view", { supplier })');
  expect(source).toContain("kitchen-installation");
  expect(source).not.toContain("/supplier-portals/");
  expect(portalTracker).toContain("data-authorized-supplier");
  expect(source).toContain('supplier: authorizedSupplier, access: "private"');
});
