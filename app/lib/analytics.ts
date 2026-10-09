export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

export const GA_ENABLED = Boolean(
  GA_MEASUREMENT_ID && /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID),
);

export type AnalyticsEvent =
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "enquiry_start"
  | "enquiry_submit_success"
  | "kitchen_plan_enquiry"
  | "primary_cta_click"
  | "important_case_study_view"
  | "supplier_portal_view"
  | "instagram_outbound_click";

type EventParameters = Record<string, string | boolean | number>;

export function trackEvent(name: AnalyticsEvent, parameters: EventParameters = {}) {
  if (!GA_ENABLED || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, parameters);
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
