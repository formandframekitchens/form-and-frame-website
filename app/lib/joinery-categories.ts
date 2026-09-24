import type { JoineryId } from "./joinery-types";

export type JoineryGalleryImage = { src: string; alt: string; caption?: string };
export type JoineryCategory = {
  slug: JoineryId;
  title: string;
  copy: string;
  image: string;
  alt: string;
  introduction: string;
  considerations: string[];
  gallery?: JoineryGalleryImage[];
};

// Add curated category galleries here as each individual page is developed.
export const joineryCategories: readonly JoineryCategory[] = [
  {
    slug: "wardrobes", title: "Bespoke wardrobes",
    copy: "Fitted wardrobes with hanging space, drawers and storage arranged around you.",
    image: "/images/joinery-choices/01-wardrobes.webp",
    alt: "Sage-green fitted wardrobes with oak shelving and hanging storage",
    introduction: "Wardrobes designed around your room and the way you organise your clothes. We can discuss the fitted layout, door style, hanging space, shelving and drawers as one coordinated design.",
    considerations: ["The wall space, ceiling height and any sloping ceilings.", "Your preferred balance of hanging space, drawers and shelves.", "Door styles, handles and finishes that suit the room."],
  },
  {
    slug: "alcove-units", title: "Bespoke alcove units",
    copy: "Cupboards and shelving fitted neatly into the spaces beside your fireplace.",
    image: "/images/joinery-choices/02-alcove-units.webp",
    alt: "Fitted sage-green alcove cupboards with oak shelves beside a fireplace",
    introduction: "Make useful storage from the spaces beside a chimney breast or within a wall recess. Alcove cupboards and shelving can combine concealed storage with open display, sized to the proportions of your room.",
    considerations: ["The width and depth of each alcove, including skirtings and wall irregularities.", "What you want to display and what you would prefer to store behind doors.", "Existing sockets, cables and the relationship to the fireplace."],
  },
  {
    slug: "bookcases", title: "Bespoke bookcases",
    copy: "Shelving made for your books, collections and the proportions of your room.",
    image: "/images/joinery-choices/03-bookcases.webp",
    alt: "A full-wall oak bookcase with books, display shelves and low cupboards",
    introduction: "A bookcase can make a whole wall work harder or bring purpose to a smaller recess. We consider shelf heights, book sizes, display space and closed storage alongside the finish and proportions.",
    considerations: ["The sizes of your books and the items you would like to display.", "Open shelving, low cupboards or a combination of the two.", "Shelf spans, intended loads and suitable fixing into the existing walls."],
  },
  {
    slug: "entertainment-units", title: "Entertainment units",
    copy: "Media cabinetry with space for your screen, equipment and concealed cables.",
    image: "/images/joinery-choices/04-entertainment-unit.webp",
    alt: "A television framed by oak panelling and fitted sage-green media storage",
    introduction: "Bring the television, media equipment and storage together in one considered piece of cabinetry. The layout can balance open display with concealed storage while allowing for access, cables and ventilation.",
    considerations: ["Your screen size, viewing position and any wall mounting requirements.", "Equipment dimensions, cable routes and ventilation needs.", "The balance of display shelving and closed cupboards."],
  },
  {
    slug: "office-furniture", title: "Office furniture",
    copy: "Fitted desks, shelving and storage for a comfortable place to work.",
    image: "/images/joinery-choices/05-office-furniture.webp",
    alt: "A fitted oak desk with sage-green drawers and matching office shelves",
    introduction: "Create a working space around the equipment you use and the storage you need. A fitted desk, cupboards and shelving can make a dedicated office or a quieter corner of your home more practical.",
    considerations: ["The number of people using the workspace and the equipment it needs to hold.", "Desk height, seating space and the position of windows and lighting.", "Storage for documents, printers and everyday items, with accessible cable routes."],
  },
  {
    slug: "under-stairs-storage", title: "Under-stairs storage",
    copy: "Make the space beneath your stairs useful with cupboards and pull-out storage.",
    image: "/images/joinery-choices/06-under-stairs-storage.webp",
    alt: "Fitted storage beneath an oak staircase with a pull-out shoe drawer",
    introduction: "Use the shape beneath your staircase for storage that is easier to reach and organise. Depending on the space, the design can combine cupboards, shelves and pull-out compartments for everyday belongings.",
    considerations: ["The staircase shape, available depth and clear space for opening doors or drawers.", "Shoes, coats, household items or other belongings you need to store.", "Access to existing meters, pipes, services and the staircase structure."],
  },
  {
    slug: "unique-furniture", title: "Unique furniture",
    copy: "Individual pieces and unusual fitted projects, developed around your idea.",
    image: "/images/joinery-choices/07-unique-furniture.webp",
    alt: "A curved oak sideboard with fluted doors and a pale stone top",
    introduction: "For an idea that does not fit a standard category, share the room, the purpose and a few references. We can review an individual furniture piece or an unusual fitted project and discuss what is practical to design, make and install.",
    considerations: ["What the piece needs to do and the space it will occupy.", "Reference images, sketches or existing furniture you want it to complement.", "Materials, finish, access and the practical requirements of making and installing it."],
  },
];

export function getJoineryCategory(slug: string) {
  return joineryCategories.find(category => category.slug === slug);
}
