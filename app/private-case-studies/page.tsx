/* eslint-disable @next/next/no-img-element -- Authenticated images must bypass the public image optimisation cache. */
import Link from "next/link";
import { portfolioConfigured } from "../lib/private-portfolio/auth";
import { mediaUrl } from "../lib/private-portfolio/catalogue";
import { getPrivatePortfolio } from "../lib/private-portfolio/loader";
import { PasswordGate, PrivateFooter, PrivateHeader, PortfolioUnavailable } from "./components";
import styles from "./private.module.css";

export default async function PrivatePortfolio({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const portfolio = await getPrivatePortfolio();
  if (portfolio.status === "unauthorized") return <PasswordGate error={(await searchParams).error} available={portfolioConfigured()} />;
  if (portfolio.status !== "available") return <PortfolioUnavailable />;
  const privateProjects = portfolio.data.projects;
  return <div className={styles.shell}>
    <PrivateHeader unlocked />
    <main id="main-content" className={styles.main}>
      <header className={styles.intro}><p className={styles.eyebrow}>Selected installation work</p><h1>Private projects</h1><p>Choose a project to explore its photographs, films and workmanship. Your access covers every case study in this portfolio.</p></header>
      <p className={styles.coverNote}>Some cover images are AI-adjusted, as labelled. Explore each case study for the original photographs and films, including finished work and work in progress.</p>
      <div className={styles.projectGrid}>
        {privateProjects.map((project, index) => <Link prefetch={false} className={styles.projectCard} key={project.slug} href={`/private-case-studies/${project.slug}`}>
          <div className={styles.cardImage}><img src={mediaUrl(project.cover.thumbnail)} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} loading={index < 3 ? "eager" : "lazy"} />{project.videos.length ? <span className={styles.filmBadge}>Film included</span> : null}</div>
          <p className={styles.category}>{project.category}</p><h2>{project.title} <span aria-hidden="true">↗</span></h2><p className={styles.count}>{project.photos.length + project.workshopPhotos.length} photographs{project.videos.length ? ` · ${project.videos.length} ${project.videos.length === 1 ? "film" : "films"}` : ""}</p>
        </Link>)}
      </div>
    </main>
    <PrivateFooter />
  </div>;
}
