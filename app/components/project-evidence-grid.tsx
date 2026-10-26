import Image from "next/image";
import Link from "next/link";

export type ProjectEvidenceItem = {
  title: string;
  copy: string;
  image: { src: string; alt: string; fit?: "contain" | "cover" };
  href?: string;
  action?: string;
};

export function ProjectEvidenceGrid({ items }: { items: ProjectEvidenceItem[] }) {
  return <div className="project-evidence-grid">{items.map((item, index) => <article className="project-evidence-card" key={item.title}>
    <div className="project-evidence-image">
      <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 800px) 92vw, 30vw" style={{ objectFit: item.image.fit ?? "contain" }} />
    </div>
    <div className="project-evidence-copy">
      <span className="eyebrow" aria-hidden="true">0{index + 1}</span>
      <h3>{item.title}</h3>
      <p>{item.copy}</p>
      {item.href && <Link className="text-link" href={item.href}>{item.action ?? "Explore this detail"} <span aria-hidden="true">↗</span></Link>}
    </div>
  </article>)}</div>;
}
