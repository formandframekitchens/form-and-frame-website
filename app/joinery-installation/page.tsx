import Link from "next/link";
import { DetailGrid, ServiceFAQs, ServicePage, ServiceQuote, ServiceSection } from "../components/service-page";
import { serviceMetadata } from "../lib/service-metadata";
import { enquiryHref } from "../lib/enquiry";

export const metadata = serviceMetadata(
  "Joinery & Furniture Installation Luton",
  "Professional installation of factory-produced and third-party cabinetry, wardrobes and fitted furniture around Luton, Bedfordshire and Hertfordshire.",
  "/joinery-installation"
);

const scope = [
  { title: "Drawing & specification review", copy: "We review the supplied drawings, unit schedule, fixing requirements and installation information before work starts." },
  { title: "Delivery & access planning", copy: "Access, storage, sequencing and handling requirements are considered so the installation can proceed efficiently." },
  { title: "Setting out & installation", copy: "Cabinetry and fitted furniture are set out, assembled where required, levelled, fixed and installed to the supplied information and site conditions." },
  { title: "Scribes, fillers & panels", copy: "Finishing pieces are fitted accurately to walls, floors and adjoining elements, with final adjustments made as the installation progresses." },
  { title: "Adjustment & finishing", copy: "Doors, drawers, hardware and visible junctions are adjusted and checked before completion." },
  { title: "Supplier coordination", copy: "Where useful, Form & Frame can coordinate technical queries with the supplying joinery company, manufacturer, designer or builder." },
];

export default function JoineryInstallationPage() {
  return <ServicePage
    enquiryUrl={enquiryHref({ service: "joinery-installation" })}
    eyebrow="Installation-only service"
    title="Joinery & furniture installation"
    introduction="Professional installation of factory-produced or client-supplied cabinetry and fitted furniture for joinery companies, manufacturers, designers, builders and homeowners."
    parent={{ label: "Services", href: "/services" }}
    compactHub
  >
    <ServiceSection title="Installation for supplied joinery" eyebrow="Third-party manufactured cabinetry">
      <p className="service-prose">This service is for projects where the cabinetry or furniture has already been manufactured or supplied. Form & Frame focuses on the site installation, setting out, fitting accuracy and final adjustment rather than claiming manufacture of the supplied product.</p>
      <DetailGrid items={scope} />
    </ServiceSection>

    <ServiceSection title="Suitable project types" muted>
      <DetailGrid items={[
        { title: "Wardrobes & fitted furniture", copy: "Factory-made wardrobes, storage and fitted furniture supplied ready for installation." },
        { title: "Media & living-room cabinetry", copy: "Media units, display cabinetry, alcove furniture and similar fitted packages." },
        { title: "Office & commercial joinery", copy: "Selected commercial or office joinery packages where the drawings, components and access arrangements are suitable." },
        { title: "Residential cabinetry packages", copy: "Joinery supplied by manufacturers, builders, designers or specialist workshops for residential projects." },
      ]} />
    </ServiceSection>

    <ServiceSection title="Who we work with" eyebrow="Flexible installation support">
      <p className="service-prose">Projects can come directly from joinery manufacturers and factories, designers, builders, fit-out companies or homeowners who already have cabinetry ready to install. The scope is reviewed from the supplied information before a quotation is confirmed.</p>
    </ServiceSection>

    <ServiceSection title="Service area" muted>
      <p className="service-prose">Based in Luton, Form & Frame considers installation projects across Bedfordshire, Hertfordshire and selected surrounding areas. Larger or commercially suitable packages can be considered further afield.</p>
    </ServiceSection>

    <ServiceFAQs items={[
      { question: "Do you need to manufacture the cabinetry to install it?", answer: "No. This is specifically an installation-only service for cabinetry or fitted furniture manufactured by another company or supplied by the client." },
      { question: "Can you assemble flat-pack or component-based joinery on site?", answer: "Where the product is designed for site assembly, assembly can be included in the agreed scope. We review the supplied drawings and instructions first." },
      { question: "Can you work directly for joinery companies or manufacturers?", answer: "Yes. Form & Frame can provide installation support for manufacturers, joinery companies, designers and builders where the project scope and location are suitable." },
    ]} />

    <ServiceQuote enquiryUrl={enquiryHref({ service: "joinery-installation" })} title="Have a joinery package ready to install?" copy="Send the drawings, location, photographs, delivery information and expected installation dates so we can review the scope." action="Send an enquiry" />
    <div className="container service-back-link"><Link className="text-link" href="/services">Back to all services <span aria-hidden="true">↗</span></Link></div>
  </ServicePage>;
}
