import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "./site-shell";
import { ServiceQuote } from "./service-page";
import { CaseStudyStages } from "./case-study-stages";
import { k01Photo, k01Rooms, k01RoomHref, k01Stages, type ProjectChapter } from "../lib/case-studies";
import { enquiryHref } from "../lib/enquiry";
import { k01PortfolioItems } from "../lib/case-study-portfolio";
import { joineryOptions } from "../lib/joinery-types";
import { siteUrl } from "../lib/site";
import styles from "./case-study.module.css";

function Film({id,title,description}: {id:string;title:string;description:string}) {
  const landscape = id === "loft-installation";
  const visualDescription = id === "lift-up-cabinet"
    ? "The glazed cabinet front is shown closed above the worktop. It is then lifted upwards, with the two sections folding together to expose the shelves and leave space beneath the raised front. The front returns to its closed position. Protective coverings remain around the work area."
    : landscape
      ? "The camera moves along the low cabinetry beneath the sloping roof. Open compartments and an extended drawer show the storage arrangement while fitting is still in progress. Tools and a spirit level are visible on top of the units; the room is not presented as finished."
      : "The camera looks through the dressing-room entrance towards a makeup surface and drawers below a roof window, then turns along the low storage towards the full-height wardrobe doors on the opposite side. The film shows the finished room in use.";
  return <figure className={styles.video}><video controls playsInline preload="none" width={landscape ? 1280 : 720} height={landscape ? 714 : 1280} poster={`/projects/k01/videos/${id}.jpg`} aria-label={title} aria-describedby={`${id}-caption ${id}-description`}><source src={`/projects/k01/videos/${id}.mp4`} type="video/mp4"/><a href={`/projects/k01/videos/${id}.mp4`}>Watch {title}</a></video><figcaption id={`${id}-caption`}><strong>{title}.</strong> {description} <span>Silent video.</span></figcaption><p className={styles.filmDescription} id={`${id}-description`}><strong>Film description:</strong> {visualDescription}</p></figure>;
}

