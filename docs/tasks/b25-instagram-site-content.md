# B25 — Instagram to website content integration

Implement through Codex Cloud only.

Goal: connect the website and Instagram content strategy without loading a heavy social widget or creating thin SEO pages.

Current Instagram: @formandframekitchens. Existing public posts include the launch/kitchen/joinery content already published; use only URLs/content that can be verified from the code/task context and do not invent engagement numbers.

Requirements:
- Add a lightweight "Latest from Form & Frame" presentation in an appropriate homepage/marketing location.
- Prefer first-party cards/thumbnails/copy + direct Instagram links over a heavy live embed.
- Architecture should allow 3 selected recent posts/Reels to be maintained from a small typed data source/config.
- Where a social item corresponds to an existing website case study/service, link the card to the first-party page as the main SEO destination and offer Instagram as secondary.
- Do not create auto-generated thin pages for every Story/post.
- Lazy-load media/thumbnail assets and preserve Core Web Vitals.
- Never use private/held archive images or invent project facts.
- Include appropriate analytics hooks using the B22 event system if available, without PII.
- Update workflow to B25 / reserve B26.
- Run lint/type/build and focused responsive checks.
- PATCH-TRANSFER MODE: do not push. Return complete unified diff, tests, local HEAD SHA.