import Link from "next/link";
import { NewsCards } from "../components/news-cards";
import { Footer, Header } from "../components/site-shell";
import { StructuredData } from "../components/structured-data";
import { newsArticles } from "../lib/news";
import { serviceMetadata } from "../lib/service-metadata";
import { siteUrl } from "../lib/site";

export const metadata = {
  ...serviceMetadata("Kitchen & Joinery News, Materials & Ideas", "Sourced material updates and practical kitchen and joinery planning guides from Form & Frame in Luton. Explore finishes, colour and project preparation.", "/news"),
  alternates: { canonical: `${siteUrl}/news`, types: { "application/rss+xml": `${siteUrl}/news/feed.xml` } },
};

export default function NewsPage() {
  return <><Header /><main id="main-content" className="gallery-page news-page">
    <StructuredData data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Form & Frame news and ideas", url: `${siteUrl}/news`, mainEntity: { "@type": "ItemList", itemListElement: newsArticles.map((article, index) => ({ "@type": "ListItem", position: index + 1, name: article.title, url: `${siteUrl}/news/${article.slug}` })) } }} />
    <header className="gallery-hero"><div className="container">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>News &amp; ideas</span></nav>
      <p className="eyebrow">For the rooms you are planning</p><h1>News &amp; ideas</h1>
      <p className="gallery-lead">Material updates, kitchen inspiration and practical joinery guidance. Manufacturer information is linked to its source, with the date checked shown in each article.</p>
      <div className="joinery-intro-links"><Link href="/guides/joinery-materials-finishes">Materials &amp; finishes guide ↗</Link><a href="/news/feed.xml">RSS feed ↗</a></div>
    </div></header>
    <section className="section"><div className="container"><p className="news-image-note">Photographs show Form &amp; Frame project work. They are not photographs of the supplier products discussed.</p><NewsCards /></div></section>
  </main><Footer /></>;
}
