export type ProgressGallerySection = {
  title: string;
  note: string;
  images: { pathname: string; alt: string }[];
};

export const progressGallerySections: ProgressGallerySection[] = [
  {
    title: "Alex — Progress Archive",
    note: "Restricted project-progress photography shown chronologically. These images are kept in private storage and are not part of the public Form & Frame gallery.",
    images: [
      { pathname: "alex-progress/2024-07-22/20240722-172629.jpg", alt: "Project progress — 22 July 2024" },
      { pathname: "alex-progress/2024-08-28/20240828-112624.jpg", alt: "Project progress — 28 August 2024" },
      { pathname: "alex-progress/2024-08-29/20240829-165746.jpg", alt: "Project progress — 29 August 2024" },
      { pathname: "alex-progress/2024-09-26/20240926-192319.jpg", alt: "Project progress — 26 September 2024" },
      { pathname: "alex-progress/2024-11-19/20241119-194128.jpg", alt: "Project progress — 19 November 2024" },
      { pathname: "alex-progress/2025-01-16/20250116-122738.jpg", alt: "Project progress — 16 January 2025" },
      { pathname: "alex-progress/2025-02-28/20250228-124211.jpg", alt: "Project progress — 28 February 2025" },
      { pathname: "alex-progress/2025-03-28/20250328-175007.jpg", alt: "Project progress — 28 March 2025" },
      { pathname: "alex-progress/2025-04-23/20250423-083059.jpg", alt: "Project progress — 23 April 2025" },
      { pathname: "alex-progress/2025-05-09/20250509-161620.jpg", alt: "Project progress — 9 May 2025" },
      { pathname: "alex-progress/2025-05-15/20250515-142627.jpg", alt: "Project progress — 15 May 2025" },
      { pathname: "alex-progress/2025-06-11/20250611-100114.jpg", alt: "Project progress — 11 June 2025" },
      { pathname: "alex-progress/2025-06-17/20250617-174933.jpg", alt: "Project progress — 17 June 2025" },
    ],
  },
];
