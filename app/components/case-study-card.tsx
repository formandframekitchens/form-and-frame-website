import Image from "next/image";
import Link from "next/link";
import { getCaseStudy, isCaseStudyPublished } from "../lib/case-studies";

export function CaseStudyCard({ slug = "k01-surbiton", priority = false }: { slug?: string; priority?: boolean }) {
  const study = getCaseStudy(slug);
  if (!study || !isCaseStudyPublished(study)) return null;
  return <article className="gallery-card">
    <Link href={`/case-studies/${study.slug}`} prefetch={false}>
      <div className="gallery-card-image"><span className="gallery-card-project-id">{study.projectCode}</span>
        <Image src={study.hero.src} alt={study.hero.alt} fill preload={priority} sizes="(max-width: 720px) 92vw, (max-width: 1280px) 46vw, 570px" style={{ objectFit: "contain" }} />
      </div>
      <div className="gallery-card-copy"><div className="gallery-card-meta"><span>Kitchen &amp; whole-home joinery</span><span>Surbiton</span></div>
        <h2>K01 — Kitchen &amp; whole-home installation</h2><p>Five months of design, coordination and fitting. Follow the drawings, site progress and finished details across seven parts of the home.</p>
        <span className="gallery-card-link">Explore the case study <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  </article>;
}
