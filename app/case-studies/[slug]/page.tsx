import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer, Header } from "../../components/site-shell";
import { caseStudies, getCaseStudy, isCaseStudyPublished } from "../../lib/case-studies";

type Props = PageProps<"/case-studies/[slug]">;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  const published = isCaseStudyPublished(study);
  const path = `/case-studies/${study.slug}`;
  return {
    title: study.seo.title,
    description: study.seo.description,
    alternates: { canonical: path },
    robots: published ? { index: true, follow: true } : { index: false, follow: false, noarchive: true, googleBot: { index: false, follow: false, noimageindex: true } },
    openGraph: published ? { title: study.seo.title, description: study.seo.description, url: path, type: "article" } : undefined,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  const mediaById = new Map(study.media.map((slot) => [slot.id, slot]));

  return <div className="case-study-shell">
    <Header />
    <main id="main-content" className="case-study-page">
      <header className="case-study-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>Case studies</span><span aria-hidden="true"> / </span><span>{study.projectCode}</span></nav>
          {!isCaseStudyPublished(study) && <p className="case-study-draft"><span aria-hidden="true" /> Editorial preview · not yet published</p>}
          <p className="eyebrow">{study.projectCode} · {study.location}</p>
          <h1>{study.title}</h1>
          <p className="case-study-intro">{study.summary}</p>
          <dl className="case-study-facts">{study.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        </div>
      </header>

      {study.sections.map((section, index) => <section className={`case-study-section${index % 2 ? " case-study-section-muted" : ""}`} id={section.id} key={section.id}>
        <div className="container case-study-section-grid">
          <div className="case-study-heading"><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2></div>
          <div className="case-study-copy">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.highlights && <ul className="case-study-highlights">{section.highlights.map((item) => <li key={item}>{item}</li>)}</ul>}
          </div>
          {section.mediaSlotIds && <div className="case-study-media-grid" aria-label={`${section.eyebrow} media plan`}>
            {section.mediaSlotIds.map((id) => {
              const slot = mediaById.get(id);
              if (!slot) return null;
              return <figure className="case-study-media-slot" key={slot.id}>
                {slot.asset?.approved ? (slot.asset.format === "pdf"
                  ? <div className="case-study-media-reserved"><a className="text-link" href={slot.asset.src}>{slot.asset.alt} (PDF)</a></div>
                  : <Image src={slot.asset.src} width={slot.asset.width} height={slot.asset.height} alt={slot.asset.alt} />)
                  : <div className="case-study-media-reserved"><span>{slot.kind}</span><strong>Final asset reserved</strong></div>}
                <figcaption><strong>{slot.label}</strong><span>{slot.brief}</span></figcaption>
              </figure>;
            })}
          </div>}
        </div>
      </section>)}

      <aside className="case-study-checklist" aria-labelledby="media-checklist-title">
        <div className="container">
          <p className="eyebrow">Publication gate</p><h2 id="media-checklist-title">Final asset checklist</h2>
          <p className="case-study-checklist-intro">Every item must be genuine, privacy-checked and approved before this case study can be indexed. No placeholder panel is a public gallery image.</p>
          <ol>{study.media.map((slot) => <li key={slot.id}><span className="case-study-check" aria-hidden="true" /><div><strong>{slot.label}{slot.required ? " · required" : " · optional"}</strong><p>{slot.brief}</p></div></li>)}</ol>
          <div className="case-study-approval"><strong>Before publication</strong><p>Confirm final photography, drawing/PDF accessibility, captions and alt text, verified measurements, client permission, privacy redaction and owner approval. Then mark the record published and add it to the sitemap and relevant portfolio links.</p></div>
        </div>
      </aside>

      <nav className="case-study-related" aria-label="Related services"><div className="container"><p className="eyebrow">Continue exploring</p><h2>Related expertise</h2><div>{study.relatedLinks.map((link) => <Link className="text-link" href={link.href} key={link.href}>{link.label}<span aria-hidden="true">↗</span></Link>)}</div></div></nav>
    </main>
    <Footer />
  </div>;
}
