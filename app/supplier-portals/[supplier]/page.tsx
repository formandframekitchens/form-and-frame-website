import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SupplierPortalView } from "@/app/components/supplier-portal-view";
import { EMAIL_HREF, PHONE_HREF, BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY } from "@/app/lib/contact";
import {
  isSupplierPortalAuthorized,
  isSupplierPortalSlug,
  supplierPortalIsConfigured,
  supplierPortalName,
} from "@/app/lib/supplier-portal";
import { supplierPortalCopy } from "./supplier-portal-data";
import styles from "./supplier-portal.module.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Private supplier presentation | Form & Frame",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
  referrer: "same-origin",
};

export default async function SupplierPortalPage({ params, searchParams }: PageProps<"/supplier-portals/[supplier]">) {
  const { supplier } = await params;
  if (!isSupplierPortalSlug(supplier)) notFound();
  const authorized = await isSupplierPortalAuthorized(supplier);
  const query = await searchParams;
  const name = supplierPortalName(supplier);

  if (!authorized) {
    return <main className={styles.lockPage}>
      <section className={styles.lockCard}>
        <p className={styles.eyebrow}>FORM &amp; FRAME · PRIVATE</p>
        <h1>{name} presentation</h1>
        <p>This supplier-specific area is restricted. Enter the access code issued by Form &amp; Frame.</p>
        <form action={`/api/supplier-portals/${supplier}/login`} method="post" className={styles.form}>
          <label htmlFor="code">Access code</label>
          <input id="code" name="code" type="password" autoComplete="current-password" required />
          {query.error === "1" ? <p role="alert" className={styles.error}>The access code is not valid.</p> : null}
          {!supplierPortalIsConfigured(supplier) ? <p className={styles.notice}>Access is not currently configured. Please contact Form &amp; Frame.</p> : null}
          <button type="submit">Open presentation</button>
        </form>
        <Link href="/">Return to the public website</Link>
      </section>
    </main>;
  }

  const copy = supplierPortalCopy[supplier];
  return <main className={styles.portal}>
    <SupplierPortalView supplier={supplier} />
    <header className={styles.header}>
      <div><p className={styles.eyebrow}>FORM &amp; FRAME · RESTRICTED PRESENTATION</p><h1>Installation capability for {name}</h1><p>{copy.opening}</p></div>
      <form action={`/api/supplier-portals/${supplier}/logout`} method="post"><button className={styles.outline} type="submit">Lock presentation</button></form>
    </header>

    <section className={styles.intro}><p className={styles.eyebrow}>INTRODUCTION &amp; COVERAGE</p><h2>A considered installation partner around Luton</h2><p>Form &amp; Frame installs customer-supplied kitchens in Luton and considers nearby Bedfordshire and Hertfordshire projects according to location and scope. We review the final plan, room and responsibilities before confirming an installation.</p></section>

    <section className={styles.dark}><div className={styles.twoColumn}><div><p className={styles.eyebrow}>EXPERIENCE</p><h2>More than 20 years across making, design and fitting</h2></div><div><p>Our practical background spans joinery manufacturing, design, CAD and drawings, bespoke joinery, kitchen installation and site problem-solving. That breadth informs how we read a plan, assess a room and work through details on site.</p><p>We approach a kitchen as a fitted system rather than a collection of cabinets.</p></div></div></section>

    <section><p className={styles.eyebrow}>DESIGN, CAD &amp; MANUFACTURING KNOWLEDGE</p><h2>Understanding the intent behind the drawing</h2><div className={styles.cards}><article><h3>Technical review</h3><p>Plans, elevations, cabinet schedules, appliance data and current product instructions are reviewed together.</p></article><article><h3>Manufacturing perspective</h3><p>Joinery experience helps us consider tolerances, materials, interfaces and finishing details before they become site issues.</p></article><article><h3>Room conditions</h3><p>Levels, uneven walls and floors, services, openings and difficult geometry are reconciled with the planned layout.</p></article></div></section>

    <section className={styles.muted}><p className={styles.eyebrow}>{name.toUpperCase()} INSTALLATION CAPABILITY</p><h2>Range-specific preparation</h2><p className={styles.lead}>{copy.systemNote}</p><ul className={styles.checkList}>{copy.reviewPoints.map(point => <li key={point}>{point}</li>)}</ul><p>Installation capability includes cabinet assembly where needed, setting out, levelling and alignment, fillers and scribes, panels and plinths, laminate and solid-timber worktops, routed joints, sink and hob cut-outs, and integrated-appliance positioning. Specialist worktops are coordinated where required.</p></section>

    <section><div className={styles.twoColumn}><div><p className={styles.eyebrow}>TRADE NETWORK &amp; COMPLIANCE</p><h2>Clear boundaries and documented responsibilities</h2></div><div><p>Electrical and gas connections can be coordinated with appropriately qualified tradespeople where required. Any proposed supplier onboarding, insurance, qualification, right-to-work, health-and-safety or trade-network evidence must be checked directly from current documents.</p><p className={styles.pending}>Status: supplier approval has not been claimed. Compliance documents and trade credentials are pending review or available on request where held.</p></div></div></section>

    <section className={styles.dark}><p className={styles.eyebrow}>FLAGSHIP K01</p><h2>K01 evidence summary</h2><p className={styles.lead}>K01 is a Surbiton kitchen and whole-home joinery project delivered over approximately six months. The owner designed, coordinated manufacture and installed the kitchen with island and return shelving, TV unit, hallway cabinets, two bedroom wardrobes and loft walk-in wardrobe. Drawings informed factory part lists and on-site assembly.</p><p className={styles.pendingDark}>Evidence status: the owner-verified project facts are recorded in the K01 editorial draft. Final photography, drawings, permissions and publication approval remain pending. No supplier endorsement is claimed.</p></section>

    <section><p className={styles.eyebrow}>FURTHER EVIDENCE</p><h2>Work that can be reviewed now</h2><div className={styles.cards}><article><h3>Public project portfolio</h3><p>Completed joinery and fitted-furniture photography is available in the public project portfolio, subject to the evidence notes published with each item.</p><Link href="/gallery">View project portfolio ↗</Link></article><article><h3>Kitchen installation scope</h3><p>Our public kitchen-installation pages describe preparation, fitting, worktops, appliances and coordinated finishing.</p><Link href="/kitchen-installation">Review installation scope ↗</Link></article><article><h3>Additional references</h3><p>Supplier-specific references, testimonials and case-study details are not represented as verified until approval and provenance are recorded.</p><span>Pending / available on request</span></article></div></section>

    <section className={styles.muted}><p className={styles.eyebrow}>DOCUMENTATION STATUS</p><h2>A review list, not an unsupported claim</h2><div className={styles.statusGrid}><article><strong>Available website evidence</strong><p>Service scope, public portfolio and contact details.</p></article><article><strong>To be confirmed for onboarding</strong><p>Current insurance, qualifications, policies and trade credentials.</p></article><article><strong>Never stored here</strong><p>Raw DBS records, identity documents, UTR details, home addresses or private certificates.</p></article><article><strong>Supplier relationship</strong><p>No official approval, appointment or endorsement is claimed.</p></article></div></section>

    <section className={styles.cta}><p className={styles.eyebrow}>NEXT STEP</p><h2>Discuss a supplier installation review</h2><p>Contact Form &amp; Frame to agree the coverage, evidence checklist and appropriate next conversation for {name}.</p><div className={styles.actions}><a href={PHONE_HREF}>{BUSINESS_PHONE_DISPLAY}</a><a href={EMAIL_HREF}>{BUSINESS_EMAIL}</a></div></section>
  </main>;
}
