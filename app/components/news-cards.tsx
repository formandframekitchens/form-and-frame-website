import Image from "next/image";
import Link from "next/link";
import { formatArticleDate, latestNewsArticles, type NewsArticle } from "../lib/news";

export function NewsCards({ limit }: { limit?: number }) {
  const latest = latestNewsArticles();
  const articles = limit ? latest.slice(0, limit) : latest;
  return <div className="news-card-grid">{articles.map(article => <NewsCard key={article.slug} article={article} />)}</div>;
}

export function NewsCard({ article }: { article: NewsArticle }) {
    return <article className="news-card" key={article.slug}>
      <Link href={`/news/${article.slug}`}>
        {<div className="news-card-image"><Image src={article.image.src} alt={article.image.alt} fill sizes="(max-width: 700px) 92vw, (max-width: 1000px) 46vw, 30vw" style={{ objectFit: "contain" }} /></div>}
        <p className="eyebrow">{article.category}</p><h2>{article.title}</h2>
        <p>{article.description}</p><span className="news-card-date">{article.updatedAt ? "Updated " : "Published "}<time dateTime={article.updatedAt ?? article.published}>{formatArticleDate(article.updatedAt ?? article.published)}</time> · Read article ↗</span>
      </Link>
      <p className="news-image-credit">Image: {article.image.creditUrl ? <a href={article.image.creditUrl}>{article.image.credit}</a> : article.image.credit}</p>
    </article>;
}

export function NewsPreview() {
  return <section className="section news-preview"><div className="container">
    <p className="eyebrow">Supplier news, materials &amp; fitting advice</p><h2>News &amp; ideas for your next project</h2>
    <p className="project-intro">New supplier ranges, paint and design ideas, with practical advice for kitchen installation and fitted furniture in Luton and nearby towns.</p>
    <Link className="text-link" href="/news">All news &amp; ideas ↗</Link>
    <NewsCards limit={3} />
  </div></section>;
}
