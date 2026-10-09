import { NextResponse } from "next/server";
import {
  expectedSupplierPortalToken,
  isSupplierPortalSlug,
  supplierPortalCodeMatches,
  supplierPortalCookie,
  supplierPortalRequestAllowed,
  supplierPortalRequestOrigin,
} from "@/app/lib/supplier-portal";

export async function POST(request: Request, { params }: RouteContext<"/api/supplier-portals/[supplier]/login">) {
  const { supplier } = await params;
  if (!isSupplierPortalSlug(supplier)) return new NextResponse("Not found", { status: 404 });

  // SameSite cookies complement, rather than replace, server-side origin checks.
  if (!supplierPortalRequestAllowed(request)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return new NextResponse("Invalid form", { status: 400 });
  }
  const destination = new URL(`/supplier-portals/${supplier}`, supplierPortalRequestOrigin(request));
  const input = form.get("code");
  const code = typeof input === "string" && input.length <= 256 ? input : "";

  if (!supplierPortalCodeMatches(supplier, code)) {
    destination.searchParams.set("error", "1");
    return NextResponse.redirect(destination, 303);
  }

  const response = NextResponse.redirect(destination, 303);
  response.cookies.set(supplierPortalCookie(supplier), expectedSupplierPortalToken(supplier), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: `/supplier-portals/${supplier}`,
    maxAge: 60 * 60 * 12,
  });
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}
