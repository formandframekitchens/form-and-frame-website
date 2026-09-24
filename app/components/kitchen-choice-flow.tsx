import Link from "next/link";
import { ServiceCardImage } from "./service-card-image";
import { kitchenChoices } from "../lib/kitchen-choices";
import { siteUrl } from "../lib/site";

export function KitchenChoiceFlow() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: kitchenChoices.map((choice, index) => ({
      "@type": "ListItem", position: index + 1, name: choice.title, url: `${siteUrl}${choice.href}`,
    })),
  };

  return <div className="services-hub-selection kitchen-selection" id="choose-installation">
    <header className="services-hub-hero"><div className="container">
      <h1>Choose your kitchen</h1>
    </div></header>
    <section className="services-hub-list-section" aria-label="Kitchen types and suppliers"><div className="container">
      <ol className="services-hub-list">
        {kitchenChoices.map((choice, index) => {
          const number = String(index + 1).padStart(2, "0");
          return <li key={choice.href}>
            <Link href={choice.href} className="services-hub-row">
              <span className="services-card-number" aria-hidden="true">{number}</span>
              <ServiceCardImage src={choice.image} alt={choice.alt} number={number} />
              <div className="services-card-content"><h2>{choice.title}</h2><p>{choice.copy}</p></div>
              <span className="services-card-action">Explore kitchen <span aria-hidden="true">↗</span></span>
            </Link>
          </li>;
        })}
      </ol>
    </div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
  </div>;
}
