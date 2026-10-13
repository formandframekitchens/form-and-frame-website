import Image from "next/image";
import Link from "next/link";
import { publicGalleryProjects } from "../lib/gallery-projects";
import { formatArticleDate, newsArticles } from "../lib/news";

export function NewsCards() {
  return <div className="news-card-grid">{newsArticles.map(article => {
    const project = publicGalleryProjects.find(item => item.galleryId === article.projectId);
    return <article className="news-card" key={article.slug}>
      <Link href={`/news/${article.slug}`}>
        {project && <div className="news-card-image"><Image src={project.cover.src} alt={`Form & Frame project example: ${project.title}`} fill sizes="(max-width: 700px) 92vw, (max-width: 1000px) 46vw, 30vw" style={{ objectFit: "contain" }} /></div>}
        <p className="eyebrow">{article.category}</p><h2>{article.title}</h2>
        <p>{article.description}</p><span className="news-card-date"><time dateTime={article.published}>{formatArticleDate(article.published)}</time> · Read article ↗</span>
      </Link>
    </article>;
  })}</div>;
}

export function NewsPreview() {
  return <section className="section news-preview"><div className="container">
    <p className="eyebrow">Materials, ideas &amp; practical planning</p><h2>Notes for your next project</h2>
    <p className="project-intro">Manufacturer updates with source links, and our practical take on choosing finishes and planning fitted furniture.</p>
    <Link className="text-link" href="/news">All news &amp; ideas ↗</Link>
    <p className="news-image-note">Photographs show our project work, not the supplier ranges discussed.</p><NewsCards />
  </div></section>;
}
