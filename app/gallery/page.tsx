import type { Metadata } from "next";
import Link from "next/link";
import { ProjectIndex } from "../components/project-index";
import { PortfolioNavigation } from "../components/portfolio-navigation";
import { Footer, Header } from "../components/site-shell";
import { readGalleryFilters } from "../lib/gallery-catalog";

export async function generateMetadata({ searchParams }: PageProps<"/gallery">): Promise<Metadata> {
  const filters = readGalleryFilters(await searchParams);
  return {
    title: "Kitchen & Bespoke Joinery Gallery | Form & Frame",
    description: "Explore completed Form & Frame kitchens, wardrobes, bookcases, media walls and bespoke furniture. Find projects by furniture type, location or gallery number.",
    alternates: { canonical: "/gallery" },
    ...(filters.q || filters.category ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function GalleryPage({ searchParams }: PageProps<"/gallery">) {
  const filters = readGalleryFilters(await searchParams);
  return <div>
    <Header />
    <main id="main-content" className="gallery-page">
      <header className="gallery-hero"><div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Gallery</span></nav>
        <p className="eyebrow">Selected completed work</p>
        <h1>Kitchen &amp; Joinery Gallery</h1>
        <p className="gallery-lead">Choose a portfolio to explore kitchen installations or bespoke joinery, or search all completed projects below.</p>
        <PortfolioNavigation />
      </div></header>
      <ProjectIndex filters={filters} />
    </main>
    <Footer />
  </div>;
}
