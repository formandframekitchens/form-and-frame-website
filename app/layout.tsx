import type { Metadata } from "next";
import "./globals.css";
import "./homepage-responsive-fixes.css";

import { siteUrl } from "./lib/site";
import { BusinessIdentity } from "./components/structured-data";
import { GoogleAnalytics } from "./components/google-analytics";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: { googleBot: { "max-image-preview": "large" } },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // Review activity must not enter the business's live analytics property.
  return <html lang="en-GB"><body>{children}<BusinessIdentity />{process.env.VERCEL_ENV !== "preview" ? <GoogleAnalytics /> : null}</body></html>;
}
