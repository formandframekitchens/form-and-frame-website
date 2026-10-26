import Image from "next/image";
import Link from "next/link";
import { DetailGrid, ServiceFAQs, ServicePage, ServiceQuote, ServiceSection } from "../components/service-page";
import { serviceMetadata } from "../lib/service-metadata";
import { enquiryHref } from "../lib/enquiry";
import { k01Photo } from "../lib/case-studies";
import { CaseStudyGallery } from "../components/case-study-gallery";

export const metadata = serviceMetadata(
  "Internal & Sliding Door Installation Luton",
  "Internal door fitting in Luton: hinged, glazed, sliding and pocket doors, with careful hardware adjustment and made-to-order options where required.",
  "/internal-door-installation", k01Photo("F58")
);

const doorProjects = [
  {
    src: "/projects/k01/finished/f52.webp",
    alt: "K01 veneered internal door with brass inlay, handle and fitted architraves",
    eyebrow: "Veneered internal door",
    title: "A detailed finish around the opening",
    copy: "A darker timber door can become a strong architectural feature. The installation still depends on accurate fitting to the opening, consistent margins, careful hinge positioning and final hardware adjustment.",
  },
  {
    src: "/projects/k01/finished/f62.webp",
    alt: "K01 glazed double doors with timber frames and brass detailing",
    eyebrow: "Glazed double doors",
    title: "Paired doors need to read as one set",
    copy: "With double doors, the relationship between both leaves matters as much as each individual fit. Meeting lines, floor clearance, hardware positions and the visual gaps are checked together before final adjustment.",
  },
  {
    src: "/projects/k01/finished/f58.webp",
    alt: "K01 glazed door pair with matching veneer, brass inlays and ironmongery",
    eyebrow: "Coordinated door set",
    title: "Matching doors and ironmongery across a scheme",
    copy: "Where several openings form part of the same interior, finishes, glazing, handles and other ironmongery can be coordinated so the individual doors feel consistent as a complete scheme.",
  },
  {
    src: "/projects/k01/finished/f46.webp",
    alt: "K01 loft dressing-room pocket entrance integrated into the wardrobe partition",
    eyebrow: "Sliding & pocket doors",
    title: "When a swinging door is not the right solution",
    copy: "Sliding and pocket-door systems can be considered where the opening and wall construction are suitable. Track or pocket requirements, door weight, access, alignment and final adjustment are reviewed before installation is confirmed.",
  },
];

