"use client";
/* eslint-disable @next/next/no-img-element -- Session-protected media bypasses public image optimisation. */
/* eslint-disable @next/next/no-html-link-for-pages -- Session recovery needs a full navigation rather than a cached client transition. */
import { useRef, useState } from "react";
import styles from "./private.module.css";

const media = (id: string) => `/api/private-case-studies/media/${id}`;
type Photo = { id: string; thumbnail: string; alt: string; caption?: string; width: number; height: number };
type Film = { id: string; poster: string; title: string; quality: string; duration: number; width: number; height: number };

export function PhotoGallery({ photos, landscape = false }: { photos: Photo[]; landscape?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const [opened, setOpened] = useState(false);
  const active = photos[selected];
  function change(delta: number) { setSelected(index => (index + delta + photos.length) % photos.length); }
  return <>
    <div className={`${styles.photoGrid}${landscape ? ` ${styles.workshopGrid}` : ""}`}>{photos.map((photo, index) => <figure className={styles.photoFigure} key={photo.id}><button type="button" className={styles.photoButton} onClick={() => { setSelected(index); setOpened(true); dialog.current?.showModal(); }} aria-label={`Enlarge ${photo.alt}`}>
      <img src={media(photo.thumbnail)} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" /><span aria-hidden="true">{String(index + 1).padStart(2, "0")} <span>↗</span></span>
    </button>{photo.caption ? <figcaption>{photo.caption}</figcaption> : null}</figure>)}</div>
    <dialog className={styles.lightbox} ref={dialog} aria-label="Project photographs" onClose={() => setOpened(false)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={event => { if (event.key === "ArrowLeft") change(-1); if (event.key === "ArrowRight") change(1); }}>
      <div className={styles.lightboxInner}><div className={styles.lightboxBar}><p aria-live="polite">Photograph {selected + 1} of {photos.length}</p><button type="button" autoFocus onClick={() => dialog.current?.close()}>Close ×</button></div>
        {opened ? <img key={active.id} src={media(active.id)} alt={active.alt} width={active.width} height={active.height} /> : null}
        {active.caption ? <p className={styles.lightboxCaption}>{active.caption}</p> : null}
        <div className={styles.lightboxBar}><button type="button" onClick={() => change(-1)}>← Previous</button><button type="button" onClick={() => change(1)}>Next →</button></div>
      </div>
    </dialog>
  </>;
}

function FilmPlayer({ film }: { film: Film }) {
  const [error, setError] = useState(false);
  return <figure className={styles.film}>
    <video controls playsInline preload="none" poster={media(film.poster)} width={film.width} height={film.height} aria-label={film.title} onError={() => setError(true)} onPlay={event => {
      const current = event.currentTarget;
      current.closest("section")?.querySelectorAll("video").forEach(video => { if (video !== current) video.pause(); });
    }}>
      <source src={media(film.id)} type="video/mp4" />Your browser does not support this video player.
    </video>
    <figcaption><span>{film.title}</span><span>{film.quality} · {Math.floor(film.duration / 60)}:{String(film.duration % 60).padStart(2, "0")}</span></figcaption>
    {error ? <p className={styles.mediaError}>The film could not load. <a href="/private-case-studies">Reopen the portfolio</a> to check your access and try again.</p> : null}
  </figure>;
}

export function ProjectFilms({ videos }: { videos: Film[] }) {
  const landscapeOnly = videos.length > 0 && videos.every(film => film.width > film.height);
  return <div className={`${styles.films}${landscapeOnly ? ` ${styles.landscapeFilms}` : ""}`}>{videos.map(film => <FilmPlayer key={film.id} film={film} />)}</div>;
}
