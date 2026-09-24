type PhotoConfig = { src: string; alt: string; tone: "kitchen" | "detail" | "installation" };

export const homepagePhotos = {
  hero: {
    src: "/images/homepage/modern-white-handleless-kitchen-installation.webp",
    alt: "Modern white handleless fitted kitchen with integrated appliances installed by Form & Frame",
    tone: "kitchen",
  },
  technical: {
    src: "/images/homepage/kitchen-worktop-hob-appliance-installation-detail.webp",
    alt: "Close-up of a fitted kitchen worktop, gas hob and integrated oven installation detail",
    tone: "detail",
  },
  finished: {
    src: "/images/homepage/modern-white-handleless-kitchen-installation.webp",
    alt: "Completed modern white handleless kitchen installation",
    tone: "kitchen",
  },
  craftsmanship: {
    src: "/images/homepage/integrated-dishwasher-kitchen-installation-detail.webp",
    alt: "Integrated dishwasher fitted beneath a white kitchen worktop",
    tone: "detail",
  },
  complex: {
    src: "/images/homepage/fitted-kitchen-utility-storage-installation.webp",
    alt: "Fitted kitchen utility storage with integrated microwave and tall cabinetry",
    tone: "installation",
  },
} satisfies Record<string, PhotoConfig>;

export type PhotoKey = keyof typeof homepagePhotos;
