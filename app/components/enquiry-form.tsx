"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { WHATSAPP_HREF } from "../lib/contact";
import type { GalleryReference } from "../lib/gallery-catalog";
import { joineryOptions, type JoineryId } from "../lib/joinery-types";
import { installationOptions, isKitchenService, readEnquirySelection, serviceOptions, supplierOptions, type EnquirySelection, type InstallationId, type ServiceId, type SupplierId } from "../lib/enquiry";
import { trackEvent } from "../lib/analytics";

const MAX_FILES = 5;
const MAX_FILE_BYTES = 3 * 1024 * 1024;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024;
const ACCEPTED_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);

export function EnquiryForm({ project }: { project?: GalleryReference }) {
  const params = useSearchParams();
  const initialSelection = readEnquirySelection(params);
  const initialMessage = params.get("request") === "gallery-access"
    ? "I would like to request access to the private progress gallery."
    : params.get("request") === "k01" ? "I have seen the K01 case study and would like to discuss a project with Form & Frame." : "";
  return <EnquiryFields key={JSON.stringify([initialSelection, project?.slug, initialMessage])} initialSelection={initialSelection} initialProject={project} initialMessage={initialMessage} />;
}

function EnquiryFields({ initialSelection, initialProject, initialMessage }: { initialSelection: EnquirySelection; initialProject?: GalleryReference; initialMessage: string }) {
  const [selection, setSelection] = useState(initialSelection);
  const [project, setProject] = useState(initialProject);
  const [files, setFiles] = useState<File[]>([]);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [reference, setReference] = useState("");
  const submissionId = useRef<string | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const inFlight = useRef(false);
  const previousFingerprint = useRef("");

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
      if (file.size > MAX_FILE_BYTES) return "Each file must be 3 MB or smaller.";
    }
    if (total > MAX_TOTAL_BYTES) return "Attachments must total 4 MB or less.";
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
    if (inFlight.current || status === "success") return;

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

    files.forEach(file => data.append("files", file, file.name));
    inFlight.current = true;

    setFieldErrors({});
    setStatus("submitting");
    setStatusMessage("Sending your enquiry…");

    try {
      const fingerprintParts = await Promise.all(Array.from(data.entries()).map(async ([key, value]) => {
        if (typeof value === "string") return [key, value];
        const hash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", await value.arrayBuffer())), byte => byte.toString(16).padStart(2, "0")).join("");
        return [key, value.name, value.type, hash];
      }));
      const fingerprint = JSON.stringify(fingerprintParts);
      if (!submissionId.current || fingerprint !== previousFingerprint.current) submissionId.current = crypto.randomUUID();
      previousFingerprint.current = fingerprint;
      data.set("submissionId", submissionId.current);
      const response = await fetch("/api/enquiries", { method: "POST", body: data, signal: AbortSignal.timeout(45_000) });
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
      trackEvent("enquiry_submit_success", {
        service: selection.service,
        has_attachments: files.length > 0,
        has_project_reference: Boolean(project),
      });
      focusStatus();
    } catch {
      setStatus("error");
      setStatusMessage("We could not reach the enquiry service. Your details are still here, so please try again or use WhatsApp, phone or email.");
      focusStatus();
    } finally {
      inFlight.current = false;
    }
  }

  const error = (name: string) => fieldErrors[name] ? <span className="field-error" id={`${name}-error`}>{fieldErrors[name]}</span> : null;

  return <form className="enquiry-form" onSubmit={submit} aria-busy={status === "submitting"} noValidate>
    <div hidden aria-hidden="true"><label>Leave this field empty<input disabled={status === "submitting" || status === "success"} name="website" tabIndex={-1} autoComplete="off" /></label></div>
    {initialSelection.service && <p className="enquiry-prefill-note">Your service choices have been filled in below. You can change them before sending your enquiry.</p>}
    {project && <div className="enquiry-project-reference">
      <input disabled={status === "submitting" || status === "success"} type="hidden" name="project" value={project.slug} />
      <div><span>Inspired by this project</span><Link href={`/gallery/${project.slug}`}>{project.galleryId} · {project.title}</Link></div>
      <button type="button" disabled={status === "submitting" || status === "success"} onClick={() => setProject(undefined)} aria-label="Remove gallery project reference">Remove</button>
    </div>}
    {error("project")}

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

    {fieldErrors.contact && <div className="form-error-summary" id="contact-error" role="alert"><strong>Contact details needed</strong><span>{fieldErrors.contact}</span></div>}

    <div className="form-grid">
      <label>Name
        <input disabled={status === "submitting" || status === "success"} maxLength={120} name="name" required autoComplete="name" aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "name-error" : undefined} />
        {error("name")}
      </label>

      <label>Email <span className="field-optional">optional if you give a phone number</span>
        <input disabled={status === "submitting" || status === "success"} maxLength={254} name="email" type="email" autoComplete="email" aria-invalid={Boolean(fieldErrors.email || fieldErrors.contact)} aria-describedby={[fieldErrors.email && "email-error", fieldErrors.contact && "contact-error"].filter(Boolean).join(" ") || undefined} />
        {error("email")}
      </label>

      <label>Phone <span className="field-optional">optional if you give an email</span>
        <input disabled={status === "submitting" || status === "success"} maxLength={60} name="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(fieldErrors.phone || fieldErrors.contact)} aria-describedby={[fieldErrors.phone && "phone-error", fieldErrors.contact && "contact-error"].filter(Boolean).join(" ") || undefined} />
        {error("phone")}
      </label>

      <label>Preferred contact
        <select disabled={status === "submitting" || status === "success"} name="preferredContact" aria-invalid={Boolean(fieldErrors.preferredContact)} aria-describedby={fieldErrors.preferredContact ? "preferredContact-error" : undefined} defaultValue="either">
          <option value="either">Either email or phone</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
        {error("preferredContact")}
      </label>

      <label><span id="location-label">Postcode / town</span>
        <input disabled={status === "submitting" || status === "success"} maxLength={140} name="location" aria-labelledby="location-label" required autoComplete="postal-code" aria-invalid={Boolean(fieldErrors.location)} aria-describedby={fieldErrors.location ? "location-help location-error" : "location-help"} />
        <span className="field-optional" id="location-help">Use the project postcode if known. We check the journey, access and visits needed before confirming availability.</span>
        {error("location")}
      </label>

      <label>Service
        <select disabled={status === "submitting" || status === "success"} name="service" required value={selection.service} aria-invalid={Boolean(fieldErrors.service)} aria-describedby={fieldErrors.service ? "service-error" : undefined} onChange={event => { setSelection({ service: event.target.value as ServiceId, supplier: "", installation: "", joinery: "" }); setProject(undefined); }}>
          <option value="" disabled>Select service</option>
          {serviceOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        {error("service")}
      </label>

      {selection.service === "bespoke-joinery" && <label>Furniture / joinery type
        <select disabled={status === "submitting" || status === "success"} name="joinery" aria-invalid={Boolean(fieldErrors.joinery)} aria-describedby={fieldErrors.joinery ? "joinery-error" : undefined} value={selection.joinery} onChange={event => setSelection({ ...selection, joinery: event.target.value as JoineryId | "" })}>
          <option value="">Not sure yet</option>
          {joineryOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        {error("joinery")}
      </label>}

      {kitchenService && <label>Kitchen requirement
        <select disabled={status === "submitting" || status === "success"} name="installation" value={selection.installation} aria-invalid={Boolean(fieldErrors.installation)} aria-describedby={fieldErrors.installation ? "installation-error" : undefined} onChange={event => {
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
        <select disabled={status === "submitting" || status === "success"} name="supplier" value={selection.supplier} aria-invalid={Boolean(fieldErrors.supplier)} aria-describedby={fieldErrors.supplier ? "supplier-error" : undefined} onChange={event => setSelection({ ...selection, supplier: event.target.value as SupplierId | "" })}>
          <option value="">Still choosing / not sure</option>
          {supplierOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        {error("supplier")}
      </label>}

      {kitchenService && <label>Kitchen status
        <select disabled={status === "submitting" || status === "success"} name="kitchenStatus" aria-invalid={Boolean(fieldErrors.kitchenStatus)} aria-describedby={fieldErrors.kitchenStatus ? "kitchenStatus-error" : undefined} defaultValue="">
          <option value="">Not sure yet</option>
          <option>Still planning</option>
          <option>Kitchen designed</option>
          <option>Kitchen ordered</option>
          <option>Kitchen delivered / ready to fit</option>
        </select>
        {error("kitchenStatus")}
      </label>}

      {selection.service === "internal-door-installation" && <>
        <label>Approximate number of doors
          <input disabled={status === "submitting" || status === "success"} aria-invalid={Boolean(fieldErrors.doorCount)} aria-describedby={fieldErrors.doorCount ? "doorCount-error" : undefined} maxLength={3} name="doorCount" inputMode="numeric" placeholder="e.g. 5" />
          {error("doorCount")}
        </label>
        <label>Door type
          <select disabled={status === "submitting" || status === "success"} name="doorType" aria-invalid={Boolean(fieldErrors.doorType)} aria-describedby={fieldErrors.doorType ? "doorType-error" : undefined} defaultValue="">
            <option value="">Not sure yet</option>
            <option>Hinged internal doors</option>
            <option>Double or glazed doors</option>
            <option>Sliding or pocket doors</option>
            <option>Folding or bifold doors</option>
            <option>Made-to-order / bespoke doors</option>
            <option>Other</option>
          </select>
        {error("doorType")}
        </label>
        <label>Door supply
          <select disabled={status === "submitting" || status === "success"} name="doorSupply" aria-invalid={Boolean(fieldErrors.doorSupply)} aria-describedby={fieldErrors.doorSupply ? "doorSupply-error" : undefined} defaultValue="">
            <option value="">Not sure yet</option>
            <option>I already have the doors</option>
            <option>I am choosing / ordering the doors</option>
            <option>I need made-to-order doors coordinated</option>
          </select>
        {error("doorSupply")}
        </label>
      </>}

      <label>Timing / project stage
        <select disabled={status === "submitting" || status === "success"} name="stage" aria-invalid={Boolean(fieldErrors.stage)} aria-describedby={fieldErrors.stage ? "stage-error" : undefined} defaultValue="">
          <option value="">Not sure yet</option>
          <option>Planning / researching</option>
          <option>Design or order in progress</option>
          <option>Ready for installation</option>
        </select>
        {error("stage")}
      </label>

      <label className="form-span">Project details
        <textarea
          disabled={status === "submitting" || status === "success"}
          name="message"
          defaultValue={initialMessage}
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
        <p id="file-help">PDF, JPEG or PNG. Up to 5 files, 3 MB each and 4 MB total. If your phone uses HEIC/HEIF, please export or share the image as JPEG before uploading.</p>
      </div>
      <label className="file-picker">
        <span>Choose files</span>
        <input disabled={status === "submitting" || status === "success"} aria-label="Choose plans and photographs" aria-invalid={Boolean(fieldErrors.files)} aria-describedby={fieldErrors.files ? "file-help files-error" : "file-help"} type="file" accept=".pdf,image/jpeg,image/png" multiple onChange={event => { addFiles(event.target.files); event.currentTarget.value = ""; }} />
      </label>
      {files.length > 0 && <ul className="file-list">{files.map((file, index) => <li key={`${file.name}-${file.lastModified}-${index}`}>
        <span><strong>{file.name}</strong><small>{(file.size / 1024 / 1024).toFixed(1)} MB</small></span>
        <button type="button" disabled={status === "submitting" || status === "success"} aria-label={`Remove ${file.name}`} onClick={() => setFiles(current => current.filter((_, fileIndex) => fileIndex !== index))}>Remove</button>
      </li>)}</ul>}
      {error("files")}
    </div>

    <label className="consent">
      <input disabled={status === "submitting" || status === "success"} name="privacyAccepted" type="checkbox" required value="yes" aria-invalid={Boolean(fieldErrors.privacyAccepted)} aria-describedby={fieldErrors.privacyAccepted ? "privacyAccepted-error" : undefined} />
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
