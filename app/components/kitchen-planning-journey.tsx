import Link from "next/link";
import { enquiryHref } from "../lib/enquiry";
import { DetailGrid, ServiceSection } from "./service-page";

export function KitchenPlanningJourney() {
  return <ServiceSection title="Four decisions to settle before fitting starts" eyebrow="Survey, specification and handover" id="planning-survey" muted>
    <p className="service-prose">A supplier drawing describes the kitchen you are buying. The installation brief also needs to describe the room it is going into, the work between trades and how completion will be checked. Use these four points when discussing your fitting quotation.</p>
    <p className="service-prose service-prose-spaced">For projects in Luton and our agreed nearby service area, we can arrange a site survey within two weeks of your request. We confirm the appointment with you; this is separate from the installation start date.</p>
    <DetailGrid items={[
      { title: "1. Check the plan against the room", copy: "Photographs and approximate dimensions help with the first conversation. At the site review, check wall and floor levels, fixing surfaces, door and drawer clearance, appliance openings and service positions. Confirm any fillers, end panels or layout changes with the supplier before relying on the order for installation." },
      { title: "2. Name who does each part", copy: "Record removal and waste, delivery checks, room preparation, cabinet fitting, worktops, connections and making good in the written scope. Identify the supplier, installer and specialist trades responsible for each part. A missing panel or an extra preparation task should be discussed before additional work proceeds." },
      { title: "3. Agree the order of work", copy: "Confirm delivery and the condition of the room before the fitting date. Service changes and preparation need coordinating with cabinet positions. Where stone is being templated, agree with the fabricator when the cabinets must be fixed and level, which appliances must be available and when final connections can follow." },
      { title: "4. Walk through the finished fit", copy: "Check doors and drawers through their full movement, appliance-door clearances, panel edges, plinth access and the agreed finishing work. Record outstanding items and who will resolve them. Keep supplier product information and any specialist certificates together; installation and product responsibilities should remain clear." },
    ]} />
    <p className="service-prose service-prose-spaced">Our <Link href="/case-studies/k01-surbiton/kitchen">Surbiton kitchen case study</Link> shows this coordination in practice, from drawings and installation progress to the completed kitchen. It is a project example; new fitting enquiries are focused on Luton, Dunstable and the <Link href="/areas#local-coverage">nearby areas we cover</Link>.</p>
    <nav className="joinery-service-links" aria-label="Detailed kitchen planning guides"><Link href="/news/kitchen-installation-timescale#site-survey">What the site survey checks ↗</Link><Link href="/news/kitchen-installation-timescale#trade-coordination">Plan specialist trade visits ↗</Link><Link href="/news/kitchen-installation-timescale#handover-checklist">Kitchen handover checklist ↗</Link></nav>
    <div className="actions"><Link className="button" href={enquiryHref({ service: "kitchen-installation", installation: "own-kitchen" })}>Discuss my installation scope <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/news/comparing-kitchen-fitting-quotes">Use the kitchen quote comparison guide ↗</Link></div>
  </ServiceSection>;
}
