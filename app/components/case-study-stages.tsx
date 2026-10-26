import type { ProjectStage } from "../lib/case-studies";
import { CaseStudyGallery } from "./case-study-gallery";
import styles from "./case-study.module.css";

export function CaseStudyStages({id,label,stages}: {id:string;label:string;stages:ProjectStage[]}) {
  return <div className={styles.stages} data-room-journey={id}>
    {stages.map((stage,index)=><section key={stage.id} id={`${id}-panel-${stage.id}`} aria-labelledby={`${id}-${stage.id}-heading`} className={styles.stagePanel}>
      <div className={styles.stageHeading}><p className="eyebrow">{String(index+1).padStart(2,"0")} / {label}</p><h2 id={`${id}-${stage.id}-heading`}>{stage.title}</h2></div>
      <div className={styles.stagePanelIntro}><p>{stage.description}</p>{stage.downloads && <div className={styles.stageDownloads}>{stage.downloads.map(d=><a key={d.src} href={d.src} target="_blank" rel="noopener noreferrer">{d.title} PDF · {d.pageCount} sheets ↗</a>)}</div>}</div>
      <CaseStudyGallery photos={stage.photos} label={`${label} ${stage.id} gallery`} ordered={stage.id!=="finished"} itemName={stage.id==="design"?"drawing sheets":"photographs"} />
    </section>)}
  </div>;
}
