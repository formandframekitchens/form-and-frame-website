export type ServiceImage = {
  src?: string;
  alt: string;
  caption?: string;
  note?: string;
};

export type ServiceImageSet = {
  hero: ServiceImage;
  detail: ServiceImage;
  gallery: ServiceImage[];
};

const makeSet = (label: string, location = "Luton and surrounding areas"): ServiceImageSet => ({
  hero: {
    alt: `${label} by Form & Frame`,
    caption: `${label} — project imagery will be added from our own installation portfolio.`,
    note: location,
  },
  detail: {
    alt: `Installation detail for ${label.toLowerCase()}`,
    caption: "Detail imagery placeholder — replace with a real project photograph.",
    note: location,
  },
  gallery: Array.from({ length: 6 }, (_, index) => ({
    alt: `${label} project image ${index + 1}`,
    caption: `Project image ${String(index + 1).padStart(2, "0")} — curated photography coming soon.`,
    note: location,
  })),
});

export const serviceImages: Record<string, ServiceImageSet> = {
  "kitchen-installation": makeSet("Kitchen installation"),
  howdens: makeSet("Howdens kitchen installation"),
  wren: makeSet("Wren kitchen installation"),
  ikea: makeSet("IKEA kitchen installation"),
  magnet: makeSet("Magnet kitchen installation"),
  wickes: makeSet("Wickes kitchen installation"),
  benchmarx: makeSet("Benchmarx kitchen installation"),
  "b-and-q": makeSet("B&Q kitchen installation"),
  "in-frame-kitchens": makeSet("Traditional in-frame kitchen"),
  "internal-door-installation": makeSet("Internal door installation"),
};

export function getServiceImages(key: string) {
  return serviceImages[key] ?? serviceImages["kitchen-installation"];
}
