import media from "./k01-media.json";
import drawings from "../../public/projects/k01/drawing-manifest.json";

export type ProjectPhoto = { id?: string; src: string; alt: string; width: number; height: number };
export type CaseStudyMediaSlot = { id: string; required: boolean; asset?: { approved: boolean; src: string; alt: string; format: "image" | "pdf"; width?: number; height?: number } };
export type ProjectChapter = { id: string; label: string; title: string; paragraphs: string[]; challenge: string; solution: string; photos: string[]; drawing?: string; progress?: string[]; dateModified?: string };
export type ProjectStage = { id: "design" | "site" | "finished"; title: string; description: string; photos: ProjectPhoto[]; downloads?: {title: string; src: string; pageCount: number}[] };
export type CaseStudy = {
  projectCode: string; slug: string; status: "draft" | "published"; publicationApproved: boolean;
  title: string; summary: string; seo: {title: string; description: string};
  hero: ProjectPhoto; datePublished: string; dateModified?: string; media: CaseStudyMediaSlot[];
};
export const k01Photos = media as ProjectPhoto[];
export const k01Drawings = drawings;
export function k01Photo(id: string): ProjectPhoto {
  const photo = k01Photos.find(p => p.id === id);
  if (!photo) throw new Error("Missing K01 photograph: "+id);
  return photo;
}
const ids = (start: number, end: number) => Array.from({length: end-start+1}, (_,i) => "F"+String(start+i).padStart(2,"0"));
export const k01Chapters: ProjectChapter[] = [
  {
    id:"kitchen", label:"Kitchen", title:"A kitchen resolved from the first drawing to the final adjustment", dateModified:"2026-10-25",
    paragraphs:[
      "The kitchen brought together bespoke cabinetry, an island with a stone waterfall end, appliance housings and glazed wall cabinets. Form & Frame surveyed the room, produced the drawings, agreed the design with the client and ordered cabinetry from bespoke fabricators and manufacturers before completing the installation.",
      "The scope also included preparing separate stone drawings and coordinating the stone fabricator, electrician and plumber around the installation sequence. Appliance positions, handles, ironmongery, fillers and finishing details were considered together.",
      "On the right-hand wall, panelling echoes the upper and lower cabinet fronts to continue the kitchen’s proportions around the room. A narrow corner display with glass shelves completes the return."
    ],
    challenge:"A roughly 1.5-metre-wide two-part lift-up front needed to open smoothly and leave comfortable access beneath it, while retaining a broad glazed elevation.",
    solution:"Form & Frame adapted the existing lift arrangement with additional piston support, then adjusted its operation on site. The demonstration shows the movement and access achieved. The main installation was completed in September 2025; further adjustments followed, including the October demonstration.",
    photos:["F14","F32","F28",...ids(15,36).filter(id=>!["F32","F28"].includes(id))], drawing:"kitchen", progress:["P08","P12","P13"]
  },
  {
    id:"entrance", label:"Entrance", title:"A practical welcome behind bevelled mirror doors", dateModified:"2026-10-24",
    paragraphs:[
      "The porch pairs a tall shoe cabinet with a coat-hook wall and a fitted bench on the opposite side. Two large bevelled mirror doors, finished with solid brass knobs, keep the shoe storage visually quiet.",
      "Inside, angled shelves make the shoes easy to see. Sensor-operated, four-millimetre LED strips provide a fine line of light within the storage. The bench gives a comfortable place to change shoes, with a drawer below and hooks above."
    ],
    challenge:"Bring generous shoe and coat storage into the entrance without losing a clear, comfortable arrival space.",
    solution:"The layout separates enclosed storage from everyday hooks and seating, with carefully fitted panels, mirror edges and discreet lighting.",
    photos:["F07","F08","F11","F09","F10","F12","F13"], drawing:"entrance", progress:["P07","P05","P06"]
  },
  {
    id:"under-stairs", label:"Under-stairs", title:"A clean front with essential access behind it", dateModified:"2026-10-24",
    paragraphs:["A large pull-out drawer and a separate left-hand door make use of the space beneath the staircase. The sloping fronts follow the stair line and bring the storage into the finished hallway."],
    challenge:"The area also contained a gas meter, cables and maintenance points that needed to remain accessible.",
    solution:"Form & Frame planned the storage and access together, concealing the services behind a coordinated fitted front while preserving the route needed for maintenance.",
    photos:["F05","F06"], drawing:"under-stairs", progress:["P18"]
  },
  {
    id:"living-room", label:"Cinema / TV unit", title:"Supplied cabinetry, individually finished details", dateModified:"2026-10-24",
    paragraphs:["The TV unit was manufactured by another company and installed by Form & Frame. The scope included fitting the supplied cabinetry and resolving its relationship to the surrounding room.", "Form & Frame made and fitted the adjoining curved walnut corner, using rounded timber beadings and brass inlays to give the transition its own character."],
    challenge:"Make the supplied TV furniture and the bespoke walnut corner feel connected in the finished space.",
    solution:"The installation brings the cabinet lines, curved timber elements and brass details together at the junction between the two pieces.",
    photos:["F01","F03","F02","F04"], progress:["P03","P04","P15"]
  },
  {
    id:"bedroom", label:"Bedroom wardrobe", title:"Four doors, fitted to the room", dateModified:"2026-10-24",
    paragraphs:["Form & Frame designed and installed the four-door bedroom wardrobe, coordinating its external proportions, internal fit-out and final relationship to the walls and ceiling. The photographs show both the finished elevation and the drawers, shelves, hanging space and integrated lighting within."],
    challenge:"Resolve the wardrobe’s ends and upper junctions so the tall cabinetry fits the existing room.",
    solution:"Fitted end panels, scribes and final door adjustment bring the wardrobe into the room’s corners, with coordinated handles and carefully integrated internal lighting.",
    photos:["F39","F41","F42","F37","F38","F40","F43","F44"], drawing:"bedroom-wardrobe", progress:["P17"]
  },
  {
    id:"loft", label:"Loft dressing room", title:"A room within the room", dateModified:"2026-10-24",
    paragraphs:["The loft needed a separate dressing area within an existing bedroom. Form & Frame designed the wardrobe arrangement to form the dividing wall itself, incorporating a pocket door into the entrance.", "Tall storage occupies the higher side. Beneath the lower roof slope, smaller and larger drawers sit alongside a makeup table with lighting, making useful furniture out of the restricted height."],
    challenge:"Create separation, circulation and useful storage within a pitched-roof room without treating each requirement as an isolated piece.",
    solution:"The wardrobes, partition, pocket entrance and low furniture were designed and installed as one connected layout. The site footage and finished walkthrough show how that arrangement developed.",
    photos:["F45","F49","F47","F46","F48","F50","F51"], progress:["P01","P02"]
  },
  {
    id:"internal-doors", label:"Internal doors", title:"A consistent finish from one room to the next",
    paragraphs:["The project extended to internal-door drawings, ordering, ironmongery and fitting. Veneered doors, glazed pairs and coordinated frames carry timber and brass details between the rooms.", "The close views show the work at the frame corners, glazing, inlays and concealed hinges. The drawings and finished photographs below show this part of the project in detail."],
    challenge:"Coordinate different openings and door arrangements while keeping the visible detailing consistent.",
    solution:"Form & Frame produced the door drawings and carried out the fitting, bringing the frames, leaves, hardware and final adjustments together across the house.",
    photos:["F58","F52","F65",...ids(53,66).filter(id=>!["F58","F65"].includes(id))], drawing:"internal-doors"
  }
];
export function k01Stages(chapter: ProjectChapter): ProjectStage[] {
  const stages: ProjectStage[] = [];
  const sets = k01Drawings.filter(d=>d.id===chapter.drawing || (chapter.id==="kitchen" && d.id==="stone"));
  if (sets.length) stages.push({id:"design",title:"Drawings & design",description:"Original plans, elevations and construction details. Open a sheet to inspect the drawing, or download the complete PDF.",photos:sets.flatMap(d=>d.pages),downloads:sets.map(({title,src,pageCount})=>({title,src,pageCount}))});
  if (chapter.progress?.length) stages.push({id:"site",title:["bedroom","under-stairs"].includes(chapter.id)?"Before fitting":"On site",description:chapter.id==="under-stairs"?"The space before the storage was fitted, showing the meters, cables and service connections that needed to remain accessible.":chapter.id==="bedroom"?"The original bedroom before the wardrobe was fitted, showing the wall, doorway and ceiling junctions the design needed to resolve.":chapter.id==="entrance" || chapter.id==="living-room" ? "The room before the fitted furniture: original site photographs showing the space the installation had to work with." : "Original photographs from the site, showing preparation, assembly and fitting before the finished surfaces.",photos:chapter.progress.map(k01Photo)});
  stages.push({id:"finished",title:"The finished work",description:"The completed installation and its details. All finished photographs are shown below. Select any photograph to inspect it at a larger size.",photos:chapter.photos.map(k01Photo)});
  return stages;
}
const approvedMedia = (photos: ProjectPhoto[], pdfs: typeof drawings): CaseStudyMediaSlot[] => [
  ...photos.map(p=>({id:p.id ?? p.src,required:true,asset:{...p,approved:true,format:"image" as const}})),
  ...pdfs.map(p=>({id:p.id,required:true,asset:{src:p.src,alt:p.title,approved:true,format:"pdf" as const}}))
];
export const caseStudies: readonly CaseStudy[] = [
  {
    projectCode:"K01",slug:"k01-surbiton",status:"published",publicationApproved:true,
    title:"One home. Every detail connected.",
    summary:"A bespoke kitchen and whole-home joinery project in Surbiton, personally taken from survey and drawings through procurement, coordination and installation by Form & Frame.",
    seo:{title:"K01 Surbiton Kitchen & Whole-Home Joinery | Form & Frame",description:"Explore a five-month kitchen and whole-home installation: original drawings, site progress, finished rooms and lift-up cabinet video. Designed and installed by Form & Frame."},
    hero:k01Photo("F14"),datePublished:"2026-10-17",dateModified:"2026-10-18",
    media:approvedMedia(k01Photos.filter(p=>p.id?.startsWith("F")),drawings)
  },
  {
    projectCode:"K01 · Doors",slug:"k01-surbiton-internal-doors",status:"published",publicationApproved:true,
    title:"The details between the rooms.",
    summary:"Internal-door drawings and installation for the K01 Surbiton home: veneered leaves, glazed pairs, brass inlays and carefully fitted frames.",
    seo:{title:"K01 Internal Door Design & Installation Case Study | Form & Frame",description:"See Form & Frame’s internal-door drawings and fitting at K01: glazed double doors, veneer, brass inlays and concealed hinges. Installation enquiries in Luton and nearby areas."},
    hero:k01Photo("F58"),datePublished:"2026-10-17",dateModified:"2026-10-18",
    media:approvedMedia(k01Chapters[6].photos.map(k01Photo),drawings.filter(d=>d.id==="internal-doors"))
  }
];
export function getCaseStudy(slug: string) { return caseStudies.find(study=>study.slug===slug); }
export function isCaseStudyPublished(study: CaseStudy) {
  return study.status==="published" && study.publicationApproved && study.media.every(slot=>slot.asset ? slot.asset.approved : !slot.required);
}
export const publishedCaseStudies=caseStudies.filter(isCaseStudyPublished);
export const unpublishedCaseStudyPaths=caseStudies.filter(study=>!isCaseStudyPublished(study)).map(study=>"/case-studies/"+study.slug);


