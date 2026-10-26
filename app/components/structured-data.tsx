import { BUSINESS_EMAIL, BUSINESS_PHONE_E164 } from "../lib/contact";
import { siteUrl } from "../lib/site";
import { serviceAreas } from "../lib/service-coverage";

const coveredPlaces = serviceAreas.filter(area => !area.startsWith("Surrounding"));

export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function BusinessIdentity() {
  return <StructuredData data={{
    "@context": "https://schema.org", "@type": "Organization", "@id": `${siteUrl}/#business`,
    name: "Form & Frame Kitchens", alternateName: "Form & Frame", url: siteUrl, telephone: `+${BUSINESS_PHONE_E164}`, email: BUSINESS_EMAIL,
    description: "Independent kitchen installation, fitted furniture and bespoke joinery, based in Luton.",
    logo: `${siteUrl}/brand/form-and-frame-mark.png`,
    sameAs: ["https://www.instagram.com/formandframekitchens/", "https://www.google.com/maps/place/Form+%26+Frame+Kitchens/data=!4m2!3m1!1s0x0:0x4e2b1d814c87b388"],
    areaServed: coveredPlaces,
  }} />;
}

export function WebsiteIdentity() {
  return <StructuredData data={{
    "@context": "https://schema.org", "@type": "WebSite", "@id": `${siteUrl}/#website`,
    name: "Form & Frame Kitchens", alternateName: "Form & Frame", url: siteUrl,
    publisher: { "@id": `${siteUrl}/#business` },
  }} />;
}

export function ServiceStructuredData({ name, description, path, areas = coveredPlaces }: { name: string; description: string; path: string; areas?: string[] }) {
  return <StructuredData data={{
    "@context": "https://schema.org", "@type": "Service", "@id": `${siteUrl}${path}#service`,
    name, description, url: `${siteUrl}${path}`, provider: { "@id": `${siteUrl}/#business` },
    areaServed: areas,
  }} />;
}
