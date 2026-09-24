import { Suspense } from "react";
import { EnquiryForm } from "../components/enquiry-form";
import { Footer, Header } from "../components/site-shell";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, EMAIL_HREF, PHONE_HREF, WHATSAPP_HREF } from "../lib/contact";
import { serviceMetadata } from "../lib/service-metadata";

export const metadata = serviceMetadata(
  "Contact Form & Frame | Project Enquiries",
  "Contact Form & Frame for kitchen installation, bespoke joinery, internal doors and joinery installation around Luton, Bedfordshire and Hertfordshire.",
  "/contact"
);

export default function ContactPage() {
  return <>
    <Header />
    <main id="main-content" className="service-page">
      <header className="service-hero"><div className="container">
        <p className="eyebrow">Project enquiries</p>
        <h1>Tell us about your project</h1>
        <p className="service-lead">Send your postcode, drawings or plans, photographs, project details and preferred timing. We can review the information before arranging the next step.</p>
        <div className="service-contact-actions">
          <a className="button" href={WHATSAPP_HREF}>WhatsApp ↗</a>
          <a className="button button-outline" href={PHONE_HREF}>{BUSINESS_PHONE_DISPLAY}</a>
          <a className="text-link" href={EMAIL_HREF}>{BUSINESS_EMAIL}</a>
        </div>
      </div></header>
      <section className="service-section service-section-muted" id="enquiry-form"><div className="container">
        <p className="eyebrow">Initial enquiry</p>
        <h2>Send the essentials first</h2>
        <div className="service-section-body"><Suspense fallback={<p className="enquiry-loading">Loading your enquiry form… You can also <a href={EMAIL_HREF}>email {BUSINESS_EMAIL}</a>.</p>}><EnquiryForm /></Suspense></div>
      </div></section>
    </main>
    <Footer />
  </>;
}
