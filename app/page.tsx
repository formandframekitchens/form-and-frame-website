import type { Metadata } from "next";
import { Header, Footer } from "./components/site-shell";
import { Hero, TrustStrip, KitchenInstallation, TechnicalExpertise, Process, SecondaryServices, ProjectsPreview, FAQ, FinalCTA } from "./components/home-sections";

const socialImage = {
  url: "/images/homepage/modern-white-handleless-kitchen-installation.webp",
  width: 1600,
  height: 1000,
  alt: "Modern white handleless kitchen installed by Form & Frame",
};

export const metadata: Metadata = {
  title: "Kitchen Fitter Luton | Independent Kitchen Installation | Form & Frame",
  description: "Independent kitchen installation in Luton with 20 years of joinery, design and installation experience. Customer-supplied kitchens from Howdens, Wren, IKEA, Magnet, Wickes, Benchmarx, B&Q and other manufacturers professionally installed and coordinated by Form & Frame.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kitchen Fitter Luton | Form & Frame",
    description: "Independent kitchen installation in Luton, Bedfordshire and surrounding Hertfordshire.",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Fitter Luton | Form & Frame",
    description: "Independent kitchen installation in Luton, Bedfordshire and surrounding Hertfordshire.",
    images: [socialImage.url],
  },
};

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Form & Frame",
  url: "https://formandframekitchens.co.uk/",
  telephone: "+447933026532",
  email: "sales@formandframekitchens.co.uk",
  areaServed: ["Luton", "Bedfordshire", "Hertfordshire"],
  serviceType: ["Kitchen installation", "Bespoke joinery", "Internal door installation", "Joinery installation"],
};

export default function Home() {
  return <><Header /><main id="main-content"><div className="first-screen"><Hero /><TrustStrip /></div><KitchenInstallation /><TechnicalExpertise /><Process /><ProjectsPreview /><SecondaryServices /><FAQ /><FinalCTA /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} /></main><Footer /></>;
}
