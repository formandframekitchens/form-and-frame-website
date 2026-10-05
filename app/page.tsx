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
  title: "Bespoke Joinery & Kitchens Luton | Form & Frame",
  description: "Bespoke joinery, fitted wardrobes and kitchens in Luton. Design, specialist manufacture and installation coordinated across Bedfordshire and Hertfordshire.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bespoke Joinery & Kitchens Luton | Form & Frame",
    description: "Made-to-measure furniture, bespoke kitchens and independent kitchen installation from Luton.",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Joinery & Kitchens Luton | Form & Frame",
    description: "Made-to-measure furniture, bespoke kitchens and independent kitchen installation from Luton.",
    images: [socialImage.url],
  },
};

export default function Home() {
  return <><Header /><main id="main-content"><div className="first-screen"><Hero /><TrustStrip /></div><BespokeFurniture /><ProjectsPreview /><KitchenInstallation /><TechnicalExpertise /><Process /><SecondaryServices /><FAQ /><FinalCTA /></main><Footer /></>;
}
