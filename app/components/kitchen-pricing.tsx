import Link from "next/link";
import { enquiryHref } from "../lib/enquiry";
import { LabourCalculator } from "./labour-calculator";
import { DetailGrid, ServiceSection } from "./service-page";

export function KitchenPricing() {
  return <ServiceSection title="Kitchen fitting prices in Luton and nearby areas" eyebrow="Know the starting point" id="kitchen-fitting-prices" muted>
    <p className="kitchen-day-rate"><strong>£300</strong> per specialist per 8-hour day <span>No VAT added</span></p>
    <p className="service-prose">For kitchen installation and removal labour where a day-rate arrangement is agreed in advance. The rate covers eight working hours for one installation specialist. Travel within Luton and our agreed nearby service area is included in the day rate. Two specialists are £600 per agreed day, with no VAT added. This is labour pricing, not the price of a complete kitchen installation. We confirm your project location, team size, start and finish times, work covered and expected number of days before booking.</p>
    <DetailGrid items={[
      { title: "Agree the labour scope", copy: "Share your plans and room photographs so we can review the fitting and removal work. The agreed number of specialists and labour days determines that part of the price; a written quotation sets out the project scope and any separately priced work." },
      { title: "Allow for the separate costs", copy: "Materials, waste disposal and other expenses are additional. Additional work and specialist gas or electrical work are charged separately. These items are discussed and priced for your project; they are not included in the £300 labour day rate." },
    ]} />
    <h3 className="kitchen-price-breakdown">How much does kitchen installation labour cost?</h3>
    <p className="service-prose">For agreed day-rate work, multiply £300 by the number of specialists and the agreed days. For example, one specialist for three agreed days is £900; two specialists for three agreed days are £1,800, with no VAT added. This is an arithmetic example, not an estimate that your kitchen will take three days. Materials, disposal, specialist trades and any separately agreed work are added to the project budget.</p>
    <p className="service-prose service-prose-spaced">The installation cost depends on the actual plan: cabinet assembly, the number and type of units, panels and fillers, worktops, appliance housings, access and the condition of the room. Removal and preparation also affect the programme. Send these details so we can estimate your fitting work rather than apply an assumed price per kitchen.</p>
    <p className="service-prose service-prose-spaced">Need more than cabinet fitting? We can undertake full kitchen removal and tiling, and coordinate electrical and gas work with appropriately qualified specialists. Tell us which parts you need and which trades are already appointed so the quotation covers the complete plan.</p>
    <LabourCalculator />
    <div className="actions"><Link className="button" href={enquiryHref({ service: "kitchen-installation", installation: "own-kitchen" })}>Discuss my fitting price <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/news/comparing-kitchen-fitting-quotes">Compare kitchen fitting quotes ↗</Link><Link className="text-link" href="#planning-survey">See what the installation scope should cover ↓</Link></div>
  </ServiceSection>;
}
