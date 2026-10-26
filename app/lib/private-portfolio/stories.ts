import "server-only";
export type ProjectStory = {
  introduction: string;
  scope: { label: string; value: string }[];
  photoCaptions?: Record<string, string>;
  process?: { title: string; description: string; landscape: boolean };
  gallery?: { title: string; description: string; first: boolean };
  sections: { heading: string; paragraphs: string[] }[];
};
export const privateProjectStories: Record<string, ProjectStory> = {
  "synthetic-preview": {
    introduction: "Synthetic access-control example. No real private project content.",
    scope: [{ label: "Purpose", value: "Authentication testing" }],
    sections: [],
  },
};