// Overview order follows the visitor's route through the finished home.
export const k01Rooms = ["kitchen","living-room","entrance","bedroom","loft","internal-doors","under-stairs"].map(id=>k01Chapters.find(ch=>ch.id===id)!);
const roomSlugs: Record<string,string> = {kitchen:"kitchen","living-room":"cinema-tv-unit",entrance:"entrance",bedroom:"bedroom-wardrobe",loft:"loft-dressing-room","under-stairs":"under-stairs"};
export function k01RoomHref(chapter: ProjectChapter) { return chapter.id==="internal-doors"?"/case-studies/k01-surbiton-internal-doors":"/case-studies/k01-surbiton/"+roomSlugs[chapter.id]; }
export const k01NestedRooms = k01Rooms.filter(ch=>ch.id!=="internal-doors");
export function getK01Room(slug: string) { return k01NestedRooms.find(ch=>roomSlugs[ch.id]===slug); }
export function k01RoomSlug(chapter: ProjectChapter) { return roomSlugs[chapter.id]; }
export function k01RoomDescription(chapter: ProjectChapter) { return chapter.id==="kitchen"?"K01 kitchen installation: bespoke cabinetry, stone coordination, original drawings, three site stages and the finished kitchen with lift-up cabinet video.":chapter.paragraphs[0].split(". ")[0]+"."; }
