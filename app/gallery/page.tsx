import type { Metadata } from "next";
import Form from "next/form";
import Link from "next/link";
import { GalleryProjectCard } from "../components/gallery-project-card";
import { Footer, Header } from "../components/site-shell";
import { categoriesForProject, filterGalleryProjects, galleryCategories, galleryHref, readGalleryFilters } from "../lib/gallery-catalog";
import { galleryProjects } from "../lib/gallery-projects";

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
  const projects = filterGalleryProjects(filters);
  const selectedCategory = galleryCategories.find(category => category.value === filters.category);
  return <div>
    <Header />
    <main id="main-content" className="gallery-page">
      <header className="gallery-hero"><div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Gallery</span></nav>
        <p className="eyebrow">Selected completed work</p>
        <h1>Kitchen &amp; Joinery Gallery</h1>
        <p className="gallery-lead">Explore our completed projects. Find ideas for your room, then take a closer look at the details.</p>
      </div></header>
      <section className="gallery-index" aria-label="Project gallery">
        <div className="container">
          <div className="gallery-tools">
            <Form action="/gallery" className="gallery-search" role="search" key={`${filters.category}:${filters.q}`}>
              {filters.category && <input type="hidden" name="category" value={filters.category} />}
              <label htmlFor="gallery-search">Find a project</label>
              <div className="gallery-search-fields"><input id="gallery-search" type="search" name="q" defaultValue={filters.q} maxLength={100} placeholder="Try wardrobes, Fulham or G32" /><button type="submit" className="button">Search</button></div>
            </Form>
            <nav className="gallery-filters" aria-label="Filter projects by furniture type">
              <Link href={galleryHref({ q: filters.q })} aria-current={!filters.category ? "page" : undefined} prefetch={false}>All projects <span>{galleryProjects.length}</span></Link>
              {galleryCategories.map(category => <Link key={category.value} href={galleryHref({ category: category.value, q: filters.q })} aria-current={filters.category === category.value ? "page" : undefined} prefetch={false}>
                {category.label} <span>{galleryProjects.filter(project => categoriesForProject(project).includes(category.value)).length}</span>
              </Link>)}
            </nav>
          </div>
          <div className="gallery-results-summary">
            <p role="status">{projects.length} {projects.length === 1 ? "project" : "projects"}{selectedCategory ? ` · ${selectedCategory.label}` : ""}{filters.q ? ` matching “${filters.q}”` : ""}</p>
            {(filters.q || filters.category) && <Link href="/gallery" className="text-link">Clear filters</Link>}
          </div>
          {projects.length ? <div className="gallery-card-grid">{projects.map((project, index) => <GalleryProjectCard key={project.slug} project={project} priority={index === 0} />)}</div> : <div className="gallery-empty">
            <h2>No projects match this search</h2>
            <p>Try a different furniture type or location, or explore the complete gallery.</p>
            <div className="actions"><Link href="/gallery" className="button">View all projects</Link><Link href="/contact#enquiry-form" className="text-link">Tell us what you have in mind</Link></div>
          </div>}
          <div className="gallery-bottom-link"><a className="text-link" href="#gallery-search">Back to search &amp; filters ↑</a></div>
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
