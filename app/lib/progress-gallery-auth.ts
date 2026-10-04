import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const PROGRESS_GALLERY_COOKIE = "ff_progress_gallery";

function configuredCode() {
  return process.env.PROGRESS_GALLERY_ACCESS_CODE ?? "";
}

export function expectedProgressGalleryToken() {
  const code = configuredCode();
  if (!code) return "";
  return createHmac("sha256", code)
    .update("form-frame-progress-gallery")
    .digest("hex");
}

export function accessCodeMatches(input: string) {
  const configured = configuredCode();
  if (!configured || !input) return false;

  const left = Buffer.from(input);
  const right = Buffer.from(configured);
  if (left.length !== right.length) return false;

  return timingSafeEqual(left, right);
}

export async function isProgressGalleryAuthorized() {
  const token = (await cookies()).get(PROGRESS_GALLERY_COOKIE)?.value ?? "";
  const expected = expectedProgressGalleryToken();
  if (!token || !expected || token.length !== expected.length) return false;

  return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
}
