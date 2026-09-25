import { NextResponse } from "next/server";
import { serviceOptions, supplierOptions, installationOptions } from "../../lib/enquiry";

export const runtime = "nodejs";

const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_TOTAL_BYTES = 25 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);

function text(form: FormData, name: string, max = 4000) {
  return String(form.get(name) || "").trim().slice(0, max);
}

function safeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 120) || "attachment";
}

async function validSignature(file: File) {
  const bytes = new Uint8Array(await file.slice(0, 8).arrayBuffer());
  if (file.type === "application/pdf") {
    return bytes.length >= 5 && String.fromCharCode(...bytes.slice(0, 5)) === "%PDF-";
  }
  if (file.type === "image/jpeg") {
    return bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  }
  if (file.type === "image/png") {
    const png = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
    return png.every((value, index) => bytes[index] === value);
  }
  return false;
}

function reference() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `FF-${date}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "We could not read this enquiry. Please check the form and try again." }, { status: 400 });
  }

  const name = text(form, "name", 120);
  const email = text(form, "email", 254);
  const phone = text(form, "phone", 60);
  const location = text(form, "location", 140);
  const message = text(form, "message", 6000);
  const service = text(form, "service", 80);
  const supplier = text(form, "supplier", 80);
  const installation = text(form, "installation", 80);
  const joinery = text(form, "joinery", 80);
  const preferredContact = text(form, "preferredContact", 20);
  const privacyAccepted = text(form, "privacyAccepted", 20);

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!location) errors.location = "Please enter your postcode or town.";
  if (!message) errors.message = "Please tell us a little about the project.";
  if (!email && !phone) errors.contact = "Please provide an email address or phone number.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please check the email address.";
  if (preferredContact === "email" && !email) errors.email = "Add an email address for email contact.";
  if (preferredContact === "phone" && !phone) errors.phone = "Add a phone number for phone contact.";
  if (!serviceOptions.some(option => option.value === service)) errors.service = "Please choose a valid service.";
  if (supplier && !supplierOptions.some(option => option.value === supplier)) errors.supplier = "Please choose a valid kitchen supplier.";
  if (installation && !installationOptions.some(option => option.value === installation && option.service === service)) errors.installation = "Please choose a valid kitchen requirement.";
  if (!privacyAccepted) errors.privacyAccepted = "Please confirm that we may use these details to respond to your enquiry.";

  const files = form.getAll("files").filter((value): value is File => value instanceof File && value.size > 0);
  if (files.length > MAX_FILES) errors.files = `Please attach no more than ${MAX_FILES} files.`;

  let totalBytes = 0;
  const checkedFiles: File[] = [];
  for (const file of files) {
    totalBytes += file.size;
    if (file.size > MAX_FILE_BYTES) {
      errors.files = "Each attachment must be 10 MB or smaller.";
      break;
    }
    if (!ALLOWED_TYPES.has(file.type)) {
      errors.files = "Attachments must be PDF, JPEG or PNG files.";
      break;
    }
    if (!(await validSignature(file))) {
      errors.files = "One attachment did not match its declared file type.";
      break;
    }
    checkedFiles.push(file);
  }
  if (totalBytes > MAX_TOTAL_BYTES) errors.files = "Attachments must total 25 MB or less.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, error: "Please correct the highlighted details.", fields: errors }, { status: 400 });
  }

  const providerUrl = process.env.ENQUIRY_PROVIDER_URL;
  const providerToken = process.env.ENQUIRY_PROVIDER_TOKEN;
  if (!providerUrl || !providerToken) {
    return NextResponse.json({
      ok: false,
      error: "Online enquiry delivery is not configured yet. Your details have not been sent. Please use WhatsApp, phone or email instead.",
      code: "provider_not_configured",
    }, { status: 503 });
  }

  const enquiryReference = reference();
  const outbound = new FormData();
  for (const [key, value] of form.entries()) {
    if (key !== "files" && typeof value === "string") outbound.append(key, value);
  }
  outbound.set("reference", enquiryReference);
  outbound.set("receivedAt", new Date().toISOString());
  for (const file of checkedFiles) {
    outbound.append("files", file, safeFilename(file.name));
  }

  try {
    const response = await fetch(providerUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${providerToken}`,
        "Idempotency-Key": text(form, "submissionId", 120) || crypto.randomUUID(),
      },
      body: outbound,
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({
        ok: false,
        error: "We could not accept the enquiry right now. Your text is still in the form, so please try again or use another contact option.",
        code: "provider_rejected",
      }, { status: 502 });
    }

    return NextResponse.json({ ok: true, reference: enquiryReference });
  } catch {
    return NextResponse.json({
      ok: false,
      error: "We could not reach the enquiry service. Your text is still in the form, so please try again or use another contact option.",
      code: "provider_unavailable",
    }, { status: 503 });
  }
}
