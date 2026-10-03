import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer, Header } from "../components/site-shell";
import { galleryProjects } from "../lib/gallery-projects";

const galleryFamilyPrefixes = [
  "Soho",
  "S&C",
  "Northwood",
  "Manchester",
  "Fulham",
  "Belgravia",
  "Stourcliff",
  "Esher Luxury Residence",
] as const;

function projectFamily(title: string) {
  return galleryFamilyPrefixes.find(prefix => title.startsWith(prefix)) ?? title;
}

function galleryNumber(galleryId: string) {
  const value = Number.parseInt(galleryId.replace(/^G/i, ""), 10);
  return Number.isFinite(value) ? value : Number.MAX_SAFE_INTEGER;
}

function groupProjectsByFamily() {
  const used = new Set<string>();
  const grouped: typeof galleryProjects = [];

  for (const project of galleryProjects) {
    if (used.has(project.slug)) continue;

    const family = projectFamily(project.title);
    const familyProjects = galleryProjects
      .filter(item => projectFamily(item.title) === family)
      .sort((a, b) => galleryNumber(a.galleryId) - galleryNumber(b.galleryId));

    for (const item of familyProjects) {
      if (!used.has(item.slug)) {
        grouped.push(item);
        used.add(item.slug);
      }
    }
  }

  return grouped;
}

const groupedGalleryProjects = groupProjectsByFamily();

export const metadata: Metadata = {
  title: "Kitchen & Bespoke Joinery Gallery | Form & Frame",
  description: "Selected kitchen installation and bespoke joinery projects by Form & Frame, including fitted kitchens, wardrobes, bookcases, media walls and made-to-measure storage.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div>
      <Header />
      <main id="main-content" className="gallery-page">
        <header className="gallery-hero">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Gallery</span>
            </nav>
            <p className="eyebrow">Selected completed work</p>
            <h1>Kitchen &amp; Joinery Gallery</h1>
            <p className="gallery-lead">A selection of completed kitchen installation and bespoke joinery projects. Each project page keeps the photography together so the workmanship, proportions and details can be reviewed clearly.</p>
          </div>
        </header>

        <section className="gallery-index" aria-label="Project gallery">
          <div className="container">
            <div className="gallery-card-grid">
              {groupedGalleryProjects.map(project => (
                <article className="gallery-card" key={project.slug}>
                  <Link href={`/gallery/${project.slug}`} aria-label={`View ${project.title}`}>
                    <div className="gallery-card-image">
                      <span className="gallery-card-project-id">{project.galleryId}</span>
                      <Image
                        src={project.cover.src}
                        alt={project.cover.alt}
                        fill
                        sizes="(max-width: 720px) 92vw, 46vw"
                        style={{ objectFit: project.cover.fit ?? "cover" }}
                      />
                    </div>
                    <div className="gallery-card-copy">
                      <div className="gallery-card-meta">
                        <span>{project.category}</span>
                        {project.location && <span>{project.location}</span>}
                      </div>
                      <h2>{project.title}</h2>
                      <p>{project.summary}</p>
                      <span className="gallery-card-link">View project <span aria-hidden="true">↗</span></span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
