import Link from "next/link";
import { EditorialPage } from "../../components/editorial-page";
import { GalleryProjectCard } from "../../components/gallery-project-card";
import { ServiceQuote, ServiceSection } from "../../components/service-page";
import { serviceMetadata } from "../../lib/service-metadata";
import { publicGalleryProjects } from "../../lib/gallery-projects";

export const metadata = serviceMetadata("Fitted Furniture & Kitchen Services in Luton", "Luton-based bespoke joinery and kitchen services: fitted wardrobes, alcove cupboards, media walls, bespoke kitchens and independent kitchen fitting.", "/areas/luton");
const examples = ["G20", "G32", "G01"].map(id => publicGalleryProjects.find(project => project.galleryId === id)!);

export default function LutonPage() {
  return <EditorialPage title="Fitted furniture and kitchen services in Luton" eyebrow="Our home base" path="/areas/luton" parent={{ label: "Areas", href: "/areas" }} introduction="Form & Frame is based in Luton, bringing practical joinery, technical design and installation experience to fitted furniture and kitchen projects. Start with the room and the way you want to use it.">
    <ServiceSection title="Make the most of the space you already have">
      <p className="service-prose">A bedroom alcove, a living-room recess or a low wall beneath the roof can offer useful storage when the furniture is designed to fit it. We review dimensions, door clearances, existing services and the items you need to store before developing the layout. The visible finish is then considered alongside the internal arrangement.</p>
      <div className="service-grid">
        <article><h3>Fitted wardrobes</h3><p>Built-in bedroom storage, mirrored fronts and walk-in dressing rooms with hanging space, shelves and drawers arranged around your clothing.</p><Link className="text-link" href="/bespoke-joinery/wardrobes">Explore fitted wardrobes ↗</Link></article>
        <article><h3>Alcove cupboards and bookcases</h3><p>Open shelves and concealed storage beside a fireplace or across a library wall, with lighting and finish details agreed as part of the design.</p><Link className="text-link" href="/bespoke-joinery/alcove-units">Explore alcove furniture ↗</Link></article>
        <article><h3>Media and home-office furniture</h3><p>TV walls, fitted desks and working storage, planned around the equipment, cables and access needed for everyday use.</p><Link className="text-link" href="/bespoke-joinery/office-furniture">Explore home-office furniture ↗</Link></article>
      </div>
    </ServiceSection>
    <ServiceSection title="A new bespoke kitchen, or a kitchen you already own" muted>
      <p className="service-prose">If you want a kitchen designed for the room, our bespoke and in-frame services coordinate the layout, cabinetry specification, specialist manufacture and installation. Drawings and the written specification are agreed before production.</p>
      <p className="service-prose service-prose-spaced">If you have already chosen Howdens, Wren, IKEA, Magnet, Wickes or another supplier, we can review an independent installation. Send the supplier plan, appliance list, worktop details and room photographs so that the fitting scope can be assessed.</p>
      <div className="actions"><Link className="text-link" href="/bespoke-kitchens">Bespoke kitchens in Luton ↗</Link><Link className="text-link" href="/in-frame-kitchens">In-frame kitchens ↗</Link><Link className="text-link" href="/kitchen-installation">Kitchen fitting in Luton ↗</Link></div>
    </ServiceSection>
    <ServiceSection title="How a local project begins">
      <p className="service-prose">The first review can begin with your postcode, room photographs, approximate dimensions and a short description of the work. Tell us about access, parking, stairs and any other trades involved. A site visit confirms the measurements and conditions needed for an accurate specification and quotation.</p>
      <p className="service-prose service-prose-spaced">Form & Frame coordinates the design and technical details, uses selected specialist manufacturing partners where appropriate, and follows through to installation and final adjustments. The quotation identifies the agreed responsibilities. Timescales depend on the specification, manufacturing programme and site readiness.</p>
      <Link className="text-link" href="/guides/joinery-materials-finishes">Choosing veneer, painted finishes and metal details ↗</Link>
    </ServiceSection>
    <ServiceSection title="Examples from our completed portfolio" eyebrow="Ideas for your Luton project" muted>
      <p className="service-prose">These examples show the types of furniture and installation details we can discuss. Each gallery identifies its own confirmed project location where available.</p>
      <div className="gallery-card-grid service-prose-spaced">{examples.map(project => <GalleryProjectCard key={project.slug} project={project} />)}</div>
    </ServiceSection>
    <ServiceQuote title="Discuss your Luton project" copy="Share the room, your postcode and what you would like to change. We will start with a practical review of the work." />
  </EditorialPage>;
}
