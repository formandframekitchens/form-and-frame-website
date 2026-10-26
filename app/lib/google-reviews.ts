export type VerifiedGoogleReview = {
  reviewId: string;
  reviewerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  publishedAt: string;
  sourceUrl: string;
  verifiedAt: string;
};

// Add only reviews checked directly against the configured Google Business Profile.
// Keeping this empty is intentional: no review should appear until its source is verified.
export const verifiedGoogleReviews: readonly VerifiedGoogleReview[] = [];

const allowedGoogleHosts = new Set([
  "google.com",
  "www.google.com",
  "maps.google.com",
  "maps.app.goo.gl",
  "g.page",
]);

export function verifiedGoogleUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;

  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" || !allowedGoogleHosts.has(url.hostname.toLowerCase()) || url.username || url.password || (url.port && url.port !== "443")) return undefined;
    return url.toString();
  } catch {
    return undefined;
  }
}

// Checked against the owner's official Google Business Profile sharing links on 25 October 2026.
export const GOOGLE_BUSINESS_PROFILE_URL = "https://www.google.com/maps/place/Form+%26+Frame+Kitchens/data=!4m2!3m1!1s0x0:0x4e2b1d814c87b388";
export const GOOGLE_REVIEW_URL = "https://g.page/r/CYizh0yBHStOEBM/review";

export function getGoogleReviewsConfig(
  profileDestination = process.env.GOOGLE_BUSINESS_PROFILE_URL || GOOGLE_BUSINESS_PROFILE_URL,
  reviewDestination = process.env.GOOGLE_BUSINESS_PROFILE_REVIEW_URL || GOOGLE_REVIEW_URL,
) {
  const profileUrl = verifiedGoogleUrl(profileDestination);
  const reviewUrl = verifiedGoogleUrl(reviewDestination);
  const reviews = verifiedGoogleReviews.filter(review => verifiedGoogleUrl(review.sourceUrl));

  return { profileUrl, reviewUrl, reviews };
}
