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

const makeSet = (label: string): ServiceImageSet => ({
  hero: { alt: `${label} by Form & Frame` },
  detail: { alt: `Installation detail for ${label.toLowerCase()}` },
  gallery: [],
});

const makeKitchenSet = (key: string, label: string): ServiceImageSet => {
  const images = makeSet(label);
  const choice = kitchenChoices.find(item => item.href.split("/").pop() === key);
  if (choice) images.hero = { src: choice.image, alt: choice.alt };
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
