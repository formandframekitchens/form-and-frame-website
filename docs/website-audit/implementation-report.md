# B06 Form & Frame website audit implementation report

**Branch:** `b06-audit-implementation`  
**Base production commit:** `0b24ca0ff7db23511e80116750451b83cfb9e3f1`  
**Production changed:** No. B06 remains a draft preview branch until owner approval.

## Customer-outcome changes implemented

### Enquiry journey
- Replaced the public mailto-only form with a direct website submission UI.
- Added server-side validation at `/api/enquiries`.
- Email or phone is sufficient; preferred contact can be chosen.
- Preserved B05 service/supplier/installation URL prefills.
- Added conditional kitchen, door and fitted-joinery fields.
- Added optional PDF/JPEG/PNG attachments with client and server limits.
- Added server file-signature checking, filename sanitisation and attachment count/size checks.
- Added double-submit protection in the UI and an idempotency key at the provider boundary.
- Success is shown only after the configured provider returns success.
- When provider configuration is absent/unavailable, the form keeps the visitor's content and reports an honest failure.

### Privacy and trust
- Added `/privacy` and linked it from the form and footer.
- Removed public project-photo placeholder blocks rather than inventing proof.
- Reworded shared service trust content so door/joinery pages no longer claim "major kitchen suppliers".
- Added service-specific WhatsApp wording on supplier, door, joinery and in-frame routes.
- Clarified that the current genuine homepage photography represents one completed kitchen until more project packages are verified.

### Homepage / accessibility / technical
- Homepage primary CTA now starts a kitchen-installation enquiry; secondary CTA goes to genuine installation photography rather than the same form.
- Added minimal verified `ProfessionalService` structured data without address, hours, reviews or ratings.
- Added an explicit carousel pause control and reduced-motion behaviour.
- Increased carousel selector hit areas to 44×44 px.
- Added accessible enquiry status/error presentation and file-removal controls.
- Corrected the duplicated Form & Frame suffix in the Services metadata title.
- Added Privacy to the sitemap.

## Enquiry provider configuration

**B10 supersedes the original B06 placeholder provider design.**

Transactional enquiry delivery now uses Resend directly from the website API.

Production environment:
- `RESEND_API_KEY` — sending-only credential restricted to the verified Form & Frame domain.
- `ENQUIRY_FROM_EMAIL` — optional override; defaults to the Form & Frame sales address.
- `ENQUIRY_TO_EMAIL` — optional override; defaults to the Form & Frame sales inbox.

The domain `formandframekitchens.co.uk` is verified in Resend with DKIM, SPF and return-path records. Controlled preview testing on 1 October 2026 confirmed business notification delivery, conditional-field coverage, attachment delivery, customer acknowledgement, Reply-To behaviour, phone-only handling, validation failures and duplicate suppression. See `docs/website-audit/b10-enquiry-email-delivery.md` for the verification record.

## FF-01–FF-24 tracker

