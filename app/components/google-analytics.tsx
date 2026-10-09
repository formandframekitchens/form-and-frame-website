"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GA_ENABLED, GA_MEASUREMENT_ID, trackEvent } from "../lib/analytics";

function AnalyticsListeners() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    window.gtag?.("event", "page_view", { page_path: pathname });

    const project = pathname.match(/^\/gallery\/([^/]+)$/)?.[1];
    if (project) trackEvent("important_case_study_view", { project });

    const supplier = pathname.match(/^\/kitchen-installation\/([^/]+)$/)?.[1];
    if (supplier) trackEvent("supplier_portal_view", { supplier });
  }, [pathname]);

  useEffect(() => {
    function trackClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (href.startsWith("https://wa.me/")) trackEvent("whatsapp_click", { source_path: pathname });
      if (href.startsWith("tel:")) trackEvent("phone_click", { source_path: pathname });
      if (href.startsWith("mailto:")) trackEvent("email_click", { source_path: pathname });

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

export function GoogleAnalytics() {
  const [ready, setReady] = useState(false);
  if (!GA_ENABLED || !GA_MEASUREMENT_ID) return null;

  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" onLoad={() => setReady(true)} />
    <Script id="google-analytics" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    `}</Script>
    {ready && <AnalyticsListeners />}
  </>;
}
