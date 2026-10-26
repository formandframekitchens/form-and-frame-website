import Link from "next/link";
import { NewsCard } from "../components/news-cards";
import { NewsFeed } from "../components/news-feed";
import { Footer, Header } from "../components/site-shell";
import { StructuredData } from "../components/structured-data";
import { latestNewsArticles, newsTopic } from "../lib/news";
import { serviceMetadata } from "../lib/service-metadata";
import { siteUrl } from "../lib/site";

const newsArticles = latestNewsArticles();

export const metadata = {
  ...serviceMetadata("Kitchen & Joinery News, Materials & Ideas", "Sourced material updates and practical kitchen and joinery planning guides from Form & Frame in Luton. Explore finishes, colour and project preparation.", "/news", newsArticles[0].image),
  alternates: { canonical: `${siteUrl}/news`, types: { "application/rss+xml": `${siteUrl}/news/feed.xml` } },
};

export default function NewsPage() {
  return <><Header /><main id="main-content" className="gallery-page news-page">
    <StructuredData data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Form & Frame news and ideas", url: `${siteUrl}/news`, mainEntity: { "@type": "ItemList", itemListElement: newsArticles.map((article, index) => ({ "@type": "ListItem", position: index + 1, name: article.title, url: `${siteUrl}/news/${article.slug}` })) } }} />
    <header className="gallery-hero"><div className="container">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>News &amp; ideas</span></nav>
      <p className="eyebrow">For the rooms you are planning</p><h1>News &amp; ideas</h1>
      <p className="gallery-lead">Supplier updates, new finishes and practical fitting advice for kitchens and bespoke joinery. Explore what a product or design idea could mean for your home in Luton, Dunstable or a nearby town.</p>
      <div className="joinery-intro-links"><Link href="/guides/joinery-materials-finishes">Materials &amp; finishes guide ↗</Link><a href="/news/feed.xml">RSS feed ↗</a></div>
    </div></header>
    <section className="section"><div className="container">
      <h2>Latest updates</h2>
      <p className="project-intro">We check the original manufacturer information, link to the source and explain the practical decisions it raises. Each article shows when it was published, updated and checked.</p>
      <p className="news-image-note">Supplier images are credited below. Original AI concepts are labelled clearly, and article captions identify the products shown or explain the illustration.</p>
      <NewsFeed items={newsArticles.map(article => ({ id: article.slug, topic: newsTopic(article), content: <NewsCard article={article} /> }))} />
    </div></section>
  </main><Footer /></>;
}
