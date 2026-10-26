"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { GA_ENABLED, GA_MEASUREMENT_ID, trackEvent } from "../lib/analytics";
import { readAnalyticsConsent, subscribeAnalyticsConsent } from "../lib/analytics-consent";
import { AnalyticsChoice } from "./analytics-choice";

function measurementLocation(pathname: string) {
  const safe = new URL(pathname, location.origin);
  const incoming = new URLSearchParams(location.search);
  // Retain named campaign tags; exclude contact fields and all other query data.
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content", "utm_term"]) {
    const value = incoming.get(key);
    if (value && /^[a-zA-Z0-9_. -]{1,100}$/.test(value)) safe.searchParams.set(key, value);
  }
  return safe.href;
}

function AnalyticsListeners() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    const page_location = measurementLocation(pathname);
    window.gtag?.("set", { page_location });
    window.gtag?.("event", "page_view", { page_path: pathname, page_location });

    const project = document.querySelector<HTMLElement>("main[data-public-project]")?.dataset.publicProject;
    if (project) trackEvent("important_case_study_view", { project, content_id: pathname, source_path: pathname });

    // Preserve B22 measurement on existing public supplier installation pages.
    const supplier = pathname.match(/^\/kitchen-installation\/([^/]+)$/)?.[1];
    if (supplier) trackEvent("supplier_portal_view", { supplier });

    const authorizedSupplier = document.querySelector<HTMLElement>("[data-authorized-supplier]")?.dataset.authorizedSupplier;
    if (authorizedSupplier) trackEvent("supplier_portal_view", { supplier: authorizedSupplier, access: "private" });

  }, [pathname]);

  useEffect(() => {
    const played = new WeakSet<HTMLVideoElement>();
    function trackFilm(event: Event) {
      const video = event.target;
      if (!(video instanceof HTMLVideoElement) || video.dataset.installationFilm !== "before-the-worktops" || played.has(video)) return;
      played.add(video);
      trackEvent("installation_video_play", { source_path: pathname, content_id: "before-the-worktops" });
    }
    document.addEventListener("playing", trackFilm, true);
    return () => document.removeEventListener("playing", trackFilm, true);
  }, [pathname]);

  useEffect(() => {
    function trackClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (href.startsWith("https://wa.me/")) trackEvent("whatsapp_click", { source_path: pathname });
      if (href.startsWith("tel:")) trackEvent("phone_click", { source_path: pathname });
      if (href.startsWith("mailto:")) trackEvent("email_click", { source_path: pathname });

      const articleSlug = document.querySelector<HTMLElement>("[data-news-slug]")?.dataset.newsSlug;
      const destinationPath = href.split("?")[0].split("#")[0];
      const publicProject = document.querySelector<HTMLElement>("main[data-public-project]")?.dataset.publicProject;
      if (publicProject && /^\/(kitchen-installation|bespoke-joinery)(\/[a-z0-9-]+)?$|^\/(services|in-frame-kitchens|bespoke-kitchens|internal-door-installation|joinery-installation)$/.test(destinationPath)) {
        trackEvent("project_service_click", { content_id: pathname, destination_path: destinationPath });
      }
      if (articleSlug && /^\/(kitchen-installation|bespoke-joinery)(\/[a-z0-9-]+)?$|^\/(services|in-frame-kitchens|bespoke-kitchens|internal-door-installation|joinery-installation)$/.test(destinationPath)) {
        trackEvent("news_service_click", { article_slug: articleSlug, destination_path: destinationPath });
      }

      if (link.dataset.analytics === "instagram") {
        trackEvent("instagram_outbound_click", {
          source_path: pathname,
          content_id: link.dataset.socialContent || "profile",
        });
      }

      if (link.dataset.analytics === "portfolio-download" && href === "/downloads/form-and-frame-installation-portfolio.pdf") {
        trackEvent("installation_portfolio_download", { source_path: pathname, content_id: "installation-portfolio" });
      }

      if (href.startsWith("/contact") || href.startsWith("#enquiry-form")) {
        trackEvent("enquiry_start", { source_path: pathname });
        if (href.includes("service=kitchen-installation")) {
          trackEvent("kitchen_plan_enquiry", { source_path: pathname });
        }
      }

      if (link.classList.contains("button")) {
        trackEvent("primary_cta_click", { source_path: pathname, destination_path: href.split("?")[0].split("#")[0] || pathname });
      }
    }

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, [pathname]);

  return null;
}

function ConsentedAnalytics() {
  const [ready, setReady] = useState(false);
  return <>
    <Script id="google-analytics" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      gtag('js', new Date());
      var safeLocation = new URL(location.pathname, location.origin);
      var incoming = new URLSearchParams(location.search);
      ['utm_source','utm_medium','utm_campaign','utm_id','utm_content','utm_term'].forEach(function(key) {
        var value = incoming.get(key);
        if (value && /^[a-zA-Z0-9_. -]{1,100}$/.test(value)) safeLocation.searchParams.set(key,value);
      });
      gtag('config', '${GA_MEASUREMENT_ID}', {
        send_page_view: false,
        page_location: safeLocation.href,
        page_referrer: document.referrer ? new URL(document.referrer).origin : '',
        cookie_expires: 15552000,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    `}</Script>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" onReady={() => setReady(true)} />
    {ready && <AnalyticsListeners />}
  </>;
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(subscribeAnalyticsConsent, readAnalyticsConsent, () => "unknown" as const);
  useEffect(() => {
    // A preference changed in another tab also stops this tab's loaded tag.
    if (GA_MEASUREMENT_ID) (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = consent !== "accepted";
  }, [consent]);
  // Full navigation into private pages also clears previously loaded analytics.
  if (pathname.startsWith("/private-case-studies") || pathname.startsWith("/progress-gallery")) return null;
  if (!GA_ENABLED || !GA_MEASUREMENT_ID) return null;
  return <><AnalyticsChoice />{consent === "accepted" && <ConsentedAnalytics />}</>;
}
