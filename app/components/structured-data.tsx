import { BUSINESS_EMAIL, BUSINESS_PHONE_E164 } from "../lib/contact";
import { siteUrl } from "../lib/site";

export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function BusinessIdentity() {
  return <StructuredData data={{
    "@context": "https://schema.org", "@type": "Organization", "@id": `${siteUrl}/#business`,
    name: "Form & Frame Kitchens", alternateName: "Form & Frame", url: siteUrl, telephone: `+${BUSINESS_PHONE_E164}`, email: BUSINESS_EMAIL,
    description: "Independent kitchen installation, fitted furniture and bespoke joinery, based in Luton.",
    sameAs: ["https://www.instagram.com/formandframekitchens/"],
    areaServed: ["Luton", "Bedfordshire", "Hertfordshire"],
  }} />;
}

export function ServiceStructuredData({ name, description, path }: { name: string; description: string; path: string }) {
  return <StructuredData data={{
    "@context": "https://schema.org", "@type": "Service", "@id": `${siteUrl}${path}#service`,
    name, description, url: `${siteUrl}${path}`, provider: { "@id": `${siteUrl}/#business` },
    areaServed: ["Luton", "Bedfordshire", "Hertfordshire"],
  }} />;
}
