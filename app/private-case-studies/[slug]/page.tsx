import Link from "next/link";
import { notFound } from "next/navigation";
import { isPrivateAuthorized, portfolioConfigured } from "../../lib/private-portfolio/auth";
import { privateProjects } from "../../lib/private-portfolio/catalogue";
import { privateProjectStories } from "../../lib/private-portfolio/stories";
import { PasswordGate, PrivateHeader, PrivateFooter } from "../components";
import { PhotoGallery, ProjectFilms } from "../project-media";
import styles from "../private.module.css";

export default async function PrivateCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Check access before looking up any project or returning its title/content.
  if (!(await isPrivateAuthorized())) return <PasswordGate next={`/private-case-studies/${slug}`} available={portfolioConfigured()} />;
  const project = privateProjects.find(item => item.slug === slug);
  if (!project) notFound();
  const story = privateProjectStories[project.slug];
  const photographs = <section className={styles.section} aria-labelledby="photographs-heading"><div className={styles.sectionHeading}><h2 id="photographs-heading">{story?.gallery?.title ?? "Installed joinery and details"}</h2><p>{story?.gallery?.description ?? "Installation photographs · Select an image to enlarge"}</p></div><PhotoGallery photos={project.photos.map(photo => ({ ...photo, caption: story?.photoCaptions?.[photo.id] }))} landscape={Boolean(story?.gallery?.first)} /></section>;
  return <div className={styles.shell}>
    <PrivateHeader unlocked />
    <main id="main-content" className={styles.main}>
      <Link className={styles.back} prefetch={false} href="/private-case-studies">← All private case studies</Link>
      <header className={styles.intro}><p className={styles.eyebrow}>{project.category}</p><h1>{project.title}</h1><p>{story?.introduction ?? project.summary}</p></header>
      {story ? <dl className={styles.scope}>{story.scope.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl> : null}
      {story?.gallery?.first ? photographs : null}
      {project.videos.length ? <section className={styles.section} aria-labelledby="films-heading"><div className={styles.sectionHeading}><h2 id="films-heading">See the project in motion</h2><p>Silent films · Tap to play or view fullscreen</p></div><ProjectFilms videos={project.videos} /></section> : null}
      {project.workshopPhotos.length ? <section className={styles.section} aria-labelledby="workshop-heading"><div className={styles.sectionHeading}><h2 id="workshop-heading">{story?.process?.title ?? "Workshop assembly"}</h2><p>{story?.process?.description ?? "From individual components to assembled joinery · Select an image to enlarge"}</p></div><PhotoGallery photos={project.workshopPhotos} landscape={story?.process?.landscape ?? true} /></section> : null}
      {story ? <article className={styles.story} aria-label="Project scope and workmanship">{story.sections.map((section, index) => <section className={styles.storySection} key={section.heading} aria-labelledby={`story-heading-${index}`}><h2 id={`story-heading-${index}`}>{section.heading}</h2><div>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</article> : null}
      {!story?.gallery?.first ? photographs : null}
      <div className={styles.bottomNav}><Link prefetch={false} href="/private-case-studies">← Back to private case studies</Link><Link href="/contact">Discuss installation work ↗</Link></div>
    </main>
    <PrivateFooter />
  </div>;
}
