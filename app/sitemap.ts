import type { MetadataRoute } from "next";

import { siteUrl } from "./lib/site";
import { supplierPages } from "./lib/supplier-pages";
import { joineryCategories } from "./lib/joinery-categories";
import { publicGalleryProjects } from "./lib/gallery-projects";
import { publishedCaseStudies, k01NestedRooms, k01RoomHref, k01Photo } from "./lib/case-studies";
import { newsArticles } from "./lib/news";

const serviceStructureUpdated = "2026-10-17";
const k01ReleaseUpdated = "2026-10-17";
const homepageProjectFeatureUpdated = "2026-10-25";
const latestNewsUpdate = newsArticles.reduce((latest, article) => {
  const date = article.updatedAt ?? article.publishedAt ?? article.published;
  return date > latest ? date : latest;
}, "2026-10-13");
const k01UpdatedPaths = new Set(["/kitchens", "/kitchen-installation", "/internal-door-installation"]);
const planningUpdatedPaths = new Set(["/contact", "/in-frame-kitchens", "/bespoke-kitchens", ...supplierPages.map(({ slug }) => `/kitchen-installation/${slug}`), "/kitchen-installation", "/areas/luton", "/areas/dunstable", ...joineryCategories.map(({ slug }) => `/bespoke-joinery/${slug}`)]);
const updatedServicePaths = new Set([
  "/contact", "/news", "/areas", "/areas/luton", "/areas/dunstable", "/bespoke-joinery", "/services", "/kitchens",
  "/kitchen-installation", "/bespoke-kitchens", "/in-frame-kitchens", "/joinery-installation",
  ...supplierPages.map(({ slug }) => `/kitchen-installation/${slug}`),
  ...joineryCategories.map(({ slug }) => `/bespoke-joinery/${slug}`),
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioRoutingUpdated=new Set(["/kitchens","/bespoke-joinery","/bespoke-joinery/wardrobes","/bespoke-joinery/entertainment-units","/bespoke-joinery/under-stairs-storage","/bespoke-joinery/unique-furniture"]);
  return [
    {
      url: `${siteUrl}/`,
      lastModified: latestNewsUpdate > homepageProjectFeatureUpdated ? latestNewsUpdate : homepageProjectFeatureUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...[
      "/services",
      "/gallery",
      "/kitchens",
      "/bespoke-joinery",
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
      "/areas/dunstable",
      "/guides/joinery-materials-finishes",
      "/news",
      "/privacy",
    ].map(path => ({
      url: `${siteUrl}${path}`,
      ...(planningUpdatedPaths.has(path) ? { lastModified: "2026-10-25" } : path === "/news" ? { lastModified: latestNewsUpdate } : path === "/kitchens" ? { lastModified: "2026-10-24" } : ["/kitchen-installation", "/bespoke-joinery", "/areas/luton", "/areas/dunstable", ...supplierPages.map(({ slug }) => `/kitchen-installation/${slug}`)].includes(path) ? { lastModified: "2026-10-23" } : portfolioRoutingUpdated.has(path) ? {lastModified:"2026-10-18"} : k01UpdatedPaths.has(path) ? { lastModified: k01ReleaseUpdated } : updatedServicePaths.has(path) ? { lastModified: serviceStructureUpdated } : {}),
      changeFrequency: "monthly" as const,
      priority: path === "/services" ? 0.9 : path === "/kitchen-installation" ? 0.9 : path === "/gallery" ? 0.85 : path.startsWith("/gallery/") ? 0.75 : path === "/contact" ? 0.6 : 0.7,
    })),
    ...publicGalleryProjects.map(project => ({
      url: `${siteUrl}/gallery/${project.slug}`,
      lastModified: project.lastModified ?? "2026-10-05",
      images: project.images.map(image => `${siteUrl}${image.src}`),
    })),
    ...newsArticles.map(article => ({ url: `${siteUrl}/news/${article.slug}`, lastModified: article.updatedAt ?? article.publishedAt ?? article.published, changeFrequency: "monthly" as const, priority: 0.65 })),
    ...publishedCaseStudies.map(study => ({
      url: `${siteUrl}/case-studies/${study.slug}`,
      lastModified: study.dateModified ?? study.datePublished,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: study.media.flatMap(slot => slot.asset?.approved && slot.asset.format === "image" ? [`${siteUrl}${slot.asset.src}`] : []),
    })),
    ...k01NestedRooms.map(ch => ({url: `${siteUrl}${k01RoomHref(ch)}`,lastModified:ch.dateModified ?? "2026-10-18",changeFrequency:"monthly" as const,priority:0.75,images:ch.photos.map(id=>`${siteUrl}${k01Photo(id).src}`)})),
  ];
}
