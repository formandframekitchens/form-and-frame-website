import Link from "next/link";
import { EditorialPage } from "../../components/editorial-page";
import { GalleryProjectCard } from "../../components/gallery-project-card";
import { ServiceQuote, ServiceSection } from "../../components/service-page";
import { publicGalleryProjects } from "../../lib/gallery-projects";
import { serviceMetadata } from "../../lib/service-metadata";

export const metadata = serviceMetadata("Bespoke Joinery Materials & Finishes Guide", "Choosing wood veneer, painted MDF, high-gloss finishes, mirrors and metal details for fitted furniture. A practical guide from Form & Frame in Luton.", "/guides/joinery-materials-finishes");
const examples = ["G08", "G11", "G44"].map(id => publicGalleryProjects.find(project => project.galleryId === id)!);

export default function MaterialsPage() {
  return <EditorialPage title="Choosing materials and finishes for bespoke joinery" eyebrow="A practical furniture guide" path="/guides/joinery-materials-finishes" introduction="The surface you see is one part of a furniture specification. The core, edge treatment, coating, hardware and installation details all contribute to how a fitted piece looks and works.">
    <ServiceSection title="Wood veneer and the cabinet beneath it">
      <p className="service-prose">Wood veneer is a thin layer of real timber applied to a supporting material. It allows the grain and character of wood to be used across broad cabinet fronts, wall panels and fitted shelves. A veneered panel is different from solid timber throughout, and both can have a place in a carefully specified piece of furniture.</p>
      <p className="service-prose service-prose-spaced">MDF can be used as a substrate for veneered furniture. The finished specification should identify the core as well as the face material, together with the edge detail and coating. The visible grain alone does not tell you what is underneath; decorative wood-effect surfaces can also have a convincing grain pattern.</p>
      <p className="service-prose service-prose-spaced">For a large wardrobe or bookcase, discuss the direction of the grain, how adjacent fronts relate to each other and whether the same finish continues inside. Review a physical sample in the room light. Natural variation is part of a timber surface and should be considered when agreeing the appearance.</p>
    </ServiceSection>
    <ServiceSection title="Painted furniture, matt finishes and high gloss" muted>
      <p className="service-prose">A painted finish provides colour without a prominent timber pattern. It can suit traditional framed doors, simple contemporary fronts or cabinetry intended to sit quietly against the walls. The substrate, preparation, edge treatment and coating system should be specified together rather than reduced to a colour name alone.</p>
      <p className="service-prose service-prose-spaced">High gloss describes the reflective appearance of a surface. It does not, by itself, identify paint: a clear finish over veneer or a manufactured decorative surface may also be glossy. In our project photographs, “high-gloss” describes the visible finish unless a more specific material is confirmed.</p>
      <p className="service-prose service-prose-spaced">Gloss catches reflections and emphasises long lines, door alignment and panel junctions. A lower-sheen finish gives a softer appearance. Compare samples beside the intended flooring, wall colour and lighting, and ask about cleaning and repair requirements for the exact finish being proposed.</p>
    </ServiceSection>
    <ServiceSection title="Metal inlays, handles and trims">
      <p className="service-prose">A fine metal line can define a cabinet edge, frame a door or connect the divisions across a wall of joinery. Handles add another tactile detail. Their colour, texture, size and position should be considered with the furniture finish rather than selected at the end.</p>
      <p className="service-prose service-prose-spaced">A warm metallic appearance does not always mean solid brass. The specification should distinguish the underlying metal from any plating, coating or patina. Photographs are useful for discussing the visual effect; a sample and written specification establish what will actually be supplied.</p>
    </ServiceSection>
    <ServiceSection title="Mirrors, glass and fitted lighting" muted>
      <p className="service-prose">Mirrored backing can bring depth to a display cabinet, while glazed wardrobe doors keep accessories visible. Shelf lighting can make a bookcase or dressing room easier to use as well as changing its evening appearance. These features need room in the design for fixings, wiring and future access.</p>
      <p className="service-prose service-prose-spaced">Agree the glass specification, lighting position and switching before manufacture. In bathrooms and other demanding environments, material suitability, edge protection and the maintenance requirements deserve particular attention. The project specification should reflect the actual conditions of the room.</p>
    </ServiceSection>
    <ServiceSection title="See the details in completed furniture">
      <div className="gallery-card-grid">{examples.map(project => <GalleryProjectCard key={project.slug} project={project} />)}</div>
    </ServiceSection>
    <ServiceSection title="What to agree before manufacture" muted>
      <ul className="joinery-considerations">
        <li>The cabinet construction, substrate, visible face material and edge treatment.</li>
        <li>Approved finish samples, colour, sheen and grain direction.</li>
        <li>Handles, hinges, drawer systems, lighting and any metal or glass details.</li>
        <li>Technical drawings, access for services and the installation responsibilities.</li>
        <li>The cleaning, care and maintenance information for the specified materials.</li>
      </ul>
      <p className="service-prose service-prose-spaced">Form &amp; Frame coordinates these decisions with selected specialist manufacturing partners where appropriate. Explore <Link href="/bespoke-joinery">bespoke fitted furniture</Link> or <Link href="/bespoke-kitchens">bespoke kitchens</Link>, then send the references and room details that matter to your project.</p>
    </ServiceSection>
    <ServiceQuote title="Discuss the finish for your furniture" copy="Send your postcode, room photographs and a few references. Tell us which materials, colours and details you like." enquiryUrl="/contact?service=bespoke-joinery#enquiry-form" />
  </EditorialPage>;
}
