import { articleModifiedAt, latestNewsArticles } from "../../lib/news";
import { siteUrl } from "../../lib/site";

export const dynamic = "force-static";
const xml = (value: string) => value.replace(/[<>&"']/g, character => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[character]!);

export function GET() {
  const newsArticles = latestNewsArticles();
  const lastBuildDate = new Date(articleModifiedAt(newsArticles[0])).toUTCString();
  const items = newsArticles.map(article => `<item><title>${xml(article.title)}</title><link>${siteUrl}/news/${article.slug}</link><guid isPermaLink="true">${siteUrl}/news/${article.slug}</guid><description>${xml(article.description)}</description><pubDate>${new Date(article.publishedAt ?? `${article.published}T07:00:00Z`).toUTCString()}</pubDate></item>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Form &amp; Frame — News &amp; ideas</title><link>${siteUrl}/news</link><description>Materials, kitchen ideas and practical joinery planning.</description><language>en-gb</language><lastBuildDate>${lastBuildDate}</lastBuildDate><atom:link href="${siteUrl}/news/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
