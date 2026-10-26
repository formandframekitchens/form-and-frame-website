import { localServiceAreaCopy } from "../lib/service-coverage";
import Link from "next/link";
import { GalleryProjectCard } from "../components/gallery-project-card";
import { CaseStudyRoomCard } from "../components/case-study-room-card";
import { k01PortfolioItems } from "../lib/case-study-portfolio";
import { k01Photo } from "../lib/case-studies";
import { PortfolioNavigation } from "../components/portfolio-navigation";
import { ProjectEvidenceGrid } from "../components/project-evidence-grid";
import { DetailGrid, ServiceQuote, ServiceSection } from "../components/service-page";
import { Footer, Header } from "../components/site-shell";
import { enquiryHref } from "../lib/enquiry";
import { filterGalleryProjects } from "../lib/gallery-catalog";
import { serviceMetadata } from "../lib/service-metadata";
import { siteUrl } from "../lib/site";

const projects = filterGalleryProjects({ category: "", q: "" }, "kitchens");
const enquiryUrl = enquiryHref({ service: "kitchen-installation" });

export const metadata = serviceMetadata(
  "Kitchens | Installation & Project Portfolio",
  "Explore real kitchen fitting work by Form & Frame, with installation services for Luton, Dunstable and nearby communities. Cabinetry, detailing and project coordination.",
  "/kitchens", k01Photo("F14")
);

