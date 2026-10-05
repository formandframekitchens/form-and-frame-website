import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY } from "./contact";
import { installationOptions, isKitchenService, serviceOptions, supplierOptions } from "./enquiry";
import { joineryOptions } from "./joinery-types";
import { getEnquiryProject } from "./gallery-catalog";
import { siteUrl } from "./site";

export type EnquiryFileSummary = { filename: string; size: number; type: string };

function esc(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function value(form: FormData, key: string) {
  return String(form.get(key) || "").trim();
}

function optionLabel<T extends readonly { value: string; label: string }[]>(options: T, selected: string, fallback = "Not specified") {
  return options.find(option => option.value === selected)?.label || fallback;
}

function preferredContactLabel(value: string) {
  if (value === "email") return "Email";
  if (value === "phone") return "Phone";
  return "Either email or phone";
}

export function enquiryDetails(form: FormData, reference: string, files: EnquiryFileSummary[] = []) {
  const service = value(form, "service");
  const installation = value(form, "installation");
  const supplier = value(form, "supplier");
  const joinery = value(form, "joinery");
  const usesSupplier = installationOptions.find(option => option.value === installation)?.usesSupplier !== false;
  const project = getEnquiryProject(value(form, "project"), service);

  const rows: Array<[string, string]> = [
    ["Reference", reference],
    ["Name", value(form, "name")],
    ["Email", value(form, "email") || "Not provided"],
    ["Phone", value(form, "phone") || "Not provided"],
    ["Preferred contact", preferredContactLabel(value(form, "preferredContact"))],
    ["Postcode / town", value(form, "location")],
    ["Service", optionLabel(serviceOptions, service)],
  ];

  if (project) {
    rows.push(["Gallery inspiration", `${project.galleryId} · ${project.title}`]);
    rows.push(["Gallery link", `${siteUrl}/gallery/${project.slug}`]);
  }

  if (service === "bespoke-joinery") {
    rows.push(["Furniture / joinery type", optionLabel(joineryOptions, joinery, "Not sure yet")]);
  }

  if (isKitchenService(service)) {
    rows.push(["Kitchen requirement", optionLabel(installationOptions, installation, "Not sure yet")]);
    rows.push(["Kitchen supplier", usesSupplier ? optionLabel(supplierOptions, supplier, "Still choosing / not sure") : "Form & Frame"]);
    rows.push(["Kitchen status", value(form, "kitchenStatus") || "Not sure yet"]);
  }

  if (service === "internal-door-installation") {
    rows.push(["Approximate number of doors", value(form, "doorCount") || "Not specified"]);
    rows.push(["Door type", value(form, "doorType") || "Not sure yet"]);
    rows.push(["Door supply", value(form, "doorSupply") || "Not sure yet"]);
  }

  rows.push(["Timing / project stage", value(form, "stage") || "Not sure yet"]);
  rows.push(["Project details", value(form, "message")]);

  if (files.length) {
    rows.push(["Attachments", files.map(file => `${file.filename} (${(file.size / 1024 / 1024).toFixed(1)} MB)`).join(", ")]);
  } else {
    rows.push(["Attachments", "None"]);
  }

  return rows;
}

export function internalEnquiryEmail(form: FormData, reference: string, files: EnquiryFileSummary[] = []) {
  const rows = enquiryDetails(form, reference, files);
  const service = rows.find(([label]) => label === "Service")?.[1] || "Website enquiry";
  const name = value(form, "name") || "Website visitor";

  const rowsHtml = rows.map(([label, val]) => `
    <tr>
      <td style="padding:9px 14px;border-bottom:1px solid #e4ded4;color:#6e6254;font-size:13px;vertical-align:top;width:190px;">${esc(label)}</td>
      <td style="padding:9px 14px;border-bottom:1px solid #e4ded4;color:#20201d;font-size:14px;vertical-align:top;white-space:pre-wrap;">${esc(val)}</td>
    </tr>`).join("");

  return {
    subject: `[${reference}] New website enquiry — ${service} — ${name}`,
    text: rows.map(([label, val]) => `${label}: ${val}`).join("\n"),
    html: `<!doctype html>
<html><body style="margin:0;background:#f4efe6;font-family:Arial,Helvetica,sans-serif;color:#20201d;">
  <div style="max-width:760px;margin:0 auto;padding:28px 16px;">
    <div style="background:#17211b;padding:24px 28px;color:#f4efe6;">
      <div style="font-family:Georgia,'Times New Roman',serif;font-size:28px;letter-spacing:-1px;">FORM <em>&amp;</em> FRAME</div>
      <div style="margin-top:8px;color:#b79a63;font-size:12px;letter-spacing:2px;text-transform:uppercase;">New website enquiry</div>
    </div>
    <div style="background:#fffdf9;padding:26px 28px;">
      <p style="margin:0 0 20px;font-size:15px;line-height:1.6;">A new enquiry has been accepted by the website. Reply directly to this email to respond to the customer when an email address was supplied.</p>
      <table role="presentation" style="width:100%;border-collapse:collapse;border:1px solid #e4ded4;">${rowsHtml}</table>
    </div>
  </div>
</body></html>`,
  };
}

export function customerAcknowledgementEmail(form: FormData, reference: string) {
  const fullName = value(form, "name");
  const firstName = fullName.split(/\s+/).filter(Boolean)[0] || "there";
  const service = optionLabel(serviceOptions, value(form, "service"), "your project");

  const text = [
    `Hi ${firstName},`,
    "",
    "Thank you very much for contacting Form & Frame.",
    `We have received your enquiry about ${service.toLowerCase()} and will review the details you sent.`,
    "",
    "We are looking forward to learning more about your project and, where we are a good fit, working with you to bring it together properly from plan to finish.",
    "",
    `Your enquiry reference is ${reference}.`,
    "",
    "Kind regards,",
    "Arnas Vazinskas",
    "Form & Frame",
    BUSINESS_PHONE_DISPLAY,
    BUSINESS_EMAIL,
  ].join("\n");

  const html = `<!doctype html>
<html><body style="margin:0;background:#f4efe6;font-family:Arial,Helvetica,sans-serif;color:#20201d;">
  <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
    <div style="background:#17211b;padding:34px 34px 30px;color:#f4efe6;">
      <div style="font-family:Georgia,'Times New Roman',serif;font-size:34px;line-height:1.05;letter-spacing:-1.4px;">Thank you, ${esc(firstName)}.</div>
      <div style="margin-top:12px;color:#b79a63;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Your Form & Frame enquiry has been received</div>
    </div>
    <div style="background:#fffdf9;padding:34px;">
      <p style="margin:0 0 18px;font-size:16px;line-height:1.75;">Thank you very much for contacting us.</p>
      <p style="margin:0 0 18px;font-size:16px;line-height:1.75;">We have received your enquiry about <strong>${esc(service.toLowerCase())}</strong> and will review the information you sent.</p>
      <p style="margin:0 0 24px;font-size:16px;line-height:1.75;">We are looking forward to learning more about your project and, where we are a good fit, working with you to bring it together properly from plan to finish.</p>
      <div style="border-left:3px solid #b79a63;padding:12px 16px;margin:28px 0;background:#f7f2e9;">
        <div style="font-size:12px;color:#7d653b;letter-spacing:1.5px;text-transform:uppercase;">Enquiry reference</div>
        <div style="margin-top:5px;font-size:16px;font-weight:600;">${esc(reference)}</div>
      </div>
      <p style="margin:26px 0 0;font-size:16px;line-height:1.65;">Kind regards,<br><strong>Arnas Vazinskas</strong><br>Form &amp; Frame<br><a href="tel:+447933026532" style="color:#20201d;">${BUSINESS_PHONE_DISPLAY}</a><br><a href="mailto:${BUSINESS_EMAIL}" style="color:#20201d;">${BUSINESS_EMAIL}</a></p>
      <div style="margin-top:34px;padding:20px 22px;background:#17211b;text-align:left;">
        <img src="cid:form-frame-logo" alt="Form & Frame Kitchens" width="240" style="display:block;width:240px;max-width:100%;height:auto;">
      </div>
    </div>
  </div>
</body></html>`;

  return {
    subject: `Thank you for contacting Form & Frame — ${reference}`,
    text,
    html,
  };
}
