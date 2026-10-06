import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioNavigation } from "../../components/portfolio-navigation";
import { ProjectIndex } from "../../components/project-index";
import { Footer, Header } from "../../components/site-shell";
import { filterGalleryProjects, readGalleryFilters } from "../../lib/gallery-catalog";
import { serviceMetadata } from "../../lib/service-metadata";
import { siteUrl } from "../../lib/site";

export async function generateMetadata({ searchParams }: PageProps<"/bespoke-joinery/projects">): Promise<Metadata> {
  const filters = readGalleryFilters(await searchParams);
  return {
    ...serviceMetadata("Bespoke Joinery Portfolio", "Explore real fitted wardrobes, alcoves, bookcases, media units and individual furniture by Form & Frame. Search our bespoke joinery projects and workmanship details.", "/bespoke-joinery/projects"),
    ...(filters.q || filters.category ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function JoineryProjectsPage({ searchParams }: PageProps<"/bespoke-joinery/projects">) {
  const filters = readGalleryFilters(await searchParams);
  const projects = filterGalleryProjects(filters, "bespoke-joinery");
  const collection = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Form & Frame bespoke joinery portfolio", url: `${siteUrl}/bespoke-joinery/projects`,
    mainEntity: { "@type": "ItemList", itemListElement: projects.map((project, index) => ({
      "@type": "ListItem", position: index + 1, name: project.title, url: `${siteUrl}/gallery/${project.slug}`,
    })) },
  };
  return <div><Header /><main id="main-content" className="gallery-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />
    <header className="gallery-hero"><div className="container">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/bespoke-joinery">Bespoke Joinery</Link><span aria-hidden="true">/</span><span>Projects</span></nav>
      <p className="eyebrow">Real rooms, individual furniture</p>
      <h1>Bespoke joinery portfolio</h1>
      <p className="gallery-lead">Fitted wardrobes, alcove units, bookcases, media furniture and specialist pieces. Explore the finished rooms and the details that shape each installation.</p>
      <Link className="text-link" href="/bespoke-joinery">Explore bespoke joinery services ↗</Link>
      <PortfolioNavigation current="bespoke-joinery" />
    </div></header>
    <ProjectIndex filters={filters} portfolio="bespoke-joinery" basePath="/bespoke-joinery/projects" />
  </main><Footer /></div>;
}
