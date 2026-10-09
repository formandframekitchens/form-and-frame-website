import { expect, test } from "@playwright/test";
import { expectedSupplierPortalToken, supplierPortalCodeMatches, supplierPortalTokenMatches, supplierPortalSessionSeconds, supplierPortalRequestAllowed, supplierPortalRequestOrigin } from "../app/lib/supplier-portal";

test("supplier sessions fail closed, expire server-side and invalidate on code/secret rotation", () => {
  const names = ["SUPPLIER_PORTAL_SIGNING_SECRET", "SUPPLIER_PORTAL_WREN_ACCESS_CODE", "SUPPLIER_PORTAL_MAGNET_ACCESS_CODE"];
  const previous = names.map(name => process.env[name]);
  try {
    delete process.env.SUPPLIER_PORTAL_SIGNING_SECRET;
    expect(expectedSupplierPortalToken("wren")).toBe("");
    expect(supplierPortalCodeMatches("wren", "local-wren-code")).toBe(false);
    process.env.SUPPLIER_PORTAL_SIGNING_SECRET = "local-test-signing-secret-at-least-32-characters";
    process.env.SUPPLIER_PORTAL_WREN_ACCESS_CODE = "local-wren-code";
    process.env.SUPPLIER_PORTAL_MAGNET_ACCESS_CODE = "local-magnet-code";
    const now = Date.now();
    const token = expectedSupplierPortalToken("wren", now);
    expect(supplierPortalTokenMatches("wren", token, now)).toBe(true);
    expect(expectedSupplierPortalToken("wren", now)).not.toBe(token);
    expect(supplierPortalTokenMatches("magnet", token, now)).toBe(false);
    expect(supplierPortalTokenMatches("wren", token + "a", now)).toBe(false);
    expect(supplierPortalTokenMatches("wren", token, now + supplierPortalSessionSeconds * 1000)).toBe(false);
    process.env.SUPPLIER_PORTAL_WREN_ACCESS_CODE = "local-rotated-wren-code";
    expect(supplierPortalTokenMatches("wren", token, now)).toBe(false);
    process.env.SUPPLIER_PORTAL_WREN_ACCESS_CODE = "local-wren-code";
    process.env.SUPPLIER_PORTAL_SIGNING_SECRET = "local-rotated-signing-secret-at-least-32-characters";
    expect(supplierPortalTokenMatches("wren", token, now)).toBe(false);
    delete process.env.SUPPLIER_PORTAL_WREN_ACCESS_CODE;
    expect(supplierPortalTokenMatches("wren", token, now)).toBe(false);
  } finally {
    names.forEach((name, index) => {
      if (previous[index] === undefined) delete process.env[name];
      else process.env[name] = previous[index];
    });
  }
});

test("portal endpoints reject cross-origin posts and protect caches/crawlers", async ({ request }) => {
  for (const action of ["login", "logout"]) {
    const result = await request.post(`/api/supplier-portals/wren/${action}`, {
      headers: { origin: "https://untrusted.example", "sec-fetch-site": "cross-site" },
      form: { code: "local-wren-code" }, maxRedirects: 0,
    });
    expect(result.status()).toBe(403);
    expect(result.headers()["set-cookie"]).toBeUndefined();
    expect(result.headers()["x-robots-tag"]).toContain("noindex");
    expect(result.headers()["cache-control"]).toContain("no-store");
  }
  const unknown = await request.post("/api/supplier-portals/unknown/login", { form: { code: "local-wren-code" } });
  expect(unknown.status()).toBe(404);
  const malformed = await request.post("/api/supplier-portals/wren/login", { data: "invalid form", headers: { "content-type": "application/json" } });
  expect(malformed.status()).toBe(400);
  const locked = await request.get("/supplier-portals/wren");
  expect(locked.headers()["cache-control"]).toContain("no-store");
  expect(locked.headers()["x-robots-tag"]).toContain("noindex");
  expect(await locked.text()).not.toContain("data-authorized-supplier");
});

test("portal origin validation uses the browser host behind Next and deployment proxies", () => {
  const sameOrigin = new Request("http://localhost:3105/api/supplier-portals/wren/login", {
    headers: { host: "127.0.0.1:3105", origin: "http://127.0.0.1:3105" },
  });
  expect(supplierPortalRequestAllowed(sameOrigin)).toBe(true);
  expect(supplierPortalRequestOrigin(sameOrigin)).toBe("http://127.0.0.1:3105");
  const deployed = new Request("http://internal/api/supplier-portals/wren/login", {
    headers: { host: "formandframekitchens.co.uk", "x-forwarded-proto": "https", origin: "https://formandframekitchens.co.uk" },
  });
  expect(supplierPortalRequestAllowed(deployed)).toBe(true);
  expect(supplierPortalRequestOrigin(deployed)).toBe("https://formandframekitchens.co.uk");
  const crossOrigin = new Request(sameOrigin, { headers: { host: "127.0.0.1:3105", origin: "https://untrusted.example" } });
  expect(supplierPortalRequestAllowed(crossOrigin)).toBe(false);
});
