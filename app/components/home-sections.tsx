import Link from "next/link";
import type { ReactNode } from "react";
import { manufacturers, processSteps, homepageServices, faqs } from "../lib/home-data";
import { WHATSAPP_NUMBER } from "../lib/contact";
import { publicGalleryProjects } from "../lib/gallery-projects";
import { GalleryProjectCard } from "./gallery-project-card";
import { Photo } from "./photo";
import { KitchenCarousel } from "./kitchen-carousel";
import { enquiryHref } from "../lib/enquiry";

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
function Action({ children, href = "/contact#enquiry-form", secondary = false }: { children: ReactNode; href?: string; secondary?: boolean }) {
  return <Link className={`button${secondary ? " button-outline" : ""}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <Eyebrow>Independent kitchen fitting <span aria-hidden="true">·</span> Luton</Eyebrow>
          <h1>Kitchen installation in Luton</h1>
          <p className="hero-description">Your kitchen, carefully fitted. We install customer-supplied kitchens in Luton and nearby towns, with over 20 years of industry experience. Send your plans and postcode to discuss the fitting. Fitted furniture and bespoke joinery enquiries are welcome too.</p>
        </div>
        <div className="hero-image">
          <KitchenCarousel />
          <div className="hero-overlay">
            <div className="hero-promise">
              <strong>From your kitchen plan to the final fit.</strong>
              <span className="hero-process">Send plans <i>→</i> Review <i>→</i> Home visit <i>→</i> Install</span>
            </div>
            <div className="hero-actions"><Action href={enquiryHref({ service: "kitchen-installation" })}>Send your plans</Action><Action href="/kitchen-installation" secondary>Kitchen fitting</Action></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip"><ul className="container">
      <li><strong>20+ Years</strong><span>Industry experience</span></li>
      <li><strong>Made to Measure</strong><span>Furniture for your space</span></li>
      <li><strong>Luton Based</strong><span>Local service</span></li>
      <li><strong>Any Supplier</strong><span>Customer-supplied kitchens welcome</span></li>
    </ul></div>
  );
}

export function BespokeFurniture() {
  return <section className="section installation-section"><div className="container">
    <p className="eyebrow">Bespoke furniture &amp; kitchens</p>
    <div className="installation-intro"><h2>Considered storage.<br />Individual details.</h2><div>
      <p>From a fitted wardrobe to a complete kitchen, we start with the way you want to use the room. Cabinet proportions, internal storage, visible grain, painted finishes and metal details are developed together, with a clear specification before manufacture.</p>
      <p className="service-prose-spaced">Form &amp; Frame brings design and installation together with selected specialist manufacturing partners. Explore the furniture that suits your project.</p>
    </div></div>
    <div className="service-grid">
      <article><h3>Bespoke joinery &amp; fitted furniture</h3><p>Built-in wardrobes, alcove units, library bookcases, media walls and home-office furniture.</p><Link className="text-link" href="/bespoke-joinery">Explore bespoke joinery ↗</Link></article>
      <article><h3>Bespoke kitchens</h3><p>Made-to-measure cabinetry, storage and finishes planned around the complete kitchen.</p><Link className="text-link" href="/bespoke-kitchens">Explore bespoke kitchens ↗</Link></article>
      <article><h3>Traditional in-frame kitchens</h3><p>Inset doors, visible face frames and individually specified painted cabinetry.</p><Link className="text-link" href="/in-frame-kitchens">Explore in-frame kitchens ↗</Link></article>
    </div>
  </div></section>;
}

export function KitchenInstallation() {
  return (
    <section className="section installation-section" id="kitchen-installation">
      <div className="container">
        <div className="installation-intro">
          <h2>Already Bought Your Kitchen?<br />We Can Install It.</h2>
          <div><p>You choose the kitchen. We bring the installation experience. Form & Frame independently installs customer-supplied kitchens from major manufacturers.</p><Link className="text-link" href="/kitchen-installation">Kitchen installation <span aria-hidden="true">↗</span></Link></div>
        </div>
        <ul className="manufacturer-list" id="kitchen-brands">{manufacturers.map(item => <li key={item.name}>{item.href ? <Link href={item.href}>{item.name}</Link> : item.name}</li>)}</ul>

      </div>
    </section>
  );
}

export function TechnicalExpertise() {
  return (
    <section className="section technical-section" id="installation-details">
      <div className="container technical-grid">
        <Photo name="technical" />
        <div className="technical-copy" id="about">
          <Eyebrow>Technical installation experience</Eyebrow>
          <h2>More Than<br />Cabinet Assembly</h2>
          <p>Form &amp; Frame is led by Arnas Vazinskas, drawing on around 20 years of personal experience across joinery manufacturing, technical design and installation. That background connects the appearance of your furniture with the details needed to fit it accurately.</p>
          <ul className="capability-list">
            <li>Accurate cabinet levelling</li><li>Precision scribes &amp; fillers</li><li>Worktop routing &amp; fitting</li><li>Integrated appliances &amp; complex layouts</li>
          </ul>
          <Link className="text-link" href="/in-frame-kitchens">Specialist in-frame kitchens <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section process-section" id="process"><div className="container">
      <h2>How It Works</h2>
      <ol className="process-grid">{processSteps.map((step, i) => (
        <li key={step.title}><span className="step-number" aria-hidden="true">0{i + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></li>
      ))}</ol>
    </div></section>
  );
}

export function ProjectsPreview() {
  const projects = ["G01", "G27", "G32"].map(id => publicGalleryProjects.find(project => project.galleryId === id)!);
  return (
    <section className="section projects-section" id="projects"><div className="container">
      <p className="eyebrow">Completed work</p>
      <h2>See the furniture. Explore the details.</h2>
      <p className="project-intro">Selected photographs from completed kitchen installation and bespoke joinery work. The full gallery brings each project together with its supporting views and details.</p>
      <Link className="text-link" href="/gallery">View full gallery <span aria-hidden="true">↗</span></Link>
      <div className="gallery-card-grid service-prose-spaced">
        {projects.map(project => <GalleryProjectCard key={project.slug} project={project} />)}
      </div>
    </div></section>
  );
}

export function SecondaryServices() {
  return (
    <section className="supporting-section"><div className="container">
      <h2>Other Services</h2>
      <div className="service-grid">{homepageServices.map(service => (
        <article id={service.id} key={service.id}><h3>{service.title}</h3><p>{service.copy}</p><Link className="text-link" href={service.href} aria-label={`Explore ${service.title.toLowerCase()}`}>Explore service <span aria-hidden="true">↗</span></Link></article>
      ))}</div>
      <div className="service-area" id="areas"><p>Based in Luton and working across selected areas of Bedfordshire and nearby Hertfordshire.</p><Link className="text-link" href="/areas">Areas we cover <span aria-hidden="true">↗</span></Link></div>
    </div></section>
  );
}

export function FAQ() {
  return (
    <section className="section faq-section"><div className="container faq-grid">
      <div><Eyebrow>A few practical answers</Eyebrow><h2>Before We Begin</h2></div>
      <div className="faq-list">{faqs.map(faq => (
        <details key={faq.question} id={faq.question === "Which areas do you cover?" ? "areas-answer" : undefined}>
          <summary>{faq.question}<span className="faq-toggle" aria-hidden="true">+</span></summary>
          <p>{faq.answer}</p>
        </details>
      ))}</div>
    </div></section>
  );
}

export function FinalCTA() {
  return (
    <section className="section final-cta" id="quote"><div className="container">
      <h2>Send Your Kitchen Plans</h2>
      <p>Start with your postcode, supplier plan and a few room photographs. Tell us your preferred timing so we can discuss the scope and next step.</p>
      <div className="actions"><Action href={enquiryHref({ service: "kitchen-installation" })}>Start my installation enquiry</Action><a className="button button-outline" href="https://wa.me/447933026532?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20kitchen%20installation%20with%20Form%20%26%20Frame.">WhatsApp instead <span aria-hidden="true">↗</span></a></div>
      <div className="quote-contact" id="quote-contact">
        {!WHATSAPP_NUMBER && <p>Our enquiry contact details are being set up. Plan sending and WhatsApp enquiries will be available here soon.</p>}
      </div>
    </div></section>
  );
}
