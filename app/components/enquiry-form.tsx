"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { WHATSAPP_HREF } from "../lib/contact";
import { joineryOptions, type JoineryId } from "../lib/joinery-types";
import { installationOptions, isKitchenService, readEnquirySelection, serviceOptions, supplierOptions, type EnquirySelection, type InstallationId, type ServiceId, type SupplierId } from "../lib/enquiry";

const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_TOTAL_BYTES = 25 * 1024 * 1024;
const ACCEPTED_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);

export function EnquiryForm() {
  const params = useSearchParams();
  const initialSelection = readEnquirySelection(params);
  return <EnquiryFields key={JSON.stringify(initialSelection)} initialSelection={initialSelection} />;
}

function EnquiryFields({ initialSelection }: { initialSelection: EnquirySelection }) {
  const [selection, setSelection] = useState(initialSelection);
  const [files, setFiles] = useState<File[]>([]);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [reference, setReference] = useState("");
  const submissionId = useRef<string | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const kitchenService = isKitchenService(selection.service);
  const installation = installationOptions.find(option => option.value === selection.installation);
  const showSupplier = kitchenService && installation?.usesSupplier !== false;

  function focusStatus() {
    window.setTimeout(() => statusRef.current?.focus(), 0);
  }

  function validateFiles(nextFiles: File[]) {
    if (nextFiles.length > MAX_FILES) return `Choose no more than ${MAX_FILES} files.`;
    let total = 0;
    for (const file of nextFiles) {
      total += file.size;
      if (!ACCEPTED_TYPES.has(file.type)) return "Use PDF, JPEG or PNG files. HEIC/HEIF is not supported yet.";
      if (file.size > MAX_FILE_BYTES) return "Each file must be 10 MB or smaller.";
    }
    if (total > MAX_TOTAL_BYTES) return "Attachments must total 25 MB or less.";
    return "";
  }

  function addFiles(selected: FileList | null) {
    if (!selected) return;
    const next = [...files, ...Array.from(selected)];
    const error = validateFiles(next);
    if (error) {
      setFieldErrors(current => ({ ...current, files: error }));
      setStatus("error");
      setStatusMessage("Please check the attachment selection.");
      focusStatus();
      return;
    }
    setFiles(next);
    setFieldErrors(current => {
      const copy = { ...current };
      delete copy.files;
      return copy;
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || status === "success") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const preferred = String(data.get("preferredContact") || "");
    const clientErrors: Record<string, string> = {};

    if (!email && !phone) clientErrors.contact = "Please provide an email address or phone number.";
    if (preferred === "email" && !email) clientErrors.email = "Add an email address for email contact.";
    if (preferred === "phone" && !phone) clientErrors.phone = "Add a phone number for phone contact.";

    const filesError = validateFiles(files);
    if (filesError) clientErrors.files = filesError;

    if (Object.keys(clientErrors).length) {
      setFieldErrors(clientErrors);
      setStatus("error");
      setStatusMessage("Please correct the details below.");
      focusStatus();
      return;
    }

    if (!submissionId.current) submissionId.current = crypto.randomUUID();
    data.set("submissionId", submissionId.current);
    files.forEach(file => data.append("files", file, file.name));

    setFieldErrors({});
    setStatus("submitting");
    setStatusMessage("Sending your enquiry…");

    try {
      const response = await fetch("/api/enquiries", { method: "POST", body: data });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        setFieldErrors(result.fields || {});
        setStatus("error");
        setStatusMessage(result.error || "We could not send the enquiry. Your details are still here, so you can try again.");
        focusStatus();
        return;
      }

      setReference(String(result.reference || ""));
      setStatus("success");
      setStatusMessage("Thanks — your enquiry has been received. We will contact you using the details provided.");
      focusStatus();
    } catch {
      setStatus("error");
      setStatusMessage("We could not reach the enquiry service. Your details are still here, so please try again or use WhatsApp, phone or email.");
      focusStatus();
    }
  }

  const error = (name: string) => fieldErrors[name] ? <span className="field-error" id={`${name}-error`}>{fieldErrors[name]}</span> : null;

  return <form className="enquiry-form" onSubmit={submit} noValidate>
    {initialSelection.service && <p className="enquiry-prefill-note">Your service choices have been filled in below. You can change them before sending your enquiry.</p>}

    {status !== "idle" && <div
      className={`form-status form-status-${status}`}
      role={status === "error" ? "alert" : "status"}
      aria-live="polite"
      tabIndex={-1}
      ref={statusRef}
    >
      <strong>{status === "success" ? "Enquiry received" : status === "submitting" ? "Sending enquiry" : "Please check your enquiry"}</strong>
      <span>{statusMessage}</span>
      {status === "success" && reference && <small>Reference: {reference}</small>}
    </div>}

    {fieldErrors.contact && <div className="form-error-summary" role="alert"><strong>Contact details needed</strong><span>{fieldErrors.contact}</span></div>}

    <div className="form-grid">
      <label>Name
        <input name="name" required autoComplete="name" aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "name-error" : undefined} />
        {error("name")}
      </label>

      <label>Email <span className="field-optional">optional if you give a phone number</span>
        <input name="email" type="email" autoComplete="email" aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "email-error" : undefined} />
        {error("email")}
      </label>

      <label>Phone <span className="field-optional">optional if you give an email</span>
        <input name="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(fieldErrors.phone)} aria-describedby={fieldErrors.phone ? "phone-error" : undefined} />
        {error("phone")}
      </label>

      <label>Preferred contact
        <select name="preferredContact" defaultValue="either">
          <option value="either">Either email or phone</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </label>

      <label>Postcode / town
        <input name="location" required autoComplete="postal-code" aria-invalid={Boolean(fieldErrors.location)} aria-describedby={fieldErrors.location ? "location-error" : undefined} />
        {error("location")}
      </label>

      <label>Service
        <select name="service" required value={selection.service} aria-invalid={Boolean(fieldErrors.service)} onChange={event => setSelection({ service: event.target.value as ServiceId, supplier: "", installation: "", joinery: "" })}>
          <option value="" disabled>Select service</option>
          {serviceOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        {error("service")}
      </label>

      {selection.service === "bespoke-joinery" && <label>Furniture / joinery type
        <select name="joinery" value={selection.joinery} onChange={event => setSelection({ ...selection, joinery: event.target.value as JoineryId | "" })}>
          <option value="">Not sure yet</option>
          {joineryOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </label>}

      {kitchenService && <label>Kitchen requirement
        <select name="installation" value={selection.installation} aria-invalid={Boolean(fieldErrors.installation)} onChange={event => {
          const value = event.target.value as InstallationId | "";
          const next = installationOptions.find(option => option.value === value);
          setSelection({ ...selection, installation: value, supplier: next?.usesSupplier === false ? "" : selection.supplier });
        }}>
          <option value="">Not sure yet</option>
          {installationOptions.filter(option => option.service === selection.service).map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        {error("installation")}
      </label>}

      {showSupplier && <label>Kitchen supplier
        <select name="supplier" value={selection.supplier} aria-invalid={Boolean(fieldErrors.supplier)} onChange={event => setSelection({ ...selection, supplier: event.target.value as SupplierId | "" })}>
          <option value="">Still choosing / not sure</option>
          {supplierOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        {error("supplier")}
      </label>}

      {kitchenService && <label>Kitchen status
        <select name="kitchenStatus" defaultValue="">
          <option value="">Not sure yet</option>
          <option>Still planning</option>
          <option>Kitchen designed</option>
          <option>Kitchen ordered</option>
          <option>Kitchen delivered / ready to fit</option>
        </select>
      </label>}

      {selection.service === "internal-door-installation" && <>
        <label>Approximate number of doors
          <input name="doorCount" inputMode="numeric" placeholder="e.g. 5" />
        </label>
        <label>Door type
          <input name="doorType" placeholder="e.g. primed solid-core internal doors" />
        </label>
      </>}

      <label>Timing / project stage
        <select name="stage" defaultValue="">
          <option value="">Not sure yet</option>
          <option>Planning / researching</option>
          <option>Design or order in progress</option>
          <option>Ready for installation</option>
        </select>
      </label>

      <label className="form-span">Project details
        <textarea
          name="message"
          rows={7}
          required
          maxLength={6000}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          placeholder={selection.supplier === "other" ? "Tell us your supplier’s name, the kitchen type, timing and any plans or preparation work." : "Tell us about the project, room or site, timing and anything useful for the first review."}
        />
        {error("message")}
      </label>
    </div>

    <div className="file-upload-block">
      <div>
        <strong>Plans & photographs <span className="field-optional">optional</span></strong>
        <p>PDF, JPEG or PNG. Up to 5 files, 10 MB each and 25 MB total. If your phone uses HEIC/HEIF, please export or share the image as JPEG before uploading.</p>
      </div>
      <label className="file-picker">
        <span>Choose files</span>
        <input type="file" accept=".pdf,image/jpeg,image/png" multiple onChange={event => { addFiles(event.target.files); event.currentTarget.value = ""; }} />
      </label>
      {files.length > 0 && <ul className="file-list">{files.map((file, index) => <li key={`${file.name}-${file.lastModified}-${index}`}>
        <span><strong>{file.name}</strong><small>{(file.size / 1024 / 1024).toFixed(1)} MB</small></span>
        <button type="button" onClick={() => setFiles(current => current.filter((_, fileIndex) => fileIndex !== index))}>Remove</button>
      </li>)}</ul>}
      {error("files")}
    </div>

    <label className="consent">
      <input name="privacyAccepted" type="checkbox" required value="yes" aria-invalid={Boolean(fieldErrors.privacyAccepted)} />
      <span>I agree that Form & Frame can use these details to respond to my enquiry. Read our <Link href="/privacy">privacy notice</Link>.</span>
      {error("privacyAccepted")}
    </label>

    <div className="actions">
      <button className="button" type="submit" disabled={status === "submitting" || status === "success"}>
        {status === "submitting" ? "Sending…" : status === "success" ? "Enquiry received ✓" : "Send enquiry ↗"}
      </button>
      <a className="button button-outline" href={WHATSAPP_HREF}>WhatsApp instead ↗</a>
    </div>

    <p className="form-note">If online submission is temporarily unavailable, the form will keep your text on screen and tell you clearly. You can also contact us by WhatsApp, phone or email.</p>
  </form>;
}
