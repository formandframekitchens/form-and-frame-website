import Image from "next/image";
import { homepagePhotos, type PhotoKey } from "../lib/home-photos";

export function Photo({ name, caption }: { name: PhotoKey; caption?: string }) {
  const photo = homepagePhotos[name];
  return (
    <figure className={`photo-slot photo-${photo.tone}`}>
      <div className="photo-surface">
        {photo.src ? (
          <Image src={photo.src} alt={photo.alt} fill sizes={name === "hero" || name === "technical" ? "(max-width: 999px) 92vw, 52vw" : "(max-width: 600px) 92vw, 30vw"} preload={name === "hero"} />
        ) : <span className="sr-only">Photograph placeholder: {photo.alt}</span>}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
