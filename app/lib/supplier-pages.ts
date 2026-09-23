export type ServiceFAQ = { question: string; answer: string };
export type ServiceDetail = { title: string; copy: string };
export type SupplierPageData = {
  slug: string;
  name: string;
  description: string;
  introduction: string;
  considerations: ServiceDetail[];
  faq: ServiceFAQ;
};

// Supplier names are text slots, not logos or claims of affiliation.
// System references: IKEA UK METOD installation guide; Howdens handleless
// profile installation guide; Wren kitchen installation guide library.
export const supplierPages: SupplierPageData[] = [
  {
    slug: "howdens",
    name: "Howdens",
    description: "Independent Howdens kitchen installation in Luton. Experienced rigid-cabinet fitting, worktops, finishing and complete project coordination by Form & Frame.",
    introduction: "Already have a Howdens kitchen plan? We bring genuine Howdens fitting experience to your installation, from checking the drawings and room through to aligned cabinetry, worktops and the final finishing details.",
    considerations: [
      { title: "Rigid cabinets, accurately set out", copy: "For Howdens rigid-cabinet kitchens, we establish the levels and cabinet positions before securing the runs. Tall units, corners and changes in wall or floor level are considered together so the finished layout follows the agreed plan." },
      { title: "Panels, fillers and worktops", copy: "End panels and fillers need to work with the cabinet alignment and the room. We plan their relationship with worktop overhangs, appliance openings and the final plinth line before fitting." },
      { title: "Handleless details where specified", copy: "Where your chosen kitchen uses a handleless profile system, we check the relevant profile, cabinet and appliance details against the current Howdens instructions. The specification for your actual range guides the installation." },
    ],
    faq: { question: "Can you fit a Howdens handleless kitchen?", answer: "Yes. Send the range name, plan and specification so we can review the profile system, appliance arrangement and finishing components as part of the installation scope." },
  },
  {
    slug: "wren",
    name: "Wren",
    description: "Independent Wren kitchen fitter in Luton. Range-specific installation planning, cabinet fitting, worktops, appliances and coordinated finishing by Form & Frame.",
    introduction: "We independently install customer-supplied Wren kitchens around Luton. We start with your chosen range and full specification, then coordinate the practical work needed to turn the design into a finished kitchen.",
    considerations: [
      { title: "Start with the chosen range", copy: "Wren offers multiple cabinet and range systems. We identify the exact units, supplied assembly format and applicable installation instructions before agreeing the fitting scope; details should not be assumed to be identical across ranges." },
      { title: "Check the full component schedule", copy: "We review cabinet sizes, corner arrangements, panels, fillers and appliance housings against your Wren plan. These checks help establish the setting-out sequence and the finishing materials needed on site." },
      { title: "Coordinate the worktop stage", copy: "We agree who is responsible for fitting or templating the specified worktop and how that fits around the cabinet installation, sink, hob and appliance positions. Specialist worktop work is coordinated where required." },
    ],
    faq: { question: "What Wren information do you need for a quote?", answer: "Please send the plan, range name, unit and appliance schedule, worktop specification and any installation documents supplied with your order. We review the actual system and room before confirming the scope." },
  },
  {
    slug: "ikea",
    name: "IKEA",
    description: "Independent IKEA METOD kitchen installation in Luton. Former dedicated IKEA kitchen fitter in Lithuania, with rail, assembly and appliance fitting experience.",
    introduction: "Our experience includes working as a dedicated IKEA kitchen fitter in Lithuania. We now bring that practical background to independent IKEA kitchen installation in Luton, with careful assembly, setting out and finishing.",
    considerations: [
      { title: "METOD rails and cabinet alignment", copy: "METOD uses a suspension-rail approach to cabinet installation. We check the room, wall construction and fixing requirements, then establish the rail positions and levels in line with the current instructions for the planned layout." },
      { title: "Flat-pack assembly and finishing", copy: "Cabinet assembly is part of the installation scope. We also allow for fillers, cover panels and plinths, with careful setting out so drawers, doors and adjacent surfaces align across the finished kitchen." },
      { title: "Appliances and worktops as one plan", copy: "Integrated appliances, their door arrangements and the specified worktop need to be considered together. We check product instructions, clearances and service positions against the plan before fitting and final adjustment." },
    ],
    faq: { question: "Does your IKEA installation include flat-pack assembly?", answer: "Flat-pack assembly can be included alongside METOD rail fitting, cabinetry, panels, fillers, appliances and worktops. We confirm the full scope from your IKEA plan and order list before providing the final quotation." },
  },
  {
    slug: "magnet",
    name: "Magnet",
    description: "Independent Magnet kitchen installation in Luton. Plan checks, accurate cabinet alignment, panels, worktops and complete fitting coordination by Form & Frame.",
    introduction: "Bring us your Magnet plan and specification for an independently managed installation. We review the supplied kitchen and the room together, with a clear scope from preparation to finishing.",
    considerations: [
      { title: "Review your Magnet specification", copy: "We check the construction and supplied format of the cabinets in your chosen range against the order and installation instructions. Assembly and fitting allowances are based on that specification, rather than assumptions about every Magnet kitchen." },
      { title: "Plan the cabinet and door clearances", copy: "Tall housings, corner units and drawers are checked against walls, openings and the appliance schedule. Accurate levels and considered filler widths help the planned layout work in the actual room." },
      { title: "Resolve the finishing junctions", copy: "We review the supplied end panels, plinths and worktop details with you, including where cabinetry meets existing walls or flooring. Fitting and making-good responsibilities are agreed before work begins." },
    ],
    faq: { question: "Can you install a kitchen I have ordered from Magnet?", answer: "Yes. Send your Magnet plan and order details with room photographs and your postcode. We review the selected products, delivery arrangements and installation requirements before confirming the project." },
  },
  {
    slug: "wickes",
    name: "Wickes",
    description: "Independent Wickes kitchen fitter in Luton. Installation planning, cabinet assembly where needed, appliance integration, worktops and finishing by Form & Frame.",
    introduction: "We fit customer-supplied Wickes kitchens in Luton and nearby areas. Your plan, product list and room conditions form the starting point for a complete, clearly scoped installation.",
    considerations: [
      { title: "Confirm what your order includes", copy: "We review the chosen Wickes range, cabinet format and component list before estimating the assembly and installation work. The instructions supplied for your products guide the fitting details." },
      { title: "Allow for a finished room", copy: "Panels, fillers and plinths need to be included in the plan alongside the main units. We consider how these pieces meet uneven walls, existing finishes and appliance openings." },
      { title: "Sequence appliances and surfaces", copy: "Worktop joints, sink and hob positions, integrated appliances and flooring are reviewed together. We agree the sequence and any specialist-trade requirements before the kitchen is installed." },
    ],
    faq: { question: "Can removal and room preparation be included with a Wickes kitchen fit?", answer: "Yes. We can include old-kitchen removal, preparation and agreed making-good work. Please show us the existing room and confirm what other work is planned so the quotation covers the required scope." },
  },
  {
    slug: "benchmarx",
    name: "Benchmarx",
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
    description: "Independent B&Q kitchen installation in Luton. Cabinet assembly where required, practical layout checks, worktops, appliances and finishing by Form & Frame.",
    introduction: "We install customer-supplied B&Q kitchens with the same attention to setting out and finishing as the rest of our installation work. Send your design and order list for a review of the full project.",
    considerations: [
      { title: "Check the chosen products", copy: "We review your B&Q cabinet range, assembly requirements and product instructions. The quote is based on the components in your order, without assuming a single construction system across all products." },
      { title: "Plan beyond the cabinet list", copy: "Fillers, end panels, plinths and appliance doors are considered alongside the main units. We check their relationship with the room dimensions, door clearances and any existing finishes." },
      { title: "Fit the worktop to the layout", copy: "The worktop specification, joints and sink and hob cut-outs are reviewed with the cabinet positions. We also agree appliance integration, flooring and the extent of making good so these are included in the installation sequence." },
    ],
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
  { question: "Which areas do you cover?", answer: "Luton is our core kitchen installation area. We also consider Dunstable, Houghton Regis, Leighton Buzzard, Harpenden, Hitchin, Flitwick and Ampthill, depending on the location and project scope." },
];
