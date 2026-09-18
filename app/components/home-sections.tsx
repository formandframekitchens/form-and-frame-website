import type { ReactNode } from "react";
import { manufacturers, processSteps, homepageServices, faqs } from "../lib/home-data";
import { WHATSAPP_NUMBER, planContactHref } from "../lib/contact";
import { Photo } from "./photo";

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
function Action({ children, href = "#quote", secondary = false }: { children: ReactNode; href?: string; secondary?: boolean }) {
  return <a className={`button${secondary ? " button-outline" : ""}`} href={href}>{children}<span aria-hidden="true">↗</span></a>;
}

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Eyebrow>Luton <span aria-hidden="true">•</span> Bedfordshire</Eyebrow>
          <h1><span>KITCHEN FITTER</span><span>IN LUTON</span></h1>
          <p className="hero-subtitle">Independent Kitchen Installation by Form & Frame</p>
          <p className="hero-description">20 years of experience across joinery manufacturing, design and installation. Professional installation of customer-supplied kitchens, from initial plan review through to final finishing.</p>
          <div className="hero-actions"><Action>Get an initial quote</Action><Action secondary href={planContactHref}>Send my kitchen plan</Action></div>
        </div>
        <div className="hero-visual"><Photo name="hero" /></div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip"><ul className="container">
      <li>20 Years’ Experience</li><li>Luton Based</li><li>Independent Installer</li><li>Customer-Supplied Kitchens</li>
    </ul></div>
  );
}

export function KitchenInstallation() {
  return (
    <section className="section installation-section" id="kitchen-installation">
      <div className="container">
        <div className="installation-intro">
          <h2>Already Bought Your Kitchen?<br />We Can Install It.</h2>
          <div><p>You choose the kitchen. We bring the installation experience. Form & Frame independently installs customer-supplied kitchens from major manufacturers.</p><a className="text-link" href="#installation-details">Kitchen installation <span aria-hidden="true">↗</span></a></div>
        </div>
        <ul className="manufacturer-list">{manufacturers.map(item => <li key={item.name}>{item.name}</li>)}</ul>

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
          <p>Experience across joinery manufacturing, design and installation helps us resolve the technical details that bring your kitchen plan and room together.</p>
          <ul className="capability-list">
            <li>Accurate cabinet levelling</li><li>Precision scribes &amp; fillers</li><li>Worktop routing &amp; fitting</li><li>Integrated appliances &amp; complex layouts</li>
          </ul>
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
  return (
    <section className="section projects-section" id="projects"><div className="container">
      <h2>Selected Work</h2>
      <div className="project-grid">
        <Photo name="finished" caption="Finished Kitchen" />
        <Photo name="craftsmanship" caption="Craftsmanship Detail" />
        <Photo name="complex" caption="Complex Installation" />
      </div>
    </div></section>
  );
}

export function SecondaryServices() {
  return (
    <section className="supporting-section"><div className="container">
      <h2>Other Services</h2>
      <div className="service-grid">{homepageServices.map(service => (
        <article id={service.id} key={service.id}><h3>{service.title}</h3><p>{service.copy}</p><a className="text-link" href={planContactHref} aria-label={`Enquire about ${service.title.toLowerCase()}`}>Enquire <span aria-hidden="true">↗</span></a></article>
      ))}</div>
      <div className="service-area" id="areas"><p>Based in Luton and working across selected areas of Bedfordshire and nearby Hertfordshire.</p><a className="text-link" href="#areas-answer">Areas we cover <span aria-hidden="true">↗</span></a></div>
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
      <h2>Have Your Kitchen Plan Ready?</h2>
      <p>Send your plan, postcode and a few project details. We can start by reviewing the installation remotely.</p>
      <div className="actions"><Action href={planContactHref}>Send my kitchen plan</Action><Action href={planContactHref} secondary>Get an initial quote</Action></div>
      <div className="quote-contact" id="quote-contact">
        {!WHATSAPP_NUMBER && <p>Our enquiry contact details are being set up. Plan sending and WhatsApp enquiries will be available here soon.</p>}
      </div>
    </div></section>
  );
}
