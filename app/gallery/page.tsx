import type { Metadata } from "next";
/* eslint-disable @next/next/no-html-link-for-pages -- Private portfolio entry must clear the public analytics runtime. */
import Link from "next/link";
import { ProjectIndex } from "../components/project-index";
import { PortfolioNavigation } from "../components/portfolio-navigation";
import { Footer, Header } from "../components/site-shell";
import { readGalleryFilters } from "../lib/gallery-catalog";

export async function generateMetadata({ searchParams }: PageProps<"/gallery">): Promise<Metadata> {
  const filters = readGalleryFilters(await searchParams);
  return {
    title: "Kitchen & Bespoke Joinery Gallery | Form & Frame",
    description: "Explore real kitchen and joinery project photographs: wardrobes, bookcases, media walls and bespoke furniture. Search by furniture type, place or gallery number.",
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
        <p className="eyebrow">Real project photographs</p>
        <h1>Kitchen &amp; Joinery Gallery</h1>
        <p className="gallery-lead">Explore kitchen installations and bespoke joinery, or search the complete project archive below. Galleries include finished furniture, installation stages and close details.</p>
        <PortfolioNavigation />
        <p><a className="text-link" href="/private-case-studies">Private projects · Request access ↗</a></p>
      </div></header>
      <ProjectIndex filters={filters} />
    </main>
    <Footer />
  </div>;
}
