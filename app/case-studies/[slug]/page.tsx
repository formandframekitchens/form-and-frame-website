import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components/site-shell";
import { ServiceQuote } from "../../components/service-page";
import { CaseStudyRoom } from "../../components/case-study-room";
import styles from "../../components/case-study.module.css";
import { publishedCaseStudies, getCaseStudy, isCaseStudyPublished, k01Rooms, k01Photo, k01RoomHref, k01Stages } from "../../lib/case-studies";
import { enquiryHref } from "../../lib/enquiry";
import { siteUrl } from "../../lib/site";

type Props = PageProps<"/case-studies/[slug]">;
export function generateStaticParams() { return publishedCaseStudies.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study || !isCaseStudyPublished(study)) return {robots:{index:false,follow:false}};
  const url = `${siteUrl}/case-studies/${study.slug}`;
  return {
    title:study.seo.title,description:study.seo.description,alternates:{canonical:url},robots:{index:true,follow:true},
    openGraph:{title:study.seo.title,description:study.seo.description,url,type:"article",publishedTime:study.datePublished,modifiedTime:study.dateModified,images:[{url:study.hero.src,width:study.hero.width,height:study.hero.height,alt:study.hero.alt}]},
    twitter:{card:"summary_large_image",title:study.seo.title,description:study.seo.description,images:[study.hero.src]}
  };
}
export default async function CaseStudyPage({params}: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study || !isCaseStudyPublished(study)) notFound();
  if (study.slug.endsWith("internal-doors")) return <CaseStudyRoom chapter={k01Rooms.find(ch=>ch.id==="internal-doors")!} />;
  const schema={"@context":"https://schema.org","@graph":[
    {"@type":"CreativeWork",name:study.seo.title,description:study.summary,url:`${siteUrl}/case-studies/${study.slug}`,datePublished:study.datePublished,dateModified:study.dateModified,image:`${siteUrl}${study.hero.src}`,creator:{"@type":"Organization",name:"Form & Frame",url:siteUrl},spatialCoverage:{"@type":"Place",name:"Surbiton"},hasPart:k01Rooms.map(ch=>({"@type":"CreativeWork",name:ch.label,url:`${siteUrl}${k01RoomHref(ch)}`}))},
    {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:siteUrl},{"@type":"ListItem",position:2,name:"Kitchens",item:`${siteUrl}/kitchens`},{"@type":"ListItem",position:3,name:"K01",item:`${siteUrl}/case-studies/${study.slug}`}]}]};
  return <div className={styles.page}><Header /><main id="main-content" data-public-project={study.slug}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <header className={`${styles.standard} ${styles.intro}`}>
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/kitchens">Kitchens</Link><span aria-hidden="true"> / </span><span>K01</span></nav>
      <p className="eyebrow">K01 · Surbiton · Kitchen &amp; whole-home joinery</p>
      <h1>{study.title}</h1><p className={styles.lead}>{study.summary}</p>
      <p className={styles.note}>Choose a room to follow its drawings, site progress and finished details.</p>
    </header>
    <div className={styles.standard}>
      <nav className={styles.roomCards} aria-label="Explore the K01 rooms">
        {k01Rooms.map((ch,index)=>{const photo=k01Photo(ch.photos[0]);return <Link id={ch.id} key={ch.id} href={k01RoomHref(ch)} className={styles.roomCard}>
          <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={index===0?"(max-width:650px) 90vw, (max-width:1376px) 92vw, 1280px":"(max-width:650px) 90vw, (max-width:1376px) 46vw, 626px"} preload={index===0}/>
          <h2>{String(index+1).padStart(2,"0")} / {ch.label}</h2><p>{ch.title}</p><strong>Explore {k01Stages(ch).map(s=>s.id==="design"?"drawings":s.id==="site"?"site progress":"the finished work").join(" · ")} ↗</strong>
        </Link>})}
      </nav>
      <dl className={styles.facts}><div><dt>Project lead</dt><dd>Form &amp; Frame</dd></div><div><dt>Involvement</dt><dd>Approximately five months</dd></div><div><dt>Main installation</dt><dd>September 2025<br/><small>Later adjustments followed</small></dd></div><div><dt>Explore</dt><dd>Seven parts of one home</dd></div></dl>
      <section id="journey" className={styles.section}><div className={styles.split}><div><p className="eyebrow">One connected project</p><h2>Five months. One point of responsibility.</h2></div><div className={styles.copy}><p>Form &amp; Frame led the project from the initial survey to the final fit: developing drawings, agreeing the design with the client, calculating and ordering materials, coordinating bespoke fabricators and managing the installation sequence.</p><p>Cabinetry was supplied by bespoke fabricators and manufacturers. The TV unit was supplied by another manufacturer and installed by Form &amp; Frame, alongside the individually made walnut-and-brass corner detail.</p></div></div>
        <ol className={styles.timeline}><li><span>01 / Understand</span><strong>Survey &amp; drawings</strong><p>Measure the rooms, develop layouts and agree the design.</p></li><li><span>02 / Coordinate</span><strong>Materials &amp; manufacture</strong><p>Order cabinetry and ironmongery; coordinate stone and specialist trades.</p></li><li><span>03 / Install</span><strong>Fit &amp; resolve</strong><p>Bring access, lighting, finishing details and moving components together.</p></li><li><span>04 / Complete</span><strong>Adjust &amp; hand over</strong><p>Main installation completed in September 2025, with later adjustments.</p></li></ol>
      </section>
      <section className={styles.section}><div className={styles.split}><div><p className="eyebrow">For homeowners &amp; kitchen companies</p><h2>An installer who sees the whole project</h2></div><div className={styles.copy}><p>The room pages show the practical detail behind the finished home: technical drawings, site preparation, fitting and specialist coordination.</p><p>Form &amp; Frame is based in Luton, with current enquiries focused on Luton, Dunstable and nearby communities. Share your project postcode, drawings and intended scope to discuss the installation.</p></div></div><nav className={styles.related} aria-label="Related services"><Link href="/kitchen-installation" className="text-link">Kitchen installation ↗</Link><Link href="/bespoke-joinery" className="text-link">Bespoke joinery &amp; fitted furniture ↗</Link><Link href="/internal-door-installation" className="text-link">Internal-door installation ↗</Link></nav></section>
    </div>
    <ServiceQuote title="Let’s look at your next installation" copy="Send your drawings, project postcode and preferred timing. We’ll review what needs to be supplied, fitted and coordinated." action="Discuss my project" enquiryUrl={enquiryHref({service:"kitchen-installation"}).replace("#enquiry-form","&request=k01#enquiry-form")} whatsappMessage="Hello, I’ve seen the K01 case study and would like to discuss a project with Form & Frame."/>
  </main><Footer /></div>;
}
