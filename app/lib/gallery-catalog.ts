import { enquiryHref, type ServiceId } from "./enquiry";
import { publicGalleryProjects, type GalleryProject } from "./gallery-projects";
import { bottomGalleryIds } from "./gallery-visibility";
import type { JoineryId } from "./joinery-types";

export const galleryCategories = [
  { value: "kitchens", label: "Kitchens" },
  { value: "wardrobes", label: "Wardrobes" },
  { value: "alcove-units", label: "Alcove units" },
  { value: "bookcases", label: "Bookcases" },
  { value: "entertainment-units", label: "Media & TV units" },
  { value: "office-furniture", label: "Home offices" },
  { value: "unique-furniture", label: "Unique furniture" },
  { value: "internal-doors", label: "Internal doors" },
] as const;

export type GalleryCategory = typeof galleryCategories[number]["value"];
export type GalleryFilters = { category: GalleryCategory | ""; q: string };
export type GalleryReference = Pick<GalleryProject, "galleryId" | "slug" | "title">;

// First category is the most specific enquiry choice. Others aid discovery.
const projectCategories: Record<string, GalleryCategory[]> = {
  G01: ["kitchens"], G02: ["bookcases", "entertainment-units"], G03: ["wardrobes"],
  G04: ["entertainment-units"], G06: ["unique-furniture"], G07: ["wardrobes", "unique-furniture"],
  G08: ["entertainment-units"], G09: ["bookcases", "unique-furniture"], G11: ["internal-doors"],
  G12: ["bookcases", "office-furniture"], G13: ["entertainment-units"], G14: ["unique-furniture"],
  G15: ["entertainment-units"], G16: ["bookcases"], G17: ["unique-furniture"],
  G19: ["unique-furniture", "alcove-units"], G20: ["wardrobes", "alcove-units"],
  G21: ["entertainment-units", "bookcases"], G22: ["office-furniture"], G23: ["entertainment-units"],
  G25: ["unique-furniture"], G26: ["entertainment-units"], G27: ["wardrobes", "unique-furniture"],
  G29: ["unique-furniture"], G30: ["unique-furniture"],
  G31: ["office-furniture", "bookcases"], G32: ["alcove-units", "entertainment-units"],
  G33: ["unique-furniture"], G34: ["wardrobes", "unique-furniture"],
  G35: ["bookcases","unique-furniture"], G36: ["unique-furniture"],
  G37: ["wardrobes"], G38: ["unique-furniture"], G39: ["entertainment-units","unique-furniture"],
  G41: ["wardrobes"], G42: ["entertainment-units", "bookcases"], G43: ["office-furniture", "bookcases"],
  G44: ["bookcases"], G45: ["alcove-units", "bookcases"], G46: ["unique-furniture"],
  G47: ["entertainment-units"], G48: ["entertainment-units"], G49: ["wardrobes"],
  G50: ["unique-furniture"], G51: ["wardrobes"], G52: ["unique-furniture"],
  G54: ["unique-furniture"], G55: ["unique-furniture"], G56: ["unique-furniture"],
  G57: ["bookcases"], G58: ["unique-furniture"], G59: ["unique-furniture", "bookcases"], G60: ["unique-furniture"],
  G61: ["alcove-units", "bookcases"],
  G62: ["wardrobes","unique-furniture"],
  G63: ["wardrobes"],
  G64: ["unique-furniture"],
  G65: ["unique-furniture"],
  G66: ["unique-furniture"],
  G67: ["entertainment-units"],
  G68: ["unique-furniture"],
  G69: ["unique-furniture"],
  G70: ["wardrobes"],
  G71: ["office-furniture"],
  G72: ["entertainment-units"],
  G73: ["unique-furniture"],
  G74: ["unique-furniture"],
  G75: ["unique-furniture"],
  G76: ["office-furniture"],
  G77: ["unique-furniture","bookcases"],
};

const retiredIds: Record<string, string> = { G05: "G19", G10: "G02", G18: "G04", G24: "G13", G28: "G27", G53: "G01" };
// Commission grouping must not change when a public title is improved.
const projectFamilies: Record<string, readonly string[]> = {
  soho: ["G02", "G03", "G07"],
  "dark-display-furniture": ["G15", "G16"],
  fulham: ["G30", "G31", "G32", "G33", "G34"],
  belgravia: ["G35", "G36", "G37", "G38", "G39", "G70", "G71", "G72", "G73", "G74", "G75", "G76", "G77"],
  stourcliff: ["G01", "G48", "G49", "G50", "G51", "G52", "G54", "G55"],
  esher: ["G41", "G42", "G43", "G44", "G45", "G46", "G56", "G58", "G60", "G61", "G62", "G63"],
  "dining-and-eaves-joinery": ["G47", "G64", "G65", "G66", "G67", "G68", "G69"],
};

