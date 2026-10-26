import Link from "next/link";
import { localServiceAreaCopy } from "../lib/service-coverage";
import { ImageTextSection, IndependentNotice, InstallationProcess, InstallationScope, LocalServiceArea, ServiceFAQs, ServiceGallery, ServiceQuote, ServiceSection, SupplierNavigation, WhyChooseUs } from "../components/service-page";
import { Footer, Header } from "../components/site-shell";
import { KitchenChoiceFlow } from "../components/kitchen-choice-flow";
import { enquiryHref } from "../lib/enquiry";
import { kitchenFAQs } from "../lib/supplier-pages";
import { serviceMetadata } from "../lib/service-metadata";
import { ServiceStructuredData } from "../components/structured-data";
import { ProjectPreparation } from "../components/project-preparation";
import { InstallationFilm } from "../components/installation-film";
import { KitchenPlanningJourney } from "../components/kitchen-planning-journey";
import { KitchenPricing } from "../components/kitchen-pricing";
import { InstallationProof } from "../components/installation-proof";
import { GoogleReviews } from "../components/google-reviews";

export const metadata = serviceMetadata("Independent Kitchen Fitter Luton", "Independent kitchen fitting in Luton and Dunstable. £300 per specialist/day when agreed, no VAT added. Materials and specialist trades extra. Public liability insured.", "/kitchen-installation");

