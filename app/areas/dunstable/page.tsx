import Link from "next/link";
import { EditorialPage } from "../../components/editorial-page";
import { DetailGrid, IndependentNotice, ServiceFAQs, ServiceQuote, ServiceSection } from "../../components/service-page";
import { ServiceStructuredData } from "../../components/structured-data";
import { serviceMetadata } from "../../lib/service-metadata";
import { enquiryHref } from "../../lib/enquiry";

const description = "Independent kitchen fitting in Dunstable. Installation for customer-supplied kitchens, with cabinet fitting, worktop and trade coordination agreed in your quote.";
export const metadata = serviceMetadata("Kitchen Fitter Dunstable | Independent Installation", description, "/areas/dunstable");

export default function DunstablePage() {
  return <EditorialPage title="Kitchen fitting in Dunstable" eyebrow="Independent installation" path="/areas/dunstable" parent={{ label: "Areas", href: "/areas" }} introduction="Already chosen your kitchen? Form & Frame fits customer-supplied kitchens in Dunstable, working from our Luton base. We review the supplier plan and the actual room before agreeing the installation scope and programme.">
    <ServiceStructuredData name="Kitchen installation in Dunstable" description={description} path="/areas/dunstable" areas={["Dunstable"]} />
    <ServiceSection title="Start with the kitchen you have ordered">
      <p className="service-prose">A supplier drawing sets out the proposed layout. The installation review checks how that layout meets the walls, floor, service positions and access in your home. Send the latest revision, rather than an earlier design, together with the cabinet list, appliance models and worktop specification.</p>
      <p className="service-prose service-prose-spaced">We review kitchens from Howdens, Wren, IKEA, Magnet, Wickes and other suppliers. Flat-pack assembly, tall housings, integrated appliance fronts, fillers and decorative panels all affect the work involved. If something has changed since ordering, mark it on the plan before we price the fit.</p>
      <div className="actions"><Link className="text-link" href="/kitchen-installation#independent-fitting">See our independent kitchen fitting scope ↗</Link><Link className="text-link" href="/kitchens">See our public kitchen portfolio ↗</Link></div>
      <IndependentNotice />
    </ServiceSection>
    <ServiceSection title="Agree the responsibilities before installation" muted>
      <DetailGrid items={[
        { title: "The room and delivery", copy: "Confirm who removes the old kitchen, where new units can be stored and when preparation will be complete. Tell us about stairs, restricted access, parking or a shared entrance so delivery and fitting visits can be planned." },
        { title: "Cabinetry and finishing", copy: "Identify the cabinets, appliance housings, end panels, scribes, fillers, plinths and handles to be fitted. The quotation records the agreed scope and any items that remain with the supplier or another trade." },
        { title: "Worktops and services", copy: "Confirm the worktop material, who will template and fit it, and when sinks and appliances can be connected. Gas and electrical work is coordinated with appropriately qualified specialists where required." },
      ]} />
    </ServiceSection>
    <ServiceSection title="See the installation details in our work" eyebrow="Public project evidence">
      <p className="service-prose">Our portfolio shows the fitting work behind the finished rooms. These examples have their own project locations; they illustrate the experience available for your Dunstable installation.</p>
      <div className="service-grid">
        <article><h3>White handleless kitchen and utility</h3><p>Explore cabinet alignment, integrated appliance housings and utility storage in a completed installation.</p><Link className="text-link" href="/gallery/handleless-kitchen-installation">View the kitchen and utility work ↗</Link></article>
        <article><h3>K01: kitchen and whole-home fitting</h3><p>The Surbiton project brings together drawings, progress photographs and finished work, with the design, manufacturer coordination and installation roles explained.</p><Link className="text-link" href="/case-studies/k01-surbiton/kitchen">Follow the Surbiton kitchen installation ↗</Link></article>
      </div>
    </ServiceSection>
    <ServiceSection title="A practical quotation for your Dunstable address">
      <p className="service-prose">Send your postcode, the supplier plan, photographs of each wall and your preferred fitting period. Include the delivery date if it is confirmed. A site visit checks the final dimensions and conditions; photographs alone cannot establish every wall or floor adjustment.</p>
      <p className="service-prose service-prose-spaced">If a builder, electrician, plumber or worktop company is already appointed, tell us what they are doing and when. This makes it easier to agree the sequence and avoid booking cabinet fitting before the room is ready. Installation dates depend on the agreed scope, availability and site readiness.</p>
      <Link className="text-link" href="/news/comparing-kitchen-fitting-quotes">What to compare in a kitchen fitting quote ↗</Link>
      <h3 className="service-prose-spaced">Kitchen installation costs in Dunstable</h3>
      <p className="service-prose">For agreed day-rate work in Dunstable, kitchen installation and removal labour is <strong>£300 per specialist per 8-hour day, with no VAT added</strong>. Materials, waste disposal, additional work, other expenses and specialist gas or electrical work are separate charges. We confirm the working-day arrangements and expected days before booking.</p>
      <p className="service-prose service-prose-spaced">The day rate is not a complete fitted-kitchen price. Our <Link href="/kitchen-installation#kitchen-fitting-prices">kitchen fitting day rate and labour-cost explanation</Link> helps you compare the written labour scope and separate costs. <Link href="/kitchen-installation#labour-calculator">Use the agreed labour-rate calculator</Link> to see how team size and days change the labour amount.</p>
      <p className="service-prose service-prose-spaced">Use our <Link href="/kitchen-installation#fitting-checklist">kitchen fitting enquiry checklist</Link> to gather the plan, appliance details, preparation responsibilities and preferred dates. You can contact us with what you have already; the checklist is a planning aid, not a requirement to complete before enquiring.</p>
      <div className="actions"><Link className="text-link" href="/news/kitchen-installation-timescale">How long does kitchen fitting take? ↗</Link></div>
    </ServiceSection>
    <ServiceFAQs items={[
      { question: "Can you fit a kitchen I bought elsewhere?", answer: "Yes. We provide independent installation for customer-supplied kitchens. Send the supplier drawings, cabinet and appliance information so we can assess the fitting work." },
      { question: "Can you check a project in a nearby town or village?", answer: "Yes. Send your postcode, project scope and access details. Our focus is local work around Luton and Dunstable, with travel and installation arrangements checked before a visit or fitting date is confirmed." },
      { question: "Is the stone worktop fitted at the same time as the cabinets?", answer: "The sequence is agreed with the worktop company. Where a template is taken from installed cabinets, allow for a later worktop fitting visit and the service connections that follow it. We confirm these responsibilities in the project scope." },
      { question: "Do you have a Dunstable showroom?", answer: "Form & Frame is based in Luton and visits customers at their properties. Dunstable is a service area, not a separate branch or showroom." },
    ]} />
    <ServiceQuote title="Discuss your Dunstable kitchen installation" copy="Send your plan, postcode and room photographs. We will review the fitting work and explain the next step." enquiryUrl={enquiryHref({ service: "kitchen-installation", installation: "own-kitchen" })} whatsappMessage="Hello, I'd like to discuss kitchen installation in Dunstable. I can send my plans and postcode." />
  </EditorialPage>;
}
