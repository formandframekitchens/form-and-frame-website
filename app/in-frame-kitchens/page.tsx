import Link from "next/link";
import { DetailGrid, ServiceFAQs, ServicePage, ServiceQuote, ServiceSection } from "../components/service-page";
import { serviceMetadata } from "../lib/service-metadata";

export const metadata = serviceMetadata("Traditional In-Frame Kitchens Luton", "Traditional British in-frame kitchens: design, supply and installation by Form & Frame. Painted Shaker cabinetry, technical drawings and client sign-off. Quotation only.", "/in-frame-kitchens");

const stages = [
  { title: "Survey and measure", copy: "We survey the room, take measurements and discuss how you use the kitchen, the desired style and the practical constraints." },
  { title: "Design the kitchen", copy: "We develop the layout and cabinetry design around the room, with consideration for storage, appliances, proportions and day-to-day use." },
  { title: "Technical drawings and specification", copy: "The design is developed into full technical drawings and a written specification covering the agreed construction, layout, materials, finishes and fittings." },
  { title: "Your approval before manufacture", copy: "You sign off both the drawings and the written specification before manufacture. This confirms exactly what is to be made and installed." },
  { title: "Specialist manufacture", copy: "The approved kitchen is manufactured through selected specialist manufacturing partners. Form & Frame coordinates the technical information and agreed specification." },
  { title: "Installation and final quality control", copy: "We install the cabinetry, coordinate the agreed worktop and trade stages, adjust the doors and drawers, and complete final quality-control checks with you." },
];

export default function InFrameKitchensPage() {
  return <ServicePage eyebrow="Traditional British cabinetry" title="In-frame kitchens in Luton" introduction="Design, supply and installation of traditional in-frame kitchens around Luton. Painted cabinetry, inset doors and visible face-frame construction create a considered kitchen with enduring proportions." parent={{ label: "Kitchen installation", href: "/kitchen-installation" }}>
    <ServiceSection title="Painted Shaker cabinetry, framed with care" eyebrow="The in-frame character">
      <div className="inframe-intro">
        <div><p>Doors sit within a visible face frame, giving the cabinetry its distinctive in-frame character. Traditional British Shaker styling, painted finishes and plain or beaded frame options form the starting point for the design.</p><p>We consider the proportions of each run, the relationship between doors and drawers, and the finishing details as part of the complete room.</p></div>
        <figure className="inframe-study"><div className="inframe-cabinet" aria-hidden="true"><div className="inframe-door"><span /></div><div className="inframe-door"><span /></div></div><figcaption>In-frame detail study: inset Shaker doors within a visible face frame.</figcaption></figure>
      </div>
    </ServiceSection>
    <ServiceSection title="A complete design, supply and installation service" eyebrow="From first survey to final check" muted>
      <p className="service-prose">Our main in-frame offer brings design, specialist manufacture and installation together. Each kitchen is individually specified and quoted; we do not publish standard prices or offer supply-only kitchens.</p>
      <ol className="inframe-process">{stages.map((stage, index) => <li key={stage.title}><span className="step-number" aria-hidden="true">0{index + 1}</span><div><h3>{stage.title}</h3><p>{stage.copy}</p></div></li>)}</ol>
    </ServiceSection>
    <ServiceSection title="Finishes chosen for the whole room">
      <p className="service-prose">Painted cabinetry is central to the traditional in-frame offer. Depending on the design and manufacturing specification, we can also explore natural timber or veneer, stained finishes, and matching existing furniture where feasible. Samples, material suitability and the agreed finish are reviewed before sign-off.</p>
    </ServiceSection>
    <ServiceSection title="Already have an in-frame kitchen supplier?" eyebrow="Installation-only also available" muted>
      <p className="service-prose">We also install in-frame kitchens manufactured or supplied by other companies. Send the drawings and specification so we can review the construction, fitting requirements and room conditions.</p>
      <DetailGrid items={[
        { title: "Careful setting out", copy: "Cabinet levels, face-frame alignment and the relationship between adjoining units are considered together before fixing." },
        { title: "Consistent final adjustment", copy: "Inset doors, drawers and finishing pieces are fitted and adjusted to the agreed design and the manufacturer's requirements." },
      ]} />
      <Link className="text-link" href="/kitchen-installation">Our kitchen installation service <span aria-hidden="true">↗</span></Link>
    </ServiceSection>
    <ServiceSection title="Based in Luton, with selected projects further afield">
      <p className="service-prose">For in-frame kitchens, we can consider a service area of roughly 45 minutes from Luton, including Milton Keynes where the location and project scope are commercially sensible. Share your postcode at the enquiry stage so we can confirm suitability.</p>
    </ServiceSection>
    <ServiceFAQs items={[
      { question: "Can I buy an in-frame kitchen on a supply-only basis?", answer: "No. We offer the complete design, supply and installation service, or installation-only for a kitchen supplied by someone else." },
      { question: "What do I approve before manufacture?", answer: "You sign off both the full technical drawings and the written specification before manufacture. These record the agreed layout, construction, materials, finishes and fittings." },
      { question: "How much will my in-frame kitchen cost?", answer: "Each kitchen is quotation only. The layout, cabinetry specification, finish, worktops and installation scope determine the quotation; there are no published standard prices." },
    ]} />
    <ServiceQuote title="Discuss your in-frame kitchen" copy="Share your postcode, room photographs, approximate timing and any plans or style references. Tell us whether you need the full design, supply and installation service or installation-only." action="Discuss my in-frame project" />
  </ServicePage>;
}
