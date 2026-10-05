import Link from "next/link";
import { EditorialPage } from "../components/editorial-page";
import { DetailGrid, ServiceFAQs, ServiceQuote, ServiceSection } from "../components/service-page";
import { serviceMetadata } from "../lib/service-metadata";

export const metadata = serviceMetadata("Bespoke Joinery & Kitchen Service Areas", "Based in Luton, serving Bedfordshire and Hertfordshire with bespoke joinery, fitted furniture and kitchens. Check coverage for your postcode.", "/areas");

export default function AreasPage() {
  return <EditorialPage title="Bespoke joinery and kitchens, from Luton" eyebrow="Areas we cover" path="/areas" introduction="Luton is our base. We consider fitted furniture and kitchen projects across nearby Bedfordshire and Hertfordshire, with travel and installation arrangements agreed around the scope of each job.">
    <ServiceSection title="Luton and neighbouring Bedfordshire" eyebrow="Our core area">
      <p className="service-prose">For a fitted wardrobe, alcove cupboards, a complete kitchen or several rooms of joinery, send your postcode with photographs and a short brief. Projects in Luton, Dunstable, Leighton Buzzard and Bedford can be reviewed from the same starting information. A site visit then confirms measurements, access and the practical requirements before the final quotation.</p>
      <Link className="text-link" href="/areas/luton">Bespoke joinery and kitchens in Luton ↗</Link>
    </ServiceSection>
    <ServiceSection title="Hertfordshire and selected surrounding areas" muted>
      <p className="service-prose">We consider projects in Harpenden, St Albans, Hitchin, Hemel Hempstead, Welwyn Garden City and Berkhamsted. Milton Keynes and selected London or Surrey projects may also be practical for the right scope. These are service areas, with appointments and travel confirmed individually.</p>
      <p className="service-prose service-prose-spaced">Our gallery includes completed work in several locations beyond the core area. Those project locations remain attached to the actual work; they are not additional branches or showrooms. For a larger scheme, coordinated delivery and installation visits may make a wider radius practical.</p>
    </ServiceSection>
    <ServiceSection title="The right service for your project">
      <DetailGrid items={[
        { title: "Bespoke fitted furniture", copy: "Wardrobes, alcove units, bookcases, media walls, home offices and individual storage pieces, with survey, design and installation coordinated around the room." },
        { title: "Bespoke and in-frame kitchens", copy: "Individually specified cabinetry, agreed technical drawings and a coordinated design, supply and installation service." },
        { title: "Installation for supplied furniture", copy: "Independent kitchen fitting and installation of joinery supplied by another manufacturer, designer or homeowner." },
      ]} />
      <div className="actions"><Link className="text-link" href="/bespoke-joinery">Choose your joinery ↗</Link><Link className="text-link" href="/bespoke-kitchens">Bespoke kitchens ↗</Link><Link className="text-link" href="/kitchen-installation">Kitchen installation ↗</Link></div>
    </ServiceSection>
    <ServiceFAQs items={[
      { question: "How do I check whether you cover my address?", answer: "Send the postcode, the type of furniture or kitchen and the approximate scope. We assess the location together with delivery, access, the number of visits and installation requirements before confirming availability." },
      { question: "Do I need to arrange a visit before sending an enquiry?", answer: "No. Room photographs, approximate dimensions and any drawings or references allow an initial review. A measured site visit is arranged when the proposed scope is suitable." },
      { question: "Do you have a showroom in each area?", answer: "No. Form & Frame is based in Luton. The areas listed here describe where projects may be considered; they do not represent separate showrooms or offices." },
    ]} />
    <ServiceQuote title="Check your project location" copy="Send your postcode and a few details about the work. We will review the scope and confirm whether we can help." />
  </EditorialPage>;
}
