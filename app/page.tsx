import type { Metadata } from "next";
import { Header, Footer } from "./components/site-shell";
import { Hero, TrustStrip, KitchenInstallation, TechnicalExpertise, Process, SecondaryServices, ProjectsPreview, FAQ, FinalCTA } from "./components/home-sections";
export const metadata: Metadata = {
  title: "Kitchen Fitter Luton | Independent Kitchen Installation | Form & Frame",
  description: "Independent kitchen installation in Luton with 20 years of joinery, design and installation experience. Customer-supplied kitchens from Howdens, Wren, IKEA, Magnet, Wickes, Benchmarx, B&Q and other manufacturers professionally installed and coordinated by Form & Frame.",
};
export default function Home() {
  return <><Header /><main id="main-content"><Hero /><TrustStrip /><KitchenInstallation /><TechnicalExpertise /><Process /><ProjectsPreview /><SecondaryServices /><FAQ /><FinalCTA /></main><Footer /></>;
}
