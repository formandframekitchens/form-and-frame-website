import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Private case studies | Form & Frame",
  description: "Private project portfolio. Password required.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
