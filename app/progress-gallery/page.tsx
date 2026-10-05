import type { Metadata } from "next";
import Link from "next/link";
import { isProgressGalleryAuthorized } from "@/app/lib/progress-gallery-auth";
import { progressGallerySections } from "./progress-gallery-data";
import styles from "./progress-gallery.module.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Private Progress Gallery | Form & Frame",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function ProgressGalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const authorized = await isProgressGalleryAuthorized();
  const query = await searchParams;

  if (!authorized) {
    return (
      <main className={styles.lockPage}>
        <section className={styles.lockCard}>
          <p className={styles.eyebrow}>FORM & FRAME</p>
          <h1>Private progress gallery</h1>
          <p>
            This area contains restricted work-in-progress photography. Enter the
            access code supplied by Form & Frame.
          </p>
          <form action="/api/progress-gallery/login" method="post" className={styles.form}>
            <label htmlFor="code">Access code</label>
            <input
              id="code"
              name="code"
              type="password"
              autoComplete="current-password"
              required
            />
            {query.error === "1" ? (
              <p className={styles.error}>The access code is not valid.</p>
            ) : null}
            <button type="submit">Open private gallery</button>
          </form>
          <p className={styles.accessRequest}>Need an access code? <Link href="/contact?service=other&request=gallery-access#enquiry-form">Request access from Form &amp; Frame</Link>.</p>
          <Link className={styles.returnLink} href="/gallery">Browse the public gallery ↗</Link>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.galleryPage}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>FORM & FRAME · RESTRICTED</p>
          <h1>Project progress gallery</h1>
          <p>
            Private review area. These photographs are not published in the main
            website gallery.
          </p>
        </div>
        <form action="/api/progress-gallery/logout" method="post">
          <button className={styles.secondaryButton} type="submit">Lock gallery</button>
        </form>
      </header>

      {progressGallerySections.map((section) => (
        <section key={section.title} className={styles.section}>
          <div className={styles.sectionIntro}>
            <h2>{section.title}</h2>
            <p>{section.note}</p>
          </div>

          {section.images.length ? (
            <div className={styles.grid}>
              {section.images.map((image) => (
                <figure key={image.pathname} className={styles.figure}>
                  <img
                    src={`/api/progress-gallery/image/${image.pathname}`}
                    alt={image.alt}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              Private storage is connected. Progress photographs will appear here
              as they are transferred into the protected archive.
            </div>
          )}
        </section>
      ))}
    </main>
  );
}
