import Link from "next/link";
import { DetailGrid, ImageTextSection, ServiceFAQs, ServiceGallery, ServicePage, ServiceQuote, ServiceSection } from "../components/service-page";
import { serviceMetadata } from "../lib/service-metadata";
import { enquiryHref } from "../lib/enquiry";

export const metadata = serviceMetadata("Internal Door Installation Luton", "Local internal door fitting around Luton: new doors in existing frames, trimming, hinges, latches, mortice locks and multiple-door installations by Form & Frame.", "/internal-door-installation");

export default function InternalDoorInstallationPage() {
  return <ServicePage enquiryUrl={enquiryHref({ service: "internal-door-installation" })} eyebrow="A supporting local joinery service" title="Internal door installation" introduction="New internal doors, carefully fitted to your home. Alongside our core kitchen installation work, we offer local door fitting for individual openings and multiple-door projects around Luton and nearby areas." parent={{ label: "Services", href: "/services" }} imageKey="internal-door-installation">
    <ImageTextSection imageKey="internal-door-installation" title="A good fit starts with the existing opening" eyebrow="Measure. Fit. Adjust.">
      <p className="service-prose">Existing frames are not always square or consistent from room to room. We assess the openings, door sizes, hardware and floor clearances before agreeing the fitting work. The chosen door must be suitable for the opening and any required trimming.</p>
    </ImageTextSection>
    <ServiceSection title="What the installation can include">
      <DetailGrid items={[
        { title: "Doors in existing frames", copy: "Fit new internal doors into existing frames, with accurate scribing and trimming within the door manufacturer's permitted allowances." },
        { title: "Hinges, latches and locks", copy: "Fit suitable hinges, latches, handles and mortice locks as specified, with careful positioning and adjustment for smooth operation." },
        { title: "Frames and finishing details", copy: "Adjust existing openings and attend to stops, linings and architrave where needed and agreed. Frame repairs or replacement are assessed as part of the scope." },
        { title: "Multiple-door installations", copy: "Plan several doors as one job, checking each opening and coordinating the hardware, clearances and finishing requirements across the home." },
      ]} />
    </ServiceSection>
    <ServiceGallery imageKey="internal-door-installation" title="Internal door project gallery" />
    <ServiceSection title="What to send for an initial quote" muted>
      <p className="service-prose">Tell us your postcode, the number of doors, approximate opening sizes and the door type you have chosen. Photographs of the existing doors, frames and hardware help us review the work. We confirm the condition of the openings and final scope before installation.</p>
    </ServiceSection>
    <ServiceFAQs items={[
      { question: "Can you fit new doors into my existing frames?", answer: "Yes, where the frames are suitable. We assess their condition, dimensions and alignment, and check that the chosen doors allow the necessary fitting adjustments." },
      { question: "Can you fit several internal doors in one project?", answer: "Yes. Send the number of doors and details of each opening so we can plan the work together. Different openings may require different fitting allowances or hardware." },
      { question: "Are handles, locks and architraves included?", answer: "We agree these individually. Hinges, latches, mortice locks, stops, linings and architrave can form part of the fitting scope where needed. The quotation confirms materials, fitting and any making-good work." },
      { question: "Is this separate from your kitchen installation service?", answer: "Yes. Internal door fitting is a supporting local service. Kitchen installation around Luton remains our main focus, and door projects are considered according to location, scope and availability." },
    ]} />
    <ServiceSection title="Planning a kitchen as well?" muted><p className="service-prose">Our main service covers independent kitchen installation, from reviewing your plan and preparing the room through to fitting and coordinated finishing.</p><Link className="text-link" href="/kitchen-installation">Explore kitchen installation <span aria-hidden="true">↗</span></Link></ServiceSection>
    <ServiceQuote enquiryUrl={enquiryHref({ service: "internal-door-installation" })} title="Tell us about your doors" copy="Share your postcode, the number and type of doors, photographs of the frames and your preferred timing. We will review the fitting requirements for an initial quote." action="Discuss my door installation" />
  </ServicePage>;
}
