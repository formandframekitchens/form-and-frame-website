import Image from "next/image";
import Link from "next/link";
import type { GalleryProject } from "../lib/gallery-projects";

export function GalleryProjectCard({ project, priority = false }: { project: GalleryProject; priority?: boolean }) {
  return <article className="gallery-card">
    <Link href={`/gallery/${project.slug}`} aria-label={`View ${project.title}`} prefetch={false}>
      <div className="gallery-card-image">
        <span className="gallery-card-project-id">{project.galleryId}</span>
        <Image src={project.cover.src} alt={project.cover.alt} fill preload={priority}
          sizes="(max-width: 720px) 92vw, (max-width: 1280px) 46vw, 570px" style={{ objectFit: "contain" }} />
      </div>
      <div className="gallery-card-copy">
        <div className="gallery-card-meta"><span>{project.category}</span>{project.location && <span>{project.location}</span>}</div>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <span className="gallery-card-link">View project <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  </article>;
}