export default function InternalDoorInstallationPage() {
  const enquiryUrl = enquiryHref({ service: "internal-door-installation" });
  const whatsappMessage = "Hello, I’d like to enquire about internal door installation with Form & Frame.";

  return <ServicePage
    enquiryUrl={enquiryUrl}
    whatsappMessage={whatsappMessage}
    eyebrow="Internal, sliding & made-to-order doors · Luton & nearby areas"
    title="Internal door installation"
    introduction="Careful installation of hinged, glazed, double and sliding internal doors, from straightforward replacements in existing frames to more detailed door sets and made-to-order designs."
    parent={{ label: "Services", href: "/services" }}
    breadcrumbs={[{ label: "Services", href: "/services" }]}
    imageKey="internal-door-installation"
  >
    <ServiceSection title="K01: from door drawings to the finished home" eyebrow="Completed project · Surbiton">
      <p className="service-prose">Form &amp; Frame produced the door drawings, coordinated the door package and ironmongery, and fitted the internal doors as part of the K01 whole-home project. Explore fifteen photographs of the veneered doors, glazed pairs, brass inlays and concealed hinges, together with the original design sheets.</p>
      <div className="service-prose-spaced"><CaseStudyGallery photos={["F58", "F65", "F66"].map(k01Photo)} label="K01 internal-door details" /></div>
      <Link className="text-link" href="/case-studies/k01-surbiton-internal-doors">Explore the K01 internal-door case study ↗</Link>
      <p className="service-prose-spaced">This completed project was in Surbiton. Current door-installation enquiries are focused on Luton, Dunstable and nearby communities.</p>
    </ServiceSection>
    <section className="door-project-story-list" aria-label="Finished internal door installation examples">
      {doorProjects.map((project, index) => (
        <section className={`service-section${index % 2 === 1 ? " service-section-muted" : ""}`} key={project.src}>
          <div className={`container door-feature${index % 2 === 1 ? " door-feature-reverse" : ""}`}>
            <div className="door-feature-image">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 700px) 92vw, (max-width: 1100px) 44vw, 560px"
              />
            </div>
            <div className="door-feature-copy">
              <p className="eyebrow">{project.eyebrow}</p>
              <h2>{project.title}</h2>
              <p>{project.copy}</p>
            </div>
          </div>
        </section>
      ))}
    </section>

    <section className="service-section">
      <div className="container door-feature door-feature-reverse">
        <div className="door-feature-image">
          <Image
            src="/projects/k01/finished/f52.webp"
            alt="K01 veneered internal door with brass inlay and coordinated hardware"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 700px) 92vw, (max-width: 1100px) 44vw, 560px"
          />
        </div>
        <div className="door-feature-copy">
          <p className="eyebrow">Made-to-order doors</p>
          <h2>Doors can also be produced to the required design</h2>
          <p>Alongside installation, Form & Frame can help coordinate doors produced by specialist manufacturers where a project requires a particular design, size, finish, glazing arrangement or specification.</p>
          <p>The design and manufacturing requirements are agreed before production, subject to the manufacturer’s technical limitations. Form & Frame can coordinate measuring, specification and final fitting where those responsibilities are included in the quotation. We do not describe third-party manufactured doors as being made in our own workshop.</p>
        </div>
      </div>
    </section>

    <ServiceSection title="What the installation can include" eyebrow="Practical fitting details" muted>
      <DetailGrid items={[
        { title: "Customer-supplied doors", copy: "New internal doors fitted into suitable existing frames, including trimming and scribing within the door manufacturer’s permitted allowances." },
        { title: "Hinges, handles & locks", copy: "Hinges, latches, handles, mortice locks and other agreed ironmongery can be fitted and adjusted as part of the installation." },
        { title: "Frames, linings & architraves", copy: "Existing frame condition is checked first. Adjustments, linings, stops, architraves or separately scoped repairs can be included where agreed." },
        { title: "Multiple-door projects", copy: "Several openings can be planned as one installation so door types, hardware, clearances and final adjustment are coordinated across the property." },
      ]} />
    </ServiceSection>

    <ServiceSection title="What to send for an initial quote">
      <p className="service-prose">Send your postcode, the number of doors, photographs of each existing opening and the door style you have in mind. Approximate opening dimensions, hardware details and any manufacturer drawings are useful. If you need made-to-order doors, include a reference image or sketch showing the required design.</p>
    </ServiceSection>

    <ServiceFAQs items={[
      { question: "Can you fit new doors into my existing frames?", answer: "Yes, where the frames are suitable. We assess their condition, dimensions and alignment and check that the chosen door allows the necessary fitting adjustments." },
      { question: "Do you install sliding or pocket doors?", answer: "Yes, suitable sliding and pocket-door systems can be considered. We need to review the opening, wall construction, track or pocket requirements and access before confirming the installation." },
      { question: "Can you arrange doors made to a particular design?", answer: "Yes. Where a standard door is not suitable, we can coordinate production through specialist manufacturers to an agreed design, size, material and finish, then install the finished doors as part of the agreed project." },
      { question: "Can you fit several doors in one project?", answer: "Yes. Send details of each opening so the doors, frames, hardware and installation sequence can be reviewed together." },
      { question: "Are handles, locks and architraves included?", answer: "These are agreed for each project. Hinges, latches, mortice locks, handles, stops, linings and architrave can be included where required. The quotation confirms what is supplied, fitted and separately scoped." },
    ]} />

    <ServiceSection title="Planning a kitchen as well?" muted>
      <p className="service-prose">Our main service covers independent kitchen installation, from reviewing your plan and preparing the room through to fitting and coordinated finishing.</p>
      <Link className="text-link" href="/kitchen-installation">Explore kitchen installation <span aria-hidden="true">↗</span></Link>
    </ServiceSection>

    <ServiceQuote
      enquiryUrl={enquiryUrl}
      whatsappMessage={whatsappMessage}
      title="Tell us about your doors"
      copy="Share your postcode, the number and type of doors, photographs of the openings and your preferred timing. If you need sliding or made-to-order doors, include any design references or drawings you already have."
      action="Discuss my door installation"
    />
  </ServicePage>;
}
