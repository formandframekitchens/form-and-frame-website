import type { Metadata } from "next";
import { siteUrl } from "./site";
import type { GalleryImage } from "./gallery-projects";

export function serviceMetadata(title: string, description: string, path: string, image?: GalleryImage): Metadata {
  return {
    title: `${title} | Form & Frame`,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: { title: `${title} | Form & Frame`, description, url: `${siteUrl}${path}`, type: "website", locale: "en_GB", siteName: "Form & Frame", ...(image ? { images: [{ url: image.src, alt: image.alt }] } : {}) },
    twitter: { card: image ? "summary_large_image" : "summary", title: `${title} | Form & Frame`, description, ...(image ? { images: [image.src] } : {}) },
  };
}
