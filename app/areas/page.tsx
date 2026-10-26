import Link from "next/link";
import { EditorialPage } from "../components/editorial-page";
import { DetailGrid, ServiceFAQs, ServiceQuote, ServiceSection } from "../components/service-page";
import { serviceMetadata } from "../lib/service-metadata";
import { localServiceAreaCopy, serviceAreaGroups } from "../lib/service-coverage";
import { joineryCategories } from "../lib/joinery-categories";

export const metadata = serviceMetadata("Kitchen Fitting & Joinery Areas | Luton & Dunstable", "Kitchen fitting and bespoke joinery in Luton, Dunstable and nearby communities. Explore fitted storage services and check your project postcode before booking.", "/areas");

export default function AreasPage() {
  return <EditorialPage title="Bespoke joinery and kitchens, from Luton" eyebrow="Areas we cover" path="/areas" introduction={localServiceAreaCopy}>
    <ServiceSection title="Luton, Dunstable and nearby projects" eyebrow="Our core area">
      <p className="service-prose">For a fitted wardrobe, alcove cupboards, a complete kitchen or several rooms of joinery, send your postcode with photographs and a short brief. For projects in Luton and Dunstable, we begin with the same practical review of your room and requirements. A site visit then confirms measurements, access and the practical requirements before the final quotation.</p>
      <p className="service-prose service-prose-spaced">If you live in a nearby town or village, send your postcode before arranging a visit. For kitchen installation, include the supplier plan so we can review delivery access, preparation and the visits needed for the work.</p>
      <div className="actions"><Link className="text-link" href="/areas/luton">Bespoke joinery and kitchens in Luton ↗</Link><Link className="text-link" href="/areas/dunstable">Kitchen fitting in Dunstable ↗</Link></div>
    </ServiceSection>
    <ServiceSection title="Local towns and villages" eyebrow="Kitchen fitting and bespoke joinery" id="local-coverage">
      <p className="service-prose">We welcome enquiries from the towns and villages below for kitchen installation, fitted wardrobes, alcove units, TV and media units, under-stairs storage, bookcases and home offices. Each project is reviewed from its actual address before a visit or fitting date is agreed.</p>
      <DetailGrid items={serviceAreaGroups.map(group => ({ title: group.title, copy: group.places.join(", ") + "." }))} />
      <p className="service-prose service-prose-spaced">Near the edge of this area, or in a village not listed? Send your postcode first. Travel at the planned time, delivery access and the number of visits all matter, so a nearby town name alone does not confirm availability.</p>
      <Link className="text-link" href="/contact#enquiry-form">Check your address and project with us ↗</Link>
    </ServiceSection>
    <ServiceSection title="Check the practical arrangements first" muted>
      <p className="service-prose">Our priority is local work. The project address, access, delivery arrangements and number of visits all affect whether an installation is practical. We review these details before confirming a site visit or fitting date.</p>
      <p className="service-prose service-prose-spaced">Our gallery includes completed work in locations beyond our current local focus. Each project keeps its own confirmed location; a historical project does not indicate a local branch or a promise of current coverage.</p>
    </ServiceSection>
    <ServiceSection title="The right service for your project">
      <DetailGrid items={[
        { title: "Bespoke fitted furniture", copy: "Wardrobes, alcove units, bookcases, media walls, home offices and individual storage pieces, with survey, design and installation coordinated around the room." },
        { title: "Bespoke and in-frame kitchens", copy: "Individually specified cabinetry, agreed technical drawings and a coordinated design, supply and installation service." },
        { title: "Installation for supplied furniture", copy: "Independent kitchen fitting and installation of joinery supplied by another manufacturer, designer or homeowner." },
      ]} />
      <nav className="joinery-service-links" aria-label="Fitted furniture services">{joineryCategories.map(category => <Link key={category.slug} href={`/bespoke-joinery/${category.slug}`}>{category.title}<span aria-hidden="true">↗</span></Link>)}</nav>
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
