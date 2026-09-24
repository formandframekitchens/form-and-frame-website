import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./site-shell";
import { ServiceQuote, ServiceSection } from "./service-page";
import { enquiryHref } from "../lib/enquiry";
import type { JoineryCategory } from "../lib/joinery-categories";

export function JoineryCategoryPage({ category }: { category: JoineryCategory }) {
  const enquiryUrl = enquiryHref({ service: "bespoke-joinery", joinery: category.slug });
  return <div>
    <Header />
    <main id="main-content" className="service-page joinery-category-page">
      <header className="service-hero"><div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/services">Services</Link><span aria-hidden="true">/</span><Link href="/bespoke-joinery">Bespoke joinery</Link></nav>
        <div className="service-hero-grid">
          <div className="service-hero-copy">
            <p className="eyebrow">Made for your space</p>
            <h1>{category.title}</h1>
            <p className="service-lead">{category.introduction}</p>
            <div className="service-contact-actions"><Link className="button" href={enquiryUrl}>Discuss my project <span aria-hidden="true">↗</span></Link></div>
          </div>
          <figure className="service-visual service-hero-visual"><div className="service-visual-frame">
            <Image src={category.image} alt={category.alt} fill sizes="(max-width: 1000px) 92vw, 46vw" />
          </div></figure>
        </div>
      </div></header>
      {category.gallery && category.gallery.length > 0 && <ServiceSection title={`${category.title}: ideas & details`} id="gallery" muted>
        <div className="joinery-gallery">{category.gallery.map(image => <figure className="service-visual" key={image.src}>
          <div className="service-visual-frame"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 92vw, (max-width: 1000px) 46vw, 30vw" /></div>
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>)}</div>
      </ServiceSection>}
      <ServiceSection title="What we’ll consider together" eyebrow="Planning your furniture" muted>
        <ul className="joinery-considerations">{category.considerations.map(item => <li key={item}>{item}</li>)}</ul>
        <p className="service-prose service-prose-spaced">Share your postcode, room photographs, approximate dimensions and any drawings or style references. Form & Frame coordinates the design, technical details and installation, with specialist manufacturing partners where appropriate. The quotation confirms the agreed scope.</p>
      </ServiceSection>
      <ServiceQuote enquiryUrl={enquiryUrl} title={`Tell us about your ${category.title.toLowerCase()}`} copy="Send a few details about your room, ideas and timing. Your chosen furniture type will already be selected in the enquiry form." action="Start my enquiry" />
      <div className="container service-back-link"><Link className="text-link" href="/bespoke-joinery">Back to all bespoke joinery <span aria-hidden="true">↗</span></Link></div>
    </main>
    <Footer />
  </div>;
}
