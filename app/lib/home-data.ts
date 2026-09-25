import { supplierPages } from "./supplier-pages";

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Kitchen Brands", href: "/kitchen-installation#suppliers" },
  { label: "How It Works", href: "/kitchen-installation#installation-process" },
  { label: "Areas", href: "/kitchen-installation#service-areas" },
  { label: "Contact", href: "/contact" },
];

export const manufacturers = [
  ...supplierPages.map(({ name, slug }) => ({ name, href: `/kitchen-installation/${slug}` })),
  { name: "Other manufacturers", href: null },
];

export const processSteps = [
  { title: "Send your plan", copy: "Send the kitchen plan, postcode, room photographs, appliance details and approximate installation date." },
  { title: "Initial scope review", copy: "We review the information remotely, identify the likely fitting scope and highlight anything that needs clarifying." },
  { title: "Home visit", copy: "If the initial scope works for you, we visit the property to confirm site conditions, access, preparation and final requirements." },
  { title: "Final quote & installation", copy: "Once confirmed, we issue the written quotation, agree the sequence and arrange the installation." },
];

export const secondaryServices = [
  { id: "internal-doors", title: "Internal Door Installation", copy: "Hinged, glazed and sliding internal doors fitted and adjusted carefully, with made-to-order doors coordinated through specialist manufacturers where required." },
  { id: "bespoke-joinery", title: "Bespoke Joinery & Fitted Furniture", copy: "Wardrobes, alcove units, media walls, home offices and selected fitted furniture. Design and technical coordination by Form & Frame, with specialist manufacturing partners used where appropriate." },
  { id: "joinery-installation", title: "Joinery & Furniture Installation", copy: "Professional installation of cabinetry and fitted furniture manufactured or supplied by other joinery companies, builders, designers or clients." },
];

export const serviceAreas = [
  "Luton",
  "Dunstable",
  "Harpenden",
  "St Albans",
  "Hemel Hempstead",
  "Hitchin",
  "Welwyn Garden City",
  "Berkhamsted",
  "Leighton Buzzard",
  "Milton Keynes",
  "Bedford",
  "Surrounding Bedfordshire",
  "Surrounding Hertfordshire",
];

export const futureLutonHref = "/areas/luton";

export const faqs = [
  { question: "Do you install kitchens bought from Howdens, Wren or IKEA?", answer: "Yes. We independently install customer-supplied kitchens from Howdens, Wren, IKEA, Magnet, Wickes, Benchmarx, B&Q and other manufacturers. Send your plan so we can review the installation scope." },
  { question: "Can you quote from my kitchen plan?", answer: "We can provide an initial scope review from your plan, postcode, room photographs and approximate installation date. A home visit then confirms site conditions and the final scope before we issue the final quotation." },
  { question: "Do I need a home visit before receiving a price?", answer: "Not for the first review. We start with the plan and project details, then arrange a home visit before confirming the final quotation." },
  { question: "Can you remove my existing kitchen?", answer: "Yes. Old kitchen removal and room preparation can be included in the project. We agree the scope with you before installation." },
  { question: "Can you coordinate electrical and gas work?", answer: "Electrical and gas connections can be coordinated with appropriately qualified tradespeople where required." },
  { question: "Do you fit worktops?", answer: "We fit laminate and solid timber worktops where appropriate, including routed joints and sink and hob cut-outs. Specialist worktops can be coordinated with the relevant fabricator." },
  { question: "Which areas do you cover?", answer: "Luton is our core base. We also consider projects across Dunstable, Harpenden, St Albans, Hemel Hempstead, Hitchin, Welwyn Garden City, Berkhamsted, Leighton Buzzard, Milton Keynes, Bedford and surrounding Bedfordshire and Hertfordshire." },
];

export const homepageServices = [
  { id: "internal-doors", title: "Internal Door Installation", href: "/internal-door-installation", copy: "Hinged, glazed and sliding internal doors, including carefully fitted hardware and made-to-order options." },
  { id: "bespoke-joinery", title: "Bespoke Joinery", href: "/bespoke-joinery", copy: "Wardrobes, alcove units and fitted furniture, with specialist manufacturing partners where appropriate." },
  { id: "joinery-installation", title: "Joinery Installation", href: "/joinery-installation", copy: "Professional installation of cabinetry and fitted furniture supplied by joinery companies, builders and clients." },
];