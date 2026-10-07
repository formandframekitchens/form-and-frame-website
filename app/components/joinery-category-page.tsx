import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./site-shell";
import { Breadcrumbs } from "./breadcrumbs";
import { ServiceFAQs, ServiceQuote, ServiceSection } from "./service-page";
import { ServiceStructuredData } from "./structured-data";
import { joineryServiceCopy } from "../lib/joinery-service-copy";
import { enquiryHref } from "../lib/enquiry";
import type { JoineryCategory } from "../lib/joinery-categories";
import { categoriesForProject, galleryHref } from "../lib/gallery-catalog";
import { publicGalleryProjects } from "../lib/gallery-projects";
import { GalleryProjectCard } from "./gallery-project-card";

export function JoineryCategoryPage({ category }: { category: JoineryCategory }) {
  const copy = joineryServiceCopy[category.slug];
  const enquiryUrl = enquiryHref({ service: "bespoke-joinery", joinery: category.slug });
  const preferredProjects: Record<string, string[]> = {
    wardrobes: ["G27", "G41", "G49", "G20"], "alcove-units": ["G32", "G45", "G19"],
    bookcases: ["G44", "G09", "G57", "G12"], "entertainment-units": ["G08", "G47", "G48", "G04"],
    "office-furniture": ["G31", "G43", "G71"], "unique-furniture": ["G29", "G58", "G59"],
  };
  const preferred = preferredProjects[category.slug] ?? [];
  const projects = category.slug === "under-stairs-storage" ? [] : publicGalleryProjects
    .filter(project => categoriesForProject(project).includes(category.slug as Exclude<typeof category.slug, "under-stairs-storage">))
    .sort((a, b) => (preferred.includes(a.galleryId) ? preferred.indexOf(a.galleryId) : 99) - (preferred.includes(b.galleryId) ? preferred.indexOf(b.galleryId) : 99));
  const hero = projects[0]?.cover;
  return <div>
    <Header />
    <main id="main-content" className="service-page joinery-category-page">
      <ServiceStructuredData name={copy.seoTitle} description={copy.description} path={`/bespoke-joinery/${category.slug}`} />
      <header className="service-hero"><div className="container">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Bespoke joinery", href: "/bespoke-joinery" }]} />
        <div className="service-hero-grid">
          <div className="service-hero-copy">
            <p className="eyebrow">Made for your space</p>
            <h1>{category.title}</h1>
            <p className="service-lead">{category.introduction}</p>
            <div className="service-contact-actions"><Link className="button" href={enquiryUrl}>Discuss my project <span aria-hidden="true">↗</span></Link></div>
          </div>
          <figure className="service-visual service-hero-visual"><div className="service-visual-frame">
            <Image src={hero?.src ?? category.image} alt={hero?.alt ?? category.alt} fill preload sizes="(max-width: 1000px) 92vw, 46vw" style={hero ? { objectFit: "contain" } : undefined} />
          </div>{!hero && category.imageDisclosure && <figcaption>{category.imageDisclosure}<span>Illustrative design, not a completed Form &amp; Frame project.</span></figcaption>}</figure>
        </div>
      </div></header>
      {projects.length > 0 && <ServiceSection title={`Completed ${category.title.toLowerCase()} projects`} eyebrow="Our work" id="completed-projects">
        <div className="gallery-card-grid">{projects.slice(0, 4).map(project => <GalleryProjectCard project={project} key={project.slug} />)}</div>
        <p className="service-prose-spaced"><Link className="text-link" href={galleryHref({ category: category.slug as Exclude<typeof category.slug, "under-stairs-storage"> })}>View all {category.title.toLowerCase()} projects <span aria-hidden="true">↗</span></Link></p>
      </ServiceSection>}
      {category.gallery && category.gallery.length > 0 && <ServiceSection title={`${category.title}: ideas & details`} id="gallery" muted>
        <div className="joinery-gallery">{category.gallery.map(image => <figure className="service-visual" key={image.src}>
          <div className="service-visual-frame"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 92vw, (max-width: 1000px) 46vw, 30vw" /></div>
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>)}</div>
      </ServiceSection>}
      {copy.sections.map((section, index) => <ServiceSection key={section.title} title={section.title} muted={index % 2 === 0}>
        {section.copy.map(paragraph => <p className="service-prose service-prose-spaced" key={paragraph}>{paragraph}</p>)}
      </ServiceSection>)}
      <ServiceSection title="What we’ll consider together" eyebrow="Planning your furniture" muted>
        <ul className="joinery-considerations">{category.considerations.map(item => <li key={item}>{item}</li>)}</ul>
        <p className="service-prose service-prose-spaced">Share your postcode, room photographs, approximate dimensions and any drawings or style references. Form & Frame coordinates the design, technical details and installation, with specialist manufacturing partners where appropriate. The quotation confirms the agreed scope.</p>
      </ServiceSection>
      <ServiceSection title="Bespoke furniture from Luton" eyebrow="Local projects and individual details">
        <p className="service-prose">We consider projects in Luton, Dunstable, Harpenden, St Albans and the surrounding Bedfordshire and Hertfordshire area. Share your postcode and scope so we can confirm the practical arrangements.</p>
        <div className="actions"><Link className="text-link" href="/areas">Check the areas we cover ↗</Link><Link className="text-link" href="/guides/joinery-materials-finishes">Compare materials and finishes ↗</Link></div>
      </ServiceSection>
      <ServiceFAQs items={[
        { question: copy.question, answer: copy.answer },
        { question: "How is bespoke furniture priced?", answer: "The quotation depends on the dimensions, construction, materials, internal fittings, finish and installation requirements. Send photographs, approximate dimensions and your priorities for an initial review. The final scope is confirmed after site checks and specification." },
        { question: "What do I approve before the furniture is made?", answer: "The agreed drawings and written specification record the layout, dimensions, materials, finishes and fittings. Manufacture is coordinated with the appropriate specialist partners, with installation responsibilities confirmed in the project scope." },
      ]} />
      <ServiceQuote enquiryUrl={enquiryUrl} title={`Tell us about your ${category.title.toLowerCase()}`} copy="Send a few details about your room, ideas and timing. Your chosen furniture type will already be selected in the enquiry form." action="Start my enquiry" />
      <div className="container service-back-link"><Link className="text-link" href="/bespoke-joinery">Back to all bespoke joinery <span aria-hidden="true">↗</span></Link></div>
    </main>
    <Footer />
  </div>;
}
