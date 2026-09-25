# B06 Owner Action Pack — Form & Frame

**Purpose:** give the owner a practical, prioritized list of the remaining inputs that only he can confirm or provide.  
**Priority principle:** unblock real enquiries first, then build proof/trust, then complete discovery and measurement.

## Holiday workflow

Work through these packs in order. Do not try to finish everything at once. Each completed pack should be sent back to the website implementation chat so the site can be updated and re-tested.

### Pack 1 — Make the enquiry system genuinely live
**Impact:** highest. This is the main blocker to accepting website enquiries reliably.

Owner decisions/input:
- Approve the production recipient inbox: currently proposed as `sales@formandframekitchens.co.uk`.
- Approve a durable enquiry/storage provider after options and costs are presented.
- Approve whether customer acknowledgements should be emailed automatically.
- Approve who is allowed to access uploaded plans/photos.
- Approve a retention period for enquiry records and attachments.
- Approve a controlled test inbox/destination so delivery can be tested without creating fake customer leads.

Website team then:
- configure `ENQUIRY_PROVIDER_URL` and `ENQUIRY_PROVIDER_TOKEN` in Vercel;
- test durable receipt, notification, duplicate protection, PDF/JPEG/PNG upload, invalid upload, provider failure and acknowledgement;
- update the privacy notice with the actual provider and retention facts.

Unblocks: **FF-01, FF-02, FF-04, FF-22**.

### Pack 2 — Confirm the business/legal facts
**Impact:** high. Needed for privacy, footer, structured data and consistent public identity.

Please confirm:
- Preferred public trading name: Form & Frame / Form & Frame Kitchens / other.
- Exact legal company/entity name that should appear in legal/privacy material.
- Whether a postal/business address should be published. If not, confirm that it should remain omitted.
- Confirm phone: 07933 026532.
- Confirm email: sales@formandframekitchens.co.uk.
- Confirm that "20 years" means Arnas's personal joinery/installation experience, not company trading age, or provide the wording you prefer.

Unblocks: **FF-04, FF-05, FF-11, FF-19**.

### Pack 3 — Confirm customer-facing policies
**Impact:** high. Reduces uncertainty and strengthens enquiries.

Answer these in plain language:
1. Is the first phone/video discussion free?
2. Is the first site visit free, charged, or conditional?
3. What normally has to be supplied before a final quote?
4. Can old-kitchen removal and waste disposal be included?
5. Who normally handles plumbing, electrics, gas and decoration?
6. How are specialist worktops handled?
7. What happens if kitchen parts arrive missing or damaged?
8. How is installation timing agreed?
9. What is the usual payment/deposit/stage-payment approach?
10. What happens at completion: walkthrough, snag list, final adjustments?
11. What aftercare is offered for installation defects or adjustments?
12. Is there a written workmanship guarantee/warranty? If yes, exact terms.
13. For internal doors, what frame repairs/replacement are you willing to include?
14. Are fire-door installations offered? Only confirm if competence/requirements are genuinely supported.
15. For trade joinery installation, who signs off drawings, dimensions and completed work?

Unblocks: **FF-05, FF-17, FF-18**.

### Pack 4 — Arnas / About content
**Impact:** high trust improvement.

Provide:
- one genuine portrait or working photograph you approve for public use;
- 5–10 factual bullet points about your background;
- the year you began professional joinery/cabinetry work, if you want experience length stated;
- your current role: survey / design / technical drawings / project coordination / installation / quality checks — confirm exactly which apply;
- how customers normally communicate with you;
- how specialist manufacturing partners are used;
- one short reason you started Form & Frame, if you want it public.

Do not write polished copy unless you want to. Bullet-point facts are enough; the website copy can be drafted from them.

Unblocks: **FF-11** and improves **FF-05, FF-15, FF-16**.

### Pack 5 — Three genuine project packages
**Impact:** very high for trust and conversion.

Target: at least three distinct projects, not several photographs of one project.

For each project provide:
- project nickname/ID;
- town-level location that may be published;
- approximate completion month/year;
- what the customer bought / supplier / kitchen type where known;
- Form & Frame's exact role;
- main challenge;
- what was installed or solved;
- approximate duration only if reliable;
- 5–15 genuine original photographs;
- which images may be published;
- who owns/took the photographs and whether website use is permitted;
- anything that must remain private.

Suggested project mix:
1. strong completed kitchen installation;
2. second kitchen with a different style/supplier/challenge;
3. bespoke joinery, wardrobe, door or trade-installation project.

Unblocks: **FF-12, FF-13** and materially improves homepage proof.

### Pack 6 — Genuine customer feedback
**Impact:** high trust, but only after it is real and attributable.

For each review/testimonial provide:
- exact quote or link to the original public review;
- customer attribution you have permission to publish;
- related project/service if known;
- whether the quote may be edited for length;
- source URL where public.

Do not create or paraphrase a testimonial from memory without the customer's approved wording.

Unblocks: **FF-14**.

### Pack 7 — Image and supplier-brand permissions
**Impact:** medium.

Confirm:
- website usage rights for the current genuine kitchen photographs;
- which Google Drive/Google Photos folders contain approved original project images;
- any supplier logo permissions or supplier-provided assets you receive;
- whether AI-generated service-navigation images may continue to be used only as illustrative navigation imagery.

Until supplier logo permission is clear, the website should retain clean plain-text supplier identities.

Unblocks: **FF-10, FF-12, FF-15**.

### Pack 8 — Search Console and Google Business Profile
**Impact:** medium/high once the site is enquiry-ready.

Tasks:
- provide authorized Search Console access or screenshots/data for important routes;
- verify sitemap status and indexing;
- check the Google Business Profile business name, phone, website and service coverage;
- add genuine project photographs to the profile only when approved;
- review existing customer reviews and the current review-request process.

No ranking claims should be made from these checks.

Unblocks: **FF-20**.

### Pack 9 — Analytics and lead-quality tracking
**Impact:** important after enquiries can actually be accepted.

Decide:
- analytics platform already in use, if any;
- whether consent/cookie handling is required for the chosen setup;
- who reviews website enquiries;
- how to mark: qualified lead / quote issued / booked work;
- baseline period for measurement;
- monthly review owner.

Recommended privacy-safe website events:
- enquiry_started
- enquiry_accepted
- enquiry_failed
- attachment_failed
- contact_whatsapp_clicked
- contact_phone_clicked

Never send customer names, phone numbers, emails, messages, exact addresses or uploaded plans into general analytics.

Unblocks: **FF-21, FF-24**.

## Fastest route to enquiries

If holiday time is limited, complete these first:

1. **Pack 1 — enquiry provider and test destination**
2. **Pack 2 — business/legal identity**
3. **Pack 3 — customer-facing policies**
4. **Pack 5 — three project packages**
5. **Pack 4 — portrait and biography**
6. **Pack 6 — genuine reviews**
7. Remaining search/analytics/brand items

The first three packs make the enquiry journey dependable and reduce uncertainty. The project/owner/review packs then add the proof needed to make visitors more comfortable contacting Form & Frame.
