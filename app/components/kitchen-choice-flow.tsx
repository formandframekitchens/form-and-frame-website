import { ServiceSelection } from "./service-selection";
import { kitchenChoices } from "../lib/kitchen-choices";
import Link from "next/link";
import { enquiryHref } from "../lib/enquiry";
import type { ReactNode } from "react";

export function KitchenChoiceFlow({ children }: { children?: ReactNode }) {
  return <ServiceSelection id="choose-installation" title="Independent kitchen fitting in Luton" label="Kitchen types and suppliers" choices={kitchenChoices} action="Explore kitchen" className="kitchen-selection" breadcrumbs={[{ label: "Services", href: "/services" }]} introduction={
    <div className="kitchen-fitting-intro">
      <p className="service-prose">Already chosen your kitchen? Form &amp; Frame Kitchens independently installs customer-supplied kitchens, with over 20 years of industry experience. Start with your plans, postcode and room photographs.</p>
      <p className="service-prose service-prose-spaced">Based in Luton, with local enquiries from Dunstable, Houghton Regis and nearby towns welcome. We confirm the fitting scope and site requirements before quoting.</p>
      <p className="service-note kitchen-rate-summary"><strong>Agreed day-rate work: £300 per specialist per day, no VAT added.</strong> <Link href="#kitchen-fitting-prices">See the labour scope and separate costs</Link>.</p>
      <div className="actions"><Link className="button" href={enquiryHref({ service: "kitchen-installation", installation: "own-kitchen" })}>Send your kitchen plans <span aria-hidden="true">↗</span></Link><Link className="text-link" href="#installation-process">How installation works <span aria-hidden="true">↓</span></Link></div>
      <nav className="service-note" aria-label="Kitchen fitting information">You can enquire before choosing a supplier. <Link href="#planning-survey">Plan the survey and responsibilities</Link>, <Link href="#fitting-checklist">prepare your fitting checklist</Link> or <Link href="#installation-proof">see completed installation work</Link>.</nav>
    </div>
  } beforeChoices={children} />;
}
