import type { MetadataRoute } from "next";

import { siteUrl } from "./lib/site";
import { supplierPages } from "./lib/supplier-pages";
import { joineryCategories } from "./lib/joinery-categories";
import { publicGalleryProjects } from "./lib/gallery-projects";
import { publishedCaseStudies } from "./lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...[
      "/services",
      "/gallery",
      "/kitchens",
      "/bespoke-joinery",
      "/bespoke-joinery/projects",
      ...joineryCategories.map(({ slug }) => `/bespoke-joinery/${slug}`),
      "/joinery-installation",
      "/kitchen-installation",
      ...supplierPages.map(({ slug }) => `/kitchen-installation/${slug}`),
      "/in-frame-kitchens",
      "/bespoke-kitchens",
      "/internal-door-installation",
      "/contact",
      "/areas",
      "/areas/luton",
      "/guides/joinery-materials-finishes",
      "/privacy",
    ].map(path => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/services" ? 0.9 : path === "/kitchen-installation" ? 0.9 : path === "/gallery" ? 0.85 : path.startsWith("/gallery/") ? 0.75 : path === "/contact" ? 0.6 : 0.7,
    })),
    ...publicGalleryProjects.map(project => ({
      url: `${siteUrl}/gallery/${project.slug}`,
      lastModified: "2026-10-05",
      images: project.images.map(image => `${siteUrl}${image.src}`),
    })),
    ...publishedCaseStudies.map(study => ({
      url: `${siteUrl}/case-studies/${study.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: study.media.flatMap(slot => slot.asset ? [`${siteUrl}${slot.asset.src}`] : []),
    })),
  ];
}
