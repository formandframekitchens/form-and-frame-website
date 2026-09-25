import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, EMAIL_HREF, PHONE_HREF } from "../lib/contact";
import { serviceMetadata } from "../lib/service-metadata";

export const metadata = serviceMetadata(
  "Privacy Notice | Form & Frame",
  "How Form & Frame uses personal information submitted through website enquiries, including optional project plans and photographs.",
  "/privacy"
);

export default function PrivacyPage() {
  return <>
    <Header />
    <main id="main-content" className="service-page">
      <header className="service-hero"><div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Privacy</span></nav>
        <p className="eyebrow">Privacy notice</p>
        <h1>How we use enquiry information</h1>
        <p className="service-lead">This notice explains the information Form & Frame asks for when you contact us about a project and how it is used to respond to that enquiry.</p>
      </div></header>

      <section className="service-section"><div className="container privacy-copy">
        <h2>Information you provide</h2>
        <p>When you make an enquiry, you may provide your name, email address or telephone number, postcode or town, project details, preferred contact method and information about the service you need. You may also choose to provide plans or photographs where the website supports secure attachment delivery.</p>

        <h2>Why we use it</h2>
        <p>We use enquiry information to understand the project, check whether the location and service are suitable, respond to you, prepare or discuss a quotation and keep a practical record of the enquiry and any resulting project communication.</p>

        <h2>Plans and photographs</h2>
        <p>Plans and photographs can contain information about your home or project. They are treated as project information and should only be uploaded when relevant to the enquiry. The online form must not report an attachment as received unless the configured enquiry service has accepted it.</p>

        <h2>Who receives the information</h2>
        <p>Form & Frame is the intended business recipient of website enquiries. Technical service providers may process information where they are used to host the website or securely deliver and store enquiries. The exact enquiry-delivery and storage provider will be documented here before that provider is enabled for production use.</p>

        <h2>How long information is kept</h2>
        <p>Enquiry and project information should be retained only for as long as it is needed for the enquiry, any resulting work, and applicable administrative or legal requirements. The business retention period is being confirmed before the direct-submission system is treated as fully verified.</p>

        <h2>Your choices and questions</h2>
        <p>You can choose whether to attach plans or photographs. You can also contact Form & Frame directly instead of using the website form. If you want to ask about personal information connected with an enquiry, contact <a href={EMAIL_HREF}>{BUSINESS_EMAIL}</a> or call <a href={PHONE_HREF}>{BUSINESS_PHONE_DISPLAY}</a>.</p>

        <p className="privacy-note">This notice will be updated if the production enquiry provider, storage arrangements or retention policy changes.</p>
      </div></section>
    </main>
    <Footer />
  </>;
}
