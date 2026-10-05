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
  galleryId: string;
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
  "galleryId": "G01",
  "slug": "handleless-kitchen-installation",
  "title": "Stourcliff White Handleless Kitchen",
  "category": "Kitchen Installation",
  "summary": "A completed white handleless kitchen installation with integrated appliances, fitted utility storage and carefully coordinated finishing details.",
  "seoDescription": "Completed handleless kitchen installation by Form & Frame, with integrated appliances, fitted utility storage, worktop details and precision cabinet alignment.",
  "keywords": [
    "handleless kitchen installation",
    "kitchen fitter",
    "integrated appliance fitting",
    "white handleless kitchen",
    "kitchen installation Luton",
    "kitchen installation Bedfordshire"
  ],
  "highlights": [
    "White handleless cabinetry",
    "Integrated appliance installation",
    "Fitted utility and tall-unit storage",
    "Worktop, hob and finishing details"
  ],
  "caseStudy": [
    {
      "heading": "The installation",
      "body": [
        "This project shows a completed white handleless kitchen with a restrained, modern layout. The visual character depends on long uninterrupted lines, accurately aligned cabinet fronts and integrated appliances sitting cleanly within the surrounding cabinetry.",
        "Handleless kitchens leave very little room for inconsistent gaps or uneven front alignment. The fitting therefore needs to be controlled across base units, tall housings, appliance fronts and adjacent panels so that the finished kitchen reads as one continuous composition rather than a collection of separate cabinets."
      ]
    },
    {
      "heading": "Where precision matters",
      "body": [
        "The photographs show several areas where installation quality becomes especially visible: the relationship between appliance doors and neighbouring fronts, the alignment of tall units, the junction between worktops and cabinetry, and the consistency of horizontal handleless lines.",
        "Integrated appliances also require careful adjustment so that doors open correctly while their furniture fronts remain aligned with the surrounding kitchen. Small discrepancies can become obvious in a minimalist design, so final adjustment and checking form an important part of this type of installation."
      ]
    },
    {
      "heading": "Utility storage and practical coordination",
      "body": [
        "The fitted utility storage continues the same visual language as the main kitchen. Keeping these secondary areas consistent is important because tall storage, appliance housings and utility cabinetry often introduce more junctions, fillers and changes in cabinet height than the main run.",
        "The completed result demonstrates how careful installation can preserve a simple appearance even where the underlying layout includes appliances, storage and several technical interfaces."
      ]
    },
    {
      "heading": "The finished result",
      "body": [
        "The final kitchen is clean, functional and deliberately understated. The emphasis is on accurate fitting rather than decorative complexity: straight lines, controlled gaps, integrated equipment and a consistent relationship between units, worktops and surrounding finishes.",
        "Form & Frame provides independent kitchen installation for customer-supplied kitchens, with projects considered across Luton, Bedfordshire, Hertfordshire and selected surrounding areas."
      ]
    }
  ],
  "cover": {
    "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-alignment-06.webp",
    "alt": "Full-room view of the white handleless kitchen in Stourcliff",
    "fit": "contain"
  },
  "images": [
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-alignment-06.webp",
      "alt": "Full-room view of the white handleless kitchen in Stourcliff",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-appliance-view-07.webp",
      "alt": "Overall view of the cooking run, sink and tall cabinetry",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-counter-detail-08.webp",
      "alt": "Microwave housing and matching utility cabinetry",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-detail-10.webp",
      "alt": "Closed utility cabinetry beside the kitchen",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-fitted-detail-09.webp",
      "alt": "Open tall cupboard in the kitchen utility area",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-detail-11.webp",
      "alt": "Washing machine concealed behind a matching cabinet door",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-worktop-04.webp",
      "alt": "Gas hob, oven and surrounding worktop",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-room-view-02.webp",
      "alt": "Drawer fronts and handle profiles beside the worktop",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-cabinetry-03.webp",
      "alt": "Junction between the worktop, base cabinetry and tall unit",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-detail-05.webp",
      "alt": "Handleless cabinet fronts and worktop edge",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-overall-01.webp",
      "alt": "Close-up of the recessed handle profile on a white kitchen drawer",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/stourcliff-white-handleless-kitchen/stourcliff-white-kitchen-detail-12.webp",
      "alt": "Integrated dishwasher door and fitted furniture front",
      "fit": "contain"
    }
  ]
},
{
    galleryId: "G02",
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
      src: "/images/gallery/soho-bespoke-bookcase/soho-bespoke-bookcase-frontal-room-view-04.jpg",
      alt: "Full frontal room view of Soho bespoke dark oak bookcase",
      fit: "contain",
    },
    images: [
      {
        src: "/images/gallery/soho-bespoke-bookcase/soho-bespoke-bookcase-frontal-room-view-04.jpg",
        alt: "Full frontal room view of Soho bespoke dark oak bookcase",
        fit: "contain",
      },
      {
        src: "/images/gallery/soho-bespoke-bookcase/soho-bespoke-bookcase-room-view-01.webp",
        alt: "Angled illuminated view of Soho bespoke bookcase",
        fit: "contain",
      },
      {
        src: "/images/gallery/soho-bespoke-bookcase/soho-bespoke-bookcase-full-height-02.webp",
        alt: "Full-height side view of Soho bespoke bookcase",
        fit: "contain",
      },
      {
        src: "/images/gallery/soho-bespoke-bookcase/soho-bespoke-bookcase-display-view-05.jpg",
        alt: "Dark oak display shelving and integrated lighting in Soho bookcase",
        fit: "contain",
      },
      {
        src: "/images/gallery/soho-bespoke-bookcase/soho-bespoke-bookcase-door-detail-06.jpg",
        alt: "Close-up of dark oak lower cabinet door and grain detail",
        fit: "contain",
      },
    ],
  },
{
    galleryId: "G03",
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
      src: "/images/gallery/soho-walk-in-wardrobe/soho-walk-in-wardrobe-aisle-view-02.webp",
      alt: "Full aisle view through Soho walk-in wardrobe",

    },
    images: [
      { src: "/images/gallery/soho-walk-in-wardrobe/soho-walk-in-wardrobe-aisle-view-02.webp", alt: "Full aisle view through Soho walk-in wardrobe" },
      { src: "/images/gallery/soho-walk-in-wardrobe/soho-walk-in-wardrobe-illuminated-storage-01.webp", alt: "Illuminated Soho walk-in wardrobe storage" },
      { src: "/images/gallery/soho-walk-in-wardrobe/soho-walk-in-wardrobe-drawer-mirror-detail-03.webp", alt: "Drawer and mirror detail in Soho walk-in wardrobe" },
    ],
  },
{
    galleryId: "G04",
    slug: "grey-black-bespoke-media-wall",
    title: "Grey & Black Bespoke Media Wall",
    category: "Bespoke Joinery",
    summary: "A wall-mounted bespoke media composition shown across coordinated grey and black finish views, with floating storage, open shelves, concealed cabinetry and clean integrated proportions.",
    seoDescription: "Bespoke media wall case study by Form & Frame, combining floating cabinetry, wall-mounted shelving, concealed storage and coordinated grey and black finish views.",
    keywords: [
      "bespoke media wall",
      "floating media cabinet",
      "TV wall joinery",
      "bespoke TV unit",
      "wall mounted cabinetry",
      "fitted media furniture",
    ],
    highlights: [
      "Floating wall-mounted cabinetry",
      "Coordinated grey and black finish views",
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
      { src: "/images/gallery/dubai-bespoke-tv-unit/dubai-bespoke-tv-unit-front-view-01.webp", alt: "Light grey wall-mounted bespoke media unit front view", fit: "contain" },
      { src: "/images/gallery/dubai-bespoke-tv-unit/dubai-bespoke-tv-unit-angled-view-02.webp", alt: "Angled view of light grey wall-mounted media furniture", fit: "contain" },
      { src: "/images/gallery/dubai-bespoke-tv-unit/dubai-bespoke-tv-unit-finish-detail-03.webp", alt: "Close finish detail on light grey bespoke media cabinetry", fit: "contain" },
      { src: "/images/gallery/dubai-bespoke-tv-unit/dubai-bespoke-tv-unit-open-storage-04.webp", alt: "Open concealed storage in bespoke media unit", fit: "contain" },
      { src: "/images/gallery/dubai-bespoke-tv-unit/dubai-bespoke-tv-unit-tall-cabinet-detail-05.webp", alt: "Tall cabinet storage detail within bespoke media composition", fit: "contain" },
    ],
  },
{
    galleryId: "G06",
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
{
    galleryId: "G07",
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
    galleryId: "G08",
    slug: "black-oak-media-wall-brass-inlay",
    title: "Black Oak Media Wall with Brass Inlay",
    category: "Bespoke Joinery",
    location: "London",
    summary: "A full-height dark oak-grain media wall with an integrated TV recess, asymmetrical open shelving, concealed lower storage and fine brass-toned inlay detailing.",
    seoDescription: "London bespoke media wall case study by Form & Frame, featuring dark oak-grain cabinetry, an integrated TV recess, open shelving and precision brass-toned inlay detailing.",
    keywords: [
      "bespoke media wall London",
      "black oak TV unit",
      "fitted TV wall London",
      "brass inlay cabinetry",
      "bespoke entertainment unit",
      "dark oak media wall",
      "made to measure TV unit",
      "bespoke joinery London",
    ],
    highlights: [
      "Full-height dark oak-grain media wall",
      "Integrated TV recess and open shelving",
      "Fine brass-toned inlay to lower fronts",
      "Ventilation detail integrated into the fitted elevation",
    ],
    caseStudy: [
      {
        heading: "A full-height media wall built into the room",
        body: [
          "This London project treats the media unit as part of the architecture rather than as a freestanding piece of furniture. The dark oak-grain cabinetry occupies the full wall, bringing the television, display shelving and lower storage together as one continuous fitted composition.",
          "The open shelving is deliberately asymmetrical, which gives the wall visual movement while the large central television recess provides a clear focal point. Against the bright interior and large windows, the dark joinery creates a strong contrast without relying on decorative excess.",
        ],
      },
      {
        heading: "The demanding part: alignment across a large elevation",
        body: [
          "A full-height media wall contains many long reference lines. Shelf edges, vertical divisions, the television opening and the lower cabinet fronts all sit close enough to one another that small inaccuracies can become easy to see.",
          "The irregular shelf grid makes careful setting out particularly important. Although the compartments vary in size, their junctions still need to look intentional and controlled. The installation also has to meet the real floor, walls and ceiling while keeping the visible furniture geometry calm and consistent.",
        ],
      },
      {
        heading: "Dark oak grain and brass-toned detailing",
        body: [
          "The close-up photographs show a pronounced dark timber grain across the cabinetry, paired with narrow brass-toned lines around the lower fronts. The warm metallic detail breaks up the black finish and gives the lower section a finer furniture-like character.",
          "Thin inlay lines are unforgiving because they create very clear visual references between adjacent doors. Consistent reveals, level fronts and careful final adjustment are therefore essential if the metallic detailing is to remain continuous across the completed unit.",
        ],
      },
      {
        heading: "Integrating the television, storage and room services",
        body: [
          "The television is recessed within the fitted elevation rather than simply mounted in front of it, allowing the surrounding shelving and cabinetry to frame the screen cleanly. The lower section provides enclosed storage while the upper shelves remain open for display.",
          "A ventilation grille is visibly incorporated into the upper part of the fitted wall. Details such as ventilation, power, cabling and equipment access need to be considered early on in this type of media furniture so the technical requirements do not compromise the finished composition.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed media wall combines a substantial amount of fitted furniture with a controlled, architectural appearance. The dark finish gives the piece presence, while the open shelves and fine metallic lines prevent the full-height cabinetry from reading as one heavy block.",
          "For similar bespoke media walls and fitted TV units, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment around the proportions and requirements of the room.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/black-oak-media-wall-brass-inlay/black-oak-media-wall-front-view-01.webp",
      alt: "Black oak-grain bespoke media wall with integrated television and brass-toned inlay",
    },
    images: [
      {
        src: "/images/gallery/black-oak-media-wall-brass-inlay/black-oak-media-wall-front-view-01.webp",
        alt: "Front view of full-height black oak-grain media wall with integrated television",
        fit: "contain",
      },
      {
        src: "/images/gallery/black-oak-media-wall-brass-inlay/black-oak-media-wall-room-view-02.webp",
        alt: "Black oak bespoke media wall shown within a bright London interior",
        fit: "contain",
      },
      {
        src: "/images/gallery/black-oak-media-wall-brass-inlay/black-oak-media-wall-room-view-03.webp",
        alt: "Room view of dark fitted TV wall with open shelving and lower storage",
        fit: "contain",
      },
      {
        src: "/images/gallery/black-oak-media-wall-brass-inlay/black-oak-media-wall-angled-detail-04.webp",
        alt: "Angled detail of dark oak-grain shelving and fitted media cabinetry",
        fit: "contain",
      },
      {
        src: "/images/gallery/black-oak-media-wall-brass-inlay/black-oak-media-wall-tv-cabinet-detail-05.webp",
        alt: "Integrated television recess and shelving detail in black oak media wall",
        fit: "contain",
      },
      {
        src: "/images/gallery/black-oak-media-wall-brass-inlay/black-oak-media-wall-brass-inlay-detail-06.webp",
        alt: "Close-up of black oak grain and brass-toned inlay on media cabinet fronts",
        fit: "contain",
      },
    ],
  },
{
    galleryId: "G09",
    slug: "natural-walnut-bespoke-bookcase",
    title: "Natural Walnut Bespoke Bookcase",
    category: "Bespoke Joinery",
    summary: "A full-height natural walnut bookcase with open shelving, an illuminated geometric mirror feature and carefully integrated display lighting.",
    seoDescription: "Natural walnut bespoke bookcase case study by Form & Frame, combining full-height fitted shelving, geometric mirrored panels and integrated LED display lighting.",
    keywords: [
      "natural walnut bespoke bookcase",
      "walnut fitted bookcase",
      "bespoke bookcase",
      "made to measure bookcase",
      "fitted shelving",
      "mirrored bookcase feature",
      "integrated bookcase lighting",
      "bespoke joinery",
    ],
    highlights: [
      "Full-height natural walnut shelving",
      "Illuminated geometric mirrored centre feature",
      "Integrated vertical display lighting",
      "Made-to-measure fitted composition",
    ],
    caseStudy: [
      {
        heading: "A bookcase designed as a feature wall",
        body: [
          "This project combines practical book storage with a strong decorative centrepiece. Full-height walnut shelving frames an illuminated geometric mirror composition, turning the fitted bookcase into a focal point within the living room rather than treating it as background storage.",
          "The warm timber and reflective centre section create deliberate contrast. The shelving provides the visual weight and storage, while the mirrored geometry introduces light, depth and a more sculptural character to the elevation.",
        ],
      },
      {
        heading: "The demanding part: controlling the geometric centre",
        body: [
          "The central feature is built from repeated diagonal mirrored and panelled elements. Because those lines cross one another and repeat vertically, any variation in angle, spacing or junction position would become very noticeable.",
          "Accurate setting out is therefore important before the surrounding shelving is finally aligned. The centre feature and the two bookcase sections have to read as one composition, even though they use very different shapes and surface treatments.",
        ],
      },
      {
        heading: "Natural walnut shelving and proportion",
        body: [
          "The darker walnut shelving gives the installation a calm frame around the brighter centre. Open shelves of different heights allow books and smaller display pieces to sit naturally without competing with the geometric feature.",
          "Full-height fitted shelving also needs to respond carefully to the existing room. The finished furniture meets the surrounding walls, skirting and ceiling line while keeping the visible verticals and shelf edges controlled.",
        ],
      },
      {
        heading: "Integrated lighting and reflective surfaces",
        body: [
          "Vertical lighting is incorporated behind and beside the central feature, illuminating the angled panels and mirrored surfaces. This makes the geometry readable in the evening and gives the centre section additional depth.",
          "Lighting close to mirrored surfaces exposes details very clearly. Straight light lines, neat junctions and consistent spacing become part of the finished joinery quality rather than hidden technical elements.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed bookcase balances storage with a highly individual visual feature. The walnut cabinetry provides warmth and practicality, while the illuminated mirrored centre gives the room a distinctive focal point without requiring a separate decorative installation.",
          "For similar bespoke bookcases, display walls and fitted shelving, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment around the proportions of the room.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/natural-walnut-bespoke-bookcase/natural-walnut-bookcase-room-view-01.webp",
      alt: "Natural walnut bespoke bookcase with illuminated geometric mirrored centre",
      fit: "contain",
    },
    images: [
      {
        src: "/images/gallery/natural-walnut-bespoke-bookcase/natural-walnut-bookcase-room-view-01.webp",
        alt: "Room view of natural walnut fitted bookcase with illuminated geometric mirror feature",
        fit: "contain",
      },
      {
        src: "/images/gallery/natural-walnut-bespoke-bookcase/natural-walnut-bookcase-angled-view-02.webp",
        alt: "Angled view of walnut shelving and illuminated geometric centre feature",
        fit: "contain",
      },
      {
        src: "/images/gallery/natural-walnut-bespoke-bookcase/natural-walnut-bookcase-geometric-mirror-detail-03.webp",
        alt: "Geometric mirrored panel and integrated lighting detail in bespoke bookcase",
        fit: "contain",
      },
      {
        src: "/images/gallery/natural-walnut-bespoke-bookcase/natural-walnut-bookcase-full-view-04.webp",
        alt: "Full view of natural walnut shelving with geometric illuminated mirror feature",
        fit: "contain",
      },
    ],
  },
{
    galleryId: "G11",
    slug: "westminster-polished-brass-panelled-doors",
    title: "Westminster Polished Brass Panelled Doors",
    category: "Bespoke Joinery",
    location: "Westminster, London",
    summary: "Dark reflective wall panels and integrated doors detailed with polished brass lines, forming a precise architectural feature within a Westminster dining interior.",
    seoDescription: "Westminster bespoke panelled doors case study by Form & Frame, featuring dark reflective panels, integrated doors and precision polished-brass detailing.",
    keywords: [
      "bespoke panelled doors Westminster",
      "polished brass inlay doors",
      "bespoke wall panels London",
      "luxury panelled doors",
      "brass detail joinery",
      "bespoke doors London",
      "architectural joinery Westminster",
      "bespoke interior panels",
    ],
    highlights: [
      "Dark reflective wall panels and integrated doors",
      "Polished brass line detailing",
      "Full-height architectural composition",
      "Precise alignment across intersecting panel joints",
    ],
    caseStudy: [
      {
        heading: "Architectural joinery integrated into the dining room",
        body: [
          "This Westminster project uses full-height dark panels and doors as part of the room architecture rather than treating the doors as separate elements. The polished brass lines continue across the elevation, giving the installation a strong geometric identity within the dining space.",
          "The dark reflective finish adds depth and contrast against the lighter walls, floor and dining furniture. The result depends on the panel system, door positions and metallic detailing reading as one continuous composition.",
        ],
      },
      {
        heading: "The demanding part: keeping the brass grid aligned",
        body: [
          "The polished brass lines create clear horizontal and vertical references across multiple panels and door faces. Any change in level or spacing would be immediately visible, especially where lines intersect at panel joints.",
          "Accurate setting out is therefore central to the finished result. Door gaps, panel divisions and brass details all need to work together so that the geometry remains continuous whether the doors are viewed from close range or across the room.",
        ],
      },
      {
        heading: "Reflective surfaces expose every junction",
        body: [
          "High-gloss dark surfaces reflect the room around them, which makes irregular gaps and misalignment more noticeable than on a matt finish. The photographs show how the panel faces sit in a consistent plane while the brass lines remain crisp against the darker background.",
          "This type of finish also requires careful handling during final fitting because the completed surfaces are highly visible and form part of the decorative character of the room.",
        ],
      },
      {
        heading: "Doors concealed within the panelled elevation",
        body: [
          "The doors are visually absorbed into the wider panel composition. Rather than interrupting the wall with conventional door detailing, the brass lines and dark surfaces continue the same architectural language across fixed and opening sections.",
          "That approach requires the functional elements of the doors to be coordinated with the visible panel layout so that usability does not compromise the visual continuity of the finished wall.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed installation creates a restrained but distinctive backdrop to the dining room. The combination of dark reflective surfaces and polished brass gives the wall depth and definition while keeping the overall geometry disciplined.",
          "For similar bespoke panelled doors, feature walls and architectural joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment around the room and the required door positions.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/westminster-polished-brass-panelled-doors/westminster-brass-panelled-doors-room-view-01.jpg",
      alt: "Westminster dining room with dark bespoke panelled doors and polished brass detailing",
      fit: "contain",
    },
    images: [
      {
        src: "/images/gallery/westminster-polished-brass-panelled-doors/westminster-brass-panelled-doors-room-view-01.jpg",
        alt: "Dining room view of Westminster bespoke panelled doors with polished brass lines",
        fit: "contain",
      },
      {
        src: "/images/gallery/westminster-polished-brass-panelled-doors/westminster-brass-panelled-doors-room-view-02.jpg",
        alt: "Wide room view of dark reflective panels and integrated doors with brass detailing",
        fit: "contain",
      },
      {
        src: "/images/gallery/westminster-polished-brass-panelled-doors/westminster-brass-panelled-doors-mid-detail-03.jpg",
        alt: "Mid-range view of polished brass grid detailing across dark bespoke panels",
        fit: "contain",
      },
      {
        src: "/images/gallery/westminster-polished-brass-panelled-doors/westminster-brass-panelled-doors-close-detail-04.jpg",
        alt: "Close-up of polished brass line intersections on dark panelled doors",
        fit: "contain",
      },
    ],
  },
{
  "galleryId": "G12",
  "slug": "bookcase-in-esher",
  "title": "Bookcase in Esher",
  "category": "Bespoke Joinery",
  "location": "Esher, Surrey",
  "summary": "A full-height bespoke display bookcase with varied open shelving, integrated lower storage and a carefully balanced fitted composition.",
  "seoDescription": "Esher bespoke bookcase case study by Form & Frame, featuring full-height fitted shelving, display compartments and integrated lower storage.",
  "keywords": [
    "bespoke bookcase Esher",
    "bespoke fitted bookcase",
    "full height bookcase",
    "display shelving",
    "made to measure shelving",
    "bespoke storage furniture",
    "fitted joinery",
    "bespoke joinery"
  ],
  "highlights": [
    "Full-height fitted display bookcase",
    "Varied open shelving proportions",
    "Integrated lower storage",
    "Made-to-measure fitted composition"
  ],
  "caseStudy": [
    {
      "heading": "A fitted bookcase designed as part of the room",
      "body": [
        "This project uses a full-height bespoke bookcase to create a permanent fitted feature rather than a freestanding piece of furniture. The shelving occupies the elevation as an architectural element, combining open display space with lower storage in one continuous composition.",
        "The different shelf sizes give the piece a more individual rhythm than a repeated grid. That variation allows books, decorative objects and larger display pieces to sit naturally while still keeping the overall elevation controlled."
      ]
    },
    {
      "heading": "The demanding part: balancing varied shelf proportions",
      "body": [
        "When shelving compartments change in width and height, the setting out has to remain deliberate. Each opening needs to feel related to the neighbouring sections so the finished piece reads as one coherent design rather than a collection of unrelated boxes.",
        "Full-height cabinetry also makes vertical alignment particularly visible. The outer panels, internal divisions and lower storage fronts all need to remain visually consistent across the completed installation."
      ]
    },
    {
      "heading": "Display space and practical storage",
      "body": [
        "The open sections provide the visual character of the bookcase, while the lower cabinets give the room useful concealed storage. Combining the two functions helps the installation remain practical without making the entire wall feel visually heavy.",
        "The closed lower section also creates a strong base for the taller open shelving above, giving the fitted furniture a clear visual hierarchy."
      ]
    },
    {
      "heading": "Fitting a large piece accurately",
      "body": [
        "Large fitted bookcases need to respond to the real room rather than assuming perfectly straight walls, floors and ceilings. Accurate survey and controlled installation help the outer lines meet the surrounding architecture cleanly while keeping the visible shelf grid true.",
        "The photographs show how the furniture sits tightly within the room while preserving clear, even junctions around the main fitted elements."
      ]
    },
    {
      "heading": "The finished result",
      "body": [
        "The completed bookcase provides substantial display and storage capacity while retaining a composed, furniture-led appearance. Its varied shelving gives the piece visual interest, while the lower cabinetry keeps everyday storage discreet.",
        "For similar fitted bookcases, display walls and made-to-measure shelving, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
      ]
    }
  ],
  "cover": {
    "src": "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-room-view-01.jpg",
    "alt": "Full front view of the Esher bookcase and lower cupboards",
    "fit": "contain"
  },
  "images": [
    {
      "src": "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-room-view-01.jpg",
      "alt": "Full front view of the Esher bookcase and lower cupboards",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-front-view-02.jpg",
      "alt": "Open drawers below the Esher bookcase",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-angled-view-03.jpg",
      "alt": "Shelves and countertop above the lower cabinetry",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-shelving-detail-04.jpg",
      "alt": "Pale cupboard door with a dark border",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-detail-05.jpg",
      "alt": "Cupboard interior, hinge and door edge",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-full-height-06.jpg",
      "alt": "Open drawer with divided storage",
      "fit": "contain"
    }
  ]
},
{
    galleryId: "G13",
    slug: "cream-bespoke-tv-unit",
    title: "Cream Bespoke TV Unit",
    category: "Bespoke Joinery",
    summary: "A light cream fitted media unit with an integrated television zone, open display shelving and coordinated concealed storage.",
    seoDescription: "Cream bespoke TV unit case study by Form & Frame, combining fitted media cabinetry, open shelving and integrated storage in a light contemporary finish.",
    keywords: [
      "cream bespoke TV unit",
      "fitted media unit",
      "bespoke TV wall",
      "made to measure TV unit",
      "living room fitted furniture",
      "bespoke media cabinetry",
      "fitted shelving",
      "bespoke joinery",
    ],
    highlights: [
      "Light cream fitted media cabinetry",
      "Integrated television zone",
      "Open display shelving",
      "Concealed lower storage",
    ],
    caseStudy: [
      {
        heading: "A fitted media unit with a lighter visual character",
        body: [
          "This project uses a light cream finish to create a fitted television unit that feels integrated with the room without becoming visually heavy. The composition combines the media zone, open display shelving and concealed storage as one coordinated piece of furniture.",
          "The lighter finish helps the cabinetry sit comfortably against the surrounding interior while still giving the television wall a clear architectural structure.",
        ],
      },
      {
        heading: "The demanding part: keeping the composition balanced",
        body: [
          "Media furniture has to accommodate several different functions within one elevation. The television opening, shelving and storage all need to relate to one another so that the finished wall feels balanced rather than fragmented.",
          "Careful setting out is especially important where open shelves meet larger cabinet sections, because even small changes in line or spacing can become noticeable across the finished elevation.",
        ],
      },
      {
        heading: "Open display and concealed storage",
        body: [
          "The open shelving provides space for decorative objects and keeps the upper sections visually lighter. The closed storage below creates a practical zone for items that do not need to remain visible.",
          "Combining open and closed elements allows the unit to work as everyday living-room furniture while still maintaining a clean presentation around the television.",
        ],
      },
      {
        heading: "Fitting around the existing room",
        body: [
          "Made-to-measure media cabinetry needs to respond to real wall dimensions, floor levels and surrounding finishes. The success of the installation depends on accurate junctions at the outer edges and controlled alignment between the main fitted elements.",
          "The photographs show how the cabinetry is integrated into the room rather than simply placed in front of the wall, which is one of the main advantages of bespoke fitted furniture.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed unit combines media, display and storage functions in a calm light-toned composition. The overall effect is practical and architectural without overwhelming the room.",
          "For similar bespoke TV units and fitted media walls, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-front-view-02.webp",
      alt: "Front view of cream bespoke TV unit",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-front-view-02.webp", alt: "Front view of cream bespoke TV unit", fit: "contain" },
      { src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-room-view-01.webp", alt: "Room view of cream bespoke fitted TV unit", fit: "contain" },
      { src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-angled-view-03.webp", alt: "Angled view of cream bespoke TV unit and shelving", fit: "contain" },
      { src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-display-detail-04.webp", alt: "Illuminated display-niche detail in cream media unit", fit: "contain" },
      { src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-side-view-05.webp", alt: "Side room view of cream bespoke media furniture", fit: "contain" },
    ],
  },
{
    galleryId: "G14",
    slug: "crocodile-front-bespoke-cabinet",
    title: "Crocodile-Front Bespoke Cabinet",
    category: "Bespoke Joinery",
    summary: "A tall dark bespoke cabinet with crocodile-pattern textured fronts, brass-toned detailing and concealed internal shelving.",
    seoDescription: "Crocodile-front bespoke cabinet case study by Form & Frame, featuring dark textured doors, brass-toned handle and base details, and concealed internal shelving.",
    keywords: [
      "crocodile front bespoke cabinet",
      "textured bespoke cabinet",
      "dark bespoke furniture",
      "bespoke storage cabinet",
      "brass detail cabinet",
      "luxury bespoke joinery",
      "made to measure cabinet",
      "bespoke furniture",
    ],
    highlights: [
      "Crocodile-pattern textured full-height fronts",
      "Brass-toned square pull and base detailing",
      "Concealed internal shelving and storage",
      "Tall furniture proportions set against a light classical interior",
    ],
    caseStudy: [
      {
        heading: "A strong furniture piece within a restrained interior",
        body: [
          "This cabinet was designed as a visually distinctive piece rather than a neutral background element. The dark textured fronts create a deliberate contrast with the pale wall panelling, fireplace and surrounding interior, while the tall proportions give the cabinet a clear architectural presence.",
          "The room photography shows matching cabinetry positioned around the fireplace, allowing the dark vertical forms to frame the lighter centre of the room without relying on excessive decorative detail.",
        ],
      },
      {
        heading: "The demanding part: controlling the textured front",
        body: [
          "A strongly patterned surface makes alignment more visible. The door margins, centre joint and surrounding dark frame therefore need to remain disciplined so the texture reads as intentional rather than visually uneven.",
          "The square brass-toned pull is positioned directly across the meeting line of the doors, creating a precise focal point against the darker surface. Small inconsistencies in this area would be immediately noticeable.",
        ],
      },
      {
        heading: "Concealed storage behind full-height doors",
        body: [
          "With the doors open, the cabinet reveals a dark internal arrangement of shelves and storage. Keeping this practical interior behind full-height fronts allows the closed cabinet to retain a clean, furniture-led appearance while still providing useful storage.",
          "The open view also shows the depth and scale of the doors, which need to operate accurately without disturbing the visual alignment of the closed elevation.",
        ],
      },
      {
        heading: "Proportion, base detail and room context",
        body: [
          "The cabinet is lifted on a brass-toned base structure rather than reading as a solid block to the floor. This introduces a lighter visual break below the dark body and relates directly to the handle detail above.",
          "The wider room views show why proportion matters: the cabinet has to hold its own beside the fireplace, mirrors, lighting and furniture while still leaving the surrounding architecture visually legible.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed cabinet combines a highly textured exterior with restrained geometry, concealed storage and carefully controlled metal detailing. The contrast between the dark fronts and the brighter room gives the piece its character without requiring an overcomplicated form.",
          "For similar bespoke cabinets, feature storage pieces and made-to-measure furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/crocodile-front-bespoke-cabinet/crocodile-front-cabinet-room-view-01.webp",
      alt: "Dark crocodile-front bespoke cabinet beside a classical fireplace",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/crocodile-front-bespoke-cabinet/crocodile-front-cabinet-room-view-01.webp", alt: "Room view of dark crocodile-front bespoke cabinet", fit: "contain" },
      { src: "/images/gallery/crocodile-front-bespoke-cabinet/crocodile-front-cabinet-room-context-02.webp", alt: "Wider room context showing matching dark bespoke cabinets", fit: "contain" },
      { src: "/images/gallery/crocodile-front-bespoke-cabinet/crocodile-front-cabinet-open-storage-03.webp", alt: "Open bespoke cabinet showing concealed internal shelving", fit: "contain" },
      { src: "/images/gallery/crocodile-front-bespoke-cabinet/crocodile-front-cabinet-texture-detail-04.webp", alt: "Close detail of crocodile-pattern textured cabinet front", fit: "contain" },
      { src: "/images/gallery/crocodile-front-bespoke-cabinet/crocodile-front-cabinet-brass-handle-detail-05.webp", alt: "Brass-toned square handle detail on textured cabinet doors", fit: "contain" },
    ],
  },
{
    galleryId: "G15",
    slug: "sc-bespoke-tv-unit",
    title: "S&C Bespoke TV Unit",
    category: "Bespoke Joinery",
    summary: "A full-wall dark media installation combining an integrated television, large upholstered-look feature panels, open display shelving and long low-level concealed storage.",
    seoDescription: "S&C bespoke TV unit case study by Form & Frame, combining a full-wall dark media installation, integrated television, textured feature panels, display shelving and concealed storage.",
    keywords: [
      "S&C bespoke TV unit",
      "dark bespoke media wall",
      "full wall TV unit",
      "integrated television cabinetry",
      "textured media wall",
      "bespoke display shelving",
      "made to measure TV unit",
      "bespoke joinery",
    ],
    highlights: [
      "Full-wall dark media composition",
      "Integrated television within large textured panels",
      "Open display shelving at the outer sections",
      "Long low-level concealed storage",
    ],
    caseStudy: [
      {
        heading: "A media wall designed as part of the room",
        body: [
          "This project uses the television wall as a complete fitted composition rather than treating the screen as a separate object. The dark full-width installation combines the television, large textured panels, open display areas and low storage into one continuous elevation.",
          "Against the pale seating and bright ceiling, the dark joinery gives the room a strong focal wall while keeping the television visually integrated with the surrounding furniture.",
        ],
      },
      {
        heading: "The demanding part: maintaining a large panel grid",
        body: [
          "The main feature is a repeated grid of large dark panels surrounding the television. Because the divisions continue across a wide area, consistent horizontal and vertical alignment is especially important. Small variations would become visible immediately across the completed wall.",
          "The television opening also has to sit accurately within this grid so the screen feels deliberately positioned rather than inserted after the surrounding furniture was set out.",
        ],
      },
      {
        heading: "Display space without breaking the composition",
        body: [
          "Open shelving is concentrated toward the outer sections of the installation. These recesses provide space for books and decorative objects while preserving the darker, more continuous treatment around the central television zone.",
          "The combination of closed panelled areas and open shelves gives the wall useful storage and display capacity without making every section visually busy.",
        ],
      },
      {
        heading: "Low storage and room-scale proportion",
        body: [
          "A long low-level cabinet runs beneath the media wall, giving the composition a strong horizontal base and providing concealed storage. Its alignment with the upper sections helps the full installation read as one piece rather than separate upper and lower elements.",
          "The wider photographs show the importance of room-scale proportion. The furniture occupies a substantial wall but remains balanced against the large seating group, patterned rug and other strong features within the interior.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed TV unit combines media, display and storage functions within a dark, highly structured wall treatment. Repeated panel lines, integrated shelving and the long lower cabinet give the installation a deliberate architectural character.",
          "For similar bespoke TV units and full-wall media installations, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/sc-bespoke-tv-unit/sc-bespoke-tv-unit-room-view-01.webp",
      alt: "S&C dark full-wall bespoke TV unit in a living room",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/sc-bespoke-tv-unit/sc-bespoke-tv-unit-room-view-01.webp", alt: "Main room view of S&C dark bespoke TV unit", fit: "contain" },
      { src: "/images/gallery/sc-bespoke-tv-unit/sc-bespoke-tv-unit-wide-view-02.webp", alt: "Wide living-room view of full-wall bespoke media furniture", fit: "contain" },
      { src: "/images/gallery/sc-bespoke-tv-unit/sc-bespoke-tv-unit-screen-view-03.webp", alt: "S&C media wall with integrated television in use", fit: "contain" },
      { src: "/images/gallery/sc-bespoke-tv-unit/sc-bespoke-tv-unit-side-view-04.webp", alt: "Side perspective of dark media wall and low storage", fit: "contain" },
      { src: "/images/gallery/sc-bespoke-tv-unit/sc-bespoke-tv-unit-detail-05.webp", alt: "Close view of textured media panels and display shelving", fit: "contain" },
    ],
  },
{
    galleryId: "G16",
    slug: "sc-bespoke-bookcase",
    title: "S&C Bespoke Bookcase",
    category: "Bespoke Joinery",
    summary: "A dark open bookcase used as both display furniture and a room-dividing feature, with a varied grid of shelves and carefully aligned vertical structure.",
    seoDescription: "S&C bespoke bookcase case study by Form & Frame, featuring a dark open shelving structure used as display furniture and a room-dividing architectural element.",
    keywords: [
      "S&C bespoke bookcase",
      "dark bespoke bookcase",
      "open room divider shelving",
      "bespoke display bookcase",
      "made to measure shelving",
      "architectural bookcase",
      "luxury bespoke furniture",
      "bespoke joinery",
    ],
    highlights: [
      "Dark open shelving used as a room-dividing feature",
      "Varied grid of vertical and horizontal openings",
      "Display storage visible from multiple room angles",
      "Large-scale structure integrated with the interior",
    ],
    caseStudy: [
      {
        heading: "A bookcase that also defines the room",
        body: [
          "This project uses an open bookcase as more than display storage. The dark shelving forms a visual division within the room while still allowing light, views and movement through the open grid.",
          "Because the piece is visible from several directions, the structure has to work as furniture from both close range and across the wider interior.",
        ],
      },
      {
        heading: "The demanding part: repeated alignment across a large grid",
        body: [
          "The design relies on many repeated horizontal shelves and vertical divisions. That makes small setting-out errors easy to see, particularly where several openings line up across the full height and width of the installation.",
          "The varied compartment sizes also need to remain visually deliberate so the composition feels balanced rather than random.",
        ],
      },
      {
        heading: "Open display without making the room feel enclosed",
        body: [
          "The open arrangement allows decorative objects, books and accessories to be displayed while keeping visual connections between the adjoining parts of the room.",
          "Using open sections rather than a solid wall gives the furniture a lighter architectural role, even though the dark finish gives the piece a strong presence.",
        ],
      },
      {
        heading: "Detail, depth and multiple viewpoints",
        body: [
          "Closer photographs show the depth of the shelving and the relationship between the heavier outer frame and the smaller internal divisions. These details are especially important because the furniture is experienced from several angles rather than from one front elevation only.",
          "The wider room views confirm how the shelving relates to seating, lighting and the surrounding architecture, which is essential when a fitted piece also acts as a spatial divider.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed bookcase provides substantial display capacity while creating a clear architectural division within the room. Its open grid keeps the interior connected, while the dark finish gives the structure enough visual weight to anchor the space.",
          "For similar bespoke bookcases, display walls and room-dividing furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/sc-bespoke-bookcase/sc-bespoke-bookcase-room-view-01.webp",
      alt: "S&C dark open bespoke bookcase used as a room divider",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/sc-bespoke-bookcase/sc-bespoke-bookcase-room-view-01.webp", alt: "Main room view of S&C dark open bespoke bookcase", fit: "contain" },
      { src: "/images/gallery/sc-bespoke-bookcase/sc-bespoke-bookcase-wide-room-view-02.webp", alt: "Wide room view showing the bespoke bookcase dividing the interior", fit: "contain" },
      { src: "/images/gallery/sc-bespoke-bookcase/sc-bespoke-bookcase-angled-view-03.webp", alt: "Angled view of the dark open shelving structure", fit: "contain" },
      { src: "/images/gallery/sc-bespoke-bookcase/sc-bespoke-bookcase-detail-04.webp", alt: "Close detail of open shelving and display compartments", fit: "contain" },
      { src: "/images/gallery/sc-bespoke-bookcase/sc-bespoke-bookcase-structure-detail-05.webp", alt: "Structural detail showing the repeated shelving grid", fit: "contain" },
      { src: "/images/gallery/sc-bespoke-bookcase/sc-bespoke-bookcase-opposite-room-view-06.webp", alt: "Opposite room view of the open bespoke bookcase", fit: "contain" },
    ],
  },
{
    galleryId: "G17",
    slug: "grey-bespoke-sideboard",
    title: "Grey Bespoke Sideboard",
    category: "Bespoke Joinery",
    summary: "A slim bespoke sideboard with a dark grey timber finish, square metal pulls, polished metal legs and a combination of drawers and concealed internal storage.",
    seoDescription: "Grey bespoke sideboard case study by Form & Frame, featuring dark timber-finished cabinetry, square metal pulls, polished metal legs, drawers and concealed internal storage.",
    keywords: [
      "grey bespoke sideboard",
      "bespoke console cabinet",
      "dark timber sideboard",
      "made to measure sideboard",
      "bespoke storage furniture",
      "metal leg sideboard",
      "bespoke joinery",
    ],
    highlights: [
      "Dark grey timber-finished cabinetry",
      "Square metal pull details",
      "Polished metal support legs",
      "Drawers with concealed internal storage",
    ],
    caseStudy: [
      {
        heading: "A slim piece with a strong horizontal proportion",
        body: [
          "This sideboard is deliberately low and wide, giving it a strong horizontal character. The dark timber finish keeps the body visually restrained while the polished metal legs lift the cabinet away from the floor.",
          "The front elevation is kept simple so the material, proportions and metal details carry most of the visual interest.",
        ],
      },
      {
        heading: "The demanding part: keeping the front composition clean",
        body: [
          "A long, simple front makes alignment easy to judge. Drawer gaps, door margins and the centre division therefore need to remain consistent so the elevation reads as one controlled piece of furniture.",
          "The square metal pulls become small focal points across the front, making their position and alignment particularly visible.",
        ],
      },
      {
        heading: "Storage behind a minimal exterior",
        body: [
          "The open view shows that the cabinet combines shallow drawer storage with a larger internal compartment. This allows several storage functions to sit behind one clean exterior.",
          "The mirrored or reflective internal surfaces add depth to the storage area and contrast with the darker exterior finish.",
        ],
      },
      {
        heading: "Detail and material contrast",
        body: [
          "The close photograph shows the internal lining and the relationship between the darker cabinet material and the surrounding frame. These smaller construction details matter because the piece is relatively simple in form and therefore leaves little to distract from finish quality.",
          "The metal legs and pulls provide a sharper, lighter contrast against the dark timber surfaces.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed sideboard is compact, restrained and furniture-led, combining useful storage with a clean linear profile and metal detailing.",
          "For similar bespoke sideboards, consoles and made-to-measure storage furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/grey-bespoke-sideboard/grey-bespoke-sideboard-front-view-01.webp",
      alt: "Grey bespoke sideboard with polished metal legs",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/grey-bespoke-sideboard/grey-bespoke-sideboard-front-view-01.webp", alt: "Front view of grey bespoke sideboard", fit: "contain" },
      { src: "/images/gallery/grey-bespoke-sideboard/grey-bespoke-sideboard-angled-view-02.webp", alt: "Angled view of grey bespoke sideboard and polished metal legs", fit: "contain" },
      { src: "/images/gallery/grey-bespoke-sideboard/grey-bespoke-sideboard-open-storage-03.webp", alt: "Open bespoke sideboard showing drawers and concealed storage", fit: "contain" },
      { src: "/images/gallery/grey-bespoke-sideboard/grey-bespoke-sideboard-interior-detail-04.webp", alt: "Interior material detail inside bespoke sideboard", fit: "contain" },
    ],
  },
{
    galleryId: "G19",
    slug: "putney-heath-bespoke-cabinets",
    title: "Putney Heath Bespoke Cabinets",
    category: "Bespoke Joinery",
    location: "Putney Heath, London",
    summary: "A matching pair of tall dark bespoke cabinets framing a fireplace, with concealed storage, integrated television space and brass-toned detailing.",
    seoDescription: "Putney Heath bespoke cabinet case study by Form & Frame, featuring a matching pair of dark tall cabinets with concealed storage, integrated television space and brass-toned detailing.",
    keywords: [
      "Putney Heath bespoke cabinets",
      "bespoke cabinets London",
      "dark fitted cabinets",
      "fireplace alcove cabinetry",
      "bespoke TV cabinet",
      "brass detail cabinetry",
      "made to measure storage",
      "bespoke joinery",
    ],
    highlights: [
      "Matching tall cabinets framing a fireplace",
      "Dark textured exterior finish",
      "Concealed shelving and integrated television storage",
      "Brass-toned base and handle detailing",
    ],
    caseStudy: [
      {
        heading: "A matching pair designed around the fireplace",
        body: [
          "This Putney Heath project uses two tall bespoke cabinets to frame the fireplace and create a balanced fitted composition. Although the cabinets share the same exterior language, their internal functions are different.",
          "The matching proportions and finish allow the pair to read as one coordinated design while keeping the central fireplace visually dominant.",
        ],
      },
      {
        heading: "The demanding part: symmetry with different internal functions",
        body: [
          "A paired arrangement makes differences in height, width and alignment particularly visible. The outer frames, base details and front margins therefore need to remain consistent across both cabinets.",
          "At the same time, each interior has to accommodate a different storage requirement without changing the closed appearance of the matching exteriors.",
        ],
      },
      {
        heading: "Concealed shelving and television storage",
        body: [
          "One cabinet opens to reveal practical shelving and storage, while the other incorporates a television within the internal arrangement. Closing the doors returns both pieces to the same restrained furniture-led appearance.",
          "This approach keeps technology and everyday storage concealed when not required while preserving a formal, symmetrical room composition.",
        ],
      },
      {
        heading: "Material and metal detailing",
        body: [
          "Close photographs show the textured dark finish, framed fronts and brass-toned details used at the handles and lower supports. These lighter metal elements provide contrast without competing with the darker cabinetry.",
          "The relationship between the frame, door margins and metal details is important because the strong vertical proportions make small inconsistencies easy to notice.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed pair combines concealed storage and media functions within a coordinated architectural arrangement around the fireplace. The cabinets remain visually consistent when closed while serving different practical roles internally.",
          "For similar bespoke cabinet pairs, alcove furniture and concealed media storage, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/putney-heath-bespoke-cabinets/putney-heath-bespoke-cabinets-pair-view-01.webp",
      alt: "Matching dark bespoke cabinets framing a fireplace in Putney Heath",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/putney-heath-bespoke-cabinets/putney-heath-bespoke-cabinets-pair-view-01.webp", alt: "Pair of bespoke cabinets framing a fireplace in Putney Heath", fit: "contain" },
      { src: "/images/gallery/putney-heath-bespoke-cabinets/putney-heath-bespoke-cabinets-room-view-02.webp", alt: "Room context showing matching tall bespoke cabinets", fit: "contain" },
      { src: "/images/gallery/putney-heath-bespoke-cabinets/putney-heath-bespoke-cabinets-open-storage-03.webp", alt: "Open bespoke cabinet showing concealed shelving", fit: "contain" },
      { src: "/images/gallery/putney-heath-bespoke-cabinets/putney-heath-bespoke-cabinets-tv-storage-04.webp", alt: "Open bespoke cabinet with integrated television storage", fit: "contain" },
      { src: "/images/gallery/putney-heath-bespoke-cabinets/putney-heath-bespoke-cabinets-detail-05.webp", alt: "Dark cabinet frame and brass-toned detail", fit: "contain" },
      { src: "/images/gallery/putney-heath-bespoke-cabinets/putney-heath-bespoke-cabinets-front-detail-06.webp", alt: "Front and handle detail on Putney Heath bespoke cabinet", fit: "contain" },
    ],
  },
{
    galleryId: "G20",
    slug: "highgate-fitted-wardrobes",
    title: "Highgate Fitted Wardrobes",
    category: "Bespoke Joinery",
    location: "Highgate, London",
    summary: "A pair of full-height fitted wardrobes arranged around a bedroom fireplace, with restrained grey fronts and practical hanging, shelving and drawer storage.",
    seoDescription: "Highgate fitted wardrobe case study by Form & Frame, featuring full-height grey wardrobes arranged around a bedroom fireplace with hanging, shelving and drawer storage.",
    keywords: [
      "Highgate fitted wardrobes",
      "fitted wardrobes London",
      "bespoke bedroom wardrobes",
      "grey fitted wardrobes",
      "alcove wardrobes",
      "made to measure wardrobes",
      "bespoke joinery",
    ],
    highlights: [
      "Full-height fitted wardrobes around a fireplace",
      "Restrained grey painted fronts",
      "Internal hanging, shelving and drawer storage",
      "Bedroom-scale fitted composition",
    ],
    caseStudy: [
      {
        heading: "Wardrobes integrated around the fireplace",
        body: [
          "This Highgate bedroom uses fitted wardrobes on both sides of the fireplace, turning the wall into a balanced storage composition while keeping the chimney breast and fireplace visually clear.",
          "The simple full-height fronts keep the wardrobes quiet within the room and allow the existing architectural features to remain prominent.",
        ],
      },
      {
        heading: "The demanding part: balancing two alcoves",
        body: [
          "Working on opposite sides of a fireplace makes symmetry and proportion especially visible. The wardrobes need to align in height, projection and door spacing while responding to the actual dimensions of each alcove.",
          "The closed elevation therefore depends on careful setting out rather than decorative detail.",
        ],
      },
      {
        heading: "Practical internal storage",
        body: [
          "The open photographs show a combination of hanging space, upper shelving and lower drawers. This gives the wardrobe practical everyday storage while keeping the external appearance restrained.",
          "The internal arrangement uses the full available height so the fitted furniture makes effective use of the bedroom alcoves.",
        ],
      },
      {
        heading: "A calm bedroom finish",
        body: [
          "The grey finish relates closely to the wall colour and fireplace surround, helping the wardrobes feel integrated rather than added as separate pieces.",
          "Because the front design is intentionally simple, door alignment, margins and the relationship with the cornice become important parts of the finished result.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed wardrobes provide substantial concealed storage while preserving a calm, balanced bedroom elevation around the fireplace.",
          "For similar fitted wardrobes and made-to-measure bedroom storage, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/highgate-fitted-wardrobes/highgate-fitted-wardrobes-closed-view-01.webp",
      alt: "Grey fitted wardrobes arranged around a bedroom fireplace in Highgate",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/highgate-fitted-wardrobes/highgate-fitted-wardrobes-closed-view-01.webp", alt: "Closed view of Highgate fitted wardrobes around the fireplace", fit: "contain" },
      { src: "/images/gallery/highgate-fitted-wardrobes/highgate-fitted-wardrobes-open-view-02.webp", alt: "Open fitted wardrobe showing hanging and drawer storage", fit: "contain" },
      { src: "/images/gallery/highgate-fitted-wardrobes/highgate-fitted-wardrobes-storage-detail-03.webp", alt: "Highgate wardrobe internal storage detail", fit: "contain" },
    ],
  },
{
    galleryId: "G21",
    slug: "northwood-bespoke-tv-unit",
    title: "Northwood Bespoke TV Unit",
    category: "Bespoke Joinery",
    location: "Northwood, London",
    summary: "A dark timber full-wall TV and display unit with integrated television, illuminated open niches, upper shelving and concealed low-level storage.",
    seoDescription: "Northwood bespoke TV unit case study by Form & Frame, featuring dark timber cabinetry, integrated television, illuminated display niches, upper shelving and concealed low-level storage.",
    keywords: [
      "Northwood bespoke TV unit",
      "bespoke media wall Northwood",
      "dark timber TV unit",
      "integrated TV cabinetry",
      "illuminated display shelving",
      "made to measure media unit",
      "bespoke joinery",
    ],
    highlights: [
      "Full-wall dark timber media composition",
      "Integrated television",
      "Illuminated open display niches",
      "Upper shelving with low-level concealed storage",
    ],
    caseStudy: [
      {
        heading: "A full-wall media and display composition",
        body: [
          "This Northwood installation combines the television with open display shelving and concealed storage across a large section of wall. The dark timber finish gives the furniture a strong presence while the open grid prevents the elevation from feeling too solid.",
          "The television is integrated into the overall shelving composition rather than treated as a separate object.",
        ],
      },
      {
        heading: "The demanding part: keeping a large grid visually controlled",
        body: [
          "The design uses repeated vertical divisions, horizontal shelves and illuminated display sections. Across a wall-scale installation, any inconsistency in spacing or alignment would be immediately visible.",
          "The television opening also has to sit naturally within the wider grid so it feels part of the furniture rather than interrupting it.",
        ],
      },
      {
        heading: "Display lighting within the shelving",
        body: [
          "Warm integrated lighting highlights selected open niches and creates contrast against the darker timber finish. The lighting also helps separate display zones from the deeper shelving around the television.",
          "Because the illuminated sections are viewed directly, the relationship between shelf edges, internal panels and lighting positions becomes part of the visual finish.",
        ],
      },
      {
        heading: "Open display above concealed storage",
        body: [
          "The upper part of the unit is predominantly open and display-led, while the lower cabinetry provides concealed storage behind darker fronts. This keeps everyday storage out of view without making the entire wall visually heavy.",
          "The angled room view shows how the shelving continues across the wall and relates to the adjacent window and seating area.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed TV unit combines media, display and concealed storage functions within one dark timber composition. Warm lighting and open shelving break up the scale of the wall and give the installation more depth.",
          "For similar bespoke TV units, media walls and integrated display furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/northwood-bespoke-tv-unit/northwood-bespoke-tv-unit-room-view-01.webp",
      alt: "Dark timber bespoke TV and display unit in Northwood",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/northwood-bespoke-tv-unit/northwood-bespoke-tv-unit-room-view-01.webp", alt: "Main room view of Northwood bespoke TV unit", fit: "contain" },
      { src: "/images/gallery/northwood-bespoke-tv-unit/northwood-bespoke-tv-unit-angled-view-02.webp", alt: "Angled view of dark timber TV unit with illuminated display shelving", fit: "contain" },
    ],
  },
  {
    galleryId: "G22",
    slug: "northwood-home-office",
    title: "Northwood Home Office",
    category: "Bespoke Joinery",
    location: "Northwood, London",
    summary: "A dark timber fitted home office with a wraparound desk, overhead storage, integrated task lighting and coordinated low-level drawers and cupboards.",
    seoDescription: "Northwood fitted home office case study by Form & Frame, featuring dark timber cabinetry, a wraparound desk, overhead storage, integrated lighting and concealed office storage.",
    keywords: [
      "Northwood home office",
      "bespoke home office London",
      "fitted office furniture",
      "dark timber office cabinetry",
      "wraparound desk",
      "made to measure study",
      "bespoke joinery",
    ],
    highlights: [
      "Wraparound fitted desk",
      "Dark timber cabinetry",
      "Overhead cupboards with integrated lighting",
      "Low-level drawers and concealed storage",
    ],
    caseStudy: [
      {
        heading: "A fitted workspace built around the room",
        body: [
          "This Northwood home office uses a wraparound desk to make practical use of the available wall space while keeping the centre of the room open.",
          "Dark timber cabinetry continues around the workspace so the desk, drawers and overhead storage read as one coordinated fitted installation.",
        ],
      },
      {
        heading: "The demanding part: continuous working levels",
        body: [
          "A desk that turns across several walls depends on accurate setting out. The working surface, low cabinetry and upper units need to remain visually level as they move around corners and meet the existing room.",
          "The photographs also show how the furniture responds to the window and adjacent walls without interrupting the usable desk area.",
        ],
      },
      {
        heading: "Storage above and below the desk",
        body: [
          "Upper cupboards provide enclosed storage above the main work zone, while drawers and low cabinets keep everyday office items accessible below the worktop.",
          "This combination allows the room to hold a substantial amount of storage without filling the wall entirely with full-height cabinetry.",
        ],
      },
      {
        heading: "Integrated task lighting",
        body: [
          "Lighting is built beneath the overhead cabinetry to illuminate the working area directly. The warm light also separates the desk zone visually from the darker timber above.",
          "Because the lighting sits close to the joinery, straight lines and clean junctions between the cabinets, worktop and illuminated panel are particularly visible.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed office combines a generous work surface with practical concealed storage in a compact fitted composition.",
          "For similar home offices and fitted studies, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/northwood-home-office/northwood-home-office-front-view-03.webp",
      alt: "Front view of Northwood home office",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/northwood-home-office/northwood-home-office-front-view-03.webp", alt: "Front view of Northwood home office", fit: "contain" },
      { src: "/images/gallery/northwood-home-office/northwood-home-office-overall-view-01.webp", alt: "Overall view of Northwood fitted home office", fit: "contain" },
      { src: "/images/gallery/northwood-home-office/northwood-home-office-storage-detail-02.webp", alt: "Low cabinetry and drawer storage in Northwood home office", fit: "contain" },
    ],
  },
  {
    galleryId: "G23",
    slug: "putney-flat-bespoke-tv-unit",
    title: "Putney Flat Bespoke TV Unit",
    category: "Bespoke Joinery",
    location: "Putney, London",
    summary: "A full-height dark timber media wall with an integrated television, illuminated display niches and concealed lower storage.",
    seoDescription: "Putney bespoke TV unit case study by Form & Frame, featuring dark timber full-height cabinetry, integrated television, illuminated display niches and concealed storage.",
    keywords: [
      "Putney bespoke TV unit",
      "bespoke media wall Putney",
      "dark timber TV unit",
      "integrated TV cabinetry",
      "illuminated display niches",
      "fitted media furniture",
      "bespoke joinery",
    ],
    highlights: [
      "Full-height dark timber media wall",
      "Integrated television",
      "Illuminated display niches",
      "Concealed lower storage",
    ],
    caseStudy: [
      {
        heading: "A full-height media wall",
        body: [
          "This Putney project uses dark timber cabinetry across the full wall, combining the television, display shelving and concealed storage within one fitted composition.",
          "The central television is framed by vertical and horizontal cabinet lines, while illuminated niches break up the darker finish and provide dedicated display areas.",
        ],
      },
      {
        heading: "The demanding part: maintaining the grid",
        body: [
          "A wall-scale media unit creates many visible reference lines. Door joints, shelf edges and the television opening all need to remain aligned so the elevation reads as one controlled piece of furniture.",
          "The darker finish makes the illuminated sections especially prominent, which increases the importance of consistent spacing around each niche.",
        ],
      },
      {
        heading: "Integrated lighting and display",
        body: [
          "Warm lighting is built into the side display compartments, giving decorative objects a clear focal point and adding depth to the media wall.",
          "The close-up photograph shows how the light is contained within the shelf recess, keeping the technical element visually discreet.",
        ],
      },
      {
        heading: "Storage without visual clutter",
        body: [
          "The lower cabinetry provides concealed storage beneath the television and display sections. This allows the room to retain a clean appearance while keeping everyday items out of view.",
          "The overall arrangement balances open display areas with closed storage rather than filling the wall entirely with one type of cabinetry.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed unit combines media, display and storage functions in a dark architectural composition that remains integrated with the wider living and dining area.",
          "For similar bespoke TV units and media walls, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/putney-flat-bespoke-tv-unit/putney-flat-bespoke-tv-unit-front-view-02.webp",
      alt: "Front view of Putney Flat bespoke TV unit",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/putney-flat-bespoke-tv-unit/putney-flat-bespoke-tv-unit-front-view-02.webp", alt: "Front view of Putney Flat bespoke TV unit", fit: "contain" },
      { src: "/images/gallery/putney-flat-bespoke-tv-unit/putney-flat-bespoke-tv-unit-room-view-01.webp", alt: "Room view of Putney bespoke TV unit", fit: "contain" },
      { src: "/images/gallery/putney-flat-bespoke-tv-unit/putney-flat-bespoke-tv-unit-display-detail-03.webp", alt: "Illuminated display niche detail in Putney media wall", fit: "contain" },
    ],
  },
  {
    galleryId: "G25",
    slug: "earls-court-floating-shelf-mirror-wall",
    title: "Earls Court Floating Shelf & Mirror Wall",
    category: "Bespoke Joinery",
    location: "Earls Court, London",
    summary: "A dark floating display shelf set against a full-height mirrored wall, creating a compact decorative feature with a light architectural footprint.",
    seoDescription: "Earls Court bespoke mirror-wall feature by Form & Frame, with a dark floating display shelf set against full-height mirrored panels.",
    keywords: [
      "Earls Court bespoke joinery",
      "floating shelf London",
      "mirror wall joinery",
      "bespoke display shelf",
      "made to measure wall feature",
      "bespoke interior furniture",
    ],
    highlights: [
      "Full-height mirrored wall",
      "Dark floating display shelf",
      "Compact decorative composition",
      "Clean wall-mounted installation",
    ],
    caseStudy: [
      {
        heading: "A compact feature built into the wall",
        body: [
          "This Earls Court installation combines a dark floating display shelf with a full-height mirrored wall, creating a strong visual feature without adding bulky cabinetry.",
          "The mirror expands the perceived depth of the space while the shelf provides a practical surface for decorative objects.",
        ],
      },
      {
        heading: "The demanding part: alignment against mirror",
        body: [
          "Mirror makes junctions and alignment particularly visible because every edge is reflected. The shelf therefore needs to sit level and cleanly against the mirrored surface.",
          "The reflected geometry also makes the relationship between the shelf, wall panels and surrounding door opening more noticeable than it would be against a plain painted wall.",
        ],
      },
      {
        heading: "Keeping the composition visually light",
        body: [
          "The shelf is deliberately wall-mounted with no visible floor support, allowing the mirrored wall to remain continuous below it.",
          "This keeps the feature visually light while still giving the hallway a defined focal point.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed feature uses a small amount of joinery to create a strong architectural effect through contrast between the dark shelf and reflective wall.",
          "For similar floating furniture, display shelves and mirror-wall features, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/earls-court-floating-shelf-mirror-wall/earls-court-floating-shelf-mirror-wall-view-01.webp",
      alt: "Dark floating shelf set against a full-height mirrored wall in Earls Court",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/earls-court-floating-shelf-mirror-wall/earls-court-floating-shelf-mirror-wall-view-01.webp", alt: "Floating display shelf and mirrored wall feature in Earls Court", fit: "contain" },
    ],
  },
  {
    galleryId: "G26",
    slug: "putney-bespoke-tv-unit",
    title: "Putney Bespoke TV Unit",
    category: "Bespoke Joinery",
    location: "Putney, London",
    summary: "A full-width fitted media wall with light textured fronts, integrated television, linear fireplace, illuminated display niches and concealed storage.",
    seoDescription: "Putney bespoke TV unit case study by Form & Frame, featuring light textured fitted cabinetry, integrated television, linear fireplace, display niches and concealed storage.",
    keywords: [
      "Putney bespoke TV unit",
      "bespoke media wall Putney",
      "integrated fireplace TV wall",
      "fitted media cabinetry",
      "illuminated display niche",
      "made to measure TV unit",
      "bespoke joinery",
    ],
    highlights: [
      "Full-width fitted media wall",
      "Integrated television and linear fireplace",
      "Illuminated display niches",
      "Concealed storage behind flush fronts",
    ],
    caseStudy: [
      {
        heading: "A full-width media wall",
        body: [
          "This Putney installation uses fitted cabinetry across the full width of the room, integrating the television, fireplace, display niches and concealed storage within one continuous composition.",
          "The light textured finish keeps the large wall of furniture visually restrained while the darker display recesses add contrast.",
        ],
      },
      {
        heading: "The demanding part: integrating multiple functions",
        body: [
          "The television, fireplace, storage and display niches all occupy different positions within the elevation. Their edges and surrounding panel lines need to stay aligned so the composition remains controlled.",
          "The photographs show how the cabinet grid continues across the wall even where the internal functions change.",
        ],
      },
      {
        heading: "Concealed storage and access",
        body: [
          "One view shows the television section and adjacent cabinetry opened, revealing practical storage behind the flush external fronts.",
          "This allows everyday equipment and storage to remain accessible without interrupting the closed appearance of the media wall.",
        ],
      },
      {
        heading: "Lighting and display niches",
        body: [
          "Dark recessed display niches with integrated spot lighting create visual breaks within the lighter fitted elevation.",
          "The contrast draws attention to displayed objects while helping the full-width installation avoid reading as one continuous solid surface.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed media wall combines entertainment, fireplace, display and storage functions while maintaining a calm fitted appearance across the room.",
          "For similar bespoke TV units and integrated media walls, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/putney-bespoke-tv-unit/putney-bespoke-tv-unit-front-view-02.webp",
      alt: "Front view of Putney bespoke TV unit",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/putney-bespoke-tv-unit/putney-bespoke-tv-unit-front-view-02.webp", alt: "Front view of Putney bespoke TV unit", fit: "contain" },
      { src: "/images/gallery/putney-bespoke-tv-unit/putney-bespoke-tv-unit-room-view-01.webp", alt: "Room view of Putney fitted TV and fireplace wall", fit: "contain" },
      { src: "/images/gallery/putney-bespoke-tv-unit/putney-bespoke-tv-unit-open-storage-03.webp", alt: "Open storage and television detail in Putney media wall", fit: "contain" },
      { src: "/images/gallery/putney-bespoke-tv-unit/putney-bespoke-tv-unit-detail-04.webp", alt: "Illuminated display niche detail in Putney TV unit", fit: "contain" },
    ],
  },
  {
    galleryId: "G27",
    slug: "manchester-walk-in-wardrobe",
    title: "Manchester Walk-In Wardrobe",
    category: "Bespoke Joinery",
    location: "Manchester",
    summary: "A light figured-timber walk-in wardrobe with mirrored and glazed fronts, a central storage island and an integrated dressing area.",
    seoDescription: "Manchester walk-in wardrobe case study by Form & Frame, featuring light figured-timber cabinetry, mirrored and glazed doors, a central storage island and integrated dressing furniture.",
    keywords: [
      "Manchester walk-in wardrobe",
      "bespoke dressing room Manchester",
      "fitted wardrobes Manchester",
      "mirrored wardrobe doors",
      "wardrobe island",
      "bespoke dressing room",
      "made to measure wardrobes",
      "bespoke joinery",
    ],
    highlights: [
      "Full walk-in wardrobe composition",
      "Mirrored and glazed cabinet fronts",
      "Central storage island",
      "Integrated dressing area",
    ],
    caseStudy: [
      {
        heading: "A complete dressing-room composition",
        body: [
          "This Manchester project uses fitted wardrobes on opposing walls with a central storage island and dressing area, creating a complete walk-in wardrobe rather than a single run of cabinetry.",
          "The light figured finish keeps the large amount of furniture visually calm while mirrored and glazed fronts introduce reflection and depth.",
        ],
      },
      {
        heading: "The demanding part: symmetry across the room",
        body: [
          "Opposing wardrobe runs make alignment highly visible. Door heights, mirrored panels, vertical divisions and handle positions need to relate accurately across both sides of the room.",
          "The central island reinforces that symmetry, so its position and proportion also need to sit naturally within the circulation space.",
        ],
      },
      {
        heading: "Mirrored and glazed fronts",
        body: [
          "The doors combine reflective and translucent panels within framed fronts, allowing the wardrobe to feel lighter than a continuous wall of solid doors.",
          "The mirror panels also reflect the opposite cabinetry, making consistency in spacing and alignment an important part of the finished appearance.",
        ],
      },
      {
        heading: "Island and dressing area",
        body: [
          "The central island provides additional drawer storage and a practical surface within the dressing room, while the adjacent dressing table creates a dedicated preparation area.",
          "These elements are coordinated with the wardrobe finish so the room reads as one designed furniture scheme.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed room combines fitted wardrobes, mirrors, display sections, island storage and dressing furniture within a balanced light-toned interior.",
          "For similar walk-in wardrobes and dressing rooms, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/manchester-walk-in-wardrobe/manchester-walk-in-wardrobe-front-view-02.webp",
      alt: "Front view of Manchester walk-in wardrobe",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/manchester-walk-in-wardrobe/manchester-walk-in-wardrobe-front-view-02.webp", alt: "Front view of Manchester walk-in wardrobe", fit: "contain" },
      { src: "/images/gallery/manchester-walk-in-wardrobe/manchester-walk-in-wardrobe-overall-view-01.webp", alt: "Overall view of Manchester walk-in wardrobe with central island", fit: "contain" },
      { src: "/images/gallery/manchester-walk-in-wardrobe/manchester-walk-in-wardrobe-dressing-detail-03.webp", alt: "Wardrobe and integrated dressing area detail", fit: "contain" },
    ],
  },
  {
  "galleryId": "G28",
  "slug": "manchester-makeup-island-dressing-table",
  "title": "Manchester Make-Up Island & Dressing Table",
  "category": "Bespoke Joinery",
  "location": "Manchester",
  "summary": "A coordinated dressing-room furniture set with a central make-up island and matching dressing table in a light figured timber finish.",
  "seoDescription": "Manchester bespoke dressing-room furniture case study by Form & Frame, featuring a central make-up island and coordinated dressing table in a light figured timber finish.",
  "keywords": [
    "Manchester dressing table",
    "make-up island Manchester",
    "bespoke dressing room furniture",
    "dressing room island",
    "made to measure dressing table",
    "bespoke joinery Manchester"
  ],
  "highlights": [
    "Central make-up island",
    "Coordinated dressing table",
    "Light figured timber finish",
    "Integrated drawer storage"
  ],
  "caseStudy": [
    {
      "heading": "Furniture designed as part of the dressing room",
      "body": [
        "This Manchester project combines a central make-up island with a separate dressing table, using the same light figured timber finish so the two pieces read as one coordinated furniture scheme.",
        "The island adds storage and a practical central surface, while the dressing table creates a dedicated preparation area against the wall."
      ]
    },
    {
      "heading": "The demanding part: balancing freestanding-looking pieces",
      "body": [
        "Both pieces are visually simple, so proportion and alignment carry much of the finished character. Drawer fronts, panel lines and edge details need to remain consistent across the separate items.",
        "The central island also has to sit comfortably within the circulation space rather than interrupting movement through the dressing room."
      ]
    },
    {
      "heading": "Drawer storage and usable surfaces",
      "body": [
        "The island incorporates drawer storage below a generous top surface, keeping smaller dressing-room items accessible while preserving a clean exterior.",
        "The matching dressing table provides a second work surface and additional storage without introducing a competing material or style."
      ]
    },
    {
      "heading": "The finished result",
      "body": [
        "The completed furniture adds practical storage and dedicated preparation areas while maintaining the same material language as the wider Manchester dressing-room scheme.",
        "For similar dressing islands, dressing tables and fitted bedroom furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
      ]
    }
  ],
  "cover": {
    "src": "/images/gallery/manchester-walk-in-wardrobe/manchester-walk-in-wardrobe-overall-view-01.webp",
    "alt": "Full view of the Manchester dressing island with the matching dressing table behind",
    "fit": "contain"
  },
  "images": [
    {
      "src": "/images/gallery/manchester-walk-in-wardrobe/manchester-walk-in-wardrobe-overall-view-01.webp",
      "alt": "Full view of the Manchester dressing island with the matching dressing table behind",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/manchester-makeup-island-dressing-table/manchester-makeup-island-overall-view-01.webp",
      "alt": "Jewellery compartments beneath the dressing island's glazed top",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/manchester-makeup-island-dressing-table/manchester-makeup-island-detail-02.webp",
      "alt": "Divided storage and dressing accessories beside the mirror",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/manchester-makeup-island-dressing-table/manchester-dressing-table-view-03.webp",
      "alt": "Glazed top, frame and pale drawer-front detail",
      "fit": "contain"
    }
  ]
},
  {
    galleryId: "G29",
    slug: "virginia-water-wine-room",
    title: "Virginia Water Wine Room",
    category: "Bespoke Joinery",
    location: "Virginia Water, Surrey",
    summary: "A bespoke wine room with full-height bottle storage, mirrored central display shelving and integrated lighting.",
    seoDescription: "Virginia Water bespoke wine room case study by Form & Frame, featuring full-height bottle storage, mirrored display shelving and integrated lighting.",
    keywords: ["Virginia Water wine room","bespoke wine storage Surrey","wine wall joinery","bespoke bottle storage","luxury wine room","bespoke joinery"],
    highlights: ["Full-height bottle storage","Mirrored central display shelving","Integrated lighting","Dedicated champagne storage"],
    caseStudy: [
      { heading: "A full-wall wine display", body: ["This Virginia Water project turns one wall of the room into a dedicated wine display with bottle storage arranged around a mirrored central section.", "The dark cabinetry gives the installation a strong architectural presence while the mirror and lighting introduce depth and reflection."] },
      { heading: "The demanding part: repetition and alignment", body: ["Hundreds of bottle positions create a very regular visual grid, so shelf spacing and horizontal alignment need to stay consistent across the full elevation.", "The central display section also has to sit precisely within that grid so it reads as part of the same composition."] },
      { heading: "Lighting and reflective surfaces", body: ["Integrated lighting highlights the bottle storage and central glass shelves, making the display readable without relying on general room lighting.", "The mirrored centre increases the sense of depth and reflects the surrounding room back through the joinery."] },
      { heading: "The finished result", body: ["The completed wine room combines storage, display and decorative lighting within one fitted elevation.", "For similar wine rooms, bars and specialist display furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."] },
    ],
    cover: { src: "/images/gallery/virginia-water-wine-room/virginia-water-wine-room-overall-view-01.webp", alt: "Bespoke wine wall in Virginia Water", fit: "contain" },
    images: [
      { src: "/images/gallery/virginia-water-wine-room/virginia-water-wine-room-overall-view-01.webp", alt: "Overall view of Virginia Water wine room", fit: "contain" },
      { src: "/images/gallery/virginia-water-wine-room/virginia-water-wine-room-front-detail-02.webp", alt: "Front detail of wine wall and mirrored display", fit: "contain" },
      { src: "/images/gallery/virginia-water-wine-room/virginia-water-wine-room-storage-detail-03.webp", alt: "Bottle storage detail in Virginia Water wine room", fit: "contain" },
      { src: "/images/gallery/virginia-water-wine-room/virginia-water-wine-room-bottle-detail-04.webp", alt: "Vertical bottle storage detail", fit: "contain" },
      { src: "/images/gallery/virginia-water-wine-room/virginia-water-wine-room-rack-detail-05.webp", alt: "Close wine rack detail", fit: "contain" },
      { src: "/images/gallery/virginia-water-wine-room/virginia-water-wine-room-context-view-06.webp", alt: "Room context for Virginia Water wine room", fit: "contain" },
    ],
  },
  {
    galleryId: "G30",
    slug: "fulham-wine-cellar",
    title: "Fulham Wine Cellar",
    category: "Bespoke Joinery",
    location: "Fulham, London",
    summary: "A dark bespoke wine cellar with illuminated bottle storage, diamond wine racks and a central display niche.",
    seoDescription: "Fulham bespoke wine cellar case study by Form & Frame, featuring dark fitted bottle storage, illuminated wine racks and a central display niche.",
    keywords: [
      "Fulham wine cellar",
      "bespoke wine room Fulham",
      "wine storage London",
      "fitted wine racks",
      "luxury wine cellar",
      "bespoke joinery",
    ],
    highlights: [
      "Full-height bottle storage",
      "Diamond wine-rack sections",
      "Integrated lighting",
      "Central display niche",
    ],
    caseStudy: [
      {
        heading: "A dedicated fitted wine cellar",
        body: [
          "This Fulham project uses dark fitted cabinetry to create a dedicated wine-storage room with bottle racks arranged around a central display section.",
          "The vertical proportions and repeated bottle positions give the installation a strong architectural character while keeping the collection organised and visible.",
        ],
      },
      {
        heading: "The demanding part: repeated geometry",
        body: [
          "Wine storage relies on consistent spacing across a large number of repeated compartments. Small variations in the diamond racks or vertical bottle divisions would become increasingly visible across the full elevation.",
          "The central niche also needs to remain accurately aligned with the surrounding storage so the wall reads as one complete composition.",
        ],
      },
      {
        heading: "Lighting and display",
        body: [
          "Integrated lighting highlights the bottle storage and creates contrast against the dark cabinetry.",
          "The illuminated central niche provides a visual break within the repeated wine-rack pattern and adds depth to the room.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed wine cellar combines high-capacity bottle storage, display and integrated lighting within a compact fitted room.",
          "For similar wine rooms and specialist storage furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/marias-house-wine-cellar/marias-house-wine-cellar-front-view-02.webp",
      alt: "Front view of Fulham wine cellar",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/marias-house-wine-cellar/marias-house-wine-cellar-front-view-02.webp", alt: "Front view of Fulham wine cellar", fit: "contain" },
      { src: "/images/gallery/marias-house-wine-cellar/marias-house-wine-cellar-doorway-view-01.webp", alt: "Doorway view of Fulham wine cellar", fit: "contain" },
      { src: "/images/gallery/marias-house-wine-cellar/marias-house-wine-cellar-angled-view-03.webp", alt: "Angled view of illuminated wine racks", fit: "contain" },
      { src: "/images/gallery/marias-house-wine-cellar/marias-house-wine-cellar-storage-detail-04.webp", alt: "Bottle storage detail in Fulham wine cellar", fit: "contain" },
      { src: "/images/gallery/marias-house-wine-cellar/marias-house-wine-cellar-rack-detail-05.webp", alt: "Diamond wine-rack detail", fit: "contain" },
    ],
  },
  {
  "galleryId": "G31",
  "slug": "fulham-home-office",
  "title": "Fulham Home Office",
  "category": "Bespoke Joinery",
  "location": "Fulham, London",
  "summary": "A dark fitted home office with an integrated desk, full-height storage, open shelving and refined brass inlay details.",
  "seoDescription": "Fulham bespoke home office case study by Form & Frame, featuring dark fitted cabinetry, integrated desk, open shelving, full-height storage and brass inlay details.",
  "keywords": [
    "Fulham home office",
    "bespoke home office Fulham",
    "fitted office furniture London",
    "dark timber home office",
    "brass inlay cabinetry",
    "made to measure study",
    "bespoke joinery"
  ],
  "highlights": [
    "Integrated fitted desk",
    "Full-height storage",
    "Open display shelving",
    "Brass inlay detailing"
  ],
  "caseStudy": [
    {
      "heading": "A fitted office built around the room",
      "body": [
        "This Fulham home office combines a fitted desk, full-height storage and open display shelving within one dark architectural composition.",
        "The cabinetry uses the available wall area efficiently while keeping the working surface clear and visually connected to the surrounding storage."
      ]
    },
    {
      "heading": "The demanding part: integrating different functions",
      "body": [
        "The desk, drawers, shelving and tall cupboards all operate differently, but their visible panel lines and proportions need to remain coordinated.",
        "Because the finish is dark and the detailing is precise, small changes in alignment become particularly noticeable across the completed elevation."
      ]
    },
    {
      "heading": "Open shelving and concealed storage",
      "body": [
        "Open display shelves create visual breaks within the fitted wall, while enclosed cupboards provide practical storage for items that do not need to remain on view.",
        "This balance helps the room function as a working office without allowing storage requirements to dominate the interior."
      ]
    },
    {
      "heading": "Brass detailing",
      "body": [
        "Fine brass inlay details introduce a controlled contrast against the darker cabinetry and help articulate selected edges and divisions.",
        "The close-up views show how the metal detail is integrated as part of the furniture rather than applied as a separate decorative layer."
      ]
    },
    {
      "heading": "The finished result",
      "body": [
        "The completed office combines work surface, shelving and substantial storage in a fitted composition with a restrained material palette.",
        "For similar fitted studies and home offices, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
      ]
    }
  ],
  "cover": {
    "src": "/images/gallery/fulham-home-office/fulham-home-office-desk-view-02.webp",
    "alt": "Full front view of the fitted Fulham desk, shelving and cupboards",
    "fit": "contain"
  },
  "images": [
    {
      "src": "/images/gallery/fulham-home-office/fulham-home-office-desk-view-02.webp",
      "alt": "Full front view of the fitted Fulham desk, shelving and cupboards",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/fulham-home-office/fulham-home-office-overall-view-01.webp",
      "alt": "View into the Fulham home office from the doorway",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/fulham-home-office/fulham-home-office-storage-detail-03.webp",
      "alt": "Full-height storage detail in Fulham home office",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/fulham-home-office/fulham-home-office-detail-04.webp",
      "alt": "Shelving and brass inlay detail in Fulham home office",
      "fit": "contain"
    }
  ]
},
  {
  "galleryId": "G32",
  "slug": "fulham-alcove-units",
  "title": "Fulham Alcove Units",
  "category": "Bespoke Joinery",
  "location": "Fulham, London",
  "summary": "Pale fitted alcove cupboards and illuminated display shelves framing a television and fireplace in Fulham.",
  "seoDescription": "Completed Fulham alcove joinery with pale cupboard fronts, illuminated open shelving and a balanced composition around the television and fireplace.",
  "keywords": [
    "Fulham alcove units",
    "bespoke alcove cupboards",
    "illuminated display shelving",
    "fitted living room storage",
    "bespoke joinery"
  ],
  "highlights": [
    "Paired fitted alcove units",
    "Illuminated open display shelves",
    "Pale lower cupboards",
    "Television and fireplace composition"
  ],
  "caseStudy": [
    {
      "heading": "A balanced living-room composition",
      "body": [
        "The two fitted alcove units frame the central television and fireplace. Open shelves occupy the upper sections, while cupboards below provide concealed storage.",
        "The pale cabinetry sits quietly against the surrounding walls, allowing the displayed objects and the central fireplace to remain visible parts of the room."
      ]
    },
    {
      "heading": "Open display and everyday storage",
      "body": [
        "Integrated shelf lighting gives each display area definition. The lower cupboards keep everyday items behind doors, balancing open and closed storage within the same elevation.",
        "The photographs show both units together and closer views of the individual alcoves, so the overall proportions and shelf arrangement can be seen clearly."
      ]
    },
    {
      "heading": "Fitting around the room",
      "body": [
        "For furniture of this kind, the survey needs to account for the chimney breast, floor levels, skirtings and the available depth on each side. Shelf spacing and cupboard proportions can then be considered alongside sockets and lighting.",
        "For a similar project, share photographs and approximate dimensions of both alcoves. Form & Frame can review the design, technical requirements and installation, with specialist manufacturing partners where appropriate."
      ]
    }
  ],
  "cover": {
    "src": "/images/gallery/fulham-alcove-units/fulham-alcove-units-pair-overall-00.webp",
    "alt": "Full view of both pale Fulham alcove units around the television and fireplace",
    "fit": "contain"
  },
  "images": [
    {
      "src": "/images/gallery/fulham-alcove-units/fulham-alcove-units-pair-overall-00.webp",
      "alt": "Full view of both pale Fulham alcove units around the television and fireplace",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/fulham-alcove-units/fulham-alcove-units-room-view-01.webp",
      "alt": "Right-hand alcove with illuminated shelves and lower cupboards",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/fulham-alcove-units/fulham-alcove-units-front-view-02.webp",
      "alt": "Left-hand alcove cupboards and open display shelves",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/fulham-alcove-units/fulham-alcove-units-detail-03.webp",
      "alt": "Angled view of the left alcove beside the television and fireplace",
      "fit": "contain"
    }
  ]
},
  {
    galleryId: "G33",
    slug: "fulham-juice-bar-joinery",
    title: "Fulham Juice Bar Joinery",
    category: "Bespoke Joinery",
    location: "Fulham, London",
    summary: "A bespoke residential juice bar with a central island, integrated storage, dark cabinetry and warm timber detailing.",
    seoDescription: "Fulham bespoke juice bar case study by Form & Frame, featuring a central island, integrated storage, dark cabinetry and warm timber detailing.",
    keywords: [
      "Fulham juice bar",
      "bespoke bar joinery Fulham",
      "residential bar furniture London",
      "bespoke kitchen bar",
      "custom island joinery",
      "bespoke joinery",
    ],
    highlights: [
      "Central bar island",
      "Integrated appliance and service storage",
      "Dark fitted cabinetry",
      "Warm timber detailing",
    ],
    caseStudy: [
      {
        heading: "A dedicated residential juice bar",
        body: [
          "This Fulham project creates a dedicated juice-bar area using fitted cabinetry and a central island within the wider living space.",
          "Dark outer cabinetry is balanced with warmer timber surfaces and open areas so the installation feels integrated rather than visually heavy.",
        ],
      },
      {
        heading: "The demanding part: combining display and service functions",
        body: [
          "The joinery needs to accommodate storage, preparation surfaces and service access while maintaining a clean residential appearance.",
          "The island and wall cabinetry therefore have to work together both visually and practically, with consistent lines across doors, panels and work surfaces.",
        ],
      },
      {
        heading: "Integrated storage",
        body: [
          "Closed cabinetry keeps appliances and service items concealed when not in use, while the open service views show how the joinery supports practical day-to-day use.",
          "The result is a compact bar arrangement that functions efficiently without reading like a commercial installation.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed juice bar combines preparation space, storage and seating within a fitted furniture composition that complements the surrounding interior.",
          "For similar residential bars, drinks cabinetry and specialist joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/fulham-juice-bar-joinery/fulham-juice-bar-front-view-03.webp",
      alt: "Front view of Fulham juice bar joinery",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/fulham-juice-bar-joinery/fulham-juice-bar-front-view-03.webp", alt: "Front view of Fulham juice bar joinery", fit: "contain" },
      { src: "/images/gallery/fulham-juice-bar-joinery/fulham-juice-bar-overall-view-01.webp", alt: "Overall view of Fulham juice bar joinery", fit: "contain" },
      { src: "/images/gallery/fulham-juice-bar-joinery/fulham-juice-bar-room-context-02.webp", alt: "Room context view of Fulham juice bar", fit: "contain" },
      { src: "/images/gallery/fulham-juice-bar-joinery/fulham-juice-bar-counter-detail-04.webp", alt: "Countertop and joinery detail", fit: "contain" },
      { src: "/images/gallery/fulham-juice-bar-joinery/fulham-juice-bar-island-view-05.webp", alt: "Juice bar island and seating view", fit: "contain" },
      { src: "/images/gallery/fulham-juice-bar-joinery/fulham-juice-bar-side-cabinet-06.webp", alt: "Closed side cabinetry in Fulham juice bar", fit: "contain" },
      { src: "/images/gallery/fulham-juice-bar-joinery/fulham-juice-bar-service-detail-07.webp", alt: "Open service storage detail in Fulham juice bar", fit: "contain" },
    ],
  },
  {
    galleryId: "G34",
    slug: "fulham-antique-mirror-feature",
    title: "Fulham Antique Mirror Feature",
    category: "Bespoke Joinery",
    location: "Fulham, London",
    summary: "A full-height antique mirror feature with integrated dark cabinetry, framed reflective panels and carefully aligned architectural detailing.",
    seoDescription: "Fulham antique mirror feature by Form & Frame, combining full-height aged mirror panels with integrated dark cabinetry and fitted architectural detailing.",
    keywords: [
      "Fulham antique mirror",
      "antique mirror wall London",
      "bespoke mirror feature",
      "fitted mirror cabinetry",
      "dark bespoke joinery",
      "architectural joinery Fulham",
    ],
    highlights: [
      "Full-height antique mirror panels",
      "Integrated dark cabinetry",
      "Framed reflective composition",
      "Made-to-measure fitted installation",
    ],
    caseStudy: [
      {
        heading: "A mirror feature designed as part of the room",
        body: [
          "This Fulham installation combines full-height antique mirror panels with fitted dark cabinetry to create a decorative architectural feature rather than a standalone mirror.",
          "The aged reflective surface introduces depth and variation while the darker joinery provides a controlled frame around the composition.",
        ],
      },
      {
        heading: "The demanding part: precise panel alignment",
        body: [
          "Large mirror panels make line and proportion particularly visible. The vertical joints, cabinet edges and surrounding architectural lines need to remain accurately coordinated across the full height of the installation.",
          "The reflective surface also exposes inconsistencies immediately, so survey and fitting accuracy are critical.",
        ],
      },
      {
        heading: "Cabinetry and reflection",
        body: [
          "The darker fitted elements create a strong contrast with the antique mirror and help anchor the feature within the room.",
          "The reflective panels amplify light and surrounding detail without making the joinery itself visually dominant.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed feature combines reflective surface, fitted cabinetry and architectural alignment in one restrained composition.",
          "For similar mirror walls, decorative fitted features and bespoke joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/fulham-antique-mirror-feature/fulham-antique-mirror-front-view-02.webp",
      alt: "Front view of Fulham antique mirror feature",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/fulham-antique-mirror-feature/fulham-antique-mirror-front-view-02.webp", alt: "Front view of Fulham antique mirror feature", fit: "contain" },
      { src: "/images/gallery/fulham-antique-mirror-feature/fulham-antique-mirror-overall-view-01.webp", alt: "Overall view of Fulham antique mirror feature", fit: "contain" },
      { src: "/images/gallery/fulham-antique-mirror-feature/fulham-antique-mirror-angled-view-03.webp", alt: "Angled view of mirror feature and dark cabinetry", fit: "contain" },
      { src: "/images/gallery/fulham-antique-mirror-feature/fulham-antique-mirror-detail-04.webp", alt: "Antique mirror panel detail", fit: "contain" },
      { src: "/images/gallery/fulham-antique-mirror-feature/fulham-antique-mirror-context-view-05.webp", alt: "Room context view of Fulham antique mirror feature", fit: "contain" },
    ],
  },
  {
    galleryId: "G45",
    slug: "esher-luxury-residence-alcove-units",
    title: "Esher Luxury Residence — Alcove Units",
    category: "Bespoke Joinery",
    location: "Esher, Surrey",
    summary: "A collection of fitted alcove units across several rooms, combining painted cabinetry, open shelving, concealed storage and tailored proportions.",
    seoDescription: "Esher Luxury Residence bespoke alcove units by Form & Frame, featuring fitted shelving, concealed storage and made-to-measure cabinetry across multiple rooms.",
    keywords: [
      "Esher Luxury Residence alcove units",
      "bespoke alcove units London",
      "fitted alcove cabinets",
      "made to measure shelving",
      "painted fitted furniture",
      "bespoke joinery",
    ],
    highlights: [
      "Multiple fitted alcove installations",
      "Open shelving and concealed storage",
      "Made-to-measure room-by-room fitting",
      "Painted cabinetry",
    ],
    caseStudy: [
      {
        heading: "Alcove furniture across several rooms",
        body: [
          "This project includes several fitted alcove installations within the same property, each responding to a different room while maintaining a consistent fitted-furniture approach.",
          "The gallery shows full-room compositions as well as closer views of individual alcove units, shelving and lower cabinetry.",
        ],
      },
      {
        heading: "The demanding part: adapting to different rooms",
        body: [
          "Each alcove has its own wall geometry, chimney-breast proportions and surrounding architectural conditions, so the furniture cannot simply be repeated from one room to another.",
          "Accurate survey and setting out allow the shelving, lower cabinets and outer fillers to meet the existing walls cleanly while preserving a balanced appearance.",
        ],
      },
      {
        heading: "Display and concealed storage",
        body: [
          "Open shelves provide display space above, while the lower cupboards keep everyday storage concealed.",
          "This combination gives the rooms practical storage capacity without making the fitted furniture feel visually heavy.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "Across the property, the alcove units create useful storage and display space while remaining closely integrated with the existing rooms.",
          "For similar multi-room fitted joinery projects, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/8-leys-road-alcove-units/8-leys-road-alcove-units-front-view-03.webp",
      alt: "Front view of Esher Luxury Residence alcove units",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/8-leys-road-alcove-units/8-leys-road-alcove-units-front-view-03.webp", alt: "Front view of Esher Luxury Residence alcove units", fit: "contain" },
      { src: "/images/gallery/8-leys-road-alcove-units/8-leys-road-alcove-units-overall-view-01.webp", alt: "Overall room view of alcove units", fit: "contain" },
      { src: "/images/gallery/8-leys-road-alcove-units/8-leys-road-alcove-units-angled-view-02.webp", alt: "Angled view of fitted alcove furniture", fit: "contain" },
      { src: "/images/gallery/8-leys-road-alcove-units/8-leys-road-alcove-units-detail-04.webp", alt: "Alcove shelving and cabinet detail", fit: "contain" },
      { src: "/images/gallery/8-leys-road-alcove-units/8-leys-road-alcove-units-detail-05.webp", alt: "Opposite alcove unit detail", fit: "contain" },
      { src: "/images/gallery/8-leys-road-alcove-units/8-leys-road-alcove-units-second-room-06.webp", alt: "Second room fitted alcove units", fit: "contain" },
      { src: "/images/gallery/8-leys-road-alcove-units/8-leys-road-alcove-units-second-room-detail-07.webp", alt: "Second room alcove cabinetry detail", fit: "contain" },
      { src: "/images/gallery/8-leys-road-alcove-units/8-leys-road-alcove-units-third-room-08.webp", alt: "Third room alcove installation", fit: "contain" },
      { src: "/images/gallery/8-leys-road-alcove-units/8-leys-road-alcove-units-third-room-front-09.webp", alt: "Front view of third room alcove units", fit: "contain" },
    ],
  },
  {
    galleryId: "G46",
    slug: "london-luxury-salon-joinery",
    title: "London Luxury Salon Joinery",
    category: "Bespoke Joinery",
    location: "London",
    summary: "A refined salon fit-out combining reception furniture, styling stations, mirrors, storage and architectural joinery in a coordinated commercial interior.",
    seoDescription: "London luxury salon joinery case study by Form & Frame, featuring reception furniture, styling stations, mirrors, fitted storage and architectural joinery.",
    keywords: [
      "London salon joinery",
      "luxury salon fit out",
      "bespoke salon furniture",
      "commercial joinery London",
      "reception desk joinery",
      "styling station cabinetry",
      "bespoke commercial interiors",
    ],
    highlights: [
      "Reception and front-of-house joinery",
      "Bespoke styling stations",
      "Integrated mirrors and storage",
      "Architectural commercial fit-out details",
    ],
    caseStudy: [
      {
        heading: "A complete salon joinery scheme",
        body: [
          "This London project brings together several types of bespoke joinery within one commercial salon interior, including reception furniture, styling stations, storage and architectural fitted elements.",
          "The joinery supports day-to-day salon use while maintaining a consistent material and detailing language across the space.",
        ],
      },
      {
        heading: "The demanding part: repetition with consistency",
        body: [
          "Commercial interiors often repeat the same functional elements across a larger space. Styling stations, mirrors, cabinetry and service areas therefore need consistent dimensions and alignment so the interior feels controlled rather than repetitive.",
          "That consistency also has to survive installation across multiple wall conditions and circulation zones.",
        ],
      },
      {
        heading: "Storage and service integration",
        body: [
          "The furniture incorporates practical storage and service functions around the main client-facing areas.",
          "By integrating those requirements into the cabinetry, the salon can keep working equipment accessible without allowing it to dominate the finished appearance.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed fit-out combines practical commercial requirements with a refined furniture-led interior.",
          "For similar salon, hospitality and commercial joinery projects, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-overall-view-01.webp",
      alt: "Luxury salon joinery interior in London",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-overall-view-01.webp", alt: "Overall view of London luxury salon joinery", fit: "contain" },
      { src: "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-reception-view-02.webp", alt: "Reception and joinery view", fit: "contain" },
      { src: "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-room-view-03.webp", alt: "Wide salon interior view", fit: "contain" },
      { src: "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-station-detail-04.webp", alt: "Styling station detail", fit: "contain" },
      { src: "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-cabinetry-view-05.webp", alt: "Fitted salon cabinetry view", fit: "contain" },
      { src: "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-mirror-detail-06.webp", alt: "Mirror and joinery detail", fit: "contain" },
      { src: "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-context-view-07.webp", alt: "Salon room context view", fit: "contain" },
      { src: "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-storage-view-08.webp", alt: "Service and storage joinery", fit: "contain" },
      { src: "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-architectural-view-09.webp", alt: "Architectural salon joinery view", fit: "contain" },
      { src: "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-detail-10.webp", alt: "Salon material and joinery detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G47",
    slug: "bespoke-media-wall-display-shelving",
    title: "Bespoke Media Wall with Display Shelving",
    category: "Bespoke Joinery",
    summary: "A full-height bespoke media wall combining an integrated television, illuminated display shelving and concealed lower storage in one fitted composition.",
    seoDescription: "Bespoke media wall by Form & Frame with integrated TV, illuminated display shelving, framed joinery details and concealed lower storage.",
    keywords: [
      "bespoke media wall",
      "media wall display shelving",
      "integrated TV wall",
      "illuminated display shelving",
      "bespoke fitted joinery",
      "living room media wall",
    ],
    highlights: [
      "Integrated television surround",
      "Illuminated display shelving",
      "Concealed lower storage",
      "Full-height fitted composition",
    ],
    caseStudy: [
      {
        heading: "A media wall designed as fitted furniture",
        body: [
          "This project combines the television, display shelving and lower storage into one full-height fitted composition rather than treating each element separately.",
          "The open shelves frame the central media area while the lower cabinetry provides practical concealed storage and keeps the overall elevation visually controlled.",
        ],
      },
      {
        heading: "The demanding part: aligning several visual zones",
        body: [
          "A media wall like this depends on accurate coordination between the television opening, shelf lines, outer framing and lower cabinet fronts.",
          "Because the arrangement is highly symmetrical and viewed as one large elevation, small inconsistencies in gaps or levels would be immediately visible.",
        ],
      },
      {
        heading: "Integrated lighting and display detail",
        body: [
          "The shelving incorporates lighting to emphasise displayed objects and add depth to the fitted wall.",
          "The close-up photographs show the relationship between the shelf edges, surrounding panels and lighting details, all of which need to remain cleanly integrated rather than appearing as separate add-ons.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed installation combines media, display and storage functions while maintaining a furniture-led appearance.",
          "For similar bespoke media walls and fitted living-room joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-front-view-10.webp",
      alt: "Front view of bespoke media wall with display shelving",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-front-view-10.webp", alt: "Front view of bespoke media wall with display shelving", fit: "contain" },
      { src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-overall-view-01.webp", alt: "Overall view of bespoke media wall", fit: "contain" },
      { src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-angled-view-02.webp", alt: "Angled room view of fitted media wall", fit: "contain" },
      { src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-shelving-view-03.webp", alt: "Display shelving beside integrated television", fit: "contain" },
      { src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-shelf-lighting-04.webp", alt: "Illuminated display shelving detail", fit: "contain" },
      { src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-side-view-05.webp", alt: "Side view of full-height media wall", fit: "contain" },
      { src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-storage-detail-06.webp", alt: "Open lower storage detail beneath media wall", fit: "contain" },
      { src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-shelf-edge-07.webp", alt: "Display shelf edge detail", fit: "contain" },
      { src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-lighting-detail-08.webp", alt: "Integrated shelf lighting detail", fit: "contain" },
      { src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-junction-detail-09.webp", alt: "Frame and panel junction detail", fit: "contain" },
      { src: "/images/gallery/bespoke-media-wall-display-shelving/bespoke-media-wall-tv-surround-11.webp", alt: "Integrated television surround detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G48",
    slug: "stourcliff-bespoke-media-wall",
    title: "Stourcliff Bespoke Media Wall",
    category: "Bespoke Joinery",
    summary: "A dark fitted media wall combining an integrated television, reflective display sections, lower drawers and precisely aligned architectural cabinetry.",
    seoDescription: "Stourcliff bespoke media wall by Form & Frame, with integrated TV, reflective display cabinetry, lower drawers and detailed fitted joinery.",
    keywords: [
      "Stourcliff bespoke media wall",
      "bespoke TV wall",
      "dark fitted media unit",
      "reflective display cabinetry",
      "bespoke living room joinery",
      "fitted TV cabinetry",
    ],
    highlights: [
      "Integrated television surround",
      "Reflective display sections",
      "Lower drawer storage",
      "Full-height fitted cabinetry",
    ],
    caseStudy: [
      {
        heading: "A fitted media wall built as one composition",
        body: [
          "This project brings the television, display sections and lower storage together within one continuous fitted elevation.",
          "The darker cabinetry gives the wall a strong architectural presence while the reflective sections introduce contrast and depth around the media area.",
        ],
      },
      {
        heading: "The demanding part: controlling alignment",
        body: [
          "The front elevation relies on consistent vertical lines, drawer gaps and panel junctions across a wide fitted installation.",
          "Because the television, display areas and storage all sit within the same composition, inaccurate setting out would be immediately visible across the finished wall.",
        ],
      },
      {
        heading: "Display and concealed storage",
        body: [
          "Reflective display sections sit above the lower cabinetry while drawers provide concealed storage beneath.",
          "The close-up photographs show how the cabinet frames, worktop-level surfaces and surrounding panels meet cleanly at their junctions.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed media wall combines entertainment, display and storage functions in a single fitted piece with a controlled, furniture-led appearance.",
          "For similar media walls and fitted living-room joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/stourcliff-bespoke-media-wall/stourcliff-media-wall-front-view-02.webp",
      alt: "Front view of Stourcliff bespoke media wall",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/stourcliff-bespoke-media-wall/stourcliff-media-wall-front-view-02.webp", alt: "Front view of Stourcliff bespoke media wall", fit: "contain" },
      { src: "/images/gallery/stourcliff-bespoke-media-wall/stourcliff-media-wall-overall-view-01.webp", alt: "Overall living room view of Stourcliff bespoke media wall", fit: "contain" },
      { src: "/images/gallery/stourcliff-bespoke-media-wall/stourcliff-media-wall-display-detail-03.webp", alt: "Media wall display and television surround detail", fit: "contain" },
      { src: "/images/gallery/stourcliff-bespoke-media-wall/stourcliff-media-wall-cabinet-detail-04.webp", alt: "Reflective display cabinetry detail", fit: "contain" },
      { src: "/images/gallery/stourcliff-bespoke-media-wall/stourcliff-media-wall-drawer-detail-05.webp", alt: "Lower drawer and cabinet detail", fit: "contain" },
      { src: "/images/gallery/stourcliff-bespoke-media-wall/stourcliff-media-wall-junction-detail-06.webp", alt: "Cabinet and panel junction detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G49",
    slug: "stourcliff-mirrored-wardrobes",
    title: "Stourcliff Mirrored Wardrobes",
    category: "Bespoke Joinery",
    summary: "Full-height fitted wardrobes with mirrored door fronts, carefully aligned panels and a clean built-in relationship to the bedroom.",
    seoDescription: "Stourcliff mirrored fitted wardrobes by Form & Frame, with full-height mirrored fronts, controlled panel alignment and bespoke bedroom joinery detailing.",
    keywords: [
      "mirrored fitted wardrobes",
      "bespoke bedroom wardrobes",
      "full height wardrobes",
      "mirrored wardrobe doors",
      "fitted bedroom joinery",
      "Stourcliff wardrobes",
    ],
    highlights: [
      "Full-height fitted wardrobes",
      "Mirrored door fronts",
      "Controlled panel alignment",
      "Integrated bedroom joinery",
    ],
    caseStudy: [
      {
        heading: "Full-height fitted wardrobe composition",
        body: [
          "This bedroom installation uses full-height mirrored wardrobe fronts to create storage while keeping the fitted elevation visually light.",
          "The mirrored doors reflect the surrounding room, so their alignment, proportions and relationship with the adjacent panels are especially visible in the finished result.",
        ],
      },
      {
        heading: "The demanding part: maintaining consistent lines",
        body: [
          "A mirrored wardrobe exposes even small inconsistencies because reflections make misaligned door edges and uneven gaps easier to notice.",
          "The installation therefore depends on careful setting out, consistent door spacing and accurate junctions where the fitted furniture meets the surrounding room.",
        ],
      },
      {
        heading: "Mirrored fronts and fitted detailing",
        body: [
          "The close-up views show how the mirrored fronts sit within the wider fitted composition rather than reading as separate freestanding pieces.",
          "Keeping the door lines controlled allows the reflective surfaces to remain the dominant visual feature without distracting irregular gaps or panel transitions.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed wardrobes provide substantial concealed storage with a restrained, integrated appearance.",
          "For similar fitted wardrobes and bedroom joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/stourcliff-mirrored-wardrobes/stourcliff-mirrored-wardrobes-front-02.webp",
      alt: "Front view of Stourcliff mirrored wardrobes",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/stourcliff-mirrored-wardrobes/stourcliff-mirrored-wardrobes-front-02.webp", alt: "Front view of Stourcliff mirrored wardrobes", fit: "contain" },
      { src: "/images/gallery/stourcliff-mirrored-wardrobes/stourcliff-mirrored-wardrobes-overall-01.webp", alt: "Overall view of full-height mirrored wardrobes", fit: "contain" },
      { src: "/images/gallery/stourcliff-mirrored-wardrobes/stourcliff-mirrored-wardrobes-door-detail-03.webp", alt: "Mirrored wardrobe door detail", fit: "contain" },
      { src: "/images/gallery/stourcliff-mirrored-wardrobes/stourcliff-mirrored-wardrobes-junction-04.webp", alt: "Wardrobe panel and door junction detail", fit: "contain" },
      { src: "/images/gallery/stourcliff-mirrored-wardrobes/stourcliff-mirrored-wardrobes-detail-05.webp", alt: "Mirrored fitted wardrobe detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G50",
    slug: "stourcliff-dressing-table",
    title: "Stourcliff Dressing Table",
    category: "Bespoke Joinery",
    summary: "A fitted bedroom dressing table with integrated drawer storage, clean horizontal lines and carefully controlled junctions within the surrounding room.",
    seoDescription: "Stourcliff bespoke dressing table by Form & Frame, with fitted drawer storage, controlled alignment and detailed bedroom joinery installation.",
    keywords: [
      "bespoke dressing table",
      "fitted dressing table",
      "bedroom drawer storage",
      "bespoke bedroom joinery",
      "fitted bedroom furniture",
      "Stourcliff dressing table",
    ],
    highlights: [
      "Fitted bedroom dressing table",
      "Integrated drawer storage",
      "Clean horizontal alignment",
      "Detailed fitted joinery",
    ],
    caseStudy: [
      {
        heading: "A fitted dressing table for the bedroom",
        body: [
          "This project uses a fitted dressing table to provide a dedicated surface and integrated drawer storage within the bedroom.",
          "The furniture is kept visually restrained, with the storage contained within a simple fitted composition rather than reading as a separate freestanding piece.",
        ],
      },
      {
        heading: "The demanding part: drawer and surface alignment",
        body: [
          "The clean appearance depends on consistent drawer gaps, straight horizontal lines and accurate setting out across the fitted unit.",
          "Small discrepancies would be particularly visible across the long front elevation, so final adjustment and controlled junctions are important to the finished result.",
        ],
      },
      {
        heading: "Practical storage without visual weight",
        body: [
          "The drawers provide everyday concealed storage while the upper surface remains open for use as a dressing area.",
          "The close-up photography shows the relationship between the drawer fronts, surrounding panels and adjoining surfaces.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed piece provides useful bedroom storage while remaining compact and integrated with the room.",
          "For similar dressing tables and fitted bedroom furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/stourcliff-dressing-table/stourcliff-dressing-table-front-02.webp",
      alt: "Front view of Stourcliff dressing table",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/stourcliff-dressing-table/stourcliff-dressing-table-front-02.webp", alt: "Front view of Stourcliff dressing table", fit: "contain" },
      { src: "/images/gallery/stourcliff-dressing-table/stourcliff-dressing-table-overall-01.webp", alt: "Overall view of fitted dressing table", fit: "contain" },
      { src: "/images/gallery/stourcliff-dressing-table/stourcliff-dressing-table-detail-03.webp", alt: "Dressing table drawer and joinery detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G51",
    slug: "stourcliff-fitted-wardrobe-shoe-storage",
    title: "Stourcliff Fitted Wardrobe & Shoe Storage",
    category: "Bespoke Joinery",
    summary: "Fitted bedroom storage combining full-height wardrobe cabinetry with dedicated open shoe storage and carefully aligned joinery details.",
    seoDescription: "Stourcliff fitted wardrobe and shoe storage by Form & Frame, combining full-height bedroom cabinetry, open shoe storage and precise fitted joinery.",
    keywords: [
      "fitted wardrobe",
      "shoe storage",
      "bespoke bedroom storage",
      "built in wardrobe",
      "fitted shoe storage",
      "Stourcliff bedroom joinery",
    ],
    highlights: [
      "Full-height fitted wardrobe",
      "Dedicated shoe storage",
      "Open and concealed storage",
      "Precise fitted junctions",
    ],
    caseStudy: [
      {
        heading: "Wardrobe and shoe storage as one fitted scheme",
        body: [
          "This bedroom project combines full-height wardrobe cabinetry with dedicated shoe storage so different storage needs are handled within one coordinated fitted scheme.",
          "The wardrobe provides concealed storage while the open sections keep frequently used footwear accessible.",
        ],
      },
      {
        heading: "The demanding part: coordinating different storage types",
        body: [
          "Combining tall wardrobe doors with smaller open storage sections requires careful control of proportions and alignment.",
          "The furniture has to meet the surrounding walls cleanly while keeping door lines, shelf positions and panel junctions visually consistent.",
        ],
      },
      {
        heading: "Accessible shoe storage",
        body: [
          "The open storage provides a practical place for shoes without reducing the main wardrobe capacity.",
          "The close-up views show how these smaller storage sections are integrated into the wider fitted furniture rather than added as separate units.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed installation provides a mix of concealed and accessible bedroom storage within a compact fitted footprint.",
          "For similar wardrobes and specialist bedroom storage, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/stourcliff-fitted-wardrobe-shoe-storage/stourcliff-wardrobe-storage-front-02.webp",
      alt: "Front view of Stourcliff fitted wardrobe and shoe storage",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/stourcliff-fitted-wardrobe-shoe-storage/stourcliff-wardrobe-storage-front-02.webp", alt: "Front view of Stourcliff fitted wardrobe and shoe storage", fit: "contain" },
      { src: "/images/gallery/stourcliff-fitted-wardrobe-shoe-storage/stourcliff-wardrobe-storage-overall-01.webp", alt: "Overall view of fitted wardrobe and storage", fit: "contain" },
      { src: "/images/gallery/stourcliff-fitted-wardrobe-shoe-storage/stourcliff-wardrobe-shoe-storage-03.webp", alt: "Dedicated fitted shoe storage", fit: "contain" },
      { src: "/images/gallery/stourcliff-fitted-wardrobe-shoe-storage/stourcliff-wardrobe-open-storage-04.webp", alt: "Open fitted storage detail", fit: "contain" },
      { src: "/images/gallery/stourcliff-fitted-wardrobe-shoe-storage/stourcliff-wardrobe-junction-05.webp", alt: "Wardrobe panel junction detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G52",
    slug: "stourcliff-bathroom-vanity-storage",
    title: "Stourcliff Bathroom Vanity & Storage",
    category: "Bespoke Joinery",
    summary: "Fitted bathroom furniture combining a vanity unit with coordinated storage cabinetry and carefully resolved junctions around the room.",
    seoDescription: "Stourcliff bespoke bathroom vanity and fitted storage by Form & Frame, with coordinated cabinetry, practical storage and precise joinery detailing.",
    keywords: [
      "bespoke bathroom vanity",
      "fitted bathroom storage",
      "bathroom cabinetry",
      "bespoke vanity unit",
      "bathroom joinery",
      "Stourcliff bathroom furniture",
    ],
    highlights: [
      "Fitted vanity cabinetry",
      "Coordinated bathroom storage",
      "Integrated concealed storage",
      "Precise panel and surface junctions",
    ],
    caseStudy: [
      {
        heading: "Vanity and storage designed together",
        body: [
          "This bathroom scheme combines the vanity area with fitted storage so the practical elements read as one coordinated furniture installation.",
          "Keeping the pieces visually related helps the bathroom feel controlled while still providing useful concealed storage.",
        ],
      },
      {
        heading: "The demanding part: fitting around fixed bathroom elements",
        body: [
          "Bathroom furniture has to work accurately around walls, surfaces and sanitary fittings, leaving little tolerance for inconsistent gaps or poorly resolved edges.",
          "Careful setting out is therefore important at the junctions between cabinet fronts, adjoining surfaces and surrounding finishes.",
        ],
      },
      {
        heading: "Storage within a compact footprint",
        body: [
          "The cabinetry provides practical storage without relying on freestanding furniture that would interrupt the room.",
          "The detail photographs show how the vanity and adjacent fitted elements maintain consistent lines across the installation.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed scheme gives the bathroom a furniture-led appearance while keeping everyday storage integrated and accessible.",
          "For similar bathroom vanities and fitted storage, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/stourcliff-bathroom-vanity-storage/stourcliff-bathroom-vanity-front-02.webp",
      alt: "Front view of Stourcliff bathroom vanity and storage",
      fit: "contain",

    },
    images: [
      { src: "/images/gallery/stourcliff-bathroom-vanity-storage/stourcliff-bathroom-vanity-front-02.webp", alt: "Front view of Stourcliff bathroom vanity and storage", fit: "contain" },
      { src: "/images/gallery/stourcliff-bathroom-vanity-storage/stourcliff-bathroom-vanity-overall-01.webp", alt: "Overall view of fitted bathroom vanity", fit: "contain" },
      { src: "/images/gallery/stourcliff-bathroom-vanity-storage/stourcliff-bathroom-storage-03.webp", alt: "Fitted bathroom storage cabinetry", fit: "contain" },
      { src: "/images/gallery/stourcliff-bathroom-vanity-storage/stourcliff-bathroom-vanity-junction-04.webp", alt: "Bathroom vanity junction detail", fit: "contain" },
      { src: "/images/gallery/stourcliff-bathroom-vanity-storage/stourcliff-bathroom-cabinet-detail-05.webp", alt: "Bathroom cabinet detail", fit: "contain" },
    ],
  },

  {
    galleryId: "G54",
    slug: "stourcliff-bespoke-radiator-cover",
    title: "Stourcliff Bespoke Radiator Cover",
    category: "Bespoke Joinery",
    summary: "A fitted radiator cover integrated beneath the window, combining a ventilated front with a continuous ledge and carefully resolved joinery around the opening.",
    seoDescription: "Stourcliff bespoke radiator cover by Form & Frame, fitted beneath a window with a ventilated front, integrated ledge and precise surrounding joinery.",
    keywords: [
      "bespoke radiator cover",
      "fitted radiator cover",
      "window radiator cover",
      "bespoke window ledge",
      "fitted living room joinery",
      "Stourcliff radiator cover",
    ],
    highlights: [
      "Fitted radiator enclosure",
      "Integrated window ledge",
      "Ventilated front panel",
      "Precise wall and window junctions",
    ],
    caseStudy: [
      {
        heading: "A fitted radiator cover beneath the window",
        body: [
          "This piece integrates the radiator into the room by enclosing it within fitted joinery and extending the top into a practical ledge beneath the window.",
          "The result is more architectural than a freestanding cover because the furniture follows the width and proportions of the opening.",
        ],
      },
      {
        heading: "The demanding part: fitting around an existing opening",
        body: [
          "Radiator covers beneath windows need accurate setting out so the top, side panels and ventilation area all sit cleanly within the surrounding wall geometry.",
          "The installation also has to maintain enough clearance around the radiator while keeping the visible gaps and edges controlled.",
        ],
      },
      {
        heading: "Ventilation and visual integration",
        body: [
          "The front panel allows heat to circulate while concealing the radiator itself.",
          "By aligning the cover closely with the window opening and surrounding surfaces, the piece reads as part of the room rather than an added accessory.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed radiator cover creates a cleaner wall elevation and adds a useful ledge without interrupting the room.",
          "For similar radiator covers, window seats and fitted architectural joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/stourcliff-bespoke-radiator-cover/stourcliff-radiator-cover-overall-02.webp",
      alt: "Stourcliff bespoke radiator cover beneath window",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/stourcliff-bespoke-radiator-cover/stourcliff-radiator-cover-overall-02.webp", alt: "Overall view of bespoke radiator cover beneath window", fit: "contain" },
      { src: "/images/gallery/stourcliff-bespoke-radiator-cover/stourcliff-radiator-cover-detail-01.webp", alt: "Radiator cover and integrated window ledge detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G55",
    slug: "stourcliff-recessed-display-niche",
    title: "Stourcliff Recessed Display Niche",
    category: "Bespoke Joinery",
    summary: "A recessed illuminated display niche built into the wall as a compact architectural joinery feature with integrated shelving.",
    seoDescription: "Stourcliff recessed display niche by Form & Frame, featuring integrated lighting, fitted shelving and a clean built-in architectural detail.",
    keywords: [
      "recessed display niche",
      "illuminated display niche",
      "bespoke display shelving",
      "built in display cabinet",
      "architectural joinery detail",
      "Stourcliff bespoke joinery",
    ],
    highlights: [
      "Recessed wall integration",
      "Integrated display lighting",
      "Fitted display shelving",
      "Compact architectural joinery feature",
    ],
    caseStudy: [
      {
        heading: "A compact built-in display feature",
        body: [
          "This project is a small but distinct piece of fitted joinery: a recessed display niche integrated directly into the surrounding wall.",
          "The shelving and lighting are contained within the opening so the feature reads as part of the architecture rather than as freestanding furniture.",
        ],
      },
      {
        heading: "The demanding part: precise wall integration",
        body: [
          "A recessed feature depends on accurate setting out because the outer frame, shelf positions and surrounding wall lines are all visible at once.",
          "The fitted opening therefore needs controlled margins and clean junctions so the niche remains visually balanced.",
        ],
      },
      {
        heading: "Display lighting and shelving",
        body: [
          "Integrated lighting gives the niche depth and draws attention to the objects placed on the shelves.",
          "The result is a practical display area that adds interest without projecting into the room.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed niche provides a focused display feature within a compact footprint.",
          "For similar recessed displays and architectural joinery details, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/stourcliff-recessed-display-niche/stourcliff-recessed-display-niche-01.webp",
      alt: "Stourcliff recessed illuminated display niche",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/stourcliff-recessed-display-niche/stourcliff-recessed-display-niche-01.webp", alt: "Recessed illuminated display niche with fitted shelving", fit: "contain" },
    ],
  },
  {
    galleryId: "G35",
    slug: "belgravia-kids-room-home-office-furniture",
    title: "Belgravia Kids Room & Home Office Furniture",
    category: "Bespoke Joinery",
    location: "Belgravia, London",
    summary: "A coordinated fitted-furniture scheme across a kids room and home-office setting, combining desks, storage cabinetry, display elements and refined furniture details.",
    seoDescription: "Belgravia bespoke kids-room and home-office furniture by Form & Frame, with fitted desks, storage cabinetry, display joinery and detailed furniture finishes.",
    keywords: [
      "Belgravia bespoke joinery",
      "kids room fitted furniture",
      "bespoke home office",
      "fitted study furniture",
      "home office cabinetry",
      "bespoke desk London",
    ],
    highlights: [
      "Fitted kids-room cabinetry",
      "Integrated home-office furniture",
      "Desk and storage coordination",
      "Leather desk detail",
      "Leather wardrobe detailing",
    ],
    caseStudy: [
      {
        heading: "A coordinated fitted-furniture scheme",
        body: [
          "This Belgravia project brings together fitted furniture across a kids-room and home-office setting, using built-in cabinetry and desk elements to organise the rooms without relying on freestanding storage.",
          "The gallery shows wider room views alongside closer details of the fitted units, allowing the overall composition and individual joinery junctions to be seen together.",
        ],
      },
      {
        heading: "The demanding part: aligning desks, storage and surrounding panels",
        body: [
          "Where desks, cabinets and tall storage meet within one fitted composition, the visible lines need to remain consistent across several different functions.",
          "Accurate setting out helps the furniture meet surrounding walls cleanly while keeping desk surfaces, cabinet fronts and adjacent panels visually controlled.",
        ],
      },
      {
        heading: "Furniture details within the wider scheme",
        body: [
          "The photography includes a leather-clad desk detail as well as fitted kids-room and home-office cabinetry.",
          "These closer views show how material details and smaller junctions contribute to the finished appearance without overwhelming the practical storage and working areas.",
          "The same project also includes leather-clad wardrobe detailing with brass hardware, now kept within this single Belgravia project gallery rather than as a separate case study.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed rooms combine practical study and storage functions with a consistent fitted-furniture approach.",
          "For similar kids-room furniture, studies and home-office joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-01.webp",
      alt: "Belgravia fitted kids-room and home-office furniture",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-01.webp", alt: "Belgravia kids-room fitted furniture view", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-02.webp", alt: "Kids-room cabinetry view", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-03.webp", alt: "Bespoke kids-room furniture detail", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-04.webp", alt: "Belgravia home-office fitted furniture", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-05.webp", alt: "Leather desk detail", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-06.webp", alt: "Kids-room furniture view", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-07.webp", alt: "Kids-room fitted joinery view", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-08.webp", alt: "Kids-room joinery detail", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-09.webp", alt: "Fitted furniture detail", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-10.webp", alt: "Cabinetry detail in Belgravia kids room", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-11.webp", alt: "Bespoke kids-room furniture view", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-12.webp", alt: "Home-office and kids-room furniture view", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-13.webp", alt: "Home-office fitted furniture detail", fit: "contain" },
      { src: "/images/gallery/belgravia-kids-room-home-office-furniture/belgravia-kids-home-office-14.webp", alt: "Belgravia home-office furniture view", fit: "contain" },
      { src: "/images/gallery/belgravia-leather-wardrobe/belgravia-leather-wardrobe-detail-01.webp", alt: "Belgravia bespoke leather wardrobe detail", fit: "contain" },
      { src: "/images/gallery/belgravia-leather-wardrobe/belgravia-leather-wardrobe-brass-handle-02.webp", alt: "Brass wardrobe handle detail", fit: "contain" },
      { src: "/images/gallery/belgravia-leather-wardrobe/belgravia-leather-wardrobe-panel-detail-03.webp", alt: "Leather wardrobe panel detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G36",
    slug: "belgravia-bathroom-furniture-antique-mirror",
    title: "Belgravia Bathroom Furniture & Antique Mirror",
    category: "Bespoke Joinery",
    location: "Belgravia, London",
    summary: "A fitted bathroom scheme combining bespoke cabinetry with an antique-mirror feature and carefully resolved storage details.",
    seoDescription: "Belgravia bespoke bathroom furniture by Form & Frame, combining fitted cabinetry, antique mirror detailing and integrated storage in a refined London interior.",
    keywords: [
      "Belgravia bathroom furniture",
      "bespoke bathroom cabinetry",
      "antique mirror bathroom",
      "fitted bathroom storage",
      "luxury bathroom joinery",
      "bespoke joinery London",
    ],
    highlights: [
      "Antique-mirror feature",
      "Fitted bathroom cabinetry",
      "Integrated storage",
      "Detailed panel junctions",
    ],
    caseStudy: [
      {
        heading: "Bathroom furniture and mirror work designed together",
        body: [
          "This Belgravia bathroom combines fitted furniture with an antique-mirror feature so the storage and decorative surfaces read as one coordinated joinery scheme.",
          "The gallery shows the mirror treatment alongside the surrounding cabinetry and smaller furniture details.",
        ],
      },
      {
        heading: "The demanding part: precise fitting in a finished bathroom",
        body: [
          "Bathroom joinery has to meet fixed walls, surfaces and fittings with very little tolerance for inconsistent gaps.",
          "Accurate setting out keeps the cabinet fronts, mirror edges and adjoining panels aligned while protecting the clean appearance of the finished room.",
        ],
      },
      {
        heading: "Antique mirror as an integrated feature",
        body: [
          "The antique mirror adds depth and reflection without reading as a separate decorative object.",
          "By coordinating it directly with the surrounding fitted furniture, the feature becomes part of the architecture of the bathroom.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed scheme combines practical bathroom storage with a more decorative mirror-led focal point.",
          "For similar bathroom cabinetry and specialist mirror joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/belgravia-bathroom-furniture-antique-mirror/belgravia-bathroom-antique-mirror-01.webp",
      alt: "Belgravia bathroom furniture with antique mirror",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/belgravia-bathroom-furniture-antique-mirror/belgravia-bathroom-antique-mirror-01.webp", alt: "Belgravia bathroom with antique mirror feature", fit: "contain" },
      { src: "/images/gallery/belgravia-bathroom-furniture-antique-mirror/belgravia-bathroom-antique-mirror-detail-02.webp", alt: "Antique mirror bathroom detail", fit: "contain" },
      { src: "/images/gallery/belgravia-bathroom-furniture-antique-mirror/belgravia-bathroom-furniture-03.webp", alt: "Fitted bathroom furniture view", fit: "contain" },
      { src: "/images/gallery/belgravia-bathroom-furniture-antique-mirror/belgravia-bathroom-cabinetry-04.webp", alt: "Belgravia bathroom cabinetry view", fit: "contain" },
      { src: "/images/gallery/belgravia-bathroom-furniture-antique-mirror/belgravia-bathroom-detail-05.webp", alt: "Bathroom furniture detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G37",
    slug: "belgravia-walk-in-wardrobe",
    title: "Belgravia Walk-In Wardrobe",
    category: "Bespoke Joinery",
    location: "Belgravia, London",
    summary: "A fitted walk-in wardrobe with illuminated display storage, dark timber cabinetry, brass detailing and carefully integrated handle work.",
    seoDescription: "Belgravia walk-in wardrobe by Form & Frame, featuring illuminated storage, bespoke cabinetry, brass inlay and detailed fitted joinery.",
    keywords: [
      "Belgravia walk-in wardrobe",
      "bespoke wardrobe London",
      "illuminated wardrobe storage",
      "brass inlay wardrobe",
      "luxury fitted wardrobe",
      "bespoke dressing room",
    ],
    highlights: [
      "Full walk-in wardrobe layout",
      "Illuminated display storage",
      "Brass inlay detailing",
      "Integrated handle details",
    ],
    caseStudy: [
      {
        heading: "A fitted walk-in wardrobe scheme",
        body: [
          "This Belgravia walk-in wardrobe is arranged as a fitted storage environment rather than a series of freestanding pieces.",
          "The overall view shows tall cabinetry and illuminated display storage working together within the room.",
        ],
      },
      {
        heading: "The demanding part: combining storage and decorative detailing",
        body: [
          "The installation brings together full-height cabinetry, display sections and smaller decorative details, so alignment has to remain consistent across several types of storage.",
          "The wardrobe also relies on clean junctions where darker timber surfaces meet brass-trimmed details and integrated handles.",
        ],
      },
      {
        heading: "Lighting, brass and handle details",
        body: [
          "The closer photographs show illuminated storage, brass inlay and cut-out handle detailing.",
          "These elements add definition to the fitted furniture while remaining integrated into the overall wardrobe composition.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed walk-in wardrobe combines practical storage with a more refined furniture-led finish.",
          "For similar wardrobes and dressing-room joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/belgravia-walk-in-wardrobe/belgravia-walk-in-wardrobe-overall-01.webp",
      alt: "Belgravia bespoke walk-in wardrobe",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/belgravia-walk-in-wardrobe/belgravia-walk-in-wardrobe-overall-01.webp", alt: "Overall Belgravia walk-in wardrobe view", fit: "contain" },
      { src: "/images/gallery/belgravia-walk-in-wardrobe/belgravia-walk-in-wardrobe-interior-02.webp", alt: "Walk-in wardrobe interior view", fit: "contain" },
      { src: "/images/gallery/belgravia-walk-in-wardrobe/belgravia-walk-in-wardrobe-display-03.webp", alt: "Illuminated wardrobe display storage", fit: "contain" },
      { src: "/images/gallery/belgravia-walk-in-wardrobe/belgravia-walk-in-wardrobe-brass-inlay-04.webp", alt: "Brass inlay wardrobe detail", fit: "contain" },
      { src: "/images/gallery/belgravia-walk-in-wardrobe/belgravia-walk-in-wardrobe-brass-detail-05.webp", alt: "Brass wardrobe detailing", fit: "contain" },
      { src: "/images/gallery/belgravia-walk-in-wardrobe/belgravia-walk-in-wardrobe-handle-detail-06.webp", alt: "Integrated cut-out handle detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G38",
    slug: "belgravia-dining-room-tv-furniture",
    title: "Belgravia Dining Room & TV Furniture",
    category: "Bespoke Joinery",
    location: "Belgravia, London",
    summary: "A coordinated dining-room furniture scheme combining a bespoke TV unit, fitted cabinetry and refined leather and joinery details.",
    seoDescription: "Belgravia dining-room and TV furniture by Form & Frame, featuring bespoke cabinetry, a fitted TV unit and refined furniture detailing in a London interior.",
    keywords: [
      "Belgravia dining room furniture",
      "bespoke TV unit London",
      "fitted dining room cabinetry",
      "bespoke living room furniture",
      "leather furniture detail",
      "bespoke joinery Belgravia",
    ],
    highlights: [
      "Bespoke TV furniture",
      "Fitted dining-room cabinetry",
      "Coordinated furniture composition",
      "Leather and joinery detailing",
    ],
    caseStudy: [
      {
        heading: "Dining-room and TV furniture as one scheme",
        body: [
          "This Belgravia project coordinates the TV furniture and dining-room cabinetry so the separate pieces read as one fitted interior scheme.",
          "The wider photographs show the furniture in the room, while the closer views reveal the cabinet fronts, panel junctions and material details.",
        ],
      },
      {
        heading: "The demanding part: maintaining consistency across separate furniture pieces",
        body: [
          "Where several fitted pieces share the same room, proportions, panel lines and detailing need to remain consistent even when the furniture performs different functions.",
          "Accurate setting out and final adjustment help the TV unit and dining cabinetry feel related rather than assembled as unrelated elements.",
        ],
      },
      {
        heading: "Cabinetry and material detail",
        body: [
          "The gallery includes closer views of fitted cabinetry and leather detailing within the scheme.",
          "These smaller details add depth to the furniture while keeping the broader room composition visually controlled.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed room combines media, storage and dining furniture within a coordinated bespoke joinery language.",
          "For similar dining-room and TV furniture projects, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/belgravia-dining-room-tv-furniture/belgravia-dining-tv-overall-01.webp",
      alt: "Belgravia dining room with bespoke TV and fitted furniture",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/belgravia-dining-room-tv-furniture/belgravia-dining-tv-overall-01.webp", alt: "Overall Belgravia dining-room and TV furniture view", fit: "contain" },
      { src: "/images/gallery/belgravia-dining-room-tv-furniture/belgravia-dining-tv-unit-02.webp", alt: "Bespoke TV furniture view", fit: "contain" },
      { src: "/images/gallery/belgravia-dining-room-tv-furniture/belgravia-dining-furniture-03.webp", alt: "Dining-room bespoke furniture view", fit: "contain" },
      { src: "/images/gallery/belgravia-dining-room-tv-furniture/belgravia-dining-furniture-detail-04.webp", alt: "Dining-room fitted furniture detail", fit: "contain" },
      { src: "/images/gallery/belgravia-dining-room-tv-furniture/belgravia-dining-cabinetry-05.webp", alt: "Dining-room cabinetry detail", fit: "contain" },
      { src: "/images/gallery/belgravia-dining-room-tv-furniture/belgravia-dining-leather-detail-06.webp", alt: "Leather and joinery detail", fit: "contain" },
      { src: "/images/gallery/belgravia-dining-room-tv-furniture/belgravia-dining-detail-07.webp", alt: "Belgravia dining furniture detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G39",
    slug: "belgravia-master-bedroom-furniture",
    title: "Belgravia Master Bedroom Furniture",
    category: "Bespoke Joinery",
    location: "Belgravia, London",
    summary: "A coordinated master-bedroom furniture scheme combining fitted storage, a make-up table, bedside furniture and TV cabinetry within one bespoke interior.",
    seoDescription: "Belgravia master-bedroom furniture by Form & Frame, featuring a bespoke make-up table, bedside furniture, TV cabinetry and coordinated fitted joinery.",
    keywords: [
      "Belgravia master bedroom furniture",
      "bespoke bedroom furniture London",
      "bespoke make-up table",
      "bedside furniture",
      "bedroom TV unit",
      "fitted bedroom joinery",
    ],
    highlights: [
      "Coordinated bedroom furniture",
      "Bespoke make-up table",
      "Bedside furniture",
      "Fitted TV cabinetry",
    ],
    caseStudy: [
      {
        heading: "A coordinated master-bedroom furniture scheme",
        body: [
          "This Belgravia master bedroom brings several pieces of fitted and bespoke furniture together within one interior, including the make-up table, bedside furniture and TV cabinetry.",
          "The individual pieces perform different functions but share a consistent furniture language across the room.",
        ],
      },
      {
        heading: "The demanding part: consistency across several furniture types",
        body: [
          "When multiple pieces sit within the same bedroom, proportions, panel lines and detailing need to remain consistent so the room feels intentionally coordinated.",
          "Accurate setting out and final adjustment are especially important where furniture meets walls, adjacent surfaces and other fixed elements.",
        ],
      },
      {
        heading: "Make-up table, bedside and TV furniture",
        body: [
          "The photography shows the relationship between the main bedroom furniture pieces as well as closer joinery details.",
          "The combination provides practical storage and dedicated furniture functions without introducing unrelated freestanding styles.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed bedroom has a consistent bespoke-furniture character across the principal fitted elements.",
          "For similar bedroom furniture schemes, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/belgravia-master-bedroom-furniture/belgravia-master-bedroom-overall-01.webp",
      alt: "Belgravia bespoke master-bedroom furniture",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/belgravia-master-bedroom-furniture/belgravia-master-bedroom-overall-01.webp", alt: "Overall Belgravia master-bedroom furniture view", fit: "contain" },
      { src: "/images/gallery/belgravia-master-bedroom-furniture/belgravia-master-bedroom-view-02.webp", alt: "Master-bedroom bespoke furniture view", fit: "contain" },
      { src: "/images/gallery/belgravia-master-bedroom-furniture/belgravia-master-bedroom-makeup-table-03.webp", alt: "Belgravia bespoke make-up table", fit: "contain" },
      { src: "/images/gallery/belgravia-master-bedroom-furniture/belgravia-master-bedroom-bedside-04.webp", alt: "Bespoke bedside furniture", fit: "contain" },
      { src: "/images/gallery/belgravia-master-bedroom-furniture/belgravia-master-bedroom-tv-unit-05.webp", alt: "Master-bedroom TV cabinetry", fit: "contain" },
      { src: "/images/gallery/belgravia-master-bedroom-furniture/belgravia-master-bedroom-detail-06.webp", alt: "Bedroom furniture detail", fit: "contain" },
      { src: "/images/gallery/belgravia-master-bedroom-furniture/belgravia-master-bedroom-detail-07.webp", alt: "Belgravia master-bedroom joinery detail", fit: "contain" },
    ],
  },

  {
    galleryId: "G41",
    slug: "esher-luxury-residence-walk-in-wardrobe",
    title: "Esher Luxury Residence — Walk-In Wardrobe",
    category: "Bespoke Joinery",
    location: "Esher, Surrey",
    summary: "A fitted walk-in wardrobe with dark cabinetry, mirrored doors, open storage and refined brass, leather and handle detailing.",
    seoDescription: "Esher Luxury Residence bespoke walk-in wardrobe by Form & Frame, featuring dark fitted cabinetry, mirrored doors, open storage and brass and leather detailing.",
    keywords: [
      "Esher Luxury Residence walk-in wardrobe",
      "bespoke walk-in wardrobe",
      "dark fitted wardrobe",
      "mirrored wardrobe doors",
      "brass wardrobe handles",
      "luxury fitted storage",
    ],
    highlights: [
      "Full-height fitted wardrobe",
      "Mirrored door fronts",
      "Open illuminated storage",
      "Brass and leather detailing",
    ],
    caseStudy: [
      {
        heading: "A fitted walk-in wardrobe with varied storage",
        body: [
          "This walk-in wardrobe at the Esher residence combines full-height enclosed storage with open shelving and display sections within one fitted room.",
          "Mirrored fronts and darker cabinetry create contrast while the open sections keep selected storage accessible and visible.",
        ],
      },
      {
        heading: "The demanding part: coordinating several finishes",
        body: [
          "The furniture brings together dark cabinet surfaces, mirrored fronts, brass hardware and leather-related detailing, so alignment and edge treatment need to remain controlled across different materials.",
          "Careful setting out is especially important where tall doors, shelving and decorative hardware meet within the same elevation.",
        ],
      },
      {
        heading: "Brass, leather and handle details",
        body: [
          "The close-up photography shows the brass handles and detailed panel treatment alongside the wider wardrobe views.",
          "These smaller elements give the fitted storage a more furniture-led character without interrupting the overall composition.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed walk-in wardrobe combines concealed storage, open display areas and reflective fronts within a coherent fitted scheme.",
          "For similar wardrobes and dressing-room joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/8-leys-road-walk-in-wardrobe/8-leys-walk-in-wardrobe-overall-01.webp",
      alt: "Esher Luxury Residence bespoke walk-in wardrobe",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/8-leys-road-walk-in-wardrobe/8-leys-walk-in-wardrobe-overall-01.webp", alt: "Overall view of Esher Luxury Residence walk-in wardrobe", fit: "contain" },
      { src: "/images/gallery/8-leys-road-walk-in-wardrobe/8-leys-walk-in-wardrobe-interior-02.webp", alt: "Walk-in wardrobe interior storage", fit: "contain" },
      { src: "/images/gallery/8-leys-road-walk-in-wardrobe/8-leys-walk-in-wardrobe-brass-leather-03.webp", alt: "Brass and leather wardrobe detail", fit: "contain" },
      { src: "/images/gallery/8-leys-road-walk-in-wardrobe/8-leys-walk-in-wardrobe-brass-detail-04.webp", alt: "Brass wardrobe detail", fit: "contain" },
      { src: "/images/gallery/8-leys-road-walk-in-wardrobe/8-leys-walk-in-wardrobe-cabinetry-05.webp", alt: "Walk-in wardrobe cabinetry view", fit: "contain" },
      { src: "/images/gallery/8-leys-road-walk-in-wardrobe/8-leys-walk-in-wardrobe-room-06.webp", alt: "Walk-in wardrobe room view", fit: "contain" },
      { src: "/images/gallery/8-leys-road-walk-in-wardrobe/8-leys-walk-in-wardrobe-detail-07.webp", alt: "Walk-in wardrobe fitted detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G42",
    slug: "esher-luxury-residence-kids-room-tv-unit",
    title: "Esher Luxury Residence — Kids Room TV Unit",
    category: "Bespoke Joinery",
    location: "Esher, Surrey",
    summary: "A fitted kids-room TV unit combining a central screen, open display shelving and practical lower storage within one wall-to-wall composition.",
    seoDescription: "Esher Luxury Residence bespoke kids-room TV unit by Form & Frame, with integrated television, open display shelving and fitted lower storage.",
    keywords: [
          "Esher Luxury Residence kids room TV unit",
          "bespoke kids room furniture",
          "fitted TV unit",
          "kids room storage",
          "display shelving",
          "bespoke media unit"
    ],
    highlights: [
          "Integrated television",
          "Open display shelving",
          "Lower fitted storage",
          "Wall-to-wall composition"
    ],
    caseStudy: [
      {
        heading: "A TV unit designed as fitted kids-room furniture",
        body: [
                  "This Esher residence project integrates the television into a full fitted wall with open display shelving and practical storage below.",
                  "The arrangement gives toys, books and display objects a defined place while keeping the screen central to the composition."
        ],
      },
      {
        heading: "The demanding part: balancing display and storage",
        body: [
                  "Kids-room furniture needs accessible storage without making the elevation feel visually crowded.",
                  "The design therefore depends on consistent shelf spacing, controlled cabinet lines and an accurate relationship between the television opening and surrounding display sections."
        ],
      },
      {
        heading: "Open shelving and practical lower storage",
        body: [
                  "The photography shows the open cubbies, central TV area and lower storage zones working together as one unit.",
                  "Smaller details show how the display openings are finished at close range while preserving the overall grid."
        ],
      },
      {
        heading: "The finished result",
        body: [
                  "The completed unit combines media, display and everyday storage in a single fitted wall.",
                  "For similar kids-room TV units and fitted storage, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ],
      },
    ],
    cover: {
      src: "/images/gallery/8-leys-road-kids-room-tv-unit/8-leys-kids-room-tv-unit-overall-01.webp",
      alt: "Esher Luxury Residence Kids Room TV Unit",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/8-leys-road-kids-room-tv-unit/8-leys-kids-room-tv-unit-overall-01.webp", alt: "Overall view of Esher Luxury Residence kids-room TV unit", fit: "contain" },
      { src: "/images/gallery/8-leys-road-kids-room-tv-unit/8-leys-kids-room-tv-unit-detail-02.webp", alt: "Kids-room TV unit detail", fit: "contain" },
      { src: "/images/gallery/8-leys-road-kids-room-tv-unit/8-leys-kids-room-tv-unit-cabinetry-03.webp", alt: "Kids-room fitted cabinetry view", fit: "contain" },
    ],
  },
  {
    galleryId: "G43",
    slug: "esher-luxury-residence-home-office",
    title: "Esher Luxury Residence — Home Office",
    category: "Bespoke Joinery",
    location: "Esher, Surrey",
    summary: "A dark fitted home office with full-height display shelving, lower cabinetry, integrated lighting and refined brass detailing.",
    seoDescription: "Esher Luxury Residence bespoke home office by Form & Frame, featuring full-height fitted shelving, integrated lighting, lower storage and brass detailing.",
    keywords: [
          "Esher Luxury Residence home office",
          "bespoke home office",
          "fitted office shelving",
          "home office cabinetry",
          "brass inlay joinery",
          "bespoke study furniture"
    ],
    highlights: [
          "Full-height display shelving",
          "Integrated shelf lighting",
          "Lower fitted cabinetry",
          "Brass hardware and inlay"
    ],
    caseStudy: [
      {
        heading: "A full-height fitted home office",
        body: [
                  "This home office at the Esher residence combines tall open shelving with lower closed cabinetry to create a fitted working and display environment.",
                  "The dark furniture wraps the wall while integrated lighting gives the open shelves depth and makes the display areas easier to read."
        ],
      },
      {
        heading: "The demanding part: controlling a large shelving elevation",
        body: [
                  "Tall open shelving makes level changes, vertical lines and shelf spacing highly visible across the full wall.",
                  "Accurate setting out is therefore important so the display sections, lower cabinet doors and surrounding panels remain aligned."
        ],
      },
      {
        heading: "Lighting, brass and cabinetry details",
        body: [
                  "Closer photographs show the warm shelf lighting, brass hardware and inlay details alongside the darker cabinetry.",
                  "These elements add definition without interrupting the disciplined overall furniture layout."
        ],
      },
      {
        heading: "The finished result",
        body: [
                  "The completed home office combines storage, display and working functions within one fitted composition.",
                  "For similar studies and home-office joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ],
      },
    ],
    cover: {
      src: "/images/gallery/8-leys-road-home-office/8-leys-home-office-overall-01.webp",
      alt: "Esher Luxury Residence Home Office",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/8-leys-road-home-office/8-leys-home-office-overall-01.webp", alt: "Overall view of Esher Luxury Residence home office", fit: "contain" },
      { src: "/images/gallery/8-leys-road-home-office/8-leys-home-office-cabinetry-02.webp", alt: "Home-office fitted shelving and cabinetry", fit: "contain" },
      { src: "/images/gallery/8-leys-road-home-office/8-leys-home-office-brass-detail-03.webp", alt: "Brass detail in home-office joinery", fit: "contain" },
      { src: "/images/gallery/8-leys-road-home-office/8-leys-home-office-brass-inlay-04.webp", alt: "Brass inlay detail", fit: "contain" },
      { src: "/images/gallery/8-leys-road-home-office/8-leys-home-office-hardware-05.webp", alt: "Home-office brass hardware detail", fit: "contain" },
      { src: "/images/gallery/8-leys-road-home-office/8-leys-home-office-detail-06.webp", alt: "Home-office fitted joinery detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G44",
    slug: "esher-luxury-residence-bookcase-leather-brass",
    title: "Esher Luxury Residence — Bookcase with Leather & Brass Detail",
    category: "Bespoke Joinery",
    location: "Esher, Surrey",
    summary: "A full-height bespoke bookcase wall with illuminated shelving and refined leather and brass detailing integrated into the vertical framing.",
    seoDescription: "Esher Luxury Residence bespoke bookcase by Form & Frame, with full-height illuminated shelving, leather detailing and refined brass accents.",
    keywords: [
          "Esher Luxury Residence bookcase",
          "bespoke bookcase",
          "illuminated shelving",
          "leather joinery detail",
          "brass detail bookcase",
          "fitted display wall"
    ],
    highlights: [
          "Full-height fitted bookcase",
          "Integrated shelf lighting",
          "Leather detailing",
          "Brass accents"
    ],
    caseStudy: [
      {
        heading: "A full-height illuminated bookcase wall",
        body: [
                  "This bookcase at the Esher residence fills the wall with open display shelving above lower fitted storage.",
                  "Integrated lighting within the shelves gives the display objects depth while keeping the furniture visually structured."
        ],
      },
      {
        heading: "The demanding part: maintaining repetition across the wall",
        body: [
                  "A long bookcase elevation depends on consistent shelf lines, vertical divisions and lower cabinet proportions.",
                  "Because the furniture is read as one large composition, small variations in spacing or alignment would be immediately visible."
        ],
      },
      {
        heading: "Leather and brass details",
        body: [
                  "The close-up photographs focus on the leather and brass treatment around the bookcase framing and illuminated shelves.",
                  "These material details provide contrast against the darker furniture while remaining integrated into the overall joinery."
        ],
      },
      {
        heading: "The finished result",
        body: [
                  "The completed bookcase combines display, concealed storage and decorative material detailing within a single fitted wall.",
                  "For similar bookcases and display furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ],
      },
    ],
    cover: {
      src: "/images/gallery/8-leys-road-bookcase-leather-brass/8-leys-bookcase-overall-01.webp",
      alt: "Esher Luxury Residence Bookcase with Leather & Brass Detail",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/8-leys-road-bookcase-leather-brass/8-leys-bookcase-overall-01.webp", alt: "Overall view of Esher Luxury Residence bespoke bookcase", fit: "contain" },
      { src: "/images/gallery/8-leys-road-bookcase-leather-brass/8-leys-bookcase-detail-02.webp", alt: "Bespoke bookcase detail view", fit: "contain" },
      { src: "/images/gallery/8-leys-road-bookcase-leather-brass/8-leys-bookcase-leather-led-03.webp", alt: "Leather and illuminated shelf detail", fit: "contain" },
      { src: "/images/gallery/8-leys-road-bookcase-leather-brass/8-leys-bookcase-leather-led-04.webp", alt: "Leather and brass bookcase detail", fit: "contain" },
    ],
  },
  {
    galleryId: "G56",
    slug: "esher-luxury-residence-wine-cellar",
    title: "Esher Luxury Residence — Wine Cellar",
    category: "Bespoke Joinery",
    location: "Esher, Surrey",
    summary: "A fitted wine cellar with full-height bottle storage, illuminated shelving, a mirrored central display and integrated under-counter refrigeration.",
    seoDescription: "Esher Luxury Residence bespoke wine cellar by Form & Frame, with full-height wine storage, illuminated display shelving and integrated refrigeration.",
    keywords: [
          "Esher Luxury Residence wine cellar",
          "bespoke wine cellar",
          "wine storage joinery",
          "illuminated wine shelving",
          "fitted wine room",
          "bespoke bar cabinetry"
    ],
    highlights: [
          "Full-height wine storage",
          "Integrated display lighting",
          "Mirrored central display",
          "Under-counter refrigeration"
    ],
    caseStudy: [
      {
        heading: "A fitted wine cellar centred on display and storage",
        body: [
                  "This wine cellar at the Esher residence combines full-height bottle storage with a central illuminated display area and a compact table-and-bar arrangement.",
                  "The fitted joinery uses the full wall height so wine storage and display remain integrated rather than appearing as separate racks."
        ],
      },
      {
        heading: "The demanding part: coordinating bottle storage and display",
        body: [
                  "Wine storage requires repeated shelf spacing while the central section also needs to accommodate display objects, serving space and refrigeration below.",
                  "Accurate setting out keeps the bottle racks, illuminated shelves and central mirrored area aligned across the complete elevation."
        ],
      },
      {
        heading: "Lighting, mirror and refrigeration",
        body: [
                  "Integrated lighting emphasises the bottle storage and central shelves, while the reflective backing increases depth through the middle of the room.",
                  "Under-counter refrigeration is incorporated below the serving area so the functional equipment remains part of the fitted scheme."
        ],
      },
      {
        heading: "The finished result",
        body: [
                  "The completed room combines wine storage, display and serving functions within one fitted interior.",
                  "For similar wine rooms and specialist storage joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ],
      },
    ],
    cover: {
      src: "/images/gallery/8-leys-road-wine-cellar/8-leys-wine-cellar-overall-01.webp",
      alt: "Esher Luxury Residence Wine Cellar",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/8-leys-road-wine-cellar/8-leys-wine-cellar-overall-01.webp", alt: "Overall view of Esher Luxury Residence wine cellar", fit: "contain" },
      { src: "/images/gallery/8-leys-road-wine-cellar/8-leys-wine-cellar-interior-02.webp", alt: "Wine cellar interior with fitted bottle storage", fit: "contain" },
    ],
  },
{
  "galleryId": "G57",
  "slug": "full-wall-white-library-bookcase",
  "title": "Full-Wall White Library Bookcase",
  "summary": "A full-wall white bookcase combining generous open shelving with discreet low-level storage in a furnished sitting room.",
  "seoDescription": "Explore a completed full-wall white library bookcase, with open book shelving, lower cupboards and fitted storage details from Form & Frame.",
  "keywords": [
    "white library bookcase",
    "full-wall bookcase",
    "bespoke fitted shelving",
    "living room book storage"
  ],
  "highlights": [
    "Full-wall book and display shelving",
    "Low-level enclosed storage",
    "White finish with traditional detailing",
    "Shelving arranged around the sitting room"
  ],
  "caseStudy": [
    {
      "heading": "A wall devoted to books",
      "body": [
        "This completed library wall brings books and display pieces together in one fitted composition. The white finish and repeated shelf divisions give the collection a clear structure behind the sitting area, while the upper detailing finishes the cabinetry against the room."
      ]
    },
    {
      "heading": "Open shelves and hidden storage",
      "body": [
        "Open shelves keep frequently used books within reach. Lower compartments provide space for items that are better stored out of sight; the closer photographs show how these openings sit beneath the main shelving.",
        "For a similar bookcase, shelf spacing, the weight of the collection, door clearance and access around existing furniture are useful starting points for the design."
      ]
    },
    {
      "heading": "Planning a fitted library",
      "body": [
        "Share a photograph of your wall, approximate dimensions and the kinds of books or objects you want to store. Form & Frame can discuss the proportions, storage layout and fitting requirements before confirming the project scope."
      ]
    }
  ],
  "category": "Bespoke Joinery",
  "cover": {
    "src": "/images/gallery/full-wall-white-library-bookcase/full-wall-white-library-bookcase-overall-01.webp",
    "alt": "Full-wall white bookcase behind the sitting-room sofa",
    "fit": "contain"
  },
  "images": [
    {
      "src": "/images/gallery/full-wall-white-library-bookcase/full-wall-white-library-bookcase-overall-01.webp",
      "alt": "Full-wall white bookcase behind the sitting-room sofa",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/full-wall-white-library-bookcase/full-wall-white-library-bookcase-room-02.webp",
      "alt": "Wider sitting-room view showing the fitted white library wall",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/full-wall-white-library-bookcase/full-wall-white-library-bookcase-storage-04.webp",
      "alt": "Open lower storage compartments beneath the library shelves",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/full-wall-white-library-bookcase/full-wall-white-library-bookcase-room-05.webp",
      "alt": "Angled view of the bookcase shelves and low-level storage",
      "fit": "contain"
    }
  ]
},
{
  "galleryId": "G58",
  "slug": "esher-luxury-residence-bathroom-vanity-mirror",
  "title": "Esher Luxury Residence — Bathroom Vanity & Mirror",
  "location": "Esher, Surrey",
  "summary": "Pale bathroom vanity cabinetry with decorative door fronts, a bowl basin and a large segmented mirror above.",
  "seoDescription": "View the Esher bathroom vanity and mirror: pale decorative cabinetry, a bowl basin and a veined counter in a completed fitted-furniture project.",
  "keywords": [
    "Esher bathroom vanity",
    "bespoke bathroom cabinetry",
    "decorative vanity unit",
    "bathroom mirror joinery"
  ],
  "highlights": [
    "Decorative pale cabinet fronts",
    "Bowl basin above a veined counter",
    "Large segmented wall mirror",
    "Fitted storage beneath the basin"
  ],
  "caseStudy": [
    {
      "heading": "Furniture within the bathroom",
      "body": [
        "The vanity forms the furniture centrepiece of this bathroom in Esher. Pale doors with crossed oval detailing sit beneath a veined counter and bowl basin. A wide segmented mirror above extends the composition across the wall."
      ]
    },
    {
      "heading": "Detail and proportion",
      "body": [
        "The overall and angled photographs show the relationship between the cabinetry, counter and mirror. The closer view highlights the decorative fronts and the way the basin sits above the storage below.",
        "For bathroom furniture, the layout needs to allow for plumbing, access for maintenance and finishes appropriate to the room. These requirements form part of planning a similar vanity."
      ]
    },
    {
      "heading": "Discuss a similar piece",
      "body": [
        "Send the available dimensions, room photographs and your preferred basin and storage arrangement. The enquiry can focus on the vanity and mirror joinery, with other bathroom work agreed separately as part of the scope."
      ]
    }
  ],
  "category": "Bespoke Joinery",
  "cover": {
    "src": "/images/gallery/esher-luxury-residence-bathroom-vanity-mirror/esher-bathroom-vanity-mirror-overall-01.webp",
    "alt": "Full view of the Esher vanity, bowl basin and large segmented mirror",
    "fit": "contain"
  },
  "images": [
    {
      "src": "/images/gallery/esher-luxury-residence-bathroom-vanity-mirror/esher-bathroom-vanity-mirror-overall-01.webp",
      "alt": "Full view of the Esher vanity, bowl basin and large segmented mirror",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/esher-luxury-residence-bathroom-vanity-mirror/esher-bathroom-vanity-mirror-overall-02.webp",
      "alt": "Angled view of the pale vanity cabinetry beneath the veined counter",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/esher-luxury-residence-bathroom-vanity-mirror/esher-bathroom-vanity-mirror-detail-03.webp",
      "alt": "Close view of the bowl basin and decorative vanity door fronts",
      "fit": "contain"
    }
  ]
},
{
  "galleryId": "G59",
  "slug": "traditional-radiator-covers-fitted-shelving",
  "title": "Traditional Radiator Covers & Fitted Shelving",
  "summary": "White radiator covers and fitted shelving that bring practical room features into a coordinated traditional interior.",
  "seoDescription": "See completed traditional radiator covers and fitted shelving, with white grilles, decorative detailing and room views from Form & Frame.",
  "keywords": [
    "bespoke radiator covers",
    "traditional fitted shelving",
    "white radiator cabinet",
    "living room joinery"
  ],
  "highlights": [
    "Full-width radiator-cover compositions",
    "Vertical grille detailing",
    "White fitted shelving",
    "Joinery coordinated with room features"
  ],
  "caseStudy": [
    {
      "heading": "Bringing room details together",
      "body": [
        "This set of completed interiors shows radiator covers and fitted shelving in a traditional white finish. The lead photograph shows a complete radiator-cover composition beneath a decorative mirror; wider views place the furniture within the sitting room."
      ]
    },
    {
      "heading": "Useful furniture with considered details",
      "body": [
        "Grille openings, moulded edges and the relationship to nearby curtains and windows give the covers their character. The shelving adds space for books and display pieces without making each element feel separate from the room.",
        "A radiator cover must be planned around ventilation, valve access and maintenance. Those practical requirements need to be considered alongside the appearance when designing a similar piece."
      ]
    },
    {
      "heading": "Planning covers and shelving",
      "body": [
        "Room photographs and the dimensions of the radiators, windows and available walls help establish a starting point. Form & Frame can review the furniture layout and fitting requirements before agreeing the design and scope."
      ]
    }
  ],
  "category": "Bespoke Joinery",
  "cover": {
    "src": "/images/gallery/traditional-radiator-covers-fitted-shelving/traditional-radiator-covers-shelving-window-03.webp",
    "alt": "Full front view of a white radiator cover beneath a decorative mirror",
    "fit": "contain"
  },
  "images": [
    {
      "src": "/images/gallery/traditional-radiator-covers-fitted-shelving/traditional-radiator-covers-shelving-window-03.webp",
      "alt": "Full front view of a white radiator cover beneath a decorative mirror",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/traditional-radiator-covers-fitted-shelving/traditional-radiator-covers-shelving-overall-01.webp",
      "alt": "Sitting-room view with white fitted shelving and radiator-cover joinery",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/traditional-radiator-covers-fitted-shelving/traditional-radiator-covers-shelving-overall-02.webp",
      "alt": "Wider living-room view showing shelving, fireplace and fitted room details",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/traditional-radiator-covers-fitted-shelving/traditional-radiator-covers-shelving-detail-04.webp",
      "alt": "Angled view of the radiator-cover grille beside the curtains",
      "fit": "contain"
    },
    {
      "src": "/images/gallery/traditional-radiator-covers-fitted-shelving/traditional-radiator-covers-shelving-detail-05.webp",
      "alt": "Radiator-cover joinery beside the bright bay window",
      "fit": "contain"
    }
  ]
},
{
  "galleryId": "G60",
  "slug": "esher-luxury-residence-make-up-table",
  "title": "Esher Luxury Residence — Make-Up Table",
  "location": "Esher, Surrey",
  "summary": "A fitted make-up table with twin drawer pedestals, decorative pale fronts and a wide mirror in an Esher dressing space.",
  "seoDescription": "Explore the fitted Esher make-up table, with decorative pale drawer fronts, central seating space and a wide wall mirror.",
  "keywords": [
    "Esher make-up table",
    "bespoke dressing table",
    "fitted vanity table",
    "bedroom drawer storage"
  ],
  "highlights": [
    "Twin drawer pedestals",
    "Central space for a chair",
    "Decorative pale drawer fronts",
    "Wide mirror above the table"
  ],
  "caseStudy": [
    {
      "heading": "A dedicated dressing space",
      "body": [
        "The photograph shows a fitted make-up table set between the room's side walls. Two drawer pedestals support the work surface, leaving a central space for a chair, while a wide mirror spans the wall above."
      ]
    },
    {
      "heading": "Storage and decoration",
      "body": [
        "The pale drawer fronts use decorative oval detailing that contrasts with the darker wall finish. The overall view shows the complete piece and its relationship to the doorway and surrounding dressing space.",
        "For a similar table, useful design decisions include seating height, drawer layout, mirror position and the lighting needed for everyday use."
      ]
    },
    {
      "heading": "Discuss your dressing table",
      "body": [
        "Share the available wall width, room photographs and the items you would like to store. Form & Frame can help develop a practical fitted arrangement and confirm the manufacturing and installation scope."
      ]
    }
  ],
  "category": "Bespoke Joinery",
  "cover": {
    "src": "/images/gallery/esher-luxury-residence-make-up-table/esher-luxury-residence-make-up-table-overall-01.webp",
    "alt": "Complete Esher make-up table viewed through the doorway, with twin drawer units and a wide mirror",
    "fit": "contain"
  },
  "images": [
    {
      "src": "/images/gallery/esher-luxury-residence-make-up-table/esher-luxury-residence-make-up-table-overall-01.webp",
      "alt": "Complete Esher make-up table viewed through the doorway, with twin drawer units and a wide mirror",
      "fit": "contain"
    }
  ]
},
];

export function getGalleryProject(slug: string) {
  return galleryProjects.find(project => project.slug === slug);
}
