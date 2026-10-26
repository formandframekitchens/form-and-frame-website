import type { JoineryId } from "./joinery-types";

type PlanningBrief = {
  title: string;
  decisions: { title: string; copy: string }[];
  handover: string;
};

export const joineryPlanning: Record<JoineryId, PlanningBrief> = {
  wardrobes: {
    title: "Prepare a useful wardrobe brief",
    decisions: [
      { title: "Measure the contents as well as the room", copy: "List long coats and dresses, folded clothing, shoes and anything that needs its own drawer. Include the longest hanging items so the internal layout is based on the storage you actually need." },
      { title: "Show the space in front", copy: "Photograph the bed, doorway, radiator and sockets as well as the wardrobe wall. Hinged doors and drawers need clear opening space; a neat frontage alone does not establish that the layout will work." },
      { title: "Agree the inside and outside together", copy: "Use the drawing to approve rail positions, shelf spacing, handles and the visible finish. If lighting is included, identify its switching, power supply and maintenance access before manufacture." },
    ],
    handover: "At handover, check doors and drawers with the room furniture in place where possible, confirm the agreed shelf positions and demonstrate any lighting controls. Keep the approved internal layout with the finish information.",
  },
  "alcove-units": {
    title: "Plan each alcove before matching the pair",
    decisions: [
      { title: "Record both recesses separately", copy: "Send a straight-on room photograph and approximate width, height and depth for each side. Note skirting, cornice and changes in wall depth; matching frontages do not necessarily mean identical cabinets." },
      { title: "Choose what is displayed and concealed", copy: "List books and display objects, then identify equipment or everyday items for the lower cupboards. Their size affects shelf spacing, cupboard depth and the balance of the two elevations." },
      { title: "Keep the fireplace and services accessible", copy: "Identify the fireplace model, sockets, vents and any access panels. Relevant appliance clearances and servicing requirements need checking before the joinery layout is approved." },
    ],
    handover: "Check the agreed alignment across both alcoves, cupboard openings and shelf positions. Confirm that sockets, ventilation and any lighting components remain accessible as specified.",
  },
  "entertainment-units": {
    title: "Build the brief around the screen and equipment",
    decisions: [
      { title: "Supply the actual equipment list", copy: "Include television and bracket models, soundbar, speakers, consoles and receivers. Record the space needed for plugs and cables as well as the box dimensions; equipment specifications determine ventilation requirements." },
      { title: "Confirm viewing and fixing positions", copy: "Show the main seating position and the wall construction if known. Agree screen height, support and cabinet depth together before deciding on a floating unit or a complete media wall." },
      { title: "Plan how equipment will be replaced", copy: "Decide which panels or shelves provide access, how cables reach sockets and where controls need a clear signal. A concealed installation should still allow practical servicing without dismantling unrelated furniture." },
    ],
    handover: "Check door movement, access panels and the agreed cable routes with the intended equipment in place. Distinguish furniture installation from specialist audiovisual setup in the quotation.",
  },
  "under-stairs-storage": {
    title: "Start with access, then design the storage",
    decisions: [
      { title: "Photograph the whole opening", copy: "Show the staircase slope, hallway and everything already inside. Mark meters, cables, pipework, valves and existing access panels; these constraints need to be visible before compartments are designed." },
      { title: "Test the opening space", copy: "Identify the largest item to store and the clear hallway width. A deep pull-out needs room to travel; a hinged door may suit another part of the slope. Agree the arrangement before selecting the frontage." },
      { title: "Separate storage from service access", copy: "Specify how each meter or maintenance point will be reached. Any service-provider access or ventilation requirements need checking with the appropriate specialist; joinery should not assume that all of the void is usable storage." },
    ],
    handover: "Demonstrate how the drawers, doors and agreed access panels open. Confirm the route to each identified maintenance point and explain any removable components without changing the services themselves.",
  },
  bookcases: {
    title: "Specify the collection before the shelving",
    decisions: [
      { title: "Group books by size and use", copy: "Measure representative tall and deep books and estimate how much of the collection needs each shelf height. Separate everyday books, display objects and items better kept behind cupboard doors." },
      { title: "Agree spans and support", copy: "The material, shelf depth, unsupported span and intended contents need considering together. Provide the likely load rather than choosing shelf thickness from a photograph alone." },
      { title: "Show the complete wall", copy: "Include sockets, radiators, door openings, skirting and cornice in the room photographs. Agree whether shelving is fixed or adjustable and how any lighting can be maintained." },
    ],
    handover: "Check the agreed shelf arrangement, adjustable fittings and cupboard movement. Confirm any loading or care information applicable to the specified construction before filling the bookcase.",
  },
  "office-furniture": {
    title: "Plan the working position before the cabinets",
    decisions: [
      { title: "Start with your chair and equipment", copy: "List monitors, stands, computer, printer and other equipment with dimensions. Try the intended seated position and desk depth, including knee room and the clearance needed to move the chair." },
      { title: "Map power and everyday access", copy: "Identify sockets, charging points and cable routes. Check printer trays and doors in their open position, and allow access to connections rather than enclosing them behind a fixed back." },
      { title: "Balance working space with storage", copy: "Separate items that must remain on the desk from files and occasional equipment. Room photographs should show daylight, possible screen reflections, doors and how the workspace shares the room." },
    ],
    handover: "Try the chair, drawers and equipment in their intended positions, check agreed cable access and confirm how to reach any lighting or power components. Electrical alterations remain a separately agreed specialist responsibility.",
  },
  "unique-furniture": {
    title: "Turn an individual idea into a clear brief",
    decisions: [
      { title: "Describe its job in the room", copy: "Explain what needs to be stored, displayed or used, with dimensions for unusual items. Distinguish essential functions from decorative references so the design has a practical starting point." },
      { title: "Identify the conditions and access", copy: "Show the location and route into the room. Moisture, nearby heat, plumbing and service access affect the specification; a bathroom vanity and a dry display cabinet need different decisions." },
      { title: "Approve the details that define it", copy: "Agree drawings, material samples, handles, internal fittings and who supplies any specialist components. Confirm how the piece meets walls, floors or adjacent furniture before manufacture is arranged." },
    ],
    handover: "Review the completed piece against the agreed drawings and specification, demonstrate moving parts and access points, and retain the material-care information supplied for the chosen finishes.",
  },
};