| ID | Status | Files / URLs changed | Current evidence | Remaining dependency |
|---|---|---|---|---|
| FF-01 | Verified | `app/api/enquiries/route.ts`, `app/components/enquiry-form.tsx`, `/contact` | Controlled B10 submissions delivered to the business inbox; acknowledgement, Reply-To and duplicate suppression verified | Production merge still requires owner approval |
| FF-02 | Verified | Same API/form | Valid PNG attachment delivered and read from Gmail; false-signature and oversized attachment tests rejected with HTTP 400 | Current limits: 5 files, 3 MB each, 4 MB total |
| FF-03 | Implemented, verification pending | `service-page.tsx`, `service-images.ts` | Missing hero/detail/gallery imagery is omitted; placeholder copy removed | Rendered route review |
| FF-04 | Implemented, verification pending | `/privacy`, form, footer, sitemap | Notice and links implemented | Confirm legal/trading identity, actual provider, retention/access policy |
| FF-05 | Implemented, verification pending | Shared service wording and pages | Unsupported generic trust wording reduced | Owner service-responsibility/policy approval |
| FF-06 | Implemented, verification pending | carousel + CSS + form CSS | 44px carousel targets, pause and reduced motion added | Browser contrast, keyboard, reflow and automated accessibility check |
| FF-07 | Implemented, verification pending | contact helper, supplier/door/joinery/in-frame routes | Service-specific WhatsApp strings implemented | Route-by-route deployed link inspection |
| FF-08 | Implemented, verification pending | homepage hero | Quote CTA and work CTA now have different destinations | Browser journey check |
| FF-09 | Implemented, verification pending | B05 Services/kitchen selection flow retained | Numbered services and kitchen selection preserved | Desktop/mobile visual journey check |
| FF-10 | Implemented, verification pending | supplier treatment retained | Plain-text supplier identity avoids unverified logos | Official supplier assets/permission if logos are desired |
| FF-11 | Blocked | — | Layout/content not fabricated | Approved Arnas biography, role wording, genuine portrait/work image and permission |
| FF-12 | Blocked | homepage proof wording corrected | One genuine completed-kitchen image set identified | At least two additional distinct project packages + facts/permissions |
| FF-13 | Blocked | — | No empty Our Work pages published | FF-12 genuine project packages |
| FF-14 | Blocked | — | No invented testimonials/ratings published | Approved attributable feedback + sources |
| FF-15 | Implemented, verification pending | homepage/carousel/CSS | Hero controls and proof wording refined | Responsive screenshots, image-rights confirmation and crop review |
| FF-16 | Implemented, verification pending | shared/service copy | Several internal phrases removed/clarified | Full owner copy review and remaining route scan |
| FF-17 | Implemented, verification pending | service pages/form | Current service-specific pages retained and enquiry fields improved | Owner-approved answers on visits, timing, payments, exclusions, damaged parts |
| FF-18 | Blocked | — | No warranty/aftercare promise invented | Confirm handover, snagging, defects and aftercare commitments |
| FF-19 | Implemented, verification pending | homepage schema, metadata, sitemap, privacy | Code-controlled metadata/schema changes implemented | Deployed schema/OG/canonical validation |
| FF-20 | Blocked | — | No indexing/profile claims made | Search Console and Google Business Profile access/checks |
| FF-21 | Blocked | — | No analytics claims/events invented | Approve analytics platform, consent basis and event/lead process |
| FF-22 | Implemented, verification pending | form/API and existing Playwright suite | Build/deployment and focused tests must be recorded against current remote SHA | Provider journey, browser/device matrix and failure-state evidence |
| FF-23 | Implemented, verification pending | accessibility/performance-sensitive changes | No heavyweight dependency added | Current Lighthouse/accessibility/browser evidence |
| FF-24 | Blocked | `owner-action-pack.md` | Measurement workflow defined as owner action | Nominate owner, baseline period and monthly review process |

## Verification status

Do not interpret implementation as verification.

Current B10 enquiry verification:
- Resend domain authentication is verified;
- controlled preview enquiries have been delivered to the business inbox;
- customer acknowledgement delivery and inline logo were confirmed;
- one attachment was delivered and read successfully from Gmail;
- email-only, phone-only, invalid-field, invalid-file, oversized-file and duplicate-submission cases were checked;
- browser screenshots/Lighthouse/manual keyboard evidence outside the enquiry journey remain separate audit work;
- production `master` remains unchanged until B10 is explicitly approved for merge.

## Content provenance

See `docs/website-audit/content-register.md`.

## Owner input package

See `docs/website-audit/owner-action-pack.md`. The fastest path toward real enquiries is:
1. enquiry provider/test destination;
2. business/legal facts;
3. customer-facing policies;
4. three genuine project packages;
5. owner portrait/biography;
6. genuine reviews;
7. image/supplier permissions;
8. Search Console/Business Profile;
9. analytics and qualified-lead tracking.

## Rollback

B06 is isolated on `b06-audit-implementation`. Do not merge the draft PR if the preview is not approved. If it is later merged and needs to be reversed, revert the B06 merge commit on `master` rather than deleting history.
