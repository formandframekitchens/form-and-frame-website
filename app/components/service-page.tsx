import Link from "next/link";
import type { ReactNode } from "react";
import { Header, Footer } from "./site-shell";
import { WHATSAPP_NUMBER, planContactHref } from "../lib/contact";
import { processSteps, serviceAreas } from "../lib/home-data";
import { experienceContent } from "../lib/service-content";
import { kitchenFAQs, kitchenScope, supplierPages, type ServiceDetail, type ServiceFAQ, type SupplierPageData } from "../lib/supplier-pages";

export function ServicePage({ eyebrow, title, introduction, children, parent }: {
  eyebrow: string;
  title: string;
  introduction: string;
  children: ReactNode;
  parent?: { label: string; href: string };
}) {
  return <>
    <Header />
    <main id="main-content" className="service-page">
      <header className="service-hero"><div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link>{parent && <><span aria-hidden="true">/</span><Link href={parent.href}>{parent.label}</Link></>}</nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="service-lead">{introduction}</p>
        <Link className="button" href="#service-quote">Request an initial quote <span aria-hidden="true">↗</span></Link>
      </div></header>
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

export function InstallationScope() {
  return <ServiceSection title="A complete installation, carefully coordinated" eyebrow="From preparation to finishing" muted>
    <p className="service-prose">More than cabinet assembly: we agree the complete project scope and coordinate the sequence, with one point of contact from preparation through to the final checks.</p>
    <DetailGrid items={kitchenScope} />
    <p className="service-note">Every project is scoped individually. Your written quotation confirms what is included and any work to be carried out by other specialists.</p>
  </ServiceSection>;
}

export function SupplierNavigation({ current }: { current?: string }) {
  return <nav aria-label="Kitchen suppliers"><ul className="supplier-grid">{supplierPages.map(supplier => <li key={supplier.slug}>
    <Link className="supplier-card" href={`/kitchen-installation/${supplier.slug}`} aria-current={current === supplier.slug ? "page" : undefined}>
      <span className="supplier-brand-slot">{supplier.name}</span><span className="supplier-card-caption">Independent installation <span aria-hidden="true">↗</span></span>
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
      { title: "A technical eye", copy: "Experience in joinery manufacturing, technical design and installation helps us read the plan, understand the room and work through the fitting details." },
      { title: "One point of contact", copy: "A clear scope and an agreed sequence connect preparation, installation and the work of appropriately qualified trades." },
      { title: "Attention to the finish", copy: "Cabinet alignment, accurate scribes and fillers, worktop junctions and final adjustments are considered as part of the complete kitchen." },
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

export function ServiceQuote({ title = "Have your kitchen plan ready?", copy = "Send your kitchen plan, postcode, room photographs and approximate installation date. We can review the scope remotely before arranging a home visit.", action = "Send my kitchen plan" }: { title?: string; copy?: string; action?: string }) {
  return <section className="section final-cta" id="service-quote"><div className="container">
    <h2>{title}</h2><p>{copy}</p>
    <div className="actions"><Link className="button" href={planContactHref}>{action} <span aria-hidden="true">↗</span></Link><Link className="button button-outline" href={planContactHref}>Request an initial quote <span aria-hidden="true">↗</span></Link></div>
    {!WHATSAPP_NUMBER && <p className="service-contact-note">Our enquiry contact details are being set up. Plan sending and enquiries will be available soon.</p>}
  </div></section>;
}

export function LocalServiceArea() {
  return <ServiceSection title="Kitchen installation around Luton" id="service-areas">
    <p className="service-prose">Luton is our core service area. We also consider projects in nearby towns, depending on location and scope.</p>
    <ul className="service-area-list">{serviceAreas.map(area => <li key={area}>{area}</li>)}</ul>
  </ServiceSection>;
}

export function SupplierPage({ supplier }: { supplier: SupplierPageData }) {
  return <ServicePage eyebrow="Independent kitchen fitter · Luton" title={`${supplier.name} kitchen installation in Luton`} introduction={supplier.introduction} parent={{ label: "Kitchen installation", href: "/kitchen-installation" }}>
    <div className="container"><IndependentNotice name={supplier.name} /></div>
    <InstallationScope />
    <ServiceSection title={`Planning your ${supplier.name} installation`} eyebrow="The details that guide the fit"><DetailGrid items={supplier.considerations} /></ServiceSection>
    <WhyChooseUs />
    <InstallationProcess />
    <ServiceFAQs items={[supplier.faq, ...kitchenFAQs, { question: `Are you an approved ${supplier.name} installer?`, answer: `No. Form & Frame provides an independent installation service and is not affiliated with, endorsed by or an approved installer for ${supplier.name}. Your kitchen purchase remains with your supplier.` }]} />
    <ServiceSection title="Explore installation by supplier" muted><SupplierNavigation current={supplier.slug} /></ServiceSection>
    <ServiceQuote />
  </ServicePage>;
}
