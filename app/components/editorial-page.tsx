import type { ReactNode } from "react";
import Link from "next/link";
import { Footer, Header } from "./site-shell";
import { StructuredData } from "./structured-data";
import { siteUrl } from "../lib/site";

export function EditorialPage({ title, introduction, eyebrow, path, parent, children }: {
  title: string; introduction: string; eyebrow: string; path: string;
  parent?: { label: string; href: string }; children: ReactNode;
}) {
  const crumbs = [{ label: "Home", href: "/" }, ...(parent ? [parent] : []), { label: title, href: path }];
  return <><Header /><main id="main-content" className="service-page">
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.label, item: `${siteUrl}${item.href}` })) }} />
    <header className="service-hero"><div className="container">
      <nav className="breadcrumbs" aria-label="Breadcrumb">{crumbs.map((item, i) => <span key={item.href}>{i > 0 && <span aria-hidden="true"> / </span>}{i === crumbs.length - 1 ? item.label : <Link href={item.href}>{item.label}</Link>}</span>)}</nav>
      <p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="service-lead">{introduction}</p>
    </div></header>{children}
  </main><Footer /></>;
}
