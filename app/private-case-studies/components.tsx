import Link from "next/link";
import { Wordmark } from "../components/site-shell";
import { BUSINESS_EMAIL, whatsappHref } from "../lib/contact";
import styles from "./private.module.css";

const accessRequest = "Hello, I would like to request an access code for the Form & Frame private projects portfolio.";
const accessEmailHref = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent("Private projects access request")}&body=${encodeURIComponent(accessRequest)}`;

export function PrivateHeader({ unlocked = false }: { unlocked?: boolean }) {
  return <header className={styles.header}>
    <Wordmark />
    <div className={styles.headerActions}><span>Private portfolio</span>
      {unlocked ? <form method="post" action="/api/private-case-studies/logout"><button type="submit">Lock portfolio ↗</button></form> : <Link href="/">Main website ↗</Link>}
    </div>
  </header>;
}

export function PasswordGate({ error, next = "", available = true }: { error?: string; next?: string; available?: boolean }) {
  return <div className={styles.shell}>
    <PrivateHeader />
    <main id="main-content" className={styles.lockPage}>
      <section className={styles.lockCard}>
        <p className={styles.eyebrow}>By invitation</p>
        <h1>Private case studies</h1>
        <p>Explore selected projects shared privately. Enter your access code once to view the case studies, photographs and films.</p>
        {available ? <form className={styles.login} method="post" action="/api/private-case-studies/login">
          <label htmlFor="password">Please enter your access code</label>
          <input id="password" name="password" type="password" autoComplete="current-password" maxLength={256} required aria-describedby={error ? "password-error" : undefined} aria-invalid={error ? true : undefined} />
          {next ? <input type="hidden" name="next" value={next} /> : null}
          {error ? <p id="password-error" role="alert">That access code wasn’t recognised. Please try again.</p> : null}
          <button type="submit">View private case studies <span aria-hidden="true">↗</span></button>
        </form> : <p className={styles.notice}>The private portfolio is being prepared. Please contact Form &amp; Frame for access.</p>}
        <section className={styles.accessRequest} aria-labelledby="request-access-heading">
          <h2 id="request-access-heading">Request an access code</h2>
          <p>Email or WhatsApp us with your name and company, and we’ll arrange access.</p>
          <div className={styles.accessLinks}>
            <a href={accessEmailHref}>Request by email <span aria-hidden="true">↗</span></a>
            <a href={whatsappHref(accessRequest)}>Request on WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </section>
    </main>
  </div>;
}

export function PrivateFooter() {
  return <footer className={styles.footer}><span>FORM &amp; FRAME · PRIVATE PORTFOLIO</span><span>Shared for individual review. Please do not redistribute.</span></footer>;
}
