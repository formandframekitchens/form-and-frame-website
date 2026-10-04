import { get } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { isProgressGalleryAuthorized } from "@/app/lib/progress-gallery-auth";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ pathname: string[] }> },
) {
  if (!(await isProgressGalleryAuthorized())) {
    return new NextResponse("Not found", { status: 404 });
  }

  const { pathname } = await params;
  const key = pathname.join("/");
  if (!key.startsWith("alex-progress/")) {
    return new NextResponse("Not found", { status: 404 });
  }

  const result = await get(key, {
    access: "private",
    ifNoneMatch: request.headers.get("if-none-match") ?? undefined,
  });

  if (!result) {
    return new NextResponse("Not found", { status: 404 });
  }

  if (result.statusCode === 304) {
    return new NextResponse(null, {
      status: 304,
      headers: {
        ETag: result.blob.etag,
        "Cache-Control": "private, no-cache",
      },
    });
  }

  if (result.statusCode !== 200 || !result.stream) {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(result.stream, {
    headers: {
      "Content-Type": result.blob.contentType ?? "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      ETag: result.blob.etag,
      "Cache-Control": "private, no-cache",
    },
  });
}
