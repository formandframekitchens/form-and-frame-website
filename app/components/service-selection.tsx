import Link from "next/link";
import { ServiceCardImage } from "./service-card-image";
import { siteUrl } from "../lib/site";

type SelectionChoice = { title: string; copy: string; href: string; image: string; alt: string };

export function ServiceSelection({ id, title, label, choices, action, className = "" }: {
  id: string;
  title: string;
  label: string;
  choices: readonly SelectionChoice[];
  action: string;
  className?: string;
}) {
  const itemList = {
    "@context": "https://schema.org", "@type": "ItemList",
    itemListElement: choices.map((choice, index) => ({
      "@type": "ListItem", position: index + 1, name: choice.title, url: `${siteUrl}${choice.href}`,
    })),
  };

  return <div className={`services-hub-selection service-selection-compact ${className}`} id={id}>
    <header className="services-hub-hero"><div className="container"><h1>{title}</h1></div></header>
    <section className="services-hub-list-section" aria-label={label}><div className="container">
      <ol className="services-hub-list">
        {choices.map((choice, index) => {
          const number = String(index + 1).padStart(2, "0");
          return <li key={choice.href}>
            <Link href={choice.href} className="services-hub-row">
              <span className="services-card-number" aria-hidden="true">{number}</span>
              <ServiceCardImage src={choice.image} alt={choice.alt} number={number} />
              <div className="services-card-content"><h2>{choice.title}</h2><p>{choice.copy}</p></div>
              <span className="services-card-action">{action} <span aria-hidden="true">↗</span></span>
            </Link>
          </li>;
        })}
      </ol>
    </div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
  </div>;
}
