# B22 — GA4 measurement layer

Owner direction: all website implementation must be performed by Codex Cloud. ChatGPT is only creating this task handoff file so a PR can exist and Codex can implement the website changes.

Goal: add a privacy-conscious GA4 measurement layer for Form & Frame Kitchens, optimized around real business outcomes rather than vanity traffic.

Required implementation:
- First read root AGENTS.md and follow the repository's Next.js-version instructions before coding.
- Verify whether GA4 or Google Tag Manager already exists anywhere in the app; do not duplicate an existing implementation.
- If no analytics exists, implement GA4 using an environment-driven measurement ID (preferred env name: NEXT_PUBLIC_GA_MEASUREMENT_ID unless repository conventions dictate a better existing pattern).
- Analytics must fail safely/no-op when no measurement ID is configured.
- Keep implementation compatible with the current App Router/Next.js version and current production architecture.
- Do not send personal information to Google Analytics. Never send names, email addresses, phone numbers, free-text enquiry messages, uploaded plans/files, street addresses or other enquiry contents.
- Track meaningful business events with stable event names and minimal non-PII parameters:
  - whatsapp_click
  - phone_click
  - email_click
  - quote_start / enquiry_start
  - quote_submit / enquiry_submit_success
  - kitchen_plan_enquiry
  - primary_cta_click
  - important_case_study_view (or equivalent route-based event only where technically sensible)
  - supplier_portal_view only if such routes already exist; do not invent/publicly create supplier routes in B22.
- Avoid firing duplicate events during client navigation/re-renders.
- Preserve current contact/enquiry behaviour and Resend delivery.
- Add or update developer documentation describing the GA4 env variable, events, privacy constraints, how to verify in preview/production, and how this will later connect with Search Console/Windsor.
- Update docs/development-workflow.md to record B22 and reserve B23 as the next batch.
- Run relevant lint/build/type checks and any focused tests appropriate to the modified code.
- Verify representative desktop/mobile pages and the enquiry flow without sending a real external enquiry unless an existing safe test mechanism exists.
- Do not modify unrelated galleries, content ordering or approved imagery.

Deployment/verification:
- Commit all changes to b22-ga4-measurement.
- Report exact tests performed and any dependency that prevents live GA4 data (for example no real GA4 Measurement ID configured yet).
- Vercel preview must build successfully.