export function categoriesForProject(project: GalleryProject) {
  return projectCategories[project.galleryId] ?? [];
}

export function projectFamily(project: GalleryProject) {
  return Object.entries(projectFamilies).find(([, ids]) => ids.includes(project.galleryId))?.[0] ?? project.galleryId;
}

export function groupProjectsByFamily(projects: GalleryProject[]) {
  const families = new Map<string, GalleryProject[]>();
  for (const project of projects) {
    const family = projectFamily(project);
    families.set(family, [...(families.get(family) ?? []), project]);
  }
  return [...families.values()].flatMap(items => items.sort((a, b) => Number(a.galleryId.slice(1)) - Number(b.galleryId.slice(1))));
}

export function readGalleryFilters(query: Record<string, string | string[] | undefined>): GalleryFilters {
  return {
    category: galleryCategories.find(category => category.value === query.category)?.value ?? "",
    q: typeof query.q === "string" ? query.q.trim().slice(0, 100) : "",
  };
}

export function galleryHref(filters: Partial<GalleryFilters> = {}) {
  const query = new URLSearchParams();
  if (filters.category) query.set("category", filters.category);
  if (filters.q) query.set("q", filters.q);
  return "/gallery" + (query.size ? "?" + query.toString() : "");
}

function searchable(value: string) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function filterGalleryProjects(filters: GalleryFilters) {
  const terms = searchable(filters.q).split(/\s+/).filter(Boolean);
  const matches = publicGalleryProjects.filter(project => {
    const categories = categoriesForProject(project);
    if (filters.category && !categories.includes(filters.category)) return false;
    const aliases = Object.entries(retiredIds).filter(([, id]) => id === project.galleryId).map(([id]) => id);
    const text = searchable([project.galleryId, ...aliases, project.title, project.location, project.summary, ...project.keywords,
      ...galleryCategories.filter(category => categories.includes(category.value)).map(category => category.label)].join(" "));
    return terms.every(term => text.includes(term));
  });
  const mainProjects = matches.filter(project => !bottomGalleryIds.includes(project.galleryId));
  const bottomProjects = matches.filter(project => bottomGalleryIds.includes(project.galleryId))
    .sort((a, b) => bottomGalleryIds.indexOf(a.galleryId) - bottomGalleryIds.indexOf(b.galleryId));
  return [...groupProjectsByFamily(mainProjects), ...bottomProjects];
}

export function galleryEnquirySelection(project: GalleryProject): { service: ServiceId; joinery?: JoineryId; project: string } {
  const category = categoriesForProject(project)[0];
  if (category === "kitchens") return { service: "kitchen-installation", project: project.slug };
  if (category === "internal-doors") return { service: "internal-door-installation", project: project.slug };
  return { service: "bespoke-joinery", joinery: category ?? "unique-furniture", project: project.slug };
}

export function galleryEnquiryHref(project: GalleryProject) {
  return enquiryHref(galleryEnquirySelection(project));
}

export function getEnquiryProject(slug: string, service: string) {
  const canonicalSlug = slug === "manchester-makeup-island-dressing-table" ? "manchester-walk-in-wardrobe" : slug;
  const project = publicGalleryProjects.find(item => item.slug === canonicalSlug);
  return project && galleryEnquirySelection(project).service === service ? project : undefined;
}

export function relatedGalleryProjects(project: GalleryProject) {
  const categories = categoriesForProject(project);
  const score = (item: GalleryProject) => categoriesForProject(item).reduce((total, category) => total + (categories.includes(category) ? 4 : 0), 0)
    + (categoriesForProject(item)[0] === categories[0] ? 6 : 0)
    + (projectFamily(item) === projectFamily(project) ? 3 : 0);
  return publicGalleryProjects.filter(item => item.slug !== project.slug && score(item) > 0)
    .sort((a, b) => score(b) - score(a) || Number(a.galleryId.slice(1)) - Number(b.galleryId.slice(1))).slice(0, 3);
}
