import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectGalleryCarousel } from "../../components/project-gallery-carousel";
import { Footer, Header } from "../../components/site-shell";
import { galleryProjects, getGalleryProject } from "../../lib/gallery-projects";
import { galleryEnquiryHref, galleryEnquirySelection, relatedGalleryProjects } from "../../lib/gallery-catalog";
import { serviceOptions } from "../../lib/enquiry";
import { siteUrl } from "../../lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return galleryProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/gallery/[slug]">): Promise<Metadata> {
  const project = getGalleryProject((await params).slug);
  if (!project) notFound();

  return {
    title: `${project.title}${project.location ? ` | ${project.location}` : ""} | Form & Frame`,
    description: project.seoDescription,
    keywords: project.keywords,
    alternates: {
      canonical: `/gallery/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Form & Frame`,
      description: project.seoDescription,
      url: `/gallery/${project.slug}`,
      type: "article",
      images: project.images.map(image => ({ url: image.src, alt: image.alt })),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Form & Frame`,
      description: project.seoDescription,
      images: [project.cover.src],
    },
  };
}

export default async function GalleryProjectPage({ params }: PageProps<"/gallery/[slug]">) {
  const project = getGalleryProject((await params).slug);
  if (!project) notFound();

  const enquiryHref = galleryEnquiryHref(project);
  const selection = galleryEnquirySelection(project);
  const serviceHref = selection.joinery ? `/bespoke-joinery/${selection.joinery}` : `/${selection.service}`;
  const serviceLabel = serviceOptions.find(option => option.value === selection.service)!.label.toLowerCase();
  const relatedProjects = relatedGalleryProjects(project);

  const projectUrl = `${siteUrl}/gallery/${project.slug}`;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seoDescription,
    url: projectUrl,
    image: project.images.map(image => `${siteUrl}${image.src}`),
    keywords: project.keywords.join(", "),
    about: project.category,
    creator: {
      "@type": "Organization",
      name: "Form & Frame",
      url: siteUrl,
    },
    ...(project.location ? {
      locationCreated: {
        "@type": "Place",
        name: project.location,
      },
    } : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gallery",
        item: `${siteUrl}/gallery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };

  return (
    <div>
      <Header />
      <main id="main-content" className="gallery-page project-detail-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <header className="project-detail-hero">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/gallery">Gallery</Link><span aria-hidden="true">/</span><span>{project.title}</span>
            </nav>
            <div className="project-detail-heading">
              <div>
                <p className="eyebrow"><span className="project-gallery-id">{project.galleryId}</span>{project.category}{project.location ? ` · ${project.location}` : ""}</p>
                <h1>{project.title}</h1>
              </div>
              <p className="project-detail-summary">{project.summary}</p>
            </div>
          </div>
        </header>

        <section className="project-detail-gallery" aria-label={`${project.title} photographs`}>
          <div className="container">
            <ProjectGalleryCarousel images={project.images} title={project.title} />
          </div>
        </section>

        <section className="project-overview-section">
          <div className="container project-overview-grid">
            <div>
              <p className="eyebrow">Project case study</p>
              <h2>Design, fitting and craftsmanship details</h2>
            </div>
            <div>
              <p className="project-overview-intro">{project.summary}</p>
              <ul className="project-highlight-list" aria-label="Project highlights">
                {project.highlights.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="project-case-study-section">
          <div className="container project-case-study">
            {project.caseStudy.map((section, index) => (
              <article className="project-case-study-block" key={section.heading}>
                <div className="project-case-study-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h2>{section.heading}</h2>
                  <div className="project-case-study-copy">
                    {section.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="project-service-context">
          <div className="container project-service-context-grid">
            <div>
              <p className="eyebrow">{project.category}</p>
              <h2>Planning a similar project?</h2>
            </div>
            <div>
              <p>
                Explore the Form &amp; Frame <Link href={serviceHref}>{serviceLabel}</Link> service for more information about how projects are reviewed, coordinated and installed.
                {project.category === "Kitchen Installation"
                  ? " Independent kitchen installation is available for customer-supplied kitchens across Luton, Bedfordshire, Hertfordshire and selected surrounding areas."
                  : " Bespoke fitted-furniture projects are considered across Luton, Bedfordshire, Hertfordshire, London and selected surrounding areas depending on scope."}
              </p>
              <Link className="text-link" href={serviceHref}>Explore {serviceLabel} <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="project-related-section">
            <div className="container">
              <p className="eyebrow">More completed work</p>
              <h2>Related {project.category.toLowerCase()} projects</h2>
              <div className="project-related-links">
                {relatedProjects.map(item => (
                  <Link href={`/gallery/${item.slug}`} key={item.slug}>
                    <span>{item.galleryId} · {item.location ?? item.category}</span>
                    <strong>{item.title}</strong>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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
