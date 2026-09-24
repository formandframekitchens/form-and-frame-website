import type { Metadata } from "next";
import { siteUrl } from "./site";

export function serviceMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: `${title} | Form & Frame`,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: { title: `${title} | Form & Frame`, description, url: `${siteUrl}${path}`, type: "website", locale: "en_GB", siteName: "Form & Frame" },
  };
}
