import Image from "next/image";
import Link from "next/link";
import { DetailGrid, ServiceFAQs, ServicePage, ServiceQuote, ServiceSection } from "../components/service-page";
import { serviceMetadata } from "../lib/service-metadata";
import { enquiryHref } from "../lib/enquiry";

export const metadata = serviceMetadata(
  "Internal & Sliding Door Installation Luton",
  "Internal and sliding door installation around Luton, including hinged, glazed, double and pocket doors, hardware, frames and made-to-order doors coordinated with specialist manufacturers.",
  "/internal-door-installation"
);

const doorProjects = [
  {
    src: "/images/internal-doors/bespoke-dark-timber-panelled-internal-door.jpg",
    alt: "Dark stained panelled internal door with bronze hardware",
    caption: "Panelled timber door with detailed frame and bronze hardware",
    position: "50% 48%",
  },
  {
    src: "/images/internal-doors/sliding-pocket-door-and-folding-door-installation.jpg",
    alt: "Sliding pocket door opening with matching dark timber finish",
    caption: "Sliding and folding door work with coordinated timber finish",
    position: "58% 50%",
  },
  {
    src: "/images/internal-doors/glazed-black-oak-double-internal-doors.jpg",
    alt: "Glazed black oak double internal doors with brass inlay",
    caption: "Glazed double-door installation with brass detailing",
    position: "50% 54%",
  },
  {
    src: "/images/internal-doors/dark-glazed-double-doors-brass-detail.jpg",
    alt: "Dark glazed double internal doors with brass detailing",
    caption: "Dark glazed double doors used as a room-dividing feature",
    position: "50% 50%",
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
    imageKey="internal-door-installation"
  >
    <ServiceSection title="Door installation for straightforward and detailed openings" eyebrow="Measure. Fit. Adjust.">
      <p className="service-prose">A good result starts with the opening. We check the frame, dimensions, floor clearances, door construction, hardware and the amount of trimming or adjustment permitted before the fitting work is agreed.</p>
      <DetailGrid items={[
        { title: "Hinged doors in existing frames", copy: "New internal doors fitted into suitable existing frames, including accurate trimming, scribing, hinge preparation and final adjustment." },
        { title: "Double & glazed door sets", copy: "Paired and glazed doors can be installed where the opening, frame and hardware are suitable, with attention to even gaps, alignment and meeting stiles." },
        { title: "Sliding & pocket doors", copy: "Sliding and pocket-door systems can be considered for suitable openings. Track, pocket, lining and access requirements are reviewed before installation is confirmed." },
        { title: "Hardware & finishing details", copy: "Hinges, latches, mortice locks, handles, stops, linings and architrave can be included where specified and agreed." },
      ]} />
    </ServiceSection>

    <section className="service-section service-section-muted">
      <div className="container door-feature">
        <div className="door-feature-image">
          <Image
            src="/images/internal-doors/sliding-pocket-door-and-folding-door-installation.jpg"
            alt="Sliding pocket door opening with matching dark timber finish"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div className="door-feature-copy">
          <p className="eyebrow">Sliding & pocket doors</p>
          <h2>When a swinging door is not the right solution</h2>
          <p>Sliding and pocket doors can free up wall and floor space and can also create a cleaner transition between rooms. The exact system depends on the wall construction, opening size, track or pocket detail, door weight and the access available for installation.</p>
          <p>Send photographs, approximate opening dimensions and any manufacturer drawings you already have. We can review whether the proposed system is suitable before finalising the work.</p>
        </div>
      </div>
    </section>

    <section className="service-section">
      <div className="container door-feature door-feature-reverse">
        <div className="door-feature-image">
          <Image
            src="/images/internal-doors/bespoke-dark-timber-panelled-internal-door.jpg"
            alt="Dark stained panelled internal door with bronze hardware"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div className="door-feature-copy">
          <p className="eyebrow">Made-to-order doors</p>
          <h2>Doors can also be produced to the required design</h2>
          <p>If a standard off-the-shelf door does not suit the room, Form & Frame can coordinate made-to-order door production through specialist manufacturers. The design, dimensions, material, finish, glazing and hardware requirements are agreed before production.</p>
          <p>Form & Frame can remain the practical point of contact for measuring, specification, manufacturer coordination and installation where these items are included in the quotation. We do not describe third-party manufactured doors as being made in our own workshop.</p>
        </div>
      </div>
    </section>

    <ServiceSection title="Finished door installations" eyebrow="Genuine project photography" muted>
      <p className="service-prose">A selection of completed door work supplied from Form & Frame project photography. The images show different door styles and installation details; they are not stock or manufacturer catalogue images.</p>
      <div className="door-project-gallery">
        {doorProjects.map(project => <figure className="door-project-card" key={project.src}>
          <div className="door-project-image">
            <Image
              src={project.src}
              alt={project.alt}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
              style={{ objectPosition: project.position }}
            />
          </div>
          <figcaption>{project.caption}</figcaption>
        </figure>)}
      </div>
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
