import Link from "next/link";
import type { ReactNode } from "react";
import { Header, Footer } from "./site-shell";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, EMAIL_HREF, PHONE_HREF, whatsappHref } from "../lib/contact";
import { processSteps, serviceAreas } from "../lib/home-data";
import { experienceContent } from "../lib/service-content";
import { getServiceImages, type ServiceImage } from "../lib/service-images";
import { kitchenFAQs, kitchenScope, supplierPages, type ServiceDetail, type ServiceFAQ, type SupplierPageData } from "../lib/supplier-pages";
import { enquiryHref, supplierOptions } from "../lib/enquiry";

const supplierAccent: Record<string, string> = {
  howdens: "#c8102e",
  wren: "#165c45",
  ikea: "#0058a3",
  magnet: "#252525",
  wickes: "#244f7a",
  benchmarx: "#315875",
  "b-and-q": "#ef6c28",
};

function Visual({ image, className = "" }: { image: ServiceImage; className?: string }) {
  if (!image.src) return null;
  return <figure className={`service-visual ${className}`}>
    <div className="service-visual-frame">
      <img src={image.src} alt={image.alt} />
    </div>
    {(image.caption || image.note) && <figcaption>{image.caption}{image.note && <span>{image.note}</span>}</figcaption>}
  </figure>;
}

export function ServicePage({ eyebrow, title, introduction, children, parent, imageKey = "kitchen-installation", brandName, brandAccent, beforeTrust, compactHub = false, hideHeroActions = false, enquiryUrl = "/contact#enquiry-form", whatsappMessage = "Hello, I'd like to discuss a project with Form & Frame." }: {
  eyebrow: string;
  title: string;
  introduction: string;
  children: ReactNode;
  parent?: { label: string; href: string };
  imageKey?: string;
  brandName?: string;
  brandAccent?: string;
  beforeTrust?: ReactNode;
  compactHub?: boolean;
  hideHeroActions?: boolean;
  enquiryUrl?: string;
  whatsappMessage?: string;
}) {
  const images = getServiceImages(imageKey);
  return <>
    <Header />
    <main id="main-content" className={`service-page${hideHeroActions ? " kitchen-choice-page" : ""}`} style={brandAccent ? { "--supplier-accent": brandAccent } as React.CSSProperties : undefined}>
      <header className="service-hero"><div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link>{parent && <><span aria-hidden="true">/</span><Link href={parent.href}>{parent.label}</Link></>}</nav>
        <div className={`service-hero-grid${compactHub ? " service-hero-grid-compact" : ""}`}>
          <div className="service-hero-copy">
            {brandName && <div className="supplier-identity"><span className="supplier-identity-mark" aria-hidden="true" /><strong className="supplier-identity-name">{brandName}</strong><small>Independent installation</small></div>}
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="service-lead">{introduction}</p>
            {!hideHeroActions && <div className="service-contact-actions">
              <Link className="button" href={enquiryUrl}>Request a quote <span aria-hidden="true">↗</span></Link>
              <a className="button button-outline" href={whatsappHref(whatsappMessage)}>WhatsApp <span aria-hidden="true">↗</span></a>
            </div>}
          </div>
          {!compactHub && <Visual image={images.hero} className="service-hero-visual" />}
        </div>
        {beforeTrust && <div className="service-hero-brand-selector">{beforeTrust}</div>}
      </div></header>
      <ul className="service-trust-strip"><li><strong>Clear planning</strong><span>Project details reviewed first</span></li><li><strong>Independent service</strong><span>Responsibilities agreed clearly</span></li><li><strong>Luton based</strong><span>Bedfordshire & Hertfordshire</span></li><li><strong>Direct enquiry</strong><span>Website form or WhatsApp</span></li></ul>
      {children}
    </main>
    <Footer />
  </>;
}

export function ServiceSection({ title, eyebrow, children, id, muted = false }: {
  title: string; eyebrow?: string; children: ReactNode; id?: string; muted?: boolean;
}) {
  return <section className={`service-section${muted ? " service-section-muted" : ""}`} id={id}>
    <div className="container">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2><div className="service-section-body">{children}</div></div>
  </section>;
}

