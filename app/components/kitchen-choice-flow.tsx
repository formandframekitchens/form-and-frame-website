import { ServiceSelection } from "./service-selection";
import { kitchenChoices } from "../lib/kitchen-choices";
import Link from "next/link";
import { enquiryHref } from "../lib/enquiry";

export function KitchenChoiceFlow() {
  return <ServiceSelection id="choose-installation" title="Kitchen fitting in Luton and nearby towns" label="Kitchen types and suppliers" choices={kitchenChoices} action="Explore kitchen" className="kitchen-selection" breadcrumbs={[{ label: "Services", href: "/services" }]} introduction={
    <div className="kitchen-fitting-intro">
      <p className="service-prose">Already chosen your kitchen? Form &amp; Frame Kitchens independently installs customer-supplied kitchens, with over 20 years of industry experience. Start with your plans, postcode and room photographs.</p>
      <p className="service-prose service-prose-spaced">Based in Luton, with local enquiries from Dunstable, Houghton Regis and nearby towns welcome. We confirm the fitting scope and site requirements before quoting.</p>
      <div className="actions"><Link className="button" href={enquiryHref({ service: "kitchen-installation", installation: "own-kitchen" })}>Send your kitchen plans <span aria-hidden="true">↗</span></Link><Link className="text-link" href="#installation-process">How installation works <span aria-hidden="true">↓</span></Link></div>
      <p className="service-note">Explore your kitchen type or supplier below. You can enquire before choosing a supplier.</p>
    </div>
  } />;
}
