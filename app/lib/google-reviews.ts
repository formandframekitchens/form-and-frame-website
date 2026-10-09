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

export function getGoogleReviewsConfig(profileUrl = process.env.GOOGLE_BUSINESS_PROFILE_REVIEW_URL) {
  const reviewUrl = verifiedGoogleUrl(profileUrl);
  const reviews = verifiedGoogleReviews.filter(review => verifiedGoogleUrl(review.sourceUrl));

  return { reviewUrl, reviews };
}
