import { createHmac, timingSafeEqual } from "node:crypto";
import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

function expectedImportToken() {
  const code = process.env.PROGRESS_GALLERY_ACCESS_CODE ?? "";
  if (!code) return "";
  return createHmac("sha256", code)
    .update("form-frame-progress-gallery-import")
    .digest("hex");
}

function tokenMatches(input: string) {
  const expected = expectedImportToken();
  if (!input || !expected || input.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(input), Buffer.from(expected));
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token") ?? "";
  const source = request.nextUrl.searchParams.get("source") ?? "";
  const pathname = request.nextUrl.searchParams.get("pathname") ?? "";

  if (!tokenMatches(token)) {
    return new NextResponse("Not found", { status: 404 });
  }

  if (!pathname.startsWith("alex-progress/")) {
    return NextResponse.json({ error: "Invalid pathname" }, { status: 400 });
  }

  let sourceUrl: URL;
  try {
    sourceUrl = new URL(source);
  } catch {
    return NextResponse.json({ error: "Invalid source URL" }, { status: 400 });
  }

  if (
    sourceUrl.protocol !== "https:" ||
    !sourceUrl.hostname.endsWith(".oaiusercontent.com")
  ) {
    return NextResponse.json({ error: "Source host not allowed" }, { status: 400 });
  }

  const upstream = await fetch(sourceUrl, { cache: "no-store" });
  if (!upstream.ok || !upstream.body) {
    return NextResponse.json({ error: "Source fetch failed" }, { status: 502 });
  }

  const contentType = upstream.headers.get("content-type") ?? "application/octet-stream";
  if (!contentType.startsWith("image/")) {
    return NextResponse.json({ error: "Only images are allowed" }, { status: 415 });
  }

  const blob = await put(pathname, upstream.body, {
    access: "private",
    contentType,
    addRandomSuffix: false,
    allowOverwrite: true,
  });

  return NextResponse.json({ pathname: blob.pathname, url: blob.url });
}
