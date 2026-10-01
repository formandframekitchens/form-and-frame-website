import { NextResponse } from "next/server";
import { POST as submitEnquiry } from "../route";

export const runtime = "nodejs";

const ONE_PIXEL_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9ZQmcAAAAASUVORK5CYII=",
  "base64"
);

async function submit(fields: Record<string, string>, file?: { name: string; type: string; content: string }) {
  const form = new FormData();
  for (const [key, value] of Object.entries(fields)) form.set(key, value);
  if (file) form.append("files", new File([file.content], file.name, { type: file.type }));

  const request = new Request("https://preview.internal/api/enquiries", {
    method: "POST",
    body: form,
  });
  const response = await submitEnquiry(request);
  return {
    status: response.status,
    body: await response.json().catch(() => ({})),
  };
}

export async function GET() {
  if (process.env.VERCEL_ENV !== "preview") {
    return new NextResponse("Not found", { status: 404 });
  }

  const suffix = Date.now().toString().slice(-8);
  const base = {
    name: "B10 Edge Test",
    location: "LU1 1AA",
    stage: "Planning / researching",
    privacyAccepted: "yes",
  };

  const emailOnly = await submit({
    ...base,
    email: "sales+b10-customer@formandframekitchens.co.uk",
    preferredContact: "email",
    service: "in-frame-kitchens",
    installation: "design-supply-installation",
    kitchenStatus: "Still planning",
    message: "B10 email-only test for a Form & Frame supplied in-frame kitchen.",
    submissionId: `b10-emailonly-${suffix}`,
  });

  const phoneOnly = await submit({
    ...base,
    phone: "07933 026532",
    preferredContact: "phone",
    service: "internal-door-installation",
    doorCount: "3",
    doorType: "Hinged internal doors",
    doorSupply: "I already have the doors",
    message: "B10 phone-only test. No acknowledgement email should be sent.",
    submissionId: `b10-phoneonly-${suffix}`,
  });

  const missingRequired = await submit({
    service: "kitchen-installation",
    preferredContact: "either",
    privacyAccepted: "yes",
  });

  const invalidFile = await submit({
    ...base,
    phone: "07933 026532",
    preferredContact: "phone",
    service: "joinery-installation",
    message: "B10 invalid attachment signature test.",
    submissionId: `b10-invalidfile-${suffix}`,
  }, {
    name: "not-really-a.pdf",
    type: "application/pdf",
    content: "this is not a pdf",
  });

  const oversizedFile = await submit({
    ...base,
    phone: "07933 026532",
    preferredContact: "phone",
    service: "other",
    message: "B10 oversized attachment test.",
    submissionId: `b10-oversize-${suffix}`,
  }, {
    name: "too-large.png",
    type: "image/png",
    content: "x".repeat(3 * 1024 * 1024 + 1),
  });

  const duplicateFields = {
    ...base,
    phone: "07933 026532",
    preferredContact: "phone",
    service: "joinery-installation",
    message: "B10 duplicate idempotency test.",
    submissionId: `b10-duplicate-${suffix}`,
  };
  const duplicateFirst = await submit(duplicateFields);
  const duplicateSecond = await submit(duplicateFields);

  return NextResponse.json({
    ok: true,
    emailOnly,
    phoneOnly,
    missingRequired,
    invalidFile,
    oversizedFile,
    duplicateFirst,
    duplicateSecond,
  });
}
