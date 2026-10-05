import type { Metadata } from "next";
import "./globals.css";
import "./homepage-responsive-fixes.css";

import { siteUrl } from "./lib/site";
import { BusinessIdentity } from "./components/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: { googleBot: { "max-image-preview": "large" } },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en-GB"><body>{children}<BusinessIdentity /></body></html>;
}
