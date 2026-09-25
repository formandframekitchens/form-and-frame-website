"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { homepageKitchenSlides } from "../lib/home-carousel";

const AUTOPLAY_MS = 5200;

export function KitchenCarousel() {
  const [index, setIndex] = useState(0);
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

  useEffect(() => {
    if (interactionPaused || userPaused || reducedMotion || homepageKitchenSlides.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex(current => (current + 1) % homepageKitchenSlides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [interactionPaused, userPaused, reducedMotion]);

  function goTo(next: number) {
    setIndex((next + homepageKitchenSlides.length) % homepageKitchenSlides.length);
  }

  return (
    <div
      className="kitchen-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Form & Frame kitchen installation photography"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={() => setInteractionPaused(false)}
    >
      <div className="kitchen-carousel-track">
        {homepageKitchenSlides.map((slide, slideIndex) => (
          <figure
            className={`kitchen-carousel-slide${slideIndex === index ? " is-active" : ""}`}
            aria-hidden={slideIndex !== index}
            key={slide.src}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={slideIndex === 0}
              sizes="(max-width: 999px) 92vw, 92vw"
            />
            <figcaption>{slide.caption}</figcaption>
          </figure>
        ))}
      </div>

      <button className="kitchen-carousel-arrow kitchen-carousel-prev" type="button" aria-label="Previous kitchen image" onClick={() => goTo(index - 1)}>←</button>
      <button className="kitchen-carousel-arrow kitchen-carousel-next" type="button" aria-label="Next kitchen image" onClick={() => goTo(index + 1)}>→</button>

      {!reducedMotion && <button
        className="kitchen-carousel-pause"
        type="button"
        aria-pressed={userPaused}
        onClick={() => setUserPaused(value => !value)}
      >
        {userPaused ? "Play slideshow" : "Pause slideshow"}
      </button>}

      <div className="kitchen-carousel-dots" aria-label="Choose kitchen image">
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
