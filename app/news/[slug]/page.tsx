import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialPage } from "../../components/editorial-page";
import { ServiceQuote } from "../../components/service-page";
import { StructuredData } from "../../components/structured-data";
import { publicGalleryProjects } from "../../lib/gallery-projects";
import { formatArticleDate, newsArticles } from "../../lib/news";
import { serviceMetadata } from "../../lib/service-metadata";
import { siteUrl } from "../../lib/site";

export function generateStaticParams() { return newsArticles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find(item => item.slug === slug);
  if (!article) notFound();
  const image = publicGalleryProjects.find(project => project.galleryId === article.projectId)?.cover;
  const base = serviceMetadata(article.title, article.description, `/news/${article.slug}`, image);
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime: `${article.published}T08:00:00+01:00`, modifiedTime: `${article.checked}T08:00:00+01:00`, authors: ["Form & Frame"] } };
}

export default async function NewsArticlePage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const article = newsArticles.find(item => item.slug === slug);
  if (!article) notFound();
  const project = publicGalleryProjects.find(item => item.galleryId === article.projectId);
  return <EditorialPage title={article.title} introduction={article.description} eyebrow={article.category} path={`/news/${article.slug}`} parent={{ label: "News & ideas", href: "/news" }}>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: article.published, dateModified: article.checked, mainEntityOfPage: `${siteUrl}/news/${article.slug}`, author: { "@type": "Organization", name: "Form & Frame", url: siteUrl }, publisher: { "@type": "Organization", name: "Form & Frame", url: siteUrl }, ...(project ? { image: [`${siteUrl}${project.cover.src}`] } : {}) }} />
    <article className="news-article container">
      <p className="news-byline">By Form &amp; Frame · Published <time dateTime={article.published}>{formatArticleDate(article.published)}</time><br />Sources checked <time dateTime={article.checked}>{formatArticleDate(article.checked)}</time></p>
      {project && <figure className="news-article-figure"><div className="news-article-image"><Image src={project.cover.src} alt={project.cover.alt} fill sizes="(max-width: 800px) 92vw, 850px" style={{ objectFit: "contain" }} /></div><figcaption>Form &amp; Frame project example: <Link href={`/gallery/${project.slug}`}>{project.title}</Link>. This illustrates our work, not a supplier product or range discussed below.</figcaption></figure>}
      {article.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.checklist && <ul>{section.checklist.map(item => <li key={item}>{item}</li>)}</ul>}</section>)}
      <aside className="news-sources" aria-label="Article sources"><h2>Sources &amp; further reading</h2><p>Manufacturer details may change. Check the current specification and availability before ordering.</p><ul>{article.sources.map(source => <li key={source.url}><a href={source.url}>{source.title} ↗</a></li>)}</ul></aside>
      <nav className="news-related" aria-label="Related project guidance">{article.links.map(link => <Link className="text-link" key={link.href} href={link.href}>{link.label} ↗</Link>)}<Link className="text-link" href="/news">Back to news &amp; ideas ↗</Link></nav>
    </article>
    <ServiceQuote title="Bring your ideas into the project brief" copy="Send your postcode, room photographs, plans and finish references. Tell us which practical details matter to you." enquiryUrl="/contact#enquiry-form" />
  </EditorialPage>;
}
