import { NextResponse } from "next/server";
import { PROGRESS_GALLERY_COOKIE } from "@/app/lib/progress-gallery-auth";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/progress-gallery", request.url), 303);
  response.cookies.set(PROGRESS_GALLERY_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: new Date(0),
  });
  return response;
}
