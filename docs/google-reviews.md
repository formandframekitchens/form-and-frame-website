# Google reviews and Business Profile

The Google trust panel is deliberately hidden until a verified public profile URL or genuine, individually verified reviews are available. It uses server-rendered HTML and no Google widget, tracking script or remote request.

## Configure the public profile link

1. In the Google Business Profile, copy the public reviews/profile URL. Use the URL reached by a customer, not an admin link.
2. Confirm that the page belongs to Form & Frame and that both reading and leaving a review work while signed out.
3. Set `GOOGLE_BUSINESS_PROFILE_REVIEW_URL` in the relevant Vercel environment to that HTTPS URL and redeploy. Accepted hosts are `google.com`, `www.google.com`, `maps.google.com`, `maps.app.goo.gl` and `g.page`.
4. Check the homepage and a service page at desktop and mobile widths. Both **Read our Google reviews** and **Leave a Google review** open the configured Google destination in a new tab.

An absent, malformed, non-HTTPS or non-Google value is ignored, leaving the whole panel hidden when there are no verified reviews. Do not use a URL shortener or add an unverified profile claim to make the panel appear.

## Add selected verified reviews

Reviews live in `app/lib/google-reviews.ts` as `verifiedGoogleReviews`. For each selected review, transcribe the source exactly and provide:

- a stable `reviewId` (prefer Google's identifier; otherwise use a documented internal identifier);
- the public reviewer name as displayed by Google;
- the integer Google rating from 1 to 5;
- the complete selected review text, without correcting or editing it;
- `publishedAt`, as an ISO `YYYY-MM-DD` date;
- the direct HTTPS Google `sourceUrl`; and
- `verifiedAt`, the ISO date on which a maintainer checked the review against the live profile.

Never infer missing text, names, dates, ratings or review counts. Remove or re-check an entry if its source can no longer be verified. The site intentionally emits no `Review` or `AggregateRating` structured data for the business; displaying selected genuine feedback does not change that policy.
