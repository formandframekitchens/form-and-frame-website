# GA4 website measurement

## Configuration

Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to the GA4 web stream Measurement ID (for example, `G-XXXXXXXXXX`) in each Vercel environment that should collect analytics. The integration validates that the value starts with `G-`; when the variable is absent or invalid, no Google script or analytics markup is rendered and all event calls safely do nothing.

No production Measurement ID is stored in this repository. A real ID must be configured in Vercel before preview or production traffic can appear in GA4.

## Events

The integration sends a manual `page_view` on each distinct App Router pathname. Query strings are deliberately excluded. It also records these business events:

- `whatsapp_click`, `phone_click`, `email_click` — contact-method links, with only the source pathname.
- `enquiry_start` — a link to the enquiry form.
- `enquiry_submit_success` — only after the enquiry API confirms acceptance; includes the service identifier and boolean attachment/project-reference indicators.
- `kitchen_plan_enquiry` — an enquiry link prefilled for kitchen installation.
- `primary_cta_click` — button-styled links, with source and destination pathnames.
- `important_case_study_view` — a public `/gallery/[slug]` view, with the project slug.
- `supplier_portal_view` — an existing `/kitchen-installation/[supplier]` view, with the supplier slug. This B22 behavior is preserved. Authorized private `/supplier-portals/[supplier]` presentations additionally emit the same event with the supplier slug and `access: "private"`, only after the server gate and GA readiness. Locked presentations do not emit that business event.
- `instagram_outbound_click` — B25 card/footer Instagram links, with only the source pathname and stable content identifier (`profile` for the footer). No post captions, destinations or form values are sent.

Route and click listeners are attached only after GA4 is ready. Path changes are de-duplicated, and GA4 automatic page views are disabled so App Router navigation is not counted twice.

## Privacy constraints

Never add names, email addresses, telephone numbers, street addresses, postcodes/towns, free-text messages, uploaded filenames or file contents, plans, photographs, submission IDs, or enquiry reference numbers to analytics. Event parameters must remain limited to stable route identifiers and non-personal operational flags. Google signals and advertising personalisation are disabled in the GA4 configuration.

## Verification

1. Configure a valid test web-stream ID in the Vercel Preview environment and deploy the preview.
2. Confirm the Google script is absent when the variable is unset and present only when it is valid.
3. Use GA4 DebugView or browser developer tools to check one `page_view` per pathname and the expected click/view events on representative desktop and mobile pages.
4. Submit only through an authorised test destination. Confirm `enquiry_submit_success` occurs after the API success response and inspect its payload to ensure it contains no form values.
5. Repeat the checks after adding the production environment value, without sending a real customer enquiry.

Search Console should later be linked to the same GA4 property by an authorised property administrator. Windsor can then use the approved GA4 and Search Console connections for combined reporting; no credentials or connector configuration belong in this repository.
