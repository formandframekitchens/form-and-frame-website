import Image from "next/image";
import Link from "next/link";
import { k01Photo } from "../lib/case-studies";
import { enquiryHref } from "../lib/enquiry";
import styles from "./installation-proof.module.css";

export function InstallationProof() {
  const photo = k01Photo("F14");
  return <section className={styles.section} id="installation-proof" aria-labelledby="installation-proof-title">
    <div className={`container ${styles.layout}`}>
      <figure className={styles.picture}>
        <Link href="/case-studies/k01-surbiton/kitchen" aria-label="Explore the completed K01 kitchen in Surbiton">
          <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 760px) 92vw, (max-width: 1280px) 46vw, 580px" />
        </Link>
        <figcaption>Completed K01 kitchen · Surbiton</figcaption>
      </figure>
      <div className={styles.copy}>
        <p className="eyebrow">See the work behind the fitting</p>
        <h2 id="installation-proof-title">From measured drawings to the finished kitchen.</h2>
        <p>In this Surbiton project, Form &amp; Frame measured, drew, coordinated and installed the kitchen. Specialist bespoke fabricators made the cabinetry.</p>
        <p>Follow the drawings, site preparation and finished details, including the stone island, fitted panels and lift-up cabinet. The kitchen was part of a five-month whole-home project.</p>
        <div className={styles.actions}>
          <Link className="text-link" href="/case-studies/k01-surbiton/kitchen">View the kitchen &amp; installation details <span aria-hidden="true">↗</span></Link>
          <Link className="button" href={enquiryHref({ service: "kitchen-installation", installation: "own-kitchen" })}>Discuss your installation <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </div>
  </section>;
}
