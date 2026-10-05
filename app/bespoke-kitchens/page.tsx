import Link from "next/link";
import { DetailGrid, ServiceFAQs, ServicePage, ServiceQuote, ServiceSection } from "../components/service-page";
import { enquiryHref } from "../lib/enquiry";
import { serviceMetadata } from "../lib/service-metadata";
import { ServiceStructuredData } from "../components/structured-data";

export const metadata = serviceMetadata("Bespoke Kitchens in Luton", "Bespoke kitchens designed, supplied and installed by Form & Frame. Discuss your layout, cabinetry, materials and installation in Luton and surrounding areas.", "/bespoke-kitchens");

const enquiryUrl = enquiryHref({ service: "bespoke-kitchens", installation: "bespoke-design-supply-installation" });

export default function BespokeKitchensPage() {
  return <ServicePage enquiryUrl={enquiryUrl} eyebrow="Designed, supplied & installed by Form & Frame" title="Bespoke kitchens, made for your room" introduction="A kitchen shaped around the way you live, from the layout and storage to the cabinetry and finish. We bring design, supply and installation together, with the scope agreed for your project." parent={{ label: "Kitchen installation", href: "/kitchen-installation" }} imageKey="bespoke-kitchens">
    <ServiceStructuredData name="Bespoke kitchens in Luton" description="Individually specified kitchen design, supply and installation, coordinated with specialist manufacturing partners." path="/bespoke-kitchens" />
    <ServiceSection title="Start with the room and how you use it" eyebrow="Your kitchen, considered as a whole">
      <p className="service-prose">Tell us what works in your current kitchen, what you would change and the style you have in mind. Share room photographs, approximate dimensions and any plans so we can discuss the next steps.</p>
      <DetailGrid items={[
        { title: "Layout & storage", copy: "Explore cabinet proportions, working space, appliance positions and storage around your room and daily routines." },
        { title: "Materials & finish", copy: "Discuss cabinetry styles, colours, timber details, handles and worktops as part of an agreed specification." },
        { title: "Supply & installation", copy: "Bring the agreed kitchen design and fitting requirements into one clearly defined project, with a quotation based on its scope." },
      ]} />
    </ServiceSection>
    <ServiceSection title="Bespoke cabinetry, with the details agreed" eyebrow="From a brief to a specification" muted>
      <p className="service-prose">A bespoke kitchen allows the storage and cabinet proportions to develop around your room. We review the working layout, appliance sizes, circulation and the relationship to dining or living space before refining individual doors, drawers and tall cupboards.</p>
      <p className="service-prose service-prose-spaced">For a luxury kitchen, the material choices need to work as a complete palette: painted fronts, visible timber or veneer, metal handles, worktops and lighting. Samples help establish colour, grain and sheen. The construction, internal fittings and finish are recorded in a written specification alongside technical drawings.</p>
      <p className="service-prose service-prose-spaced">If you are looking for a handmade kitchen, we discuss the construction and specialist manufacturing route as part of that specification. Form &amp; Frame coordinates design and installation, with selected manufacturing partners producing the agreed cabinetry. The approved drawings and specification record the materials, fittings and finish for your project.</p>
      <Link className="text-link" href="/guides/joinery-materials-finishes">Compare cabinetry materials and finishes ↗</Link>
    </ServiceSection>
    <ServiceSection title="Plan the installation alongside the design">
      <p className="service-prose">The room survey checks the conditions that affect fitting: wall and floor levels, access, service positions and the relationship to existing finishes. Appliance information, worktop templating and the sequence of other trades need coordinating before the cabinetry arrives.</p>
      <p className="service-prose service-prose-spaced">Your quotation sets out the agreed scope and responsibilities. Final door and drawer adjustment, panel junctions and finishing details are part of bringing the design together on site. Browse the <Link href="/gallery">completed furniture and installation galleries</Link> to see the kinds of details that inform our approach.</p>
    </ServiceSection>
    <ServiceSection title="Bespoke kitchens in Luton and nearby areas" muted>
      <p className="service-prose">We consider kitchen projects in Luton, Dunstable, Harpenden, St Albans and the surrounding Bedfordshire and Hertfordshire area. Larger schemes may make a wider radius practical. Send your postcode, plans, room photographs and preferred timing so that we can review the project.</p>
      <Link className="text-link" href="/areas">Check our service areas ↗</Link>
    </ServiceSection>
    <ServiceSection title="Looking for a traditional in-frame kitchen?" muted>
      <p className="service-prose">Our in-frame kitchen service focuses on traditional cabinetry with inset doors and visible face frames.</p>
      <Link className="text-link" href="/in-frame-kitchens">Explore in-frame kitchens <span aria-hidden="true">↗</span></Link>
    </ServiceSection>
    <ServiceFAQs items={[
      { question: "What should I send with my enquiry?", answer: "Send your postcode, room photographs, any drawings or approximate dimensions, preferred timing and a few style references. Let us know your priorities for layout, storage and finish." },
      { question: "Do you also install kitchens supplied by other companies?", answer: "Yes. If you already have a supplier, choose the matching installation service on our kitchen selection page. We can review your supplier plan and the fitting requirements." },
      { question: "How is a bespoke kitchen quoted?", answer: "The quotation depends on the room, cabinetry, materials, finishes and installation scope. These are discussed for your project before the specification is agreed." },
    ]} />
    <ServiceQuote enquiryUrl={enquiryUrl} title="Discuss your bespoke kitchen" copy="Share your room, ideas and timing. Your enquiry will be marked for a bespoke kitchen designed, supplied and installed by Form & Frame." action="Discuss my bespoke kitchen" />
  </ServicePage>;
}
