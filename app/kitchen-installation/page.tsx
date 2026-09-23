import Link from "next/link";
import { ImageTextSection, IndependentNotice, InstallationProcess, InstallationScope, LocalServiceArea, ServiceFAQs, ServiceGallery, ServicePage, ServiceQuote, ServiceSection, SupplierNavigation, WhyChooseUs } from "../components/service-page";
import { installationContent } from "../lib/service-content";
import { kitchenFAQs } from "../lib/supplier-pages";
import { serviceMetadata } from "../lib/service-metadata";

export const metadata = serviceMetadata("Kitchen Installation in Luton", "Independent kitchen installation from Luton across Bedfordshire and Hertfordshire: preparation, cabinet fitting, worktops, appliances and complete project coordination.", "/kitchen-installation");

export default function KitchenInstallationPage() {
  return <ServicePage eyebrow="Our core service · Luton, Bedfordshire & Hertfordshire" title="Kitchen installation, properly coordinated" introduction={installationContent.introduction} imageKey="kitchen-installation">
    <ServiceSection title="Your kitchen. Your choice of supplier." eyebrow="Independent installation" id="suppliers">
      <p className="service-prose">Already chosen your kitchen? Explore our installation service for each supplier below. Other manufacturers are welcome too: send the plan and specification so we can review the work, the room and the installation sequence.</p>
      <SupplierNavigation />
      <IndependentNotice />
    </ServiceSection>
    <ImageTextSection imageKey="kitchen-installation" title="From a kitchen plan to a finished room" eyebrow="More than cabinet assembly">
      <p className="service-prose">A successful fit begins before the first cabinet is fixed. We review the plan, room photographs, service positions, appliances and worktop specification so that preparation, cabinetry and finishing can be sequenced sensibly.</p>
      <p className="service-prose service-prose-spaced">If you already have a supplier plan, send it with your postcode and preferred installation period. We can establish the likely scope remotely before arranging the site visit used to confirm final conditions and quotation.</p>
    </ImageTextSection>
    <InstallationScope />
    <WhyChooseUs />
    <ServiceGallery imageKey="kitchen-installation" title="Kitchen installation gallery" />
    <InstallationProcess />
    <LocalServiceArea />
    <ServiceSection title="Specialist in-frame installation" eyebrow="A considered fit" muted>
      <p className="service-prose">Inset doors and visible face frames call for careful cabinet setting out and consistent alignment. We offer installation-only for in-frame kitchens supplied by others, as well as a complete design, supply and installation service.</p>
      <Link className="text-link" href="/in-frame-kitchens">Explore in-frame kitchens <span aria-hidden="true">↗</span></Link>
    </ServiceSection>
    <ServiceFAQs items={[...kitchenFAQs,
      { question: "What information should I send first?", answer: "Send the supplier plan, postcode, a few photographs of the existing room, your expected installation date, appliance details and worktop information if known. This lets us review the likely fitting scope before a site visit." },
      { question: "Can you work outside Luton?", answer: "Yes. Luton is the core base, with projects considered across Dunstable, Harpenden, St Albans, Hemel Hempstead, Hitchin, Welwyn Garden City, Berkhamsted, Leighton Buzzard, Milton Keynes, Bedford and surrounding Bedfordshire and Hertfordshire." }
    ]} />
    <ServiceQuote />
  </ServicePage>;
}