export function DetailGrid({ items }: { items: ServiceDetail[] }) {
  return <div className="service-detail-grid">{items.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>;
}

export function ImageTextSection({ imageKey, title, eyebrow, children, reverse = false }: { imageKey: string; title: string; eyebrow?: string; children: ReactNode; reverse?: boolean }) {
  const images = getServiceImages(imageKey);
  const hasImage = Boolean(images.detail.src);
  return <section className="service-section"><div className={`container ${hasImage ? `service-split${reverse ? " service-split-reverse" : ""}` : "service-copy-only"}`}>
    {hasImage && <Visual image={images.detail} />}
    <div className="service-split-copy">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2><div className="service-section-body">{children}</div></div>
  </div></section>;
}

export function ServiceGallery({ imageKey, title = "Project & kitchen gallery" }: { imageKey: string; title?: string }) {
  const images = getServiceImages(imageKey);
  const realImages = images.gallery.filter(image => Boolean(image.src));
  if (realImages.length < 3) return null;
  return <ServiceSection title={title} eyebrow="Selected projects" muted>
    <div className="service-gallery">{realImages.map((image, index) => <Visual key={index} image={image} className={index === 0 ? "service-gallery-feature" : ""} />)}</div>
  </ServiceSection>;
}

export function InstallationScope() {
  return <ServiceSection title="A complete installation, carefully coordinated" eyebrow="From preparation to finishing" muted>
    <p className="service-prose">More than cabinet assembly: we agree the complete project scope and coordinate the sequence, with one point of contact from preparation through to final checks. Your quotation identifies what Form & Frame will complete and what needs an appropriately qualified specialist.</p>
    <DetailGrid items={kitchenScope} />
    <p className="service-note">Old-kitchen removal, room preparation, cabinets, panels, fillers, plinths, worktops, appliance positioning, flooring and making good can all be considered when the project is scoped. Gas and electrical connections are coordinated with appropriately qualified trades where required.</p>
  </ServiceSection>;
}

export function SupplierNavigation({ current }: { current?: string }) {
  return <nav aria-label="Kitchen suppliers"><ul className="supplier-grid">{supplierPages.map(supplier => <li key={supplier.slug}>
    <Link className="supplier-card" style={{ "--supplier-card-accent": supplierAccent[supplier.slug] } as React.CSSProperties} href={`/kitchen-installation/${supplier.slug}`} aria-current={current === supplier.slug ? "page" : undefined}>
      <span className="supplier-brand-slot"><strong>{supplier.name}</strong></span><span className="supplier-card-caption">Independent installation <span aria-hidden="true">↗</span></span>
    </Link>
  </li>)}</ul></nav>;
}

export function IndependentNotice({ name }: { name?: string }) {
  return <p className="independent-notice">{name
    ? `Form & Frame is an independent installer. We are not affiliated with, endorsed by or an approved installer for ${name}. The supplier name identifies kitchens we can install; it does not imply a commercial relationship.`
    : "Form & Frame is an independent installer. We are not affiliated with, endorsed by or an approved installer for any supplier named here. Supplier names identify kitchens we can install."}</p>;
}

export function WhyChooseUs() {
  return <ServiceSection title="Why choose Form & Frame" eyebrow="Manufacturing. Design. Installation.">
    <p className="service-prose">{experienceContent.paragraphs[0]}</p>
    <DetailGrid items={[
      { title: "A technical eye", copy: "Experience in joinery manufacturing, CAD, technical design and installation helps us read the plan, understand the room and work through the fitting details before they become site problems." },
      { title: "One point of contact", copy: "A clear scope and an agreed sequence connect preparation, installation, worktops, appliances and the work of appropriately qualified trades." },
      { title: "Attention to the finish", copy: "Cabinet alignment, accurate scribes and fillers, panel junctions, worktop details and final door and drawer adjustments are considered as part of the complete kitchen." },
      { title: "Plan-led quoting", copy: "Send the kitchen plan, postcode, room photographs and timing first. We can review the likely installation scope before arranging the site visit that confirms the final quotation." },
    ]} />
  </ServiceSection>;
}

export function InstallationProcess() {
  return <ServiceSection title="From your plan to installation" id="installation-process" muted>
    <ol className="process-grid">{processSteps.map((step, index) => <li key={step.title}><span className="step-number" aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
  </ServiceSection>;
}

export function ServiceFAQs({ items }: { items: ServiceFAQ[] }) {
  return <ServiceSection title="Before we begin" eyebrow="Frequently asked questions">
    <div className="faq-list service-faqs">{items.map(item => <details key={item.question}><summary>{item.question}<span className="faq-toggle" aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
  </ServiceSection>;
}

export function ServiceQuote({ title = "Have your kitchen plan ready?", copy = "Send your kitchen plan, postcode, room photographs and approximate installation date. We can review the details before arranging the next step.", action = "Start my enquiry", enquiryUrl = "/contact#enquiry-form", whatsappMessage = "Hello, I'd like to discuss a project with Form & Frame." }: { title?: string; copy?: string; action?: string; enquiryUrl?: string; whatsappMessage?: string }) {
  return <section className="section final-cta" id="service-quote"><div className="container">
    <h2>{title}</h2><p>{copy}</p>
    <div className="actions"><Link className="button" href={enquiryUrl}>{action} <span aria-hidden="true">↗</span></Link><a className="button button-outline" href={whatsappHref(whatsappMessage)}>WhatsApp <span aria-hidden="true">↗</span></a></div>
    <p className="service-contact-note">Call <a href={PHONE_HREF}>{BUSINESS_PHONE_DISPLAY}</a> · Email <a href={EMAIL_HREF}>{BUSINESS_EMAIL}</a></p>
  </div></section>;
}

export function LocalServiceArea() {
  return <ServiceSection title="Kitchen installation from Luton across the surrounding area" id="service-areas">
    <p className="service-prose">Luton is our core base. We also consider kitchen installations across nearby Bedfordshire and Hertfordshire towns and selected projects towards Milton Keynes, Bedford and North London when the project scope makes the travel commercially sensible.</p>
    <ul className="service-area-list">{serviceAreas.map(area => <li key={area}>{area}</li>)}</ul>
  </ServiceSection>;
}

export function SupplierPage({ supplier }: { supplier: SupplierPageData }) {
  const enquiryUrl = enquiryHref({ service: "kitchen-installation", supplier: supplierOptions.find(option => option.value === supplier.slug)?.value, installation: "own-kitchen" });
  return <ServicePage enquiryUrl={enquiryUrl} whatsappMessage={`Hello, I'd like to enquire about ${supplier.name} kitchen installation with Form & Frame.`} eyebrow="Independent kitchen fitter · Luton & surrounding areas" title={`${supplier.name} kitchen installation`} introduction={supplier.introduction} parent={{ label: "Kitchen installation", href: "/kitchen-installation" }} imageKey={supplier.slug} brandName={supplier.name} brandAccent={supplierAccent[supplier.slug]}>
    <div className="container"><IndependentNotice name={supplier.name} /></div>
    <ImageTextSection imageKey={supplier.slug} title={`Planning a ${supplier.name} kitchen fit`} eyebrow="Before installation begins">
      <p className="service-prose">Send the kitchen plan, order or component information, appliance details, worktop specification and photographs of the room. We use the actual project information to establish the fitting sequence, identify preparation requirements and confirm what should be included in the quotation.</p>
    </ImageTextSection>
    <InstallationScope />
    <ServiceSection title={`${supplier.name} installation considerations`} eyebrow="The details that guide the fit"><DetailGrid items={supplier.considerations} /></ServiceSection>
    <InstallationProcess />
    <LocalServiceArea />
    <WhyChooseUs />
    <ServiceGallery imageKey={supplier.slug} title={`${supplier.name} kitchen gallery`} />
    <ServiceFAQs items={[supplier.faq, ...kitchenFAQs, { question: `Are you an approved ${supplier.name} installer?`, answer: `No. Form & Frame provides an independent installation service and is not affiliated with, endorsed by or an approved installer for ${supplier.name}. Your kitchen purchase remains with your supplier.` }, { question: "What should I send with my enquiry?", answer: "Send your kitchen plan, postcode, room photographs, preferred installation timing and any appliance or worktop information already available. The more complete the information, the more useful the first scope review can be." }]} />
    <ServiceSection title="Explore installation by supplier" muted><SupplierNavigation current={supplier.slug} /></ServiceSection>
    <ServiceQuote enquiryUrl={enquiryUrl} whatsappMessage={`Hello, I'd like to enquire about ${supplier.name} kitchen installation with Form & Frame.`} />
  </ServicePage>;
}
