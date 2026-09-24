import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { ServiceCardImage } from "../components/service-card-image";
import { serviceMetadata } from "../lib/service-metadata";

export const metadata = serviceMetadata(
  "Joinery & Kitchen Installation Services | Form & Frame",
  "Explore kitchen installation, bespoke joinery, internal door fitting and joinery installation services from Form & Frame across Luton, Bedfordshire and Hertfordshire.",
  "/services"
);

const services = [
  {
    number: "01",
    title: "Bespoke Joinery & Fitted Furniture",
    href: "/bespoke-joinery",
    image: "/images/services-hub/01-bespoke-joinery.webp",
    alt: "Bespoke fitted joinery and built-in furniture by Form & Frame",
    copy: "Designed fitted furniture and bespoke joinery including wardrobes, alcove units, media walls, home offices, utility and boot-room furniture. Form & Frame coordinates the design, technical details and installation, using specialist manufacturing partners where appropriate.",
  },
  {
    number: "02",
    title: "Kitchen Installation",
    href: "/kitchen-installation",
    image: "/images/services-hub/02-kitchen-installation.webp",
    alt: "Professional fitted kitchen installation by Form & Frame",
    copy: "Professional installation of customer-supplied kitchens from major manufacturers, covering cabinetry, panels, fillers, worktops, appliances, finishing and practical project coordination.",
  },
  {
    number: "03",
    title: "Internal Door Installation",
    href: "/internal-door-installation",
    image: "/images/services-hub/03-internal-door-installation.webp",
    alt: "Internal door installation and fitting by Form & Frame",
    copy: "New internal doors fitted into existing frames, including accurate trimming and scribing, hinges, latches, mortice locks, handles, adjustments and multiple-door projects.",
  },
  {
    number: "04",
    title: "Joinery & Furniture Installation",
    href: "/joinery-installation",
    image: "/images/services-hub/04-joinery-installation.webp",
    alt: "Factory-produced joinery and fitted furniture installation by Form & Frame",
    copy: "Installation-only for factory-produced or client-supplied cabinetry and fitted furniture made by joinery companies, manufacturers, designers, builders or other suppliers.",
  },
];

export default function ServicesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `https://formandframekitchens.co.uk${service.href}`,
    })),
  };

  return <>
    <Header />
    <main id="main-content" className="services-hub">
      <header className="services-hub-hero"><div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Services</span></nav>
        <p className="eyebrow">Form & Frame services</p>
        <h1>Choose the service you need</h1>
        <p className="services-hub-lead">Kitchen installation, bespoke fitted joinery, internal doors and professional installation of factory-produced joinery across Luton and selected areas of Bedfordshire and Hertfordshire.</p>
      </div></header>

      <section className="services-hub-grid-section"><div className="container">
        <div className="services-hub-grid">
          {services.map(service => <Link href={service.href} className="services-hub-card" key={service.number}>
            <ServiceCardImage src={service.image} alt={service.alt} number={service.number} />
            <div className="services-card-content">
              <span className="services-card-number">{service.number}</span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.copy}</p>
                <span className="services-card-action">Explore service <span aria-hidden="true">↗</span></span>
              </div>
            </div>
          </Link>)}
        </div>
      </div></section>

      <section className="services-hub-trust"><div className="container">
        <p className="eyebrow">Based in Luton</p>
        <h2>One practical point of contact for fitted projects.</h2>
        <p>Projects are considered across Luton, Bedfordshire, Hertfordshire and selected surrounding areas according to scope, access and travel requirements.</p>
      </div></section>

      <section className="section final-cta"><div className="container">
        <h2>Not sure which service fits your project?</h2>
        <p>Send a few details, photographs, drawings or your kitchen plan and we can direct the enquiry to the right service.</p>
        <div className="actions"><Link className="button" href="/contact#enquiry-form">Send an enquiry <span aria-hidden="true">↗</span></Link></div>
      </div></section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </main>
    <Footer />
  </>;
}
