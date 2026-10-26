import type { Metadata } from "next";
import Link from "next/link";
import { DetailGrid, ServiceFAQs, ServiceQuote, ServiceSection } from "../components/service-page";
import { Footer, Header } from "../components/site-shell";
import { ProjectIndex } from "../components/project-index";
import { joineryCategories } from "../lib/joinery-categories";
import { serviceMetadata } from "../lib/service-metadata";
import { enquiryHref } from "../lib/enquiry";
import { ServiceStructuredData, StructuredData } from "../components/structured-data";
import { PortfolioNavigation } from "../components/portfolio-navigation";
import { filterGalleryProjects, readGalleryFilters } from "../lib/gallery-catalog";
import { filterK01Joinery } from "../lib/case-study-portfolio";
import { siteUrl } from "../lib/site";
import { localServiceAreaCopy } from "../lib/service-coverage";
import { ProjectPreparation } from "../components/project-preparation";

export async function generateMetadata({ searchParams }: PageProps<"/bespoke-joinery">): Promise<Metadata> {
  const filters = readGalleryFilters(await searchParams);
  return {
    ...serviceMetadata("Bespoke Joinery & Fitted Furniture Luton", "Bespoke wardrobes, alcove cupboards, TV units, under-stairs storage and home offices. Based in Luton, with local projects in Dunstable and nearby communities.", "/bespoke-joinery"),
    ...(filters.q || filters.category ? { robots: { index: false, follow: true } } : {}),
  };
}

const process = [
  { title: "Survey & brief", copy: "We review the room, measurements, intended use, finish preferences and practical constraints." },
  { title: "Design & technical coordination", copy: "Layouts, proportions and technical details are developed so the project can be manufactured and installed accurately." },
  { title: "Specialist manufacture", copy: "Where appropriate, cabinetry is produced through selected specialist manufacturing partners to the agreed design and specification." },
  { title: "Installation & final checks", copy: "Form & Frame coordinates installation, adjustment, finishing details and final quality checks on site." },
];

