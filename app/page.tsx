import type { Metadata } from "next";
import { Header, Footer } from "./components/site-shell";
import { Hero, TrustStrip, BespokeFurniture, KitchenInstallation, TechnicalExpertise, Process, SecondaryServices, ProjectsPreview, FAQ, FinalCTA } from "./components/home-sections";
import { SocialContent } from "./components/social-content";
import { GoogleReviews } from "./components/google-reviews";
import { NewsPreview } from "./components/news-cards";
import { WebsiteIdentity } from "./components/structured-data";
import { K01HomeFeature } from "./components/k01-home-feature";

const socialImage = {
  url: "/projects/k01/finished/f14.webp",
  width: 1672,
  height: 941,
  alt: "K01 bespoke kitchen and stone island installed by Form & Frame in Surbiton",
};

export const metadata: Metadata = {
  title: "Kitchen Fitter Luton | Independent Installation | Form & Frame",
  description: "Independent kitchen fitter based in Luton, serving Dunstable, Houghton Regis and nearby areas. Customer-supplied kitchens, fitting and trade coordination. Send your plans.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Form & Frame Kitchens",
    url: "/",
    type: "website",
    locale: "en_GB",
    title: "Kitchen Fitter Luton | Independent Installation | Form & Frame",
    description: "Independent fitting for your kitchen, plus fitted furniture and bespoke joinery. Based in Luton. Send your plans for an installation enquiry.",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Fitter Luton | Independent Installation | Form & Frame",
    description: "Independent fitting for your kitchen, plus fitted furniture and bespoke joinery. Based in Luton. Send your plans for an installation enquiry.",
    images: [socialImage.url],
  },
};

export default function Home() {
  return <><Header /><main id="main-content"><div className="first-screen"><Hero /><TrustStrip /></div><K01HomeFeature /><KitchenInstallation /><GoogleReviews /><ProjectsPreview /><SocialContent /><TechnicalExpertise /><Process /><BespokeFurniture /><SecondaryServices /><NewsPreview /><FAQ /><FinalCTA /></main><Footer /><WebsiteIdentity /></>;
}
