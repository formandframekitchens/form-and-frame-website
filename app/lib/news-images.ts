export type NewsImage = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  creditUrl?: string;
};

// Reuse evidence and original files are recorded privately in marketing/seo.
// News imagery is independent of the owner's project galleries.
const howdensCredit = {
  credit: "Howdens",
  creditUrl: "https://www.howdens.com/help-and-advice/about-us/newsroom/using-our-brand",
};

export const newsImages = {
  storagePlanning: {
    src: "/images/news/ai-under-sink-storage-planning.webp",
    alt: "AI concept showing an open sink cupboard with pipework and two storage baskets",
    caption: "Original AI concept illustrating under-sink storage planning. This is not an IKEA product photograph, a completed Form & Frame project or a technical installation diagram. Confirm dimensions and service clearances using the selected products and actual cupboard.",
    credit: "AI concept created for Form & Frame",
  },
  dishwasher: {
    src: "/images/news/ai-integrated-dishwasher-planning.webp",
    alt: "AI concept of an open integrated dishwasher among ivory and oak kitchen cabinets",
    caption: "Original AI concept illustrating an integrated dishwasher and surrounding cabinetry. This is not an IKEA product, a completed Form & Frame project or a technical installation diagram. Confirm the exact appliance and front combination with its manufacturers.",
    credit: "AI concept created for Form & Frame",
  },
  mixedKitchen: {
    src: "/images/news/howdens-frome-charcoal-clerkenwell-bronze.webp",
    alt: "Howdens Frome Charcoal cabinetry with a contrasting bronze-coloured island",
    caption: "Howdens Frome Charcoal with Clerkenwell bronze finishes: a supplier example of contrasting cabinetry, rather than the Grand Designs Live display discussed below.",
    ...howdensCredit,
  },
  navyKitchen: {
    src: "/images/news/howdens-chilcomb-navy-olive.webp",
    alt: "Howdens Chilcomb kitchen combining navy and olive cabinets around an island",
    caption: "Howdens Chilcomb Navy and Olive. Supplier design imagery illustrating the cabinetry and layout decisions to include in a fitting brief.",
    ...howdensCredit,
  },
  whiteKitchen: {
    src: "/images/news/howdens-winterton-gloss-white.webp",
    alt: "Howdens Winterton Gloss White kitchen with an island and tall appliance cabinets",
    caption: "Howdens Winterton Gloss White. Supplier design imagery showing a fitted kitchen layout.",
    ...howdensCredit,
  },
  greenKitchen: {
    src: "/images/news/howdens-halesworth-ash-green.webp",
    alt: "Howdens Halesworth Ash Green kitchen with timber worktops and brass-coloured handles",
    caption: "Howdens Halesworth Ash Green: green cabinetry paired with timber worktops in supplier design imagery.",
    ...howdensCredit,
  },
  fitting: {
    src: "/images/news/howdens-cabinet-fitting.webp",
    alt: "A fitter adjusting a cabinet door hinge in Howdens media photography",
    caption: "Cabinet fitting detail from Howdens’ media library. This supplier photograph illustrates the fitting stage; it is not a Form & Frame installation.",
    ...howdensCredit,
  },
  storage: {
    src: "/images/news/orgalux-drawer-storage.webp",
    alt: "An open kitchen drawer organised with plate holders, cups and spice containers",
    caption: "Orgalux drawer organisation, shown as a general storage illustration. The photograph does not show a Wren corner mechanism.",
    credit: "Orgalux / Unsplash",
    creditUrl: "https://unsplash.com/photos/an-open-drawer-in-a-kitchen-filled-with-dishes-BngKr53ZvR4",
  },
  colour: {
    src: "/images/news/ai-sage-fitted-furniture-concept.webp",
    alt: "AI concept of sage-green walls with light oak fitted cabinetry and a neutral stone surface",
    caption: "AI concept created for this article, showing a general sage-and-oak palette. This is not a completed project, a Dulux product image or an exact representation of Soulful Sage. Check a physical paint sample.",
    credit: "AI concept created for Form & Frame",
  },
  materials: {
    src: "/images/news/ai-joinery-materials-concept.webp",
    alt: "AI concept of oak-effect, walnut-effect, neutral matt and stone-effect material samples",
    caption: "AI concept created to illustrate material selection. These are imagined samples, not identified EGGER products or materials from a completed Form & Frame project.",
    credit: "AI concept created for Form & Frame",
  },
} satisfies Record<string, NewsImage>;
