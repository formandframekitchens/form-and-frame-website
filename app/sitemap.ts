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
    ...["/kitchen-installation", ...supplierPages.map(({ slug }) => `/kitchen-installation/${slug}`), "/in-frame-kitchens", "/internal-door-installation"].map(path => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/kitchen-installation" ? 0.9 : 0.7,
    })),
  ];
}
