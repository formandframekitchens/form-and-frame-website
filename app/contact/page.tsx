import { EnquiryForm } from "../components/enquiry-form";
import { Footer, Header } from "../components/site-shell";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, EMAIL_HREF, PHONE_HREF, WHATSAPP_HREF } from "../lib/contact";
import { serviceMetadata } from "../lib/service-metadata";

export const metadata = serviceMetadata(
  "Contact Form & Frame | Kitchen Installation Enquiries",
  "Contact Form & Frame for kitchen installation, in-frame kitchens and internal door fitting around Luton, Bedfordshire and Hertfordshire.",
  "/contact"
);

export default function ContactPage() {
  return <>
    <Header />
    <main id="main-content" className="service-page">
      <header className="service-hero"><div className="container">
        <p className="eyebrow">Kitchen installation enquiries</p>
        <h1>Tell us about your project</h1>
        <p className="service-lead">Send your postcode, kitchen plan, room details and preferred timing. We can review the information before arranging a site visit.</p>
        <div className="service-contact-actions">
          <a className="button" href={WHATSAPP_HREF}>WhatsApp ↗</a>
          <a className="button button-outline" href={PHONE_HREF}>{BUSINESS_PHONE_DISPLAY}</a>
          <a className="text-link" href={EMAIL_HREF}>{BUSINESS_EMAIL}</a>
        </div>
      </div></header>
      <section className="service-section service-section-muted"><div className="container">
        <p className="eyebrow">Initial enquiry</p>
        <h2>Send the essentials first</h2>
        <div className="service-section-body"><EnquiryForm /></div>
      </div></section>
    </main>
    <Footer />
  </>;
}
