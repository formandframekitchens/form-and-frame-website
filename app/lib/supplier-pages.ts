import { localServiceAreaCopy } from "./service-coverage";

export type ServiceFAQ = { question: string; answer: string };
export type ServiceDetail = { title: string; copy: string };
export type SupplierPageData = {
  slug: string;
  name: string;
  description: string;
  introduction: string;
  quoteNote: string;
  considerations: ServiceDetail[];
  faq: ServiceFAQ;
  planning?: { title: string; eyebrow: string; checked: string; relatedArticle: { label: string; href: string }; items: ServiceDetail[]; sources: { label: string; href: string }[] };
  additionalFAQs?: ServiceFAQ[];
};

// Supplier names are text slots, not logos or claims of affiliation.
// System references: IKEA UK METOD installation guide; Howdens handleless
// profile installation guide; Wren kitchen installation guide library.
export const supplierPages: SupplierPageData[] = [
  {
    slug: "howdens",
    name: "Howdens",
    quoteNote: "Include the cabinet schedule, handleless profiles if specified, end panels and worktop arrangements. A rigid cabinet still needs setting out, fixing, alignment and finishing; the order and room determine the labour allowance.",
    description: "Independent Howdens kitchen installation in Luton. Experienced rigid-cabinet fitting, worktops, finishing and complete project coordination by Form & Frame.",
    introduction: "Already have a Howdens kitchen plan? We bring genuine Howdens fitting experience to your installation, from checking the drawings and room through to aligned cabinetry, worktops and the final finishing details.",
    considerations: [
      { title: "Rigid cabinets, accurately set out", copy: "For Howdens rigid-cabinet kitchens, we establish the levels and cabinet positions before securing the runs. Tall units, corners and changes in wall or floor level are considered together so the finished layout follows the agreed plan." },
      { title: "Panels, fillers and worktops", copy: "End panels and fillers need to work with the cabinet alignment and the room. We plan their relationship with worktop overhangs, appliance openings and the final plinth line before fitting." },
      { title: "Handleless details where specified", copy: "Where your chosen kitchen uses a handleless profile system, we check the relevant profile, cabinet and appliance details against the current Howdens instructions. The specification for your actual range guides the installation." },
    ],
    planning: {
      title: "Three checks before a Howdens installation",
      eyebrow: "Range, finishes & worktops",
      checked: "19 October 2026",
      relatedArticle: { label: "Read our mixed-finish kitchen planning notes", href: "/news/howdens-mixed-finish-kitchen-planning" },
      items: [
        { title: "Confirm the handleless system", copy: "Send the exact range, cabinet schedule, profile finish and appliance models. We review horizontal and tower profiles, end pieces and appliance-door arrangements against the instructions for that system before setting out. A handleless appearance alone does not specify the components needed." },
        { title: "Agree the finished panel layout", copy: "Mark which finish belongs on each door, exposed end, filler and island back. With mixed finishes, include the edge and corner details on the plan. Keep an approved sample and a single drawing revision so the order and installation refer to the same decisions." },
        { title: "Prepare for the stone template", copy: "Howdens’ template guidance requires the base cupboards and corner posts to be fixed, level and square, with walls prepared. We agree readiness with the worktop provider, including the actual sink, hob, tap and appliance details. Panel sequencing can depend on whether upstands or splashbacks are being templated; confirm it before the appointment." },
      ],
      sources: [
        { label: "Howdens kitchen installation manual — handleless section (PDF)", href: "https://www.howdens.com/-/media/howdens/assets/clh_asset_products/clh_asset_levela_108973/clh_asset_levelb_110531/ass_25527203.pdf" },
        { label: "Howdens template-and-fit preparation guidance", href: "https://www.howdens.com/help-and-advice/installation-guides/how-to-plan-for-a-template-and-fit-worktop" },
      ],
    },
    additionalFAQs: [{ question: "When should the stone worktop be templated?", answer: "Once the worktop provider’s preparation requirements are met and the relevant cabinetry and design decisions are final. We coordinate that stage with the provider rather than treating a delivery date as proof the room is ready. Send the worktop specification with your plan so the fitting sequence can be agreed." }],
    faq: { question: "Can you fit a Howdens handleless kitchen?", answer: "Yes. Send the range name, plan and specification so we can review the profile system, appliance arrangement and finishing components as part of the installation scope." },
  },
  {
    slug: "wren",
    name: "Wren",
    quoteNote: "Send the chosen range, supplied assembly format and component schedule. Compare removal, preparation, worktops and connections line by line if you also have a Wren installation quotation, so both prices cover the same responsibilities.",
    description: "Independent Wren kitchen fitter in Luton. Range-specific installation planning, cabinet fitting, worktops, appliances and coordinated finishing by Form & Frame.",
    introduction: "We independently install customer-supplied Wren kitchens around Luton. We start with your chosen range and full specification, then coordinate the practical work needed to turn the design into a finished kitchen.",
    considerations: [
      { title: "Start with the chosen range", copy: "Wren offers multiple cabinet and range systems. We identify the exact units, supplied assembly format and applicable installation instructions before agreeing the fitting scope; details should not be assumed to be identical across ranges." },
      { title: "Check the full component schedule", copy: "We review cabinet sizes, corner arrangements, panels, fillers and appliance housings against your Wren plan. These checks help establish the setting-out sequence and the finishing materials needed on site." },
      { title: "Coordinate the worktop stage", copy: "We agree who is responsible for fitting or templating the specified worktop and how that fits around the cabinet installation, sink, hob and appliance positions. Specialist worktop work is coordinated where required." },
    ],
    planning: {
      title: "Agree the scope of your Wren kitchen fit",
      eyebrow: "Supply-only, fitting & trade coordination",
      checked: "20 October 2026",
      relatedArticle: { label: "Plan your Wren corner-storage opening", href: "/news/wren-corner-storage-fitting-checks" },
      items: [
        { title: "Confirm who is fitting the kitchen", copy: "Wren describes supply-only orders as products bought from Wren with fitting arranged separately. If you choose Form & Frame, our written quotation sets out our independent installation scope. If comparing it with Wren’s own dry-fit service, use the installation guide in your Wren charter pack to compare the same work." },
        { title: "Name each trade and handover", copy: "Agree removal, room preparation, plumbing, electrical and gas work, worktop templating, finishing and waste arrangements before booking. Wren’s FAQ treats connections and other supplementary work separately from its fitting service. We confirm the coordination we will provide and who is responsible for each stage, including specialist connections where required." },
        { title: "Match the fittings to the order", copy: "Send the final range, cabinet codes, appliance models and storage specification with the drawings. Wren’s guide library is organised by collection and component. Corner mechanisms, integrated appliance doors, panels and fillers need the instructions for the actual products; include their clearances and service access in the fitting review." },
      ],
      sources: [
        { label: "Wren supply-only orders and replacement items", href: "https://www.wrenkitchens.com/faqs/supply-only" },
        { label: "Wren installation and supplementary-work FAQs", href: "https://www.wrenkitchens.com/faqs/wren-installation" },
        { label: "Wren installation guides by collection and component", href: "https://www.wrenkitchens.com/installation-guides" },
      ],
    },
    additionalFAQs: [
      { question: "Does dry-fit installation include plumbing and electrical connections?", answer: "Do not assume that it does. Wren’s installation FAQ separates appliance fitting from connections and describes water, gas and electrical work as supplementary. Check the charter pack for your order. For our independent installation, we agree these responsibilities in the written scope and coordinate appropriately qualified tradespeople where required." },
      { question: "Who handles missing or damaged Wren components?", answer: "Your purchase remains with Wren. Its current supply-only FAQ directs replacement requests through Replacement Orders in the Wren app or My Account. Keep the item reference and photographs, and tell us what is affected so we can review the fitting sequence. We cannot promise a supplier replacement date." },
    ],
    faq: { question: "What Wren information do you need for a quote?", answer: "Please send the plan, range name, unit and appliance schedule, worktop specification and any installation documents supplied with your order. We review the actual system and room before confirming the scope." },
  },
  {
    slug: "ikea",
    name: "IKEA",
    quoteNote: "Show which cabinets need flat-pack assembly and include the IKEA item list, system, appliance models and service positions. Assembly, fixing preparation, cover panels and appliance integration all affect the fitting allowance.",
    description: "Independent IKEA kitchen installation in Luton and Dunstable. METOD planning, flat-pack assembly, service-position checks and coordinated fitting by Form & Frame.",
    introduction: "Our experience includes working as a dedicated IKEA kitchen fitter in Lithuania. We now bring that practical background to independent IKEA kitchen installation in Luton, with careful assembly, setting out and finishing.",
    considerations: [
      { title: "METOD rails and cabinet alignment", copy: "METOD uses a suspension-rail approach to cabinet installation. We check the room, wall construction and fixing requirements, then establish the rail positions and levels in line with the current instructions for the planned layout." },
      { title: "Flat-pack assembly and finishing", copy: "Cabinet assembly is part of the installation scope. We also allow for fillers, cover panels and plinths, with careful setting out so drawers, doors and adjacent surfaces align across the finished kitchen." },
      { title: "Appliances and worktops as one plan", copy: "Integrated appliances, their door arrangements and the specified worktop need to be considered together. We check product instructions, clearances and service positions against the plan before fitting and final adjustment." },
    ],
    planning: {
      title: "Prepare your IKEA kitchen for installation",
      eyebrow: "System, fixings & service positions",
      checked: "21 October 2026",
      relatedArticle: { label: "Plan the fitting sequence and timescale", href: "/news/kitchen-installation-timescale" },
      items: [
        { title: "Identify METOD or ENHET first", copy: "Send the IKEA planning drawings and item numbers, including any products you already own. METOD suspension-rail guidance is not an installation template for every IKEA system. For ENHET, we use the assembly and fixing instructions for each ordered cabinet and check the matching legs, doors and finishing components. Confirm replacement availability with IKEA before planning around an older order." },
        { title: "Check the wall and the finished levels", copy: "IKEA’s METOD guide calls for suitable supporting walls and fixings, with rail positions set against the planned layout and floor levels. The ENHET cabinet instructions also require secure fixing appropriate to the wall or floor. Show us the existing wall condition and any planned flooring changes so preparation and fixing requirements can be agreed before fitting." },
        { title: "Resolve services before the cabinets arrive", copy: "Mark water, waste, sockets, extraction and lighting on the current plan alongside the actual appliance models. We review these positions against drawers, cabinet backs and the manufacturer’s installation requirements. An assumed gap behind a cabinet is not a service plan. Agree any relocation, connection work and access for maintenance with the responsible trades before cabinetry is fixed." },
      ],
      sources: [
        { label: "IKEA UK — METOD kitchen installation guide (PDF)", href: "https://www.ikea.com/gb/en/files/pdf/68/5b/685bdadb/metod-installation-guide.pdf" },
        { label: "IKEA UK — ENHET base cabinet assembly instructions (PDF)", href: "https://www.ikea.com/gb/en/assembly_instructions/enhet-base-cb-w-shelf-white__AA-2179061-6-100.pdf" },
        { label: "IKEA UK — ENHET cabinet components and fixing requirements", href: "https://www.ikea.com/gb/en/p/enhet-base-cb-w-shelf-white-20440423/" },
      ],
    },
    additionalFAQs: [
      { question: "Can existing pipes and sockets stay where they are?", answer: "Only after the layout and product instructions have been checked. Send clear photographs and the appliance model numbers with your IKEA plan. We identify conflicts with the proposed cabinetry and agree the preparation and specialist connections needed. There is no single clearance that can safely be assumed for every cabinet and appliance." },
      { question: "What should I send for an IKEA kitchen fitting quote?", answer: "Send the latest plan, itemised order, system name, appliance models and worktop details, plus room photographs and your project postcode. Mark any parts already assembled, missing items and services that need moving. We confirm travel, access and the independent fitting scope for Luton, Dunstable and nearby projects before booking." },
    ],
    faq: { question: "Does your IKEA installation include flat-pack assembly?", answer: "Flat-pack assembly can be included alongside METOD rail fitting, cabinetry, panels, fillers, appliances and worktops. We confirm the full scope from your IKEA plan and order list before providing the final quotation." },
  },
  {
    slug: "magnet",
    name: "Magnet",
    quoteNote: "Confirm whether your Magnet order is ready to assemble or factory assembled, then include the final plan, finishing components and worktop specification. Keep the kitchen purchase and any supplier installation package separate from our independent labour quotation.",
    description: "Independent Magnet kitchen installation in Luton. Plan checks, accurate cabinet alignment, panels, worktops and complete fitting coordination by Form & Frame.",
    introduction: "Bring us your Magnet plan and specification for an independently managed installation. We review the supplied kitchen and the room together, with a clear scope from preparation to finishing.",
    considerations: [
      { title: "Review your Magnet specification", copy: "We check the construction and supplied format of the cabinets in your chosen range against the order and installation instructions. Assembly and fitting allowances are based on that specification, rather than assumptions about every Magnet kitchen." },
      { title: "Plan the cabinet and door clearances", copy: "Tall housings, corner units and drawers are checked against walls, openings and the appliance schedule. Accurate levels and considered filler widths help the planned layout work in the actual room." },
      { title: "Resolve the finishing junctions", copy: "We review the supplied end panels, plinths and worktop details with you, including where cabinetry meets existing walls or flooring. Fitting and making-good responsibilities are agreed before work begins." },
    ],
    planning: {
  "title": "Keep the Magnet order and independent fit connected",
  "eyebrow": "Plan approval, components and installation scope",
  "checked": "25 October 2026",
  "relatedArticle": {
    "label": "Compare independent fitting quotations",
    "href": "/news/comparing-kitchen-fitting-quotes"
  },
  "items": [
    {
      "title": "Review the plan before the fit is booked",
      "copy": "Magnet’s UK installation information allows customers to use an independent fitter and asks that fitter to approve the plans before work. Send the latest plan and order schedule for our site review; confirm any revisions with your Magnet designer before components are ordered or fitting dates fixed."
    },
    {
      "title": "Identify the supplied cabinet format",
      "copy": "Magnet lists ready-to-assemble and factory-assembled cabinet options. Confirm the exact range and format on your order, along with panels, fillers, hinges and integrated appliance fronts. The assembly allowance and installation instructions must match the products delivered."
    },
    {
      "title": "Compare the same responsibilities",
      "copy": "Keep Magnet’s own installation package separate from our independent quotation. Confirm removal, disposal, preparation, worktops and specialist connections line by line. Supplier installation guarantees or after-care benefits must not be assumed to apply to an independently arranged fit."
    }
  ],
  "sources": [
    {
      "label": "Magnet — installation options and cabinet formats",
      "href": "https://www.magnet.co.uk/installation/"
    },
    {
      "label": "Magnet Trade — product installation guides",
      "href": "https://www.magnettrade.co.uk/instructions-guides/"
    }
  ]
},
    faq: { question: "Can you install a kitchen I have ordered from Magnet?", answer: "Yes. Send your Magnet plan and order details with room photographs and your postcode. We review the selected products, delivery arrangements and installation requirements before confirming the project." },
  },
  {
    slug: "wickes",
    name: "Wickes",
    quoteNote: "Include the Wickes range, cabinet format, worktops and appliance list. Let us know whether the old kitchen needs removing and which surfaces need preparation or tiling, so these stages can be priced alongside the fit.",
    description: "Independent Wickes kitchen fitter in Luton. Installation planning, cabinet assembly where needed, appliance integration, worktops and finishing by Form & Frame.",
    introduction: "We fit customer-supplied Wickes kitchens in Luton and nearby areas. Your plan, product list and room conditions form the starting point for a complete, clearly scoped installation.",
    considerations: [
      { title: "Confirm what your order includes", copy: "We review the chosen Wickes range, cabinet format and component list before estimating the assembly and installation work. The instructions supplied for your products guide the fitting details." },
      { title: "Allow for a finished room", copy: "Panels, fillers and plinths need to be included in the plan alongside the main units. We consider how these pieces meet uneven walls, existing finishes and appliance openings." },
      { title: "Sequence appliances and surfaces", copy: "Worktop joints, sink and hob positions, integrated appliances and flooring are reviewed together. We agree the sequence and any specialist-trade requirements before the kitchen is installed." },
    ],
    planning: {
  "title": "Prepare the Wickes products and the room together",
  "eyebrow": "Order details, surfaces and specialist work",
  "checked": "25 October 2026",
  "relatedArticle": {
    "label": "Plan the survey and specialist visits",
    "href": "/news/kitchen-installation-timescale#trade-coordination"
  },
  "items": [
    {
      "title": "Match instructions to the actual order",
      "copy": "Wickes publishes separate guidance for cabinets, drawers, worktops and appliances. Supply the chosen range, cabinet codes and appliance models with the plan. Resolve any product or component mismatch before assembly rather than treating a general online guide as the specification for every kitchen."
    },
    {
      "title": "Agree the worktop specification early",
      "copy": "Worktop joints, cut-outs and supports depend on the selected material and appliances. Confirm the exact product instructions and which work is included in the fitting quote. A timber or laminate worktop and a separately templated stone surface can require different preparation and visits."
    },
    {
      "title": "Coordinate removal and service positions",
      "copy": "Identify the existing water, gas and electrical arrangements before removal. We can scope removal and tiling alongside fitting, while specialist connections are separately agreed with appropriately qualified trades. Confirm those responsibilities and any room preparation before the new units conceal access."
    }
  ],
  "sources": [
    {
      "label": "Wickes — kitchen installation planning guide",
      "href": "https://www.wickes.co.uk/ideas-advice/DIY-kitchen-installation"
    },
    {
      "label": "Wickes — worktop fitting and preparation guide",
      "href": "https://www.wickes.co.uk/how-to-guides/kitchens/fit-a-kitchen-worktop"
    }
  ]
},
    faq: { question: "Can removal and room preparation be included with a Wickes kitchen fit?", answer: "Yes. We can include old-kitchen removal, preparation and agreed making-good work. Please show us the existing room and confirm what other work is planned so the quotation covers the required scope." },
  },
  {
    slug: "benchmarx",
    name: "Benchmarx",
    quoteNote: "Send the final Benchmarx plan and component schedule, and identify any work your builder will complete first. Room readiness, panels, worktop visits and the division of work between trades determine the installation scope.",
    description: "Independent Benchmarx kitchen installation in Luton. Cabinet setting out, panels, worktop integration and coordinated installation from Form & Frame.",
    introduction: "We independently install kitchens supplied by Benchmarx, working from your plan and product specification. The focus is on accurate fitting and coordinating the whole installation around the room.",
    considerations: [
      { title: "Work from the final Benchmarx plan", copy: "We check the cabinet schedule and specified fittings against the final drawings and relevant instructions. Any assembly or preparation work is agreed for the products actually supplied." },
      { title: "Align runs and tall housings", copy: "Levels, corners and tall-unit positions are set out together. We account for the room geometry and appliance openings before fixing cabinets and finishing the door and drawer alignment." },
      { title: "Connect the finishing details", copy: "End panels, fillers, plinths and worktop edges should read as one fitted kitchen. We review these junctions, service positions and the scope of surrounding making-good work before installation." },
    ],
    faq: { question: "Can you coordinate a Benchmarx installation with my builder?", answer: "Yes. We can agree the installation scope and sequence with your builder, including room readiness, delivery, service positions and any work by other trades. Responsibilities are confirmed before fitting starts." },
  },
  {
    slug: "b-and-q",
    name: "B&Q",
    quoteNote: "Send the B&Q order list, cabinet assembly requirements and details of any appliances bought elsewhere. Panels, fillers, worktop joints and appliance-door arrangements need to be included alongside the main cabinets when comparing fitting prices.",
    description: "Independent B&Q kitchen installation in Luton. Cabinet assembly where required, practical layout checks, worktops, appliances and finishing by Form & Frame.",
    introduction: "We install customer-supplied B&Q kitchens with the same attention to setting out and finishing as the rest of our installation work. Send your design and order list for a review of the full project.",
    considerations: [
      { title: "Check the chosen products", copy: "We review your B&Q cabinet range, assembly requirements and product instructions. The quote is based on the components in your order, without assuming a single construction system across all products." },
      { title: "Plan beyond the cabinet list", copy: "Fillers, end panels, plinths and appliance doors are considered alongside the main units. We check their relationship with the room dimensions, door clearances and any existing finishes." },
      { title: "Fit the worktop to the layout", copy: "The worktop specification, joints and sink and hob cut-outs are reviewed with the cabinet positions. We also agree appliance integration, flooring and the extent of making good so these are included in the installation sequence." },
    ],
    planning: {
      title: "Check B&Q storage before ordering",
      eyebrow: "Cabinet system & storage",
      checked: "31 October 2026",
      relatedArticle: { label: "See our independent kitchen-fitting scope", href: "/kitchen-installation" },
      items: [
        { title: "Separate fitting width from cabinet size", copy: "A storage fitting's width is not the cabinet size it needs. For example, B&Q lists Pebre pull-out 5059340141022 as 45 cm wide and specifies a 50 cm larder or tall larder cabinet; the cabinet is not included. Confirm the cabinet and storage codes together before ordering." },
        { title: "Identify the handleless cabinet system", copy: "Caraway Innovo has its own cabinet and rail system. Its planning overview excludes the 80 cm and 100 cm kidney-shaped Pebre pull-outs. Check the manual for your actual cabinet and mechanism instead of assuming every GoodHome fitting is interchangeable." },
        { title: "Show the opening and nearby services", copy: "Send the storage reference, cabinet code, door-opening direction and room photographs with your plan. Include nearby appliance doors, handles, walls and any pipes inside the cupboard. We review the movement and access as part of the agreed installation scope; the exact product instructions determine the fitting requirements." },
      ],
      sources: [
        { label: "B&Q Pebre 5059340141022 - fitting and cabinet sizes", href: "https://www.diy.com/departments/goodhome-pebre-grey-soft-close-lh-rh-larder-45cm-pull-out-storage/5059340141022_BQ.prd" },
        { label: "B&Q Caraway Innovo overview - internal storage, printed page 29 (PDF)", href: "https://media.diy.com/is/content/KingfisherDigital/IdeasAdvice-InstallationGuide-GoodHome-CarawayInnovo-HandlelessKitchens~c5260f5ea8876ecc04bbf2316e1ee78d25c1b027pdf" },
      ],
    },
    additionalFAQs: [{ question: "Will any B&Q pull-out fit my existing cupboard?", answer: "Compatibility depends on the cabinet system, usable opening, mechanism and door arrangement. Send the exact references and photographs before ordering. A similar door style or a matching overall width does not confirm that a fitting will work in an existing cupboard." }],
    faq: { question: "Can you fit a B&Q kitchen with appliances bought elsewhere?", answer: "We can review that arrangement. Send the appliance model details and installation instructions with your kitchen plan so we can check the housings, door arrangements, clearances and service requirements before agreeing the fit." },
  },
];

