import Image from "next/image";
import Link from "next/link";
import { k01Photo } from "../lib/case-studies";
import { enquiryHref } from "../lib/enquiry";
import styles from "./k01-home-feature.module.css";

const details = [
  { photo: "F28", title: "The stone waterfall island", detail: "Separate stone drawings and coordination with the fabricator brought the worktop and waterfall end into the installation." },
  { photo: "F16", title: "Panels that connect the room", detail: "The cabinet pattern continues around the return, finishing with a narrow display of glass shelves." },
  { photo: "F20", title: "Brass, alignment & finishing", detail: "Finger-pull profiles, panel divisions and finishing pieces were considered together throughout the kitchen." },
];

export function K01HomeFeature() {
  return <section className={styles.feature} id="featured-kitchen" aria-labelledby="featured-kitchen-title">
    <div className="container">
      <div className={styles.intro}>
        <div><p className="eyebrow">Featured project · K01 · Surbiton</p><h2 id="featured-kitchen-title">A bespoke kitchen.<br />Every detail considered.</h2></div>
        <div className={styles.introCopy}>
          <p>Measured, drawn, coordinated and fitted by Form &amp; Frame. This kitchen formed part of a five-month whole-home project, with cabinetry made by specialist bespoke fabricators.</p>
          <p>From stone layouts and trade coordination to the wide lift-up cabinet, explore the decisions behind the finished room.</p>
          <Link className="text-link" href="/case-studies/k01-surbiton/kitchen">Explore the kitchen, drawings &amp; installation <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <figure className={styles.sequence} id="cabinet-opening">
        <h3 className={styles.sequenceTitle}>See the opening, step by step</h3>
        <a href="/projects/k01/homepage/lift-up-colour-matched-triptych.webp" aria-label="Enlarge the three original cabinet-opening photographs">
          <Image src="/projects/k01/homepage/lift-up-colour-matched-triptych.webp" width={2184} height={1280} sizes="(max-width: 1280px) 92vw, 1200px" alt="Three original portrait photographs of the K01 lift-up cabinet, left to right: closed, opening and raised." />
        </a>
        <ol className={styles.steps} aria-label="Cabinet opening sequence"><li><span>01</span>Closed</li><li><span>02</span>Opening</li><li><span>03</span>Raised</li></ol>
        <figcaption>Three original photographs of the same cabinet, arranged from left to right. Select the image to see the details at full size.</figcaption>
      </figure>
      <div className={styles.detail}>
        <div><h3>One wide opening, an unobstructed view.</h3><p>The two-part front lifts upwards, giving access beneath it without a central vertical division. The project combined the lift mechanism with additional support to suit this cabinet.</p></div>
        <Link className="text-link" href="/case-studies/k01-surbiton/kitchen#films">Watch the real opening demonstration <span aria-hidden="true">↗</span></Link>
      </div>
      <div className={styles.roomHeading}><h3>A closer look at the kitchen</h3><Link className="text-link" href="/case-studies/k01-surbiton/kitchen">View all kitchen photographs <span aria-hidden="true">↗</span></Link></div>
      <div className={styles.rooms}>{details.map(detail => {
        const photo = k01Photo(detail.photo);
        return <Link key={detail.photo} className={styles.room} href="/case-studies/k01-surbiton/kitchen#kitchen-panel-finished" prefetch={false}>
          <div className={styles.roomImage}><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 700px) 92vw, (max-width: 1280px) 30vw, 390px" /></div>
          <h4>{detail.title} <span aria-hidden="true">↗</span></h4><p>{detail.detail}</p>
        </Link>;
      })}</div>
      <div className={styles.enquiry}><p>Planning a kitchen in Luton, Dunstable or nearby? Send your plans to discuss the design and installation scope.</p><Link className="button" href={enquiryHref({ service: "bespoke-kitchens", project: "K01 kitchen" })}>Discuss your kitchen <span aria-hidden="true">↗</span></Link></div>
    </div>
  </section>;
}
