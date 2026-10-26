"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { homepageKitchenSlides } from "../lib/home-carousel";

const AUTOPLAY_MS = 5200;

export function KitchenCarousel() {
  const [index, setIndex] = useState(0);
  const [requestedIndex, setRequestedIndex] = useState(0);
  const [requestedSlides, setRequestedSlides] = useState([0]);
  const loadedSlides = useRef(new Set<number>());
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const goTo = useCallback((next: number) => {
    const target = (next + homepageKitchenSlides.length) % homepageKitchenSlides.length;
    setRequestedIndex(target);
    setRequestedSlides(current => current.includes(target) ? current : [...current, target]);
    if (loadedSlides.current.has(target)) setIndex(target);
  }, []);

  useEffect(() => {
    if (interactionPaused || userPaused || reducedMotion || requestedIndex !== index || homepageKitchenSlides.length < 2) return;
    const timer = window.setInterval(() => goTo(index + 1), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [interactionPaused, userPaused, reducedMotion, requestedIndex, index, goTo]);

  return (
    <div
      className="kitchen-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="K01 bespoke kitchen photographs and cabinet-opening sequence"
      aria-busy={requestedIndex !== index}
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={() => setInteractionPaused(false)}
    >
      <div className="kitchen-carousel-track">
        {homepageKitchenSlides.map((slide, slideIndex) => (
          <figure
            className={`kitchen-carousel-slide${slide.sequence ? " kitchen-carousel-sequence" : ""}${slideIndex === index ? " is-active" : ""}`}
            aria-hidden={slideIndex !== index}
            key={slide.src}
          >
            {requestedSlides.includes(slideIndex) && <Image
              src={slide.src}
              alt={slide.alt}
              fill
              loading="eager"
              fetchPriority={slideIndex === 0 ? "high" : "auto"}
              sizes="92vw"
              onLoad={() => {
                loadedSlides.current.add(slideIndex);
                if (slideIndex === requestedIndex) setIndex(slideIndex);
              }}
              onError={() => {
                if (slideIndex === requestedIndex) {
                  setRequestedIndex(index);
                  setUserPaused(true);
                }
              }}
            />}
            <figcaption>{slide.caption}</figcaption>
          </figure>
        ))}
      </div>

      <button className="kitchen-carousel-arrow kitchen-carousel-prev" type="button" aria-label="Previous project image" onClick={() => goTo(requestedIndex - 1)}>←</button>
      <button className="kitchen-carousel-arrow kitchen-carousel-next" type="button" aria-label="Next project image" onClick={() => goTo(requestedIndex + 1)}>→</button>

      {!reducedMotion && <button
        className="kitchen-carousel-pause"
        type="button"
        aria-pressed={userPaused}
        onClick={() => setUserPaused(value => !value)}
      >
        {userPaused ? "Play slideshow" : "Pause slideshow"}
      </button>}

      <div className="kitchen-carousel-dots" aria-label="Choose project image">
        {homepageKitchenSlides.map((slide, dotIndex) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show image ${dotIndex + 1}: ${slide.caption}`}
            aria-current={dotIndex === index ? "true" : undefined}
            onClick={() => goTo(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
}
