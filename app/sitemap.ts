import type { MetadataRoute } from "next";

import { siteUrl } from "./lib/site";
import { supplierPages } from "./lib/supplier-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...[
      "/services",
      "/bespoke-joinery",
      "/joinery-installation",
      "/kitchen-installation",
      ...supplierPages.map(({ slug }) => `/kitchen-installation/${slug}`),
      "/in-frame-kitchens",
      "/internal-door-installation",
      "/contact",
    ].map(path => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/services" ? 0.9 : path === "/kitchen-installation" ? 0.9 : path === "/contact" ? 0.6 : 0.7,
    })),
  ];
}