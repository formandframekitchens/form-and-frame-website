export type GalleryImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export type GalleryProject = {
  slug: string;
  title: string;
  category: "Kitchen Installation" | "Bespoke Joinery";
  location?: string;
  summary: string;
  cover: GalleryImage;
  images: GalleryImage[];
};

export const galleryProjects: GalleryProject[] = [
  {
    slug: "handleless-kitchen-installation",
    title: "Handleless Kitchen Installation",
    category: "Kitchen Installation",
    summary: "A completed white handleless kitchen installation with integrated appliances, fitted utility storage and carefully coordinated finishing details.",
    cover: {
      src: "/images/homepage/modern-white-handleless-kitchen-installation.webp",
      alt: "Completed white handleless kitchen installation",
      fit: "contain",
    },
    images: [
      {
        src: "/images/homepage/modern-white-handleless-kitchen-installation.webp",
        alt: "Completed white handleless kitchen installation",
        fit: "contain",
      },
      {
        src: "/images/homepage/white-handleless-kitchen-fitting-integrated-appliances.webp",
        alt: "White handleless kitchen with integrated appliances",
        fit: "contain",
      },
      {
        src: "/images/homepage/fitted-kitchen-utility-storage-installation.webp",
        alt: "Fitted utility storage and integrated kitchen appliances",
        fit: "contain",
      },
      {
        src: "/images/homepage/integrated-dishwasher-kitchen-installation-detail.webp",
        alt: "Integrated dishwasher installation detail",
        fit: "contain",
      },
      {
        src: "/images/homepage/kitchen-worktop-hob-appliance-installation-detail.webp",
        alt: "Kitchen worktop and hob installation detail",
        fit: "contain",
      },
    ],
  },
  {
    slug: "soho-bespoke-bookcase",
    title: "Soho Bespoke Bookcase",
    category: "Bespoke Joinery",
    location: "Soho, London",
    summary: "Full-height fitted bookcase cabinetry with integrated display lighting and a dark, architectural finish.",
    cover: {
      src: "/images/gallery/soho-bespoke-bookcase/soho-bespoke-bookcase-room-view-01.webp",
      alt: "Soho bespoke bookcase room view",
    },
    images: [
      { src: "/images/gallery/soho-bespoke-bookcase/soho-bespoke-bookcase-room-view-01.webp", alt: "Soho bespoke bookcase room view" },
      { src: "/images/gallery/soho-bespoke-bookcase/soho-bespoke-bookcase-full-height-02.webp", alt: "Full-height Soho bespoke bookcase" },
      { src: "/images/gallery/soho-bespoke-bookcase/soho-bespoke-bookcase-lighting-detail-03.webp", alt: "Integrated lighting detail in Soho bespoke bookcase" },
    ],
  },
  {
    slug: "soho-walk-in-wardrobe",
    title: "Soho Walk-In Wardrobe",
    category: "Bespoke Joinery",
    location: "Soho, London",
    summary: "An illuminated walk-in wardrobe with open storage, mirrored detailing, drawers and integrated LED lighting.",
    cover: {
      src: "/images/gallery/soho-walk-in-wardrobe/soho-walk-in-wardrobe-illuminated-storage-01.webp",
      alt: "Illuminated Soho walk-in wardrobe storage",
    },
    images: [
      { src: "/images/gallery/soho-walk-in-wardrobe/soho-walk-in-wardrobe-illuminated-storage-01.webp", alt: "Illuminated Soho walk-in wardrobe storage" },
      { src: "/images/gallery/soho-walk-in-wardrobe/soho-walk-in-wardrobe-aisle-view-02.webp", alt: "Aisle view through Soho walk-in wardrobe" },
      { src: "/images/gallery/soho-walk-in-wardrobe/soho-walk-in-wardrobe-drawer-mirror-detail-03.webp", alt: "Drawer and mirror detail in Soho walk-in wardrobe" },
    ],
  },
  {
    slug: "soho-shoe-storage-cabinet",
    title: "Soho Shoe-Storage Cabinet",
    category: "Bespoke Joinery",
    location: "Soho, London",
    summary: "A purpose-built shoe-storage cabinet with open shelving, integrated lighting and coordinated dark cabinetry.",
    cover: {
      src: "/images/gallery/soho-shoe-storage-cabinet/soho-shoe-storage-cabinet-overall-view-01.webp",
      alt: "Soho bespoke shoe-storage cabinet overall view",
    },
    images: [
      { src: "/images/gallery/soho-shoe-storage-cabinet/soho-shoe-storage-cabinet-overall-view-01.webp", alt: "Soho bespoke shoe-storage cabinet overall view" },
      { src: "/images/gallery/soho-shoe-storage-cabinet/soho-shoe-storage-cabinet-angled-view-02.webp", alt: "Angled view of Soho shoe-storage cabinetry" },
      { src: "/images/gallery/soho-shoe-storage-cabinet/soho-shoe-storage-cabinet-led-shelf-detail-03.webp", alt: "LED shelf detail in Soho shoe-storage cabinet" },
      { src: "/images/gallery/soho-shoe-storage-cabinet/soho-shoe-storage-cabinet-illuminated-centre-detail-04.webp", alt: "Illuminated centre shelving detail in Soho shoe-storage cabinet" },
    ],
  },
  {
    slug: "grey-black-bespoke-media-wall",
    title: "Grey & Black Bespoke Media Wall",
    category: "Bespoke Joinery",
    location: "London",
    summary: "Floating media cabinetry shown in two coordinated finishes, with wall-mounted storage, shelves and clean integrated proportions.",
    cover: {
      src: "/images/gallery/grey-black-bespoke-media-wall/grey-bespoke-media-wall-front-view-01.webp",
      alt: "Grey bespoke media wall front view",
    },
    images: [
      { src: "/images/gallery/grey-black-bespoke-media-wall/grey-bespoke-media-wall-front-view-01.webp", alt: "Grey bespoke media wall front view" },
      { src: "/images/gallery/grey-black-bespoke-media-wall/grey-bespoke-media-wall-angled-view-02.webp", alt: "Grey bespoke media wall angled view" },
      { src: "/images/gallery/grey-black-bespoke-media-wall/black-bespoke-media-wall-front-view-03.webp", alt: "Black bespoke media wall front view" },
      { src: "/images/gallery/grey-black-bespoke-media-wall/black-bespoke-media-wall-angled-view-04.webp", alt: "Black bespoke media wall angled view" },
    ],
  },
  {
    slug: "golden-textured-front-cabinet",
    title: "Golden Textured-Front Cabinet",
    category: "Bespoke Joinery",
    location: "London",
    summary: "A freestanding bespoke cabinet with textured metallic-toned fronts, dark framing and a fitted storage interior.",
    cover: {
      src: "/images/gallery/golden-textured-front-cabinet/golden-textured-front-cabinet-room-context-01.webp",
      alt: "Golden textured-front cabinet in finished room",
    },
    images: [
      { src: "/images/gallery/golden-textured-front-cabinet/golden-textured-front-cabinet-room-context-01.webp", alt: "Golden textured-front cabinet in finished room" },
      { src: "/images/gallery/golden-textured-front-cabinet/golden-textured-front-cabinet-closed-view-02.webp", alt: "Golden textured-front cabinet closed view" },
      { src: "/images/gallery/golden-textured-front-cabinet/golden-textured-front-cabinet-part-open-view-03.webp", alt: "Golden textured-front cabinet partly open" },
      { src: "/images/gallery/golden-textured-front-cabinet/golden-textured-front-cabinet-open-storage-04.webp", alt: "Golden textured-front cabinet open storage view" },
    ],
  },
  {
    slug: "built-in-window-seat-storage",
    title: "Built-In Window Seat with Drawer Storage",
    category: "Bespoke Joinery",
    location: "London",
    summary: "Painted built-in window seating with concealed drawer storage, shaped to sit cleanly within the existing room.",
    cover: {
      src: "/images/gallery/painted-built-in-window-seat-storage/painted-built-in-window-seat-storage-01.webp",
      alt: "Painted built-in window seat with drawer storage",
    },
    images: [
      { src: "/images/gallery/painted-built-in-window-seat-storage/painted-built-in-window-seat-storage-01.webp", alt: "Painted built-in window seat with drawer storage" },
      { src: "/images/gallery/painted-built-in-window-seat-storage/built-in-window-seat-drawer-storage-open-02.webp", alt: "Built-in window seat drawer storage open" },
      { src: "/images/gallery/painted-built-in-window-seat-storage/made-to-measure-window-seat-storage-detail-03.webp", alt: "Made-to-measure window seat storage detail" },
    ],
  },
];

export function getGalleryProject(slug: string) {
  return galleryProjects.find(project => project.slug === slug);
}