export default function KitchensPage() {
  const collection = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Form & Frame kitchens", url: `${siteUrl}/kitchens`,
    mainEntity: { "@type": "ItemList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "K01 — Bespoke kitchen installation", url: `${siteUrl}/case-studies/k01-surbiton/kitchen` },
      ...projects.map((project, index) => ({ "@type": "ListItem", position: index + 2, name: project.title, url: `${siteUrl}/gallery/${project.slug}` }))
    ] },
  };
  return <div>
    <Header />
    <main id="main-content" className="gallery-page service-page kitchens-portfolio">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />
      <header className="gallery-hero"><div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Kitchens</span></nav>
        <p className="eyebrow">Independent fitting · Luton based</p>
        <h1>Kitchens, from plan to fitted detail</h1>
        <p className="gallery-lead">A kitchen has to work as well as it looks. Explore our kitchen portfolio, from cabinet lines and appliance housings to the smaller details that bring an installation together.</p>
        <div className="actions portfolio-actions"><Link className="button" href={enquiryUrl}>Enquire about installation</Link><Link className="text-link" href="/kitchen-installation">Explore kitchen fitting services ↗</Link></div>
        <PortfolioNavigation current="kitchens" />
      </div></header>
      <section className="gallery-index" id="kitchen-projects" aria-label="Kitchen project portfolio"><div className="container">
        <p className="eyebrow">Real project photographs</p>
        <div className="gallery-card-grid portfolio-project-grid">{k01PortfolioItems.filter(item=>item.chapter.id==="kitchen").map(item=><CaseStudyRoomCard key={item.href} item={item} priority/>)}{projects.map(project => <GalleryProjectCard key={project.slug} project={project} />)}</div>
      </div></section>
      <ServiceSection title="Follow one kitchen from drawing to finished room" eyebrow="K01 · Surbiton" id="kitchen-journey">
        <p className="service-prose">The Surbiton kitchen brings together measured drawings, cabinetry ordered from bespoke fabricators and manufacturers, and installation coordinated with the stone and other trades. Choose a stage to see the original project record.</p>
        <ProjectEvidenceGrid items={[
          { title: "The drawings", copy: "Kitchen layouts and separate stone drawings establish the arrangement before the fitted room takes shape.", image: { src: "/projects/k01/drawings/kitchen-1.webp", alt: "Public kitchen design drawing for the K01 Surbiton project" }, href: "/case-studies/k01-surbiton/kitchen#kitchen-panel-design", action: "See kitchen and stone drawings" },
          { title: "The installation", copy: "Selected site photographs follow room preparation, the carcasses and the island structure during fitting.", image: { ...k01Photo("P12"), fit: "cover" }, href: "/case-studies/k01-surbiton/kitchen#kitchen-panel-site", action: "See the work on site" },
          { title: "The finished room", copy: "Explore the island, glazed lift-up cabinet, wall panelling and smaller glass-shelf details in the completed kitchen.", image: { ...k01Photo("F14"), fit: "cover" }, href: "/case-studies/k01-surbiton/kitchen#kitchen-panel-finished", action: "See the finished kitchen" },
        ]} />
        <p className="service-prose service-prose-spaced">Planning a kitchen locally? Our <Link href="/kitchen-installation#independent-fitting">independent fitting service</Link> covers Luton, Dunstable and the nearby service area. Share the actual plan and postcode so we can review your project.</p>
      </ServiceSection>
      <ServiceSection title="The fitting details behind the finished room" eyebrow="Installation scope" muted>
        <p className="service-prose">The plan, site conditions and agreed specification establish what is included. We review the sequence before fitting starts, with responsibilities set out in the quotation.</p>
        <DetailGrid items={[
          { title: "Cabinets, levels and alignment", copy: "Cabinet positioning, levelling, secure fixing and door or drawer adjustment need to work together across the room." },
          { title: "Panels, fillers and finishing", copy: "End panels, fillers, scribes, plinths and trims are planned around the cabinetry and the actual walls and floors." },
          { title: "Appliances and worktops", copy: "Appliance housings, access and clearances are reviewed alongside the worktop specification. Specialist templating and fitting responsibilities are agreed with the fabricator." },
          { title: "Trade coordination", copy: "Plumbing, electrical and gas requirements are identified during scope review. Work requiring a qualified or registered specialist is allocated to the appropriate trade." },
        ]} />
        <Link className="text-link" href="/kitchen-installation#installation-process">See the installation process ↗</Link>
      </ServiceSection>
      <ServiceSection title="Choose the right starting point" eyebrow="Homeowners, designers and trade partners">
        <div className="portfolio-route-grid">
          <article><h3>Already have a kitchen plan?</h3><p>Send the supplier drawings, postcode and room photographs. We can review the fitting scope, site preparation and specialist work required.</p><Link className="text-link" href="/kitchen-installation">Customer-supplied kitchen installation ↗</Link></article>
          <article><h3>Planning a bespoke kitchen?</h3><p>Explore a kitchen specified for your space, with design, technical coordination and specialist manufacture where appropriate.</p><Link className="text-link" href="/bespoke-kitchens">Bespoke kitchens ↗</Link><Link className="text-link" href="/in-frame-kitchens">In-frame kitchens ↗</Link></article>
          <article><h3>Looking for installation support?</h3><p>Kitchen suppliers, designers and building contractors can share the drawings, location and proposed responsibilities to discuss a project. Any appointment or partnership is agreed separately.</p><Link className="text-link" href={enquiryUrl}>Discuss an installation project ↗</Link><a className="text-link" href="/downloads/form-and-frame-installation-portfolio.pdf" download data-analytics="portfolio-download">Download installation portfolio</a><p className="service-note">PDF · 2 pages · 436 KB. K01 scope, drawings, site record and finished work.</p></article>
        </div>
      </ServiceSection>
      <ServiceSection title="Kitchen projects around Luton" eyebrow="Service area" muted>
        <p className="service-prose">{localServiceAreaCopy}</p>
        <Link className="text-link" href="/areas">Explore our service areas ↗</Link>
      </ServiceSection>
      <ServiceQuote enquiryUrl={enquiryUrl} title="Send us your kitchen plan" copy="A supplier plan, room photographs and postcode give us a useful starting point. Tell us what is already arranged and what still needs coordinating." action="Make an installation enquiry" whatsappMessage="Hello, I'd like to discuss a kitchen installation with Form & Frame." />
    </main>
    <Footer />
  </div>;
}
