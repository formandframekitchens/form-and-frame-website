import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer, Header } from "../../components/site-shell";
import { galleryProjects, getGalleryProject } from "../../lib/gallery-projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return galleryProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/gallery/[slug]">): Promise<Metadata> {
  const project = getGalleryProject((await params).slug);
  if (!project) notFound();

  return {
    title: `${project.title} | Form & Frame Gallery`,
    description: project.summary,
    alternates: {
      canonical: `/gallery/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Form & Frame`,
      description: project.summary,
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
  };
}

export default async function GalleryProjectPage({ params }: PageProps<"/gallery/[slug]">) {
  const project = getGalleryProject((await params).slug);
  if (!project) notFound();

  const enquiryHref = project.category === "Kitchen Installation"
    ? "/contact?service=kitchen-installation#enquiry-form"
    : "/contact?service=bespoke-joinery#enquiry-form";

  return (
    <div>
      <Header />
      <main id="main-content" className="gallery-page project-detail-page">
        <header className="project-detail-hero">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/gallery">Gallery</Link><span aria-hidden="true">/</span><span>{project.title}</span>
            </nav>
            <div className="project-detail-heading">
              <div>
                <p className="eyebrow">{project.category}{project.location ? ` · ${project.location}` : ""}</p>
                <h1>{project.title}</h1>
              </div>
              <p className="project-detail-summary">{project.summary}</p>
            </div>
          </div>
        </header>

        <section className="project-detail-gallery" aria-label={`${project.title} photographs`}>
          <div className="container">
            <div className="project-image-grid">
              {project.images.map((image, index) => (
                <figure className={index === 0 ? "project-image project-image-feature" : "project-image"} key={image.src}>
                  <div className="project-image-frame">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={index === 0 ? "92vw" : "(max-width: 720px) 92vw, 46vw"}
                      priority={index === 0}
                      style={{ objectFit: image.fit ?? "cover" }}
                    />
                  </div>
                  <figcaption>{image.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="project-detail-cta">
          <div className="container">
            <div>
              <p className="eyebrow">Planning something similar?</p>
              <h2>Discuss your project with Form &amp; Frame</h2>
            </div>
            <div className="project-detail-actions">
              <Link className="button" href={enquiryHref}>Send an enquiry <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="/gallery">Back to gallery <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
