import { NextResponse } from "next/server";
import { isSupplierPortalSlug, supplierPortalCookie, supplierPortalRequestAllowed, supplierPortalRequestOrigin } from "@/app/lib/supplier-portal";

export async function POST(request: Request, { params }: RouteContext<"/api/supplier-portals/[supplier]/logout">) {
  const { supplier } = await params;
  if (!isSupplierPortalSlug(supplier)) return new NextResponse("Not found", { status: 404 });

  if (!supplierPortalRequestAllowed(request)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const response = NextResponse.redirect(new URL(`/supplier-portals/${supplier}`, supplierPortalRequestOrigin(request)), 303);
  response.cookies.set(supplierPortalCookie(supplier), "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: `/supplier-portals/${supplier}`,
    expires: new Date(0),
  });
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}
