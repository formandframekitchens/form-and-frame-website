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
    slug: "alexander-james-bespoke-bookcase",
    title: "Alexander James Bespoke Bookcase",
    category: "Bespoke Joinery",
    summary: "A full-height bespoke display bookcase with varied open shelving, integrated lower storage and a carefully balanced fitted composition.",
    seoDescription: "Alexander James bespoke bookcase case study by Form & Frame, featuring full-height fitted shelving, display compartments and integrated lower storage.",
    keywords: [
      "Alexander James bespoke bookcase",
      "bespoke fitted bookcase",
      "full height bookcase",
      "display shelving",
      "made to measure shelving",
      "bespoke storage furniture",
      "fitted joinery",
      "bespoke joinery",
    ],
    highlights: [
      "Full-height fitted display bookcase",
      "Varied open shelving proportions",
      "Integrated lower storage",
      "Made-to-measure fitted composition",
    ],
    caseStudy: [
      {
        heading: "A fitted bookcase designed as part of the room",
        body: [
          "This project uses a full-height bespoke bookcase to create a permanent fitted feature rather than a freestanding piece of furniture. The shelving occupies the elevation as an architectural element, combining open display space with lower storage in one continuous composition.",
          "The different shelf sizes give the piece a more individual rhythm than a repeated grid. That variation allows books, decorative objects and larger display pieces to sit naturally while still keeping the overall elevation controlled.",
        ],
      },
      {
        heading: "The demanding part: balancing varied shelf proportions",
        body: [
          "When shelving compartments change in width and height, the setting out has to remain deliberate. Each opening needs to feel related to the neighbouring sections so the finished piece reads as one coherent design rather than a collection of unrelated boxes.",
          "Full-height cabinetry also makes vertical alignment particularly visible. The outer panels, internal divisions and lower storage fronts all need to remain visually consistent across the completed installation.",
        ],
      },
      {
        heading: "Display space and practical storage",
        body: [
          "The open sections provide the visual character of the bookcase, while the lower cabinets give the room useful concealed storage. Combining the two functions helps the installation remain practical without making the entire wall feel visually heavy.",
          "The closed lower section also creates a strong base for the taller open shelving above, giving the fitted furniture a clear visual hierarchy.",
        ],
      },
      {
        heading: "Fitting a large piece accurately",
        body: [
          "Large fitted bookcases need to respond to the real room rather than assuming perfectly straight walls, floors and ceilings. Accurate survey and controlled installation help the outer lines meet the surrounding architecture cleanly while keeping the visible shelf grid true.",
          "The photographs show how the furniture sits tightly within the room while preserving clear, even junctions around the main fitted elements.",
        ],
      },
      {
        heading: "The finished result",
        body: [
          "The completed bookcase provides substantial display and storage capacity while retaining a composed, furniture-led appearance. Its varied shelving gives the piece visual interest, while the lower cabinetry keeps everyday storage discreet.",
          "For similar fitted bookcases, display walls and made-to-measure shelving, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment.",
        ],
      },
    ],
    cover: {
      src: "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-room-view-01.jpg",
      alt: "Alexander James bespoke full-height fitted bookcase",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-room-view-01.jpg", alt: "Room view of Alexander James bespoke fitted bookcase", fit: "contain" },
      { src: "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-front-view-02.jpg", alt: "Front view of full-height bespoke display bookcase", fit: "contain" },
      { src: "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-angled-view-03.jpg", alt: "Angled view of fitted bookcase and open shelving", fit: "contain" },
      { src: "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-shelving-detail-04.jpg", alt: "Open shelving detail in bespoke bookcase", fit: "contain" },
      { src: "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-detail-05.jpg", alt: "Bespoke bookcase joinery detail", fit: "contain" },
      { src: "/images/gallery/alexander-james-bespoke-bookcase/alexander-james-bookcase-full-height-06.jpg", alt: "Full-height view of bespoke fitted bookcase", fit: "contain" },
    ],
  },
  {
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
      src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-room-view-01.jpg",
      alt: "Cream bespoke fitted TV unit in a living room",
      fit: "contain",
    },
    images: [
      { src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-room-view-01.jpg", alt: "Room view of cream bespoke fitted TV unit", fit: "contain" },
      { src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-front-view-02.jpg", alt: "Front view of cream fitted media cabinetry", fit: "contain" },
      { src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-angled-view-03.jpg", alt: "Angled view of cream bespoke TV unit and shelving", fit: "contain" },
      { src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-storage-detail-04.jpg", alt: "Storage and fitted cabinetry detail in cream media unit", fit: "contain" },
      { src: "/images/gallery/cream-bespoke-tv-unit/cream-bespoke-tv-unit-detail-05.jpg", alt: "Detail view of cream bespoke media furniture", fit: "contain" },
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
];

export function getGalleryProject(slug: string) {
  return galleryProjects.find(project => project.slug === slug);
}