export default async function BespokeJoineryPage({ searchParams }: PageProps<"/bespoke-joinery">) {
  const filters = readGalleryFilters(await searchParams);
  const projects = filterGalleryProjects(filters, "bespoke-joinery");
  const roomItems=filterK01Joinery(filters);
  const collection = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Form & Frame bespoke joinery portfolio", url: `${siteUrl}/bespoke-joinery`,
    mainEntity: { "@type": "ItemList", itemListElement: [...roomItems.map((item,index)=>({"@type":"ListItem",position:index+1,name:item.title,url:`${siteUrl}${item.href}`})), ...projects.map((project, index) => ({
      "@type": "ListItem", position: index + 1 + roomItems.length, name: project.title, url: `${siteUrl}/gallery/${project.slug}`,
    }))] },
  };
  return <div>
    <Header />
    <main id="main-content" className="service-page gallery-page joinery-portfolio-page">
      <ServiceStructuredData name="Bespoke joinery and fitted furniture in Luton" description="Design, technical coordination and installation of fitted wardrobes, alcove units, bookcases, media walls and individual furniture." path="/bespoke-joinery" />
      <StructuredData data={collection} />
      <header className="gallery-hero"><div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Bespoke Joinery</span></nav>
        <h1>Bespoke joinery, room by room</h1>
        <p className="gallery-lead">Fitted furniture planned around your room, from wardrobes and alcove cupboards to TV units and home offices. Based in Luton, serving Dunstable, Houghton Regis and nearby communities.</p>
        <div className="joinery-intro-links"><Link href="#joinery-projects">Browse completed work ↓</Link><Link href="#joinery-brief">Prepare your project brief ↓</Link><Link href={enquiryHref({ service: "bespoke-joinery" })}>Discuss your project ↗</Link></div>
        <nav className="joinery-service-links joinery-service-intro" aria-label="Bespoke joinery services">{joineryCategories.map(category => <Link key={category.slug} href={`/bespoke-joinery/${category.slug}`}>{category.title}<span aria-hidden="true">↗</span></Link>)}</nav>
      </div></header>
      <div id="joinery-projects" className="container joinery-project-introduction"><h2 className="joinery-project-heading">Explore completed joinery</h2><p className="service-prose">Choose a furniture type below or open a project to see the finished details. The Surbiton rooms also include drawings and available installation stages.</p></div>
      <ProjectIndex filters={filters} portfolio="bespoke-joinery" basePath="/bespoke-joinery" compactFilters />
      <ServiceSection title="Furniture designed for the space" eyebrow="Bespoke joinery & fitted furniture" id="joinery-details">
        <PortfolioNavigation current="bespoke-joinery" />
        <p className="service-prose">Fitted furniture designed around the room, with Form & Frame coordinating survey, technical development, specialist manufacture where appropriate, installation and final quality control. Explore the work above, or send us an enquiry if your project brings several types together.</p>
        <p className="service-prose service-prose-spaced">An alcove may need cupboards below and open shelves above; a wardrobe needs a clear balance of hanging, drawers and shelves; a TV unit needs equipment access as well as a place for the screen. Start with what the furniture must hold and how you will use it, then develop the proportions, materials and fittings together.</p>
        <Link className="text-link" href={enquiryHref({ service: "bespoke-joinery" })}>Request a quote <span aria-hidden="true">↗</span></Link>
      </ServiceSection>

    <ServiceSection title="From survey to fitted result" eyebrow="A coordinated process" id="joinery-process" muted>
      <DetailGrid items={process} />
    </ServiceSection>

    <ServiceSection title="How the work is delivered">
      <p className="service-prose">Form & Frame focuses on design, technical coordination, installation and project control. Specialist manufacturing partners may be used for production where that is the most suitable route for the project. Your quotation and specification confirm the agreed responsibilities before work begins.</p>
      <p className="service-prose service-prose-spaced">For a luxury fitted interior, the distinction is in the details: the proportions of the doors, the continuity of the grain, the way lighting meets a shelf and how metal or mirror is integrated into the cabinetry. The galleries above show these details alongside the finished rooms.</p>
      <p className="service-prose service-prose-spaced">Natural veneer, painted surfaces, high-gloss finishes and decorative fittings can be considered within the agreed specification. A photograph is a useful reference, while physical samples establish the material, colour and sheen for your own furniture. <Link href="/guides/joinery-materials-finishes">Read our guide to joinery materials and finishes</Link>.</p>
    </ServiceSection>

    <ServiceSection title="Local fitted-joinery projects" eyebrow="Luton & Dunstable" muted>
      <p className="service-prose">{localServiceAreaCopy}</p>
      <div className="actions"><Link className="text-link" href="/areas/luton">Joinery and fitting in Luton ↗</Link><Link className="text-link" href="/areas/dunstable">Projects in Dunstable ↗</Link><Link className="text-link" href="/areas#local-coverage">Check nearby towns and villages ↗</Link></div>
    </ServiceSection>

    <ServiceSection title="Prepare your fitted-furniture brief" eyebrow="A useful first conversation" id="joinery-brief">
      <ProjectPreparation service="joinery" />
      <p className="service-prose service-prose-spaced">Already have furniture supplied by another company? Our <Link href="/joinery-installation">joinery and furniture installation service</Link> explains that route. If a new kitchen is the main project, start with <Link href="/kitchen-installation">independent kitchen fitting</Link> so we can review the supplier plan and installation responsibilities.</p>
      <div className="actions"><Link className="button" href={enquiryHref({ service: "bespoke-joinery" })}>Send my joinery enquiry <span aria-hidden="true">↗</span></Link></div>
    </ServiceSection>

    <ServiceFAQs items={[
      { question: "Do you manufacture everything in your own workshop?", answer: "Not necessarily. Form & Frame coordinates design, technical details and installation, and may use selected specialist manufacturing partners where appropriate. The project specification confirms how each job will be delivered." },
      { question: "Can you work from my existing design?", answer: "Yes. Existing drawings, references and dimensions can form the starting point, subject to review and site verification before manufacture or installation." },
      { question: "Do you offer wardrobes and media walls?", answer: "Yes. Wardrobes, alcove units, media walls, home offices, utility furniture and selected fitted storage are within the bespoke joinery service." },
    ]} />

    <ServiceQuote enquiryUrl={enquiryHref({ service: "bespoke-joinery" })} whatsappMessage="Hello, I’d like to discuss bespoke joinery or fitted furniture with Form & Frame." title="Tell us about your fitted-joinery project" copy="Send your postcode, room photographs, approximate dimensions, style references and any existing drawings. We can review the project before arranging the next step." action="Send an enquiry" />
    <div className="container service-back-link"><Link className="text-link" href="/services">Back to all services <span aria-hidden="true">↗</span></Link></div>
    </main>
    <Footer />
  </div>;
}
