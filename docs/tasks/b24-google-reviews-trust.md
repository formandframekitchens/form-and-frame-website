# B24 — Google reviews and trust integration

Implement through Codex Cloud only.

Goal: add a credible Google-review/trust layer to Form & Frame without inventing reviews or using self-serving review-star schema.

Requirements:
- Inspect current Google/structured-data implementation first.
- Build a clean homepage/service-page trust component suitable for genuine Google Business Profile reviews once the profile/link is available.
- Never invent review text, names, ratings or counts.
- No self-serving AggregateRating/Review schema on Form & Frame Organization/LocalBusiness pages.
- Support an environment/config-driven public Google Business Profile review URL and "Read our Google reviews" / "Leave a Google review" CTAs when configured.
- If no verified review URL/data is configured, fail gracefully and do not display fabricated social proof.
- Provide a maintainable verified-review data model for selected genuine reviews to be added later from Google Business Profile.
- Make the review/trust component premium, restrained and mobile-safe.
- Keep page speed strong; no heavy third-party widget required.
- Exclude any unverified profile claims.
- Update docs with how verified Google reviews/profile links are added.
- Update development workflow to B24 / reserve B25.
- Run lint/type/build and focused tests.
- PATCH-TRANSFER MODE: do not push. Return the complete unified diff, tests, and local HEAD SHA.