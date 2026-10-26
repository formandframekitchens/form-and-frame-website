import Link from "next/link";
import { enquiryHref } from "../lib/enquiry";
import { ServiceSection } from "./service-page";

export function InstallationFilm() {
  return <ServiceSection title="Before the worktops: a look at the fitting" eyebrow="Form & Frame on site" id="installation-film" muted>
    <div className="installation-film-grid">
      <figure>
        <video controls playsInline preload="none" width="720" height="1280" poster="/videos/installation/before-the-worktops-poster.webp" data-installation-film="before-the-worktops" aria-label="Before the worktops: Form and Frame kitchen installation film" aria-describedby="installation-film-caption">
          <source src="/videos/installation/before-the-worktops.mp4" type="video/mp4" />
          <track kind="captions" src="/videos/installation/before-the-worktops.en.vtt" srcLang="en" label="English" />
          <p><a href="/videos/installation/before-the-worktops.mp4">Open the installation film</a>. A written description follows.</p>
        </video>
        <figcaption id="installation-film-caption">15-second film from our installation work. Cabinet fitting is still in progress; the final worktops and finished room are not shown. Music: Michael Ramir C., used under the <a href="https://mixkit.co/license/modal/musicFree/" target="_blank" rel="noopener noreferrer">Mixkit Stock Music Free License</a>.</figcaption>
      </figure>
      <div className="installation-film-copy">
        <h3>What the film shows</h3>
        <p>The cabinet run takes shape, a spirit level is used for a check, and the camera returns to a wider view of the kitchen. It is a short look at the work behind the finished surfaces.</p>
        <h3>Why discuss this stage with your fitter?</h3>
        <p>Agree when the cabinets will be ready for the next trade or worktop visit. The installation plan should identify who checks the room, fits and adjusts the cabinetry, deals with any changes and coordinates the following work.</p>
        <p>The film illustrates one installation stage. Your own cabinet system, room and worktop specification determine the checks and fitting sequence required.</p>
        <h3>Film description</h3>
        <ol className="installation-film-transcript">
          <li><span>0:00–0:03</span> Form &amp; Frame introduction and cabinetry taking shape.</li>
          <li><span>0:03–0:06</span> A view along the cabinet run during installation.</li>
          <li><span>0:06–0:11</span> A spirit-level check across the cabinets, then a closer view of the level.</li>
          <li><span>0:11–0:16</span> A wider view of the work in progress and the Form &amp; Frame contact card.</li>
        </ol>
        <p className="service-note">Instrumental music; no speech or original site audio. Luton and nearby towns on the contact card describe our service area.</p>
        <div className="actions"><Link className="text-link" href={enquiryHref({ service: "kitchen-installation", installation: "own-kitchen" })}>Discuss my kitchen fitting ↗</Link><Link className="text-link" href="/case-studies/k01-surbiton/kitchen">See drawings, progress and a completed kitchen ↗</Link></div>
      </div>
    </div>
  </ServiceSection>;
}
