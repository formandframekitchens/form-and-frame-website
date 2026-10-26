export const CONSENT_KEY = "ff_analytics_choice_v1";
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
export type AnalyticsConsent = "accepted" | "declined" | "unknown";

export function readAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return "unknown";
  try {
    const stored = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
    if (stored && Date.now() - stored.at < MAX_AGE && ["accepted", "declined"].includes(stored.choice)) return stored.choice;
  } catch { /* If storage is unavailable, analytics remains off. */ }
  return "unknown";
}

export function saveAnalyticsConsent(choice: "accepted" | "declined") {
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, at: Date.now() })); } catch { return; }
  window.dispatchEvent(new Event("ff-analytics-choice"));
}

export function subscribeAnalyticsConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("ff-analytics-choice", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("ff-analytics-choice", callback);
  };
}
