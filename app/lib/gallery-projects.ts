export type GalleryImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export type GalleryCaseStudySection = {
  heading: string;
  body: string[];
};

export type GalleryProject = {
  slug: string;
  title: string;
  category: "Kitchen Installation" | "Bespoke Joinery";
  location?: string;
  summary: string;
  seoDescription: string;
  keywords: string[];
  highlights: string[];
  caseStudy: GalleryCaseStudySection[];
  cover: GalleryImage;
  images: GalleryImage[];
};

export const galleryProjects: GalleryProject[] = [
  {
    slug: "handleless-kitchen-installation",
    title: "Handleless Kitchen Installation",
    category: "Kitchen Installation",
    summary: "A completed white handleless kitchen installation with integrated appliances, fitted utility storage and carefully coordinated finishing details.",
    seoDescription: "Completed handleless kitchen installation by Form & Frame, with integrated appliances, fitted utility storage, worktop details and precision cabinet alignment.",
    keywords: [
      "handleless kitchen installation",
      "kitchen fitter",
      "integrated appliance fitting",
      "white handleless kitchen",
      "kitchen installation Luton",
      "kitchen installation Bedfordshire",
    ],
    highlights: [
      "White handleless cabinetry",
      "Integrated appliance installation",
      "Fitted utility and tall-unit storage",
      "Worktop, hob and finishing details",
    ],
    caseStudy: [
      {
        heading: "The installation",
        body: [
          "This project shows a completed white handleless kitchen with a restrained, modern layout. The visual character depends on long uninterrupted lines, accurately aligned cabinet fronts and integrated appliances sitting cleanly within the surrounding cabinetry.",
          "Handleless kitchens leave very little room for inconsistent gaps or uneven front alignment. The fitting therefore needs to be controlled across base units, tall housings, appliance fronts and adjacent panels so that the finished kitchen reads as one continuous composition rather than a collection of separate cabinets.",
        ],
      },
      {
        heading: "Where precision matters",
        body: [
          "The photographs show several areas where installation quality becomes especially visible: the relationship between appliance doors and neighbouring fronts, the alignment of tall units, the junction between worktops and cabinetry, and the consistency of horizontal handleless lines.",
          "Integrated appliances also require careful adjustment so that doors open correctly while their furniture fronts remain aligned with the surrounding kitchen. Small discrepancies can become obvious in a minimalist design, so final adjustment and checking form an important part of this type of installation.",
        ],
      },
      {
        heading: "Utility storage and practical coordination",
        body: [
          "The fitted utility storage continues the same visual language as the main kitchen. Keeping these secondary areas consistent is important because tall storage, appliance housings and utility cabinetry often introduce more junctions, fillers and changes in cabinet height than the main run.",
          "The completed result demonstrates how careful installation can preserve a simple appearance even where the underlying layout includes appliances, storage and several technical interfaces.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The final kitchen is clean, functional and deliberately understated. The emphasis is on accurate fitting rather than decorative complexity: straight lines, controlled gaps, integrated equipment and a consistent relationship between units, worktops and surrounding finishes.",
          "Form & Frame provides independent kitchen installation for customer-supplied kitchens, with projects considered across Luton, Bedfordshire, Hertfordshire and selected surrounding areas.",
        ],
      },
    ],
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
    seoDescription: "Soho bespoke fitted bookcase case study by Form & Frame: full-height dark cabinetry, integrated display lighting and carefully aligned shelving in a London interior.",
    keywords: [
      "bespoke bookcase Soho",
      "fitted bookcase London",
      "bespoke joinery London",
      "full height bookcase",
      "integrated shelf lighting",
      "made to measure shelving",
    ],
    highlights: [
      "Full-height fitted bookcase",
      "Integrated display lighting",
      "Dark architectural finish",
      "Repeated shelving and vertical alignment",
    ],
    caseStudy: [
      {
        heading: "A full-height fitted feature",
        body: [
          "This Soho project uses a full-height bespoke bookcase as a strong architectural element within the room. Rather than treating the shelving as loose furniture, the cabinetry is visually integrated with the interior and extends vertically to create a continuous fitted composition.",
          "The dark finish gives the bookcase a substantial presence, while the open shelving prevents the elevation from feeling too heavy. The balance between solid framing, open display areas and integrated light is central to the finished appearance.",
        ],
      },
      {
        heading: "The demanding part: repetition and alignment",
        body: [
          "Large bookcases are unforgiving because repeated shelves and vertical divisions make small inaccuracies easy to see. Shelf lines, side panels and openings need to remain visually consistent over the full height and width of the installation.",
          "The fitting also has to respond to the room rather than assuming the surrounding walls, floor and ceiling are perfectly square. Careful setting out and controlled final fitting allow the cabinetry to sit naturally within the space while keeping the visible grid calm and regular.",
        ],
      },
      {
        heading: "Integrated lighting",
        body: [
          "Lighting is incorporated into the shelving so that the display areas remain useful after dark and the depth of the cabinetry is emphasised. The lighting reads as part of the joinery rather than an added accessory, which helps preserve the clean architectural character of the bookcase.",
          "Where lighting is integrated into bespoke cabinetry, the visual result depends on consistent positioning and neat coordination with shelf edges, internal surfaces and the wider room lighting.",
        ],
      },
      {
        heading: "Joinery quality in the finished room",
        body: [
          "The completed bookcase demonstrates the value of proportion and repetition in bespoke fitted furniture. The design is relatively disciplined, so the quality is carried by accurate spacing, controlled junctions and the relationship between the cabinetry and the room around it.",
          "For similar fitted bookcases, libraries and display cabinetry, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, and final installation.",
        ],
      },
    ],
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
    seoDescription: "Soho walk-in wardrobe case study featuring bespoke open storage, drawers, mirrored detailing and integrated LED lighting by Form & Frame.",
    keywords: [
      "walk in wardrobe Soho",
      "bespoke wardrobe London",
      "fitted wardrobe London",
      "walk in dressing room",
      "integrated wardrobe lighting",
      "bespoke storage joinery",
    ],
    highlights: [
      "Open walk-in wardrobe layout",
      "Integrated LED lighting",
      "Drawer storage",
      "Mirrored detailing",
    ],
    caseStudy: [
      {
        heading: "Storage designed as a room",
        body: [
          "This Soho walk-in wardrobe is more than a line of cupboards. The cabinetry defines the space itself, using open storage, drawer units, mirrored elements and integrated lighting to create a dedicated dressing environment.",
          "Open wardrobes place the internal construction permanently on display. Shelf spacing, drawer alignment, lighting positions and the relationship between adjacent sections therefore contribute directly to the visual quality of the room.",
        ],
      },
      {
        heading: "Working with a narrow circulation space",
        body: [
          "The aisle view shows how important proportion is in a walk-in wardrobe. Storage needs to provide useful capacity without reducing the circulation route to the point where the room feels cramped.",
          "Full-height joinery on both sides creates many repeated lines. Keeping these lines visually controlled helps the wardrobe feel ordered and intentional, especially where drawers, shelves and mirrored surfaces meet.",
        ],
      },
      {
        heading: "Lighting and mirrored details",
        body: [
          "Integrated LED lighting improves visibility inside the storage and also gives the cabinetry greater depth. The light highlights shelf edges and vertical divisions, which means alignment and finishing details become even more noticeable.",
          "Mirrored detailing introduces another precise visual reference. Reflective surfaces tend to emphasise lines and junctions, so careful fitting around them is important to maintain a clean result.",
        ],
      },
      {
        heading: "A coordinated bespoke interior",
        body: [
          "The finished wardrobe combines storage density with a controlled architectural appearance. Open shelves, drawers, lighting and mirrors all need to work together rather than competing for attention.",
          "Projects of this type benefit from coordinated survey, design development, manufacturing control and installation so that the finished cabinetry is resolved as one complete interior.",
        ],
      },
    ],
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
    seoDescription: "Bespoke Soho shoe-storage cabinet by Form & Frame with open shelving, integrated LED lighting and dark fitted cabinetry.",
    keywords: [
      "bespoke shoe storage Soho",
      "shoe cabinet London",
      "fitted shoe storage",
      "bespoke shelving London",
      "integrated cabinet lighting",
      "luxury storage joinery",
    ],
    highlights: [
      "Purpose-built shoe storage",
      "Open display shelving",
      "Integrated shelf lighting",
      "Dark coordinated cabinetry",
    ],
    caseStudy: [
      {
        heading: "Purpose-built storage",
        body: [
          "This fitted cabinet was arranged specifically around shoe storage, using repeated open shelves to make the collection visible and easy to access. The dark cabinetry gives the installation a more architectural character than a conventional freestanding shoe rack.",
          "Because the storage is open, the internal shelf layout becomes part of the room. Consistent spacing and alignment are therefore as important visually as the storage capacity itself.",
        ],
      },
      {
        heading: "The challenge of repeated shelving",
        body: [
          "A large number of closely spaced shelves creates a strong visual grid. Any change in level or inconsistent opening width can be noticeable, so the setting out needs to remain disciplined from one side of the cabinet to the other.",
          "The shelving also has to retain a useful depth and clear opening while working within the available room proportions. The completed project shows how specialist storage can be made to feel integrated rather than purely functional.",
        ],
      },
      {
        heading: "Integrated light as part of the joinery",
        body: [
          "Lighting is built into the storage so that each section remains legible and the shelves gain depth. The illuminated centre and shelf details show how lighting can turn practical storage into a display feature.",
          "Consistent light positioning is particularly important in repeated shelving because variation becomes easy to compare across adjacent openings.",
        ],
      },
      {
        heading: "A consistent Soho joinery language",
        body: [
          "The dark finish and integrated lighting connect this cabinet visually with the other Soho joinery projects in the gallery. The result is a storage element that feels considered as part of the interior rather than added after the room was designed.",
          "Form & Frame can apply the same approach to made-to-measure shoe storage, display cabinetry and other fitted storage where standard furniture does not use the available space effectively.",
        ],
      },
    ],
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
    seoDescription: "London bespoke media wall case study by Form & Frame, with floating cabinetry, wall-mounted shelving and coordinated grey and black finishes.",
    keywords: [
      "bespoke media wall London",
      "floating media cabinet",
      "TV wall joinery",
      "bespoke TV unit London",
      "wall mounted cabinetry",
      "fitted media furniture",
    ],
    highlights: [
      "Floating wall-mounted cabinetry",
      "Grey and black finish options",
      "Integrated open shelving",
      "Clean horizontal proportions",
    ],
    caseStudy: [
      {
        heading: "A floating media composition",
        body: [
          "This bespoke media wall is built around a strong horizontal arrangement of floating cabinetry and open shelving. Keeping the units off the floor gives the composition a lighter appearance while still providing substantial storage.",
          "The design is shown in coordinated grey and black finishes, demonstrating how the same underlying proportions can produce a different character depending on colour and contrast.",
        ],
      },
      {
        heading: "The demanding part: level, spacing and wall fixing",
        body: [
          "Floating furniture makes alignment especially visible because there is no plinth or floor contact to disguise variation. The cabinetry needs to read as level across the wall, and the gaps between separate elements need to remain controlled.",
          "Wall-mounted units also rely on appropriate fixing and careful positioning. The finished elevation depends on the relationship between the lower cabinets, display shelves and the central media area staying visually balanced.",
        ],
      },
      {
        heading: "Controlling the visual weight",
        body: [
          "Media walls can easily become heavy if every part of the elevation is filled. Here, open wall space and separated shelves keep the arrangement lighter and allow the furniture to frame the media zone rather than dominate it.",
          "The long horizontal cabinet line provides continuity, while the upper elements introduce variation without losing the overall geometry.",
        ],
      },
      {
        heading: "A flexible fitted-furniture approach",
        body: [
          "The project shows how bespoke media furniture can be adjusted through finish, storage configuration and shelf arrangement while retaining a consistent architectural concept.",
          "For similar TV units and media walls, Form & Frame can coordinate the fitted furniture around the room proportions and the required storage rather than forcing the project into standard cabinet sizes.",
        ],
      },
    ],
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
    seoDescription: "Bespoke London cabinet case study with textured metallic-toned fronts, dark framing and fitted internal storage by Form & Frame.",
    keywords: [
      "bespoke cabinet London",
      "textured cabinet fronts",
      "made to measure cabinet",
      "bespoke storage furniture",
      "feature cabinet joinery",
      "luxury fitted furniture London",
    ],
    highlights: [
      "Textured metallic-toned fronts",
      "Dark contrasting outer frame",
      "Fitted internal storage",
      "Precise door and reveal alignment",
    ],
    caseStudy: [
      {
        heading: "Furniture with a strong surface finish",
        body: [
          "This cabinet uses textured metallic-toned fronts against a dark outer frame, making the surface finish the main visual feature. The contrast allows a relatively simple cabinet form to become a focal point within the room.",
          "When a finish has this much visual texture, the surrounding geometry needs to remain restrained. Straight reveals and consistent door alignment prevent the detailing from becoming visually busy.",
        ],
      },
      {
        heading: "Closed appearance and internal function",
        body: [
          "The exterior is designed to read as a clean furniture piece when closed, while the open photographs reveal practical storage inside. This creates a deliberate separation between the decorative face and the everyday function behind it.",
          "That transition from closed to open places importance on door movement, edge alignment and the way the internal storage is organised within the outer frame.",
        ],
      },
      {
        heading: "The demanding part: controlling the reveals",
        body: [
          "Feature fronts draw attention to the joints around them. If the gaps between doors or the relationship with the dark frame vary, the eye notices the inconsistency quickly.",
          "Careful fitting and final adjustment are therefore central to the finished appearance. The cabinet works because the textured surfaces remain the focus while the construction lines stay quiet and controlled.",
        ],
      },
      {
        heading: "Bespoke storage as an interior feature",
        body: [
          "The project demonstrates that storage furniture can contribute strongly to an interior without relying on excessive complexity. Material contrast, proportion and accurate fitting provide the character.",
          "The same principle can be applied to freestanding-looking fitted cabinets, drinks storage, display furniture and other made-to-measure pieces where the front finish is an important part of the room design.",
        ],
      },
    ],
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
    seoDescription: "London built-in window seat case study by Form & Frame, with painted made-to-measure joinery and integrated drawer storage.",
    keywords: [
      "built in window seat London",
      "window seat storage",
      "bespoke drawer storage",
      "made to measure window seat",
      "painted fitted furniture",
      "bespoke joinery London",
    ],
    highlights: [
      "Made-to-measure window seating",
      "Integrated drawer storage",
      "Painted fitted finish",
      "Shaped around the existing room",
    ],
    caseStudy: [
      {
        heading: "Using an awkward area productively",
        body: [
          "This project turns the space beneath a window into fitted seating with useful drawer storage. Window areas often have specific width, depth and surrounding-wall constraints, making made-to-measure joinery more effective than standard furniture.",
          "The finished seat is designed to feel part of the room rather than a separate box placed against the wall. Its proportions follow the available opening and maintain a simple painted appearance.",
        ],
      },
      {
        heading: "The demanding part: fitting to the existing room",
        body: [
          "Built-in furniture has to meet real walls, floors and architectural edges, which are not always perfectly straight or square. The visible success of the piece depends on how accurately the outer lines are fitted to those existing conditions.",
          "A window seat is also viewed at close range and used physically, so the top, drawer fronts and surrounding junctions need to feel deliberate and robust as well as visually neat.",
        ],
      },
      {
        heading: "Drawer storage without visual clutter",
        body: [
          "The drawers add practical capacity while allowing the front of the seat to remain calm and consistent. When closed, the storage reads as part of the overall joinery rather than as a separate chest of drawers.",
          "The open-storage photograph demonstrates the usable volume concealed behind the fitted elevation, which is one of the main advantages of designing directly around the available space.",
        ],
      },
      {
        heading: "A simple fitted result",
        body: [
          "The final piece is deliberately understated. Its value comes from using the room efficiently, fitting the existing architecture carefully and combining seating with concealed storage in one element.",
          "Form & Frame can apply the same approach to window seats, alcove furniture, under-window storage and other fitted pieces where the room geometry makes standard furniture inefficient.",
        ],
      },
    ],
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
