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
        <p>Form & Frame is the intended business recipient of website enquiries. The website is hosted on Vercel. Transactional enquiry emails and optional attachments are processed through Resend for delivery to the Form & Frame business inbox, which is hosted with Google Workspace. These providers process the information only as needed to provide their respective hosting, email delivery and mailbox services.</p>

        <h2>How long information is kept</h2>
        <p>Enquiry and project information is kept only for as long as it is reasonably needed to respond to the enquiry, manage any resulting work, maintain necessary business records, and meet applicable administrative or legal requirements. Email-delivery providers may retain delivery records in accordance with their service and security policies.</p>

        <h2>Website measurement</h2>\n        <p>When website measurement is enabled, this site uses Google Analytics 4 to understand page visits and useful actions such as starting an enquiry or choosing a contact method. This helps Form &amp; Frame assess which services and project pages are useful. Advertising personalisation and Google signals are disabled in the website configuration.</p>\n        <p>Analytics events use page paths, service or supplier identifiers and simple yes-or-no indicators. Names, email addresses, phone numbers, enquiry messages, locations, uploaded files, project plans and enquiry reference numbers are not sent to Google Analytics.</p>\n\n        <h2>Your choices and questions</h2>
        <p>You can choose whether to attach plans or photographs. You can also contact Form & Frame directly instead of using the website form. If you want to ask about personal information connected with an enquiry, contact <a href={EMAIL_HREF}>{BUSINESS_EMAIL}</a> or call <a href={PHONE_HREF}>{BUSINESS_PHONE_DISPLAY}</a>.</p>

        <p className="privacy-note">This notice will be updated if the enquiry-delivery, mailbox, storage or retention arrangements materially change.</p>
      </div></section>
    </main>
    <Footer />
  </>;
}
