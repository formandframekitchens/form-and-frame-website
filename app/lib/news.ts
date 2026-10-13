export type NewsArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  checked: string;
  projectId: string;
  sections: { title: string; paragraphs: string[]; checklist?: string[] }[];
  sources: { title: string; url: string }[];
  links: { label: string; href: string }[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "egger-26-plus-materials-textures",
    title: "EGGER Decorative Collection 26+: choosing texture with the whole room in mind",
    description: "A look at EGGER’s 26+ collection, followed by practical questions about samples, edges and the specification of fitted furniture.",
    category: "Materials & textures", published: "2026-10-13", checked: "2026-10-13", projectId: "G08",
    sections: [
      { title: "What the manufacturer is showing", paragraphs: ["EGGER’s UK Decorative Collection 26+ presents 268 decor and texture combinations, including three new textures. Its range includes coordinated boards, laminates and edging. Those combinations offer a starting point for specifying a consistent appearance across furniture components; the exact product and application still need to be checked with the supplier."] },
      { title: "Start with a physical sample", paragraphs: ["A small screen image is useful for building a shortlist, but it cannot show how a finish feels or how the room’s light moves across it. Put samples next to the actual flooring, wall colour and any worktop you intend to retain. Look at them in daylight and under the lighting you use in the evening.", "Consider the scale of the pattern as well as the colour. A texture that looks quiet on a small swatch may become more pronounced across a full-height wardrobe. Ask to see a larger sample or a representative panel before settling a prominent run of doors."] },
      { title: "Specify the face, core and edge together", paragraphs: ["A wood reproduction is a decorative surface, not evidence of real wood veneer. If you want real timber veneer, describe that explicitly in the brief. For either option, the written specification should identify the face material, supporting board, thickness, edge treatment and proposed use.", "Coordinated products do not remove the need to inspect a junction. Compare the edge against the face, look at an internal corner and decide how any exposed cabinet ends will be finished. On a long run of furniture, also agree the direction of the pattern and how adjacent doors will relate to one another."] },
      { title: "Questions to resolve before ordering", paragraphs: ["The best shortlist works for the way the furniture will be used. A display cabinet, a home office and a utility cupboard have different demands. Ask for the care instructions and the product’s suitability for the intended location, particularly around moisture, heat or frequent cleaning."], checklist: ["Record the exact decor, texture and product reference, not just a colour name.", "Approve the edge, handle and interior finish alongside the visible fronts.", "Confirm availability, lead time and a suitable alternative before finalising the programme.", "Keep an approved sample with the agreed drawings and written specification."] },
      { title: "Turning a material reference into fitted furniture", paragraphs: ["Form & Frame can review references as part of the design, technical coordination and installation brief, with specialist manufacturing partners where appropriate. The photograph here is an example of existing project work to discuss proportions and detailing. It does not identify an EGGER product or a finish from the new collection."] },
    ],
    sources: [{ title: "EGGER UK — Decorative Collection 26+", url: "https://www.egger.com/en/furniture-interior-design/decorative-collection/?country=GB" }],
    links: [{ label: "Compare joinery materials and finishes", href: "/guides/joinery-materials-finishes" }, { label: "Explore bespoke joinery galleries", href: "/bespoke-joinery" }],
  },
  {
    slug: "warm-kitchen-colours-2026",
    title: "Warm kitchen colours: moving from a trend to a room that works",
    description: "Terracotta, tonal palettes and practical sample checks: how to use current kitchen ideas without losing sight of light, storage and installation.",
    category: "Kitchen ideas", published: "2026-10-13", checked: "2026-10-13", projectId: "G01",
    sections: [
      { title: "Two current references", paragraphs: ["Wickes reports that its Whitworth Terracotta kitchen won Best Use of Colour at the Ideal Home Kitchen Awards 2026. Wren’s Big Home Trends Report 2026 discusses tonal colour palettes and flexible spaces for social use. These are useful references for a mood board, rather than a specification for every home."] },
      { title: "Check the light before choosing the colour", paragraphs: ["A warm cabinet colour can look quite different beside a cool floor or under a bright work light. Bring the proposed door, worktop and flooring samples together in the kitchen. Compare them in the morning, in the evening and with the lights switched on. Include any existing surfaces that will remain.", "Try the colour vertically as well as flat on a table. Doors, end panels and tall housings will reflect the room differently from a horizontal sample. If you are keeping wall tiles or a stone worktop, use those materials as part of the decision rather than relying on a supplier’s staged photograph."] },
      { title: "Use a palette to simplify decisions", paragraphs: ["A tonal scheme can connect several surfaces without making them identical. Choose which element should lead: perhaps the cabinet colour, a textured worktop or a timber detail. Then review the quieter supporting surfaces, handles and splashback alongside it.", "Avoid making each selection in isolation. Drawers, appliance fascias, exposed cabinet sides, plinths and cornices all become visible parts of the finished kitchen. List them before ordering so the chosen finish continues where you expect it to, and contrasting components are deliberate."] },
      { title: "Make room for everyday movement", paragraphs: ["An inviting kitchen also needs a workable layout. Consider where people enter, how cupboard and appliance doors open, and where hot dishes or shopping bags will be placed. If an island is part of the plan, check it against the actual room dimensions and the intended use of adjoining spaces.", "A photograph can suggest a layout, but it cannot establish the conditions behind the walls or the service positions in your home. Discuss those practical constraints while there is still time to adjust the supplier plan and agree the preparation work."] },
      { title: "What to send for an installation review", paragraphs: ["Send the supplier plan, postcode, room photographs, appliance details and preferred timing. Mark what is staying and what is being replaced. Form & Frame provides independent installation; a mention of Wickes or Wren is not a claim of endorsement or a commercial partnership.", "The project photograph accompanying this article shows existing Form & Frame portfolio work. It is a planning reference, not a photograph of Whitworth Terracotta or a Wren range."] },
    ],
    sources: [{ title: "Wickes — Ideal Home Kitchen Awards 2026", url: "https://www2.wickes.co.uk/ideal-home-awards" }, { title: "Wren — The Big Home Trends Report 2026", url: "https://www.wrenkitchens.com/blog/the-big-home-trends-report-2026/" }],
    links: [{ label: "View kitchen installation projects", href: "/kitchens" }, { label: "How independent kitchen installation works", href: "/kitchen-installation" }],
  },
  {
    slug: "supplied-kitchen-or-bespoke-joinery-planning",
    title: "A supplied kitchen or bespoke joinery: preparing the right project brief",
    description: "A practical checklist for comparing a supplier kitchen with fitted furniture and making the installation responsibilities clear before work begins.",
    category: "Planning guide", published: "2026-10-13", checked: "2026-10-13", projectId: "G32",
    sections: [
      { title: "Choose the route around the room", paragraphs: ["A supplied kitchen begins with a manufacturer’s range and plan. Bespoke fitted furniture begins with the room, its use and an agreed specification. Some projects combine the two: a supplier kitchen alongside a separately designed utility cupboard, media wall or dining-room storage.", "Howdens maintains a catalogue view of kitchens marked as new. We checked that resource on 13 October 2026; this is a catalogue reference, not a claim that every listed range launched on that date. Compare current supplier choices with your practical requirements before deciding how much of the project needs a bespoke approach."] },
      { title: "Prepare a useful first brief", paragraphs: ["Start with the postcode, a few clear photographs and approximate dimensions. Explain what does not work in the current room and what you want the finished space to do. Include plans if you have them, but mark anything that has changed since they were drawn.", "For a supplied kitchen, add the latest supplier layout and appliance information. For joinery, describe the storage you need, preferred finish, important details and any references. A reference image communicates an intention; it does not confirm a material, construction method or price."] },
      { title: "Make responsibilities visible", paragraphs: ["Before installation is booked, agree who supplies each item and who is responsible for preparation and associated work. Removal, wall and floor conditions, electrical or plumbing changes, decoration and final connections can affect the sequence. The written quotation should define the included scope and identify the work arranged separately.", "Form & Frame coordinates design and technical details where agreed, and may use selected specialist manufacturing partners for bespoke production. The project specification confirms how the work will be delivered. Supplier names are used descriptively; Form & Frame is an independent installer."] },
      { title: "Use a single information pack", paragraphs: ["Keep the current drawings, product list and agreed finish references together. If a layout changes, identify the revision rather than leaving several conflicting plans in circulation. Check delivery and access arrangements before fixing a sequence that depends on them."], checklist: ["Postcode, contact details, room photographs and approximate dimensions.", "Latest supplier plan or joinery brief, plus appliance and fitting information.", "Materials, finish references and any items being retained.", "A list of preparation work and who will arrange each part.", "Preferred timing, delivery constraints and access information."] },
      { title: "From enquiry to an agreed next step", paragraphs: ["Send the information you already have, even if a few decisions remain open. An initial review can identify what needs clarifying before a site visit or final quotation. Exact dimensions and site conditions need checking before manufacture or installation; early measurements are a starting point, not a replacement for those checks."] },
    ],
    sources: [{ title: "Howdens — fitted kitchens marked New (catalogue checked 13 October 2026)", url: "https://www.howdens.com/Kitchens/fitted-kitchens?highlights=New" }],
    links: [{ label: "Explore kitchen installation", href: "/kitchen-installation" }, { label: "Explore bespoke joinery", href: "/bespoke-joinery" }, { label: "Send your project brief", href: "/contact#enquiry-form" }],
  },
];

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
