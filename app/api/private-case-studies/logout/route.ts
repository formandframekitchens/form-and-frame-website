import { NextResponse } from "next/server";
import { allowedFormOrigin, PRIVATE_COOKIE, privateCookieOptions, privateHeaders } from "@/app/lib/private-portfolio/auth";

export async function POST(request: Request) {
  const origin = allowedFormOrigin(request);
  if (!origin) return new Response("Forbidden", { status: 403, headers: privateHeaders });
  const response = NextResponse.redirect(new URL("/private-case-studies", origin), { status: 303, headers: privateHeaders });
  response.cookies.set(PRIVATE_COOKIE, "", { ...privateCookieOptions, maxAge: 0 });
  return response;
}
