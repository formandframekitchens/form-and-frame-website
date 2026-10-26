import Image from "next/image";
import Link from "next/link";
import type { CaseStudyPortfolioItem } from "../lib/case-study-portfolio";

export function CaseStudyRoomCard({item,priority=false}:{item:CaseStudyPortfolioItem;priority?:boolean}) {
  return <article className="gallery-card" data-k01-room={item.chapter.id}>
    <Link href={item.href} prefetch={false}>
      <div className="gallery-card-image"><span className="gallery-card-project-id">K01</span><Image src={item.cover.src} alt={item.cover.alt} fill preload={priority} sizes="(max-width:720px) 92vw, (max-width:1280px) 46vw, 570px" style={{objectFit:"contain"}}/></div>
      <div className="gallery-card-copy"><div className="gallery-card-meta"><span>{item.chapter.label}</span><span>Surbiton</span></div><h2>{item.title}</h2><p>{item.summary}</p><span className="gallery-card-link">Explore the project journey <span aria-hidden="true">↗</span></span></div>
    </Link>
  </article>;
}
