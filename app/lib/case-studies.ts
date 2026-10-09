export type CaseStudyPublicationStatus = "draft" | "published";

export type CaseStudyMediaSlot = {
  id: string;
  label: string;
  kind: "photography" | "drawing" | "document";
  brief: string;
  required: boolean;
  asset?: {
    approved: boolean;
    src: string;
    alt: string;
  } & (
    | { format: "image"; width: number; height: number }
    | { format: "pdf" }
  );
};

export type CaseStudySection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  highlights?: readonly string[];
  mediaSlotIds?: readonly string[];
};

export type CaseStudy = {
  projectCode: string;
  slug: string;
  status: CaseStudyPublicationStatus;
  publicationApproved: boolean;
  title: string;
  location: string;
  duration: string;
  summary: string;
  seo: { title: string; description: string };
  facts: readonly { label: string; value: string }[];
  sections: readonly CaseStudySection[];
  media: readonly CaseStudyMediaSlot[];
  relatedLinks: readonly { label: string; href: string }[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    projectCode: "K01",
    slug: "k01-surbiton",
    status: "draft",
    publicationApproved: false,
    title: "A whole-home joinery project in Surbiton",
    location: "Surbiton, London",
    duration: "Approximately six months",
    summary: "A kitchen and coordinated suite of fitted furniture, taken from detailed drawings and manufacture planning through to on-site assembly, finishing and installation.",
    seo: {
      title: "Surbiton Kitchen & Bespoke Joinery Case Study | Form & Frame",
      description: "A Surbiton kitchen and whole-home fitted joinery project by Form & Frame, covering design development, manufacture coordination and installation.",
    },
    facts: [
      { label: "Location", value: "Surbiton, London" },
      { label: "Programme", value: "Approximately six months" },
      { label: "Scope", value: "Kitchen plus fitted joinery across the home" },
      { label: "Delivery", value: "Design, manufacture coordination and installation" },
    ],
    sections: [
      {
        id: "brief",
        eyebrow: "The brief",
        title: "One considered language, from kitchen to loft",
        paragraphs: [
          "The project centred on a kitchen with an island and a corner return incorporating integrated shelving. Its scope extended across the house to a TV unit, hallway cabinets, two bedroom wardrobes and a loft walk-in wardrobe with a makeup table and drawers.",
          "The aim was to resolve these individual requirements as one coordinated body of work, with the details, production information and installation sequence considered together.",
        ],
        mediaSlotIds: ["hero", "whole-home"],
      },
      {
        id: "design-development",
        eyebrow: "Design development",
        title: "Drawings translated into buildable parts",
        paragraphs: [
          "Detailed drawings informed part lists for manufacture, CNC work and drilling. This created a practical bridge between the design intent and the information needed by the factory.",
          "The kitchen planning included the island, return shelving and appliance details, including procurement of the Quooker and coordination of the associated plumbing requirements.",
        ],
        highlights: ["Drawing set and key dimensions", "Kitchen plan and elevations", "Joinery details and material schedule"],
        mediaSlotIds: ["kitchen-drawings", "joinery-drawings"],
      },
      {
        id: "manufacture",
        eyebrow: "Manufacture coordination",
        title: "Production planned with the factory",
        paragraphs: [
          "Materials and parts were ordered through a factory in Welwyn Garden City. Part lists prepared from the drawings supported manufacturing, CNC machining and drilling, while ironmongery was selected and ordered to suit each element.",
          "That preparation allowed the delivered components to be assembled, adjusted and finished on site with a clear relationship back to the original drawings.",
        ],
        mediaSlotIds: ["manufacture-progress"],
      },
      {
        id: "installation",
        eyebrow: "Installation",
        title: "A six-month programme assembled and finished on site",
        paragraphs: [
          "Form & Frame installed the kitchen and fitted furniture, including the TV unit, hallway storage, bedroom wardrobes and loft walk-in wardrobe. Assembly and final finishing were completed on site as the wider house programme progressed.",
          "Kitchen delivery also involved plumbing coordination for the Quooker and coordination with the contractor's electrician. Regulated work remained with the relevant qualified trades.",
        ],
        mediaSlotIds: ["installation-progress", "finished-details"],
      },
      {
        id: "technical-challenges",
        eyebrow: "Technical challenge",
        title: "Making an unusually wide lift-up cabinet work",
        paragraphs: [
          "The approximately 1.5-metre-wide top lift-up cabinets exceeded what the standard Blum hardware could satisfactorily support. Rather than compromise the intended elevation, an alternative piston and mechanism arrangement was adapted for the span.",
          "Other bespoke details included metal within the doors, metal plinths and a precise finger-pull detail around the fridge.",
        ],
        highlights: ["Alternative lift mechanism", "Metal door details", "Metal plinths", "Fridge finger-pull detail"],
        mediaSlotIds: ["lift-mechanism", "metal-details"],
      },
      {
        id: "coordination",
        eyebrow: "Multi-trade coordination",
        title: "Joinery sequenced within the wider house completion",
        paragraphs: [
          "Alongside the joinery programme, Form & Frame coordinated with the people completing the lighting, staircase and landscaping. This was programme and interface coordination: specialist and regulated work was carried out by the appropriate contractors, not represented as Form & Frame's own trade work.",
        ],
        mediaSlotIds: ["coordination-progress"],
      },
      {
        id: "outcome",
        eyebrow: "Outcome",
        title: "A connected set of rooms, resolved as one project",
        paragraphs: [
          "The completed work brings the kitchen, living spaces, bedrooms, hallway and loft together through a consistent approach to fitted furniture. Final photography, drawings and verified measurements will be added only after the project assets have been supplied and approved for publication.",
        ],
        mediaSlotIds: ["outcome-wide", "outcome-kitchen", "outcome-joinery"],
      },
    ],
    media: [
      { id: "hero", label: "Lead project image", kind: "photography", brief: "Wide kitchen view showing island and corner return; landscape crop with clear copy space.", required: true },
      { id: "whole-home", label: "Whole-home overview", kind: "photography", brief: "A short sequence establishing the TV unit, hallway cabinets, bedrooms and loft joinery.", required: true },
      { id: "kitchen-drawings", label: "Kitchen drawings", kind: "drawing", brief: "Approved plan and elevations with the island, return and appliance positions; redact all private identifiers.", required: true },
      { id: "joinery-drawings", label: "Joinery drawing set", kind: "document", brief: "Selected wardrobe, TV unit and loft drawings exported to an accessible PDF with address data removed.", required: true },
      { id: "manufacture-progress", label: "Manufacture progress", kind: "photography", brief: "Genuine factory, labelled-part or component imagery with permission confirmed.", required: false },
      { id: "installation-progress", label: "Installation progress", kind: "photography", brief: "On-site assembly and fitting sequence without people or private information unless approved.", required: true },
      { id: "finished-details", label: "Finished joinery details", kind: "photography", brief: "Close views of alignment, internals, drawers and transitions between elements.", required: true },
      { id: "lift-mechanism", label: "Lift-up mechanism", kind: "photography", brief: "Open and closed views explaining the adapted piston arrangement safely.", required: true },
      { id: "metal-details", label: "Custom metalwork", kind: "photography", brief: "Door metal, plinth and fridge finger-pull details with consistent scale and lighting.", required: true },
      { id: "coordination-progress", label: "House coordination", kind: "photography", brief: "Approved contextual progress material showing interfaces, not unrelated trade claims.", required: false },
      { id: "outcome-wide", label: "Final wide view", kind: "photography", brief: "Primary finished kitchen composition in landscape and portrait crops.", required: true },
      { id: "outcome-kitchen", label: "Kitchen sequence", kind: "photography", brief: "Island, return shelving, appliance wall and working details.", required: true },
      { id: "outcome-joinery", label: "Fitted furniture sequence", kind: "photography", brief: "TV unit, hallway, bedroom and loft furniture with captions matched to each room.", required: true },
    ],
    relatedLinks: [
      { label: "Bespoke kitchens", href: "/bespoke-kitchens" },
      { label: "Bespoke joinery", href: "/bespoke-joinery" },
      { label: "Joinery installation", href: "/joinery-installation" },
      { label: "Discuss a project", href: "/contact" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function isCaseStudyPublished(study: CaseStudy) {
  return study.status === "published" && study.publicationApproved &&
    study.media.every(slot => slot.asset ? slot.asset.approved : !slot.required);
}

export const publishedCaseStudies = caseStudies.filter(isCaseStudyPublished);
export const unpublishedCaseStudyPaths = caseStudies.filter(study => !isCaseStudyPublished(study))
  .map(study => `/case-studies/${study.slug}`);
