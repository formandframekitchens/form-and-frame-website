import { NextResponse } from "next/server";
import {
  accessCodeMatches,
  expectedProgressGalleryToken,
  PROGRESS_GALLERY_COOKIE,
} from "@/app/lib/progress-gallery-auth";

export async function POST(request: Request) {
  const form = await request.formData();
  const code = String(form.get("code") ?? "");
  const destination = new URL("/progress-gallery", request.url);

  if (!accessCodeMatches(code)) {
    destination.searchParams.set("error", "1");
    return NextResponse.redirect(destination, 303);
  }

  const response = NextResponse.redirect(destination, 303);
  response.cookies.set(PROGRESS_GALLERY_COOKIE, expectedProgressGalleryToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
