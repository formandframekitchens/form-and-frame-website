import type { MetadataRoute } from "next";

import { unpublishedCaseStudyPaths } from "./lib/case-studies";
import { siteUrl } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/supplier-portals/", "/api/supplier-portals/", "/progress-gallery", "/api/progress-gallery/", ...unpublishedCaseStudyPaths],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
