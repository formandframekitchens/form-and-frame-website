import "server-only";

// Synthetic data only. This branch is a preview baseline, not a production
// replacement for the owner's separate, access-controlled private catalogue.
export type PrivatePhoto = { id: string; thumbnail: string; alt: string; width: number; height: number };
export type PrivateFilm = { id: string; poster: string; title: string; quality: string; duration: number; width: number; height: number };
export type PrivateProject = { slug: string; title: string; category: string; summary: string; cover: PrivatePhoto; photos: PrivatePhoto[]; workshopPhotos: PrivatePhoto[]; videos: PrivateFilm[] };
export type PrivateAsset = { file: string; pathname: string; kind: string; width: number; height: number; bytes: number };
const photo: PrivatePhoto = { id: "synthetic-preview-photo", thumbnail: "synthetic-preview-photo", alt: "Synthetic access-control test image", width: 1, height: 1 };
export const privateProjects: PrivateProject[] = [{
  slug: "synthetic-preview", title: "Synthetic access-control example",
  category: "Test fixture", summary: "No customer project data is included in this preview.",
  cover: photo, photos: [photo], workshopPhotos: [], videos: [],
}];
// There are deliberately no real Blob paths, media or customer identifiers.
export const privateAssets: Record<string, PrivateAsset> = {};
export const mediaUrl = (id: string) => `/api/private-case-studies/media/${id}`;
