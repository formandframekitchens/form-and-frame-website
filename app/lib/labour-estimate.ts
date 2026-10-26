export const KITCHEN_LABOUR_DAY_RATE = 300;

// Whole agreed labour days only; this does not estimate the duration of a kitchen fit.
export function labourEstimate(days: string, specialists: number): number | null {
  if (!/^[1-9]\d{0,2}$/.test(days) || Number(days) > 365 || ![1, 2].includes(specialists)) return null;
  return Number(days) * specialists * KITCHEN_LABOUR_DAY_RATE;
}
