import { NextResponse } from "next/server";

export const runtime = "nodejs";

const ONE_PIXEL_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9ZQmcAAAAASUVORK5CYII=",
  "base64"
);

async function submit(origin: string, fields: Record<string, string>, attach = false) {
  const form = new FormData();
  for (const [key, value] of Object.entries(fields)) form.set(key, value);
  if (attach) {
    form.append("files", new File([ONE_PIXEL_PNG], "b10-test-kitchen.png", { type: "image/png" }));
  }
  const response = await fetch(new URL("/api/enquiries", origin), {
    method: "POST",
    body: form,
    cache: "no-store",
  });
  return {
    status: response.status,
    body: await response.json().catch(() => ({})),
  };
}

export async function GET(request: Request) {
  if (process.env.VERCEL_ENV !== "preview") {
    return new NextResponse("Not found", { status: 404 });
  }

  const origin = new URL(request.url).origin;
  const suffix = Date.now().toString().slice(-8);
  const common = {
    name: "B10 Controlled Test",
    email: "sales@formandframekitchens.co.uk",
    phone: "07933 026532",
    preferredContact: "email",
    location: "LU1 1AA",
    stage: "Ready for installation",
    privacyAccepted: "yes",
  };

  const kitchen = await submit(origin, {
    ...common,
    service: "kitchen-installation",
    installation: "own-kitchen",
    supplier: "howdens",
    kitchenStatus: "Kitchen ordered",
    message: "B10 controlled kitchen enquiry. This tests every kitchen field and a real PNG attachment.",
    submissionId: `b10-kitchen-${suffix}`,
  }, true);

  const doors = await submit(origin, {
    ...common,
    service: "internal-door-installation",
    doorCount: "6",
    doorType: "Sliding or pocket doors",
    doorSupply: "I need made-to-order doors coordinated",
    message: "B10 controlled internal-door enquiry. This tests door-specific conditional fields.",
    submissionId: `b10-doors-${suffix}`,
  });

  const joinery = await submit(origin, {
    ...common,
    service: "bespoke-joinery",
    joinery: "wardrobes",
    message: "B10 controlled bespoke-joinery enquiry. This tests the fitted-furniture conditional field.",
    submissionId: `b10-joinery-${suffix}`,
  });

  return NextResponse.json({ ok: true, kitchen, doors, joinery });
}
