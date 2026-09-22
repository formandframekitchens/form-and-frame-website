// To add photography: put files in public/images, then set each src to
// "/images/filename.jpg" and update its alt text. Cropping is handled by Photo.
type PhotoConfig = { src: string; alt: string; tone: "kitchen" | "detail" | "installation" };
export const homepagePhotos = {
  hero: { src: "", alt: "Finished kitchen", tone: "kitchen" },
  technical: { src: "", alt: "Precision joinery and worktop detail", tone: "detail" },
  finished: { src: "", alt: "Finished kitchen", tone: "kitchen" },
  craftsmanship: { src: "", alt: "Craftsmanship detail", tone: "detail" },
  complex: { src: "", alt: "Complex kitchen installation", tone: "installation" },
} satisfies Record<string, PhotoConfig>;
export type PhotoKey = keyof typeof homepagePhotos;
