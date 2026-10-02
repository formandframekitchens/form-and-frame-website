"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { GalleryImage } from "../lib/gallery-projects";

export function ProjectGalleryCarousel({
  images,
  title,
}: {
  images: GalleryImage[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const active = images[activeIndex];

  function previous() {
    setActiveIndex(index => (index - 1 + images.length) % images.length);
  }

  function next() {
    setActiveIndex(index => (index + 1) % images.length);
  }

  useEffect(() => {
    if (!lightboxOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, images.length]);

  if (!images.length) return null;

  return (
    <div className="project-carousel" aria-label={`${title} image gallery`}>
      <div className="project-carousel-main">
        <button
          type="button"
          className="project-carousel-image-button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Open larger image: ${active.alt}`}
        >
          <Image
            key={active.src}
            src={active.src}
            alt={active.alt}
            fill
            priority
            sizes="92vw"
            style={{ objectFit: active.fit ?? "cover" }}
          />
          <span className="project-carousel-enlarge">View larger</span>
        </button>

        {images.length > 1 && (
          <>
            <button type="button" className="project-carousel-arrow project-carousel-arrow-left" onClick={previous} aria-label="Previous image">
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" className="project-carousel-arrow project-carousel-arrow-right" onClick={next} aria-label="Next image">
              <span aria-hidden="true">→</span>
            </button>
          </>
        )}

        <div className="project-carousel-counter" aria-live="polite">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      <p className="project-carousel-caption">{active.alt}</p>

      {images.length > 1 && (
        <div className="project-carousel-thumbnails" role="list" aria-label="Choose project image">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`project-carousel-thumb${index === activeIndex ? " is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}: ${image.alt}`}
              aria-current={index === activeIndex ? "true" : undefined}
              role="listitem"
            >
              <span className="project-carousel-thumb-image">
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 26vw, 160px"
                  style={{ objectFit: image.fit ?? "cover" }}
                />
              </span>
              <span className="project-carousel-thumb-number">{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={`${title} enlarged image`}>
          <button type="button" className="project-lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close enlarged image">
            <span aria-hidden="true">×</span>
          </button>
          <div className="project-lightbox-stage">
            <Image
              key={`lightbox-${active.src}`}
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          {images.length > 1 && (
            <>
              <button type="button" className="project-lightbox-arrow project-lightbox-left" onClick={previous} aria-label="Previous image">
                <span aria-hidden="true">←</span>
              </button>
              <button type="button" className="project-lightbox-arrow project-lightbox-right" onClick={next} aria-label="Next image">
                <span aria-hidden="true">→</span>
              </button>
            </>
          )}
          <div className="project-lightbox-footer">
            <span>{active.alt}</span>
            <span>{activeIndex + 1} / {images.length}</span>
          </div>
        </div>
      )}
    </div>
  );
}
