import { newsImages, type NewsImage } from "./news-images";

export type NewsArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  topic?: "supplier-news" | "materials-design" | "installation-advice";
  published: string;
  publishedAt?: string;
  checked: string;
  updatedAt?: string;
  image: NewsImage;
  enquiryUrl?: string;
  sections: { id?: string; title: string; paragraphs: string[]; checklist?: string[] }[];
  sources: { title: string; url: string }[];
  links: { label: string; href: string }[];
};

export const newsArticles: NewsArticle[] = [
{
  "slug": "under-sink-storage-fitting-checks",
  "title": "Under-sink storage: check the pipes before choosing a pull-out",
  "description": "Considering an IKEA UTRUSTA under-sink organiser? Check cabinet compatibility, pipe clearance, door movement and maintenance access before ordering storage fittings.",
  "category": "Supplier updates",
  "topic": "supplier-news",
  "published": "2026-10-23",
  "publishedAt": "2026-10-23T20:34:00Z",
  "checked": "2026-10-23",
  "image": newsImages.storagePlanning,
  "enquiryUrl": "/contact?service=kitchen-installation&installation=own-kitchen#enquiry-form",
  "sections": [
    {
      "title": "A useful fitting for an awkward cupboard",
      "paragraphs": [
        "The space beneath a sink often looks generous until the bowl, waste pipe, valves and hoses are in place. A pull-out organiser can make everyday items easier to reach, but the empty cabinet size is only the starting point. Plan the storage around the installed services and the way the cupboard opens.",
        "IKEA’s current UK listing for the UTRUSTA under-sink organiser, article 206.027.31, describes a side-mounted pull-out with two trays and an adjustable upper tray. It lists compatibility with 60 cm-deep METOD and KNOXHULT base cabinets and deep FAKTUM base cabinets. We checked the listing on 23 October 2026. This is a current product reference, not a newly announced launch; local stock and suitability for your cupboard still need checking."
      ]
    },
    {
      "title": "Start with the cabinet you actually have",
      "paragraphs": [
        "For an existing kitchen, identify the cabinet system before ordering an internal fitting. Photograph the cabinet with its door open, including hinges, the underside of the sink and the back of the cupboard. Keep any existing product references with the photographs. A door style or an outside width alone does not identify the usable space inside.",
        "For a new kitchen, review the sink and waste arrangement alongside the storage plan. Ask the supplier to confirm the exact fitting against the selected cabinet, front and hinge combination. A product listed for one cabinet family should not be assumed suitable for every kitchen that looks similar."
      ]
    },
    {
      "title": "Look at the full movement",
      "paragraphs": [
        "Check the space the fitting occupies when closed and the path it follows when pulled out. Hinges, a door that cannot fully open, an adjacent wall or a projecting handle can change what is practical. Think about where you stand while using it and whether an open dishwasher would obstruct the same space.",
        "Place the items you want to store together before deciding on shelf spacing. Taller bottles, brushes and everyday washing-up items need different clearances. The organiser should make those items easier to reach without requiring you to move something else each time. Use the current instructions for the exact product to confirm its installation positions and load limits."
      ]
    },
    {
      "title": "Keep the services accessible",
      "paragraphs": [
        "Leave a workable route to the trap, isolation valves and appliance hose connections for checks and maintenance. A neat cupboard is less useful if access requires dismantling several fittings. Discuss which trays or shelves can be removed and how that access will be demonstrated at handover.",
        "Do not plan around moving pipes or cutting a fitting as an assumed adjustment. If services conflict with the proposed storage, resolve the layout with the supplier and the appropriate trade before ordering or fitting. For an older cupboard, include any existing damage or dampness in the initial review rather than covering it with new storage."
      ]
    },
    {
      "title": "Send a clear storage and fitting brief",
      "paragraphs": [
        "For independent kitchen fitting in Luton, Dunstable, Houghton Regis and our nearby service area, include storage requirements with the kitchen plan. We can review them as part of the agreed installation scope. Form & Frame is independent and is not affiliated with or endorsed by IKEA.",
        "If the room needs made-to-measure cabinetry as well as a supplied kitchen, identify those pieces separately. That keeps the manufacturer’s internal fittings, bespoke furniture and associated trade work clear in the quotation."
      ],
      "checklist": [
        "Cabinet system or product references, plus the current kitchen layout.",
        "Clear photographs inside the cupboard and of the fully opened door.",
        "Sink, waste, valve and appliance connection positions.",
        "The proposed organiser reference and current assembly instructions.",
        "What you want to store, any access limitations, your project postcode and preferred timing."
      ]
    }
  ],
  "sources": [
    {
      "title": "IKEA UK — UTRUSTA under-sink organiser, compatibility and product details",
      "url": "https://www.ikea.com/gb/en/p/utrusta-under-sink-organiser-20602731/"
    },
    {
      "title": "IKEA — current UTRUSTA under-sink organiser assembly instructions",
      "url": "https://www.ikea.com/gb/en/assembly_instructions/utrusta-under-sink-organiser__AA-2553861-2-100.pdf"
    }
  ],
  "links": [
    {
      "label": "Independent kitchen installation and enquiry checklist",
      "href": "/kitchen-installation#fitting-checklist"
    },
    {
      "label": "IKEA kitchen fitting and preparation",
      "href": "/kitchen-installation/ikea"
    },
    {
      "label": "Bespoke fitted storage for other parts of the room",
      "href": "/bespoke-joinery"
    },
    {
      "label": "Our local fitting area",
      "href": "/areas#local-coverage"
    }
  ]
},
{
  "slug": "ikea-dishwasher-front-compatibility",
  "title": "IKEA kitchen planning: will your dishwasher front fit?",
  "description": "Before ordering an integrated dishwasher for an IKEA kitchen, check the exact appliance, furniture front, hinge system and opening space with your installation team.",
  "category": "Installation advice",
  "topic": "installation-advice",
  "published": "2026-10-22",
  "publishedAt": "2026-10-22T18:43:00Z",
  "checked": "2026-10-22",
  image: newsImages.dishwasher,
  "enquiryUrl": "/contact?service=kitchen-installation&supplier=ikea&installation=own-kitchen#enquiry-form",
  "sections": [
    {
      "title": "Check the combination before ordering",
      "paragraphs": [
        "A dishwasher can fit the width of a kitchen opening and still need further checks before its furniture front will work. The appliance model, front dimensions, hinge arrangement and plinth need to be considered together. This guide focuses on that combination, rather than the general room and service checks in our IKEA installation guide.",
        "IKEA’s UK page for BEHJÄLPLIG, article 604.923.49, lists a sliding-hinge fitting for many non-IKEA dishwashers and asks buyers to confirm suitability for their particular machine. We checked the listing and its linked instructions on 22 October 2026. It is current fitting guidance, not a new launch; the listing alone does not confirm local stock or compatibility with your appliance."
      ]
    },
    {
      "title": "Bring the appliance and furniture details together",
      "paragraphs": [
        "Keep the exact dishwasher model number with the kitchen plan. Add the selected furniture-front references and the appliance manufacturer’s installation instructions. A similar-looking machine, or another model from the same brand, is not enough to establish that the fixing and opening arrangement will work.",
        "Our practical recommendation is to have the supplier or installation team confirm the complete combination before purchase. Record the permitted front size and weight, fixing positions, installation height and required clearances from the instructions for those exact products. Do not choose a fitting solely from a photograph or assume every dishwasher needs the same accessory."
      ]
    },
    {
      "title": "Check the opening, not only the closed elevation",
      "paragraphs": [
        "A continuous row of fronts can look right on a drawing while leaving a question about movement near the plinth. Include the open dishwasher in the layout review, together with adjacent handles, a wall return and the space someone needs to load it. Ask the team to check the front’s full travel against the selected hinge and appliance instructions.",
        "For a divided front, identify how the panels are joined and supported. Keep that decision with the appliance specification rather than leaving it as an adjustment on fitting day. If the specified combination does not work, resolve the product choice with the supplier before altering doors, fittings or the appliance."
      ]
    },
    {
      "title": "Use both sets of instructions at installation",
      "paragraphs": [
        "The BEHJÄLPLIG instructions refer installers to the dishwasher’s own manual for the front-mounting screws and their locations. Keep both documents with the fitting pack. The accessory guide does not replace the appliance instructions.",
        "Agree who supplies any required accessory and who checks the final opening, front alignment and access. At handover, demonstrate the normal movement and retain the model details and care information. Electrical and plumbing connections should remain within the agreed scope of the appropriate trades."
      ]
    },
    {
      "title": "What to send for an IKEA kitchen fitting enquiry",
      "paragraphs": [
        "For independent IKEA kitchen installation in Luton, Dunstable and nearby service areas, send the details below with your fitting enquiry. We can review the installation brief and identify questions to resolve before the kitchen arrives. Form & Frame is an independent installer and is not affiliated with or endorsed by IKEA."
      ],
      "checklist": [
        "Kitchen plan and elevations showing the dishwasher and neighbouring units.",
        "Exact appliance model and its current installation instructions.",
        "Furniture-front references, sizes and the proposed hinge or accessory reference.",
        "Finished floor, worktop and plinth information from the agreed kitchen specification.",
        "Your project area, preferred dates and responsibility for appliance connections."
      ]
    }
  ],
  "sources": [
    {
      "title": "IKEA UK — BEHJÄLPLIG product and compatibility guidance",
      "url": "https://www.ikea.com/gb/en/p/behjaelplig-sliding-hinge-fully-int-dishwasher-60492349/"
    },
    {
      "title": "IKEA — BEHJÄLPLIG assembly instructions",
      "url": "https://www.ikea.com/gb/en/assembly_instructions/behjaelplig-sliding-hinge-fully-int-dishwasher__AA-2246136-2-2.pdf"
    }
  ],
  "links": [
    {
      "label": "Independent IKEA kitchen installation",
      "href": "/kitchen-installation/ikea"
    },
    {
      "label": "Plan the delivery-to-fitter handover",
      "href": "/news/already-bought-your-kitchen"
    },
    {
      "label": "See our kitchen installation work",
      "href": "/kitchens"
    },
    {
      "label": "Send your IKEA fitting brief",
      "href": "/contact?service=kitchen-installation&supplier=ikea&installation=own-kitchen#enquiry-form"
    }
  ]
},
{
  "slug": "wren-corner-storage-fitting-checks",
  "title": "Wren corner storage: plan the opening and pull-out space",
  "description": "Choosing a Wren corner cabinet? Check the usable opening, handed layout and movement around adjacent doors before confirming your kitchen installation.",
  "category": "Installation advice",
  "topic": "installation-advice",
  "published": "2026-10-20",
  "publishedAt": "2026-10-20T18:40:59.162536Z",
  "checked": "2026-10-20",
  image: newsImages.storage,
  "enquiryUrl": "/contact?service=kitchen-installation&supplier=wren&installation=own-kitchen#enquiry-form",
  "sections": [
    {
      "title": "A useful feature starts with the room",
      "paragraphs": [
        "Wren’s current UK corner-storage pages show pull-out, magic-corner and carousel options. Its advice also asks buyers to measure the space inside the cabinet frame. We checked those pages on 20 October 2026; they do not provide a launch date for these features, so this is practical fitting guidance rather than a new-product announcement.",
        "Our installation question is simple: can the selected storage open fully and remain easy to use once the neighbouring cabinetry, appliances and worktop are fitted? A plan that records that movement helps turn a storage idea into a workable specification."
      ]
    },
    {
      "title": "Record the usable opening",
      "paragraphs": [
        "Ask for the cabinet code and the exact mechanism reference together. Record the clear opening, internal width, depth and height, plus any hinges, centre posts or services that occupy that space. An overall cabinet dimension does not describe every part of the space available to a moving tray.",
        "Use the requirements for that particular fitting. Avoid choosing a mechanism from a photograph and assuming another cabinet with a similar front will accept it. If the kitchen is already ordered, resolve compatibility with the supplier before parts are cut or fixed."
      ]
    },
    {
      "title": "Draw the movement into the plan",
      "paragraphs": [
        "Show which way the door opens and where the trays travel. Consider neighbouring handles, an oven or dishwasher door, a wall return and the space where someone stands to reach the contents. Check the selected fitting’s instructions for the required opening and clearances.",
        "For example, a tray may clear its own cabinet but still meet the handle of the next run when pulled forward. Reviewing both runs together gives the designer and installer a chance to resolve the arrangement before installation. This is a planning example, not a claim about a particular Wren product."
      ]
    },
    {
      "title": "Agree the fitting and checking sequence",
      "paragraphs": [
        "The room and cabinet layout need to be checked before the mechanism is fitted. Keep the product instructions with the installation pack, confirm access to the fixing points and leave service access available where needed. Do not alter a fitting or assume a load rating to make an unsuitable combination work.",
        "At handover, check the intended movement, door adjustment and access with the installed surroundings in place. Retain the product care and loading information for the household. Specific loads and adjustments come from the manufacturer’s instructions for the selected mechanism."
      ]
    },
    {
      "title": "What to send with a local fitting enquiry",
      "paragraphs": [
        "For independent Wren kitchen fitting in Luton, Dunstable or nearby approved areas, send the information below with your preferred timing. We can review the installation scope and any questions to resolve with the supplier. Form & Frame is an independent installer and is not affiliated with or endorsed by Wren."
      ],
      "checklist": [
        "The final kitchen plan and elevations, including the corner and adjacent run.",
        "Range name, cabinet codes, storage mechanism reference and the matching installation instructions.",
        "Room photographs showing the wall returns, existing services and nearby openings.",
        "Appliance models, worktop details and the agreed responsibility for each trade.",
        "Your project postcode so we can confirm travel and access arrangements."
      ]
    }
  ],
  "sources": [
    {
      "title": "Wren — current UK corner-storage options",
      "url": "https://www.wrenkitchens.com/kitchens/storage/corner"
    },
    {
      "title": "Wren — choosing and measuring corner storage",
      "url": "https://www.wrenkitchens.com/kitchen-design-ideas/storage-ideas/create-kitchen-storage-with-corner-units"
    },
    {
      "title": "Wren — installation guide library",
      "url": "https://www.wrenkitchens.com/installation-guides"
    }
  ],
  "links": [
    {
      "label": "Independent Wren kitchen installation",
      "href": "/kitchen-installation/wren"
    },
    {
      "label": "Check the delivery-to-fitter handover",
      "href": "/news/already-bought-your-kitchen"
    },
    {
      "label": "See our public kitchen installation work",
      "href": "/kitchens"
    },
    {
      "label": "Send your Wren fitting brief",
      "href": "/contact?service=kitchen-installation&supplier=wren&installation=own-kitchen#enquiry-form"
    }
  ]
},
{
  "slug": "howdens-mixed-finish-kitchen-planning",
  "title": "Mixed-finish Howdens kitchens: plan the panels and stone together",
  "description": "A Howdens exhibition display combines dark oak, gloss sandstone and black. Our practical checklist connects finish choices, panels and worktop templating before fitting.",
  "category": "Supplier update",
  "topic": "supplier-news",
  "published": "2026-10-19",
  "publishedAt": "2026-10-19T18:33:54.884370Z",
  "checked": "2026-10-19",
  image: newsImages.mixedKitchen,
  "sections": [
    {
      "title": "The supplier update",
      "paragraphs": [
        "Howdens’ announcement for Grand Designs Live, held in Birmingham on 2–4 October 2026, described a display combining Hockley Dark Oak, Winterton Gloss Sandstone and Hockley Black with a quartz waterfall island. We checked the UK newsroom on 19 October. This is a look back at that display, not a claim that these ranges launched today.",
        "The useful question for a home project is how several finishes meet in the finished room. A display can suggest a palette; your supplier still needs to confirm the exact products, available components and delivery arrangements for your order."
      ]
    },
    {
      "title": "Our take: give every visible surface a finish",
      "paragraphs": [
        "Start with the elevations, not just the list of cabinet doors. Mark the finish for exposed ends, fillers, island backs, plinths and any shelves. At a corner, decide which surface continues and which finishes against it. An unlabelled panel can become a last-minute decision even when the main door colours are settled.",
        "For a handleless layout, include the profile finish and how it runs between base units, tall units and appliances. Keep the product references beside the drawing. A sample board and the supplier’s actual component list are more useful for this decision than colours viewed on separate screens."
      ]
    },
    {
      "title": "Plan the stone as part of the installation",
      "paragraphs": [
        "A waterfall end changes the meeting point between the island, floor and worktop. Agree the edge, overhang and visible joint arrangement with the worktop provider before the final specification is signed off. Howdens’ guidance notes that veining may not continue across joints, corners or waterfall features; do not assume a display photograph guarantees that effect.",
        "Ask the worktop provider to confirm what must be installed or available for templating. The approved cabinet layout, relevant panels, appliances and sink details should form one coordinated handover. If something changes afterwards, tell the installer and worktop provider before manufacture proceeds."
      ]
    },
    {
      "title": "A short finish-to-fitting checklist",
      "paragraphs": [
        "Keep these decisions with the current plan so the supplier, installer and worktop team are working from the same brief."
      ],
      "checklist": [
        "Door, panel, filler, plinth and profile finishes identified separately.",
        "Actual samples checked together in the room’s lighting.",
        "Appliance models and opening arrangements confirmed.",
        "Stone edge, joints, waterfall details and templating responsibilities agreed.",
        "One current plan with a clear record of any changes."
      ]
    },
    {
      "title": "Independent fitting in Luton and Dunstable",
      "paragraphs": [
        "If you are planning a Howdens kitchen installation in Luton, Dunstable or our nearby service area, send your plan, finish references, room photographs and postcode. We can review the fitting details and the work that needs coordinating before installation.",
        "The approved Howdens photograph shows Frome Charcoal with Clerkenwell bronze finishes. It illustrates a different mixed-finish scheme, not the exhibition display described above or a Form & Frame project. The image credit links to its source. Form & Frame is an independent installer, with no affiliation or endorsement implied."
      ]
    }
  ],
  "sources": [
    {
      "title": "Howdens — Grand Designs Live 2026 announcement (event 2–4 October; checked 19 October)",
      "url": "https://www.howdens.com/help-and-advice/about-us/newsroom"
    },
    {
      "title": "Howdens — planning a template-and-fit worktop",
      "url": "https://www.howdens.com/help-and-advice/installation-guides/how-to-plan-for-a-template-and-fit-worktop"
    }
  ],
  "links": [
    {
      "label": "Howdens kitchen installation in Luton",
      "href": "/kitchen-installation/howdens"
    },
    {
      "label": "Explore our public kitchen projects",
      "href": "/kitchens"
    },
    {
      "label": "Check our local service area",
      "href": "/areas"
    },
    {
      "label": "Send your kitchen plan for a fitting review",
      "href": "/contact?service=kitchen-installation&supplier=howdens&installation=own-kitchen#enquiry-form"
    }
  ]
},
  {
    slug: "dulux-soulful-sage-2027-fitted-furniture",
    title: "Dulux’s 2027 colour: planning sage walls around fitted furniture",
    description: "Dulux has named Soulful Sage its 2027 colour. Our practical take on coordinating walls, kitchen fronts and fitted furniture for a Luton-area project.",
    category: "Paint & colour",
    topic: "supplier-news",
    published: "2026-10-19",
    publishedAt: "2026-10-19T18:33:54.884370Z",
    checked: "2026-10-24",
    updatedAt: "2026-10-24T18:45:07.565626+00:00",
    image: newsImages.colour,
    sections: [
      { title: "The supplier update", paragraphs: ["In an announcement dated 8 September 2026, Dulux introduced Soulful Sage as its Colour of the Year for 2027. The brand presents the sage shade with three supporting colour stories: Glow, Light and Lift. We revisited the UK guidance on 24 October 2026. This update develops the specification and fitting advice; it is not a new colour launch."] },
      { title: "Our take: decide where the colour belongs", paragraphs: ["A wall-colour reference can help shape a kitchen or fitted-furniture brief without becoming the finish for every surface. Decide whether the walls, cabinet fronts or a timber detail should lead the room. With alcove units or a full-height wardrobe, include the surrounding wall, skirting and ceiling in that decision.", "For a kitchen supplied by a manufacturer, start with the actual door samples available in your chosen range. Do not assume a named wall-paint colour is offered as a factory-finished kitchen door, or that two products with similar names will match. Ask for the exact finish references before the order is finalised."] },
      { title: "Keep colour and coating specification separate", paragraphs: ["An approved colour does not by itself specify a suitable furniture finish. For bespoke joinery, agree the substrate, preparation, coating system, sheen and intended use with the fabricator or finisher. Request a sample made using the proposed combination, particularly where a sprayed cabinet sits against a decorated wall.", "Record whether the intention is a close match or a deliberate contrast. Check the join between the two surfaces in the actual room: a recessed door, curved edge or glossy worktop can make the same palette read differently. Keep the approved sample with the drawings so later decisions refer to the same finish."] },
      {"title": "Match the coating to the surface, not just the colour name", "paragraphs": ["Dulux describes its UK Quick Dry Satinwood as a water-based, mid-sheen finish for interior wood and metal. That is a product specification; the Soulful Sage announcement is a colour reference. Neither establishes that a particular factory-finished kitchen door, foil or laminate is suitable for that product.", "For a new wardrobe or alcove unit, tell the fabricator which parts are timber, board, veneer or an existing finish. Ask them to confirm the complete preparation and coating system for those surfaces, including edges. For a supplied kitchen, confirm any finishing or alteration with the supplier before work starts. We have not verified Soulful Sage availability in every coating or kitchen range."]},
      {"title": "Make a small finish schedule for the fitter", "paragraphs": ["Give each visible part a line in the schedule: wall, main doors, exposed ends, fillers, plinth, shelves and trims. Beside it record the material, colour reference, product or factory-finish code, sheen and person responsible. Keep the approved physical sample and current drawing revision together.", "For example, sage walls beside oak shelves do not require painted cabinet fronts. A contrasting factory-finished door can be a deliberate choice. The schedule should make that choice explicit so a filler or scribed trim is not left to a last-minute guess."]},
      {"title": "Agree what happens after the last cabinet is fitted", "paragraphs": ["Decide which parts arrive finished and which are decorated after fitting. Cutting or scribing a trim can affect the edge that will be visible; agree how that edge is finished and who is responsible. Confirm protection during the remaining work and the coating maker’s instructions for handling and cleaning.", "At handover, keep the final finish references, care instructions and any agreed touching-up record. Photograph the completed junctions in normal room lighting. These are practical installation records, not a promise that different surfaces will look identical under every light."], "checklist": ["Identify all substrates and existing finishes before selecting a coating.", "Approve a physical sample made with the intended finish system.", "Label visible panels, fillers, plinths and trims on the current plan.", "Agree factory finishing, site decoration and touching-up responsibilities.", "Retain finish codes and care instructions with the project handover."]},
      { title: "A useful sample check before fitting", paragraphs: ["Bring the decisions together before manufacture or installation is booked. This short check helps turn a colour idea into a usable specification."], checklist: ["View the proposed wall colour beside the actual door, timber, handle and worktop samples.", "Check samples vertically in daylight and under the room’s planned lights.", "Identify the exact colour, coating product and sheen for each surface.", "Agree exposed ends, fillers and trims alongside the main cabinet fronts.", "Confirm supply and decorating responsibilities, including any finishing after installation."] },
      { title: "Planning a local kitchen or joinery project", paragraphs: ["For kitchen installation or bespoke fitted furniture in Luton, Dunstable and our nearby service area, send the plan or room photographs with your finish references and postcode. We can discuss how the selected surfaces relate to the fitting details and the agreed scope of work.", "The illustration is an original AI concept showing a general sage-and-oak palette. It is not a completed project, a Dulux product or an accurate representation of Soulful Sage. Use physical samples for colour decisions. This independent article does not imply a partnership with Dulux."] },
    ],
    sources: [{ title: "Dulux UK — Soulful Sage announcement, 8 September 2026", url: "https://www.dulux.co.uk/en/colour-inspiration/colour-of-the-year-2027-soulful-sage" }, { title: "Dulux UK — Quick Dry Satinwood product information (checked 24 October 2026)", url: "https://www.dulux.co.uk/en/products/dulux-quick-dry-satinwood/cccId_3186325" }],
    links: [
      { label: "Compare joinery materials and finishes", href: "/guides/joinery-materials-finishes" },
      { label: "Explore fitted alcove units", href: "/bespoke-joinery/alcove-units" },
      { label: "Independent kitchen installation", href: "/kitchen-installation" },
      { label: "Check our local service area", href: "/areas" },
      { label: "Send your plans and finish references", href: "/contact#enquiry-form" },
    ],
  },
  {
  "slug": "already-bought-your-kitchen",
  "title": "Already bought your kitchen? A delivery-to-fitter checklist",
  "description": "A practical checklist for a customer-supplied kitchen in Luton or Dunstable: check deliveries, resolve missing parts and prepare the handover to your independent fitter.",
  "category": "Installation planning",
  "published": "2026-10-17",
  "publishedAt": "2026-10-17T18:37:03.505Z",
  "checked": "2026-10-17",
  image: newsImages.whiteKitchen,
  "sections": [
    {
      "title": "Your kitchen is ordered. What should happen next?",
      "paragraphs": [
        "If you have bought a kitchen and need an independent kitchen fitter in Luton or Dunstable, the next step is to turn the order into a clear installation handover. A delivery date alone does not tell the fitter whether the room, components and current drawings are ready.",
        "This checklist covers the gap between ordering and fitting. Use the separate quotation and timescale guides below for pricing scope and the wider programme. Form & Frame provides independent installation; the supplier remains the source of your product order and its applicable terms."
      ]
    },
    {
      "title": "Match the order to the final drawing",
      "paragraphs": [
        "Keep the confirmed order, latest layout and appliance model list together. Mark the drawing revision that matches what you actually bought. If a cabinet, appliance or worktop has changed since the design appointment, send the update to the fitter before setting out begins.",
        "Check the smaller finishing items as well as the cabinets: fillers, end panels, plinths, handles, hinges and appliance-door fittings. Record anything that is still being supplied separately. This helps identify an incomplete order without assuming that every loose component is missing."
      ]
    },
    {
      "title": "Check the delivery and keep a useful record",
      "paragraphs": [
        "Compare the delivery note with the order and identify the packages against the plan. Follow the supplier's handling and storage instructions. Where a package or item appears damaged, take clear photographs of the condition and its label before moving on to the next item.",
        "Keep a short issue list with the item reference, the problem, the supplier contact or case reference and the expected next update. Include items that arrived in the wrong finish or size, not just missing boxes. Tell the fitter which issues remain open."
      ],
      "checklist": [
        "Current plan and order refer to the same kitchen.",
        "Cabinet, door, panel and appliance packages checked against the delivery note.",
        "Missing, damaged or incorrect items recorded with references and photographs.",
        "Replacement dates confirmed with the supplier and shared with the fitter.",
        "Safe storage and access arranged around the installation work."
      ]
    },
    {
      "title": "Report missing parts through the supplier’s own process",
      "paragraphs": [
        "Use the support route for the company that supplied the item. Wren's supply-only FAQ directs customers to their account or the Wren app for damaged or missing items. IKEA asks customers reporting a missing delivery item to have the order confirmation or delivery note ready. These are examples of supplier processes, not a claim that Form & Frame represents either company.",
        "Agree who will contact the supplier and keep the fitter informed. A replacement request is not the same as a confirmed delivery. Before making plans around it, check which parts have actually been dispatched and whether the remaining work needs another visit."
      ]
    },
    {
      "title": "Decide what can proceed before a replacement arrives",
      "paragraphs": [
        "Discuss each missing part with the installer rather than treating every incomplete delivery the same way. A missing decorative piece may affect the final finish; a missing cabinet or incorrect appliance housing may affect setting out, adjacent units or a worktop template. The actual layout determines the effect.",
        "Record the agreed next step: proceed with a defined part of the work, change the sequence, or wait for the replacement. Confirm any return visit and changes to the installation scope before proceeding. Specialist connections and worktop visits still need their own agreed responsibilities."
      ]
    },
    {
      "title": "Keep product documents and fitting responsibilities separate",
      "paragraphs": [
        "Save the purchase records, supplier instructions, product guarantee documents and the agreed installation quotation. Check the terms that apply to your actual purchase rather than assuming every range or appliance has the same cover. IKEA, for example, notes that its guarantee terms depend on the order or purchase date.",
        "Ask the supplier about product issues and the installer about the agreed fitting work. If the cause is unclear, share photographs and records with the relevant parties so it can be investigated. Agree the handover list and any outstanding items in writing; this article does not replace the terms of your own order or installation agreement."
      ]
    },
    {
      "title": "Send a clear handover to your independent fitter",
      "paragraphs": [
        "For a customer-supplied kitchen installation in Luton, Dunstable or a nearby town, send the latest plan, project postcode, room photographs, appliance details and delivery information. Add the issue list if any parts are outstanding. We review the scope and practical arrangements before confirming a site visit and fitting programme.",
        "To see how drawings, coordination and installation connect in real work, explore the public K01 case study below. Its cabinetry came from bespoke fabricators and manufacturers; the project records Form & Frame's survey, drawing, coordination and installation role."
      ]
    }
  ],
  "sources": [
    {
      "title": "Wren Kitchens — supply-only orders and missing items",
      "url": "https://www.wrenkitchens.com/faqs/supply-only"
    },
    {
      "title": "IKEA UK — reporting product and delivery issues",
      "url": "https://www.ikea.com/gb/en/customer-service/returns-claims/claims/"
    },
    {
      "title": "IKEA UK — checking the applicable guarantee documents",
      "url": "https://www.ikea.com/gb/en/customer-service/returns-claims/guarantee/"
    }
  ],
  "links": [
    {
      "label": "Independent kitchen installation",
      "href": "/kitchen-installation"
    },
    {
      "label": "Compare fitting quotation scopes",
      "href": "/news/comparing-kitchen-fitting-quotes"
    },
    {
      "label": "Plan the kitchen fitting sequence",
      "href": "/news/kitchen-installation-timescale"
    },
    {
      "label": "K01: drawings, coordination and completed installation",
      "href": "/case-studies/k01-surbiton"
    },
    {
      "label": "Check our local towns and villages",
      "href": "/areas"
    },
    {
      "label": "Send your kitchen plan and delivery details",
      "href": "/contact?service=kitchen-installation#enquiry-form"
    }
  ]
},
  {
    slug: "kitchen-installation-timescale",
    title: "How long does kitchen installation take? Planning the fitting sequence",
    description: "Planning kitchen fitting in Luton or Dunstable? Understand how room preparation, cabinet fitting, worktops and final connections affect the installation timescale.",
    category: "Installation planning", published: "2026-10-15", publishedAt: "2026-10-15T19:11:59Z", checked: "2026-10-25", updatedAt: "2026-10-25T17:38:10.694769+00:00", image: newsImages.fitting,
    sections: [
      { title: "Cabinet fitting is one part of the programme", paragraphs: ["A kitchen installation does not have one reliable duration that applies to every room. Replacing cabinets in a prepared space is different from changing the layout, moving services or waiting for a stone worktop. When planning kitchen fitting in Luton, Dunstable or a nearby town, ask for a sequence of work with the dependencies made clear.", "The useful dates are not just the fitter's first and last day. Establish when the old kitchen comes out, when the room is ready, when all the cabinets and appliances arrive, and when the sink and cooking facilities can be used again. A project-specific programme can then be agreed from the actual scope."] },
      { title: "Before the first cabinet is fitted", paragraphs: ["Start with the final supplier plan and a checked cabinet and appliance list. Confirm access, storage and delivery arrangements, then identify the preparation that must happen before installation. Walls, floors and service positions need to be ready for the agreed layout.", "Check the delivered items against the order while there is time to resolve missing or damaged parts. A missing filler, appliance housing or decorative panel can leave finishing work outstanding even when most cabinets are fitted. If the room needs plastering, flooring or other preparation, agree its readiness with the trades carrying out that work rather than assuming it will be ready on delivery day."], checklist: ["Latest supplier drawing and appliance models confirmed.", "Delivery checked, with missing or damaged items raised with the supplier.", "Room preparation and service positions agreed with the relevant trades.", "Safe access and somewhere suitable to store the new kitchen arranged."] },
      { title: "Setting out, cabinets and finishing pieces", paragraphs: ["The installation begins with checking the room against the layout and setting out the cabinet positions. Assembly where required, levelling, fixing and alignment come before the doors, drawers, fillers, end panels and plinths can be finished properly.", "The work involved depends on the kitchen. Tall units, integrated appliance fronts, an island, uneven walls and detailed scribes all affect the fitting sequence. Ask the installer to review those details before agreeing a duration, especially where several trades will need access to the same room."] },
      { title: "Why worktops can create a separate stage", paragraphs: ["The worktop material and the supplier's process matter. Where stone is templated from installed cabinets, the cabinetry must be ready for the template visit. Fabrication and a later fitting visit then sit between cabinet installation and the connections that depend on the finished top.", "Confirm the worktop company's actual template and fitting dates. Do not assume their lead time is included in a cabinet-fitting estimate. Sink, tap and hob details need to be available at the correct stage, and any changes should be shared with the installer and worktop supplier before the template is finalised."] },
      { title: "Connections, adjustments and handover", paragraphs: ["Positioning an appliance and connecting it are separate responsibilities. Agree who carries out plumbing, gas and electrical connections, and when those visits can happen. For example, IKEA's published installation scope distinguishes appliance and cabinet fitting from electrical, gas and plumbing connections. The scope of your own quotation needs to be checked separately.", "Allow for the final checks: door and drawer alignment, fitted panels, handles and agreed finishing work. Record any outstanding supplier items so that a return visit can be arranged around their arrival. The handover should make clear which work is complete and whether anything remains to be resolved."] },
      {"id": "site-survey", "title": "What the kitchen site survey needs to establish", "paragraphs": ["Use the latest dated supplier drawing at the visit and mark anything that has changed in the room. Initial photographs and approximate measurements help us review an enquiry; they do not establish the final installation dimensions or reveal every concealed condition. Keep a record of areas that cannot yet be inspected, especially behind an existing kitchen.", "Check the shape of the room as well as its overall size: wall and floor levels, corners, openings, skirting and the surfaces intended to support the cabinets. Review tall-unit access, filler widths, door and drawer travel and the usable space around the sink, hob and appliances. Appliance model numbers matter because two similarly sized products can have different fitting requirements.", "Before the order or fitting programme is finalised, agree who revises the plan and confirms any extra panels or components. If removal exposes a condition that was previously hidden, record it and review the scope before covering it with new cabinetry."], "checklist": ["Use one approved drawing revision and cabinet schedule.", "Record site measurements, service positions and any inaccessible areas.", "Confirm appliances, worktop details and the supplied finishing components.", "Record plan changes, who approves them and any effect on the order or dates."]},
      {"id": "trade-coordination", "title": "Coordinate the electrician, plumber and worktop visits", "paragraphs": ["Create a short responsibility list before booking the fit: each task, the person or company doing it, what must be ready first and who confirms that it is complete. Removal and tiling can be included in our agreed scope. Electrical and gas work are coordinated with appropriately qualified specialists and charged separately; a cabinet-fitting booking does not automatically include their work.", "Discuss service alterations against the final appliance positions before cabinets conceal the access. The plumber and electrician need the relevant equipment details, while the worktop fabricator needs the agreed sink, tap and hob specification. Ask each trade what access and preparation they require; do not assume that positioning an appliance means it has been connected or commissioned.", "Where stone is templated after cabinet fitting, get the fabricator’s readiness requirements in advance. Agree which units, panels and appliances must be fixed or available, and who confirms readiness. Template, manufacture and worktop fitting may be separate appointments. Connections that depend on the finished worktop follow when the relevant trade confirms it is ready.", "If a delivery or a preparation task moves, update the affected visits rather than expecting every trade to work around an unchanged date. Discuss temporary washing and cooking arrangements with the household before removal; any temporary installation needs its own agreed safe scope."], "checklist": ["Removal and waste: included work, disposal arrangement and access.", "Preparation and service changes: responsible trade and readiness check.", "Cabinet fitting: complete components, current plan and approved room conditions.", "Worktops: template prerequisites, fitting appointment and subsequent connections.", "Finishing and handover: tiling, making good, adjustments and outstanding items."]},
      {"id": "handover-checklist", "title": "Kitchen handover: check the fit before signing off", "paragraphs": ["Walk around the kitchen using the agreed drawing and scope. Open each door and drawer through its normal movement and check neighbouring handles and appliance fronts. Look at the agreed panel junctions, fillers, plinths, worktop edges and finishing work in normal room lighting. This is a practical review with the installer, not a substitute for a specialist’s electrical or gas checks.", "Demonstrate the access intended for isolation points, filters, appliances and removable panels. Keep the product instructions and care information for the actual surfaces and fittings. Ask the responsible specialist for the commissioning or certification documents applicable to their work.", "Record anything outstanding with a description, photograph where useful, responsible party and agreed next step. Separate a missing supplier component from an installation adjustment so it reaches the right person. Do not assume that an outstanding list changes your contractual or consumer rights; resolve the completion record and payment arrangements against your own agreement."], "checklist": ["Door, drawer and integrated-appliance movement demonstrated.", "Visible finishing details checked against the agreed scope.", "Service and maintenance access explained.", "Instructions, finish references and relevant specialist documents retained.", "Outstanding items, responsibility and next action recorded in writing."]},
      { title: "Planning your kitchen installation in Luton and nearby towns", paragraphs: ["Form & Frame provides independent kitchen installation from its Luton base, including Dunstable, Houghton Regis, Toddington, Caddington and Slip End. The wider service-area page lists the other towns we cover. We confirm the scope, availability and practical arrangements for your address before agreeing an installation programme.", "Send your supplier plan, postcode, room photographs, appliance list and worktop details. Include the expected delivery date and any preparation or specialist visits already booked. This gives us a useful starting point for discussing the fitting sequence and arranging the site checks needed for a quotation."] },
    ],
    sources: [{ title: "IKEA UK — installation service scope and responsibilities", url: "https://www.ikea.com/gb/en/customer-service/services/kitchen-installation/" }, { title: "Magnet — installation options and pre-fit survey", url: "https://www.magnet.co.uk/installation/" }],
    links: [{ label: "Independent kitchen installation", href: "/kitchen-installation" }, { label: "Kitchen and joinery services in Luton", href: "/areas/luton" }, { label: "Kitchen fitting in Dunstable", href: "/areas/dunstable" }, { label: "Compare kitchen fitting quotes", href: "/news/comparing-kitchen-fitting-quotes" }, { label: "Check all service areas", href: "/areas" }, { label: "Discuss your fitting programme", href: "/contact?service=kitchen-installation#enquiry-form" }],
  },
  {
    slug: "comparing-kitchen-fitting-quotes",
    title: "Comparing kitchen fitting quotes: what should be included?",
    description: "Compare kitchen fitting costs in Luton and Dunstable: agreed £300 per-specialist labour days, separate expenses, fixed quotations, allowances and changes to the installation scope.",
    category: "Installation planning", published: "2026-10-15", publishedAt: "2026-10-15T17:49:22Z", checked: "2026-10-25", updatedAt: "2026-10-25T17:38:10.694769+00:00", enquiryUrl: "/contact?service=kitchen-installation&installation=own-kitchen#enquiry-form", image: newsImages.navyKitchen,
    sections: [
      { title: "Compare the same work before comparing the total", paragraphs: ["Two kitchen fitting quotations can look very different because they cover different work. One may cover cabinet assembly and fixing, while another includes removal, preparation, decorative panels and coordination of later visits. For a kitchen in Luton, Dunstable or the surrounding area, begin with one agreed supplier plan and ask each installer to identify what is included, excluded or still to be confirmed.", "A lower total is not automatically poor value, and a longer list is not automatically the right scope. The useful comparison is whether each quotation delivers the same agreed result and makes the remaining responsibilities clear."] },
      { title: "Separate cabinetry from room preparation", paragraphs: ["Record who removes the existing kitchen and deals with the waste. Ask who will make walls and floors ready, and whether decoration, flooring or tiling is included. Existing surfaces may need attention that cannot be established from a supplier drawing alone.", "Within the cabinetry price, check flat-pack assembly where needed, tall housings, end panels, scribes, fillers, plinths, cornices and handles. Integrated appliance doors and finishing pieces deserve a line in the scope rather than an assumption that they are covered."] },
      { title: "Name the worktop and connection responsibilities", paragraphs: ["Identify the worktop material and supplier. Where stone is templated after cabinets are installed, there may be separate template and fitting visits, followed by service connections. Agree who books those visits and what needs to be ready for each one.", "Appliance positioning is different from connecting gas, electrics or plumbing. As one example, IKEA's own installation information distinguishes several cabinet and appliance fitting tasks from electrical, gas and plumbing connections. That illustrates why the written scope matters; another installer's quotation may cover a different combination of work. Form & Frame is an independent installer, with specialist connections coordinated with appropriately qualified trades where required."] },
      { title: "Check the programme and the assumptions", paragraphs: ["Ask what the proposed start date depends on: a complete delivery, finished preparation, the final drawing revision and access for the team. Discuss when the sink and appliances are expected to be usable, particularly if worktops will be fitted later.", "Mark provisional allowances and exclusions clearly. If concealed conditions or a changed supplier plan add work, agree how the change will be described and priced before proceeding. A quotation should also explain the payment stages and the arrangements for final adjustments and handover."] },
      {"id": "day-rate", "title": "How much is kitchen fitting labour in Luton?", "paragraphs": ["Form & Frame’s agreed day rate for kitchen installation and removal labour is £300 per specialist per day, with no VAT added. Two specialists cost £600 per agreed day. It applies where day-rate work is agreed. It is not the price of a whole kitchen installation, and it does not set a standard duration for every kitchen. Each specialist day covers eight working hours. The start and finish times, team size and expected number of days are confirmed before booking.", "Materials, waste disposal, other expenses and additional work are charged separately. Gas and electrical specialist work is also separate. Ask for those costs to be identified alongside the labour so you can consider the total project rather than a single headline rate."]},
      {"id": "fixed-or-day-rate", "title": "Compare a fixed quotation with day-rate work", "paragraphs": ["A fixed quotation should describe the result included for its stated price and the assumptions behind it. A day-rate arrangement needs a defined labour scope, expected days and a way to review progress and agree further work. These are different ways of pricing the agreed work; neither should hide materials, specialist visits or other exclusions.", "For illustration, one specialist for three agreed days at £300 per day would be £900 before separate costs. Two specialists for the same three agreed days would be £1,800. No VAT is added to these labour amounts. That calculation is not an estimate that your kitchen will take three days. Room preparation, the supplied cabinet format, finishing details, worktops and missing components all affect the actual work required."]},
      {"id": "changes", "title": "Record allowances and changes before they become extra work", "paragraphs": ["An allowance is a stated amount or assumption for something not yet fully specified. Ask what it covers, how the final cost will be established and what happens if the actual requirement differs. A line marked “by others” should identify who is arranging it, not simply leave a gap in the programme.", "If the plan changes or a concealed condition is discovered, describe the additional or omitted work, price effect and timing effect in writing. Agree that change before it proceeds. Keep the revised drawing and approval with the original quotation so both parties can see which version applies."]},
      { title: "A comparison checklist to keep with your plans", paragraphs: ["Use the same list when reviewing each quotation. An unanswered item is a question to resolve, rather than a reason to guess."], checklist: ["Same supplier drawing revision, cabinet list and appliance models.", "Old-kitchen removal, waste handling and room preparation identified.", "Assembly, cabinet fixing and all visible finishing pieces listed.", "Worktop supply, templating and fitting responsibilities named.", "Appliance positioning and specialist connections distinguished.", "Access, delivery, storage and preparation dates agreed.", "Allowances, exclusions and changes recorded in writing.", "Final adjustments, handover and payment stages explained."] },
      { title: "Requesting an installation quotation from Form & Frame", paragraphs: ["Send the supplier plan, your postcode, photographs of the room, the appliance list and worktop details. Tell us which preparation work is already arranged and your preferred installation period. We can review the likely scope before the site visit used to confirm the conditions and final quotation.", "Our Luton base serves Dunstable and nearby towns, including Houghton Regis, Toddington, Caddington, Slip End, Barton-le-Clay, Flitwick and Ampthill. Coverage and visits are confirmed around the actual project. The photograph is Howdens supplier imagery illustrating cabinetry choices; it is not a Form & Frame project or evidence of work in any of those towns."] },
    ],
    sources: [{ title: "IKEA UK — what its kitchen installation service includes", url: "https://www.ikea.com/gb/en/customer-service/services/kitchen-installation/" }],
    links: [{ label: "Agreed labour rate and separate costs", href: "/kitchen-installation#kitchen-fitting-prices" }, { label: "Survey, trade visits and handover checklist", href: "/news/kitchen-installation-timescale#site-survey" }, { label: "Independent kitchen installation", href: "/kitchen-installation" }, { label: "Kitchen fitting in Dunstable", href: "/areas/dunstable" }, { label: "Check our service areas", href: "/areas" }, { label: "Send plans for a quotation", href: "/contact?service=kitchen-installation#enquiry-form" }],
  },
  {
    "slug": "egger-26-plus-materials-textures",
    "title": "EGGER 26+: matching boards, laminates and edges for fitted furniture",
    "description": "Choosing finishes for a wardrobe or media unit? Compare face materials, matching edges, grain direction and physical samples before approving the furniture specification.",
    "category": "Materials & textures",
    "published": "2026-10-13",
    "checked": "2026-10-21",
    "updatedAt": "2026-10-21T18:35:36.038552Z",
    "enquiryUrl": "/contact?service=bespoke-joinery#enquiry-form",
    "sections": [
        {
            "title": "What the current collection offers",
            "paragraphs": [
                "EGGER’s UK Decorative Collection 26+ lists 268 decor and texture combinations, including three new textures, with coordinated boards, laminates and edging. Its UK site provides product and availability references. This article was updated on 21 October 2026 to explore the specification decisions those options raise; the collection is not being presented as a launch on that date.",
                "REHAU’s UK announcement dated 25 February 2026 describes matching edgebands for the new EGGER 26+ decors and a sample and matching-reference service. Check the exact board, surface and edge references, dimensions and current supply with the fabricator. A range-level match does not confirm that every combination is available for your order."
            ]
        },
        {
            "title": "Choose the face, core and edge as one specification",
            "paragraphs": [
                "A colour name alone leaves important decisions open. Record whether a component uses a decorative faced board, a laminate bonded to a supporting panel, real timber veneer or another agreed construction. Woodgrain reproduction is a decorative appearance, not evidence of real timber veneer.",
                "For each visible component, record the face reference and texture, supporting board and thickness, reverse face, edge material and edge profile. Ask who will prepare the panels and apply the edging. A coordinated appearance still needs an agreed method of manufacture and a suitable specification for the intended use."
            ]
        },
        {
            "title": "Review a wardrobe across the whole elevation",
            "paragraphs": [
                "A tall run of wardrobe doors makes pattern direction and edge details particularly noticeable. Mark the grain direction on the elevation and agree how it continues across adjoining fronts. Include exposed ends, fillers, the top junction and the inside face visible when a door opens.",
                "Review a representative edged sample upright beside the room’s flooring and wall finish. Check it in daylight and with the room lights on. Look along the edge and around an outside corner as well as straight at the face. Approve the complete combination before the cutting list is released."
            ]
        },
        {
            "title": "Give a media unit its own practical brief",
            "paragraphs": [
                "A TV or media unit often combines horizontal tops, doors, open shelves and panels around equipment. Identify which surfaces will receive frequent handling and which must be removable for access. Agree how edges will meet at these junctions instead of choosing every panel independently.",
                "Put the actual equipment, cable routes and ventilation requirements on the drawing. Material selection cannot determine the clearance around an amplifier or other appliance; use that product’s instructions. Discuss access for replacement and cleaning before fixed panels conceal the services."
            ]
        },
        {
            "title": "Use samples to settle the junctions",
            "paragraphs": [
                "The AI image above is a material-selection concept, not a photograph of EGGER or REHAU products. Use physical manufacturer samples for colour and texture decisions. Screen images cannot establish a colour match.",
                "Ask the fabricator to show the proposed face-to-edge junction, including the corner treatment and any visible bond line. Keep the approved sample and written references together. If a component becomes unavailable, agree a replacement sample before it is substituted."
            ],
            "checklist": [
                "Exact decor and texture references for fronts, interiors, exposed ends and tops.",
                "Board type and thickness, edge reference, width, thickness and profile.",
                "Pattern direction and relationships between adjacent doors or drawer fronts.",
                "Handles, hinges, removable access panels and equipment requirements.",
                "Current availability, fabrication responsibilities and the approved sample."
            ]
        },
        {
            "title": "Bring the specification into your local project",
            "paragraphs": [
                "For fitted wardrobes, TV and media units or other bespoke joinery in Luton, Dunstable and our nearby service area, send room photographs, approximate dimensions and the finish references you are considering. Explain what the furniture needs to store and which equipment or services must remain accessible.",
                "Form & Frame can coordinate the design, technical details and installation, with specialist manufacturing partners where appropriate. The agreed project scope identifies who makes and supplies each element. Supplier references here describe material options and do not imply endorsement or affiliation."
            ]
        }
    ],
    "sources": [
        {
            "title": "EGGER UK — Decorative Collection 26+",
            "url": "https://www.egger.com/en/furniture-interior-design/decorative-collection/?country=GB"
        },
        {
            "title": "REHAU UK — matching edgebands for EGGER 26+ (25 February 2026)",
            "url": "https://interior.rehau.com/uk-en/matching-edgebands-for-egger-decorative-26-plus"
        }
    ],
    "links": [
        {
            "label": "Fitted wardrobe design and installation",
            "href": "/bespoke-joinery/wardrobes"
        },
        {
            "label": "Explore TV and entertainment units",
            "href": "/bespoke-joinery/entertainment-units"
        },
        {
            "label": "Compare joinery materials and finishes",
            "href": "/guides/joinery-materials-finishes"
        },
        {
            "label": "Check our local service area",
            "href": "/areas"
        },
        {
            "label": "Send your fitted-furniture brief",
            "href": "/contact?service=bespoke-joinery#enquiry-form"
        }
    ],
    image: newsImages.materials
  },
  {
    slug: "warm-kitchen-colours-2026",
    title: "Warm kitchen colours: moving from a trend to a room that works",
    description: "Terracotta, tonal palettes and practical sample checks: how to use current kitchen ideas without losing sight of light, storage and installation.",
    category: "Kitchen ideas", published: "2026-10-13", checked: "2026-10-13", updatedAt: "2026-10-21T18:35:36.038552Z", image: newsImages.greenKitchen,
    sections: [
      { title: "Two current references", paragraphs: ["Wickes reports that its Whitworth Terracotta kitchen won Best Use of Colour at the Ideal Home Kitchen Awards 2026. Wren’s Big Home Trends Report 2026 discusses tonal colour palettes and flexible spaces for social use. These are useful references for a mood board, rather than a specification for every home."] },
      { title: "Check the light before choosing the colour", paragraphs: ["A warm cabinet colour can look quite different beside a cool floor or under a bright work light. Bring the proposed door, worktop and flooring samples together in the kitchen. Compare them in the morning, in the evening and with the lights switched on. Include any existing surfaces that will remain.", "Try the colour vertically as well as flat on a table. Doors, end panels and tall housings will reflect the room differently from a horizontal sample. If you are keeping wall tiles or a stone worktop, use those materials as part of the decision rather than relying on a supplier’s staged photograph."] },
      { title: "Use a palette to simplify decisions", paragraphs: ["A tonal scheme can connect several surfaces without making them identical. Choose which element should lead: perhaps the cabinet colour, a textured worktop or a timber detail. Then review the quieter supporting surfaces, handles and splashback alongside it.", "Avoid making each selection in isolation. Drawers, appliance fascias, exposed cabinet sides, plinths and cornices all become visible parts of the finished kitchen. List them before ordering so the chosen finish continues where you expect it to, and contrasting components are deliberate."] },
      { title: "Make room for everyday movement", paragraphs: ["An inviting kitchen also needs a workable layout. Consider where people enter, how cupboard and appliance doors open, and where hot dishes or shopping bags will be placed. If an island is part of the plan, check it against the actual room dimensions and the intended use of adjoining spaces.", "A photograph can suggest a layout, but it cannot establish the conditions behind the walls or the service positions in your home. Discuss those practical constraints while there is still time to adjust the supplier plan and agree the preparation work."] },
      { title: "What to send for an installation review", paragraphs: ["Send the supplier plan, postcode, room photographs, appliance details and preferred timing. Mark what is staying and what is being replaced. Form & Frame provides independent installation; a mention of Wickes or Wren is not a claim of endorsement or a commercial partnership.", "The supplier photograph shows Howdens Halesworth Ash Green, credited above. It illustrates colour planning and does not show Wickes Whitworth Terracotta or a Wren range."] },
    ],
    sources: [{ title: "Wickes — Ideal Home Kitchen Awards 2026", url: "https://www2.wickes.co.uk/ideal-home-awards" }, { title: "Wren — The Big Home Trends Report 2026", url: "https://www.wrenkitchens.com/blog/the-big-home-trends-report-2026/" }],
    links: [{ label: "View kitchen installation projects", href: "/kitchens" }, { label: "How independent kitchen installation works", href: "/kitchen-installation" }],
  },
  {
    slug: "supplied-kitchen-or-bespoke-joinery-planning",
    title: "A supplied kitchen or bespoke joinery: preparing the right project brief",
    description: "A practical checklist for comparing a supplier kitchen with fitted furniture and making the installation responsibilities clear before work begins.",
    category: "Planning guide", published: "2026-10-13", checked: "2026-10-13", image: newsImages.materials,
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

export function newsTopic(article: NewsArticle) {
  return article.topic ?? (["Materials & textures", "Kitchen ideas"].includes(article.category) ? "materials-design" : "installation-advice");
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(date.includes("T") ? date : `${date}T12:00:00Z`));
}

// A source recheck is separate from an editorial publication or update.
export function articlePublishedAt(article: NewsArticle) { return article.publishedAt ?? article.published; }
export function articleModifiedAt(article: NewsArticle) { return article.updatedAt ?? articlePublishedAt(article); }

// Only substantive editorial updates change this ordering; source checks do not.
export function latestNewsArticles() {
  return [...newsArticles].sort((a, b) => new Date(articleModifiedAt(b)).getTime() - new Date(articleModifiedAt(a)).getTime());
}
