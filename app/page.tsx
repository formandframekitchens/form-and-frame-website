import type { Metadata } from "next";
import { Header, Footer } from "./components/site-shell";
import { Hero, TrustStrip, BespokeFurniture, KitchenInstallation, TechnicalExpertise, Process, SecondaryServices, ProjectsPreview, FAQ, FinalCTA } from "./components/home-sections";

const socialImage = {
  url: "/images/homepage/modern-white-handleless-kitchen-installation.webp",
  width: 1600,
  height: 1000,
  alt: "Modern white handleless kitchen installed by Form & Frame",
};

export const metadata: Metadata = {
  title: "Kitchen Installation & Joinery Luton | Form & Frame",
  description: "Independent kitchen installation in Luton and nearby towns. Customer-supplied kitchens, fitted furniture and over 20 years of industry experience. Send your plans.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kitchen Installation & Joinery Luton | Form & Frame",
    description: "Independent fitting for your kitchen, plus fitted furniture and bespoke joinery. Based in Luton. Send your plans for an installation enquiry.",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Installation & Joinery Luton | Form & Frame",
    description: "Independent fitting for your kitchen, plus fitted furniture and bespoke joinery. Based in Luton. Send your plans for an installation enquiry.",
    images: [socialImage.url],
  },
};

export default function Home() {
  return <><Header /><main id="main-content"><div className="first-screen"><Hero /><TrustStrip /></div><KitchenInstallation /><ProjectsPreview /><TechnicalExpertise /><Process /><BespokeFurniture /><SecondaryServices /><FAQ /><FinalCTA /></main><Footer /></>;
}
