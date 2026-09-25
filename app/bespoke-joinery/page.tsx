import Link from "next/link";
import { DetailGrid, ServiceFAQs, ServiceQuote, ServiceSection } from "../components/service-page";
import { Footer, Header } from "../components/site-shell";
import { ServiceSelection } from "../components/service-selection";
import { joineryCategories } from "../lib/joinery-categories";
import { serviceMetadata } from "../lib/service-metadata";
import { enquiryHref } from "../lib/enquiry";

export const metadata = serviceMetadata(
  "Bespoke Joinery & Fitted Furniture Luton",
  "Bespoke fitted furniture and joinery around Luton, Bedfordshire and Hertfordshire: wardrobes, alcoves, media walls, home offices, utility and boot-room furniture.",
  "/bespoke-joinery"
);

const process = [
  { title: "Survey & brief", copy: "We review the room, measurements, intended use, finish preferences and practical constraints." },
  { title: "Design & technical coordination", copy: "Layouts, proportions and technical details are developed so the project can be manufactured and installed accurately." },
  { title: "Specialist manufacture", copy: "Where appropriate, cabinetry is produced through selected specialist manufacturing partners to the agreed design and specification." },
  { title: "Installation & final checks", copy: "Form & Frame coordinates installation, adjustment, finishing details and final quality checks on site." },
];

export default function BespokeJoineryPage() {
  return <div>
    <Header />
    <main id="main-content" className="service-page services-hub">
      <ServiceSelection id="choose-joinery" title="Choose your bespoke joinery" label="Bespoke joinery and fitted furniture types" choices={joineryCategories.map(category => ({ ...category, href: '/bespoke-joinery/' + category.slug }))} action="Explore joinery" className="joinery-selection" />
      <ServiceSection title="Furniture designed for the space" eyebrow="Bespoke joinery & fitted furniture" id="joinery-details">
        <p className="service-prose">Fitted furniture designed around the room, with Form & Frame coordinating survey, technical development, specialist manufacture where appropriate, installation and final quality control. Choose the furniture you need above, or send us an enquiry if your project brings several types together.</p>
        <Link className="text-link" href={enquiryHref({ service: "bespoke-joinery" })}>Request a quote <span aria-hidden="true">↗</span></Link>
      </ServiceSection>

    <ServiceSection title="From survey to fitted result" eyebrow="A coordinated process" muted>
      <DetailGrid items={process} />
    </ServiceSection>

    <ServiceSection title="How the work is delivered">
      <p className="service-prose">Form & Frame focuses on design, technical coordination, installation and project control. Specialist manufacturing partners may be used for production where that is the most suitable route for the project. Your quotation and specification confirm the agreed responsibilities before work begins.</p>
    </ServiceSection>

    <ServiceSection title="Local fitted-joinery projects" eyebrow="Luton, Bedfordshire & Hertfordshire" muted>
      <p className="service-prose">Luton is our core base. We consider suitable fitted-joinery projects across Bedfordshire and Hertfordshire, including Dunstable, Harpenden, St Albans, Hemel Hempstead, Hitchin, Welwyn Garden City, Berkhamsted, Leighton Buzzard and selected surrounding areas.</p>
    </ServiceSection>

    <ServiceFAQs items={[
      { question: "Do you manufacture everything in your own workshop?", answer: "Not necessarily. Form & Frame coordinates design, technical details and installation, and may use selected specialist manufacturing partners where appropriate. The project specification confirms how each job will be delivered." },
      { question: "Can you work from my existing design?", answer: "Yes. Existing drawings, references and dimensions can form the starting point, subject to review and site verification before manufacture or installation." },
      { question: "Do you offer wardrobes and media walls?", answer: "Yes. Wardrobes, alcove units, media walls, home offices, utility furniture and selected fitted storage are within the bespoke joinery service." },
    ]} />

    <ServiceQuote enquiryUrl={enquiryHref({ service: "bespoke-joinery" })} whatsappMessage="Hello, I’d like to discuss bespoke joinery or fitted furniture with Form & Frame." title="Tell us about your fitted-joinery project" copy="Send your postcode, room photographs, approximate dimensions, style references and any existing drawings. We can review the project before arranging the next step." action="Send an enquiry" />
    <div className="container service-back-link"><Link className="text-link" href="/services">Back to all services <span aria-hidden="true">↗</span></Link></div>
    </main>
    <Footer />
  </div>;
}
