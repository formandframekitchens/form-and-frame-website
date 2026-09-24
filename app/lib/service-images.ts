import { kitchenChoices } from "./kitchen-choices";

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

const makeKitchenSet = (key: string, label: string): ServiceImageSet => {
  const images = makeSet(label);
  const choice = kitchenChoices.find(item => item.href.split("/").pop() === key);
  if (choice) images.hero = {
    src: choice.image,
    alt: choice.alt,
    caption: "AI-generated kitchen concept. Illustrative design, not a photograph of a supplier range or completed project.",
  };
  return images;
};

export const serviceImages: Record<string, ServiceImageSet> = {
  "kitchen-installation": makeSet("Kitchen installation"),
  howdens: makeKitchenSet("howdens", "Howdens kitchen installation"),
  wren: makeKitchenSet("wren", "Wren kitchen installation"),
  ikea: makeKitchenSet("ikea", "IKEA kitchen installation"),
  magnet: makeKitchenSet("magnet", "Magnet kitchen installation"),
  wickes: makeKitchenSet("wickes", "Wickes kitchen installation"),
  benchmarx: makeSet("Benchmarx kitchen installation"),
  "b-and-q": makeSet("B&Q kitchen installation"),
  "in-frame-kitchens": makeKitchenSet("in-frame-kitchens", "Traditional in-frame kitchen"),
  "bespoke-kitchens": makeKitchenSet("bespoke-kitchens", "Bespoke kitchen"),
  "internal-door-installation": makeSet("Internal door installation"),
};

export function getServiceImages(key: string) {
  return serviceImages[key] ?? serviceImages["kitchen-installation"];
}
