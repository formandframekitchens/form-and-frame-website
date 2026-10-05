import { hiddenGalleryIds } from "./gallery-visibility";

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
    "title": "White Handleless Kitchen & Utility Installation",
    "category": "Kitchen Installation",
    "summary": "White handleless kitchen installation with integrated appliances, concealed laundry storage and precise cabinet alignment.",
    "seoDescription": "White handleless kitchen installation with integrated appliances, concealed laundry storage and precise cabinet alignment. See the finished details.",
    "keywords": [
      "white handleless kitchen & utility installation",
      "handleless kitchen installation",
      "kitchen fitter",
      "integrated appliance fitting",
      "white handleless kitchen"
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
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The pale cabinet fronts have a smooth, reflective finish that carries through from the cooking run into the utility area. Recessed handle channels keep the fronts clear of projecting handles. Close views show the junctions around the worktop, the drawer beside the hob and the fitted dishwasher front: small details that determine how a contemporary kitchen looks and works. The tall utility cupboard opens to reveal household storage, while a separate matching door conceals the washing machine. This is an installation project, with the cabinetry, appliances and room coordinated as a complete fitted layout."
        ]
      },
      {
        "heading": "Planning a similar kitchen installation",
        "body": [
          "For a comparable kitchen, send the supplier plan and appliance schedule alongside room photographs. Worktop templating, service connections, ventilation, door clearances and the sequence of deliveries need to be agreed before fitting. A simple handleless appearance depends on that preparation as much as on the final adjustment of the doors."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g01/g01-01-white-handleless-fitted-kitchen-with-a-cooking-run.webp",
      "alt": "White handleless fitted kitchen with a cooking run, sink and tall storage",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g01/g01-01-white-handleless-fitted-kitchen-with-a-cooking-run.webp",
        "alt": "White handleless fitted kitchen with a cooking run, sink and tall storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g01/g01-02-overall-view-of-the-cooking-run-sink-and.webp",
        "alt": "Overall view of the cooking run, sink and tall cabinetry",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g01/g01-03-microwave-housing-and-matching-utility-cabinetry.webp",
        "alt": "Microwave housing and matching utility cabinetry",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g01/g01-04-closed-utility-cabinetry-beside-the-kitchen.webp",
        "alt": "Closed utility cabinetry beside the kitchen",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g01/g01-05-open-tall-cupboard-in-the-kitchen-utility-area.webp",
        "alt": "Open tall cupboard in the kitchen utility area",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g01/g01-06-washing-machine-concealed-behind-a-matching-cabinet-door.webp",
        "alt": "Washing machine concealed behind a matching cabinet door",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g01/g01-07-gas-hob-oven-and-surrounding-worktop.webp",
        "alt": "Gas hob, oven and surrounding worktop",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g01/g01-08-drawer-fronts-and-handle-profiles-beside-the-worktop.webp",
        "alt": "Drawer fronts and handle profiles beside the worktop",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g01/g01-09-junction-between-the-worktop-base-cabinetry-and-tall.webp",
        "alt": "Junction between the worktop, base cabinetry and tall unit",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g01/g01-10-handleless-cabinet-fronts-and-worktop-edge.webp",
        "alt": "Handleless cabinet fronts and worktop edge",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g01/g01-11-close-up-of-the-recessed-handle-profile-on.webp",
        "alt": "Close-up of the recessed handle profile on a white kitchen drawer",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g01/g01-12-integrated-dishwasher-door-and-fitted-furniture-front.webp",
        "alt": "Integrated dishwasher door and fitted furniture front",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G02",
    "slug": "soho-bespoke-bookcase",
    "title": "Soho Bespoke Fitted Bookcase with Lighting",
    "category": "Bespoke Joinery",
    "location": "Soho, London",
    "summary": "A dark fitted bookcase in Soho with illuminated display shelves, mirrored backing and concealed lower cupboards.",
    "seoDescription": "A dark fitted bookcase in Soho with illuminated display shelves, mirrored backing and concealed lower cupboards. Explore the cabinet and grain details.",
    "keywords": [
      "soho bespoke fitted bookcase with lighting",
      "bespoke bookcase Soho",
      "fitted bookcase London",
      "bespoke joinery London",
      "full height bookcase",
      "integrated shelf lighting",
      "made to measure shelving"
    ],
    "highlights": [
      "Full-height fitted bookcase",
      "Integrated display lighting",
      "Dark architectural finish",
      "Repeated shelving and vertical alignment"
    ],
    "caseStudy": [
      {
        "heading": "A full-height fitted feature",
        "body": [
          "This Soho project uses a full-height bespoke bookcase as a strong architectural element within the room. Rather than treating the shelving as loose furniture, the cabinetry is visually integrated with the interior and extends vertically to create a continuous fitted composition.",
          "The dark finish gives the bookcase a substantial presence, while the open shelving prevents the elevation from feeling too heavy. The balance between solid framing, open display areas and integrated light is central to the finished appearance."
        ]
      },
      {
        "heading": "The demanding part: repetition and alignment",
        "body": [
          "Large bookcases are unforgiving because repeated shelves and vertical divisions make small inaccuracies easy to see. Shelf lines, side panels and openings need to remain visually consistent over the full height and width of the installation.",
          "The fitting also has to respond to the room rather than assuming the surrounding walls, floor and ceiling are perfectly square. Careful setting out and controlled final fitting allow the cabinetry to sit naturally within the space while keeping the visible grid calm and regular."
        ]
      },
      {
        "heading": "Integrated lighting",
        "body": [
          "Lighting is incorporated into the shelving so that the display areas remain useful after dark and the depth of the cabinetry is emphasised. The lighting reads as part of the joinery rather than an added accessory, which helps preserve the clean architectural character of the bookcase.",
          "Where lighting is integrated into bespoke cabinetry, the visual result depends on consistent positioning and neat coordination with shelf edges, internal surfaces and the wider room lighting."
        ]
      },
      {
        "heading": "Joinery quality in the finished room",
        "body": [
          "The completed bookcase demonstrates the value of proportion and repetition in bespoke fitted furniture. The design is relatively disciplined, so the quality is carried by accurate spacing, controlled junctions and the relationship between the cabinetry and the room around it.",
          "For similar fitted bookcases, libraries and display cabinetry, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, and final installation."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "This full-height fitted bookcase combines a dark, visible wood grain with a regular grid of open display shelves. Reflective backing brings depth to the objects on display, while lighting beneath the shelves makes each compartment readable in the evening. The low cupboards create a quieter horizontal base beneath the more varied collection above. An open door in the close-up reveals how the grain continues across the cabinet front and its surrounding frame. Beside the television and fireplace, the bookcase functions as part of the living-room wall rather than an isolated piece of furniture."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "When planning a similar library or display wall, the useful starting point is the collection: the height of books, the weight of objects and how much should remain behind doors. Shelf spacing, lighting access and the division between open and closed storage can then be designed around everyday use."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g02/g02-01-dark-fitted-bookcase-with-illuminated-display-shelves-and.jpg",
      "alt": "Dark fitted bookcase with illuminated display shelves and lower cupboards in Soho",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g02/g02-01-dark-fitted-bookcase-with-illuminated-display-shelves-and.jpg",
        "alt": "Dark fitted bookcase with illuminated display shelves and lower cupboards in Soho",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g02/g02-02-angled-illuminated-view-of-soho-bespoke-bookcase.webp",
        "alt": "Angled illuminated view of Soho bespoke bookcase",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g02/g02-03-full-height-side-view-of-soho-bespoke-bookcase.webp",
        "alt": "Full-height side view of Soho bespoke bookcase",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g02/g02-04-illuminated-dark-wood-grain-shelves-beside-the-soho.jpg",
        "alt": "Illuminated dark wood-grain shelves beside the Soho living-room seating",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g02/g02-05-open-lower-bookcase-door-showing-the-dark-grain.jpg",
        "alt": "Open lower bookcase door showing the dark grain and cabinet edge",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G03",
    "slug": "soho-walk-in-wardrobe",
    "title": "Soho Bespoke Walk-In Wardrobe",
    "category": "Bespoke Joinery",
    "location": "Soho, London",
    "summary": "Bespoke walk-in wardrobe in Soho with illuminated hanging rails, open shelves, drawers and mirrored storage.",
    "seoDescription": "Bespoke walk-in wardrobe in Soho with illuminated hanging rails, open shelves, drawers and mirrored storage. View the fitted dressing-room layout.",
    "keywords": [
      "soho bespoke walk-in wardrobe",
      "walk in wardrobe Soho",
      "bespoke wardrobe London",
      "fitted wardrobe London",
      "walk in dressing room",
      "integrated wardrobe lighting",
      "bespoke storage joinery"
    ],
    "highlights": [
      "Open walk-in wardrobe layout",
      "Integrated LED lighting",
      "Drawer storage",
      "Mirrored detailing"
    ],
    "caseStudy": [
      {
        "heading": "Storage designed as a room",
        "body": [
          "This Soho walk-in wardrobe is more than a line of cupboards. The cabinetry defines the space itself, using open storage, drawer units, mirrored elements and integrated lighting to create a dedicated dressing environment.",
          "Open wardrobes place the internal construction permanently on display. Shelf spacing, drawer alignment, lighting positions and the relationship between adjacent sections therefore contribute directly to the visual quality of the room."
        ]
      },
      {
        "heading": "Working with a narrow circulation space",
        "body": [
          "The aisle view shows how important proportion is in a walk-in wardrobe. Storage needs to provide useful capacity without reducing the circulation route to the point where the room feels cramped.",
          "Full-height joinery on both sides creates many repeated lines. Keeping these lines visually controlled helps the wardrobe feel ordered and intentional, especially where drawers, shelves and mirrored surfaces meet."
        ]
      },
      {
        "heading": "Lighting and mirrored details",
        "body": [
          "Integrated LED lighting improves visibility inside the storage and also gives the cabinetry greater depth. The light highlights shelf edges and vertical divisions, which means alignment and finishing details become even more noticeable.",
          "Mirrored detailing introduces another precise visual reference. Reflective surfaces tend to emphasise lines and junctions, so careful fitting around them is important to maintain a clean result."
        ]
      },
      {
        "heading": "A coordinated bespoke interior",
        "body": [
          "The finished wardrobe combines storage density with a controlled architectural appearance. Open shelves, drawers, lighting and mirrors all need to work together rather than competing for attention.",
          "Projects of this type benefit from coordinated survey, design development, manufacturing control and installation so that the finished cabinetry is resolved as one complete interior."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The wardrobe follows both sides of a narrow dressing-room aisle, placing hanging clothes, folded items and drawers within easy reach. The dark wood-grain surfaces give the open compartments a consistent background, while lighting above the hanging bays helps make individual garments visible. Mirrored sections extend the view through the room and provide a dressing mirror without taking additional wall space. Beneath the hanging rails, a continuous drawer run uses the lower part of the cabinetry for smaller belongings. The result is a fitted dressing room organised by what needs to be stored."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A walk-in wardrobe should begin with an inventory of long garments, shorter hanging items, shoes and folded clothing. The aisle width and drawer projection need checking together so that storage remains accessible. Lighting position and switching are also best resolved alongside the internal layout, before the furniture is made."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g03/g03-01-full-aisle-view-through-soho-walk-in-wardrobe.webp",
      "alt": "Full aisle view through Soho walk-in wardrobe"
    },
    "images": [
      {
        "src": "/images/gallery/g03/g03-01-full-aisle-view-through-soho-walk-in-wardrobe.webp",
        "alt": "Full aisle view through Soho walk-in wardrobe"
      },
      {
        "src": "/images/gallery/g03/g03-02-illuminated-soho-walk-in-wardrobe-storage.webp",
        "alt": "Illuminated Soho walk-in wardrobe storage"
      },
      {
        "src": "/images/gallery/g03/g03-03-drawer-and-mirror-detail-in-soho-walk-in.webp",
        "alt": "Drawer and mirror detail in Soho walk-in wardrobe"
      }
    ]
  },
  {
    "galleryId": "G04",
    "slug": "grey-black-bespoke-media-wall",
    "title": "Bespoke Floating TV Units in Grey & Black",
    "category": "Bespoke Joinery",
    "summary": "Wall-mounted bespoke TV furniture in grey and black, with floating shelves, concealed cupboards and detailed wood-grain cabinet fronts.",
    "seoDescription": "Wall-mounted bespoke TV furniture in grey and black, with floating shelves, concealed cupboards and detailed wood-grain cabinet fronts.",
    "keywords": [
      "bespoke floating tv units in grey & black",
      "bespoke media wall",
      "floating media cabinet",
      "TV wall joinery",
      "bespoke TV unit",
      "wall mounted cabinetry",
      "fitted media furniture"
    ],
    "highlights": [
      "Floating wall-mounted cabinetry",
      "Coordinated grey and black finish views",
      "Integrated open shelving",
      "Clean horizontal proportions"
    ],
    "caseStudy": [
      {
        "heading": "A floating media composition",
        "body": [
          "This bespoke media wall is built around a strong horizontal arrangement of floating cabinetry and open shelving. Keeping the units off the floor gives the composition a lighter appearance while still providing substantial storage.",
          "The design is shown in coordinated grey and black finishes, demonstrating how the same underlying proportions can produce a different character depending on colour and contrast."
        ]
      },
      {
        "heading": "The demanding part: level, spacing and wall fixing",
        "body": [
          "Floating furniture makes alignment especially visible because there is no plinth or floor contact to disguise variation. The cabinetry needs to read as level across the wall, and the gaps between separate elements need to remain controlled.",
          "Wall-mounted units also rely on appropriate fixing and careful positioning. The finished elevation depends on the relationship between the lower cabinets, display shelves and the central media area staying visually balanced."
        ]
      },
      {
        "heading": "Controlling the visual weight",
        "body": [
          "Media walls can easily become heavy if every part of the elevation is filled. Here, open wall space and separated shelves keep the arrangement lighter and allow the furniture to frame the media zone rather than dominate it.",
          "The long horizontal cabinet line provides continuity, while the upper elements introduce variation without losing the overall geometry."
        ]
      },
      {
        "heading": "A flexible fitted-furniture approach",
        "body": [
          "The project shows how bespoke media furniture can be adjusted through finish, storage configuration and shelf arrangement while retaining a consistent architectural concept.",
          "For similar TV units and media walls, Form & Frame can coordinate the fitted furniture around the room proportions and the required storage rather than forcing the project into standard cabinet sizes."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "These related media-furniture views show two restrained colour treatments: a pale grey wood-grain composition and a darker black version. Low floating cabinets sit beneath the television, with offset shelves and wall cupboards above. The arrangement leaves open wall around the screen instead of enclosing it in a full-height unit. Detail photographs reveal the grain around an outside corner, a downward-opening cupboard front and the glass shelves inside a tall cabinet. The variation in door direction matters: it changes how the concealed storage can be reached around the television and nearby seating."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A floating TV unit needs a layout that accommodates the actual equipment, not only the screen size. Wall construction, fixing positions, cable routes and access to sockets must be reviewed before installation. Open shelves can hold display objects, while closed compartments keep the less decorative equipment and accessories out of sight."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g04/g04-01-grey-bespoke-media-wall-front-view.webp",
      "alt": "Grey bespoke media wall front view"
    },
    "images": [
      {
        "src": "/images/gallery/g04/g04-01-grey-bespoke-media-wall-front-view.webp",
        "alt": "Grey bespoke media wall front view"
      },
      {
        "src": "/images/gallery/g04/g04-02-grey-bespoke-media-wall-angled-view.webp",
        "alt": "Grey bespoke media wall angled view"
      },
      {
        "src": "/images/gallery/g04/g04-03-black-bespoke-media-wall-front-view.webp",
        "alt": "Black bespoke media wall front view"
      },
      {
        "src": "/images/gallery/g04/g04-04-black-bespoke-media-wall-angled-view.webp",
        "alt": "Black bespoke media wall angled view"
      },
      {
        "src": "/images/gallery/g04/g04-05-light-grey-wall-mounted-bespoke-media-unit-front.webp",
        "alt": "Light grey wall-mounted bespoke media unit front view",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g04/g04-06-angled-view-of-light-grey-wall-mounted-media.webp",
        "alt": "Angled view of light grey wall-mounted media furniture",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g04/g04-07-close-finish-detail-on-light-grey-bespoke-media.webp",
        "alt": "Close finish detail on light grey bespoke media cabinetry",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g04/g04-08-open-concealed-storage-in-bespoke-media-unit.webp",
        "alt": "Open concealed storage in bespoke media unit",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g04/g04-09-tall-cabinet-storage-detail-within-bespoke-media-composition.webp",
        "alt": "Tall cabinet storage detail within bespoke media composition",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G06",
    "slug": "built-in-window-seat-storage",
    "title": "Bespoke Built-In Window Seat with Drawers",
    "category": "Bespoke Joinery",
    "location": "London",
    "summary": "A painted built-in window seat with panelled drawer fronts, lift-up seat panels and curved ends, fitted into a London window recess.",
    "seoDescription": "A painted built-in window seat with panelled drawer fronts, lift-up seat panels and curved ends, fitted into a London window recess.",
    "keywords": [
      "bespoke built-in window seat with drawers",
      "built in window seat London",
      "window seat storage",
      "bespoke drawer storage",
      "made to measure window seat",
      "painted fitted furniture",
      "bespoke joinery London"
    ],
    "highlights": [
      "Made-to-measure window seating",
      "Integrated drawer storage",
      "Painted fitted finish",
      "Shaped around the existing room"
    ],
    "caseStudy": [
      {
        "heading": "Using an awkward area productively",
        "body": [
          "This project turns the space beneath a window into fitted seating with useful drawer storage. Window areas often have specific width, depth and surrounding-wall constraints, making made-to-measure joinery more effective than standard furniture.",
          "The finished seat is designed to feel part of the room rather than a separate box placed against the wall. Its proportions follow the available opening and maintain a simple painted appearance."
        ]
      },
      {
        "heading": "The demanding part: fitting to the existing room",
        "body": [
          "Built-in furniture has to meet real walls, floors and architectural edges, which are not always perfectly straight or square. The visible success of the piece depends on how accurately the outer lines are fitted to those existing conditions.",
          "A window seat is also viewed at close range and used physically, so the top, drawer fronts and surrounding junctions need to feel deliberate and robust as well as visually neat."
        ]
      },
      {
        "heading": "Drawer storage without visual clutter",
        "body": [
          "The drawers add practical capacity while allowing the front of the seat to remain calm and consistent. When closed, the storage reads as part of the overall joinery rather than as a separate chest of drawers.",
          "The open-storage photograph demonstrates the usable volume concealed behind the fitted elevation, which is one of the main advantages of designing directly around the available space."
        ]
      },
      {
        "heading": "A simple fitted result",
        "body": [
          "The final piece is deliberately understated. Its value comes from using the room efficiently, fitting the existing architecture carefully and combining seating with concealed storage in one element.",
          "Form & Frame can apply the same approach to window seats, alcove furniture, under-window storage and other fitted pieces where the room geometry makes standard furniture inefficient."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The window recess is used for both seating and storage. A pale painted finish, panelled drawer fronts and gently curved ends give the built-in bench the character of traditional room joinery. The photographs show the drawers open beneath the seat, as well as recessed finger openings in the seat panels. A grille runs along the rear beneath the window. Together, these details explain why a window seat must be designed in section as well as in elevation: the sitting height, usable storage and relationship to the sill all affect the finished piece."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a similar bench, useful decisions include the intended cushion thickness, drawer contents and any services or heating that need access. The fit to the side walls and skirting should be considered early. A measured design makes the most of the recess while leaving the window and surrounding room comfortable to use."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g06/g06-01-painted-built-in-window-seat-with-drawer-storage.webp",
      "alt": "Painted built-in window seat with drawer storage"
    },
    "images": [
      {
        "src": "/images/gallery/g06/g06-01-painted-built-in-window-seat-with-drawer-storage.webp",
        "alt": "Painted built-in window seat with drawer storage"
      },
      {
        "src": "/images/gallery/g06/g06-02-built-in-window-seat-drawer-storage-open.webp",
        "alt": "Built-in window seat drawer storage open"
      },
      {
        "src": "/images/gallery/g06/g06-03-made-to-measure-window-seat-storage-detail.webp",
        "alt": "Made-to-measure window seat storage detail"
      }
    ]
  },
  {
    "galleryId": "G07",
    "slug": "soho-shoe-storage-cabinet",
    "title": "Soho Bespoke Fitted Shoe Cupboard",
    "category": "Bespoke Joinery",
    "location": "Soho, London",
    "summary": "A bespoke shoe cupboard in Soho with full-height shelving, adjustable shelf positions and integrated lighting for an organised footwear collection.",
    "seoDescription": "A bespoke shoe cupboard in Soho with full-height shelving, adjustable shelf positions and integrated lighting for an organised footwear collection.",
    "keywords": [
      "soho bespoke fitted shoe cupboard",
      "bespoke shoe storage Soho",
      "shoe cabinet London",
      "fitted shoe storage",
      "bespoke shelving London",
      "integrated cabinet lighting",
      "luxury storage joinery"
    ],
    "highlights": [
      "Purpose-built shoe storage",
      "Open display shelving",
      "Integrated shelf lighting",
      "Dark coordinated cabinetry"
    ],
    "caseStudy": [
      {
        "heading": "Purpose-built storage",
        "body": [
          "This fitted cabinet was arranged specifically around shoe storage, using repeated open shelves to make the collection visible and easy to access. The dark cabinetry gives the installation a more architectural character than a conventional freestanding shoe rack.",
          "Because the storage is open, the internal shelf layout becomes part of the room. Consistent spacing and alignment are therefore as important visually as the storage capacity itself."
        ]
      },
      {
        "heading": "The challenge of repeated shelving",
        "body": [
          "A large number of closely spaced shelves creates a strong visual grid. Any change in level or inconsistent opening width can be noticeable, so the setting out needs to remain disciplined from one side of the cabinet to the other.",
          "The shelving also has to retain a useful depth and clear opening while working within the available room proportions. The completed project shows how specialist storage can be made to feel integrated rather than purely functional."
        ]
      },
      {
        "heading": "Integrated light as part of the joinery",
        "body": [
          "Lighting is built into the storage so that each section remains legible and the shelves gain depth. The illuminated centre and shelf details show how lighting can turn practical storage into a display feature.",
          "Consistent light positioning is particularly important in repeated shelving because variation becomes easy to compare across adjacent openings."
        ]
      },
      {
        "heading": "A consistent Soho joinery language",
        "body": [
          "The dark finish and integrated lighting connect this cabinet visually with the other Soho joinery projects in the gallery. The result is a storage element that feels considered as part of the interior rather than added after the room was designed.",
          "Form & Frame can apply the same approach to made-to-measure shoe storage, display cabinetry and other fitted storage where standard furniture does not use the available space effectively."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "This fitted cupboard gives the footwear collection a dedicated place behind full-height doors. Broad shelving bays hold pairs side by side, while a narrower central stack suits smaller items. The close views show repeated shelf-adjustment holes and lighting integrated along the vertical division. A light interior makes dark shoes easy to distinguish and keeps the cupboard legible when the doors are open. The depth is devoted to accessible rows of shoes, rather than the deeper arrangement normally needed for hanging clothes."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Shoe storage works best when shelf spacing reflects the collection: trainers, heels and boots need different clearances. Door opening, the position of the light and the height of the lowest shelf should also be checked. These details turn a general cupboard into furniture that supports a specific daily routine."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g07/g07-01-soho-bespoke-shoe-storage-cabinet-overall-view.webp",
      "alt": "Soho bespoke shoe-storage cabinet overall view"
    },
    "images": [
      {
        "src": "/images/gallery/g07/g07-01-soho-bespoke-shoe-storage-cabinet-overall-view.webp",
        "alt": "Soho bespoke shoe-storage cabinet overall view"
      },
      {
        "src": "/images/gallery/g07/g07-02-angled-view-of-soho-shoe-storage-cabinetry.webp",
        "alt": "Angled view of Soho shoe-storage cabinetry"
      },
      {
        "src": "/images/gallery/g07/g07-03-led-shelf-detail-in-soho-shoe-storage-cabinet.webp",
        "alt": "LED shelf detail in Soho shoe-storage cabinet"
      },
      {
        "src": "/images/gallery/g07/g07-04-illuminated-centre-shelving-detail-in-soho-shoe-storage.webp",
        "alt": "Illuminated centre shelving detail in Soho shoe-storage cabinet"
      }
    ]
  },
  {
    "galleryId": "G08",
    "slug": "black-oak-media-wall-brass-inlay",
    "title": "Bespoke Black Oak Media Wall with Brass Inlay",
    "category": "Bespoke Joinery",
    "location": "London",
    "summary": "Black oak media wall with brass inlay, fitted TV recess, open display shelves and concealed cupboards.",
    "seoDescription": "Black oak media wall with brass inlay, fitted TV recess, open display shelves and concealed cupboards. See the grain and metal detailing.",
    "keywords": [
      "bespoke black oak media wall with brass inlay",
      "bespoke media wall London",
      "black oak TV unit",
      "fitted TV wall London",
      "brass inlay cabinetry",
      "bespoke entertainment unit",
      "dark oak media wall",
      "made to measure TV unit",
      "bespoke joinery London"
    ],
    "highlights": [
      "Full-height dark oak-grain media wall",
      "Integrated TV recess and open shelving",
      "Fine brass-toned inlay to lower fronts",
      "Ventilation detail integrated into the fitted elevation"
    ],
    "caseStudy": [
      {
        "heading": "A full-height media wall built into the room",
        "body": [
          "This London project treats the media unit as part of the architecture rather than as a freestanding piece of furniture. The dark oak-grain cabinetry occupies the full wall, bringing the television, display shelving and lower storage together as one continuous fitted composition.",
          "The open shelving is deliberately asymmetrical, which gives the wall visual movement while the large central television recess provides a clear focal point. Against the bright interior and large windows, the dark joinery creates a strong contrast without relying on decorative excess."
        ]
      },
      {
        "heading": "The demanding part: alignment across a large elevation",
        "body": [
          "A full-height media wall contains many long reference lines. Shelf edges, vertical divisions, the television opening and the lower cabinet fronts all sit close enough to one another that small inaccuracies can become easy to see.",
          "The irregular shelf grid makes careful setting out particularly important. Although the compartments vary in size, their junctions still need to look intentional and controlled. The installation also has to meet the real floor, walls and ceiling while keeping the visible furniture geometry calm and consistent."
        ]
      },
      {
        "heading": "Dark oak grain and brass-toned detailing",
        "body": [
          "The close-up photographs show a pronounced dark timber grain across the cabinetry, paired with narrow brass-toned lines around the lower fronts. The warm metallic detail breaks up the black finish and gives the lower section a finer furniture-like character.",
          "Thin inlay lines are unforgiving because they create very clear visual references between adjacent doors. Consistent reveals, level fronts and careful final adjustment are therefore essential if the metallic detailing is to remain continuous across the completed unit."
        ]
      },
      {
        "heading": "Integrating the television, storage and room services",
        "body": [
          "The television is recessed within the fitted elevation rather than simply mounted in front of it, allowing the surrounding shelving and cabinetry to frame the screen cleanly. The lower section provides enclosed storage while the upper shelves remain open for display.",
          "A ventilation grille is visibly incorporated into the upper part of the fitted wall. Details such as ventilation, power, cabling and equipment access need to be considered early on in this type of media furniture so the technical requirements do not compromise the finished composition."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed media wall combines a substantial amount of fitted furniture with a controlled, architectural appearance. The dark finish gives the piece presence, while the open shelves and fine metallic lines prevent the full-height cabinetry from reading as one heavy block.",
          "For similar bespoke media walls and fitted TV units, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment around the proportions and requirements of the room."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The black oak finish retains a clearly visible grain, giving the broad cabinet fronts texture even within a dark colour scheme. Fine brass inlays frame the lower doors and break the long base into measured panels. Above, the shelving changes height and width around the television to create places for books and objects without losing the overall rectangular outline. The close-up of the lower fronts makes the relationship between grain and metal especially clear: the restrained inlay defines the edges while the timber surface remains the main material feature."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a comparable luxury media wall, finish samples should be viewed together in the room lighting. Metal tone, grain direction and shelf proportions have a strong effect on the result. Equipment dimensions, ventilation requirements and access for replacement should be agreed before the decorative layout is finalised."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g08/g08-01-front-view-of-full-height-black-oak-grain.webp",
      "alt": "Front view of full-height black oak-grain media wall with integrated television",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g08/g08-01-front-view-of-full-height-black-oak-grain.webp",
        "alt": "Front view of full-height black oak-grain media wall with integrated television",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g08/g08-02-black-oak-bespoke-media-wall-shown-within-a.webp",
        "alt": "Black oak bespoke media wall shown within a bright London interior",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g08/g08-03-room-view-of-dark-fitted-tv-wall-with.webp",
        "alt": "Room view of dark fitted TV wall with open shelving and lower storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g08/g08-04-angled-detail-of-dark-oak-grain-shelving-and.webp",
        "alt": "Angled detail of dark oak-grain shelving and fitted media cabinetry",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g08/g08-05-integrated-television-recess-and-shelving-detail-in-black.webp",
        "alt": "Integrated television recess and shelving detail in black oak media wall",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g08/g08-06-close-up-of-black-oak-grain-and-brass.webp",
        "alt": "Close-up of black oak grain and brass-toned inlay on media cabinet fronts",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G09",
    "slug": "natural-walnut-bespoke-bookcase",
    "title": "Bespoke Walnut Bookcase with Mirrored Feature",
    "category": "Bespoke Joinery",
    "summary": "Natural walnut fitted bookcase with illuminated geometric mirror panels and open shelves.",
    "seoDescription": "Natural walnut fitted bookcase with illuminated geometric mirror panels and open shelves. Explore the contrast between timber, reflection and light.",
    "keywords": [
      "bespoke walnut bookcase with mirrored feature",
      "natural walnut bespoke bookcase",
      "walnut fitted bookcase",
      "bespoke bookcase",
      "made to measure bookcase",
      "fitted shelving",
      "mirrored bookcase feature",
      "integrated bookcase lighting",
      "bespoke joinery"
    ],
    "highlights": [
      "Full-height natural walnut shelving",
      "Illuminated geometric mirrored centre feature",
      "Integrated vertical display lighting",
      "Made-to-measure fitted composition"
    ],
    "caseStudy": [
      {
        "heading": "A bookcase designed as a feature wall",
        "body": [
          "This project combines practical book storage with a strong decorative centrepiece. Full-height walnut shelving frames an illuminated geometric mirror composition, turning the fitted bookcase into a focal point within the living room rather than treating it as background storage.",
          "The warm timber and reflective centre section create deliberate contrast. The shelving provides the visual weight and storage, while the mirrored geometry introduces light, depth and a more sculptural character to the elevation."
        ]
      },
      {
        "heading": "The demanding part: controlling the geometric centre",
        "body": [
          "The central feature is built from repeated diagonal mirrored and panelled elements. Because those lines cross one another and repeat vertically, any variation in angle, spacing or junction position would become very noticeable.",
          "Accurate setting out is therefore important before the surrounding shelving is finally aligned. The centre feature and the two bookcase sections have to read as one composition, even though they use very different shapes and surface treatments."
        ]
      },
      {
        "heading": "Natural walnut shelving and proportion",
        "body": [
          "The darker walnut shelving gives the installation a calm frame around the brighter centre. Open shelves of different heights allow books and smaller display pieces to sit naturally without competing with the geometric feature.",
          "Full-height fitted shelving also needs to respond carefully to the existing room. The finished furniture meets the surrounding walls, skirting and ceiling line while keeping the visible verticals and shelf edges controlled."
        ]
      },
      {
        "heading": "Integrated lighting and reflective surfaces",
        "body": [
          "Vertical lighting is incorporated behind and beside the central feature, illuminating the angled panels and mirrored surfaces. This makes the geometry readable in the evening and gives the centre section additional depth.",
          "Lighting close to mirrored surfaces exposes details very clearly. Straight light lines, neat junctions and consistent spacing become part of the finished joinery quality rather than hidden technical elements."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed bookcase balances storage with a highly individual visual feature. The walnut cabinetry provides warmth and practicality, while the illuminated mirrored centre gives the room a distinctive focal point without requiring a separate decorative installation.",
          "For similar bespoke bookcases, display walls and fitted shelving, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment around the proportions of the room."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "Walnut shelving frames a tall central feature made from angled reflective panels. The warm timber colour gives the books and objects a calm surround, while the geometric centre introduces changing reflections and narrow lines of light. The shelf bays rise towards the cornice and relate to the existing room proportions. From the angled views, the centre feature reads as a layered surface rather than a flat mirror, with its diagonal divisions contrasting against the straight uprights of the bookcase."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A bespoke bookcase can combine everyday storage with a more decorative centrepiece. The design needs to establish which areas are for books, which are for display and where lighting components remain accessible. A material sample and a drawing of the panel junctions help resolve a feature like this before manufacture."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g09/g09-01-room-view-of-natural-walnut-fitted-bookcase-with.webp",
      "alt": "Room view of natural walnut fitted bookcase with illuminated geometric mirror feature",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g09/g09-01-room-view-of-natural-walnut-fitted-bookcase-with.webp",
        "alt": "Room view of natural walnut fitted bookcase with illuminated geometric mirror feature",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g09/g09-02-close-view-of-the-geometric-mirrored-centre-with.webp",
        "alt": "Close view of the geometric mirrored centre with diagonal borders and integrated lighting",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g09/g09-03-walnut-bookcase-and-illuminated-mirror-feature-beside-the.webp",
        "alt": "Walnut bookcase and illuminated mirror feature beside the living-room sofa",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g09/g09-04-full-view-of-natural-walnut-shelving-with-geometric.webp",
        "alt": "Full view of natural walnut shelving with geometric illuminated mirror feature",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G11",
    "slug": "westminster-polished-brass-panelled-doors",
    "title": "Westminster High-Gloss Doors with Brass Inlay",
    "category": "Bespoke Joinery",
    "location": "Westminster, London",
    "summary": "High-gloss internal doors and wall panels in Westminster, with polished brass inlay and contrasting textured surfaces.",
    "seoDescription": "High-gloss internal doors and wall panels in Westminster, with polished brass inlay and contrasting textured surfaces. View the junction details.",
    "keywords": [
      "westminster high-gloss doors with brass inlay",
      "bespoke panelled doors Westminster",
      "polished brass inlay doors",
      "bespoke wall panels London",
      "luxury panelled doors",
      "brass detail joinery",
      "bespoke doors London",
      "architectural joinery Westminster",
      "bespoke interior panels"
    ],
    "highlights": [
      "Dark reflective wall panels and integrated doors",
      "Polished brass line detailing",
      "Full-height architectural composition",
      "Precise alignment across intersecting panel joints"
    ],
    "caseStudy": [
      {
        "heading": "Architectural joinery integrated into the dining room",
        "body": [
          "This Westminster project uses full-height dark panels and doors as part of the room architecture rather than treating the doors as separate elements. The polished brass lines continue across the elevation, giving the installation a strong geometric identity within the dining space.",
          "The dark reflective finish adds depth and contrast against the lighter walls, floor and dining furniture. The result depends on the panel system, door positions and metallic detailing reading as one continuous composition."
        ]
      },
      {
        "heading": "The demanding part: keeping the brass grid aligned",
        "body": [
          "The polished brass lines create clear horizontal and vertical references across multiple panels and door faces. Any change in level or spacing would be immediately visible, especially where lines intersect at panel joints.",
          "Accurate setting out is therefore central to the finished result. Door gaps, panel divisions and brass details all need to work together so that the geometry remains continuous whether the doors are viewed from close range or across the room."
        ]
      },
      {
        "heading": "Reflective surfaces expose every junction",
        "body": [
          "High-gloss dark surfaces reflect the room around them, which makes irregular gaps and misalignment more noticeable than on a matt finish. The photographs show how the panel faces sit in a consistent plane while the brass lines remain crisp against the darker background.",
          "This type of finish also requires careful handling during final fitting because the completed surfaces are highly visible and form part of the decorative character of the room."
        ]
      },
      {
        "heading": "Doors concealed within the panelled elevation",
        "body": [
          "The doors are visually absorbed into the wider panel composition. Rather than interrupting the wall with conventional door detailing, the brass lines and dark surfaces continue the same architectural language across fixed and opening sections.",
          "That approach requires the functional elements of the doors to be coordinated with the visible panel layout so that usability does not compromise the visual continuity of the finished wall."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed installation creates a restrained but distinctive backdrop to the dining room. The combination of dark reflective surfaces and polished brass gives the wall depth and definition while keeping the overall geometry disciplined.",
          "For similar bespoke panelled doors, feature walls and architectural joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment around the room and the required door positions."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The dark panels have a pronounced high-gloss surface, reflecting the dining furniture, windows and room beyond. Polished brass lines run across the doors and adjacent panels as one grid, so the door openings become part of the wall composition. Textured vertical sections interrupt the mirror-like finish and add a second scale of detail. The close photographs focus on the intersections of the metal lines, where consistent alignment is essential to the visual effect."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "When coordinating decorative internal doors and panelling, the setting-out must include the door gaps, hinges, handles and adjacent wall surfaces. Samples are particularly useful for highly reflective finishes because daylight and artificial light change their appearance. The final specification should name the coating and metal finish explicitly."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g11/g11-01-dining-room-view-of-westminster-bespoke-panelled-doors.jpg",
      "alt": "Dining room view of Westminster bespoke panelled doors with polished brass lines",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g11/g11-01-dining-room-view-of-westminster-bespoke-panelled-doors.jpg",
        "alt": "Dining room view of Westminster bespoke panelled doors with polished brass lines",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g11/g11-02-wide-room-view-of-dark-reflective-panels-and.jpg",
        "alt": "Wide room view of dark reflective panels and integrated doors with brass detailing",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g11/g11-03-mid-range-view-of-polished-brass-grid-detailing.jpg",
        "alt": "Mid-range view of polished brass grid detailing across dark bespoke panels",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g11/g11-04-close-up-of-polished-brass-line-intersections-on.jpg",
        "alt": "Close-up of polished brass line intersections on dark panelled doors",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G12",
    "slug": "bookcase-in-esher",
    "title": "Esher Bespoke Bookcase & Fitted Storage",
    "category": "Bespoke Joinery",
    "location": "Esher, Surrey",
    "summary": "Bespoke bookcase in Esher with reflective dark shelving, pale cupboard fronts and divided drawers.",
    "seoDescription": "Bespoke bookcase in Esher with reflective dark shelving, pale cupboard fronts and divided drawers. See the fitted storage and material junctions.",
    "keywords": [
      "esher bespoke bookcase & fitted storage",
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
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The fitted bookcase balances dark upper shelving with pale lower fronts. Reflections across the back panels and shelves give the upper section a glossy character, while the lighter doors keep the base visually simple. Open views show drawers divided for smaller items and a wood-grain cupboard interior. A narrow contrasting border runs around the lower doors, linking them to the darker surrounding frame. These close details show how a seemingly straightforward storage wall can depend on several carefully coordinated surfaces."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a bookcase with mixed storage, decide what belongs in drawers and what needs cupboards before setting the front divisions. Books also vary considerably in depth and height. Planning the internal compartments alongside the visible grid avoids having an attractive frontage that is less useful behind the doors."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g12/g12-01-full-front-view-of-the-esher-bookcase-and.jpg",
      "alt": "Full front view of the Esher bookcase and lower cupboards",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g12/g12-01-full-front-view-of-the-esher-bookcase-and.jpg",
        "alt": "Full front view of the Esher bookcase and lower cupboards",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g12/g12-02-open-drawers-below-the-esher-bookcase.jpg",
        "alt": "Open drawers below the Esher bookcase",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g12/g12-03-shelves-and-countertop-above-the-lower-cabinetry.jpg",
        "alt": "Shelves and countertop above the lower cabinetry",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g12/g12-04-pale-cupboard-door-with-a-dark-border.jpg",
        "alt": "Pale cupboard door with a dark border",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g12/g12-05-cupboard-interior-hinge-and-door-edge.jpg",
        "alt": "Cupboard interior, hinge and door edge",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g12/g12-06-open-drawer-with-divided-storage.jpg",
        "alt": "Open drawer with divided storage",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G13",
    "slug": "cream-bespoke-tv-unit",
    "title": "Bespoke Cream Media Wall with Display Niches",
    "category": "Bespoke Joinery",
    "summary": "Cream fitted media wall with a recessed television, illuminated display niches and panelled storage.",
    "seoDescription": "Cream fitted media wall with a recessed television, illuminated display niches and panelled storage. View the full-height living-room joinery.",
    "keywords": [
      "bespoke cream media wall with display niches",
      "cream bespoke TV unit",
      "fitted media unit",
      "bespoke TV wall",
      "made to measure TV unit",
      "living room fitted furniture",
      "bespoke media cabinetry",
      "fitted shelving",
      "bespoke joinery"
    ],
    "highlights": [
      "Light cream fitted media cabinetry",
      "Integrated television zone",
      "Open display shelving",
      "Concealed lower storage"
    ],
    "caseStudy": [
      {
        "heading": "A fitted media unit with a lighter visual character",
        "body": [
          "This project uses a light cream finish to create a fitted television unit that feels integrated with the room without becoming visually heavy. The composition combines the media zone, open display shelving and concealed storage as one coordinated piece of furniture.",
          "The lighter finish helps the cabinetry sit comfortably against the surrounding interior while still giving the television wall a clear architectural structure."
        ]
      },
      {
        "heading": "The demanding part: keeping the composition balanced",
        "body": [
          "Media furniture has to accommodate several different functions within one elevation. The television opening, shelving and storage all need to relate to one another so that the finished wall feels balanced rather than fragmented.",
          "Careful setting out is especially important where open shelves meet larger cabinet sections, because even small changes in line or spacing can become noticeable across the finished elevation."
        ]
      },
      {
        "heading": "Open display and concealed storage",
        "body": [
          "The open shelving provides space for decorative objects and keeps the upper sections visually lighter. The closed storage below creates a practical zone for items that do not need to remain visible.",
          "Combining open and closed elements allows the unit to work as everyday living-room furniture while still maintaining a clean presentation around the television."
        ]
      },
      {
        "heading": "Fitting around the existing room",
        "body": [
          "Made-to-measure media cabinetry needs to respond to real wall dimensions, floor levels and surrounding finishes. The success of the installation depends on accurate junctions at the outer edges and controlled alignment between the main fitted elements.",
          "The photographs show how the cabinetry is integrated into the room rather than simply placed in front of the wall, which is one of the main advantages of bespoke fitted furniture."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed unit combines media, display and storage functions in a calm light-toned composition. The overall effect is practical and architectural without overwhelming the room.",
          "For similar bespoke TV units and fitted media walls, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The television sits within a floor-to-ceiling field of pale panels, with two illuminated niches positioned on either side. The shallow display recesses create a place for decorative objects without bringing shelving into the room. Repeated panel joints carry above and below the screen, giving the wall a measured rhythm. Angled photographs show the depth of the niches and the return at the edge of the composition. The pale, low-sheen appearance keeps the furniture quieter than the screen and the darker surfaces around it."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A fitted media wall should be planned around the television size, seated viewing height and the equipment that accompanies it. Display lighting and cable access need coordinating with the cabinet layout. Keeping these practical requirements within the design allows the finished frontage to remain uncluttered."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g13/g13-01-front-view-of-cream-bespoke-tv-unit.webp",
      "alt": "Front view of cream bespoke TV unit",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g13/g13-01-front-view-of-cream-bespoke-tv-unit.webp",
        "alt": "Front view of cream bespoke TV unit",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g13/g13-02-room-view-of-cream-bespoke-fitted-tv-unit.webp",
        "alt": "Room view of cream bespoke fitted TV unit",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g13/g13-03-angled-view-of-cream-bespoke-tv-unit-and.webp",
        "alt": "Angled view of cream bespoke TV unit and shelving",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g13/g13-04-illuminated-display-niche-detail-in-cream-media-unit.webp",
        "alt": "Illuminated display-niche detail in cream media unit",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g13/g13-05-side-room-view-of-cream-bespoke-media-furniture.webp",
        "alt": "Side room view of cream bespoke media furniture",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G14",
    "slug": "crocodile-front-bespoke-cabinet",
    "title": "Bespoke Textured-Front Living-Room Cabinet",
    "category": "Bespoke Joinery",
    "summary": "A tall bespoke cabinet with crocodile-pattern textured fronts, metallic inset handles and concealed shelving, designed for a formal living room.",
    "seoDescription": "A tall bespoke cabinet with crocodile-pattern textured fronts, metallic inset handles and concealed shelving, designed for a formal living room.",
    "keywords": [
      "bespoke textured-front living-room cabinet",
      "crocodile front bespoke cabinet",
      "textured bespoke cabinet",
      "dark bespoke furniture",
      "bespoke storage cabinet",
      "brass detail cabinet",
      "luxury bespoke joinery",
      "made to measure cabinet",
      "bespoke furniture"
    ],
    "highlights": [
      "Crocodile-pattern textured full-height fronts",
      "Brass-toned square pull and base detailing",
      "Concealed internal shelving and storage",
      "Tall furniture proportions set against a light classical interior"
    ],
    "caseStudy": [
      {
        "heading": "A strong furniture piece within a restrained interior",
        "body": [
          "This cabinet was designed as a visually distinctive piece rather than a neutral background element. The dark textured fronts create a deliberate contrast with the pale wall panelling, fireplace and surrounding interior, while the tall proportions give the cabinet a clear architectural presence.",
          "The room photography shows matching cabinetry positioned around the fireplace, allowing the dark vertical forms to frame the lighter centre of the room without relying on excessive decorative detail."
        ]
      },
      {
        "heading": "The demanding part: controlling the textured front",
        "body": [
          "A strongly patterned surface makes alignment more visible. The door margins, centre joint and surrounding dark frame therefore need to remain disciplined so the texture reads as intentional rather than visually uneven.",
          "The square brass-toned pull is positioned directly across the meeting line of the doors, creating a precise focal point against the darker surface. Small inconsistencies in this area would be immediately noticeable."
        ]
      },
      {
        "heading": "Concealed storage behind full-height doors",
        "body": [
          "With the doors open, the cabinet reveals a dark internal arrangement of shelves and storage. Keeping this practical interior behind full-height fronts allows the closed cabinet to retain a clean, furniture-led appearance while still providing useful storage.",
          "The open view also shows the depth and scale of the doors, which need to operate accurately without disturbing the visual alignment of the closed elevation."
        ]
      },
      {
        "heading": "Proportion, base detail and room context",
        "body": [
          "The cabinet is lifted on a brass-toned base structure rather than reading as a solid block to the floor. This introduces a lighter visual break below the dark body and relates directly to the handle detail above.",
          "The wider room views show why proportion matters: the cabinet has to hold its own beside the fireplace, mirrors, lighting and furniture while still leaving the surrounding architecture visually legible."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed cabinet combines a highly textured exterior with restrained geometry, concealed storage and carefully controlled metal detailing. The contrast between the dark fronts and the brighter room gives the piece its character without requiring an overcomplicated form.",
          "For similar bespoke cabinets, feature storage pieces and made-to-measure furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The tall cabinet uses a dark crocodile-pattern surface to give its doors depth and variation. Two rectangular metallic pulls are recessed into the central door division, creating a small, precise accent against the patterned finish. Open photographs reveal internal shelves for books and everyday items. In the wider room, the cabinet stands beside the fireplace and traditional wall mouldings, combining an expressive front with the practical role of concealed living-room storage."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "With a strongly patterned finish, the scale and direction of the texture are part of the design. Door divisions and handle positions should be considered against a full sample rather than a small colour swatch alone. The internal shelving can then be tailored independently to the objects the cabinet needs to hold."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g14/g14-01-room-view-of-dark-crocodile-front-bespoke-cabinet.webp",
      "alt": "Room view of dark crocodile-front bespoke cabinet",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g14/g14-01-room-view-of-dark-crocodile-front-bespoke-cabinet.webp",
        "alt": "Room view of dark crocodile-front bespoke cabinet",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g14/g14-02-wider-room-context-showing-matching-dark-bespoke-cabinets.webp",
        "alt": "Wider room context showing matching dark bespoke cabinets",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g14/g14-03-open-bespoke-cabinet-showing-concealed-internal-shelving.webp",
        "alt": "Open bespoke cabinet showing concealed internal shelving",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g14/g14-04-close-detail-of-crocodile-pattern-textured-cabinet-front.webp",
        "alt": "Close detail of crocodile-pattern textured cabinet front",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g14/g14-05-brass-toned-square-handle-detail-on-textured-cabinet.webp",
        "alt": "Brass-toned square handle detail on textured cabinet doors",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G15",
    "slug": "sc-bespoke-tv-unit",
    "title": "Bespoke Dark Media Wall with Textured Panels",
    "category": "Bespoke Joinery",
    "summary": "A full-wall bespoke TV unit with dark textured panels, display shelves and low-level storage.",
    "seoDescription": "A full-wall bespoke TV unit with dark textured panels, display shelves and low-level storage. Explore the fitted living-room furniture.",
    "keywords": [
      "bespoke dark media wall with textured panels",
      "dark bespoke media wall",
      "full wall TV unit",
      "integrated television cabinetry",
      "textured media wall",
      "bespoke display shelving",
      "made to measure TV unit",
      "bespoke joinery"
    ],
    "highlights": [
      "Full-wall dark media composition",
      "Integrated television within large textured panels",
      "Open display shelving at the outer sections",
      "Long low-level concealed storage"
    ],
    "caseStudy": [
      {
        "heading": "A media wall designed as part of the room",
        "body": [
          "This project uses the television wall as a complete fitted composition rather than treating the screen as a separate object. The dark full-width installation combines the television, large textured panels, open display areas and low storage into one continuous elevation.",
          "Against the pale seating and bright ceiling, the dark joinery gives the room a strong focal wall while keeping the television visually integrated with the surrounding furniture."
        ]
      },
      {
        "heading": "The demanding part: maintaining a large panel grid",
        "body": [
          "The main feature is a repeated grid of large dark panels surrounding the television. Because the divisions continue across a wide area, consistent horizontal and vertical alignment is especially important. Small variations would become visible immediately across the completed wall.",
          "The television opening also has to sit accurately within this grid so the screen feels deliberately positioned rather than inserted after the surrounding furniture was set out."
        ]
      },
      {
        "heading": "Display space without breaking the composition",
        "body": [
          "Open shelving is concentrated toward the outer sections of the installation. These recesses provide space for books and decorative objects while preserving the darker, more continuous treatment around the central television zone.",
          "The combination of closed panelled areas and open shelves gives the wall useful storage and display capacity without making every section visually busy."
        ]
      },
      {
        "heading": "Low storage and room-scale proportion",
        "body": [
          "A long low-level cabinet runs beneath the media wall, giving the composition a strong horizontal base and providing concealed storage. Its alignment with the upper sections helps the full installation read as one piece rather than separate upper and lower elements.",
          "The wider photographs show the importance of room-scale proportion. The furniture occupies a substantial wall but remains balanced against the large seating group, patterned rug and other strong features within the interior."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed TV unit combines media, display and storage functions within a dark, highly structured wall treatment. Repeated panel lines, integrated shelving and the long lower cabinet give the installation a deliberate architectural character.",
          "For similar bespoke TV units and full-wall media installations, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "A grid of dark textured panels surrounds the television and gives the wall a soft, varied reflection. Open shelves at the sides keep books and objects visible, while a continuous low cabinet run grounds the composition. The close view shows that the surface texture is part of the design rather than a plain flat colour. Long views along the wall reveal the shallow projection into the room, leaving the seating area open. The television is integrated into the panel arrangement instead of being added to an unrelated cabinet."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a full-wall entertainment unit, consider how the room is used when the television is off. Display shelves and panel proportions should still form a balanced composition. The equipment schedule, cable paths and access to closed storage help determine the practical layout before the decorative finish is selected."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g15/g15-01-dark-fitted-tv-wall-with-textured-panels-open.webp",
      "alt": "Dark fitted TV wall with textured panels, open side shelves and lower storage",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g15/g15-01-dark-fitted-tv-wall-with-textured-panels-open.webp",
        "alt": "Dark fitted TV wall with textured panels, open side shelves and lower storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g15/g15-02-wide-living-room-view-of-full-wall-bespoke.webp",
        "alt": "Wide living-room view of full-wall bespoke media furniture",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g15/g15-03-bespoke-media-wall-with-the-television-in-use.webp",
        "alt": "Bespoke media wall with the television in use and textured surrounding panels",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g15/g15-04-side-perspective-of-dark-media-wall-and-low.webp",
        "alt": "Side perspective of dark media wall and low storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g15/g15-05-close-view-of-textured-media-panels-and-display.webp",
        "alt": "Close view of textured media panels and display shelving",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G16",
    "slug": "sc-bespoke-bookcase",
    "title": "Bespoke High-Gloss Room-Divider Bookcase",
    "category": "Bespoke Joinery",
    "summary": "A dark high-gloss bookcase and room divider with open display compartments, reflective panels and views through the surrounding interior.",
    "seoDescription": "A dark high-gloss bookcase and room divider with open display compartments, reflective panels and views through the surrounding interior.",
    "keywords": [
      "bespoke high-gloss room-divider bookcase",
      "dark bespoke bookcase",
      "open room divider shelving",
      "bespoke display bookcase",
      "made to measure shelving",
      "architectural bookcase",
      "luxury bespoke furniture",
      "bespoke joinery"
    ],
    "highlights": [
      "Dark open shelving used as a room-dividing feature",
      "Varied grid of vertical and horizontal openings",
      "Display storage visible from multiple room angles",
      "Large-scale structure integrated with the interior"
    ],
    "caseStudy": [
      {
        "heading": "A bookcase that also defines the room",
        "body": [
          "This project uses an open bookcase as more than display storage. The dark shelving forms a visual division within the room while still allowing light, views and movement through the open grid.",
          "Because the piece is visible from several directions, the structure has to work as furniture from both close range and across the wider interior."
        ]
      },
      {
        "heading": "The demanding part: repeated alignment across a large grid",
        "body": [
          "The design relies on many repeated horizontal shelves and vertical divisions. That makes small setting-out errors easy to see, particularly where several openings line up across the full height and width of the installation.",
          "The varied compartment sizes also need to remain visually deliberate so the composition feels balanced rather than random."
        ]
      },
      {
        "heading": "Open display without making the room feel enclosed",
        "body": [
          "The open arrangement allows decorative objects, books and accessories to be displayed while keeping visual connections between the adjoining parts of the room.",
          "Using open sections rather than a solid wall gives the furniture a lighter architectural role, even though the dark finish gives the piece a strong presence."
        ]
      },
      {
        "heading": "Detail, depth and multiple viewpoints",
        "body": [
          "Closer photographs show the depth of the shelving and the relationship between the heavier outer frame and the smaller internal divisions. These details are especially important because the furniture is experienced from several angles rather than from one front elevation only.",
          "The wider room views confirm how the shelving relates to seating, lighting and the surrounding architecture, which is essential when a fitted piece also acts as a spatial divider."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed bookcase provides substantial display capacity while creating a clear architectural division within the room. Its open grid keeps the interior connected, while the dark finish gives the structure enough visual weight to anchor the space.",
          "For similar bespoke bookcases, display walls and room-dividing furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "This open bookcase divides the interior while allowing views between the spaces. Its dark, highly reflective surfaces contrast with the pale furniture around it. A varied grid creates compartments for books, glassware and larger display objects, with some sections open through the structure and others backed by reflective panels. The photographs from opposite sides explain the furniture as a room divider as well as a bookcase. The finish gives the uprights and shelf edges a crisp outline, especially where they meet the lighter walls and ceiling."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Freestanding and room-dividing joinery needs consideration from both sides. The display layout, stability, fixing method and relationship to circulation should be resolved together. A finish that looks dramatic in a photograph also needs to suit everyday handling and cleaning, particularly on accessible shelves and lower panels."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g16/g16-01-dark-high-gloss-bookcase-forming-an-open-room.webp",
      "alt": "Dark high-gloss bookcase forming an open room divider",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g16/g16-01-dark-high-gloss-bookcase-forming-an-open-room.webp",
        "alt": "Dark high-gloss bookcase forming an open room divider",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g16/g16-02-wide-room-view-showing-the-bespoke-bookcase-dividing.webp",
        "alt": "Wide room view showing the bespoke bookcase dividing the interior",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g16/g16-03-angled-view-of-the-dark-open-shelving-structure.webp",
        "alt": "Angled view of the dark open shelving structure",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g16/g16-04-close-detail-of-open-shelving-and-display-compartments.webp",
        "alt": "Close detail of open shelving and display compartments",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g16/g16-05-structural-detail-showing-the-repeated-shelving-grid.webp",
        "alt": "Structural detail showing the repeated shelving grid",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g16/g16-06-opposite-room-view-of-the-open-bespoke-bookcase.webp",
        "alt": "Opposite room view of the open bespoke bookcase",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G17",
    "slug": "grey-bespoke-sideboard",
    "title": "Bespoke Grey Sideboard with Metal Legs",
    "category": "Bespoke Joinery",
    "summary": "A bespoke grey wood-grain sideboard with polished metal legs, square handles, drawers and mirrored internal shelving.",
    "seoDescription": "A bespoke grey wood-grain sideboard with polished metal legs, square handles, drawers and mirrored internal shelving. Explore the furniture details.",
    "keywords": [
      "bespoke grey sideboard with metal legs",
      "grey bespoke sideboard",
      "bespoke console cabinet",
      "dark timber sideboard",
      "made to measure sideboard",
      "bespoke storage furniture",
      "metal leg sideboard",
      "bespoke joinery"
    ],
    "highlights": [
      "Dark grey timber-finished cabinetry",
      "Square metal pull details",
      "Polished metal support legs",
      "Drawers with concealed internal storage"
    ],
    "caseStudy": [
      {
        "heading": "A slim piece with a strong horizontal proportion",
        "body": [
          "This sideboard is deliberately low and wide, giving it a strong horizontal character. The dark timber finish keeps the body visually restrained while the polished metal legs lift the cabinet away from the floor.",
          "The front elevation is kept simple so the material, proportions and metal details carry most of the visual interest."
        ]
      },
      {
        "heading": "The demanding part: keeping the front composition clean",
        "body": [
          "A long, simple front makes alignment easy to judge. Drawer gaps, door margins and the centre division therefore need to remain consistent so the elevation reads as one controlled piece of furniture.",
          "The square metal pulls become small focal points across the front, making their position and alignment particularly visible."
        ]
      },
      {
        "heading": "Storage behind a minimal exterior",
        "body": [
          "The open view shows that the cabinet combines shallow drawer storage with a larger internal compartment. This allows several storage functions to sit behind one clean exterior.",
          "The mirrored or reflective internal surfaces add depth to the storage area and contrast with the darker exterior finish."
        ]
      },
      {
        "heading": "Detail and material contrast",
        "body": [
          "The close photograph shows the internal lining and the relationship between the darker cabinet material and the surrounding frame. These smaller construction details matter because the piece is relatively simple in form and therefore leaves little to distract from finish quality.",
          "The metal legs and pulls provide a sharper, lighter contrast against the dark timber surfaces."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed sideboard is compact, restrained and furniture-led, combining useful storage with a clean linear profile and metal detailing.",
          "For similar bespoke sideboards, consoles and made-to-measure storage furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The sideboard pairs a broad grey wood-grain cabinet with slender, polished metal supports. Square pulls echo the straight lines of the cabinet, while the open view reveals a combination of drawers and a larger compartment with reflective shelves. The grain runs horizontally across the front, emphasising the low proportions. A close interior view shows the contrast between the cabinet surface and its narrow edge detailing. This is a standalone piece of bespoke furniture, with the storage and base treated as a single composition."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a made-to-measure sideboard, begin with the objects it will hold and the furniture it sits beside. Drawer depth, shelf clearance and door projection should suit the intended use. The metal base, handles and cabinet finish can then be selected together to keep the proportions and material palette consistent."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g17/g17-01-front-view-of-grey-bespoke-sideboard.webp",
      "alt": "Front view of grey bespoke sideboard",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g17/g17-01-front-view-of-grey-bespoke-sideboard.webp",
        "alt": "Front view of grey bespoke sideboard",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g17/g17-02-angled-view-of-grey-bespoke-sideboard-and-polished.webp",
        "alt": "Angled view of grey bespoke sideboard and polished metal legs",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g17/g17-03-open-bespoke-sideboard-showing-drawers-and-concealed-storage.webp",
        "alt": "Open bespoke sideboard showing drawers and concealed storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g17/g17-04-interior-material-detail-inside-bespoke-sideboard.webp",
        "alt": "Interior material detail inside bespoke sideboard",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G19",
    "slug": "putney-heath-bespoke-cabinets",
    "title": "Putney Heath Bespoke Alcove Cabinets",
    "category": "Bespoke Joinery",
    "location": "Putney Heath, London",
    "summary": "Bespoke alcove cabinets in Putney Heath with textured fronts, metallic handles and concealed television and book storage beside a fireplace.",
    "seoDescription": "Bespoke alcove cabinets in Putney Heath with textured fronts, metallic handles and concealed television and book storage beside a fireplace.",
    "keywords": [
      "putney heath bespoke alcove cabinets",
      "Putney Heath bespoke cabinets",
      "bespoke cabinets London",
      "dark fitted cabinets",
      "fireplace alcove cabinetry",
      "bespoke TV cabinet",
      "brass detail cabinetry",
      "made to measure storage",
      "bespoke joinery"
    ],
    "highlights": [
      "Matching tall cabinets framing a fireplace",
      "Dark textured exterior finish",
      "Concealed shelving and integrated television storage",
      "Brass-toned base and handle detailing"
    ],
    "caseStudy": [
      {
        "heading": "A matching pair designed around the fireplace",
        "body": [
          "This Putney Heath project uses two tall bespoke cabinets to frame the fireplace and create a balanced fitted composition. Although the cabinets share the same exterior language, their internal functions are different.",
          "The matching proportions and finish allow the pair to read as one coordinated design while keeping the central fireplace visually dominant."
        ]
      },
      {
        "heading": "The demanding part: symmetry with different internal functions",
        "body": [
          "A paired arrangement makes differences in height, width and alignment particularly visible. The outer frames, base details and front margins therefore need to remain consistent across both cabinets.",
          "At the same time, each interior has to accommodate a different storage requirement without changing the closed appearance of the matching exteriors."
        ]
      },
      {
        "heading": "Concealed shelving and television storage",
        "body": [
          "One cabinet opens to reveal practical shelving and storage, while the other incorporates a television within the internal arrangement. Closing the doors returns both pieces to the same restrained furniture-led appearance.",
          "This approach keeps technology and everyday storage concealed when not required while preserving a formal, symmetrical room composition."
        ]
      },
      {
        "heading": "Material and metal detailing",
        "body": [
          "Close photographs show the textured dark finish, framed fronts and brass-toned details used at the handles and lower supports. These lighter metal elements provide contrast without competing with the darker cabinetry.",
          "The relationship between the frame, door margins and metal details is important because the strong vertical proportions make small inconsistencies easy to notice."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed pair combines concealed storage and media functions within a coordinated architectural arrangement around the fireplace. The cabinets remain visually consistent when closed while serving different practical roles internally.",
          "For similar bespoke cabinet pairs, alcove furniture and concealed media storage, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "Two tall cabinets flank the fireplace, using the alcoves for concealed storage while keeping the chimney breast clear. Dark frames outline softly patterned front panels, and warm metallic handles pick up the raised metal bases below. Open views show two different uses behind the matching doors: shelving for books and an integrated television compartment. The paired fronts therefore create visual symmetry while the interiors respond to different storage requirements. The door detail reveals how the rectangular handle is set within the contrasting frame."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Matching alcove furniture does not require identical interiors. A television cabinet and a book cupboard can share an external design while accommodating different depths, ventilation and access needs. Measurements should account for the fireplace, wall mouldings and any variation between the two recesses."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g19/g19-01-pair-of-bespoke-cabinets-framing-a-fireplace-in.webp",
      "alt": "Pair of bespoke cabinets framing a fireplace in Putney Heath",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g19/g19-01-pair-of-bespoke-cabinets-framing-a-fireplace-in.webp",
        "alt": "Pair of bespoke cabinets framing a fireplace in Putney Heath",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g19/g19-02-room-context-showing-matching-tall-bespoke-cabinets.webp",
        "alt": "Room context showing matching tall bespoke cabinets",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g19/g19-03-open-bespoke-cabinet-showing-concealed-shelving.webp",
        "alt": "Open bespoke cabinet showing concealed shelving",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g19/g19-04-open-bespoke-cabinet-with-integrated-television-storage.webp",
        "alt": "Open bespoke cabinet with integrated television storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g19/g19-05-dark-cabinet-frame-and-brass-toned-detail.webp",
        "alt": "Dark cabinet frame and brass-toned detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g19/g19-06-front-and-handle-detail-on-putney-heath-bespoke.webp",
        "alt": "Front and handle detail on Putney Heath bespoke cabinet",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G20",
    "slug": "highgate-fitted-wardrobes",
    "title": "Highgate Bespoke Fitted Alcove Wardrobes",
    "category": "Bespoke Joinery",
    "location": "Highgate, London",
    "summary": "Bespoke fitted wardrobes in Highgate, with pale panelled doors and hanging, shelf and drawer storage fitted into bedroom alcoves.",
    "seoDescription": "Bespoke fitted wardrobes in Highgate, with pale panelled doors and hanging, shelf and drawer storage fitted into bedroom alcoves.",
    "keywords": [
      "highgate bespoke fitted alcove wardrobes",
      "Highgate fitted wardrobes",
      "fitted wardrobes London",
      "bespoke bedroom wardrobes",
      "grey fitted wardrobes",
      "alcove wardrobes",
      "made to measure wardrobes",
      "bespoke joinery"
    ],
    "highlights": [
      "Full-height fitted wardrobes around a fireplace",
      "Restrained grey painted fronts",
      "Internal hanging, shelving and drawer storage",
      "Bedroom-scale fitted composition"
    ],
    "caseStudy": [
      {
        "heading": "Wardrobes integrated around the fireplace",
        "body": [
          "This Highgate bedroom uses fitted wardrobes on both sides of the fireplace, turning the wall into a balanced storage composition while keeping the chimney breast and fireplace visually clear.",
          "The simple full-height fronts keep the wardrobes quiet within the room and allow the existing architectural features to remain prominent."
        ]
      },
      {
        "heading": "The demanding part: balancing two alcoves",
        "body": [
          "Working on opposite sides of a fireplace makes symmetry and proportion especially visible. The wardrobes need to align in height, projection and door spacing while responding to the actual dimensions of each alcove.",
          "The closed elevation therefore depends on careful setting out rather than decorative detail."
        ]
      },
      {
        "heading": "Practical internal storage",
        "body": [
          "The open photographs show a combination of hanging space, upper shelving and lower drawers. This gives the wardrobe practical everyday storage while keeping the external appearance restrained.",
          "The internal arrangement uses the full available height so the fitted furniture makes effective use of the bedroom alcoves."
        ]
      },
      {
        "heading": "A calm bedroom finish",
        "body": [
          "The grey finish relates closely to the wall colour and fireplace surround, helping the wardrobes feel integrated rather than added as separate pieces.",
          "Because the front design is intentionally simple, door alignment, margins and the relationship with the cornice become important parts of the finished result."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed wardrobes provide substantial concealed storage while preserving a calm, balanced bedroom elevation around the fireplace.",
          "For similar fitted wardrobes and made-to-measure bedroom storage, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The wardrobes occupy the bedroom recesses on either side of the fireplace. Their pale, panelled doors follow the height of the room and sit beneath projecting cornices. With the doors closed, the furniture reads as part of the bedroom architecture; opened, it reveals a combination of hanging space, upper shelves and low drawers. The arrangement leaves the fireplace as a central feature and uses wall areas that would be awkward for standard freestanding wardrobes. The photograph also shows why door clearance matters beside a bed and existing furniture."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For alcove wardrobes, a survey needs to record the true width and depth of each recess rather than assume the two sides match. Hanging lengths, drawer access and the door style should be designed together. A made-to-measure layout can then make useful storage around the features worth retaining in the room."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g20/g20-01-closed-view-of-highgate-fitted-wardrobes-around-the.webp",
      "alt": "Closed view of Highgate fitted wardrobes around the fireplace",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g20/g20-01-closed-view-of-highgate-fitted-wardrobes-around-the.webp",
        "alt": "Closed view of Highgate fitted wardrobes around the fireplace",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g20/g20-02-open-fitted-wardrobe-showing-hanging-and-drawer-storage.webp",
        "alt": "Open fitted wardrobe showing hanging and drawer storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g20/g20-03-highgate-wardrobe-internal-storage-detail.webp",
        "alt": "Highgate wardrobe internal storage detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G21",
    "slug": "northwood-bespoke-tv-unit",
    "title": "Northwood Bespoke TV Unit",
    "category": "Bespoke Joinery",
    "location": "Northwood, London",
    "summary": "A dark timber full-wall TV and display unit with integrated television, illuminated open niches, upper shelving and concealed low-level storage.",
    "seoDescription": "Northwood bespoke TV unit case study by Form & Frame, featuring dark timber cabinetry, integrated television, illuminated display niches, upper shelving and concealed low-level storage.",
    "keywords": [
      "Northwood bespoke TV unit",
      "bespoke media wall Northwood",
      "dark timber TV unit",
      "integrated TV cabinetry",
      "illuminated display shelving",
      "made to measure media unit",
      "bespoke joinery"
    ],
    "highlights": [
      "Full-wall dark timber media composition",
      "Integrated television",
      "Illuminated open display niches",
      "Upper shelving with low-level concealed storage"
    ],
    "caseStudy": [
      {
        "heading": "A full-wall media and display composition",
        "body": [
          "This Northwood installation combines the television with open display shelving and concealed storage across a large section of wall. The dark timber finish gives the furniture a strong presence while the open grid prevents the elevation from feeling too solid.",
          "The television is integrated into the overall shelving composition rather than treated as a separate object."
        ]
      },
      {
        "heading": "The demanding part: keeping a large grid visually controlled",
        "body": [
          "The design uses repeated vertical divisions, horizontal shelves and illuminated display sections. Across a wall-scale installation, any inconsistency in spacing or alignment would be immediately visible.",
          "The television opening also has to sit naturally within the wider grid so it feels part of the furniture rather than interrupting it."
        ]
      },
      {
        "heading": "Display lighting within the shelving",
        "body": [
          "Warm integrated lighting highlights selected open niches and creates contrast against the darker timber finish. The lighting also helps separate display zones from the deeper shelving around the television.",
          "Because the illuminated sections are viewed directly, the relationship between shelf edges, internal panels and lighting positions becomes part of the visual finish."
        ]
      },
      {
        "heading": "Open display above concealed storage",
        "body": [
          "The upper part of the unit is predominantly open and display-led, while the lower cabinetry provides concealed storage behind darker fronts. This keeps everyday storage out of view without making the entire wall visually heavy.",
          "The angled room view shows how the shelving continues across the wall and relates to the adjacent window and seating area."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed TV unit combines media, display and concealed storage functions within one dark timber composition. Warm lighting and open shelving break up the scale of the wall and give the installation more depth.",
          "For similar bespoke TV units, media walls and integrated display furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/northwood-bespoke-tv-unit/northwood-bespoke-tv-unit-room-view-01.webp",
      "alt": "Dark timber bespoke TV and display unit in Northwood",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/northwood-bespoke-tv-unit/northwood-bespoke-tv-unit-room-view-01.webp",
        "alt": "Main room view of Northwood bespoke TV unit",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/northwood-bespoke-tv-unit/northwood-bespoke-tv-unit-angled-view-02.webp",
        "alt": "Angled view of dark timber TV unit with illuminated display shelving",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G22",
    "slug": "northwood-home-office",
    "title": "Northwood Home Office",
    "category": "Bespoke Joinery",
    "location": "Northwood, London",
    "summary": "A dark timber fitted home office with a wraparound desk, overhead storage, integrated task lighting and coordinated low-level drawers and cupboards.",
    "seoDescription": "Northwood fitted home office case study by Form & Frame, featuring dark timber cabinetry, a wraparound desk, overhead storage, integrated lighting and concealed office storage.",
    "keywords": [
      "Northwood home office",
      "bespoke home office London",
      "fitted office furniture",
      "dark timber office cabinetry",
      "wraparound desk",
      "made to measure study",
      "bespoke joinery"
    ],
    "highlights": [
      "Wraparound fitted desk",
      "Dark timber cabinetry",
      "Overhead cupboards with integrated lighting",
      "Low-level drawers and concealed storage"
    ],
    "caseStudy": [
      {
        "heading": "A fitted workspace built around the room",
        "body": [
          "This Northwood home office uses a wraparound desk to make practical use of the available wall space while keeping the centre of the room open.",
          "Dark timber cabinetry continues around the workspace so the desk, drawers and overhead storage read as one coordinated fitted installation."
        ]
      },
      {
        "heading": "The demanding part: continuous working levels",
        "body": [
          "A desk that turns across several walls depends on accurate setting out. The working surface, low cabinetry and upper units need to remain visually level as they move around corners and meet the existing room.",
          "The photographs also show how the furniture responds to the window and adjacent walls without interrupting the usable desk area."
        ]
      },
      {
        "heading": "Storage above and below the desk",
        "body": [
          "Upper cupboards provide enclosed storage above the main work zone, while drawers and low cabinets keep everyday office items accessible below the worktop.",
          "This combination allows the room to hold a substantial amount of storage without filling the wall entirely with full-height cabinetry."
        ]
      },
      {
        "heading": "Integrated task lighting",
        "body": [
          "Lighting is built beneath the overhead cabinetry to illuminate the working area directly. The warm light also separates the desk zone visually from the darker timber above.",
          "Because the lighting sits close to the joinery, straight lines and clean junctions between the cabinets, worktop and illuminated panel are particularly visible."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed office combines a generous work surface with practical concealed storage in a compact fitted composition.",
          "For similar home offices and fitted studies, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/northwood-home-office/northwood-home-office-front-view-03.webp",
      "alt": "Front view of Northwood home office",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/northwood-home-office/northwood-home-office-front-view-03.webp",
        "alt": "Front view of Northwood home office",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/northwood-home-office/northwood-home-office-overall-view-01.webp",
        "alt": "Overall view of Northwood fitted home office",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/northwood-home-office/northwood-home-office-storage-detail-02.webp",
        "alt": "Low cabinetry and drawer storage in Northwood home office",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G23",
    "slug": "putney-flat-bespoke-tv-unit",
    "title": "Putney Flat Bespoke TV Unit",
    "category": "Bespoke Joinery",
    "location": "Putney, London",
    "summary": "A full-height dark timber media wall with an integrated television, illuminated display niches and concealed lower storage.",
    "seoDescription": "Putney bespoke TV unit case study by Form & Frame, featuring dark timber full-height cabinetry, integrated television, illuminated display niches and concealed storage.",
    "keywords": [
      "Putney bespoke TV unit",
      "bespoke media wall Putney",
      "dark timber TV unit",
      "integrated TV cabinetry",
      "illuminated display niches",
      "fitted media furniture",
      "bespoke joinery"
    ],
    "highlights": [
      "Full-height dark timber media wall",
      "Integrated television",
      "Illuminated display niches",
      "Concealed lower storage"
    ],
    "caseStudy": [
      {
        "heading": "A full-height media wall",
        "body": [
          "This Putney project uses dark timber cabinetry across the full wall, combining the television, display shelving and concealed storage within one fitted composition.",
          "The central television is framed by vertical and horizontal cabinet lines, while illuminated niches break up the darker finish and provide dedicated display areas."
        ]
      },
      {
        "heading": "The demanding part: maintaining the grid",
        "body": [
          "A wall-scale media unit creates many visible reference lines. Door joints, shelf edges and the television opening all need to remain aligned so the elevation reads as one controlled piece of furniture.",
          "The darker finish makes the illuminated sections especially prominent, which increases the importance of consistent spacing around each niche."
        ]
      },
      {
        "heading": "Integrated lighting and display",
        "body": [
          "Warm lighting is built into the side display compartments, giving decorative objects a clear focal point and adding depth to the media wall.",
          "The close-up photograph shows how the light is contained within the shelf recess, keeping the technical element visually discreet."
        ]
      },
      {
        "heading": "Storage without visual clutter",
        "body": [
          "The lower cabinetry provides concealed storage beneath the television and display sections. This allows the room to retain a clean appearance while keeping everyday items out of view.",
          "The overall arrangement balances open display areas with closed storage rather than filling the wall entirely with one type of cabinetry."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed unit combines media, display and storage functions in a dark architectural composition that remains integrated with the wider living and dining area.",
          "For similar bespoke TV units and media walls, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/putney-flat-bespoke-tv-unit/putney-flat-bespoke-tv-unit-front-view-02.webp",
      "alt": "Front view of Putney Flat bespoke TV unit",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/putney-flat-bespoke-tv-unit/putney-flat-bespoke-tv-unit-front-view-02.webp",
        "alt": "Front view of Putney Flat bespoke TV unit",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/putney-flat-bespoke-tv-unit/putney-flat-bespoke-tv-unit-room-view-01.webp",
        "alt": "Room view of Putney bespoke TV unit",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/putney-flat-bespoke-tv-unit/putney-flat-bespoke-tv-unit-display-detail-03.webp",
        "alt": "Illuminated display niche detail in Putney media wall",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G25",
    "slug": "earls-court-floating-shelf-mirror-wall",
    "title": "Earls Court Bespoke Floating Console & Mirror",
    "category": "Bespoke Joinery",
    "location": "Earls Court, London",
    "summary": "A dark floating hallway console in Earls Court, with a curved end and full-height mirrored wall.",
    "seoDescription": "A dark floating hallway console in Earls Court, with a curved end and full-height mirrored wall. View the compact fitted entrance feature.",
    "keywords": [
      "earls court bespoke floating console & mirror",
      "Earls Court bespoke joinery",
      "floating shelf London",
      "mirror wall joinery",
      "bespoke display shelf",
      "made to measure wall feature",
      "bespoke interior furniture"
    ],
    "highlights": [
      "Full-height mirrored wall",
      "Dark floating display shelf",
      "Compact decorative composition",
      "Clean wall-mounted installation"
    ],
    "caseStudy": [
      {
        "heading": "A compact feature built into the wall",
        "body": [
          "This Earls Court installation combines a dark floating display shelf with a full-height mirrored wall, creating a strong visual feature without adding bulky cabinetry.",
          "The mirror expands the perceived depth of the space while the shelf provides a practical surface for decorative objects."
        ]
      },
      {
        "heading": "The demanding part: alignment against mirror",
        "body": [
          "Mirror makes junctions and alignment particularly visible because every edge is reflected. The shelf therefore needs to sit level and cleanly against the mirrored surface.",
          "The reflected geometry also makes the relationship between the shelf, wall panels and surrounding door opening more noticeable than it would be against a plain painted wall."
        ]
      },
      {
        "heading": "Keeping the composition visually light",
        "body": [
          "The shelf is deliberately wall-mounted with no visible floor support, allowing the mirrored wall to remain continuous below it.",
          "This keeps the feature visually light while still giving the hallway a defined focal point."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed feature uses a small amount of joinery to create a strong architectural effect through contrast between the dark shelf and reflective wall.",
          "For similar floating furniture, display shelves and mirror-wall features, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "A dark, reflective console projects across a full-height mirrored wall in this entrance space. Its rounded outer end softens the line beside the circulation route, while the floating arrangement leaves the floor clear. The mirror extends the impression of the hallway and reflects the opposite wall rather than adding another bulky storage element. The photograph shows the relationship between the console, door opening and wall finishes, with a narrow display surface for flowers and small objects."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A hallway console should be sized around the space people need to pass, including door swings and anything carried through the entrance. Concealed support and the wall construction require checking before manufacture. The visible depth can remain modest when the purpose is display and a convenient surface rather than deep storage."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g25/g25-01-floating-display-shelf-and-mirrored-wall-feature-in.webp",
      "alt": "Floating display shelf and mirrored wall feature in Earls Court",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g25/g25-01-floating-display-shelf-and-mirrored-wall-feature-in.webp",
        "alt": "Floating display shelf and mirrored wall feature in Earls Court",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G26",
    "slug": "putney-bespoke-tv-unit",
    "title": "Putney Bespoke TV Unit",
    "category": "Bespoke Joinery",
    "location": "Putney, London",
    "summary": "A full-width fitted media wall with light textured fronts, integrated television, linear fireplace, illuminated display niches and concealed storage.",
    "seoDescription": "Putney bespoke TV unit case study by Form & Frame, featuring light textured fitted cabinetry, integrated television, linear fireplace, display niches and concealed storage.",
    "keywords": [
      "Putney bespoke TV unit",
      "bespoke media wall Putney",
      "integrated fireplace TV wall",
      "fitted media cabinetry",
      "illuminated display niche",
      "made to measure TV unit",
      "bespoke joinery"
    ],
    "highlights": [
      "Full-width fitted media wall",
      "Integrated television and linear fireplace",
      "Illuminated display niches",
      "Concealed storage behind flush fronts"
    ],
    "caseStudy": [
      {
        "heading": "A full-width media wall",
        "body": [
          "This Putney installation uses fitted cabinetry across the full width of the room, integrating the television, fireplace, display niches and concealed storage within one continuous composition.",
          "The light textured finish keeps the large wall of furniture visually restrained while the darker display recesses add contrast."
        ]
      },
      {
        "heading": "The demanding part: integrating multiple functions",
        "body": [
          "The television, fireplace, storage and display niches all occupy different positions within the elevation. Their edges and surrounding panel lines need to stay aligned so the composition remains controlled.",
          "The photographs show how the cabinet grid continues across the wall even where the internal functions change."
        ]
      },
      {
        "heading": "Concealed storage and access",
        "body": [
          "One view shows the television section and adjacent cabinetry opened, revealing practical storage behind the flush external fronts.",
          "This allows everyday equipment and storage to remain accessible without interrupting the closed appearance of the media wall."
        ]
      },
      {
        "heading": "Lighting and display niches",
        "body": [
          "Dark recessed display niches with integrated spot lighting create visual breaks within the lighter fitted elevation.",
          "The contrast draws attention to displayed objects while helping the full-width installation avoid reading as one continuous solid surface."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed media wall combines entertainment, fireplace, display and storage functions while maintaining a calm fitted appearance across the room.",
          "For similar bespoke TV units and integrated media walls, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/putney-bespoke-tv-unit/putney-bespoke-tv-unit-front-view-02.webp",
      "alt": "Front view of Putney bespoke TV unit",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/putney-bespoke-tv-unit/putney-bespoke-tv-unit-front-view-02.webp",
        "alt": "Front view of Putney bespoke TV unit",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/putney-bespoke-tv-unit/putney-bespoke-tv-unit-room-view-01.webp",
        "alt": "Room view of Putney fitted TV and fireplace wall",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/putney-bespoke-tv-unit/putney-bespoke-tv-unit-open-storage-03.webp",
        "alt": "Open storage and television detail in Putney media wall",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/putney-bespoke-tv-unit/putney-bespoke-tv-unit-detail-04.webp",
        "alt": "Illuminated display niche detail in Putney TV unit",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G27",
    "slug": "manchester-walk-in-wardrobe",
    "title": "Manchester Bespoke Walk-In Wardrobe & Island",
    "category": "Bespoke Joinery",
    "location": "Manchester",
    "summary": "Bespoke walk-in wardrobe in Manchester with mirrored doors, a glazed jewellery island and fitted dressing table.",
    "seoDescription": "Bespoke walk-in wardrobe in Manchester with mirrored doors, a glazed jewellery island and fitted dressing table. Explore the organised storage.",
    "keywords": [
      "manchester bespoke walk-in wardrobe & island",
      "Manchester walk-in wardrobe",
      "bespoke dressing room Manchester",
      "fitted wardrobes Manchester",
      "mirrored wardrobe doors",
      "wardrobe island",
      "bespoke dressing room",
      "made to measure wardrobes",
      "bespoke joinery",
      "Manchester dressing table",
      "make-up island Manchester",
      "bespoke dressing room furniture",
      "dressing room island",
      "made to measure dressing table",
      "bespoke joinery Manchester"
    ],
    "highlights": [
      "Complete walk-in wardrobe and dressing area",
      "Mirrored and glazed cabinet fronts",
      "Central island with divided jewellery storage",
      "Matching dressing table"
    ],
    "caseStudy": [
      {
        "heading": "A complete dressing-room composition",
        "body": [
          "This Manchester project uses fitted wardrobes on opposing walls with a central storage island and dressing area, creating a complete walk-in wardrobe rather than a single run of cabinetry.",
          "The light figured finish keeps the large amount of furniture visually calm while mirrored and glazed fronts introduce reflection and depth."
        ]
      },
      {
        "heading": "The demanding part: symmetry across the room",
        "body": [
          "Opposing wardrobe runs make alignment highly visible. Door heights, mirrored panels, vertical divisions and handle positions need to relate accurately across both sides of the room.",
          "The central island reinforces that symmetry, so its position and proportion also need to sit naturally within the circulation space."
        ]
      },
      {
        "heading": "Mirrored and glazed fronts",
        "body": [
          "The doors combine reflective and translucent panels within framed fronts, allowing the wardrobe to feel lighter than a continuous wall of solid doors.",
          "The mirror panels also reflect the opposite cabinetry, making consistency in spacing and alignment an important part of the finished appearance."
        ]
      },
      {
        "heading": "Island and dressing area",
        "body": [
          "The central island provides additional drawer storage and a practical surface within the dressing room, while the adjacent dressing table creates a dedicated preparation area.",
          "These elements are coordinated with the wardrobe finish so the room reads as one designed furniture scheme.",
          "Closer views show the divided jewellery compartments beneath the island's glazed top, the dressing-table storage and the carefully aligned frame and drawer-front details."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed room combines fitted wardrobes, mirrors, display sections, island storage and dressing furniture within a balanced light-toned interior.",
          "For similar walk-in wardrobes and dressing rooms, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The dressing room combines full-height wardrobe banks with a central island and a matching dressing table. Pale, figured surfaces keep the large amount of cabinetry light, while mirrored door panels extend the view along the room. The glazed island top makes the divided jewellery compartments visible from above. Close photographs show the shallow organisers, the contrasting rim around the glazing and the drawer fronts below. At the end of the room, the dressing table introduces a seated area without breaking the coordinated finish of the fitted wardrobes."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "The island is useful only when there is enough space to open nearby doors and drawers comfortably. A dressing-room plan should therefore test circulation alongside storage capacity. Jewellery trays, hanging arrangements and the height of the dressing surface can be tailored to the collection and daily routine rather than chosen as fixed standard modules."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g27/g27-01-front-view-of-manchester-walk-in-wardrobe.webp",
      "alt": "Front view of Manchester walk-in wardrobe",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g27/g27-01-front-view-of-manchester-walk-in-wardrobe.webp",
        "alt": "Front view of Manchester walk-in wardrobe",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g27/g27-02-full-view-of-the-manchester-dressing-island-with.webp",
        "alt": "Full view of the Manchester dressing island with the matching dressing table behind",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g27/g27-03-wardrobe-and-integrated-dressing-area-detail.webp",
        "alt": "Wardrobe and integrated dressing area detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g27/g27-04-jewellery-compartments-beneath-the-dressing-island-s-glazed.webp",
        "alt": "Jewellery compartments beneath the dressing island's glazed top",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g27/g27-05-divided-storage-and-dressing-accessories-beside-the-mirror.webp",
        "alt": "Divided storage and dressing accessories beside the mirror",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g27/g27-06-glazed-top-frame-and-pale-drawer-front-detail.webp",
        "alt": "Glazed top, frame and pale drawer-front detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G29",
    "slug": "virginia-water-wine-room",
    "title": "Virginia Water Bespoke Wine Display Cabinetry",
    "category": "Bespoke Joinery",
    "location": "Virginia Water, Surrey",
    "summary": "Bespoke wine-room cabinetry in Virginia Water, with illuminated bottle shelves, mirrored display storage and a dark high-gloss finish.",
    "seoDescription": "Bespoke wine-room cabinetry in Virginia Water, with illuminated bottle shelves, mirrored display storage and a dark high-gloss finish.",
    "keywords": [
      "virginia water bespoke wine display cabinetry",
      "Virginia Water wine room",
      "bespoke wine storage Surrey",
      "wine wall joinery",
      "bespoke bottle storage",
      "luxury wine room",
      "bespoke joinery"
    ],
    "highlights": [
      "Full-height bottle storage",
      "Mirrored central display shelving",
      "Integrated lighting",
      "Dedicated champagne storage"
    ],
    "caseStudy": [
      {
        "heading": "A full-wall wine display",
        "body": [
          "This Virginia Water project turns one wall of the room into a dedicated wine display with bottle storage arranged around a mirrored central section.",
          "The dark cabinetry gives the installation a strong architectural presence while the mirror and lighting introduce depth and reflection."
        ]
      },
      {
        "heading": "The demanding part: repetition and alignment",
        "body": [
          "Hundreds of bottle positions create a very regular visual grid, so shelf spacing and horizontal alignment need to stay consistent across the full elevation.",
          "The central display section also has to sit precisely within that grid so it reads as part of the same composition."
        ]
      },
      {
        "heading": "Lighting and reflective surfaces",
        "body": [
          "Integrated lighting highlights the bottle storage and central glass shelves, making the display readable without relying on general room lighting.",
          "The mirrored centre increases the sense of depth and reflects the surrounding room back through the joinery."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed wine room combines storage, display and decorative lighting within one fitted elevation.",
          "For similar wine rooms, bars and specialist display furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The fitted wine wall combines angled bottle display with a central section for glasses and decorative objects. Dark, reflective surfaces and mirrored backing give the cabinetry depth, while lighting makes the bottle labels and glass shelves readable. The close photographs show the patterned finish on the shelf edges and the spacing between bottles. Beneath the display, a continuous lower cabinet run provides a quieter base."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a wine cabinet, decide whether the priority is display, long-term storage or a combination of the two. Bottle sizes, collection size and any separate cooling equipment should be specified before the rack layout is drawn. Lighting and access for cleaning also matter where reflective surfaces and glass are used."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g29/g29-01-overall-view-of-virginia-water-wine-room.webp",
      "alt": "Overall view of Virginia Water wine room",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g29/g29-01-overall-view-of-virginia-water-wine-room.webp",
        "alt": "Overall view of Virginia Water wine room",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g29/g29-02-front-detail-of-wine-wall-and-mirrored-display.webp",
        "alt": "Front detail of wine wall and mirrored display",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g29/g29-03-bottle-storage-detail-in-virginia-water-wine-room.webp",
        "alt": "Bottle storage detail in Virginia Water wine room",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g29/g29-04-angled-bottle-display-shelves-with-illuminated-dark-patterned.webp",
        "alt": "Angled bottle display shelves with illuminated dark patterned edges",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g29/g29-05-close-wine-rack-detail.webp",
        "alt": "Close wine rack detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g29/g29-06-room-context-for-virginia-water-wine-room.webp",
        "alt": "Room context for Virginia Water wine room",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G30",
    "slug": "fulham-wine-cellar",
    "title": "Fulham Bespoke Wine Cellar Joinery",
    "category": "Bespoke Joinery",
    "location": "Fulham, London",
    "summary": "Bespoke wine cellar joinery in Fulham with diamond bottle racks, illuminated display shelves and compartments for wooden wine cases.",
    "seoDescription": "Bespoke wine cellar joinery in Fulham with diamond bottle racks, illuminated display shelves and compartments for wooden wine cases.",
    "keywords": [
      "fulham bespoke wine cellar joinery",
      "Fulham wine cellar",
      "bespoke wine room Fulham",
      "wine storage London",
      "fitted wine racks",
      "luxury wine cellar",
      "bespoke joinery"
    ],
    "highlights": [
      "Full-height bottle storage",
      "Diamond wine-rack sections",
      "Integrated lighting",
      "Central display niche"
    ],
    "caseStudy": [
      {
        "heading": "A dedicated fitted wine cellar",
        "body": [
          "This Fulham project uses dark fitted cabinetry to create a dedicated wine-storage room with bottle racks arranged around a central display section.",
          "The vertical proportions and repeated bottle positions give the installation a strong architectural character while keeping the collection organised and visible."
        ]
      },
      {
        "heading": "The demanding part: repeated geometry",
        "body": [
          "Wine storage relies on consistent spacing across a large number of repeated compartments. Small variations in the diamond racks or vertical bottle divisions would become increasingly visible across the full elevation.",
          "The central niche also needs to remain accurately aligned with the surrounding storage so the wall reads as one complete composition."
        ]
      },
      {
        "heading": "Lighting and display",
        "body": [
          "Integrated lighting highlights the bottle storage and creates contrast against the dark cabinetry.",
          "The illuminated central niche provides a visual break within the repeated wine-rack pattern and adds depth to the room."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed wine cellar combines high-capacity bottle storage, display and integrated lighting within a compact fitted room.",
          "For similar wine rooms and specialist storage furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The compact wine room uses several storage formats within one fitted layout. Diamond-shaped racks hold grouped bottles above, angled shelves present selected labels at eye level, and square lower compartments accommodate wine cases. The dark wood-grain cabinetry continues around the room, with lighting highlighting the horizontal display band. A glazed entrance keeps the joinery visible from outside. Close views show how the diagonal rack divisions meet the straight shelf edges, giving the furniture its distinctive geometry."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A useful wine-storage layout starts with bottle quantities and formats rather than decoration alone. Case storage, individual bottles and a display selection need different openings. Any environmental control should be designed and specified with the relevant specialist."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g30/g30-01-front-view-of-fulham-wine-cellar.webp",
      "alt": "Front view of Fulham wine cellar",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g30/g30-01-front-view-of-fulham-wine-cellar.webp",
        "alt": "Front view of Fulham wine cellar",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g30/g30-02-doorway-view-of-fulham-wine-cellar.webp",
        "alt": "Doorway view of Fulham wine cellar",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g30/g30-03-angled-view-of-illuminated-wine-racks.webp",
        "alt": "Angled view of illuminated wine racks",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g30/g30-04-bottle-storage-detail-in-fulham-wine-cellar.webp",
        "alt": "Bottle storage detail in Fulham wine cellar",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g30/g30-05-diamond-wine-rack-detail.webp",
        "alt": "Diamond wine-rack detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G31",
    "slug": "fulham-home-office",
    "title": "Fulham Bespoke Fitted Home Office",
    "category": "Bespoke Joinery",
    "location": "Fulham, London",
    "summary": "Bespoke home-office furniture in Fulham, with a fitted desk, illuminated bookshelves, lower cupboards and contrasting drawer detail.",
    "seoDescription": "Bespoke home-office furniture in Fulham, with a fitted desk, illuminated bookshelves, lower cupboards and contrasting drawer detail.",
    "keywords": [
      "fulham bespoke fitted home office",
      "Fulham home office",
      "bespoke home office Fulham",
      "fitted office furniture London",
      "dark timber home office",
      "metallic inlay cabinetry",
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
          "Fine fine metallic inlay details introduce a controlled contrast against the darker cabinetry and help articulate selected edges and divisions.",
          "The close-up views show how the metal detail is integrated as part of the furniture rather than applied as a separate decorative layer."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed office combines work surface, shelving and substantial storage in a fitted composition with a restrained material palette.",
          "For similar fitted studies and home offices, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The desk sits at the centre of a full-height shelving wall, with a taller open bay around the computer and book storage to either side. Lower cupboards keep working materials out of sight, while a shallow desk drawer holds smaller items close to hand. A restrained wood-grain finish links the different parts of the furniture. The detail photograph shows a contrasting textured drawer front, a small metallic handle and a fine line at the edge of the work surface. Lighting gives the upper shelves a separate display role outside working hours."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For fitted home-office furniture, the worktop height and knee space should be checked against the chair and equipment. Monitor depth, sockets, charging and access to cables need a place in the design. Shelves can then be arranged around books and reference material without compromising the usable working surface."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g31/g31-01-full-front-view-of-the-fitted-fulham-desk.webp",
      "alt": "Full front view of the fitted Fulham desk, shelving and cupboards",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g31/g31-01-full-front-view-of-the-fitted-fulham-desk.webp",
        "alt": "Full front view of the fitted Fulham desk, shelving and cupboards",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g31/g31-02-view-into-the-fulham-home-office-from-the.webp",
        "alt": "View into the Fulham home office from the doorway",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g31/g31-03-full-height-storage-detail-in-fulham-home-office.webp",
        "alt": "Full-height storage detail in Fulham home office",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g31/g31-04-textured-desk-drawer-front-small-metallic-handle-and.webp",
        "alt": "Textured desk drawer front, small metallic handle and fine worktop edge detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G32",
    "slug": "fulham-alcove-units",
    "title": "Fulham Bespoke Fitted Alcove Units",
    "category": "Bespoke Joinery",
    "location": "Fulham, London",
    "summary": "Pale bespoke alcove cupboards in Fulham, with illuminated display shelves and fitted storage beside a television and fireplace.",
    "seoDescription": "Pale bespoke alcove cupboards in Fulham, with illuminated display shelves and fitted storage beside a television and fireplace.",
    "keywords": [
      "fulham bespoke fitted alcove units",
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
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "These paired alcove units use a pale wood-grain finish, framed lower doors and open shelves above. The furniture sits on either side of the television and fireplace, leaving the central wall as a separate feature. Lighting is integrated into the display compartments so that objects remain visible without adding table lamps to the shelves. Different shelf heights create space for taller vases and smaller framed pieces. The photographs show both the complete pair and each individual alcove, making the cabinet proportions and their relationship to the chimney breast clear."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Alcove storage should be planned around the true dimensions of each recess. The lower cupboards can hold practical items while the shelves above are spaced for the objects you want to display. Lighting access, door opening and the connection to skirting and cornice all form part of the fitting detail."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g32/g32-01-full-view-of-both-pale-fulham-alcove-units.webp",
      "alt": "Full view of both pale Fulham alcove units around the television and fireplace",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g32/g32-01-full-view-of-both-pale-fulham-alcove-units.webp",
        "alt": "Full view of both pale Fulham alcove units around the television and fireplace",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g32/g32-02-right-hand-alcove-with-illuminated-shelves-and-lower.webp",
        "alt": "Right-hand alcove with illuminated shelves and lower cupboards",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g32/g32-03-left-hand-alcove-cupboards-and-open-display-shelves.webp",
        "alt": "Left-hand alcove cupboards and open display shelves",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g32/g32-04-angled-view-of-the-left-alcove-beside-the.webp",
        "alt": "Angled view of the left alcove beside the television and fireplace",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G33",
    "slug": "fulham-juice-bar-joinery",
    "title": "Fulham Bespoke Home Bar & Fitted Cabinetry",
    "category": "Bespoke Joinery",
    "location": "Fulham, London",
    "summary": "Bespoke home-bar joinery in Fulham with a seating counter, pale cabinet fronts and accessible concealed storage in a bright living space.",
    "seoDescription": "Bespoke home-bar joinery in Fulham with a seating counter, pale cabinet fronts and accessible concealed storage in a bright living space.",
    "keywords": [
      "fulham bespoke home bar & fitted cabinetry",
      "Fulham juice bar",
      "bespoke bar joinery Fulham",
      "residential bar furniture London",
      "bespoke kitchen bar",
      "custom island joinery",
      "bespoke joinery"
    ],
    "highlights": [
      "Central bar island",
      "Integrated appliance and service storage",
      "Dark fitted cabinetry",
      "Warm timber detailing"
    ],
    "caseStudy": [
      {
        "heading": "A dedicated residential juice bar",
        "body": [
          "This Fulham project creates a dedicated juice-bar area using fitted cabinetry and a central island within the wider living space.",
          "Dark outer cabinetry is balanced with warmer timber surfaces and open areas so the installation feels integrated rather than visually heavy."
        ]
      },
      {
        "heading": "The demanding part: combining display and service functions",
        "body": [
          "The joinery needs to accommodate storage, preparation surfaces and service access while maintaining a clean residential appearance.",
          "The island and wall cabinetry therefore have to work together both visually and practically, with consistent lines across doors, panels and work surfaces."
        ]
      },
      {
        "heading": "Integrated storage",
        "body": [
          "Closed cabinetry keeps appliances and service items concealed when not in use, while the open service views show how the joinery supports practical day-to-day use.",
          "The result is a compact bar arrangement that functions efficiently without reading like a commercial installation."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed juice bar combines preparation space, storage and seating within a fitted furniture composition that complements the surrounding interior.",
          "For similar residential bars, drinks cabinetry and specialist joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The home bar marks the transition between the raised dining area and the lower living room. A pale counter provides seating on the room side, with fitted cupboards arranged behind. The cabinet fronts combine simple framing with visible grain, relating the bar to the neighbouring alcove furniture. Open and closed side views reveal access within the compact service area. The furniture fits against the change in floor level and glass balustrade, showing how the joinery was composed around the existing room layout rather than treated as a separate freestanding island."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A home bar or drinks station needs a clear agreement about appliances, plumbing and storage before manufacture. Counter overhang, stool space and access behind the bar should be checked together. Removable or opening sections can provide maintenance access where services pass through the cabinetry."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g33/g33-01-front-view-of-fulham-juice-bar-joinery.webp",
      "alt": "Front view of Fulham juice bar joinery",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g33/g33-01-front-view-of-fulham-juice-bar-joinery.webp",
        "alt": "Front view of Fulham juice bar joinery",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g33/g33-02-overall-view-of-fulham-juice-bar-joinery.webp",
        "alt": "Overall view of Fulham juice bar joinery",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g33/g33-03-room-context-view-of-fulham-juice-bar.webp",
        "alt": "Room context view of Fulham juice bar",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g33/g33-04-countertop-and-joinery-detail.webp",
        "alt": "Countertop and joinery detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g33/g33-05-juice-bar-island-and-seating-view.webp",
        "alt": "Juice bar island and seating view",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g33/g33-06-closed-side-cabinetry-in-fulham-juice-bar.webp",
        "alt": "Closed side cabinetry in Fulham juice bar",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g33/g33-07-open-service-storage-detail-in-fulham-juice-bar.webp",
        "alt": "Open service storage detail in Fulham juice bar",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G34",
    "slug": "fulham-antique-mirror-feature",
    "title": "Fulham Bespoke Antique-Mirror Hallway Wardrobe",
    "category": "Bespoke Joinery",
    "location": "Fulham, London",
    "summary": "A fitted hallway wardrobe in Fulham with antique-effect mirrored doors, concealed coat storage and a finely divided panel design.",
    "seoDescription": "A fitted hallway wardrobe in Fulham with antique-effect mirrored doors, concealed coat storage and a finely divided panel design.",
    "keywords": [
      "fulham bespoke antique-mirror hallway wardrobe",
      "Fulham antique mirror",
      "antique mirror wall London",
      "bespoke mirror feature",
      "fitted mirror cabinetry",
      "dark bespoke joinery",
      "architectural joinery Fulham",
      "fitted hallway wardrobe",
      "coat cupboard",
      "mirrored wardrobes"
    ],
    "highlights": [
      "Full-height antique mirror panels",
      "Integrated dark cabinetry",
      "Framed reflective composition",
      "Made-to-measure fitted installation"
    ],
    "caseStudy": [
      {
        "heading": "A mirror feature designed as part of the room",
        "body": [
          "This Fulham installation combines full-height antique mirror panels with fitted dark cabinetry to create a decorative architectural feature rather than a standalone mirror.",
          "The aged reflective surface introduces depth and variation while the darker joinery provides a controlled frame around the composition."
        ]
      },
      {
        "heading": "The demanding part: precise panel alignment",
        "body": [
          "Large mirror panels make line and proportion particularly visible. The vertical joints, cabinet edges and surrounding architectural lines need to remain accurately coordinated across the full height of the installation.",
          "The reflective surface also exposes inconsistencies immediately, so survey and fitting accuracy are critical."
        ]
      },
      {
        "heading": "Cabinetry and reflection",
        "body": [
          "The darker fitted elements create a strong contrast with the antique mirror and help anchor the feature within the room.",
          "The reflective panels amplify light and surrounding detail without making the joinery itself visually dominant."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed feature combines reflective surface, fitted cabinetry and architectural alignment in one restrained composition.",
          "For similar mirror walls, decorative fitted features and bespoke joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "Behind the antique-effect mirrored frontage is a fitted coat cupboard. The open photograph shows a hanging rail, upper shelf and lower shoe space, making the practical use of this feature clear. When closed, the doors read as a tall mirror wall beside the staircase. Dark divisions create a regular grid across the aged reflective surface, while the narrow frontage leaves the landing visually open. The detail photographs show the mottled mirror finish and the small joints between the panels."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Mirrored hallway storage combines two functions in a limited area: a dressing mirror and a cupboard for coats and shoes. Door swings should be checked against the staircase and circulation route. The mirror specification, panel edges and fitting tolerances are important because adjacent reflections make misalignment noticeable."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g34/g34-01-open-mirrored-hallway-wardrobe-revealing-hanging-coats-an.webp",
      "alt": "Open mirrored hallway wardrobe revealing hanging coats, an upper shelf and shoe storage",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g34/g34-01-open-mirrored-hallway-wardrobe-revealing-hanging-coats-an.webp",
        "alt": "Open mirrored hallway wardrobe revealing hanging coats, an upper shelf and shoe storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g34/g34-02-closed-antique-effect-mirrored-wardrobe-doors-beside-the.webp",
        "alt": "Closed antique-effect mirrored wardrobe doors beside the staircase",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g34/g34-03-close-view-of-the-aged-mirror-surface-and.webp",
        "alt": "Close view of the aged mirror surface and narrow dark panel divisions",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g34/g34-04-antique-mirror-panel-detail.webp",
        "alt": "Antique mirror panel detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g34/g34-05-room-context-view-of-fulham-antique-mirror-feature.webp",
        "alt": "Room context view of Fulham antique mirror feature",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G45",
    "slug": "esher-luxury-residence-alcove-units",
    "title": "Esher Bespoke Illuminated Alcove Cupboards",
    "category": "Bespoke Joinery",
    "location": "Esher, Surrey",
    "summary": "Dark fitted alcove cupboards in Esher with illuminated display shelves, grain detail and concealed lower storage beside a living-room fireplace.",
    "seoDescription": "Dark fitted alcove cupboards in Esher with illuminated display shelves, grain detail and concealed lower storage beside a living-room fireplace.",
    "keywords": [
      "esher bespoke illuminated alcove cupboards",
      "Esher Luxury Residence alcove units",
      "illuminated alcove shelves",
      "fitted living room cupboards",
      "bespoke alcove cabinets",
      "fireplace shelving",
      "bespoke joinery"
    ],
    "highlights": [
      "Paired fireplace alcoves",
      "Illuminated display shelving",
      "Dark lower storage cupboards",
      "Fitted composition in a rooflit living room"
    ],
    "caseStudy": [
      {
        "heading": "A pair of alcoves around the fireplace",
        "body": [
          "These fitted units sit on either side of the fireplace in a rooflit living room at the Esher residence. Their dark finish gives the display shelves definition against the lighter chimney breast and surrounding walls."
        ]
      },
      {
        "heading": "Light, display and concealed storage",
        "body": [
          "Warm shelf lighting brings the displayed objects forward, while cupboards below provide concealed storage. The photographs move from the complete pair and room setting to closer views of the shelves, fronts and cabinet edges."
        ]
      },
      {
        "heading": "Planning a similar alcove pair",
        "body": [
          "Chimney-breast proportions, wall depth, floor levels and lighting positions all influence the fitted layout. Photographs and approximate measurements of both alcoves help Form & Frame consider the shelf arrangement, cupboard proportions and installation requirements."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The paired alcoves sit either side of the fireplace in a rooflit living room. Their dark fronts contrast with the pale chimney breast and allow the lit display objects to stand out. The lower cupboards provide closed storage, while the upper shelves form a regular series of open bays. The room photographs show the cabinetry beside wide glazing, where daylight changes the appearance of the darker surfaces. A close view records the grain, shelf edge and fine metallic line across the cabinet frontage."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Alcove joinery works best when its proportions respond to the chimney breast, ceiling and surrounding furniture. The shelf layout should be drawn around the intended objects rather than evenly spaced by default. Lighting connections and access need to be planned before the units are fitted into the recesses."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g45/g45-01-full-view-of-the-illuminated-alcove-pair-beside.webp",
      "alt": "Full view of the illuminated alcove pair beside the fireplace in the rooflit living room",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g45/g45-01-full-view-of-the-illuminated-alcove-pair-beside.webp",
        "alt": "Full view of the illuminated alcove pair beside the fireplace in the rooflit living room",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g45/g45-02-wide-living-room-view-of-the-paired-fitted.webp",
        "alt": "Wide living-room view of the paired fitted alcoves",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g45/g45-03-angled-view-of-the-illuminated-alcoves-and-fireplace.webp",
        "alt": "Angled view of the illuminated alcoves and fireplace",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g45/g45-04-right-hand-alcove-with-illuminated-shelves-and-lower.webp",
        "alt": "Right-hand alcove with illuminated shelves and lower cupboards",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g45/g45-05-closer-view-of-the-right-hand-alcove-beside.webp",
        "alt": "Closer view of the right-hand alcove beside the fireplace",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g45/g45-06-dark-alcove-shelf-cabinet-edge-and-decorative-bowl.webp",
        "alt": "Dark alcove shelf, cabinet edge and decorative bowl detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G46",
    "slug": "london-luxury-salon-joinery",
    "title": "London Luxury Salon Joinery",
    "category": "Bespoke Joinery",
    "location": "London",
    "summary": "A refined salon fit-out combining reception furniture, styling stations, mirrors, storage and architectural joinery in a coordinated commercial interior.",
    "seoDescription": "London luxury salon joinery case study by Form & Frame, featuring reception furniture, styling stations, mirrors, fitted storage and architectural joinery.",
    "keywords": [
      "London salon joinery",
      "luxury salon fit out",
      "bespoke salon furniture",
      "commercial joinery London",
      "reception desk joinery",
      "styling station cabinetry",
      "bespoke commercial interiors"
    ],
    "highlights": [
      "Reception and front-of-house joinery",
      "Bespoke styling stations",
      "Integrated mirrors and storage",
      "Architectural commercial fit-out details"
    ],
    "caseStudy": [
      {
        "heading": "A complete salon joinery scheme",
        "body": [
          "This London project brings together several types of bespoke joinery within one commercial salon interior, including reception furniture, styling stations, storage and architectural fitted elements.",
          "The joinery supports day-to-day salon use while maintaining a consistent material and detailing language across the space."
        ]
      },
      {
        "heading": "The demanding part: repetition with consistency",
        "body": [
          "Commercial interiors often repeat the same functional elements across a larger space. Styling stations, mirrors, cabinetry and service areas therefore need consistent dimensions and alignment so the interior feels controlled rather than repetitive.",
          "That consistency also has to survive installation across multiple wall conditions and circulation zones."
        ]
      },
      {
        "heading": "Storage and service integration",
        "body": [
          "The furniture incorporates practical storage and service functions around the main client-facing areas.",
          "By integrating those requirements into the cabinetry, the salon can keep working equipment accessible without allowing it to dominate the finished appearance."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed fit-out combines practical commercial requirements with a refined furniture-led interior.",
          "For similar salon, hospitality and commercial joinery projects, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-overall-view-01.webp",
      "alt": "Luxury salon joinery interior in London",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-overall-view-01.webp",
        "alt": "Overall view of London luxury salon joinery",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-reception-view-02.webp",
        "alt": "Reception and joinery view",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-room-view-03.webp",
        "alt": "Wide salon interior view",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-station-detail-04.webp",
        "alt": "Styling station detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-cabinetry-view-05.webp",
        "alt": "Fitted salon cabinetry view",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-mirror-detail-06.webp",
        "alt": "Mirror and joinery detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-context-view-07.webp",
        "alt": "Salon room context view",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-storage-view-08.webp",
        "alt": "Service and storage joinery",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-architectural-view-09.webp",
        "alt": "Architectural salon joinery view",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/london-luxury-salon-joinery/london-luxury-salon-detail-10.webp",
        "alt": "Salon material and joinery detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G47",
    "slug": "bespoke-media-wall-display-shelving",
    "title": "Bespoke Fitted Media Wall with Display Shelves",
    "category": "Bespoke Joinery",
    "summary": "A pale fitted media wall with illuminated shelving, textured panels, fine metallic trim and concealed lower storage.",
    "seoDescription": "A pale fitted media wall with illuminated shelving, textured panels, fine metallic trim and concealed lower storage. Explore the close-up details.",
    "keywords": [
      "bespoke fitted media wall with display shelves",
      "bespoke media wall",
      "media wall display shelving",
      "integrated TV wall",
      "illuminated display shelving",
      "bespoke fitted joinery",
      "living room media wall"
    ],
    "highlights": [
      "Integrated television surround",
      "Illuminated display shelving",
      "Concealed lower storage",
      "Full-height fitted composition"
    ],
    "caseStudy": [
      {
        "heading": "A media wall designed as fitted furniture",
        "body": [
          "This project combines the television, display shelving and lower storage into one full-height fitted composition rather than treating each element separately.",
          "The open shelves frame the central media area while the lower cabinetry provides practical concealed storage and keeps the overall elevation visually controlled."
        ]
      },
      {
        "heading": "The demanding part: aligning several visual zones",
        "body": [
          "A media wall like this depends on accurate coordination between the television opening, shelf lines, outer framing and lower cabinet fronts.",
          "Because the arrangement is highly symmetrical and viewed as one large elevation, small inconsistencies in gaps or levels would be immediately visible."
        ]
      },
      {
        "heading": "Integrated lighting and display detail",
        "body": [
          "The shelving incorporates lighting to emphasise displayed objects and add depth to the fitted wall.",
          "The close-up photographs show the relationship between the shelf edges, surrounding panels and lighting details, all of which need to remain cleanly integrated rather than appearing as separate add-ons."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed installation combines media, display and storage functions while maintaining a furniture-led appearance.",
          "For similar bespoke media walls and fitted living-room joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The media wall combines pale wood-grain shelving with inset panels around the television. Fine metallic borders define the screen surround and repeat across the wider frontage. Integrated shelf lighting picks out the grain and the objects on display, while lower cupboards keep everyday items concealed. Several close photographs show how the shelf edges, panel textures and metal strips meet. An open lower front reveals a downward-opening compartment, demonstrating the practical storage behind the otherwise continuous cabinet base."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a detailed media wall, the material junctions deserve attention before manufacture. Grain direction, trim width and the position of lighting channels affect the finished appearance at close range. The television, speakers, sockets and equipment dimensions should be confirmed so that practical access fits within the same design."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g47/g47-01-front-view-of-bespoke-media-wall-with-display.webp",
      "alt": "Front view of bespoke media wall with display shelving",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g47/g47-01-front-view-of-bespoke-media-wall-with-display.webp",
        "alt": "Front view of bespoke media wall with display shelving",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g47/g47-02-overall-view-of-bespoke-media-wall.webp",
        "alt": "Overall view of bespoke media wall",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g47/g47-03-angled-room-view-of-fitted-media-wall.webp",
        "alt": "Angled room view of fitted media wall",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g47/g47-04-display-shelving-beside-integrated-television.webp",
        "alt": "Display shelving beside integrated television",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g47/g47-05-illuminated-display-shelving-detail.webp",
        "alt": "Illuminated display shelving detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g47/g47-06-side-view-of-full-height-media-wall.webp",
        "alt": "Side view of full-height media wall",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g47/g47-07-open-lower-storage-detail-beneath-media-wall.webp",
        "alt": "Open lower storage detail beneath media wall",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g47/g47-08-display-shelf-edge-detail.webp",
        "alt": "Display shelf edge detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g47/g47-09-integrated-shelf-lighting-detail.webp",
        "alt": "Integrated shelf lighting detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g47/g47-10-frame-and-panel-junction-detail.webp",
        "alt": "Frame and panel junction detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g47/g47-11-integrated-television-surround-detail.webp",
        "alt": "Integrated television surround detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G48",
    "slug": "stourcliff-bespoke-media-wall",
    "title": "Bespoke TV Wall with Mirrored Display Shelves",
    "category": "Bespoke Joinery",
    "summary": "Fitted living-room TV wall with wood-grain cupboards, mirrored display shelves and coordinated drawers.",
    "seoDescription": "Fitted living-room TV wall with wood-grain cupboards, mirrored display shelves and coordinated drawers. View the joinery and cabinet details.",
    "keywords": [
      "bespoke tv wall with mirrored display shelves",
      "Stourcliff bespoke media wall",
      "bespoke TV wall",
      "dark fitted media unit",
      "reflective display cabinetry",
      "bespoke living room joinery",
      "fitted TV cabinetry"
    ],
    "highlights": [
      "Integrated television surround",
      "Reflective display sections",
      "Lower drawer storage",
      "Full-height fitted cabinetry"
    ],
    "caseStudy": [
      {
        "heading": "A fitted media wall built as one composition",
        "body": [
          "This project brings the television, display sections and lower storage together within one continuous fitted elevation.",
          "The darker cabinetry gives the wall a strong architectural presence while the reflective sections introduce contrast and depth around the media area."
        ]
      },
      {
        "heading": "The demanding part: controlling alignment",
        "body": [
          "The front elevation relies on consistent vertical lines, drawer gaps and panel junctions across a wide fitted installation.",
          "Because the television, display areas and storage all sit within the same composition, inaccurate setting out would be immediately visible across the finished wall."
        ]
      },
      {
        "heading": "Display and concealed storage",
        "body": [
          "Reflective display sections sit above the lower cabinetry while drawers provide concealed storage beneath.",
          "The close-up photographs show how the cabinet frames, worktop-level surfaces and surrounding panels meet cleanly at their junctions."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed media wall combines entertainment, display and storage functions in a single fitted piece with a controlled, furniture-led appearance.",
          "For similar media walls and fitted living-room joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The television is framed by fitted cabinetry with reflective display shelving above and to the sides. A warm grey wood-grain finish links the lower cupboards, screen surround and tall upper sections. The reflective backing keeps the display area lighter than a solid wall of cabinets, while the lower fronts provide a calm base. Close photographs show a drawer open beneath the screen, framed door details and the junction between an upright panel and a shelf. The full room view explains how the media wall relates to the adjacent dining area."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A TV wall can provide display and storage without giving every section the same treatment. Mirrored backing, open shelves and closed fronts each have a different role. Planning around the viewing position and actual equipment helps establish where those changes should occur and where access will be needed later."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g48/g48-01-front-view-of-bespoke-media-wall.webp",
      "alt": "Front view of bespoke media wall",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g48/g48-01-front-view-of-bespoke-media-wall.webp",
        "alt": "Front view of bespoke media wall",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g48/g48-02-overall-living-room-view-of-bespoke-media-wall.webp",
        "alt": "Overall living room view of bespoke media wall",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g48/g48-03-media-wall-display-and-television-surround-detail.webp",
        "alt": "Media wall display and television surround detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g48/g48-04-reflective-display-cabinetry-detail.webp",
        "alt": "Reflective display cabinetry detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g48/g48-05-lower-drawer-and-cabinet-detail.webp",
        "alt": "Lower drawer and cabinet detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g48/g48-06-cabinet-and-panel-junction-detail.webp",
        "alt": "Cabinet and panel junction detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G49",
    "slug": "stourcliff-mirrored-wardrobes",
    "title": "Bespoke Mirrored Fitted Bedroom Wardrobes",
    "category": "Bespoke Joinery",
    "summary": "Full-height fitted bedroom wardrobes with mirrored centre doors, pale side panels and contrasting borders, coordinated with bedside furniture.",
    "seoDescription": "Full-height fitted bedroom wardrobes with mirrored centre doors, pale side panels and contrasting borders, coordinated with bedside furniture.",
    "keywords": [
      "bespoke mirrored fitted bedroom wardrobes",
      "mirrored fitted wardrobes",
      "bespoke bedroom wardrobes",
      "full height wardrobes",
      "mirrored wardrobe doors",
      "fitted bedroom joinery",
      "Stourcliff wardrobes"
    ],
    "highlights": [
      "Full-height fitted wardrobes",
      "Mirrored door fronts",
      "Controlled panel alignment",
      "Integrated bedroom joinery"
    ],
    "caseStudy": [
      {
        "heading": "Full-height fitted wardrobe composition",
        "body": [
          "This bedroom installation uses full-height mirrored wardrobe fronts to create storage while keeping the fitted elevation visually light.",
          "The mirrored doors reflect the surrounding room, so their alignment, proportions and relationship with the adjacent panels are especially visible in the finished result."
        ]
      },
      {
        "heading": "The demanding part: maintaining consistent lines",
        "body": [
          "A mirrored wardrobe exposes even small inconsistencies because reflections make misaligned door edges and uneven gaps easier to notice.",
          "The installation therefore depends on careful setting out, consistent door spacing and accurate junctions where the fitted furniture meets the surrounding room."
        ]
      },
      {
        "heading": "Mirrored fronts and fitted detailing",
        "body": [
          "The close-up views show how the mirrored fronts sit within the wider fitted composition rather than reading as separate freestanding pieces.",
          "Keeping the door lines controlled allows the reflective surfaces to remain the dominant visual feature without distracting irregular gaps or panel transitions."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed wardrobes provide substantial concealed storage with a restrained, integrated appearance.",
          "For similar fitted wardrobes and bedroom joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The fitted wardrobe frontage combines mirrored centre doors with pale outer panels. Narrow contrasting borders define the full-height arrangement without adding heavy decoration. The room photographs show how the mirrors reflect the bed and increase the sense of depth across the bedroom. A separate close view records the coordinating bedside furniture rather than the wardrobe interior. Together, the images show the relationship between the large fitted storage wall and the smaller pieces around the bed."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Mirrored wardrobes should be designed around both storage and the view they reflect. Door widths, opening clearances and the distance to the bed all need checking. The internal hanging and drawer layout can be specified independently of the mirror pattern, so that the practical storage suits the person using it."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g49/g49-01-front-view-of-mirrored-wardrobes.webp",
      "alt": "Front view of mirrored wardrobes",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g49/g49-01-front-view-of-mirrored-wardrobes.webp",
        "alt": "Front view of mirrored wardrobes",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g49/g49-02-overall-view-of-full-height-mirrored-wardrobes.webp",
        "alt": "Overall view of full-height mirrored wardrobes",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g49/g49-03-mirrored-wardrobe-door-detail.webp",
        "alt": "Mirrored wardrobe door detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g49/g49-04-full-front-view-of-fitted-wardrobes-with-mirrored.webp",
        "alt": "Full front view of fitted wardrobes with mirrored centre doors and pale outer panels",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g49/g49-05-coordinating-bedside-table-beside-the-upholstered-headboard.webp",
        "alt": "Coordinating bedside table beside the upholstered headboard",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G50",
    "slug": "stourcliff-dressing-table",
    "title": "Bespoke Fitted Dressing Table with Drawers",
    "category": "Bespoke Joinery",
    "summary": "A pale fitted dressing table beneath a bedroom window, with twin drawer banks, metallic handles and decorative grille-fronted side cupboards.",
    "seoDescription": "A pale fitted dressing table beneath a bedroom window, with twin drawer banks, metallic handles and decorative grille-fronted side cupboards.",
    "keywords": [
      "bespoke fitted dressing table with drawers",
      "bespoke dressing table",
      "fitted dressing table",
      "bedroom drawer storage",
      "bespoke bedroom joinery",
      "fitted bedroom furniture",
      "Stourcliff dressing table"
    ],
    "highlights": [
      "Fitted bedroom dressing table",
      "Integrated drawer storage",
      "Clean horizontal alignment",
      "Detailed fitted joinery"
    ],
    "caseStudy": [
      {
        "heading": "A fitted dressing table for the bedroom",
        "body": [
          "This project uses a fitted dressing table to provide a dedicated surface and integrated drawer storage within the bedroom.",
          "The furniture is kept visually restrained, with the storage contained within a simple fitted composition rather than reading as a separate freestanding piece."
        ]
      },
      {
        "heading": "The demanding part: drawer and surface alignment",
        "body": [
          "The clean appearance depends on consistent drawer gaps, straight horizontal lines and accurate setting out across the fitted unit.",
          "Small discrepancies would be particularly visible across the long front elevation, so final adjustment and controlled junctions are important to the finished result."
        ]
      },
      {
        "heading": "Practical storage without visual weight",
        "body": [
          "The drawers provide everyday concealed storage while the upper surface remains open for use as a dressing area.",
          "The close-up photography shows the relationship between the drawer fronts, surrounding panels and adjoining surfaces."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed piece provides useful bedroom storage while remaining compact and integrated with the room.",
          "For similar dressing tables and fitted bedroom furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The dressing table makes use of the wall beneath the window, placing a seated surface between two drawer banks. Grille-fronted side sections extend the composition towards the walls, while the shallow drawers keep smaller items close to hand. The pale fronts and slim metallic handles coordinate with the surrounding bedroom furniture. A close view of an open drawer reveals the clearances at the worktop and the relationship between the drawer front and adjacent grille. The overall arrangement keeps the centre open for a chair."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a window-side dressing table, the sill height and daylight are useful starting points. The seated surface, mirror arrangement and drawer projection should be tested together. Any services or heating behind the side sections must remain accessible, with their requirements confirmed before the cabinet construction is agreed."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g50/g50-01-front-view-of-dressing-table.webp",
      "alt": "Front view of dressing table",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g50/g50-01-front-view-of-dressing-table.webp",
        "alt": "Front view of dressing table",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g50/g50-02-overall-view-of-fitted-dressing-table.webp",
        "alt": "Overall view of fitted dressing table",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g50/g50-03-dressing-table-drawer-and-joinery-detail.webp",
        "alt": "Dressing table drawer and joinery detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G51",
    "slug": "stourcliff-fitted-wardrobe-shoe-storage",
    "title": "Bespoke Fitted Wardrobe & Pull-Out Shoe Storage",
    "category": "Bespoke Joinery",
    "summary": "Pale fitted wardrobe with panelled doors, internal drawers and shelves, plus a separate shoe cupboard with pull-out racks.",
    "seoDescription": "Pale fitted wardrobe with panelled doors, internal drawers and shelves, plus a separate shoe cupboard with pull-out racks. View both storage layouts.",
    "keywords": [
      "bespoke fitted wardrobe & pull-out shoe storage",
      "fitted wardrobe",
      "shoe storage",
      "bespoke bedroom storage",
      "built in wardrobe",
      "fitted shoe storage",
      "Stourcliff bedroom joinery"
    ],
    "highlights": [
      "Full-height fitted wardrobe",
      "Panelled doors concealing shelves and drawers",
      "Coordinated shoe-storage cupboard",
      "Pull-out shoe shelving"
    ],
    "caseStudy": [
      {
        "heading": "A fitted wardrobe with a calm exterior",
        "body": [
          "Closed panelled doors form the main wardrobe elevation in this bedroom. The next photograph opens the doors to show the shelves and drawers within, making the relationship between the finished exterior and its practical storage clear."
        ]
      },
      {
        "heading": "Clothing and shoe storage",
        "body": [
          "A separate fitted cupboard beneath the window provides dedicated shoe storage. Its doors open to reveal rows of footwear on pull-out shelves, with closer views showing the shelf arrangement and cabinet details.",
          "For a similar wardrobe, the balance of hanging space, shelves and drawers can be planned around what you need to store, while door clearances and the surrounding room guide the layout."
        ]
      },
      {
        "heading": "Planning your wardrobe",
        "body": [
          "Share room photographs, approximate dimensions and your storage priorities. Form & Frame can review the wardrobe layout, technical details and fitting requirements before confirming the project scope."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The closed wardrobe presents a quiet wall of pale panelled doors. Open views reveal a storage layout focused on folded clothing, with full-width shelves above and several drawers below. A separate cupboard beneath the window contains angled pull-out shoe shelves, making individual pairs easier to see and reach. The close photographs show the shelf lips, grain and hinge arrangement inside the shoe cupboard. These two pieces share a room but serve different needs, demonstrating the value of planning each storage area around its contents."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A fitted wardrobe need not be dominated by hanging rails. An inventory of folded clothes, accessories and footwear can lead to a more useful combination of shelves, drawers and dedicated shoe storage. Pull-out components need clear space in front, so their operation should be checked alongside the room layout."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g51/g51-01-closed-doors-on-the-full-height-fitted-wardrobe.webp",
      "alt": "Closed doors on the full-height fitted wardrobe",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g51/g51-01-closed-doors-on-the-full-height-fitted-wardrobe.webp",
        "alt": "Closed doors on the full-height fitted wardrobe",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g51/g51-02-open-wardrobe-doors-showing-fitted-shelves-and-drawers.webp",
        "alt": "Open wardrobe doors showing fitted shelves and drawers",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g51/g51-03-open-shoe-cupboard-beneath-the-window.webp",
        "alt": "Open shoe cupboard beneath the window",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g51/g51-04-pull-out-shoe-shelves-inside-the-fitted-cupboard.webp",
        "alt": "Pull-out shoe shelves inside the fitted cupboard",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g51/g51-05-close-view-of-the-shoe-shelves-and-cabinet.webp",
        "alt": "Close view of the shoe shelves and cabinet hinge",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G52",
    "slug": "stourcliff-bathroom-vanity-storage",
    "title": "Bespoke Floating Bathroom Vanity & Storage",
    "category": "Bespoke Joinery",
    "summary": "Wall-mounted bathroom vanity with dark grain drawer fronts, mirrored storage and a pale basin surface.",
    "seoDescription": "Wall-mounted bathroom vanity with dark grain drawer fronts, mirrored storage and a pale basin surface. Explore the fitted bathroom furniture.",
    "keywords": [
      "bespoke floating bathroom vanity & storage",
      "bespoke bathroom vanity",
      "fitted bathroom storage",
      "bathroom cabinetry",
      "bespoke vanity unit",
      "bathroom joinery",
      "Stourcliff bathroom furniture"
    ],
    "highlights": [
      "Fitted vanity cabinetry",
      "Coordinated bathroom storage",
      "Integrated concealed storage",
      "Precise panel and surface junctions"
    ],
    "caseStudy": [
      {
        "heading": "Vanity and storage designed together",
        "body": [
          "This bathroom scheme combines the vanity area with fitted storage so the practical elements read as one coordinated furniture installation.",
          "Keeping the pieces visually related helps the bathroom feel controlled while still providing useful concealed storage."
        ]
      },
      {
        "heading": "The demanding part: fitting around fixed bathroom elements",
        "body": [
          "Bathroom furniture has to work accurately around walls, surfaces and sanitary fittings, leaving little tolerance for inconsistent gaps or poorly resolved edges.",
          "Careful setting out is therefore important at the junctions between cabinet fronts, adjoining surfaces and surrounding finishes."
        ]
      },
      {
        "heading": "Storage within a compact footprint",
        "body": [
          "The cabinetry provides practical storage without relying on freestanding furniture that would interrupt the room.",
          "The detail photographs show how the vanity and adjacent fitted elements maintain consistent lines across the installation."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed scheme gives the bathroom a furniture-led appearance while keeping everyday storage integrated and accessible.",
          "For similar bathroom vanities and fitted storage, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The floating vanity uses dark horizontal grain beneath a pale basin surface. Leaving the floor clear below helps the compact bathroom feel less crowded, while the broad drawer fronts provide storage close to the basin. Mirrored wall storage sits above, coordinating the practical furniture with the room layout. The photographs include the vanity from the doorway and a close view of a pale counter-to-cabinet junction. These views show the relationship between the joinery, shower enclosure and surrounding sanitary fittings."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Bathroom furniture requires an agreed specification for moisture exposure, edges and maintenance. Basin waste positions can affect drawer depth and internal layout, so they should be checked before production. A wall-mounted cabinet also needs suitable support and a practical way to reach plumbing connections without disturbing the finished room."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g52/g52-01-floating-bathroom-vanity-beside-the-glass-shower-enclosure.webp",
      "alt": "Floating bathroom vanity beside the glass shower enclosure",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g52/g52-01-floating-bathroom-vanity-beside-the-glass-shower-enclosure.webp",
        "alt": "Floating bathroom vanity beside the glass shower enclosure",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g52/g52-02-overall-view-of-fitted-bathroom-vanity.webp",
        "alt": "Overall view of fitted bathroom vanity",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g52/g52-03-doorway-view-of-the-dark-grain-vanity-and.webp",
        "alt": "Doorway view of the dark grain vanity and mirrored bathroom storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g52/g52-04-front-view-of-the-wall-mounted-vanity-beneath.webp",
        "alt": "Front view of the wall-mounted vanity beneath mirrored storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g52/g52-05-close-junction-between-the-pale-counter-and-cabinet.webp",
        "alt": "Close junction between the pale counter and cabinet front",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G54",
    "slug": "stourcliff-bespoke-radiator-cover",
    "title": "Bespoke Radiator Cover with Decorative Grille",
    "category": "Bespoke Joinery",
    "summary": "A made-to-measure radiator cover beneath a window, with a dark diamond grille, metallic border and integrated top ventilation detail.",
    "seoDescription": "A made-to-measure radiator cover beneath a window, with a dark diamond grille, metallic border and integrated top ventilation detail.",
    "keywords": [
      "bespoke radiator cover with decorative grille",
      "bespoke radiator cover",
      "fitted radiator cover",
      "window radiator cover",
      "bespoke window ledge",
      "fitted living room joinery",
      "Stourcliff radiator cover"
    ],
    "highlights": [
      "Fitted radiator enclosure",
      "Integrated window ledge",
      "Ventilated front panel",
      "Precise wall and window junctions"
    ],
    "caseStudy": [
      {
        "heading": "A fitted radiator cover beneath the window",
        "body": [
          "This piece integrates the radiator into the room by enclosing it within fitted joinery and extending the top into a practical ledge beneath the window.",
          "The result is more architectural than a freestanding cover because the furniture follows the width and proportions of the opening."
        ]
      },
      {
        "heading": "The demanding part: fitting around an existing opening",
        "body": [
          "Radiator covers beneath windows need accurate setting out so the top, side panels and ventilation area all sit cleanly within the surrounding wall geometry.",
          "The installation also has to maintain enough clearance around the radiator while keeping the visible gaps and edges controlled."
        ]
      },
      {
        "heading": "Ventilation and visual integration",
        "body": [
          "The front panel allows heat to circulate while concealing the radiator itself.",
          "By aligning the cover closely with the window opening and surrounding surfaces, the piece reads as part of the room rather than an added accessory."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed radiator cover creates a cleaner wall elevation and adds a useful ledge without interrupting the room.",
          "For similar radiator covers, window seats and fitted architectural joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The radiator cover sits beneath the window and aligns with the sill zone, making the heating enclosure part of the room joinery. A dark diamond-pattern grille forms the front, bordered by a warm metallic frame. The close photograph shows a separate ventilation grille in the top surface beside the curtain. The contrast between the open patterned front and the solid perimeter gives the cover a decorative role while leaving the enclosure visually lighter than a full cupboard."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A radiator cover must be designed around the heating appliance rather than treated as a sealed storage cabinet. Airflow, valve access, safe clearances and a removable maintenance arrangement need checking for the specific installation. Its depth should also work with curtains, skirting and the window position."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g54/g54-01-overall-view-of-bespoke-radiator-cover-beneath-window.webp",
      "alt": "Overall view of bespoke radiator cover beneath window",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g54/g54-01-overall-view-of-bespoke-radiator-cover-beneath-window.webp",
        "alt": "Overall view of bespoke radiator cover beneath window",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g54/g54-02-radiator-cover-and-integrated-window-ledge-detail.webp",
        "alt": "Radiator cover and integrated window ledge detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G55",
    "slug": "stourcliff-recessed-display-niche",
    "title": "Bespoke Illuminated Recessed Display Niche",
    "category": "Bespoke Joinery",
    "summary": "A recessed display niche with dark grain framing, glass shelves and integrated lighting, fitted above a wall control panel.",
    "seoDescription": "A recessed display niche with dark grain framing, glass shelves and integrated lighting, fitted above a wall control panel.",
    "keywords": [
      "bespoke illuminated recessed display niche",
      "recessed display niche",
      "illuminated display niche",
      "bespoke display shelving",
      "built in display cabinet",
      "architectural joinery detail",
      "Stourcliff bespoke joinery"
    ],
    "highlights": [
      "Recessed wall integration",
      "Integrated display lighting",
      "Fitted display shelving",
      "Compact architectural joinery feature"
    ],
    "caseStudy": [
      {
        "heading": "A compact built-in display feature",
        "body": [
          "This project is a small but distinct piece of fitted joinery: a recessed display niche integrated directly into the surrounding wall.",
          "The shelving and lighting are contained within the opening so the feature reads as part of the architecture rather than as freestanding furniture."
        ]
      },
      {
        "heading": "The demanding part: precise wall integration",
        "body": [
          "A recessed feature depends on accurate setting out because the outer frame, shelf positions and surrounding wall lines are all visible at once.",
          "The fitted opening therefore needs controlled margins and clean junctions so the niche remains visually balanced."
        ]
      },
      {
        "heading": "Display lighting and shelving",
        "body": [
          "Integrated lighting gives the niche depth and draws attention to the objects placed on the shelves.",
          "The result is a practical display area that adds interest without projecting into the room."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed niche provides a focused display feature within a compact footprint.",
          "For similar recessed displays and architectural joinery details, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "A small wall recess becomes a display cabinet through a dark, deep frame and two glass shelves. Lighting at the top draws attention to the objects while the glass leaves the back panel visible. The joinery is set above a wall control panel and within an already decorated surface, so the surrounding proportions matter as much as the cabinet itself."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A recessed display niche needs enough wall depth for the frame, objects and lighting. The size of the intended pieces determines shelf spacing, while the weight influences the shelf and fixing specification. Access to the light source and any nearby services should be included in the design so that maintenance does not damage the surrounding finish."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g55/g55-01-recessed-illuminated-display-niche-with-fitted-shelving.webp",
      "alt": "Recessed illuminated display niche with fitted shelving",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g55/g55-01-recessed-illuminated-display-niche-with-fitted-shelving.webp",
        "alt": "Recessed illuminated display niche with fitted shelving",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G35",
    "slug": "belgravia-kids-room-home-office-furniture",
    "title": "Belgravia Bespoke Bedroom Bookcases & Storage",
    "category": "Bespoke Joinery",
    "summary": "Bespoke bedroom bookcases in Belgravia with overhead cupboards, fitted bedside drawers and a coordinated bed surround in a warm wood-grain finish.",
    "seoDescription": "Bespoke bedroom bookcases in Belgravia with overhead cupboards, fitted bedside drawers and a coordinated bed surround in a warm wood-grain finish.",
    "keywords": [
      "belgravia bespoke bedroom bookcases & storage",
      "Belgravia bed wall",
      "fitted bedroom bookcases",
      "overhead bedroom cupboards",
      "bespoke bedside storage"
    ],
    "highlights": [
      "Bookcases flanking the bed",
      "Overhead cupboards",
      "Bedside drawers",
      "Coordinated fitted wall"
    ],
    "caseStudy": [
      {
        "heading": "Storage around the bed",
        "body": [
          "The fitted wall brings tall bookcases, overhead cupboards and bedside storage together around the headboard. The overall view shows the arrangement as one piece of bedroom furniture."
        ]
      },
      {
        "heading": "Accessible books and drawers",
        "body": [
          "Open shelving keeps books within reach while the lower drawers provide enclosed bedside storage. The drawer photograph shows the available compartments. The wardrobe and window desk in the same room now have separate galleries."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The furniture wraps around the bed to combine a headboard setting, bedside storage and a pair of tall bookcases. Glossy upper cupboards bridge between the shelving towers, using the wall above the bed without bringing storage into the floor area. The grain gives the different elements a shared character, while the pale padded centre creates a softer background at pillow height. An open drawer photograph reveals the bedside storage beneath the bookcase and shows how the bedside surface remains accessible from the bed."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A bed-wall design needs to be set out around the mattress, bedside reach and the items used every day. Reading lights, switches and socket positions should be agreed with the furniture layout. Overhead storage also needs a practical opening arrangement and a height that suits the room, with clear space around the headboard."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g35/g35-01-full-fitted-bed-wall-with-tall-bookcases-overhead.webp",
      "alt": "Full fitted bed wall with tall bookcases, overhead cupboards and bedside storage",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g35/g35-01-full-fitted-bed-wall-with-tall-bookcases-overhead.webp",
        "alt": "Full fitted bed wall with tall bookcases, overhead cupboards and bedside storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g35/g35-02-angled-view-of-the-bedroom-bookcases-and-cupboards.webp",
        "alt": "Angled view of the bedroom bookcases and cupboards around the bed",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g35/g35-03-open-bedside-drawers-beneath-the-fitted-bedroom-bookcase.webp",
        "alt": "Open bedside drawers beneath the fitted bedroom bookcase",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  },
  {
    "galleryId": "G36",
    "slug": "belgravia-bathroom-furniture-antique-mirror",
    "title": "Belgravia Bespoke Floating Cloakroom Vanity",
    "category": "Bespoke Joinery",
    "summary": "Dark floating cloakroom vanity in Belgravia with a glossy grain finish, fine metallic detailing and a decorative countertop basin.",
    "seoDescription": "Dark floating cloakroom vanity in Belgravia with a glossy grain finish, fine metallic detailing and a decorative countertop basin.",
    "keywords": [
      "belgravia bespoke floating cloakroom vanity",
      "Belgravia cloakroom vanity",
      "decorative bowl basin cabinet",
      "floating bathroom vanity",
      "bespoke cloakroom furniture"
    ],
    "highlights": [
      "Dark floating cabinet",
      "Decorative countertop basin",
      "Patterned reflective surroundings"
    ],
    "caseStudy": [
      {
        "heading": "A compact cloakroom focal point",
        "body": [
          "The dark cabinet supports a decorative bowl basin within a narrow cloakroom. The floating installation leaves the floor visible below, while the patterned surrounding surfaces frame the basin."
        ]
      },
      {
        "heading": "Overall and doorway views",
        "body": [
          "The front photograph shows the complete vanity. The doorway view establishes its position within the cloakroom."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "A compact wall-mounted cabinet sits beneath the decorative bowl basin, leaving the floor visible below. The dark frontage has a pronounced horizontal grain and reflective finish, contrasting with the patterned walls and pale basin. Fine metallic lines define the front without the visual weight of large projecting handles. The doorway view shows how closely the vanity fits the narrow room. Its modest width makes the surface finish and the alignment around the basin especially noticeable."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a small cloakroom, the depth of the cabinet matters as much as its width. Basin dimensions, tap reach and plumbing routes should be checked against the circulation space. The final material and coating specification must suit the bathroom environment, with access to services included in the cabinet design."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g36/g36-01-dark-floating-cloakroom-vanity-beneath-a-decorative-bowl.webp",
      "alt": "Dark floating cloakroom vanity beneath a decorative bowl basin and patterned wall",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g36/g36-01-dark-floating-cloakroom-vanity-beneath-a-decorative-bowl.webp",
        "alt": "Dark floating cloakroom vanity beneath a decorative bowl basin and patterned wall",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g36/g36-02-doorway-view-of-the-dark-cloakroom-vanity-and.webp",
        "alt": "Doorway view of the dark cloakroom vanity and decorative basin",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  },
  {
    "galleryId": "G37",
    "slug": "belgravia-walk-in-wardrobe",
    "title": "Belgravia Bespoke Walk-In Wardrobe",
    "category": "Bespoke Joinery",
    "location": "Belgravia, London",
    "summary": "Luxury walk-in wardrobe in Belgravia with illuminated glass display shelves, dark fitted storage and carefully integrated metallic details.",
    "seoDescription": "Luxury walk-in wardrobe in Belgravia with illuminated glass display shelves, dark fitted storage and carefully integrated metallic details.",
    "keywords": [
      "belgravia bespoke walk-in wardrobe",
      "Belgravia walk-in wardrobe",
      "bespoke wardrobe London",
      "illuminated wardrobe storage",
      "metallic inlay wardrobe",
      "luxury fitted wardrobe",
      "bespoke dressing room"
    ],
    "highlights": [
      "Full walk-in wardrobe layout",
      "Illuminated display storage",
      "Brass inlay detailing",
      "Integrated handle details"
    ],
    "caseStudy": [
      {
        "heading": "A fitted walk-in wardrobe scheme",
        "body": [
          "This Belgravia walk-in wardrobe is arranged as a fitted storage environment rather than a series of freestanding pieces.",
          "The overall view shows tall cabinetry and illuminated display storage working together within the room."
        ]
      },
      {
        "heading": "The demanding part: combining storage and decorative detailing",
        "body": [
          "The installation brings together full-height cabinetry, display sections and smaller decorative details, so alignment has to remain consistent across several types of storage.",
          "The wardrobe also relies on clean junctions where darker timber surfaces meet metal-trimmed details and integrated handles."
        ]
      },
      {
        "heading": "Lighting, metallic detailing and handle details",
        "body": [
          "The closer photographs show illuminated storage, fine metallic inlay and cut-out handle detailing.",
          "These elements add definition to the fitted furniture while remaining integrated into the overall wardrobe composition."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed walk-in wardrobe combines practical storage with a more refined furniture-led finish.",
          "For similar wardrobes and dressing-room joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "This dressing-room joinery combines dark full-height cabinetry with glass-fronted display storage. Narrow lines of light frame the shelves, making handbags and accessories visible against the darker surfaces. The detail images show shaped cut-outs in the glazing, recessed fittings and a faceted finger opening in a drawer front. Reflective panels and the overhead rooflight give the room a changing appearance throughout the day. These close photographs are especially useful for understanding the handles and material junctions that are less apparent in the overall room view."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A luxury dressing room benefits from a storage plan that distinguishes everyday clothing from display pieces. Glazed compartments, drawers and hanging sections each have different access needs. Lighting, door clearances and the protection of delicate items should be considered together when the internal layout and finish schedule are agreed."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g37/g37-01-overall-belgravia-walk-in-wardrobe-view.webp",
      "alt": "Overall Belgravia walk-in wardrobe view",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g37/g37-01-overall-belgravia-walk-in-wardrobe-view.webp",
        "alt": "Overall Belgravia walk-in wardrobe view",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g37/g37-02-glass-wardrobe-doors-with-shaped-finger-openings-and.webp",
        "alt": "Glass wardrobe doors with shaped finger openings and illuminated accessory shelves",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g37/g37-03-illuminated-wardrobe-display-storage.webp",
        "alt": "Illuminated wardrobe display storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g37/g37-04-recessed-metallic-fitting-at-the-edge-of-the.webp",
        "alt": "Recessed metallic fitting at the edge of the dark wardrobe panel",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g37/g37-05-shaped-metallic-inset-detail-within-the-wardrobe-frontage.webp",
        "alt": "Shaped metallic inset detail within the wardrobe frontage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g37/g37-06-integrated-cut-out-handle-detail.webp",
        "alt": "Integrated cut-out handle detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G38",
    "slug": "belgravia-dining-room-tv-furniture",
    "title": "Belgravia Bespoke Dining Display Cabinets",
    "category": "Bespoke Joinery",
    "summary": "Fitted dining-room display cabinets in Belgravia with illuminated shelves, glossy wood-grain surfaces and textured inset panels.",
    "seoDescription": "Fitted dining-room display cabinets in Belgravia with illuminated shelves, glossy wood-grain surfaces and textured inset panels.",
    "keywords": [
      "belgravia bespoke dining display cabinets",
      "Belgravia dining cabinetry",
      "illuminated display cabinet",
      "bespoke dining storage",
      "textured cabinet panels"
    ],
    "highlights": [
      "Illuminated display shelves",
      "Tall glossy cabinetry",
      "Enclosed lower storage",
      "Textured inset surfaces"
    ],
    "caseStudy": [
      {
        "heading": "Display furniture for the dining area",
        "body": [
          "Tall display cabinetry provides a backdrop to the dining table. The open illuminated shelves contrast with the glossy surrounding fronts and enclosed storage."
        ]
      },
      {
        "heading": "Storage and surface details",
        "body": [
          "The open-door view reveals storage behind the tall fronts, while closer photographs show textured inset surfaces and lit shelves. The living-room TV wall is recorded separately so each installation can be explored on its own."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "Tall fitted cabinets frame the dining space with a combination of illuminated display and closed storage. The glossy wood-grain surfaces reflect the windows and ceiling lighting, while lighter textured inset panels give the central compartments a more subdued background. Open cupboard views show practical shelving behind the decorative frontage. A close photograph records the surface texture and its junction with the surrounding frame. In the wider room, the cabinetry relates to the window shutters and table, keeping the dining and living areas visually connected."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Dining-room cabinetry should make space for both display objects and the items used when entertaining. Glassware, serving dishes and table accessories benefit from different shelf depths and heights. It is worth deciding which pieces stay visible and which need doors before choosing the balance of open shelves, glazing and cupboards."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g38/g38-01-front-view-of-illuminated-dining-display-shelves-above.webp",
      "alt": "Front view of illuminated dining display shelves above the table",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g38/g38-01-front-view-of-illuminated-dining-display-shelves-above.webp",
        "alt": "Front view of illuminated dining display shelves above the table",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g38/g38-02-full-dining-room-view-with-tall-fitted-display.webp",
        "alt": "Full dining-room view with tall fitted display cabinetry",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g38/g38-03-closed-glossy-dining-storage-beside-the-table.webp",
        "alt": "Closed glossy dining storage beside the table",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g38/g38-04-open-tall-dining-cupboard-revealing-shelves-and-stored.webp",
        "alt": "Open tall dining cupboard revealing shelves and stored items",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g38/g38-05-textured-inset-panel-within-the-dining-cabinetry.webp",
        "alt": "Textured inset panel within the dining cabinetry",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g38/g38-06-illuminated-dining-display-shelves-beside-the-window-shutters.webp",
        "alt": "Illuminated dining display shelves beside the window shutters",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  },
  {
    "galleryId": "G39",
    "slug": "belgravia-master-bedroom-furniture",
    "title": "Belgravia Bespoke Bedroom TV Wall & Dressing Table",
    "category": "Bespoke Joinery",
    "summary": "Bespoke bedroom media wall in Belgravia, with high-gloss cabinetry, concealed storage and a lit dressing-table recess beside the television.",
    "seoDescription": "Bespoke bedroom media wall in Belgravia, with high-gloss cabinetry, concealed storage and a lit dressing-table recess beside the television.",
    "keywords": [
      "belgravia bespoke bedroom tv wall & dressing table",
      "Belgravia bedroom TV wall",
      "fitted dressing table",
      "bedroom media cabinet",
      "bespoke bedroom joinery"
    ],
    "highlights": [
      "Integrated television opening",
      "Dressing table beside the TV",
      "Overhead cupboards",
      "Coordinated drawers and stool space"
    ],
    "caseStudy": [
      {
        "heading": "Television and dressing space together",
        "body": [
          "The fitted wall combines a large television opening with a dressing table to one side. Glossy panels and overhead cupboards continue across the installation, connecting its separate functions."
        ]
      },
      {
        "heading": "Wider views and furniture details",
        "body": [
          "The room photographs show the wall opposite the bed. Closer views record the dressing surface, drawer and stool space."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The television and dressing table share one full-height wall of glossy wood-grain cabinetry. A lit recess gives the dressing surface its own defined space alongside the screen. The shallow drawer opens above the stool position, keeping smaller items accessible without needing a separate chest of drawers. Reflections across the upper doors emphasise the continuous frontage, while the lower grain and panel divisions carry through both parts of the furniture. A top grille is visible within the composition and forms part of the overall setting-out."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Combining a TV unit and dressing table requires attention to seated height, mirror position and the space for a stool. The lighting should support close tasks as well as the appearance of the room. Equipment and service access need to be agreed before the cabinet divisions and finish are fixed."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g39/g39-01-overall-bedroom-tv-wall-with-glossy-cupboards-and.webp",
      "alt": "Overall bedroom TV wall with glossy cupboards and an illuminated dressing table",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g39/g39-01-overall-bedroom-tv-wall-with-glossy-cupboards-and.webp",
        "alt": "Overall bedroom TV wall with glossy cupboards and an illuminated dressing table",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g39/g39-02-angled-room-view-of-the-tv-wall-and.webp",
        "alt": "Angled room view of the TV wall and dressing table",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g39/g39-03-fitted-dressing-table-with-an-open-drawer-beside.webp",
        "alt": "Fitted dressing table with an open drawer beside the television",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g39/g39-04-bedroom-view-towards-the-fitted-tv-wall-and.webp",
        "alt": "Bedroom view towards the fitted TV wall and dressing area",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g39/g39-05-stool-tucked-beneath-the-fitted-dressing-table.webp",
        "alt": "Stool tucked beneath the fitted dressing table",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  },
  {
    "galleryId": "G41",
    "slug": "esher-luxury-residence-walk-in-wardrobe",
    "title": "Esher Bespoke Dark Walk-In Wardrobe",
    "category": "Bespoke Joinery",
    "summary": "A bespoke walk-in wardrobe in Esher with dark textured fronts, metallic pull handles and illuminated hanging, shelf and drawer storage.",
    "seoDescription": "A bespoke walk-in wardrobe in Esher with dark textured fronts, metallic pull handles and illuminated hanging, shelf and drawer storage.",
    "keywords": [
      "esher bespoke dark walk-in wardrobe",
      "Esher walk in wardrobe",
      "dark fitted dressing room",
      "bespoke wardrobe shelving",
      "wardrobe drawers"
    ],
    "highlights": [
      "Dark fitted wardrobe cabinetry",
      "Open hanging space",
      "Shelves and drawers",
      "Metallic handle details"
    ],
    "caseStudy": [
      {
        "heading": "A dark fitted dressing room",
        "body": [
          "The wardrobe arranges open hanging space, shelving and drawers around the dressing area. Dark cabinetry gives the fitted storage a consistent appearance across the room."
        ]
      },
      {
        "heading": "Storage and finishing details",
        "body": [
          "The photographs show the overall wardrobe arrangement and its smaller fittings. The pale entrance wardrobe and decorative mirrored wardrobes at the same residence are different installations and now have their own galleries."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The wardrobe uses a deeply textured, dark grain across full-height fronts and surrounding panels. Broad rectangular metallic pulls create a strong contrast at the door edges. With the cabinetry open, the internal layout combines hanging space, folded storage and drawers, supported by integrated lighting. Close photographs show the handle surround and a pale interior fitting against the dark exterior. The difference between closed and open views is a useful part of the design: a restrained outer frontage conceals a more varied storage arrangement."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a fitted dressing room, the outer door pattern and internal divisions should be developed together. A tall door may serve several different storage functions behind it. Handle position, hinge clearance and drawer access need checking as a group, particularly where two cabinet runs meet or face each other."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g41/g41-01-overall-view-of-the-dark-fitted-walk-in.webp",
      "alt": "Overall view of the dark fitted walk-in wardrobe at the Esher residence",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g41/g41-01-overall-view-of-the-dark-fitted-walk-in.webp",
        "alt": "Overall view of the dark fitted walk-in wardrobe at the Esher residence",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g41/g41-02-dark-walk-in-wardrobe-showing-open-hanging-and.webp",
        "alt": "Dark walk-in wardrobe showing open hanging and shelf storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g41/g41-03-close-detail-of-the-wardrobe-handle-and-surrounding.webp",
        "alt": "Close detail of the wardrobe handle and surrounding dark panel",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g41/g41-04-metallic-fitting-detail-on-the-dark-wardrobe-cabinetry.webp",
        "alt": "Metallic fitting detail on the dark wardrobe cabinetry",
        "fit": "contain"
      }
    ],
    "location": "Esher, Surrey"
  },
  {
    "galleryId": "G42",
    "slug": "esher-luxury-residence-kids-room-tv-unit",
    "title": "Esher Bespoke Playroom TV & Toy Storage",
    "category": "Bespoke Joinery",
    "location": "Esher, Surrey",
    "summary": "Bespoke playroom TV furniture in Esher with illuminated display shelves, open toy compartments and low storage arranged around a television.",
    "seoDescription": "Bespoke playroom TV furniture in Esher with illuminated display shelves, open toy compartments and low storage arranged around a television.",
    "keywords": [
      "esher bespoke playroom tv & toy storage",
      "Esher Luxury Residence kids room TV unit",
      "bespoke kids room furniture",
      "fitted TV unit",
      "kids room storage",
      "display shelving",
      "bespoke media unit"
    ],
    "highlights": [
      "Integrated television",
      "Open display shelving",
      "Lower fitted storage",
      "Wall-to-wall composition"
    ],
    "caseStudy": [
      {
        "heading": "A TV unit designed as fitted kids-room furniture",
        "body": [
          "This Esher residence project integrates the television into a full fitted wall with open display shelving and practical storage below.",
          "The arrangement gives toys, books and display objects a defined place while keeping the screen central to the composition."
        ]
      },
      {
        "heading": "The demanding part: balancing display and storage",
        "body": [
          "Kids-room furniture needs accessible storage without making the elevation feel visually crowded.",
          "The design therefore depends on consistent shelf spacing, controlled cabinet lines and an accurate relationship between the television opening and surrounding display sections."
        ]
      },
      {
        "heading": "Open shelving and practical lower storage",
        "body": [
          "The photography shows the open cubbies, central TV area and lower storage zones working together as one unit.",
          "Smaller details show how the display openings are finished at close range while preserving the overall grid."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed unit combines media, display and everyday storage in a single fitted wall.",
          "For similar kids-room TV units and fitted storage, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The television is set within a fitted wall of open shelving, with low compartments for baskets and toys. Smaller shelves above create places for books and display objects, while the lower arrangement keeps frequently used items within reach. A dark textured surround frames the screen and shelf openings. Lighting makes the upper display bays distinct from the practical storage below. The close photograph shows the surface texture beside one of the compartments, where the cabinet edge acts as a frame for the objects inside."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Furniture for a family room should anticipate how storage needs change over time. Compartment sizes, accessible lower shelves and a practical equipment area can be planned without dedicating every opening to one toy. Secure installation, door behaviour and the specification of accessible edges should be part of the agreed design."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g42/g42-01-overall-view-of-esher-kids-room-tv-unit.webp",
      "alt": "Overall view of Esher kids-room TV unit",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g42/g42-01-overall-view-of-esher-kids-room-tv-unit.webp",
        "alt": "Overall view of Esher kids-room TV unit",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g42/g42-02-angled-view-of-the-fitted-playroom-tv-cabinet.webp",
        "alt": "Angled view of the fitted playroom TV cabinet and low toy compartments",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g42/g42-03-close-detail-of-the-dark-textured-cabinet-edge.webp",
        "alt": "Close detail of the dark textured cabinet edge beside a display shelf",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G43",
    "slug": "esher-luxury-residence-home-office",
    "title": "Esher Bespoke Home Office & Library Joinery",
    "category": "Bespoke Joinery",
    "location": "Esher, Surrey",
    "summary": "Bespoke home-office joinery in Esher with an illuminated library wall, lower cupboards and matching alcove storage around the fireplace.",
    "seoDescription": "Bespoke home-office joinery in Esher with an illuminated library wall, lower cupboards and matching alcove storage around the fireplace.",
    "keywords": [
      "esher bespoke home office & library joinery",
      "Esher Luxury Residence home office",
      "bespoke home office",
      "fitted office shelving",
      "home office cabinetry",
      "metallic inlay joinery",
      "bespoke study furniture"
    ],
    "highlights": [
      "Desk-side fitted bookcase",
      "Integrated shelf lighting",
      "Fireplace alcoves and seating area",
      "Lower cupboards and wall panelling"
    ],
    "caseStudy": [
      {
        "heading": "Storage beside the working area",
        "body": [
          "The home office combines a full-height fitted bookcase with lower cupboards beside the desk. Dark fronts and repeated shelf divisions give the working area a clear, ordered backdrop, while integrated lighting highlights the displayed objects."
        ]
      },
      {
        "heading": "A coordinated seating area",
        "body": [
          "The wider room views show a seating area with fitted alcoves on either side of the television and fireplace. Lower cupboards and wall panelling continue the dark joinery around this part of the room, connecting it with the desk-side furniture."
        ]
      },
      {
        "heading": "Details across the room",
        "body": [
          "The shelving, cupboard fronts and surrounding panels use repeated horizontal and vertical lines. The closer view shows the illuminated display shelves above the lower storage.",
          "When planning a similar home office, it helps to consider working space, display, concealed storage and any seating area together. Room photographs and approximate dimensions give Form & Frame a starting point for discussing the layout and installation scope."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The main library wall combines three broad shelving bays with a continuous row of lower cupboards. Warm lighting brings out the depth of the dark shelves, while restrained framed doors conceal the everyday storage below. The same furniture language continues into the seating area, where paired alcoves flank the fireplace and television. A projecting cornice gives the separate fitted elements a common outline. Close views show the relationship between shelf lighting, small metallic handles and the fine lines on the cupboard fronts."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A home office used for reading and meetings needs a different storage balance from a workstation alone. Books, files and display objects should each have an appropriate place. Coordinating the desk area with the surrounding library and seating furniture helps the room remain useful both during work and afterwards."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g43/g43-01-overall-view-of-esher-home-office.webp",
      "alt": "Overall view of Esher home office",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g43/g43-01-overall-view-of-esher-home-office.webp",
        "alt": "Overall view of Esher home office",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g43/g43-02-home-office-fitted-shelving-and-cabinetry.webp",
        "alt": "Home-office fitted shelving and cabinetry",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g43/g43-03-illuminated-display-shelving-and-lower-cupboard-detail-in.webp",
        "alt": "Illuminated display shelving and lower cupboard detail in the home office",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g43/g43-04-home-office-seating-area-with-illuminated-alcoves-beside.webp",
        "alt": "Home-office seating area with illuminated alcoves beside the television and fireplace",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g43/g43-05-full-front-view-of-the-home-office-alcoves.webp",
        "alt": "Full front view of the home-office alcoves, fireplace and surrounding wall panelling",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G44",
    "slug": "esher-luxury-residence-bookcase-leather-brass",
    "title": "Esher Bespoke Bookcase with Leather & Brass",
    "category": "Bespoke Joinery",
    "location": "Esher, Surrey",
    "summary": "Bespoke fitted bookcase in Esher with leather and brass details, illuminated display shelves and dark grain cabinetry with lower cupboards.",
    "seoDescription": "Bespoke fitted bookcase in Esher with leather and brass details, illuminated display shelves and dark grain cabinetry with lower cupboards.",
    "keywords": [
      "esher bespoke bookcase with leather & brass",
      "Esher Luxury Residence bookcase",
      "bespoke bookcase",
      "illuminated shelving",
      "leather joinery detail",
      "brass detail bookcase",
      "fitted display wall"
    ],
    "highlights": [
      "Full-height fitted bookcase",
      "Integrated shelf lighting",
      "Leather detailing",
      "Brass accents"
    ],
    "caseStudy": [
      {
        "heading": "A full-height illuminated bookcase wall",
        "body": [
          "This bookcase at the Esher residence fills the wall with open display shelving above lower fitted storage.",
          "Integrated lighting within the shelves gives the display objects depth while keeping the furniture visually structured."
        ]
      },
      {
        "heading": "The demanding part: maintaining repetition across the wall",
        "body": [
          "A long bookcase elevation depends on consistent shelf lines, vertical divisions and lower cabinet proportions.",
          "Because the furniture is read as one large composition, small variations in spacing or alignment would be immediately visible."
        ]
      },
      {
        "heading": "Leather and brass details",
        "body": [
          "The close-up photographs focus on the leather and brass treatment around the bookcase framing and illuminated shelves.",
          "These material details provide contrast against the darker furniture while remaining integrated into the overall joinery."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed bookcase combines display, concealed storage and decorative material detailing within a single fitted wall.",
          "For similar bookcases and display furniture, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The fitted bookcase is divided into tall display bays with illuminated shelves and closed storage beneath. Dark grain cabinetry is accented by leather-faced vertical details and fine brass lines. Reflective lower fronts contrast with the softer appearance of the inset uprights, giving the furniture several levels of texture. The detail photographs focus on the narrow junctions between these materials and the lines around the lower doors. Within the room, the full-width arrangement creates a backdrop to the piano and seating without relying on a television as its centre."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "When several finishes meet in one bookcase, the detail drawing is as important as the overall elevation. Sample approval should include the leather, timber finish and metal together. Shelf loading, lighting access and cupboard use can then be resolved within that material framework before manufacture."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g44/g44-01-overall-view-of-esher-bespoke-bookcase.webp",
      "alt": "Overall view of Esher bespoke bookcase",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g44/g44-01-overall-view-of-esher-bespoke-bookcase.webp",
        "alt": "Overall view of Esher bespoke bookcase",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g44/g44-02-full-width-fitted-display-bookcase-with-lighting-beside.webp",
        "alt": "Full-width fitted display bookcase with lighting beside a grand piano",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g44/g44-03-leather-and-illuminated-shelf-detail.webp",
        "alt": "Leather and illuminated shelf detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g44/g44-04-leather-and-brass-bookcase-detail.webp",
        "alt": "Leather and brass bookcase detail",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g44/g44-05-lower-bookcase-cabinet-with-brass-trimmed-fronts-beneath.webp",
        "alt": "Lower bookcase cabinet with brass-trimmed fronts beneath the display shelf",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G56",
    "slug": "esher-luxury-residence-wine-cellar",
    "title": "Esher Bespoke Wine Room & Display Cabinetry",
    "category": "Bespoke Joinery",
    "location": "Esher, Surrey",
    "summary": "Bespoke wine-room joinery in Esher with illuminated bottle racks, mirrored central display and fitted storage around a tasting area.",
    "seoDescription": "Bespoke wine-room joinery in Esher with illuminated bottle racks, mirrored central display and fitted storage around a tasting area.",
    "keywords": [
      "esher bespoke wine room & display cabinetry",
      "Esher Luxury Residence wine cellar",
      "bespoke wine cellar",
      "wine storage joinery",
      "illuminated wine shelving",
      "fitted wine room",
      "bespoke bar cabinetry"
    ],
    "highlights": [
      "Full-height wine storage",
      "Integrated display lighting",
      "Mirrored central display",
      "Under-counter refrigeration"
    ],
    "caseStudy": [
      {
        "heading": "A fitted wine cellar centred on display and storage",
        "body": [
          "This wine cellar at the Esher residence combines full-height bottle storage with a central illuminated display area and a compact table-and-bar arrangement.",
          "The fitted joinery uses the full wall height so wine storage and display remain integrated rather than appearing as separate racks."
        ]
      },
      {
        "heading": "The demanding part: coordinating bottle storage and display",
        "body": [
          "Wine storage requires repeated shelf spacing while the central section also needs to accommodate display objects, serving space and refrigeration below.",
          "Accurate setting out keeps the bottle racks, illuminated shelves and central mirrored area aligned across the complete elevation."
        ]
      },
      {
        "heading": "Lighting, mirror and refrigeration",
        "body": [
          "Integrated lighting emphasises the bottle storage and central shelves, while the reflective backing increases depth through the middle of the room.",
          "Under-counter refrigeration is incorporated below the serving area so the functional equipment remains part of the fitted scheme."
        ]
      },
      {
        "heading": "The finished result",
        "body": [
          "The completed room combines wine storage, display and serving functions within one fitted interior.",
          "For similar wine rooms and specialist storage joinery, Form & Frame can coordinate survey, technical development, specialist manufacture where appropriate, installation and final adjustment."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The wine-room frontage is organised around a mirrored central display with tall bottle racks on either side. Horizontal storage above contrasts with the angled presentation shelves below. Lighting makes the bottles readable and gives the dark cabinet structure depth. The room view includes a table and stools in front of the fitted wall, showing the space used as a tasting and entertaining area as well as storage."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a wine room with seating, circulation and access to the lower racks need checking alongside bottle capacity. The collection may require several bottle formats and a place for glasses or accessories. Any specialist environmental control should be separately specified and coordinated with the furniture before manufacture."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g56/g56-01-overall-view-of-esher-wine-cellar.webp",
      "alt": "Overall view of Esher wine cellar",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g56/g56-01-overall-view-of-esher-wine-cellar.webp",
        "alt": "Overall view of Esher wine cellar",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g56/g56-02-wine-cellar-interior-with-fitted-bottle-storage.webp",
        "alt": "Wine cellar interior with fitted bottle storage",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G57",
    "slug": "full-wall-white-library-bookcase",
    "title": "Bespoke White Fitted Library Bookcase",
    "summary": "A full-wall white fitted bookcase with open library shelving and concealed lower storage, designed around a sitting-room book collection.",
    "seoDescription": "A full-wall white fitted bookcase with open library shelving and concealed lower storage, designed around a sitting-room book collection.",
    "keywords": [
      "bespoke white fitted library bookcase",
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
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The library wall uses a simple white framework to make the books the main visual feature. Several narrow vertical bays divide the long shelves, providing a regular structure behind the sitting-room sofa. Lower compartments offer closed storage beneath the display area. The open-door photograph shows how these cupboards remain integrated into the same grid, while an angled view makes the shelf depth and book arrangement clearer. The cabinetry fits between the surrounding walls and ceiling line, giving the collection a permanent place in the room."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A home library should be planned around the sizes and weight of the books it will hold. Bay width and shelf support matter, especially with a substantial collection. It is also useful to allow space for larger volumes, objects and future additions, rather than filling every section to its limit from the outset."
        ]
      }
    ],
    "category": "Bespoke Joinery",
    "cover": {
      "src": "/images/gallery/g57/g57-01-full-wall-white-bookcase-behind-the-sitting-room.webp",
      "alt": "Full-wall white bookcase behind the sitting-room sofa",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g57/g57-01-full-wall-white-bookcase-behind-the-sitting-room.webp",
        "alt": "Full-wall white bookcase behind the sitting-room sofa",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g57/g57-02-wider-sitting-room-view-showing-the-fitted-white.webp",
        "alt": "Wider sitting-room view showing the fitted white library wall",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g57/g57-03-open-lower-storage-compartments-beneath-the-library-shelves.webp",
        "alt": "Open lower storage compartments beneath the library shelves",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g57/g57-04-angled-view-of-the-bookcase-shelves-and-low.webp",
        "alt": "Angled view of the bookcase shelves and low-level storage",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G58",
    "slug": "esher-luxury-residence-bathroom-vanity-mirror",
    "title": "Esher Bespoke Bathroom Vanity with Mirrored Doors",
    "location": "Esher, Surrey",
    "summary": "A bespoke bathroom vanity in Esher with decorative mirrored fronts, a bowl basin, veined counter and tall segmented wall mirror.",
    "seoDescription": "A bespoke bathroom vanity in Esher with decorative mirrored fronts, a bowl basin, veined counter and tall segmented wall mirror.",
    "keywords": [
      "esher bespoke bathroom vanity with mirrored doors",
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
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The pale vanity frontage is decorated with circular lines over reflective panels, linking the cabinet to the large segmented mirror above. A bowl basin sits on a veined counter, with a wall-mounted tap preserving the clear surface around it. The angled view shows the cabinet suspended above the floor and reveals the depth of the decorative fronts. The close photograph focuses on the relationship between the basin, counter edge and mirrored door pattern. These reflective elements make the relatively compact piece a strong feature in the bathroom."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A decorative vanity must still work around the basin waste, tap position and everyday storage. Door operation and the accessibility of plumbing should be resolved before the mirror pattern is finalised. Materials, adhesives and edge treatments must be selected for the bathroom conditions specified for the project."
        ]
      }
    ],
    "category": "Bespoke Joinery",
    "cover": {
      "src": "/images/gallery/g58/g58-01-full-view-of-the-esher-vanity-bowl-basin.webp",
      "alt": "Full view of the Esher vanity, bowl basin and large segmented mirror",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g58/g58-01-full-view-of-the-esher-vanity-bowl-basin.webp",
        "alt": "Full view of the Esher vanity, bowl basin and large segmented mirror",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g58/g58-02-angled-view-of-the-pale-vanity-cabinetry-beneath.webp",
        "alt": "Angled view of the pale vanity cabinetry beneath the veined counter",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g58/g58-03-close-view-of-the-bowl-basin-and-decorative.webp",
        "alt": "Close view of the bowl basin and decorative vanity door fronts",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G59",
    "slug": "traditional-radiator-covers-fitted-shelving",
    "title": "Bespoke Traditional Radiator Covers & Bookcases",
    "summary": "Traditional white radiator covers and fitted bookshelves, with decorative grilles and coordinated joinery across a living room and entrance.",
    "seoDescription": "Traditional white radiator covers and fitted bookshelves, with decorative grilles and coordinated joinery across a living room and entrance.",
    "keywords": [
      "bespoke traditional radiator covers & bookcases",
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
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "White framed radiator covers and open bookcases give the different parts of this interior a consistent fitted finish. The covers use patterned grille panels beneath narrow top surfaces, with shaped lower details that relate to the traditional mouldings in the room. In the wider photographs, the shelving occupies the sides of the glazed doors without overwhelming the bright living area. A separate entrance view shows the same approach beneath a decorative mirror. The gallery demonstrates coordination across several small joinery elements rather than a single large cabinet."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Room-wide joinery needs a shared set of details: frame widths, profiles, finish and relationships to skirting. Each radiator enclosure also needs its own checks for airflow, valve access and removal. Shelves can follow the same visual language while being designed for the actual books and objects they will carry."
        ]
      }
    ],
    "category": "Bespoke Joinery",
    "cover": {
      "src": "/images/gallery/g59/g59-01-full-front-view-of-a-white-radiator-cover.webp",
      "alt": "Full front view of a white radiator cover beneath a decorative mirror",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g59/g59-01-full-front-view-of-a-white-radiator-cover.webp",
        "alt": "Full front view of a white radiator cover beneath a decorative mirror",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g59/g59-02-sitting-room-view-with-white-fitted-shelving-and.webp",
        "alt": "Sitting-room view with white fitted shelving and radiator-cover joinery",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g59/g59-03-wider-living-room-view-showing-shelving-fireplace-and.webp",
        "alt": "Wider living-room view showing shelving, fireplace and fitted room details",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g59/g59-04-angled-view-of-the-radiator-cover-grille-beside.webp",
        "alt": "Angled view of the radiator-cover grille beside the curtains",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g59/g59-05-radiator-cover-joinery-beside-the-bright-bay-window.webp",
        "alt": "Radiator-cover joinery beside the bright bay window",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G60",
    "slug": "esher-luxury-residence-make-up-table",
    "title": "Esher Bespoke Fitted Dressing Table",
    "location": "Esher, Surrey",
    "summary": "A pale fitted dressing table in Esher with twin drawer banks, decorative fronts and a tall mirror, arranged within a recessed dressing area.",
    "seoDescription": "A pale fitted dressing table in Esher with twin drawer banks, decorative fronts and a tall mirror, arranged within a recessed dressing area.",
    "keywords": [
      "esher bespoke fitted dressing table",
      "Esher make-up table",
      "bespoke dressing table",
      "fitted vanity table",
      "bedroom drawer storage"
    ],
    "highlights": [
      "Twin drawer pedestals",
      "Central space for a chair",
      "Decorative pale drawer fronts",
      "Tall mirror above the table"
    ],
    "caseStudy": [
      {
        "heading": "A dedicated dressing space",
        "body": [
          "The photograph shows a fitted make-up table set between the room's side walls. Two drawer pedestals support the work surface, leaving a central space for a chair, while a tall rectangular mirror rises above the table."
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
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The dressing table is set within a defined recess, with a tall mirror above and drawer banks on either side of the seated position. Pale, decorative fronts contrast against the darker surrounding walls. The chair fits beneath the central opening so that the furniture can remain visually contained when not in use. The tall mirror continues the proportions of the recess and brings the dressing surface into the wider room."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a fitted make-up or dressing table, the seated height, mirror position and available light should be considered together. Drawer banks can be planned around cosmetics, jewellery or other small items, while the surface needs sufficient working depth. Socket positions and any task lighting should be agreed before the furniture is made."
        ]
      }
    ],
    "category": "Bespoke Joinery",
    "cover": {
      "src": "/images/gallery/g60/g60-01-complete-esher-make-up-table-viewed-through-the.webp",
      "alt": "Complete Esher make-up table viewed through the doorway, with twin drawer units and a tall mirror",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g60/g60-01-complete-esher-make-up-table-viewed-through-the.webp",
        "alt": "Complete Esher make-up table viewed through the doorway, with twin drawer units and a tall mirror",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G61",
    "slug": "esher-luxury-residence-modern-alcove-units",
    "title": "Esher Bespoke Modern Alcove Display Units",
    "category": "Bespoke Joinery",
    "location": "Esher, Surrey",
    "summary": "Modern fitted alcove units in Esher with dark lower cupboards, reflective display shelves and lighting beside a living-room television and fireplace.",
    "seoDescription": "Modern fitted alcove units in Esher with dark lower cupboards, reflective display shelves and lighting beside a living-room television and fireplace.",
    "keywords": [
      "esher bespoke modern alcove display units",
      "Esher modern alcove units",
      "modern fitted shelving",
      "reflective display shelving",
      "living room alcove furniture",
      "bespoke alcove pair"
    ],
    "highlights": [
      "Two fitted alcoves framing the fireplace",
      "Reflective open display shelving",
      "Dark framing and projecting top details",
      "Full-room view and individual alcove detail"
    ],
    "caseStudy": [
      {
        "heading": "A balanced living-room pair",
        "body": [
          "Two fitted alcove units frame the central television and fireplace in this light-toned Esher living room. The full-room photograph shows both pieces together, with their dark framing set against the pale walls and seating."
        ]
      },
      {
        "heading": "Reflective shelves and top details",
        "body": [
          "The closer photograph shows the left-hand unit, including its reflective display areas and projecting top detail. The repeated shelf lines organise the displayed objects while keeping the alcove visually open."
        ]
      },
      {
        "heading": "Discuss your alcove furniture",
        "body": [
          "Share photographs of the whole wall and the available dimensions on both sides of the chimney breast. Form & Frame can review the display and storage requirements, proportions and fitting details before agreeing a similar project."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "These alcove units form a pair around the central television and fireplace. Dark lower cupboards support lighter, reflective display compartments above. The projecting top detail gives each alcove a defined outline below the room cornice, while shelf lighting draws attention to the objects inside. The closer view shows the depth of the shelves and the contrast between their reflective backs and the darker frame. The arrangement sits beside large windows, so the daylight is part of how the finishes are perceived."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "When planning modern alcove furniture, the two recesses should be measured individually and considered against the central feature. The depth of lower storage need not dictate the depth of every display shelf. A coordinated lighting and cable plan helps keep the final installation tidy without sacrificing access."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g61/g61-01-full-living-room-view-of-modern-alcove-units.webp",
      "alt": "Full living-room view of modern alcove units around the television and fireplace",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g61/g61-01-full-living-room-view-of-modern-alcove-units.webp",
        "alt": "Full living-room view of modern alcove units around the television and fireplace",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g61/g61-02-left-hand-modern-alcove-with-reflective-shelves-and.webp",
        "alt": "Left-hand modern alcove with reflective shelves and projecting top detail",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G62",
    "slug": "esher-entrance-wardrobe-bench",
    "title": "Esher Bespoke Hallway Wardrobe & Storage Bench",
    "category": "Bespoke Joinery",
    "summary": "Bespoke entrance storage in Esher with a fitted coat wardrobe, shoe shelves, bench and open shelving for a practical hallway layout.",
    "seoDescription": "Bespoke entrance storage in Esher with a fitted coat wardrobe, shoe shelves, bench and open shelving for a practical hallway layout.",
    "keywords": [
      "esher bespoke hallway wardrobe & storage bench",
      "entrance wardrobe",
      "hallway storage bench",
      "fitted coat cupboard",
      "shoe storage Esher"
    ],
    "highlights": [
      "Full-height closed cupboards",
      "Coat hooks above a fitted seat",
      "Open shoe shelving",
      "Hanging rails and internal shelves"
    ],
    "caseStudy": [
      {
        "heading": "Storage at the entrance",
        "body": [
          "This Esher entrance combines tall cupboards with a recessed seat and open shelves. Pale fronts keep the storage visually quiet, while the hooks and bench provide an accessible place for coats and shoes."
        ]
      },
      {
        "heading": "Inside the wardrobes",
        "body": [
          "The open view shows hanging rails, upper shelves and lower shoe storage. The closed view and doorway photograph show how these practical compartments fit into the surrounding interior."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The entrance storage combines a full-height coat wardrobe with a fitted bench and a tall open shelving unit. The pale doors keep the closed frontage simple. Inside, hanging rails are arranged at different heights above rows of shoe storage, allowing the cupboard to serve more than one type of garment. The bench provides a place to sit when changing shoes, with further storage beneath. A view through the doorway shows how the furniture occupies the edge of the entrance without filling the central circulation space."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Hallway joinery should be planned around what arrives at the door: coats, shoes, bags and smaller everyday items. A mixture of closed and open storage can keep the room organised while leaving frequently used belongings accessible. Door opening, seated height and the clear route through the hall need to work together."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g62/g62-01-closed-pale-hallway-wardrobe-beside-a-fitted-bench.webp",
      "alt": "Closed pale hallway wardrobe beside a fitted bench, coat hooks and open shoe shelves",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g62/g62-01-closed-pale-hallway-wardrobe-beside-a-fitted-bench.webp",
        "alt": "Closed pale hallway wardrobe beside a fitted bench, coat hooks and open shoe shelves",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g62/g62-02-open-entrance-wardrobe-showing-hanging-rails-upper-shelves.webp",
        "alt": "Open entrance wardrobe showing hanging rails, upper shelves and rows of shoe storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g62/g62-03-doorway-view-towards-the-fitted-hallway-bench-and.webp",
        "alt": "Doorway view towards the fitted hallway bench and open shelving",
        "fit": "contain"
      }
    ],
    "location": "Esher, Surrey"
  },
  {
    "galleryId": "G63",
    "slug": "esher-decorative-mirrored-wardrobes",
    "title": "Esher Bespoke Decorative Mirrored Wardrobes",
    "category": "Bespoke Joinery",
    "summary": "Bespoke mirrored wardrobes in Esher with circular door patterns, internal hanging storage and fitted shoe shelves along the dressing-room passage.",
    "seoDescription": "Bespoke mirrored wardrobes in Esher with circular door patterns, internal hanging storage and fitted shoe shelves along the dressing-room passage.",
    "keywords": [
      "esher bespoke decorative mirrored wardrobes",
      "decorative mirrored wardrobes",
      "circular wardrobe door design",
      "fitted dressing room",
      "shoe shelving Esher"
    ],
    "highlights": [
      "Circular patterns across mirrored doors",
      "Full-height fitted storage",
      "Open hanging compartments",
      "Separate open shoe shelving"
    ],
    "caseStudy": [
      {
        "heading": "A decorative wardrobe elevation",
        "body": [
          "Pale circular patterns run across the mirrored doors, adding a repeated rhythm to the fitted wardrobe wall. The reflective panels sit alongside darker walls and a window, giving the storage a clear place within the dressing area."
        ]
      },
      {
        "heading": "Hanging and shoe storage",
        "body": [
          "An open-door photograph shows the hanging compartment and upper shelf. Wider views also show open shoe shelving along the adjoining passage, keeping frequently used footwear visible and accessible."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "Pale circular patterns overlay the mirrored wardrobe doors, adding decoration without losing the reflective surface behind. Open views reveal hanging rails at different heights and an upper shelf for less frequently used items. The wardrobe continues into a dressing-room passage with open shoe shelves, connecting the larger storage banks to the dressing area beyond. The photos include both the closed frontage and the working interior, showing how the decorative outer design and practical storage serve different purposes within the same furniture."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A mirrored wardrobe can be designed as part of a complete dressing-room route rather than as one isolated wall. The passage width, door projection and access to shoe shelves should be tested together. Internal storage can then be tailored to the collection while the mirrored pattern remains consistent across the outer frontage."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g63/g63-01-closed-mirrored-wardrobe-doors-with-pale-circular-patterns.webp",
      "alt": "Closed mirrored wardrobe doors with pale circular patterns beside a window",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g63/g63-01-closed-mirrored-wardrobe-doors-with-pale-circular-patterns.webp",
        "alt": "Closed mirrored wardrobe doors with pale circular patterns beside a window",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g63/g63-02-open-mirrored-wardrobe-revealing-hanging-clothes-an-upper.webp",
        "alt": "Open mirrored wardrobe revealing hanging clothes, an upper shelf and lower storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g63/g63-03-dressing-room-view-showing-mirrored-wardrobes-and-open.webp",
        "alt": "Dressing-room view showing mirrored wardrobes and open shoe shelves",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g63/g63-04-open-fitted-shoe-shelving-along-the-dressing-room.webp",
        "alt": "Open fitted shoe shelving along the dressing-room passage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g63/g63-05-view-along-the-passage-towards-mirrored-wardrobe-doors.webp",
        "alt": "View along the passage towards mirrored wardrobe doors and shoe storage",
        "fit": "contain"
      }
    ],
    "location": "Esher, Surrey"
  },
  {
    "galleryId": "G64",
    "slug": "dining-display-drinks-cabinet",
    "title": "Bespoke Dining Display & Drinks Cabinet",
    "category": "Bespoke Joinery",
    "summary": "A dark fitted drinks cabinet with mirrored shelving, integrated lighting, glazed lower storage and textured metallic handles for a dining room.",
    "seoDescription": "A dark fitted drinks cabinet with mirrored shelving, integrated lighting, glazed lower storage and textured metallic handles for a dining room.",
    "keywords": [
      "bespoke dining display & drinks cabinet",
      "bespoke dining display cabinet",
      "drinks cabinet",
      "illuminated shelving",
      "mirrored display cabinet",
      "bespoke joinery"
    ],
    "highlights": [
      "Illuminated display shelves",
      "Mirrored backing",
      "Lower storage cupboards",
      "Glazed drinks storage"
    ],
    "caseStudy": [
      {
        "heading": "Display above, storage below",
        "body": [
          "This fitted cabinet spans the dining wall behind the table. Open shelves hold glassware and decorative objects above enclosed cupboards and glazed drinks storage, combining display and everyday use in a single piece."
        ]
      },
      {
        "heading": "Shelf and cabinet details",
        "body": [
          "Mirrored backing gives depth to the open shelving. The close-up views show warm metallic trim, cabinet handles and the junctions between the dark shelf edges and the surrounding frame."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The dining cabinet combines open display shelves with a mixture of solid and glazed lower storage. Mirrored backing reflects the objects and room light, while fine metallic strips define the front edges of the dark wood-grain shelves. Close views reveal textured rectangular pulls and the meeting point of the metal trim above the glazed compartments. An open cupboard shows straightforward internal shelves behind the decorative frontage. The full room view explains how the fitted unit forms a backdrop to the dining table rather than a separate bar counter."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a drinks and dining cabinet, the design should distinguish glassware, bottles and serving items. Any appliance intended for the lower section needs to be specified before the cabinet openings are fixed. Shelf lighting, access to switches and the cleaning of mirrored surfaces should be considered alongside the storage layout."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g64/g64-01-full-dining-wall-view-of-dark-display-cabinetry.webp",
      "alt": "Full dining-wall view of dark display cabinetry behind the table",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g64/g64-01-full-dining-wall-view-of-dark-display-cabinetry.webp",
        "alt": "Full dining-wall view of dark display cabinetry behind the table",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g64/g64-02-angled-view-of-illuminated-shelves-lower-cupboards-and.webp",
        "alt": "Angled view of illuminated shelves, lower cupboards and glazed drinks storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g64/g64-03-open-lower-cupboard-beneath-mirrored-display-shelves.webp",
        "alt": "Open lower cupboard beneath mirrored display shelves",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g64/g64-04-display-shelf-with-a-fine-metallic-edge-and.webp",
        "alt": "Display shelf with a fine metallic edge and integrated lighting",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g64/g64-05-textured-metallic-handles-on-dark-dining-cabinet-doors.webp",
        "alt": "Textured metallic handles on dark dining cabinet doors",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g64/g64-06-fine-metallic-trim-crossing-the-cabinet-above-glazed.webp",
        "alt": "Fine metallic trim crossing the cabinet above glazed drinks storage",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G65",
    "slug": "lift-up-mirror-dressing-table",
    "title": "Bespoke Dressing Table with Lift-Up Mirror",
    "category": "Bespoke Joinery",
    "summary": "A fitted dressing table with a lift-up mirror, divided cosmetics storage, textured drawer fronts and metallic knobs beneath a rooflight.",
    "seoDescription": "A fitted dressing table with a lift-up mirror, divided cosmetics storage, textured drawer fronts and metallic knobs beneath a rooflight.",
    "keywords": [
      "bespoke dressing table with lift-up mirror",
      "lift up mirror dressing table",
      "bespoke dressing table",
      "divided makeup storage",
      "fitted bedroom drawers",
      "bespoke joinery"
    ],
    "highlights": [
      "Lift-up mirror compartment",
      "Divided cosmetics storage",
      "Drawer banks beside the seat",
      "Fitted beneath a rooflight"
    ],
    "caseStudy": [
      {
        "heading": "A dressing table beneath the rooflight",
        "body": [
          "The fitted surface spans the end of the room beneath a sloping ceiling. Drawer banks flank the seating space, while the central lift-up mirror brings the dressing area together without needing a separate wall mirror."
        ]
      },
      {
        "heading": "Organised storage within the furniture",
        "body": [
          "The open views show small divided compartments for cosmetics and accessories. Close-ups document the drawer interiors, textured fronts and small rounded handles, making the storage arrangement easy to understand."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The dressing table is centred beneath a rooflight within a sloping-ceiling room. Two drawer banks support the work surface, with an opening below for a chair. Lifting the central mirror reveals shallow divided compartments for cosmetics and brushes, keeping smaller items organised beneath the top. The close photographs show the textured drawer fronts, small rounded metallic knobs and the edge of an open drawer. Pale surfaces help the furniture sit quietly within the room, while the internal organisers provide a more detailed practical function."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A lift-up mirror needs enough clearance behind and above the hinged panel, particularly below a sloping ceiling. The mirror angle should suit a seated user and the lighting available. Compartment depths, drawer contents and the space for electrical accessories can be agreed before the storage trays and work surface are made."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g65/g65-01-full-dressing-table-with-drawer-banks-and-a.webp",
      "alt": "Full dressing table with drawer banks and a raised mirror beneath a rooflight",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g65/g65-01-full-dressing-table-with-drawer-banks-and-a.webp",
        "alt": "Full dressing table with drawer banks and a raised mirror beneath a rooflight",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g65/g65-02-side-view-of-the-fitted-dressing-table-and.webp",
        "alt": "Side view of the fitted dressing table and chair under the sloping ceiling",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g65/g65-03-raised-dressing-table-mirror-above-divided-cosmetics-compartments.webp",
        "alt": "Raised dressing-table mirror above divided cosmetics compartments",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g65/g65-04-divided-dressing-table-tray-containing-cosmetics-and-brushes.webp",
        "alt": "Divided dressing-table tray containing cosmetics and brushes",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g65/g65-05-open-dressing-table-drawer-beneath-a-textured-drawer.webp",
        "alt": "Open dressing-table drawer beneath a textured drawer front",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g65/g65-06-textured-drawer-fronts-with-small-rounded-metallic-handles.webp",
        "alt": "Textured drawer fronts with small rounded metallic handles",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G66",
    "slug": "fitted-eaves-cupboard",
    "title": "Bespoke Built-In Eaves Storage Cupboard",
    "category": "Bespoke Joinery",
    "summary": "A pale two-door eaves cupboard fitted into a low wall beneath a sloping bedroom ceiling. A compact example of made-to-measure storage.",
    "seoDescription": "A pale two-door eaves cupboard fitted into a low wall beneath a sloping bedroom ceiling. A compact example of made-to-measure storage.",
    "keywords": [
      "bespoke built-in eaves storage cupboard",
      "fitted eaves cupboard",
      "sloping ceiling storage",
      "bespoke low cupboard",
      "bespoke fitted furniture"
    ],
    "highlights": [
      "Two pale cupboard doors",
      "Recessed fit beneath the roof slope",
      "Compact vertical handles"
    ],
    "caseStudy": [
      {
        "heading": "Making use of the eaves",
        "body": [
          "This cupboard fits into the low wall beneath a sloping ceiling. Its simple two-door front keeps the storage compact and leaves the surrounding floor area open."
        ]
      },
      {
        "heading": "A discreet fitted front",
        "body": [
          "The pale finish sits quietly against the light walls, with small vertical handles providing access. The overall photograph shows the relationship between the cupboard, skirting and roof slope."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The cupboard occupies the low wall beneath the roof slope, using an area that would not suit a full-height wardrobe. Two pale framed doors sit within a simple surrounding opening, with small metallic handles at the centre. The finish relates to the light walls and carpet, allowing the storage to remain discreet in the bedroom. Its low proportions make use of the eaves wall while keeping the main floor area open."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Eaves storage starts with a measured section through the roof space. Useful depth, headroom and the size of the access opening can vary considerably. The internal arrangement should be designed around the objects to be stored and any services requiring access, while the visible doors can remain aligned with the finished room wall."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g66/g66-01-pale-two-door-fitted-cupboard-in-the-low.webp",
      "alt": "Pale two-door fitted cupboard in the low wall beneath a sloping ceiling",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g66/g66-01-pale-two-door-fitted-cupboard-in-the-low.webp",
        "alt": "Pale two-door fitted cupboard in the low wall beneath a sloping ceiling",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G67",
    "slug": "bedroom-tv-cabinet",
    "title": "Bespoke Fitted Bedroom TV Cabinet",
    "category": "Bespoke Joinery",
    "summary": "A fitted bedroom TV cabinet under a sloping ceiling, with reflective backing, open equipment shelves and pale lower cupboards.",
    "seoDescription": "A fitted bedroom TV cabinet under a sloping ceiling, with reflective backing, open equipment shelves and pale lower cupboards.",
    "keywords": [
      "bespoke fitted bedroom tv cabinet",
      "bedroom TV cabinet",
      "fitted TV unit under eaves",
      "bespoke media furniture",
      "bespoke bedroom furniture"
    ],
    "highlights": [
      "TV opening beneath the roof slope",
      "Open compartments below the screen",
      "Pale lower cupboards",
      "Reflective surrounding panels"
    ],
    "caseStudy": [
      {
        "heading": "A TV unit within the roof slope",
        "body": [
          "The television and cabinet occupy the low end of the bedroom, framed by the sloping ceiling. Lower cupboards and open compartments keep the furniture below the screen while preserving a clear view from the bed."
        ]
      },
      {
        "heading": "Proportions and room context",
        "body": [
          "The two photographs show the complete cabinet from slightly different positions. The reflective surround gives depth to the recess and connects the pale cabinet fronts with the rest of the bedroom."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The bedroom cabinet places the television within a recess beneath the roof slope. A reflective surround gives the screen area depth, while open shelves below provide a place for equipment and smaller objects. Pale lower cupboards create closed storage without making the fitted piece visually heavy. The two room views show how the cabinet relates to the bed and the angled ceiling rather than only its frontage. Its height and width are governed by the available opening, making the fit to the room especially important."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a bedroom media unit, screen position should be checked from the bed as well as from a standing view. Equipment needs accessible cables and appropriate ventilation. The cupboard depth, door opening and any adjacent curtains must fit within the same measured layout, particularly in a roof-space room."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g67/g67-01-bedroom-tv-cabinet-beneath-a-sloping-ceiling-with.webp",
      "alt": "Bedroom TV cabinet beneath a sloping ceiling with open shelves and pale lower cupboards",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g67/g67-01-bedroom-tv-cabinet-beneath-a-sloping-ceiling-with.webp",
        "alt": "Bedroom TV cabinet beneath a sloping ceiling with open shelves and pale lower cupboards",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g67/g67-02-room-view-of-the-fitted-bedroom-television-cabinet.webp",
        "alt": "Room view of the fitted bedroom television cabinet and reflective surround",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G68",
    "slug": "ventilated-eaves-cabinet",
    "title": "Bespoke Low Eaves Cabinet with Top Grille",
    "category": "Bespoke Joinery",
    "summary": "A low fitted eaves cabinet beneath a rooflight, with pale framed doors, metallic handles and a ventilation grille in the top surface.",
    "seoDescription": "A low fitted eaves cabinet beneath a rooflight, with pale framed doors, metallic handles and a ventilation grille in the top surface.",
    "keywords": [
      "bespoke low eaves cabinet with top grille",
      "ventilated cabinet",
      "low eaves cabinet",
      "fitted furniture beneath rooflight",
      "bespoke bespoke joinery"
    ],
    "highlights": [
      "Two framed doors",
      "Ventilation grille in the top",
      "Projecting top edge",
      "Low profile beneath a rooflight"
    ],
    "caseStudy": [
      {
        "heading": "Low furniture beneath the rooflight",
        "body": [
          "This pale cabinet sits against the low wall below a rooflight. Framed doors and a projecting top distinguish it from the separate recessed eaves cupboard elsewhere in the project."
        ]
      },
      {
        "heading": "The visible details",
        "body": [
          "The overall view shows the grille along the top, paired handles and the junction with the surrounding skirting. These details give the compact piece a finished furniture appearance within the sloping room."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The low cabinet sits against the eaves wall below a rooflight. Framed pale doors and small metallic handles give it the appearance of a compact piece of traditional fitted furniture. A grille is visible in the top surface. The low profile keeps the cabinetry below the changing ceiling height. The shallow ceiling height makes the relationship between cabinet height and the roof slope central to the design."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Where a cabinet includes a grille, the required airflow and access should be specified for its actual contents or services. The grille opening is not a substitute for a technical requirement. A site survey should also establish the usable space behind the frontage before the door dimensions and internal construction are agreed."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g68/g68-01-low-pale-cabinet-beneath-a-rooflight-with-framed.webp",
      "alt": "Low pale cabinet beneath a rooflight with framed doors and a ventilation grille in the top",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g68/g68-01-low-pale-cabinet-beneath-a-rooflight-with-framed.webp",
        "alt": "Low pale cabinet beneath a rooflight with framed doors and a ventilation grille in the top",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G69",
    "slug": "sloping-ceiling-bathroom-storage",
    "title": "Bespoke Fitted Bathroom Cupboards under Eaves",
    "category": "Bespoke Joinery",
    "summary": "Dark fitted bathroom cupboards shaped beneath a sloping ceiling, with internal shelving, textured fronts and warm metallic handles.",
    "seoDescription": "Dark fitted bathroom cupboards shaped beneath a sloping ceiling, with internal shelving, textured fronts and warm metallic handles.",
    "keywords": [
      "bespoke fitted bathroom cupboards under eaves",
      "bespoke bathroom storage",
      "sloping ceiling cupboards",
      "dark fitted bathroom cabinets",
      "bespoke joinery"
    ],
    "highlights": [
      "Cupboard front follows the roof slope",
      "Dark textured cabinet faces",
      "Internal open shelving",
      "Contrasting metallic handles"
    ],
    "caseStudy": [
      {
        "heading": "Storage shaped around the room",
        "body": [
          "The cupboard elevation fills the low end of the bathroom, stepping down with the sloping ceiling at the left. Its dark finish contrasts with the pale walls and sits alongside the bath and vanity."
        ]
      },
      {
        "heading": "Closed fronts and accessible shelves",
        "body": [
          "The closed and open views show how the doors conceal a series of shelves. A wider room photograph establishes the cabinet’s position, while the handle detail shows the texture and contrast of the finished fronts."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The fitted cupboards follow the low edge of the bathroom roof slope. Dark, strongly textured fronts form a continuous bank beneath a broad top rail, with the left edge shaped to the angle above. Open photographs show a series of internal shelves behind the doors. A close view records the warm metallic pulls against the textured grain, while the wider room view places the storage beside the bath and vanity. The cabinetry uses a low wall that would otherwise be difficult to furnish with standard cupboards."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Storage below a bathroom slope needs both a precise survey and a material specification appropriate to moisture exposure. Shelf access and door clearance must remain practical at the lowest point. Plumbing, ventilation and any concealed services should be identified before the cabinet depth and fixing arrangement are decided."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g69/g69-01-dark-bathroom-cupboards-with-closed-doors-shaped-beneath.webp",
      "alt": "Dark bathroom cupboards with closed doors shaped beneath a sloping ceiling",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g69/g69-01-dark-bathroom-cupboards-with-closed-doors-shaped-beneath.webp",
        "alt": "Dark bathroom cupboards with closed doors shaped beneath a sloping ceiling",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g69/g69-02-open-bathroom-cupboard-doors-revealing-internal-shelving.webp",
        "alt": "Open bathroom cupboard doors revealing internal shelving",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g69/g69-03-wide-bathroom-view-of-the-fitted-cupboards-beside.webp",
        "alt": "Wide bathroom view of the fitted cupboards beside the bath and vanity",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g69/g69-04-metallic-handles-against-the-dark-textured-bathroom-cabinet.webp",
        "alt": "Metallic handles against the dark textured bathroom cabinet fronts",
        "fit": "contain"
      }
    ]
  },
  {
    "galleryId": "G70",
    "slug": "belgravia-bedroom-fitted-wardrobe",
    "title": "Belgravia Bespoke High-Gloss Fitted Wardrobe",
    "category": "Bespoke Joinery",
    "summary": "High-gloss fitted bedroom wardrobe in Belgravia with a contrasting horizontal band, illuminated hanging space and pull-out internal storage.",
    "seoDescription": "High-gloss fitted bedroom wardrobe in Belgravia with a contrasting horizontal band, illuminated hanging space and pull-out internal storage.",
    "keywords": [
      "belgravia bespoke high-gloss fitted wardrobe",
      "Belgravia fitted wardrobe",
      "bespoke bedroom wardrobes London",
      "illuminated wardrobe storage",
      "pull out wardrobe drawers"
    ],
    "highlights": [
      "Full-height glossy doors",
      "Contrasting horizontal door band",
      "Illuminated hanging space",
      "Pull-out lower storage"
    ],
    "caseStudy": [
      {
        "heading": "Wardrobes within the bedroom",
        "body": [
          "These full-height wardrobes form a broad storage wall beside the bedroom doorway. A pale horizontal band breaks up the glossy darker fronts and relates the doors to the surrounding fitted furniture."
        ]
      },
      {
        "heading": "Storage behind the doors",
        "body": [
          "The open views show hanging space and stacked pull-out storage. Interior lighting makes the compartments visible, while the closer photograph records the junction between the decorative band and the door face."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The closed wardrobe presents a broad glossy wood-grain frontage divided by a pale horizontal band. The reflective finish links it to the neighbouring bedroom cabinetry. Open views reveal hanging rails, upper storage and a vertical stack of pull-out compartments, with lighting making the darker interior easier to use. A detail photograph focuses on the inset band and its shaped edge against the grain. The contrast between the uninterrupted outer doors and varied interior demonstrates how a fitted wardrobe can keep the bedroom calm while providing several storage functions."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Before choosing the door pattern, establish the balance of hanging space, shelves and drawers required inside. Pull-out storage needs clear access when the doors are open, and lighting should reach the contents without being obstructed. Finish samples should be assessed in the bedroom light, especially for a highly reflective surface."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g70/g70-01-closed-glossy-bedroom-wardrobe-doors-with-a-contrasting.webp",
      "alt": "Closed glossy bedroom wardrobe doors with a contrasting pale horizontal band",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g70/g70-01-closed-glossy-bedroom-wardrobe-doors-with-a-contrasting.webp",
        "alt": "Closed glossy bedroom wardrobe doors with a contrasting pale horizontal band",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g70/g70-02-open-fitted-wardrobe-beside-the-bedroom-doorway.webp",
        "alt": "Open fitted wardrobe beside the bedroom doorway",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g70/g70-03-illuminated-wardrobe-interior-with-hanging-clothes-and-pull.webp",
        "alt": "Illuminated wardrobe interior with hanging clothes and pull-out storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g70/g70-04-detail-of-the-pale-horizontal-band-across-a.webp",
        "alt": "Detail of the pale horizontal band across a glossy wardrobe door",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  },
  {
    "galleryId": "G71",
    "slug": "belgravia-bedroom-study-desk",
    "title": "Belgravia Bespoke Fitted Bedroom Study Desk",
    "category": "Bespoke Joinery",
    "summary": "A dark fitted bedroom study desk in Belgravia with a shallow drawer, reflective edge detail and adjacent book storage beneath a window.",
    "seoDescription": "A dark fitted bedroom study desk in Belgravia with a shallow drawer, reflective edge detail and adjacent book storage beneath a window.",
    "keywords": [
      "belgravia bespoke fitted bedroom study desk",
      "bedroom study desk",
      "Belgravia fitted desk",
      "bespoke study furniture London",
      "desk beside bookcase"
    ],
    "highlights": [
      "Desk beneath the window",
      "Adjacent full-height bookcase",
      "Wide shallow drawer",
      "Compact seating space"
    ],
    "caseStudy": [
      {
        "heading": "A study area within the bedroom",
        "body": [
          "The desk occupies the space beneath the window, with the bedroom bookcase immediately alongside. Its shallow profile creates a usable work surface while leaving room for a chair and circulation beside the bed."
        ]
      },
      {
        "heading": "Drawer and edge details",
        "body": [
          "The photographs show the desk in use as well as its drawer front and edge profile. These closer views focus on the furniture itself and its relationship to the seating space."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The desk sits beneath the window beside a tall bookcase, using a compact part of the bedroom as a working area. A shallow drawer opens directly below the writing surface, keeping stationery accessible without taking much knee space. Close photographs show the dark grain, the reflective edge and the way the drawer front meets the top. The desk is visually connected to the adjacent shelving but remains a distinct functional part of the room, with daylight reaching the work surface from above."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A bedroom study desk should be sized around the chair, the equipment and the space needed to sit comfortably. The window sill and any radiator or sockets below it can influence the design. A shallow drawer is useful for small items, but its depth and position must leave adequate clearance for the user."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g71/g71-01-fitted-bedroom-desk-beneath-a-window-beside-a.webp",
      "alt": "Fitted bedroom desk beneath a window beside a tall bookcase, with its drawer open",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g71/g71-01-fitted-bedroom-desk-beneath-a-window-beside-a.webp",
        "alt": "Fitted bedroom desk beneath a window beside a tall bookcase, with its drawer open",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g71/g71-02-close-view-of-the-fitted-desk-drawer-front.webp",
        "alt": "Close view of the fitted desk drawer front and chair",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g71/g71-03-close-up-of-the-dark-desk-edge-and.webp",
        "alt": "Close-up of the dark desk edge and reflective drawer detail",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  },
  {
    "galleryId": "G72",
    "slug": "belgravia-living-room-tv-wall",
    "title": "Belgravia Bespoke High-Gloss Living-Room TV Wall",
    "category": "Bespoke Joinery",
    "summary": "A dark high-gloss fitted TV wall in Belgravia, with a recessed screen and integrated cabinetry beside a living-room window.",
    "seoDescription": "A dark high-gloss fitted TV wall in Belgravia, with a recessed screen and integrated cabinetry beside a living-room window.",
    "keywords": [
      "belgravia bespoke high-gloss living-room tv wall",
      "Belgravia TV wall",
      "glossy media wall",
      "bespoke living room TV furniture",
      "fitted television wall London"
    ],
    "highlights": [
      "Integrated television opening",
      "Glossy dark panels",
      "Full-height fitted composition"
    ],
    "caseStudy": [
      {
        "heading": "A fitted focal point for the living room",
        "body": [
          "The television sits within a full-height dark panelled wall opposite the seating area. Its reflective finish contrasts with the light walls, floor and upholstery."
        ]
      },
      {
        "heading": "The complete room view",
        "body": [
          "The photograph shows the TV wall in its living-room setting, including the panel lines above and below the screen."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The media wall forms a dark, glossy panelled feature beside the living-room window. The television is recessed within the fitted composition, with cabinet divisions continuing above and below it. Reflections across the front emphasise the contrast with the pale walls and soft furnishings. The furniture relates to the adjacent window and the main seating position across the room."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A high-gloss media wall should be considered from the main viewing position and in the actual daylight of the room. Reflections, screen height and access to equipment all affect the design. The cabinet layout should provide agreed routes for cables and ventilation while maintaining the clean outer lines of the fitted furniture."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g72/g72-01-glossy-dark-fitted-tv-wall-beside-the-window.webp",
      "alt": "Glossy dark fitted TV wall beside the window in a light Belgravia living room",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g72/g72-01-glossy-dark-fitted-tv-wall-beside-the-window.webp",
        "alt": "Glossy dark fitted TV wall beside the window in a light Belgravia living room",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  },
  {
    "galleryId": "G73",
    "slug": "belgravia-headboard-bedside-cabinets",
    "title": "Belgravia Bespoke Bedside Cabinets & Headboard",
    "category": "Bespoke Joinery",
    "summary": "Bespoke bedroom furniture in Belgravia with a tall padded headboard, mirrored side panels and dark fitted bedside drawer cabinets.",
    "seoDescription": "Bespoke bedroom furniture in Belgravia with a tall padded headboard, mirrored side panels and dark fitted bedside drawer cabinets.",
    "keywords": [
      "belgravia bespoke bedside cabinets & headboard",
      "Belgravia headboard",
      "bespoke bedside cabinets",
      "fitted bedroom furniture London",
      "padded headboard wall"
    ],
    "highlights": [
      "Tall padded headboard",
      "Reflective side panels",
      "Coordinating bedside cabinets",
      "Open drawer details"
    ],
    "caseStudy": [
      {
        "heading": "A coordinated bed wall",
        "body": [
          "The padded headboard extends high above the bed, with reflective panels and bedside furniture on either side. Dark drawers connect the practical storage to the broader bedroom scheme."
        ]
      },
      {
        "heading": "Bedside storage in detail",
        "body": [
          "The close-up views show the bedside drawers open, making the storage arrangement visible. The integrated TV wall and dressing table opposite this furniture remain in their own project gallery."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The tall padded headboard is flanked by reflective panels and compact bedside cabinets. Dark grain fronts bring the storage into the same material palette as the wider bedroom. The open photographs show both the upper and lower drawers, making their depth and relationship to the mattress visible. Fine decorative lines run across the drawer fronts, contrasting with the broad horizontal sections of the padded headboard. The bedside surfaces remain accessible for lamps and personal items within the larger fitted bed-wall arrangement."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "Bedside furniture is most useful when designed around the mattress height and the reach of the person using it. Drawer opening should be checked against the bed frame and nearby fittings. Lighting, charging and switches can then be coordinated with the headboard and reflective panels rather than added after the furniture is installed."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g73/g73-01-tall-padded-headboard-with-reflective-side-panels-and.webp",
      "alt": "Tall padded headboard with reflective side panels and dark bedside cabinets",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g73/g73-01-tall-padded-headboard-with-reflective-side-panels-and.webp",
        "alt": "Tall padded headboard with reflective side panels and dark bedside cabinets",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g73/g73-02-bedside-cabinet-with-its-upper-drawer-open-beside.webp",
        "alt": "Bedside cabinet with its upper drawer open beside the padded headboard",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g73/g73-03-dark-bedside-cabinet-with-both-drawers-open.webp",
        "alt": "Dark bedside cabinet with both drawers open",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  },
  {
    "galleryId": "G74",
    "slug": "belgravia-round-basin-vanity-shelf",
    "title": "Belgravia Bespoke Floating Basin Shelf",
    "category": "Bespoke Joinery",
    "summary": "A dark floating vanity shelf in Belgravia supporting a round countertop basin, with a visible grain finish in a compact bathroom.",
    "seoDescription": "A dark floating vanity shelf in Belgravia supporting a round countertop basin, with a visible grain finish in a compact bathroom.",
    "keywords": [
      "belgravia bespoke floating basin shelf",
      "floating vanity shelf",
      "round basin vanity",
      "Belgravia bathroom furniture",
      "bespoke vanity top"
    ],
    "highlights": [
      "Dark floating vanity surface",
      "Round countertop basin",
      "Compact bathroom setting"
    ],
    "caseStudy": [
      {
        "heading": "A compact bathroom surface",
        "body": [
          "The dark vanity shelf projects from the wall beneath a round white basin. Its simple front edge contrasts with the pale wall finish and leaves the floor area below visually open."
        ]
      },
      {
        "heading": "The furniture in context",
        "body": [
          "The photograph shows the shelf, basin and wall-mounted tap together. It records a separate bathroom from the decorative-bowl cloakroom and rectangular-basin vanity elsewhere in the Belgravia project."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "A deep, dark shelf supports the round white basin and leaves the floor area below open. The grain runs along the surface and front edge, giving the simple rectangular form its main decorative quality. A wall-mounted tap and mirrored cabinet sit above. The open arrangement fits the narrow room without the depth of an enclosed vanity cupboard. The contrast between the circular basin and straight shelf edge is the defining feature."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A bespoke basin shelf needs the basin weight, tap position and waste route confirmed before its support is designed. The finished height should account for the bowl sitting above the surface. Moisture resistance, sealed edges and access to plumbing must be part of the agreed specification, even when the furniture appears visually simple."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g74/g74-01-round-white-basin-on-a-dark-floating-vanity.webp",
      "alt": "Round white basin on a dark floating vanity shelf in a compact bathroom",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g74/g74-01-round-white-basin-on-a-dark-floating-vanity.webp",
        "alt": "Round white basin on a dark floating vanity shelf in a compact bathroom",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  },
  {
    "galleryId": "G75",
    "slug": "belgravia-rectangular-basin-vanity",
    "title": "Belgravia Bespoke Wall-Mounted Bathroom Vanity",
    "category": "Bespoke Joinery",
    "summary": "Dark wall-mounted vanity in Belgravia with a rectangular basin, metallic pull handles and fitted storage beneath an illuminated mirror.",
    "seoDescription": "Dark wall-mounted vanity in Belgravia with a rectangular basin, metallic pull handles and fitted storage beneath an illuminated mirror.",
    "keywords": [
      "belgravia bespoke wall-mounted bathroom vanity",
      "Belgravia bathroom vanity",
      "wall mounted vanity cabinet",
      "rectangular basin vanity",
      "dark bathroom furniture London"
    ],
    "highlights": [
      "Wall-mounted cabinet",
      "Dark patterned fronts",
      "Rectangular metallic handles",
      "Raised rectangular basin"
    ],
    "caseStudy": [
      {
        "heading": "A wall-mounted bathroom cabinet",
        "body": [
          "The vanity combines a dark front with three rectangular handles and a raised white basin. Space beneath the cabinet keeps the patterned floor visible and gives the fitted furniture a light appearance."
        ]
      },
      {
        "heading": "Front and side views",
        "body": [
          "The wider photograph establishes the full cabinet beneath the mirror. The closer side view shows the basin profile, cabinet surface and handles, with lighting illuminating the area above the vanity."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The vanity pairs a dark grain cabinet with a raised rectangular basin. Large rectangular metallic pulls make the lower storage fronts easy to distinguish and repeat the shape of the basin above. The cabinet is wall-mounted, leaving the patterned floor visible underneath. An angled detail shows the basin edge, counter and front junction, while the main view places the vanity below a mirror with lighting at its base. The furniture offers a contrasting dark element within the otherwise pale bathroom."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "For a wall-mounted vanity, the basin size and plumbing arrangement determine how much usable storage remains inside. Structural support and fixing positions need to suit the loaded cabinet. The finish should be specified for the room conditions, with service access and everyday cleaning considered alongside the visual design."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g75/g75-01-wall-mounted-dark-vanity-with-rectangular-handles-beneath.webp",
      "alt": "Wall-mounted dark vanity with rectangular handles beneath a white rectangular basin",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g75/g75-01-wall-mounted-dark-vanity-with-rectangular-handles-beneath.webp",
        "alt": "Wall-mounted dark vanity with rectangular handles beneath a white rectangular basin",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g75/g75-02-side-detail-of-the-raised-basin-dark-vanity.webp",
        "alt": "Side detail of the raised basin, dark vanity front and rectangular metallic handles",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  },
  {
    "galleryId": "G76",
    "slug": "belgravia-light-fitted-study-desk",
    "title": "Belgravia Bespoke Light Fitted Study Desk",
    "category": "Bespoke Joinery",
    "summary": "A pale fitted study desk in Belgravia with shallow drawers and a textured inset writing surface, positioned beside a window.",
    "seoDescription": "A pale fitted study desk in Belgravia with shallow drawers and a textured inset writing surface, positioned beside a window.",
    "keywords": [
      "belgravia bespoke light fitted study desk",
      "light fitted study desk",
      "Belgravia home office",
      "bespoke compact desk",
      "textured desk surface"
    ],
    "highlights": [
      "Pale fitted desk",
      "Shallow drawers",
      "Textured inset surface",
      "Compact study setting"
    ],
    "caseStudy": [
      {
        "heading": "A separate compact study",
        "body": [
          "This pale desk fits into a narrow working space beside a window. Its broad side panel and shallow drawer fronts give the piece a simple fitted form with room for an office chair."
        ]
      },
      {
        "heading": "Work-surface detail",
        "body": [
          "The close-up photograph records the textured inset and its border. This desk is a separate installation from the darker window desk in the Belgravia bedroom."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The desk uses pale grain surfaces and a compact drawer arrangement to fit a small working area beside the window. Its end panel provides a solid side to the furniture, while the central space remains clear for a chair. The close photograph shows a textured inset writing surface meeting the surrounding pale border. This material contrast is subtle in the room view but becomes the defining detail at the work surface, where the furniture is used and touched."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A fitted desk should provide enough depth for the intended work without overwhelming a compact room. The chair, drawer projection and nearby window treatment need to be considered together. A sample of the inset surface is useful for checking texture, cleaning and suitability for writing before the final finish is selected."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g76/g76-01-pale-fitted-study-desk-with-shallow-drawers-beside.webp",
      "alt": "Pale fitted study desk with shallow drawers beside a window",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g76/g76-01-pale-fitted-study-desk-with-shallow-drawers-beside.webp",
        "alt": "Pale fitted study desk with shallow drawers beside a window",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g76/g76-02-textured-inset-work-surface-meeting-the-pale-desk.webp",
        "alt": "Textured inset work surface meeting the pale desk border",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  },
  {
    "galleryId": "G77",
    "slug": "belgravia-padded-headboard-bedroom-storage",
    "title": "Belgravia Bespoke Bedroom Storage & Padded Bed Wall",
    "category": "Bespoke Joinery",
    "summary": "Bespoke fitted bedroom furniture in Belgravia with a curved padded headboard, glossy cupboards, book shelves and integrated bedside details.",
    "seoDescription": "Bespoke fitted bedroom furniture in Belgravia with a curved padded headboard, glossy cupboards, book shelves and integrated bedside details.",
    "keywords": [
      "belgravia bespoke bedroom storage & padded bed wall",
      "padded headboard joinery",
      "Belgravia bedroom storage",
      "fitted bed wall",
      "bespoke bedroom bookcase"
    ],
    "highlights": [
      "Curved padded headboard panels",
      "Open book storage beside the bed",
      "Overhead cupboards",
      "Coordinated bedroom fittings"
    ],
    "caseStudy": [
      {
        "heading": "A padded bed wall with storage",
        "body": [
          "Curved horizontal padding forms the centre of this bed wall. Open book storage and bedside surfaces sit alongside it, with glossy cupboards above the bed."
        ]
      },
      {
        "heading": "Details within the bedroom scheme",
        "body": [
          "The wider bedroom view shows how the fitted elements relate to the surrounding storage. Closer photographs record the bedside switch panel and a wardrobe edge, preserving the detail views from this part of the Belgravia project."
        ]
      },
      {
        "heading": "Finishes and furniture details",
        "body": [
          "The bed wall combines a curved padded centre with glossy overhead cupboards and open book storage at the side. Pale wood-grain surfaces link the shelves and bedside area, while the contrasting padded finish gives the bed a softer setting. A wider view shows the adjacent fitted wardrobe as part of the same room. Detail images record the textured panel around the dimmer switches and the recessed fitting at the storage edge. These small interfaces explain how the joinery, lighting controls and upholstered elements were brought together."
        ]
      },
      {
        "heading": "Planning similar fitted furniture",
        "body": [
          "A complete bedroom scheme benefits from coordinating storage, lighting and the bed position in one set of drawings. The reach to switches, space for books and access to cupboards should be checked from the bed as well as from the room entrance. Material samples help resolve the transition between glossy fronts, grain and padded surfaces."
        ]
      }
    ],
    "cover": {
      "src": "/images/gallery/g77/g77-01-curved-padded-headboard-beneath-glossy-overhead-cupboards-with.webp",
      "alt": "Curved padded headboard beneath glossy overhead cupboards with open book storage alongside",
      "fit": "contain"
    },
    "images": [
      {
        "src": "/images/gallery/g77/g77-01-curved-padded-headboard-beneath-glossy-overhead-cupboards-with.webp",
        "alt": "Curved padded headboard beneath glossy overhead cupboards with open book storage alongside",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g77/g77-02-bedroom-view-showing-the-padded-bed-wall-bookcase.webp",
        "alt": "Bedroom view showing the padded bed wall, bookcase and adjacent fitted storage",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g77/g77-03-open-bookcase-and-bedside-surface-beside-the-curved.webp",
        "alt": "Open bookcase and bedside surface beside the curved padded headboard",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g77/g77-04-bedside-dimmer-switches-mounted-on-a-textured-inset.webp",
        "alt": "Bedside dimmer switches mounted on a textured inset panel",
        "fit": "contain"
      },
      {
        "src": "/images/gallery/g77/g77-05-close-detail-of-a-textured-wardrobe-edge-and.webp",
        "alt": "Close detail of a textured wardrobe edge and recessed fitting in the bedroom",
        "fit": "contain"
      }
    ],
    "location": "Belgravia, London"
  }
];

export const publicGalleryProjects = galleryProjects.filter(project => !hiddenGalleryIds.includes(project.galleryId));

export function getGalleryProject(slug: string) {
  return publicGalleryProjects.find(project => project.slug === slug);
}
