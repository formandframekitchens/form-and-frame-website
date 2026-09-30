import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { ServiceCardImage } from "../components/service-card-image";
import { serviceMetadata } from "../lib/service-metadata";

export const metadata = serviceMetadata(
  "Joinery & Kitchen Installation Services",
  "Explore kitchen installation, bespoke joinery, internal door fitting and joinery installation services from Form & Frame across Luton, Bedfordshire and Hertfordshire.",
  "/services"
);

const services = [
  {
    number: "01",
    title: "Bespoke Joinery & Fitted Furniture",
    href: "/bespoke-joinery",
    image: "/images/services-hub/01-bespoke-joinery-ai.webp",
    alt: "Bespoke sage-green wardrobes with fitted oak shelving",
    copy: "Wardrobes, alcoves, media walls and offices, designed and fitted for your room.",
  },
  {
    number: "02",
    title: "Kitchen Installation",
    href: "/kitchen-installation",
    image: "/images/services-hub/02-kitchen-installation-ai.webp",
    alt: "A fitted kitchen with oak and sage-green cabinetry",
    copy: "Your kitchen, professionally fitted. Choose your installation and supplier.",
  },
  {
    number: "03",
    title: "Internal Door Installation",
    href: "/internal-door-installation",
    image: "/images/services-hub/03-internal-door-ai.webp",
    alt: "An oak internal door fitted into its matching frame",
    copy: "Hinged, glazed and sliding internal doors, including made-to-order options where required.",
  },
  {
    number: "04",
    title: "Joinery & Furniture Installation",
    href: "/joinery-installation",
    image: "/images/services-hub/04-factory-joinery-ai.webp",
    alt: "Finished cabinets in a joinery factory, ready for site installation",
    copy: "Installation of factory-made cabinetry and furniture from your chosen manufacturer.",
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
      <div className="services-hub-selection">
        <header className="services-hub-hero"><div className="container">
          <h1>Choose the service you need</h1>
        </div></header>

      <section className="services-hub-list-section" aria-label="Our four services"><div className="container">
        <ol className="services-hub-list">
          {services.map(service => <li key={service.number}>
            <Link href={service.href} className="services-hub-row">
              <span className="services-card-number" aria-hidden="true">{service.number}</span>
              <ServiceCardImage src={service.image} alt={service.alt} number={service.number} />
              <div className="services-card-content">
                <h2>{service.title}</h2>
                <p>{service.copy}</p>
              </div>
              <span className="services-card-action">Explore service <span aria-hidden="true">↗</span></span>
            </Link>
          </li>)}
        </ol>
      </div></section>
      </div>

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
