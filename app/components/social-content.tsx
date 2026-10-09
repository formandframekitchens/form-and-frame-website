import Image from "next/image";
import Link from "next/link";
import { socialContent } from "../lib/social-content";

export function SocialContent() {
  return (
    <section className="section social-section" aria-labelledby="social-heading">
      <div className="container">
        <div className="social-heading">
          <div>
            <p className="eyebrow">@formandframekitchens</p>
            <h2 id="social-heading">Latest from Form &amp; Frame</h2>
          </div>
          <p>Selected kitchen, joinery and installation updates, with the useful project information kept here on our website.</p>
        </div>
        <div className="social-card-grid">
          {socialContent.map(item => (
            <article className="social-card" key={item.id}>
              <Link className="social-card-site-link" href={item.siteHref}>
                <span className="social-card-image">
                  <Image src={item.image.src} alt={item.image.alt} fill loading="lazy"
                    sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 999px) 44vw, 30vw" />
                </span>
                <span className="social-card-copy">
                  <span className="social-card-title">{item.title}</span>
                  <span>{item.copy}</span>
                  <span className="social-card-primary">{item.siteLabel} <span aria-hidden="true">↗</span></span>
                </span>
              </Link>
              <a className="social-card-instagram" href={item.instagramHref} target="_blank" rel="noreferrer"
                data-analytics="instagram" data-social-content={item.id}>
                See on Instagram <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
