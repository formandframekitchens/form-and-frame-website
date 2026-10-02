import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer, Header } from "../components/site-shell";
import { galleryProjects } from "../lib/gallery-projects";

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
              {galleryProjects.map(project => (
                <article className="gallery-card" key={project.slug}>
                  <Link href={`/gallery/${project.slug}`} aria-label={`View ${project.title}`}>
                    <div className="gallery-card-image">
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