export function CaseStudyRoom({chapter}: {chapter:ProjectChapter}) {
  const hero=k01Photo(chapter.photos[0]);
  const stages=k01Stages(chapter);
  const index=k01Rooms.findIndex(ch=>ch.id===chapter.id);
  const next=k01Rooms[(index+1)%k01Rooms.length];
  const service=chapter.id==="kitchen"?"kitchen-installation":chapter.id==="internal-doors"?"internal-door-installation":"bespoke-joinery";
  const categories=k01PortfolioItems.find(item=>item.chapter.id===chapter.id)?.categories ?? [];
  const joinery=service==="bespoke-joinery"?joineryOptions.find(option=>categories.includes(option.value)):undefined;
  const serviceHref=joinery?`/bespoke-joinery/${joinery.value}`:`/${service}`;
  const serviceLabel=joinery?joinery.label.toLowerCase():service.replaceAll("-"," ");
  const schema={"@context":"https://schema.org","@graph":[
    {"@type":"CreativeWork",name:`K01 · ${chapter.label}`,description:chapter.title,url:`${siteUrl}${k01RoomHref(chapter)}`,datePublished:chapter.id==="internal-doors"?"2026-10-17":"2026-10-18",dateModified:chapter.dateModified ?? "2026-10-18",image:chapter.photos.map(id=>`${siteUrl}${k01Photo(id).src}`),creator:{"@type":"Organization",name:"Form & Frame",url:siteUrl},isPartOf:{"@type":"CreativeWork",name:"K01 kitchen & whole-home joinery",url:`${siteUrl}/case-studies/k01-surbiton`},spatialCoverage:{"@type":"Place",name:"Surbiton"}},
    {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:siteUrl},{"@type":"ListItem",position:2,name:"K01",item:`${siteUrl}/case-studies/k01-surbiton`},{"@type":"ListItem",position:3,name:chapter.label,item:`${siteUrl}${k01RoomHref(chapter)}`}]}]};
  return <div className={styles.page}><Header/><main id="main-content" data-public-project="k01-surbiton">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className={`${styles.standard} ${styles.intro}`}><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/case-studies/k01-surbiton">K01 · The whole home</Link><span aria-hidden="true"> / </span><span>{chapter.label}</span></nav><p className="eyebrow">K01 · Surbiton · Form &amp; Frame</p><h1>{chapter.label}</h1><p className={styles.lead}>{chapter.title}</p>
      <nav className={styles.jump} aria-label="This room’s journey"><a href="#scope">The scope</a>{stages.map(s=><a key={s.id} href={`#${chapter.id}-panel-${s.id}`}>{s.title}</a>)}{["kitchen","loft"].includes(chapter.id)&&<a href="#films">Films</a>}</nav>
    </header>
    <div className={styles.standard}>
      <figure className={`${styles.hero} ${styles.roomHero}`}><Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} sizes="(max-width:1000px) 90vw, 960px" preload/><figcaption>{hero.alt}</figcaption></figure>
      <section id="scope" className={styles.roomScope}><div className={styles.split}><div><p className="eyebrow">The scope of work</p><h2>From the brief to the final fit</h2><p className={styles.note}>Project lead: Form &amp; Frame<br/>Main installation: September 2025<br/>Later adjustments followed</p></div><div className={styles.copy}>{chapter.paragraphs.map(p=><p key={p}>{p}</p>)}</div></div><dl className={styles.resolution}><div><dt>The challenge</dt><dd>{chapter.challenge}</dd></div><div><dt>The approach</dt><dd>{chapter.solution}</dd></div></dl></section>
      <CaseStudyStages id={chapter.id} label={chapter.label} stages={stages}/>
      {["kitchen","loft"].includes(chapter.id)&&<section id="films" className={styles.section}><p className="eyebrow">See it in motion</p><h2>{chapter.id==="kitchen"?"The lift-up cabinet":"Inside the loft dressing room"}</h2>{chapter.id==="kitchen"?<div className={styles.openingLayout} data-opening-film>
        <Film id="lift-up-cabinet" title="The lift-up cabinet in motion" description="A 21-second demonstration filmed during later adjustments in October 2025, after the main September installation."/>
        <div className={styles.openingNotes}>
          <p className="eyebrow">Closed · opening · raised</p>
          <h3>See how the front moves out of the way.</h3>
          <p>The demonstration opens the two-part front, shows access beneath it and returns it to the closed position. It is an original site film; protective coverings are still in place.</p>
          <h4>Planning storage above a worktop?</h4>
          <p>Include these details in your brief so the cabinet, access and installation can be considered together:</p>
          <ul><li>A wall elevation or photographs showing the worktop, ceiling and neighbouring cabinets.</li><li>What you want to store and how you expect to reach it in everyday use.</li><li>Any chosen cabinet-front and hardware details, so we can review the proposed arrangement.</li></ul>
          <p>This project’s adapted mechanism is an example of its particular installation. A new cabinet needs its own design and hardware assessment.</p>
          <Link className="text-link" href="/bespoke-kitchens">Explore bespoke kitchen planning <span aria-hidden="true">↗</span></Link>
          <Link className="button" href={enquiryHref({service:"bespoke-kitchens",project:"K01 lift-up cabinet"})}>Discuss your cabinet brief <span aria-hidden="true">↗</span></Link>
        </div>
      </div>:<div className={styles.videoGrid}><Film id="loft-installation" title="The loft during installation" description="Site footage shows the low drawer units and dressing-room layout taking shape beneath the sloping roof."/><Film id="loft-finished" title="Inside the finished dressing room" description="A short walkthrough of the tall storage, low drawers and makeup area."/></div>}</section>}
      <p className={styles.note}>Site photographs are original records. Finished photographs have been retouched for lighting, perspective and presentation. Drawings retain their original dates and revisions; final site adjustments may differ.</p>
      <nav className={styles.roomNavigation} aria-label="Continue through K01"><Link href={chapter.id==="kitchen"?"/kitchens":"/bespoke-joinery"}>{chapter.id==="kitchen"?"← Kitchen projects":"← Bespoke joinery projects"}</Link><Link href="/case-studies/k01-surbiton">← All K01 rooms</Link><Link href={k01RoomHref(next)}>Next: {next.label} →</Link></nav>
      <section className={styles.section}><div className={styles.split}><div><p className="eyebrow">Plan your installation</p><h2>Bring the same attention to your project</h2></div><div className={styles.copy}><p>Form &amp; Frame is based in Luton, with current enquiries focused on Luton, Dunstable and nearby communities. Send your drawings, project postcode and intended scope so we can discuss the fitting and coordination required.</p><Link className="text-link" href={serviceHref}>Explore {serviceLabel} ↗</Link></div></div></section>
    </div>
    <ServiceQuote title="Let’s discuss your project" copy="Share your drawings, preferred timing and the work you need completed." action="Discuss my project" enquiryUrl={enquiryHref({service,joinery:joinery?.value}).replace("#enquiry-form","&request=k01#enquiry-form")} whatsappMessage="Hello, I’ve seen the K01 case study and would like to discuss a project with Form & Frame."/>
  </main><Footer/></div>;
}
