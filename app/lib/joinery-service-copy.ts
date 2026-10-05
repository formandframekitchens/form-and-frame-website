import type { JoineryId } from "./joinery-types";

type ServiceCopy = {
  seoTitle: string;
  description: string;
  sections: { title: string; copy: string[] }[];
  question: string;
  answer: string;
};

export const joineryServiceCopy: Record<JoineryId, ServiceCopy> = {
  wardrobes: {
    seoTitle: "Bespoke Fitted Wardrobes Luton",
    description: "Bespoke fitted wardrobes and walk-in dressing rooms in Luton. Hanging space, drawers, mirrored doors and finishes designed around your room and clothing.",
    sections: [
      { title: "Built-in wardrobes that work inside and out", copy: ["The door style is only the beginning. A useful fitted wardrobe starts with the clothes, shoes and accessories it needs to hold. Long hanging space, shorter rails, drawers and shelves can be arranged around your collection instead of fitting everything into a standard internal layout.", "We review alcoves, ceiling heights, skirting, sockets and the clear space around the bed. Mirrored fronts, framed doors and quieter flat panels create different effects, while the internal finish can be selected separately from the outside. Drawings establish both the frontage and the storage behind it."] },
      { title: "Walk-in wardrobes and dressing rooms", copy: ["A walk-in wardrobe brings several storage runs together. The aisle width, opening doors, pull-out trays and any central island must work as a complete plan. Display lighting, shoe shelves and a seated dressing area can be considered where the space allows.", "Our completed galleries show different approaches, from open illuminated storage to mirrored wardrobes and jewellery islands. Use them to identify the details you like, then discuss how those ideas could fit your own room in Luton or the surrounding area."] },
    ],
    question: "Can a fitted wardrobe work below a sloping ceiling?",
    answer: "Often, but the usable height and depth need measuring first. The slope may suit shelving or lower cupboards better than full hanging space. We review the room and intended contents before proposing the internal layout.",
  },
  "alcove-units": {
    seoTitle: "Bespoke Alcove Cupboards & Shelving Luton",
    description: "Bespoke alcove units in Luton, with fitted cupboards, shelves and lighting beside your fireplace. Explore completed projects and discuss your room.",
    sections: [
      { title: "Fitted cupboards and shelves beside the fireplace", copy: ["Alcove units turn the recesses beside a chimney breast into practical storage. Lower cupboards can hide everyday items while open shelves make space for books, photographs and objects. Their depth and height should respond to the room rather than simply fill the entire recess.", "The two alcoves may have different dimensions, even when they appear symmetrical. We consider those differences alongside the fireplace, existing cornice, skirting and sockets. A coordinated design can keep the finished pair balanced without assuming identical construction on each side."] },
      { title: "Painted, grain and illuminated details", copy: ["A pale painted finish can sit quietly against the walls; visible grain, darker cupboards or a contrasting shelf can make the furniture more prominent. Lighting is useful when display is a priority, with access to the components included in the design.", "The gallery includes pale fitted alcoves and darker illuminated arrangements. Look at the shelf spacing, lower door proportions and relationship to the central fireplace when comparing ideas. These decisions usually matter more to the finished result than adding decoration without a clear purpose."] },
    ],
    question: "Can the cupboards accommodate a television or media equipment?",
    answer: "Yes, subject to the room and equipment. We need the screen and device dimensions, cable routes and ventilation requirements. The cupboard design should preserve access to sockets and allow equipment to be replaced later.",
  },
  bookcases: {
    seoTitle: "Bespoke Bookcases & Library Shelving Luton",
    description: "Made-to-measure bookcases and fitted library shelving in Luton, with open display, lower cupboards and finishes planned around your collection.",
    sections: [
      { title: "A fitted library for the books you own", copy: ["Bookcases need to be designed around real contents. Paperbacks, large art books and collections of objects require different heights and depths. The intended load also influences shelf spans and support, particularly across a full library wall.", "We consider the balance between open shelving and closed cupboards, the position of the furniture in the room and how the collection may grow. A simple painted library, a dark display wall and a room-dividing bookcase can all serve different purposes within a bespoke design."] },
      { title: "Details that give the bookcase its character", copy: ["Grain direction, shelf thickness, vertical divisions and the finish of the back panels affect how a large bookcase reads from across the room. Glass, mirrors, metal trim and lighting can be introduced where they support the design rather than crowd the books.", "Our project galleries show both complete elevations and close views of drawers, doors and shelf edges. These are useful references for agreeing the practical storage and finish before technical drawings and manufacturing details are completed."] },
    ],
    question: "Can you combine a bookcase with a desk or media unit?",
    answer: "Yes. A fitted library can include a working area, television or lower storage. The equipment, seating space and cable access should be designed alongside the shelves so that each part remains practical to use.",
  },
  "entertainment-units": {
    seoTitle: "Bespoke Media Walls & TV Units Luton",
    description: "Bespoke media walls and fitted TV units in Luton, with display shelves, concealed storage, cable access and finishes designed for your living room.",
    sections: [
      { title: "A media wall designed around your equipment", copy: ["The screen size and viewing position establish the starting point, but the furniture also needs to accommodate speakers, consoles, receivers and everyday storage. Cable routes, sockets and ventilation must remain accessible behind a clean finished frontage.", "A floating TV unit keeps the wall open, while a full-height media wall can bring shelving and cupboards together around the screen. We review the wall construction, available depth and room layout before deciding which approach is practical."] },
      { title: "Furniture for the room when the screen is off", copy: ["Display shelves, grain, panel divisions and lighting give a media wall its character throughout the day. Closed lower cupboards can keep accessories out of sight, with a more open arrangement above for objects and books.", "If the scheme includes a fireplace, the appliance specification and clearances must be coordinated with the joinery. The completed portfolio includes compact wall-mounted furniture and larger fitted TV walls, with close photographs showing the material and cabinet details."] },
    ],
    question: "Can the design allow for changing the television later?",
    answer: "We can discuss suitable clearances and an accessible mounting arrangement. Future equipment cannot be predicted exactly, but agreeing a practical screen opening and accessible cable routes can make later changes easier.",
  },
  "office-furniture": {
    seoTitle: "Bespoke Home Office Furniture Luton",
    description: "Fitted home-office furniture in Luton: bespoke desks, library shelves, cupboards and cable access planned around your workspace and equipment.",
    sections: [
      { title: "A fitted workspace for the way you work", copy: ["A home office starts with the working position: chair, desk height, monitor distance and the space needed for documents or equipment. A fitted desk can make a compact corner useful or form the centre of a complete office and library.", "We discuss how many people will use the workspace, what needs to remain on the desk and what should be stored nearby. Drawers, printer cupboards and shelving can then be planned around actual dimensions rather than added after the layout is fixed."] },
      { title: "Storage, light and a considered finish", copy: ["Window position, task lighting and screen reflections influence the arrangement. Cables and sockets need accessible routes, especially where the desk is fitted between walls or joined to tall storage. A clear design keeps those practical details within reach.", "The gallery includes full-height office shelving as well as smaller fitted bedroom desks. Visible grain, painted cabinetry and textured writing surfaces can each create a different character. Samples and technical drawings help establish the finish and proportions before manufacture."] },
    ],
    question: "Can a fitted office share a bedroom or living room?",
    answer: "Yes. A compact desk and coordinated storage can be designed as part of another room. The chair space, drawer projection, daylight and cable access need checking so that the workspace does not obstruct the room's other uses.",
  },
  "under-stairs-storage": {
    seoTitle: "Bespoke Under-Stairs Storage Luton",
    description: "Made-to-measure under-stairs cupboards and pull-out storage in Luton. Plan useful space for shoes, coats and household items around your staircase.",
    sections: [
      { title: "Use the shape beneath your staircase", copy: ["The space below the stairs changes in height and depth along its length. A measured layout can identify where hanging storage is useful and where shelves or smaller pull-out compartments make more sense. The aim is accessible storage, not simply doors across an awkward opening.", "Tell us what you want to store: shoes, coats, cleaning equipment or larger household items. Their dimensions help determine the openings and internal fittings. The hall also needs enough clear space for a door or drawer to open without blocking the route through the house."] },
      { title: "Plan around the structure and existing services", copy: ["Meters, pipework, sockets and access panels may already occupy the space. These must be identified before a design is agreed, together with any constraints from the staircase construction. The furniture should preserve the access needed for maintenance.", "A pale frontage can blend with the wall, while framed doors or a visible grain can make the storage a feature. Share photographs and approximate dimensions for an initial discussion; the final proposal depends on a site survey and the agreed specification."] },
    ],
    question: "Will every under-stairs space suit pull-out drawers?",
    answer: "No. The available depth, internal obstructions and clear space in the hallway determine whether pull-outs are suitable. Hinged cupboards or shelving may be a better option in part of the space.",
  },
  "unique-furniture": {
    seoTitle: "Bespoke Furniture & Custom Cabinetry Luton",
    description: "Individual bespoke furniture in Luton, from drinks cabinets and vanity units to window seats and eaves storage. Discuss a piece made for your room.",
    sections: [
      { title: "An individual piece with a clear purpose", copy: ["Some projects begin with a particular object to store or a space that standard furniture cannot use. A drinks cabinet, fitted window seat, bathroom vanity or low eaves cupboard can each benefit from a made-to-measure approach.", "Start by explaining what the piece needs to do. Photographs, sketches and references help communicate the idea, while the room dimensions and access establish what is practical. We develop the proportions and internal arrangement before refining the visible details."] },
      { title: "From material ideas to an agreed specification", copy: ["Veneer, painted surfaces, decorative panels, mirrors and metal details can be combined in many ways. The right choice depends on the intended use, the surrounding interior and the manufacturing method. A bathroom cabinet has different requirements from a dry living-room display piece.", "The completed galleries show both full furniture pieces and close details such as lift-up mirrors, divided drawers and integrated lighting. They provide a starting point for discussion, with the final drawings, samples and written specification defining your own project."] },
    ],
    question: "Can you work from an interior designer's drawings?",
    answer: "Yes. Existing drawings and references can be reviewed as the starting brief. Dimensions, construction, material suitability and installation details still need coordination and site verification before manufacture is confirmed.",
  },
};
