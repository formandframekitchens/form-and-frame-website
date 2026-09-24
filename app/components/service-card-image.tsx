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
        sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 600px"
        onError={() => setFailed(true)}
      />
    ) : (
      <div className="services-card-placeholder" role="img" aria-label={alt}>
        <span>{number}</span>
        <small>Service imagery being prepared</small>
      </div>
    )}
  </div>;
}
