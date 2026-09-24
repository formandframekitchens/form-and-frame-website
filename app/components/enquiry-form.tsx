"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { BUSINESS_EMAIL, WHATSAPP_HREF } from "../lib/contact";
import { joineryOptions, type JoineryId } from "../lib/joinery-types";
import { enquiryEmail, installationOptions, isKitchenService, readEnquirySelection, serviceOptions, supplierOptions, type EnquirySelection, type InstallationId, type ServiceId, type SupplierId } from "../lib/enquiry";

export function EnquiryForm() {
  const params = useSearchParams();
  const initialSelection = readEnquirySelection(params);
  // Reset only when URL selections change, not when the visitor edits the form.
  return <EnquiryFields key={JSON.stringify(initialSelection)} initialSelection={initialSelection} />;
}

function EnquiryFields({ initialSelection }: { initialSelection: EnquirySelection }) {
  const [selection, setSelection] = useState(initialSelection);
  const kitchenService = isKitchenService(selection.service);
  const installation = installationOptions.find(option => option.value === selection.installation);
  const showSupplier = kitchenService && installation?.usesSupplier !== false;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { subject, body } = enquiryEmail(new FormData(event.currentTarget));
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="enquiry-form" onSubmit={submit}>
    {initialSelection.service && <p className="enquiry-prefill-note">Your service choices have been filled in below. You can change them before preparing your enquiry.</p>}
    <div className="form-grid">
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
      <label>Postcode / town<input name="location" required autoComplete="postal-code" /></label>
      <label>Service<select name="service" required value={selection.service} onChange={event => setSelection({ service: event.target.value as ServiceId, supplier: "", installation: "", joinery: "" })}><option value="" disabled>Select service</option>{serviceOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
      {selection.service === "bespoke-joinery" && <label>Joinery type<select name="joinery" value={selection.joinery} onChange={event => setSelection({ ...selection, joinery: event.target.value as JoineryId | "" })}><option value="">Select if known</option>{joineryOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>}
      {kitchenService && <label>Kitchen requirement<select name="installation" value={selection.installation} onChange={event => {
        const value = event.target.value as InstallationId | "";
        const next = installationOptions.find(option => option.value === value);
        setSelection({ ...selection, installation: value, supplier: next?.usesSupplier === false ? "" : selection.supplier });
      }}><option value="">Select if known</option>{installationOptions.filter(option => option.service === selection.service).map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>}
      {showSupplier && <label>Kitchen supplier<select name="supplier" value={selection.supplier} onChange={event => setSelection({ ...selection, supplier: event.target.value as SupplierId | "" })}><option value="">Select if known</option>{supplierOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>}
      <label>Project stage<select name="stage" defaultValue=""><option value="">Select stage</option><option>Planning / researching</option><option>{kitchenService ? "Kitchen designed" : "Design prepared"}</option><option>{kitchenService ? "Kitchen ordered" : "Furniture ordered"}</option><option>Ready for installation</option></select></label>
      <label className="form-span">Project details<textarea name="message" rows={7} required placeholder={selection.supplier === "other" ? "Tell us your supplier’s name, the kitchen type, timing and any plans or preparation work." : "Tell us about the project, room or site, timing and any drawings, plans or preparation work."} /></label>
    </div>
    <div className="upload-placeholder"><strong>Plans & photographs</strong><span>File upload will be connected later. For now, submit the form and attach your plan and room photographs to the email that opens.</span></div>
    <label className="consent"><input type="checkbox" required /> <span>I agree that Form & Frame can use these details to respond to my enquiry.</span></label>
    <div className="actions"><button className="button" type="submit">Prepare email enquiry ↗</button><a className="button button-outline" href={WHATSAPP_HREF}>WhatsApp instead ↗</a></div>
    <p className="form-note">This form does not claim to send data to a server. It prepares an email in your device’s email application addressed to {BUSINESS_EMAIL}.</p>
  </form>;
}
