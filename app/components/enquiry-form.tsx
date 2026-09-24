"use client";

import { FormEvent } from "react";
import { BUSINESS_EMAIL, WHATSAPP_HREF } from "../lib/contact";

export function EnquiryForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Website enquiry — ${data.get("service") || "Form & Frame"}`;
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Postcode / town: ${data.get("location") || ""}`,
      `Service: ${data.get("service") || ""}`,
      `Kitchen supplier: ${data.get("supplier") || ""}`,
      `Project stage: ${data.get("stage") || ""}`,
      "",
      String(data.get("message") || ""),
      "",
      "Plans / images: please attach them to this email before sending.",
    ].join("\n");

    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="enquiry-form" onSubmit={submit}>
    <div className="form-grid">
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
      <label>Postcode / town<input name="location" required autoComplete="postal-code" /></label>
      <label>Service<select name="service" required defaultValue=""><option value="" disabled>Select service</option><option>Bespoke joinery & fitted furniture</option><option>Kitchen installation</option><option>In-frame kitchen</option><option>Internal door installation</option><option>Joinery & furniture installation</option><option>Other joinery enquiry</option></select></label>
      <label>Kitchen supplier<select name="supplier" defaultValue=""><option value="">Not applicable / not chosen</option><option>Howdens</option><option>Wren</option><option>IKEA</option><option>Magnet</option><option>Wickes</option><option>Benchmarx</option><option>B&Q</option><option>Other</option></select></label>
      <label>Project stage<select name="stage" defaultValue=""><option value="">Select stage</option><option>Planning / researching</option><option>Kitchen designed</option><option>Kitchen ordered</option><option>Ready for installation</option></select></label>
      <label className="form-span">Project details<textarea name="message" rows={7} required placeholder="Tell us about the project, room or site, timing and any drawings, plans or preparation work." /></label>
    </div>
    <div className="upload-placeholder"><strong>Plans & photographs</strong><span>File upload will be connected later. For now, submit the form and attach your plan and room photographs to the email that opens.</span></div>
    <label className="consent"><input type="checkbox" required /> <span>I agree that Form & Frame can use these details to respond to my enquiry.</span></label>
    <div className="actions"><button className="button" type="submit">Prepare email enquiry ↗</button><a className="button button-outline" href={WHATSAPP_HREF}>WhatsApp instead ↗</a></div>
    <p className="form-note">This form does not claim to send data to a server. It prepares an email in your device’s email application addressed to {BUSINESS_EMAIL}.</p>
  </form>;
}
