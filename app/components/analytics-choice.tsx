"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { GA_ENABLED, GA_MEASUREMENT_ID } from "../lib/analytics";
import { readAnalyticsConsent, saveAnalyticsConsent, subscribeAnalyticsConsent } from "../lib/analytics-consent";

export function AnalyticsPreferencesButton() {
  if (!GA_ENABLED) return null;
  return <button className="analytics-preferences" type="button" onClick={() => window.dispatchEvent(new Event("ff-open-analytics-choice"))}>Cookie preferences</button>;
}

export function AnalyticsChoice() {
  const choice = useSyncExternalStore(subscribeAnalyticsConsent, readAnalyticsConsent, () => "pending" as const);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    const open = () => setEditing(true);
    window.addEventListener("ff-open-analytics-choice", open);
    return () => window.removeEventListener("ff-open-analytics-choice", open);
  }, []);

  function choose(next: "accepted" | "declined") {
    if (next === "declined" && window.gtag) {
      // Stop the existing runtime before clearing its cookies and reloading.
      (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
      const domains = [location.hostname, `.${location.hostname}`, `.${location.hostname.replace(/^www\./, "")}`];
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.trim().split("=")[0];
        if (name === "_ga" || name.startsWith("_ga_")) {
          document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
          for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
        }
      }
    }
    saveAnalyticsConsent(next);
    setEditing(false);
    if (next === "declined" && window.gtag) location.reload();
  }

  if (choice === "pending" || (choice !== "unknown" && !editing)) return null;
  return <section className="analytics-choice" aria-label="Analytics cookie choice">
    <div><h2>Help us understand what works</h2><p>With your permission, we use Google Analytics cookies to measure visits and enquiry actions. You can use the whole website without them. <a href="/privacy#website-measurement">Read about measurement</a>.</p></div>
    <div className="analytics-choice-actions"><button type="button" onClick={() => choose("accepted")}>Allow analytics</button><button type="button" onClick={() => choose("declined")}>Decline analytics</button>{editing && <button type="button" onClick={() => setEditing(false)}>Close</button>}</div>
  </section>;
}
