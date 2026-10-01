import { NextResponse } from "next/server";
import { BUSINESS_EMAIL } from "../../lib/contact";
import { EMAIL_LOGO_BASE64 } from "../../lib/email-logo";
import { customerAcknowledgementEmail, internalEnquiryEmail } from "../../lib/enquiry-email";
import { installationOptions, serviceOptions, supplierOptions } from "../../lib/enquiry";
import { joineryOptions } from "../../lib/joinery-types";

export const runtime = "nodejs";

const MAX_FILES = 5;
const MAX_FILE_BYTES = 3 * 1024 * 1024;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);
const PREFERRED_CONTACT = new Set(["either", "email", "phone"]);
const KITCHEN_STATUS = new Set(["", "Still planning", "Kitchen designed", "Kitchen ordered", "Kitchen delivered / ready to fit"]);
const STAGES = new Set(["", "Planning / researching", "Design or order in progress", "Ready for installation"]);
const DOOR_TYPES = new Set(["", "Hinged internal doors", "Double or glazed doors", "Sliding or pocket doors", "Folding or bifold doors", "Made-to-order / bespoke doors", "Other"]);
const DOOR_SUPPLY = new Set(["", "I already have the doors", "I am choosing / ordering the doors", "I need made-to-order doors coordinated"]);

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

function submissionReference(submissionId: string) {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const suffix = submissionId.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8).toUpperCase() || crypto.randomUUID().slice(0, 8).toUpperCase();
  return `FF-${date}-${suffix}`;
}

type ResendAttachment = {
  filename: string;
  content: string;
  content_type?: string;
  content_id?: string;
};

type ResendMessage = {
  from: string;
  to: string[];
  subject: string;
  text: string;
  html: string;
  reply_to?: string[];
  attachments?: ResendAttachment[];
};

async function sendResendEmail(apiKey: string, message: ResendMessage, idempotencyKey: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(message),
    cache: "no-store",
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    const messageText = typeof result?.message === "string" ? result.message : `Resend returned HTTP ${response.status}`;
    throw new Error(messageText);
  }
  return result;
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
  const kitchenStatus = text(form, "kitchenStatus", 80);
  const stage = text(form, "stage", 80);
  const doorType = text(form, "doorType", 100);
  const doorSupply = text(form, "doorSupply", 120);

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!location) errors.location = "Please enter your postcode or town.";
  if (!message) errors.message = "Please tell us a little about the project.";
  if (!email && !phone) errors.contact = "Please provide an email address or phone number.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please check the email address.";
  if (!PREFERRED_CONTACT.has(preferredContact)) errors.preferredContact = "Please choose a valid contact preference.";
  if (preferredContact === "email" && !email) errors.email = "Add an email address for email contact.";
  if (preferredContact === "phone" && !phone) errors.phone = "Add a phone number for phone contact.";
  if (!serviceOptions.some(option => option.value === service)) errors.service = "Please choose a valid service.";
  if (supplier && !supplierOptions.some(option => option.value === supplier)) errors.supplier = "Please choose a valid kitchen supplier.";
  if (installation && !installationOptions.some(option => option.value === installation && option.service === service)) errors.installation = "Please choose a valid kitchen requirement.";
  if (joinery && (service !== "bespoke-joinery" || !joineryOptions.some(option => option.value === joinery))) errors.joinery = "Please choose a valid furniture or joinery type.";
  const doorCount = text(form, "doorCount", 20);
  if (doorCount && service === "internal-door-installation" && !/^\\d{1,3}$/.test(doorCount)) errors.doorCount = "Please enter the approximate number of doors as a number.";
  if (!KITCHEN_STATUS.has(kitchenStatus)) errors.kitchenStatus = "Please choose a valid kitchen status.";
  if (!STAGES.has(stage)) errors.stage = "Please choose a valid project stage.";
  if (!DOOR_TYPES.has(doorType)) errors.doorType = "Please choose a valid door type.";
  if (!DOOR_SUPPLY.has(doorSupply)) errors.doorSupply = "Please choose a valid door supply option.";
  if (privacyAccepted !== "yes") errors.privacyAccepted = "Please confirm that we may use these details to respond to your enquiry.";

  const files = form.getAll("files").filter((value): value is File => value instanceof File && value.size > 0);
  if (files.length > MAX_FILES) errors.files = `Please attach no more than ${MAX_FILES} files.`;

  let totalBytes = 0;
  const checkedFiles: File[] = [];
  for (const file of files) {
    totalBytes += file.size;
    if (file.size > MAX_FILE_BYTES) {
      errors.files = "Each attachment must be 3 MB or smaller.";
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
  if (totalBytes > MAX_TOTAL_BYTES) errors.files = "Attachments must total 4 MB or less.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, error: "Please correct the highlighted details.", fields: errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      ok: false,
      error: "Online enquiry delivery is not configured yet. Your details have not been sent. Please use WhatsApp, phone or email instead.",
      code: "provider_not_configured",
    }, { status: 503 });
  }

  const submissionId = text(form, "submissionId", 120) || crypto.randomUUID();
  const enquiryReference = submissionReference(submissionId);
  const sender = process.env.ENQUIRY_FROM_EMAIL || `Form & Frame <${BUSINESS_EMAIL}>`;
  const recipient = process.env.ENQUIRY_TO_EMAIL || BUSINESS_EMAIL;

  const fileSummaries = checkedFiles.map(file => ({ filename: safeFilename(file.name), size: file.size, type: file.type }));
  const attachmentPayload: ResendAttachment[] = [];
  for (const file of checkedFiles) {
    attachmentPayload.push({
      filename: safeFilename(file.name),
      content: Buffer.from(await file.arrayBuffer()).toString("base64"),
      content_type: file.type,
    });
  }

  const businessEmail = internalEnquiryEmail(form, enquiryReference, fileSummaries);

  try {
    await sendResendEmail(apiKey, {
      from: sender,
      to: [recipient],
      subject: businessEmail.subject,
      text: businessEmail.text,
      html: businessEmail.html,
      reply_to: email ? [email] : undefined,
      attachments: attachmentPayload.length ? attachmentPayload : undefined,
    }, `${submissionId}-business`);
  } catch (error) {
    console.error("Enquiry business notification failed", enquiryReference, error instanceof Error ? error.message : error);
    return NextResponse.json({
      ok: false,
      error: "We could not accept the enquiry right now. Your text is still in the form, so please try again or use another contact option.",
      code: "provider_rejected",
    }, { status: 502 });
  }

  let acknowledgementSent = false;
  if (email) {
    const acknowledgement = customerAcknowledgementEmail(form, enquiryReference);
    try {
      await sendResendEmail(apiKey, {
        from: sender,
        to: [email],
        subject: acknowledgement.subject,
        text: acknowledgement.text,
        html: acknowledgement.html,
        reply_to: [recipient],
        attachments: [{
          filename: "form-frame-kitchens.png",
          content: EMAIL_LOGO_BASE64,
          content_type: "image/png",
          content_id: "form-frame-logo",
        }],
      }, `${submissionId}-acknowledgement`);
      acknowledgementSent = true;
    } catch (error) {
      console.error("Enquiry acknowledgement failed", enquiryReference, error instanceof Error ? error.message : error);
    }
  }

  console.info("Enquiry accepted", enquiryReference, { acknowledgementSent, attachments: checkedFiles.length });
  return NextResponse.json({ ok: true, reference: enquiryReference, acknowledgementSent });
}
