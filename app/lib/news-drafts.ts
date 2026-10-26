import type { NewsArticle } from "./news";

// Review drafts are excluded from public feeds, homepage and sitemap.
// Before publication, move to newsArticles with the actual release date/time.
export type NewsDraft = NewsArticle & { draft: true; preparedAt: string };
export const newsDrafts: NewsDraft[] = [
  {
    "slug": "lift-up-kitchen-cabinet-clearance",
    "title": "Lift-up kitchen cupboards: check the opening space before choosing the hardware",
    "description": "Compare the movement, ceiling clearance, reach and specification details of lift-up wall cabinets before ordering a kitchen or bespoke cupboard.",
    "category": "Installation advice",
    "topic": "installation-advice",
    "published": "2026-10-26",
    "checked": "2026-10-26",
    "draft": true,
    "preparedAt": "2026-10-26T09:55:00Z",
    "enquiryUrl": "/contact?service=kitchen-installation&installation=own-kitchen#enquiry-form",
    "image": {
      "src": "/images/news/ai-lift-up-cabinet-planning.webp",
      "alt": "AI concept of a raised kitchen wall-cabinet front with visible space above it",
      "caption": "Original AI concept illustrating a lift-up cupboard and the surrounding opening space. It is not a Blum product photograph, an exact mechanism, a completed Form & Frame project or a technical installation drawing. Confirm the chosen hardware and clearances from the current product instructions.",
      "credit": "AI concept created for Form & Frame"
    },
    "sections": [
      {
        "title": "Start with the movement, then choose the finish",
        "paragraphs": [
          "A wall cupboard can look right when closed and still be awkward to open or reach. Decide how the front should move before selecting its finish. The ceiling, cornice, neighbouring cabinets and the person using the cupboard all belong in that decision.",
          "Blum’s current UK pages show the AVENTOS top family in eclipse black. We checked the range on 26 October 2026. This is a current specification reference, not an announcement of a launch on that date. Local stock, individual component availability and suitability for your cabinet still need confirmation."
        ]
      },
      {
        "title": "Four movements to discuss with your designer",
        "paragraphs": [
          "The AVENTOS HF top folds a two-part front; HS top moves a single front up and over; HL top raises a single front parallel to the cabinet; HK top is a stay lift. These descriptions explain the broad movement only. They do not select the right fitting, front size or load rating for a particular kitchen.",
          "Blum describes HK top as useful for low ceilings. That does not remove the need to check the actual opening envelope. A cornice, ceiling slope, projecting light or adjacent tall unit can still affect the design. Use the current planning information for the exact hardware combination."
        ]
      },
      {
        "title": "Review the open cabinet on the room elevation",
        "paragraphs": [
          "Ask for the proposed front to be shown open as well as closed. Include the finished ceiling, any cornice, nearby units and lighting. Check the full movement rather than only the final open position: a front can clear its destination but still meet an obstruction on the way.",
          "For a cabinet above a worktop, consider what normally sits underneath and where someone will stand. Think about the handle or closing control at its highest point and whether the intended user can reach it comfortably. A showroom demonstration can help establish a preference; the installed height still needs checking in your room."
        ]
      },
      {
        "title": "Keep the specification together",
        "paragraphs": [
          "Give the designer or fitter the cabinet dimensions, front construction, front weight including its handle and the exact hardware reference. Identify any split front, glazed section or other detail that changes the specification. A photograph of a similar cupboard cannot establish these values.",
          "For powered movement, agree the specified components, power-supply location and future access with the appropriate installer. Keep this separate from assuming that every lift system has the same electrical requirements. If the layout changes, update the drawing and component schedule together."
        ]
      },
      {
        "title": "Choose visible finishes after the practical checks",
        "paragraphs": [
          "The mechanism and cover caps may be visible when the cupboard is open. Compare the selected finish with the cabinet interior and confirm the complete component list before ordering. A dark finish is a design choice; it does not make an unsuitable mechanism compatible.",
          "At handover, ask for the normal opening and closing action to be demonstrated and retain the exact product references and care instructions. Agree how any future adjustment or fault should be reported. Avoid forcing a front that stops moving normally."
        ]
      },
      {
        "title": "Prepare a useful installation enquiry",
        "paragraphs": [
          "For independent kitchen fitting or bespoke cabinetry in Luton, Dunstable and our approved nearby service area, include any lift-up cupboards in the initial brief. We can review the installation responsibilities and identify details that need resolving with the supplier. Form & Frame is independent and is not affiliated with or endorsed by Blum."
        ],
        "checklist": [
          "Latest room plan and elevations, including the ceiling and surrounding units.",
          "Cabinet and front dimensions, material, weight and handle details.",
          "Exact proposed hardware references and current planning instructions.",
          "Photographs of the room and any obstructions or access limitations.",
          "Your project area, preferred timing and who supplies and specifies each component."
        ]
      }
    ],
    "sources": [
      {
        "title": "Blum UK — AVENTOS top in eclipse black, current range",
        "url": "https://www.blum.com/gb/en/products/liftsystems/aventos-eclipse-black/overview/"
      },
      {
        "title": "Blum UK — movement types and eclipse-black programme",
        "url": "https://www.blum.com/gb/en/products/liftsystems/aventos-eclipse-black/programme/"
      },
      {
        "title": "Blum UK — current AVENTOS HK top downloads and planning documents",
        "url": "https://www.blum.com/gb/en/products/liftsystems/aventos-hk-top/downloads-videos/"
      }
    ],
    "links": [
      {
        "label": "Independent kitchen installation and preparation",
        "href": "/kitchen-installation#fitting-checklist"
      },
      {
        "label": "Bespoke kitchen planning",
        "href": "/bespoke-kitchens"
      },
      {
        "label": "Our public kitchen installation work",
        "href": "/kitchens"
      },
      {
        "label": "Local service coverage",
        "href": "/areas#local-coverage"
      }
    ]
  }
];