export default function KitchenInstallationPage() {
  return <>
    <Header />
    <main id="main-content" className="service-page services-hub">
    <KitchenChoiceFlow>
    <ServiceSection title="Choose an independent kitchen installer" eyebrow="Your fitting brief" id="independent-fitting">
      <p className="service-prose">You can arrange the installation separately from buying the kitchen. Our fitting service starts with your room and the work required: full kitchen removal, cabinet assembly where needed, levelling, appliance housings, panels, fillers, plinths and final adjustment. Tiling, worktops, room preparation and finishing can form part of the agreed quotation, with electrical and gas work coordinated through appropriately qualified specialists.</p>
      <p className="service-prose service-prose-spaced">A useful comparison between kitchen fitters is the written scope. Check who handles removal, delivery checks, preparation, connections and making good, and which items remain with the supplier or another trade. Tell us about any builder, electrician, plumber or worktop company already appointed so the installation sequence can be agreed.</p>
      <p className="service-prose service-prose-spaced">For kitchen installation in Luton, Dunstable, Houghton Regis and the surrounding area, send your project postcode and plans. Our <Link href="/areas#local-coverage">local coverage page lists the towns and villages we serve</Link>; travel and site access are checked before booking. You can contact us while choosing the kitchen, without selecting a manufacturer first.</p>
      <p className="service-prose service-prose-spaced">Form &amp; Frame holds public liability insurance.</p>
      <div className="actions"><Link className="text-link" href={enquiryHref({ service: "kitchen-installation", installation: "own-kitchen" })}>Ask about independent kitchen fitting ↗</Link><Link className="text-link" href="/news/comparing-kitchen-fitting-quotes">Compare the installation scope in each quote ↗</Link></div>
    </ServiceSection>
    <KitchenPricing />
    <InstallationProof />
    <GoogleReviews compact />
    <InstallationFilm />
    </KitchenChoiceFlow>
    <ServiceSection title="Explore installation by supplier" eyebrow="Your kitchen, independently fitted" id="suppliers">
      <p className="service-prose">Independent kitchen installation for customer-supplied kitchens in Luton and nearby towns. We also fit kitchens from Benchmarx, B&amp;Q and other suppliers. <Link href="#choose-installation">Explore your kitchen options above</Link>, or tell us about your project below.</p>
      <SupplierNavigation />
      <div className="actions">
        <Link className="text-link" href={enquiryHref({ service: "kitchen-installation", supplier: "other", installation: "own-kitchen" })}>Another or overseas supplier <span aria-hidden="true">↗</span></Link>
        <Link className="text-link" href={enquiryHref({ service: "kitchen-installation", supplier: "not-chosen", installation: "advice" })}>Still choosing my kitchen <span aria-hidden="true">↗</span></Link>
      </div>
      <IndependentNotice />
    </ServiceSection>
    <div id="installation-evidence"><ImageTextSection imageKey="kitchen-installation" title="From a kitchen plan to a finished room" eyebrow="More than cabinet assembly">
      <p className="service-prose">A successful fit begins before the first cabinet is fixed. We review the plan, room photographs, service positions, appliances and worktop specification so that preparation, cabinetry and finishing can be sequenced sensibly.</p>
      <p className="service-prose service-prose-spaced">If you already have a supplier plan, send it with your postcode and preferred installation period. We can establish the likely scope remotely before arranging the site visit used to confirm final conditions and quotation.</p>
      <p className="service-prose service-prose-spaced">See the cabinet alignment, integrated appliances and utility storage in our <Link href="/gallery/handleless-kitchen-installation">completed white handleless kitchen and utility installation</Link>.</p>
      <p className="service-prose service-prose-spaced">For a complete view of design, supplier coordination and fitting, explore <Link href="/case-studies/k01-surbiton">K01: a five-month kitchen and whole-home installation</Link>, with original drawings, site progress and finished details.</p>
      <div className="actions">
        <Link className="text-link" href="/news/kitchen-installation-timescale">How the kitchen fitting programme is planned ↗</Link>
        <Link className="text-link" href="/news/already-bought-your-kitchen">Already ordered? Check your delivery before fitting ↗</Link>
        <Link className="text-link" href="/news/comparing-kitchen-fitting-quotes">What to compare in a kitchen fitting quote ↗</Link>
      </div>
    </ImageTextSection></div>
    <InstallationScope />
    <KitchenPlanningJourney />
    <ServiceSection title="Get your kitchen fitting brief ready" eyebrow="Before your first enquiry" id="fitting-checklist" muted>
      <ProjectPreparation service="kitchen" />
      <div className="actions"><Link className="button" href={enquiryHref({ service: "kitchen-installation", installation: "own-kitchen" })}>Send my fitting enquiry <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/areas#local-coverage">Check our local service areas ↗</Link></div>
    </ServiceSection>
    <WhyChooseUs />
    <ServiceGallery imageKey="kitchen-installation" title="Kitchen installation gallery" />
    <InstallationProcess />
    <LocalServiceArea />
    <ServiceSection title="Specialist in-frame installation" eyebrow="A considered fit" muted>
      <p className="service-prose">Inset doors and visible face frames call for careful cabinet setting out and consistent alignment. We offer installation-only for in-frame kitchens supplied by others, as well as a complete design, supply and installation service.</p>
      <Link className="text-link" href="/in-frame-kitchens">Explore in-frame kitchens <span aria-hidden="true">↗</span></Link>
    </ServiceSection>
    <ServiceFAQs items={[...kitchenFAQs,
      { question: "How much does a kitchen fitter cost in Luton?", answer: "Our agreed day rate for kitchen installation and removal labour is £300 per specialist for eight working hours, with no VAT added. Two specialists cost £600 per agreed day. The total depends on the team size, agreed labour days and scope. Materials, waste disposal, other expenses, additional work and specialist gas or electrical work are charged separately. We confirm the start and finish times, team size and expected number of days before booking." },
      { question: "Can you quote for installation only if I have bought my kitchen?", answer: "Yes. Send the supplier plan, unit list, appliance details, worktop specification and room photographs. Cabinet assembly, panels, fillers, access and preparation affect the fitting cost. We quote for the work needed and keep the kitchen purchase separate from our independent installation." },
      { question: "How much will kitchen removal and tiling add?", answer: "We can undertake full kitchen removal and tiling, but there is no single additional price for every room. Tell us what needs removing, the tiling area and the condition of the surfaces. Removal labour can be included in an agreed day-rate scope; disposal, materials and additional work are priced separately." },
      { question: "What information should I send first?", answer: "Send the supplier plan, postcode, a few photographs of the existing room, your expected installation date, appliance details and worktop information if known. This lets us review the likely fitting scope before a site visit." },
      { question: "Can you work outside Luton?", answer: localServiceAreaCopy }
    ]} />
    <ServiceQuote enquiryUrl={enquiryHref({ service: "kitchen-installation" })} />
    </main>
    <ServiceStructuredData name="Independent kitchen installation" description="Independent fitting of customer-supplied kitchens in Luton and nearby towns. Send your plans, postcode and room photographs for an installation enquiry." path="/kitchen-installation" />
    <Footer />
  </>;
}
