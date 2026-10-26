import { getCaseStudy, isCaseStudyPublished, k01Photo, k01RoomHref, k01Rooms, type ProjectChapter } from "./case-studies";
import type { GalleryCategory, GalleryFilters } from "./gallery-catalog";

export type CaseStudyPortfolioItem = { chapter: ProjectChapter; categories: GalleryCategory[]; title: string; summary: string; href: string; cover: ReturnType<typeof k01Photo> };
const details: Record<string,{categories:GalleryCategory[];title:string;summary:string}> = {
  kitchen:{categories:["kitchens"],title:"K01 — Bespoke kitchen installation",summary:"From technical drawings and stone coordination to cabinet fitting, the lift-up front and finished details."},
  "living-room":{categories:["entertainment-units"],title:"K01 — Cinema / TV unit",summary:"Installation of supplied TV cabinetry, with a personally made curved walnut-and-brass corner detail."},
  entrance:{categories:["unique-furniture"],title:"K01 — Entrance storage & seating",summary:"Bevelled mirror doors, illuminated shoe storage and a coordinated coat-hook wall with a fitted bench."},
  bedroom:{categories:["wardrobes"],title:"K01 — Four-door bedroom wardrobe",summary:"Follow the drawings, original room and finished wardrobe, including its internal storage and lighting."},
  loft:{categories:["wardrobes","unique-furniture"],title:"K01 — Loft dressing room",summary:"Wardrobes form a room divider with a pocket-door entrance, low drawers and a fitted makeup area."},
  "internal-doors":{categories:["internal-doors"],title:"K01 — Internal doors",summary:"Original door drawings and fitted veneered leaves, glazed pairs, brass inlays and concealed hinges."},
  "under-stairs":{categories:["under-stairs-storage"],title:"K01 — Under-stairs storage",summary:"Drawings, the space before fitting and the finished pull-out storage, with access to meters and services."},
};
const study=getCaseStudy("k01-surbiton");
export const k01PortfolioItems: CaseStudyPortfolioItem[] = study && isCaseStudyPublished(study) ? k01Rooms.map(chapter=>({chapter,...details[chapter.id],href:k01RoomHref(chapter),cover:k01Photo(chapter.photos[0])})) : [];
export const k01JoineryItems=k01PortfolioItems.filter(item=>item.chapter.id!=="kitchen");
export function filterK01Joinery(filters:GalleryFilters) {
  const words=filters.q.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g," ").trim().split(/\s+/).filter(Boolean);
  return k01JoineryItems.filter(item=>{
    const text=["K01 Surbiton Form Frame",item.title,item.summary,item.chapter.label,...item.categories].join(" ").toLowerCase().replace(/[^a-z0-9]+/g," ");
    return (!filters.category || item.categories.includes(filters.category)) && words.every(word=>text.includes(word));
  });
}
