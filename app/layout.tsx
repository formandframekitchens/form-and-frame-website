import type { Metadata } from "next";
import "./globals.css";

import { siteUrl } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
