"use client";

import Image from "next/image";
import { useState } from "react";

export function ServiceCardImage({ src, alt, number }: { src: string; alt: string; number: string }) {
  const [failed, setFailed] = useState(false);

  return <div className="services-card-image">
    {!failed ? (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 600px) 72px, (max-width: 900px) 96px, 144px"
        onError={() => setFailed(true)}
      />
    ) : (
      <div className="services-card-placeholder" role="img" aria-label={alt}>
        <span>{number}</span>
      </div>
    )}
  </div>;
}
