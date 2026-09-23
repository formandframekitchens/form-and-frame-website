import Link from "next/link";
import { IndependentNotice, InstallationProcess, InstallationScope, LocalServiceArea, ServiceFAQs, ServicePage, ServiceQuote, ServiceSection, SupplierNavigation, WhyChooseUs } from "../components/service-page";
import { installationContent } from "../lib/service-content";
import { kitchenFAQs } from "../lib/supplier-pages";
import { serviceMetadata } from "../lib/service-metadata";

export const metadata = serviceMetadata("Kitchen Installation in Luton", "Independent kitchen installation around Luton: preparation, cabinet fitting, worktops, appliances and complete project coordination. Send your plan to Form & Frame.", "/kitchen-installation");

export default function KitchenInstallationPage() {
  return <ServicePage eyebrow="Our core service · Luton and nearby towns" title="Kitchen installation in Luton" introduction={installationContent.introduction}>
    <ServiceSection title="Your kitchen. Your choice of supplier." eyebrow="Independent installation" id="suppliers">
      <p className="service-prose">Already chosen your kitchen? Explore our installation service for each supplier below. Other manufacturers are welcome too: send the plan and specification so we can review the work.</p>
      <SupplierNavigation />
      <IndependentNotice />
    </ServiceSection>
    <InstallationScope />
    <WhyChooseUs />
    <InstallationProcess />
    <LocalServiceArea />
    <ServiceSection title="Specialist in-frame installation" eyebrow="A considered fit" muted>
      <p className="service-prose">Inset doors and visible face frames call for careful cabinet setting out and consistent alignment. We offer installation-only for in-frame kitchens supplied by others, as well as a complete design, supply and installation service.</p>
      <Link className="text-link" href="/in-frame-kitchens">Explore in-frame kitchens <span aria-hidden="true">↗</span></Link>
    </ServiceSection>
    <ServiceFAQs items={kitchenFAQs} />
    <ServiceQuote />
  </ServicePage>;
}
