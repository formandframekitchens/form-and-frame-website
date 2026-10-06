import Form from "next/form";
import Link from "next/link";
import { GalleryProjectCard } from "./gallery-project-card";
import { categoriesForProject, filterGalleryProjects, galleryCategories, portfolioForProject, type GalleryFilters, type GalleryPortfolio } from "../lib/gallery-catalog";
import { publicGalleryProjects } from "../lib/gallery-projects";

export function ProjectIndex({ filters, portfolio, basePath = "/gallery" }: { filters: GalleryFilters; portfolio?: GalleryPortfolio; basePath?: string }) {
  const projects = filterGalleryProjects(filters, portfolio);
  const available = publicGalleryProjects.filter(project => !portfolio || portfolioForProject(project) === portfolio);
  const categories = galleryCategories.filter(category => available.some(project => categoriesForProject(project).includes(category.value)));
  const selectedCategory = categories.find(category => category.value === filters.category);
  const href = (category?: string) => {
    const query = new URLSearchParams();
    if (category) query.set("category", category);
    if (filters.q) query.set("q", filters.q);
    return basePath + (query.size ? "?" + query.toString() : "");
  };
  return <section className="gallery-index" aria-label={portfolio === "bespoke-joinery" ? "Bespoke joinery project portfolio" : "Project gallery"}><div className="container">
    <div className="gallery-tools">
      <Form action={basePath} className="gallery-search" role="search" key={`${filters.category}:${filters.q}`}>
        {filters.category && <input type="hidden" name="category" value={filters.category} />}
        <label htmlFor="gallery-search">Find a project</label>
        <div className="gallery-search-fields"><input id="gallery-search" type="search" name="q" defaultValue={filters.q} maxLength={100} placeholder="Try wardrobes, Fulham or G32" /><button type="submit" className="button">Search</button></div>
      </Form>
      <nav className="gallery-filters" aria-label="Filter projects by furniture type">
        <Link href={href()} aria-current={!filters.category ? "page" : undefined} prefetch={false}>All {portfolio ? "joinery" : "projects"} <span>{available.length}</span></Link>
        {categories.map(category => <Link key={category.value} href={href(category.value)} aria-current={filters.category === category.value ? "page" : undefined} prefetch={false}>{category.label} <span>{available.filter(project => categoriesForProject(project).includes(category.value)).length}</span></Link>)}
      </nav>
    </div>
    <div className="gallery-results-summary">
      <p role="status">{projects.length} {projects.length === 1 ? "project" : "projects"}{selectedCategory ? ` · ${selectedCategory.label}` : ""}{filters.q ? ` matching “${filters.q}”` : ""}</p>
      {(filters.q || filters.category) && <Link href={basePath} className="text-link">Clear filters</Link>}
    </div>
    {projects.length ? <div className="gallery-card-grid">{projects.map((project, index) => <GalleryProjectCard key={project.slug} project={project} priority={index === 0} />)}</div> : <div className="gallery-empty">
      <h2>No projects match this search</h2><p>Try a different furniture type or location, or explore the complete {portfolio ? "joinery portfolio" : "gallery"}.</p>
      <div className="actions"><Link href={basePath} className="button">View all projects</Link><Link href="/contact#enquiry-form" className="text-link">Tell us what you have in mind</Link></div>
    </div>}
    <div className="gallery-bottom-link"><a className="text-link" href="#gallery-search">Back to search &amp; filters ↑</a></div>
  </div></section>;
}
