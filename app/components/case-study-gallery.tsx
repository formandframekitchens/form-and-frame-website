"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { ProjectPhoto } from "../lib/case-studies";
import styles from "./case-study.module.css";

export function CaseStudyGallery({ photos, label, itemName = "photographs", ordered = false }: { photos: ProjectPhoto[]; label: string; itemName?: string; ordered?: boolean }) {
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const photo = photos[active];
  const isDrawing = itemName === "drawing sheets";
  const items = photos.map((item,index)=>({item,index}));
  const move = (direction: number) => setActive(index => (index + direction + photos.length) % photos.length);
  function thumbnail(item: ProjectPhoto, index: number) {
    return <figure key={item.src} className={styles.thumbnail}>
      <button type="button" onClick={() => { setActive(index); dialog.current?.showModal(); }} aria-label={`Enlarge: ${item.alt}`}>
        <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes={photos.length===1 && item.width>=item.height?"94vw":item.height>item.width?"(max-width: 650px) 90vw, 32vw":"(max-width: 650px) 90vw, 48vw"} />
        <span aria-hidden="true">↗</span>
      </button>
      <figcaption>{item.alt}</figcaption>
    </figure>;
  }
  function rows(items: {item:ProjectPhoto;index:number}[]) {
    if (ordered) return <div className={`${styles.photoGrid} ${isDrawing?styles.drawingGrid:items.length===3?styles.siteTriptych:""} ${items.length===1?styles.singlePreview:""}`}>{items.map(({item,index})=>thumbnail(item,index))}</div>;
    return [false,true].map(portrait=>{
      const group=items.filter(({item})=>(item.height>item.width)===portrait);
      if(!group.length)return null;
      return <div key={String(portrait)} className={`${styles.photoGrid} ${portrait?styles.portraitGrid:""} ${group.length===1?styles.singlePreview:""} ${isDrawing?styles.drawingGrid:""}`} data-photo-orientation={portrait?"portrait":"landscape"}>{group.map(({item,index})=>thumbnail(item,index))}</div>;
    });
  }
  if (!photo) return null;
  return <div className={styles.gallery} aria-label={label}>
    {rows(items)}
    <dialog ref={dialog} className={styles.lightbox} aria-labelledby={titleId} onKeyDown={event => {
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
    }}>
      <div className={styles.lightboxBar}><span id={titleId}>{label} · {active + 1} / {photos.length}</span><button type="button" onClick={() => dialog.current?.close()}>Close ×</button></div>
      <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="95vw" />
      <div className={styles.lightboxControls}><button type="button" onClick={() => move(-1)} aria-label="Previous photograph">←</button><p aria-live="polite">{photo.alt}</p><button type="button" onClick={() => move(1)} aria-label="Next photograph">→</button></div>
      <a href={photo.src} target="_blank" rel="noopener noreferrer">Open full-size image ↗</a>
    </dialog>
  </div>;
}