export function getSupplier(slug: string) {
  return supplierPages.find((supplier) => supplier.slug === slug);
}

export const kitchenScope: ServiceDetail[] = [
  { title: "Prepare the room", copy: "Old-kitchen removal where required, room preparation and a check of the layout, levels and service positions before fitting begins." },
  { title: "Fit the cabinetry", copy: "Assembly where needed, cabinet installation, accurate levelling and alignment, followed by panels, fillers, scribes, plinths and final door and drawer adjustment." },
  { title: "Worktops and appliances", copy: "Laminate and solid timber worktop fitting, routed joints and sink and hob cut-outs, plus appliance positioning and integration. Specialist worktops are coordinated as required." },
  { title: "Coordinate and finish", copy: "Agreed flooring, tiling, basic making good and decoration. Electrical and gas connections are coordinated with appropriately qualified tradespeople where required." },
];

export const kitchenFAQs: ServiceFAQ[] = [
  { question: "Can you coordinate the complete installation?", answer: "Yes. We agree a scope covering preparation, fitting and finishing, with one point of contact for coordination. Old-kitchen removal, flooring and making good can be included. Electrical and gas connections are coordinated with appropriately qualified tradespeople." },
  { question: "How do I get an initial installation quote?", answer: "Send your kitchen plan, postcode, room photographs and approximate fitting date. We review these remotely for an initial installation price range, then confirm site conditions and the final scope at a home visit before issuing the final quotation." },
  { question: "Which areas do you cover?", answer: localServiceAreaCopy },
];
