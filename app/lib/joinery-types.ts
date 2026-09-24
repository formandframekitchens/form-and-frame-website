export const joineryOptions = [
  { value: "wardrobes", label: "Bespoke wardrobes" },
  { value: "alcove-units", label: "Bespoke alcove units" },
  { value: "bookcases", label: "Bespoke bookcases" },
  { value: "entertainment-units", label: "Entertainment units" },
  { value: "office-furniture", label: "Office furniture" },
  { value: "under-stairs-storage", label: "Under-stairs storage" },
  { value: "unique-furniture", label: "Unique furniture" },
] as const;

export type JoineryId = typeof joineryOptions[number]["value"];
