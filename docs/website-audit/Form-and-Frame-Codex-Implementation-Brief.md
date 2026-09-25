# Form & Frame — Codex implementation brief

**Version:** 1.0 · 25 September 2026  
**Website:** [formandframekitchens.co.uk](https://formandframekitchens.co.uk/)  
**Purpose:** implement the recommendations from the website audit, then produce evidence for a repeat audit.  
**Source:** *Form-and-Frame-Website-Audit-2026-09-25.html*, based on public website inspection on 25 September 2026.

## How to use this document

Attach this file to the Codex chat that has access to the website project, or paste its entire contents. The instructions below are addressed to the implementing Codex agent. The original audit is useful supporting material, but this brief contains the implementation requirements and acceptance criteria needed to start.

This document specifies work. It does **not** claim that any change has already been implemented. All task statuses start as **Not started** and must be checked against the actual project.

---

## 1. Your assignment

Inspect the existing Form & Frame website project, implement the requirements below in priority order, and provide a tested preview plus a completion report. Carry the work through implementation and verification; do not finish with only a plan or visual suggestions.

The desired customer experience is luxurious, personal, clear and easy to enquire through. Deliver that through genuine project evidence, calm typography, well-composed photography, clear service responsibilities and a dependable enquiry journey.

Use **95/100 on the audit rubric in section 12** as an internal quality target. Do not claim “95% better than competitors,” top-five-percent market position, guaranteed rankings or a predicted conversion increase. The original research does not support those claims.

### Business context to retain

- Business: **Form & Frame / Form & Frame Kitchens**. Confirm the preferred public name and exact legal/trading identity in the project or with the owner.
- Owner/contact: **Arnas**. Confirm the approved wording of his biography and responsibilities.
- Primary offer: independent installation of kitchens the customer has chosen or purchased.
- Additional offers: bespoke and in-frame kitchens; fitted furniture and bespoke joinery; internal door installation; trade joinery installation.
- Core location: Luton, serving suitable projects in Bedfordshire and Hertfordshire. Wider projects are considered individually. Use the existing approved service area; do not imply every postcode is covered.
- Public phone observed: **07933 026532**. Telephone link: `tel:+447933026532`.
- Public WhatsApp destination observed: **447933026532**. Verify against the current approved contact configuration.
- Public email observed: **sales@formandframekitchens.co.uk**. Verify before configuring delivery.
- Some work can involve specialist manufacturing partners. Describe the actual division of design, supply, manufacture and installation.
- Preserve the current bespoke-quotation and supply-only policies unless the owner explicitly changes them. Do not invent public prices.

### Project discovery

A previous project reference was `formandframekitchens/form-and-frame-website`. Treat this as a discovery hint, not proof of the current repository, branch or deployment. Verify the active project from the current workspace and connected repository.

1. Read applicable `AGENTS.md`, project instructions and package scripts.
2. Inspect the framework, routing, content model, styles, image handling, enquiry implementation, deployment settings and existing tests.
3. Check the working tree and current branch. Preserve unrelated work and existing changes.
4. Identify the live deployment and a preview/test environment. Record the starting commit and baseline URLs.
5. Confirm which audited issues still exist. Record already-fixed items with evidence and avoid redoing them.
6. Implement within the existing stack and conventions. The audit does not justify a platform migration, framework replacement or wholesale dependency upgrade.
7. Use current official documentation when selecting or integrating libraries, hosting, email, upload or analytics services.

### Working rules

- Preserve existing descriptive URLs and useful SEO content. If a URL must change, supply a redirect and update internal links, canonicals and sitemap entries.
- Preserve the existing working service/supplier prefill, skip link, form labels and autocomplete behaviour.
- Keep the site's strong performance. Avoid heavyweight sliders, unnecessary animation and large new client-side dependencies.
- Use shared components and structured content where the project supports them. Avoid fixing one page while leaving the same defect in its shared template.
- Never fabricate projects, testimonials, review counts, qualifications, prices, guarantees, partnerships, team size or workshop ownership.
- Do not present stock, manufacturer or generated imagery as Form & Frame's completed work. Record asset provenance and usage rights.
- Do not publish development notes, TODO copy, empty cards or fake-success interactions.
- Complete independent work when assets or business decisions are missing. Keep a precise blockers list; do not silently drop blocked requirements or mark them done.
- Use the destination chat's existing authorization for commits, pull requests and deployment. Prepare the reviewable implementation and evidence before any permission request that is genuinely necessary. This brief alone does not authorize contacting customers or buying services.

## 2. Audit baseline and limits

Recheck these observations against the current site before editing. They describe the audited version, not necessarily the latest deployment.

| Area | Observation from 25 September 2026 | Required response |
|---|---|---|
| Enquiries | Contact form opened an email composition flow; button said “Prepare email enquiry” | Implement direct submission and verify receipt |
| Attachments | Public copy said file upload would be connected later | Implement working optional plans/photos upload |
| Visible completeness | Photography placeholders appeared on several service pages | Replace with approved assets or remove the empty blocks |
| Privacy | No visible privacy link was found in the inspected form/footer | Publish accurate notice and link it at both locations |
| Service continuity | Door and joinery WhatsApp links used kitchen messages; reused strips said “Major kitchen suppliers” | Make links and supporting content relevant to each service |
| Homepage | Both main actions led to the same form; hero cycled through appliance details | One enquiry action and one project action; stronger hero |
| Kitchen hub | Installation supplier choice was mixed with bespoke/in-frame supply | Separate installation from design/supply clearly |
| Trust | Generic project captions; little owner identity or attributable customer evidence | Genuine project stories, About page, portrait and feedback |
| Colour | Small brass text on cream had insufficient contrast | Use accessible text colours and check all states |
| Controls | Desktop Lighthouse flagged five carousel selectors for target size/spacing | Fix controls if retained, or remove the carousel |
| Metadata | `/services` repeated the brand in its title; no homepage JSON-LD was found | Correct metadata and add accurate validated structured data |

### Performance baseline

One PageSpeed Insights lab run, captured at 07:59 BST on 25 September 2026:

| Metric | Mobile | Desktop |
|---|---:|---:|
| Performance | 99 | 100 |
| Accessibility | 96 | 92 |
| Best practices | 100 | 100 |
| Basic SEO checks | 100 | 100 |
| Largest Contentful Paint | 1.8 s | 0.5 s |
| Total Blocking Time | 30 ms | 10 ms |
| Cumulative Layout Shift | 0 | 0 |

There was no real-user field dataset. Lighthouse SEO 100 does not establish rankings, and an automated accessibility score does not establish full accessibility. Total Blocking Time is not INP.

The audit inspected 12 desktop pages and six competitor homepages. Mobile evidence came from Lighthouse and responsive CSS; a complete interactive phone audit was not performed. No enquiry was sent, delivery was not tested, and private source code, analytics and Search Console were not inspected. Implementation must close these verification gaps.

## 3. Delivery order and stable requirement IDs

Use these IDs in commits where helpful, tests and the final completion report. Each row starts **Not started** until verified. Detailed criteria follow in sections 4–10.

Statuses: **Not started / In progress / Implemented, verification pending / Verified / Blocked / Not applicable with reason**. A code change alone is not “Verified.”

| ID | Priority | Requirement | Acceptance evidence |
|---|---|---|---|
| FF-01 | P0 | Direct enquiry submission with durable receipt and inbox delivery | Controlled successful submission, stored reference and received notification; failure test |
| FF-02 | P0 | Optional plan/photo attachments | PDF and supported phone image uploaded and accessible to authorized recipient; invalid-file test |
| FF-03 | P0 | Remove public placeholders and development copy | Source/content scan plus rendered-page review |
| FF-04 | P0 | Accurate privacy notice and trading/contact details | Published page, form/footer links and checked facts |
| FF-05 | P1 | Confirm service promises and responsibilities | Approved facts matrix; unsupported claims removed |
| FF-06 | P1 | Fix contrast and carousel/control accessibility | Contrast checks, automated scan and manual control tests |
| FF-07 | P1 | Correct service-specific strips and WhatsApp context | Route-by-route link/message evidence |
| FF-08 | P1 | Distinct homepage primary and secondary actions | Enquiry CTA opens form; project CTA opens real work |
| FF-09 | P1 | Reorganize navigation, services and kitchen hub | Desktop/mobile screenshots and journey tests |
| FF-10 | P1 | Authentic supplier identity and consistent logo treatment | Asset source/permission record and ratio checks |
| FF-11 | P1 | Owner introduction and About page | Approved biography and genuine portrait/work image |
| FF-12 | P1 | Assemble genuine project evidence | At least three distinct relevant projects, with permissions and accurate roles |
| FF-13 | P1 | Our Work index and project template | Working index/detail routes with completed stories |
| FF-14 | P1 | Attributable customer feedback | Approved real quotes and original source/review links where available |
| FF-15 | P1 | Refine hero, image crops, type and spacing | Representative before/after desktop and mobile screenshots |
| FF-16 | P1 | Rewrite repeated or internal wording | Customer-facing copy review across all principal routes |
| FF-17 | P1 | Complete service-specific content and FAQs | Page inventory matched against section 7 |
| FF-18 | P1 | Explain handover, snagging and aftercare | Accurate published commitments consistent with actual terms |
| FF-19 | P2 | Metadata, canonical, sitemap and structured data | Route checks and structured-data validation |
| FF-20 | P2 | Verify indexing and local profile consistency | Search Console/Business Profile findings, or explicit access blocker |
| FF-21 | P2 | Measure accepted enquiries and separate contact clicks | Test events, deduplication check and privacy-safe properties |
| FF-22 | Release gate | Test end-to-end journeys across devices | Test matrix with actual results and evidence |
| FF-23 | Release gate | Recheck performance and accessibility | Dated reports for key templates; explained regressions |
| FF-24 | Ongoing | Review qualified leads and customer questions | Measurement owner, baseline period and monthly review process |

### Suggested implementation sequence

1. **Inspect and establish baseline:** repository, routes, existing assets, screenshots, current form and deployment.
2. **Finish the customer journey:** FF-01–04; fix obvious contrast and wrong-service messaging at the same time.
3. **Build the shared design and structure:** FF-06–10 and FF-15; homepage, header/footer, service hub, supplier components, form UI.
4. **Build proof and service content:** FF-05 and FF-11–18. Collect real content while independent coding proceeds.
5. **Complete discovery and measurement:** FF-19–21.
6. **Verify and prepare release:** FF-22–23, evidence report and unresolved blockers. Then schedule FF-24 as an owner process; do not create an automation unless requested.

P0 defects must be resolved before treating the enquiry journey as launch-ready or sending paid traffic to it. Missing genuine proof can still prevent the broader 95/100 target after the P0 work is complete.

## 4. Enquiry system specification — FF-01, FF-02, FF-04, FF-07, FF-21

### 4.1 Architecture and delivery

Use suitable existing infrastructure first. A reliable managed form service is acceptable; a custom backend is not required if the same behaviour, privacy and verification can be achieved more simply.

- Submit directly through the website. Email, phone and WhatsApp remain optional alternatives.
- Validate on the server. Never rely only on client validation.
- Persist an accepted enquiry in durable storage or an equivalent reliable provider record before showing a received confirmation. Give it a reference that can be matched to the notification.
- Deliver to the approved business inbox. Use retry/monitoring appropriate to the provider so notification failure does not silently lose a saved lead.
- If saving fails, show an honest error and preserve the user's text. If saving succeeds but notification fails, retain the accepted enquiry, alert the operator and avoid encouraging duplicate submissions.
- Show a clear completion state after acceptance. Send an acknowledgement when an email address is supplied; do not promise a specific response time without owner confirmation.
- Guard against accidental duplicate acceptance on double-click or retry. A managed provider feature or a small idempotency mechanism is sufficient.
- Keep credentials and delivery tokens on the server. Document required configuration with safe example names and no secrets.
- Do not select a new paid service or recurring plan without the destination session's authorization. If credentials are missing, implement and test the integration as far as possible, then identify the exact remaining setup.

### 4.2 Form fields

Keep the initial enquiry short. Fields below are the intended default, subject to a documented business reason for a change.

| Field | Required? | Behaviour |
|---|---|---|
| Service | Yes | Prefill from originating page; include “Not sure yet” |
| Name | Yes | Visible label and suitable autocomplete |
| Email or phone | At least one | Let visitor choose preferred contact method; validate the chosen method; allow both |
| Postcode / town | Yes | Help confirm location; avoid rejecting reasonable international formatting or spacing unnecessarily |
| Project description | Yes | Short prompt; sensible length limit, shown if relevant |
| Timing / project stage | No | Short choices including “Not sure yet” |
| Plans / photographs | No | Visible types and limits; working upload; removal and retry |
| Kitchen supplier | Conditional | Kitchen fitting only; include Other and Still choosing |
| Ordered / still planning | Conditional | Kitchen fitting only; allow uncertainty |
| Door count/type | Conditional | Door installation only; lightweight enquiry information |
| Furniture type | Conditional | Bespoke joinery only; preserve originating subtype |

Do not require a technical drawing, both contact methods, a budget or marketing consent merely to start a conversation. Link the privacy notice beside submission. Any marketing opt-in must be a separate optional choice with accurate wording; do not use a project enquiry as blanket marketing permission.

### 4.3 Attachments

- Support PDF plans and common phone photographs. At minimum, handle JPEG and PNG. For HEIC/HEIF, implement supported conversion/storage if feasible or clearly explain the accepted alternative before selection; test the chosen policy on actual phone uploads.
- Choose sensible documented limits after checking hosting/provider constraints. A starting design option is up to five files, 10 MB each, 25 MB total. These are proposed limits, not a requirement to exceed the platform's capabilities.
- Show filenames, size/type limits, progress, completed state, remove/retry controls and actionable errors.
- Validate actual file type and size on the server. Reject unsupported or dangerous formats; sanitize names; use appropriate provider protections.
- Store privately or use expiring authorized access. Do not expose customer plans through public asset URLs or a public bucket.
- Decide retention, deletion and access arrangements with the owner. Make the privacy notice match the selected providers and actual handling.
- Associate successful uploads with the correct enquiry. Handle partial failure and orphan uploads sensibly.
- If one attachment fails, preserve the message and other successful files. Explain whether the user can remove the failed file and submit without it.
- No broken upload promises in production. If the feature is blocked, report FF-02 as blocked and use truthful temporary wording; do not claim the full requirement is complete.

### 4.4 Required UI states

Implement and verify: empty form; correctly prefilled form; relevant conditional fields; validation errors; uploading; upload failure; ready to submit; submitting; accepted; submission failure; retry; duplicate click; return/back navigation.

- Associate field errors with their fields and provide an accessible error summary where useful.
- Move focus or announce status so keyboard and screen-reader users know what happened.
- Preserve input on validation/network errors. Avoid indefinite spinners.
- Disable repeated submit while a request is pending, while keeping the UI understandable.
- Do not erase an enquiry until acceptance is confirmed. After success, make the accepted state and next action clear.
- Remove old “Prepare email enquiry,” “File upload will be connected later” and server-implementation explanations when replaced by the real behaviour.

Suggested success copy after durable acceptance:

> Thanks — your enquiry has been received. We will contact you using the details provided.

### 4.5 Prefill and contact continuity

Preserve this previously working route, or provide equivalent backward compatibility:

`/contact?service=kitchen-installation&supplier=howdens&installation=own-kitchen#enquiry-form`

It previously selected `service=kitchen-installation`, `supplier=howdens`, `installation=own-kitchen`. Inspect the existing values before changing the model. Map old values safely if refactoring.

Create one shared mapping for service labels, supported query values and WhatsApp wording. Validate query values; unknown values must fall back safely without breaking the form. Changing service must not submit irrelevant hidden fields from the earlier selection.

| Origin | Enquiry context | WhatsApp intent |
|---|---|---|
| Global header/footer | General enquiry | “Hello, I'd like to discuss a project with Form & Frame.” |
| Kitchen installation | Kitchen fitting | Kitchen installation enquiry |
| Howdens / Wren / other supplier | Kitchen fitting + correct supplier | Name that supplier |
| Bespoke / in-frame kitchens | Correct design/supply/installation route | Name the relevant kitchen service |
| Wardrobes / other furniture | Bespoke joinery + subtype | Name the relevant furniture |
| Internal doors | Door installation | Door installation enquiry |
| Trade joinery installation | Trade installation | Trade joinery enquiry |
| Project page | Relevant service + optional project reference | Refer to a similar project without inserting private data |

URL-encode messages. Verify phone and WhatsApp destinations without sending unsolicited messages. Do not embed the customer's form data in public URLs or analytics.

### 4.6 Measurement

Use the existing analytics stack where appropriate. Suggested events:

- `enquiry_started`: first meaningful form interaction, once per attempt.
- `enquiry_accepted`: only after confirmed acceptance; deduplicated.
- `enquiry_failed`: safe error category, without submitted personal details.
- `attachment_failed`: safe failure category, without filename or file content.
- `contact_whatsapp_clicked` and `contact_phone_clicked`: distinct click events, never treated as received enquiries.

Record only useful non-sensitive properties such as service, supplier, source page and error category. Do not send names, messages, phone numbers, email addresses, precise customer location or plans into general analytics. Match implementation to the actual privacy/consent setup.

Define how the owner will record qualified lead, quote issued and booked work. Start with a simple maintainable process; no CRM rebuild is required. Establish a baseline before promising any commercial uplift.

## 5. Visual system — FF-06, FF-10, FF-15

### 5.1 Colour

Retain the existing restrained identity. Create/reuse shared design tokens instead of introducing inconsistent per-page values.

| Role | Value / direction | Acceptance |
|---|---|---|
| Main background | `#F4EFE6` warm cream | Consistent principal surface |
| Main text | `#20201D` charcoal | Readable body and navigation text |
| Feature sections / primary buttons | `#17211B` deep green | Sufficient contrast with all foreground states |
| Decorative brass | `#B79A63` | Decorative accent or tested use on dark backgrounds |
| Brass text on cream | Proposed `#7D653B`, or charcoal | Verify final contrast and states |

The audited brass `#B79A63` on cream was approximately 2.35:1. The proposed darker brass on cream is approximately 4.83:1. Test rendered foreground/background combinations, including opacity, hover, focus and disabled styles. Apply appropriate WCAG AA contrast criteria; do not use colour alone to convey state.

Let real cabinetry, timber and stone photography provide variety. Avoid excessive gold, ornate effects, repeated dark/light stripes, heavy shadows and decorative cards that add no meaning.

### 5.2 Typography and spacing

The current Georgia display and Arial/Helvetica body combination can be retained. A new font is optional and must justify its cost to loading and readability.

| Element | Desktop starting range | Mobile starting range |
|---|---|---|
| H1 | 52–64 px | 34–40 px |
| H2 | 36–44 px | 28–32 px |
| H3 | 22–26 px | Adjust to clear hierarchy |
| Body | 16–18 px; line height 1.5–1.65 | 16–18 px; line height 1.5–1.65 |
| Small labels | Usually 12–14 px, high contrast | Remain readable without zoom |
| Main section padding | 80–104 px | 48–64 px |
| Content width | Approximately 1200–1280 px maximum | Approximately 20–24 px gutters |

Use a spacing scale based on 8, 16, 24, 32, 48, 64 and 96 px. These are design starting points, not rigid requirements that override good composition. Keep paragraph lines around 55–75 characters where appropriate. H2s must not visually compete with the H1 throughout the page.

Align header, sections and footer to a coherent grid. Avoid large empty gaps between eyebrow, headline and supporting text. Use approximately 55–60% image / 40–45% copy in image-led desktop features where suitable; stack sensibly on mobile.

### 5.3 Image composition and loading

| Use | Preferred starting treatment |
|---|---|
| Desktop hero | Strong whole-room image; around 16:9 or 1.8:1 |
| Mobile hero | Separate crop around 4:3 or 5:4; cabinetry remains visible |
| Project cards | Consistent 4:3; deliberate focal points |
| Case study gallery | Whole-room 3:2 / 4:3, plus useful 4:5 details |
| Supplier logos | Original proportions, contained, balanced perceived size |

- The audited hero displayed around 1254 × 499 from an image around 1044 × 653. Use an appropriate larger original rather than enlarging that small file.
- Aim for a source around 2400 px wide for a large desktop hero when a genuine original supports it; deliver responsive sizes rather than one huge download.
- Use the existing optimized-image system, explicit dimensions/aspect ratios and suitable modern compression. Prioritize the actual LCP image; lazy-load appropriate below-fold images.
- Set focal positions per image and breakpoint. Do not crop away the craftsmanship or fill the phone screen mainly with ceiling.
- Remove the blanket 500 px mobile hero-image minimum if it causes the audited problem. Put the offer and useful CTA before a long image section.
- Use a static hero as the default. If retaining a carousel, provide pause, keyboard operation, reduced-motion behaviour, accessible names and comfortably sized controls. Do not let autoplay determine whether the first impression is a room or dishwasher close-up.
- Use close-ups that prove the accompanying claim: joins, alignment, scribes, inset-door gaps and finishing.
- Give informative images accurate alt text and decorative images empty alt text. Do not repeat the same keyword-heavy alt text across a gallery.

### 5.4 Supplier identity

Use authentic official supplier logos where available and permitted. Record their source and usage conditions; follow brand rules. Preserve ratios and avoid improvised lookalike marks. If the correct asset or permission is unavailable, use well-designed plain text instead.

Keep independent-installer wording close to supplier content. A logo does not establish approved-installer, reseller or partner status. Publish those claims only if verified.

## 6. Site structure, homepage and proof — FF-08–14

### Navigation

Recommended desktop structure:

**Kitchen installation · Our work · Bespoke kitchens · Joinery · About · Get a quote**

Keep phone/contact easy to find. Nest supplier pages under installation. Nest wardrobes, doors and trade installation sensibly under Joinery/Services. Do not cram every service into the main row. Preserve useful existing Services and Areas destinations in secondary navigation or footer.

Mobile navigation must expose the same useful routes, have clear open/close behaviour, visible focus and an accessible expanded state. Use appropriate focus management for the chosen menu pattern; Escape should close an overlay menu. Selecting a route must close it and restore normal scrolling.

### Homepage order

| Order | Section | Implementation requirement |
|---:|---|---|
| 1 | Header | Approved master logo, short navigation, one clear main action |
| 2 | Hero | Main service and area, genuine finished room, quote CTA and different project CTA |
| 3 | Proof strip | Verified experience/local base and genuine feedback if available |
| 4 | Selected projects | Three distinct completed projects with meaningful titles and links |
| 5 | Supplier selection | Compact recognizable supplier choices, independence statement |
| 6 | Meet Arnas | Approved short story, real portrait/work photograph, About link |
| 7 | How it works | Four short accurate steps and what the customer needs to provide |
| 8 | Craftsmanship | One or two real details, explained in customer language |
| 9 | Other services | Clear links to bespoke/in-frame, furniture and doors |
| 10 | Practical questions | Useful questions about quote process, timing, responsibilities and aftercare |
| 11 | Final enquiry | Main action, phone/WhatsApp alternatives and honest next-step wording |
| 12 | Footer | Business/contact details, key routes, privacy and other applicable information |

Keep supplier selection near the top of the **installation hub**. On the homepage, make the preceding project preview compact; if it pushes supplier choice too far down mobile, move the supplier section ahead of projects and record the design decision. Do not create a long decorative preamble.

Suggested homepage copy, subject to factual confirmation:

> **Kitchen installation, carefully finished.**  
> Independent kitchen fitting in Luton and selected areas of Bedfordshire and Hertfordshire. From checking your plan to fitting the final panel, we help bring the room together.

Primary: **Get an installation quote** → correctly prefilled contact form.  
Secondary: **View our work** → actual project index or section.  
Avoid two visually equal actions with different labels that lead to the same form.

### About and personal responsibility

Build a concise About page and homepage introduction. Include who Arnas is, relevant experience, his role in planning/installation/quality checks, how customers communicate and how specialist partners are involved.

Verify “20 years” before publishing. If it refers to personal industry experience, do not phrase it as company trading age. Avoid invented team members, workshop photographs or credentials. A genuine working portrait and specific explanation are preferable to generic luxury language.

### Our Work and project template

Use proposed routes such as `/our-work` and `/our-work/[slug]` only after checking existing routes. Reuse existing equivalents where present. Do not add a filtering interface unless the amount of content justifies it.

Each published case study needs:

1. Descriptive title and actual town-level location, with privacy respected.
2. Known date, brand/range and style where accurate.
3. Form & Frame's exact role: fitting, design, supply, manufacture, or work for another business.
4. Customer brief and the actual installation challenge.
5. What was done and why it helped the customer.
6. Agreed scope and representative duration where reliable.
7. A strong finished-room view, supporting views and useful detail photographs.
8. A permitted attributable review if available; no invented quotation.
9. Related service/supplier links and a relevant enquiry action.

Target at least three distinct relevant projects for the initial proof-led release. Three photographs of one kitchen are one project. If fewer approved projects exist, publish only genuine available work and report the remaining target as blocked. Do not create empty cards to fill a grid.

Maintain an asset/content register with project ID, original file, source, photographer/rights holder, usage permission, actual location, role, caption and alt text. Omit sensitive customer details from the public page.

### Customer feedback

Use real quotes with approval and meaningful attribution at the level permitted by the customer. Link to an original public review where possible. Keep review counts and star ratings accurate and dated/source-linked where displayed. Do not publish a decorative five-star rating with no verified basis.

Missing reviews are a content dependency. Codex may create the component and data model, but must keep the empty section off the public site and leave FF-14 incomplete. Do not contact customers on the owner's behalf without explicit authorization.

## 7. Page-by-page implementation — FF-03, FF-05, FF-07, FF-09, FF-16–18

The routes below were inspected in the original audit. Inventory all current routes as well: shared-template corrections must reach other supplier and service pages that were outside the sample.

| Route | Required changes | Page-specific acceptance |
|---|---|---|
| `/` | Implement section 6; strengthen hero; distinct actions; replace generic project captions; add owner/proof content | First screen identifies service, region and next action; projects are authentic and linked |
| `/services` | Put primary kitchen fitting first; clearly group design/supply, furniture, doors and trade fitting; concise copy | Each service has an understandable purpose and relevant destination; duplicated title suffix removed |
| `/kitchen-installation` | State independent fitting clearly; supplier choice near top; separate design/supply section; scope/process/proof/FAQs | Visitor seeking installation need not browse bespoke supply first; no duplicated supplier lists |
| `/kitchen-installation/howdens` | Correct official asset or plain text; real/identified supporting image; useful supplier details; preserved prefill | Howdens stays selected through enquiry; no invented approval relationship or placeholder |
| `/kitchen-installation/wren` | Same standard, with genuinely Wren-specific information and contact context | Wren remains selected; copy is meaningfully different where the service requires it |
| Other supplier routes | Audit and apply shared template consistently; remove thin duplication | Valid destinations, correct prefill, current verified brand-specific facts |
| `/in-frame-kitchens` | Explain relation to bespoke; construction/material choices, design sign-off and responsibilities; real detail imagery | Visitor understands offer, quote process and production arrangement; supply-only policy retained |
| `/bespoke-kitchens` | Clear design/supply/installation route; relevant evidence; positive partner explanation; cost drivers and aftercare | No generic supplier-fitting strip implying the wrong service; no fabricated manufacturing claim |
| `/bespoke-joinery` | Show genuine range, project examples, materials/finishes, process and relevant subservices | Clear distinction between commissioned furniture and installation of supplied joinery |
| `/bespoke-joinery/wardrobes` | Expand beyond a short description; layout choices, finishes, useful storage examples, process and real evidence | Customer can understand options and what to send for an initial discussion |
| `/internal-door-installation` | Relevant images, framing/hardware/trimming/repairs scope, useful FAQs and door-specific contact | No kitchen trust strip or kitchen WhatsApp message; no unsupported fire-door claim |
| `/joinery-installation` | Explain trade/client-supplied packages, drawings, access, delivery, installation and handover | Clear supplier/installer responsibilities; relevant package examples and enquiry |
| `/contact` | Implement section 4, clear alternatives, privacy link, actual next steps | End-to-end acceptance and delivery verified; no implementation notes |
| About / Our Work / project routes | Build or reuse as specified in section 6 | Public navigation reaches complete genuine content; no dead ends |
| Privacy route | Build or update to match actual handling | Form/footer links work; no generic notice naming unused systems |
| Existing area routes | Review coverage and local evidence | Useful unique information; no mass-generated town-name duplicates |

### Kitchen installation hub

Use an H1 such as **Kitchen installation** and a short explanation that customers can bring a plan from their chosen supplier. Show Howdens, Wren, IKEA, Magnet, Wickes, Benchmarx, B&Q and Other where these are genuinely supported. Add **Still choosing**.

Use compact supplier rows or tiles with consistent logos/text, comfortable targets and actions such as **Howdens fitting**. Replace tiny provisional images and repeated “Explore kitchen” wording. Keep the chooser useful on a phone without making every supplier card a full screen.

Place **Design, supply and installation** separately below the fitting route, linking to bespoke and in-frame services. Explain their relationship in a sentence. Do not imply that choosing in-frame is the same decision as choosing an installation supplier.

### Supplier page template

1. Supplier name, independent installation status, area and clear fitting proposition.
2. Primary quote action and supplier-specific WhatsApp alternative.
3. Relevant real project or honestly identified supporting image.
4. What is included, separately quoted and dependent on site conditions.
5. A few useful supplier-specific considerations, verified against current primary information. Avoid manufacturing technical distinctions merely to make pages look different.
6. Short process, relevant FAQs, coverage and available genuine feedback.
7. Final correctly prefilled enquiry action.

### Plain-language editing rules

- Replace internal terms such as “QC,” “commercially sensible,” “technical coordination” and repeated “scope” with the actual customer meaning.
- Shorten long sentences combining experience, design, installation and every trade.
- Replace “A supporting local joinery service” on doors with a direct description of the service.
- Explain specialist partners positively and accurately: who designs, who produces, who installs and who is the customer's contact.
- Explain why price varies and what is needed for a quote. Do not stop at “We do not publish standard prices.”
- Avoid repetitive paragraphs copied into every page. Share components where the content genuinely applies; tailor proof, FAQs and service benefits.
- Use British English and consistent sentence case. Avoid unsupported “best,” “leading,” “approved,” “luxury” and “guaranteed” claims.

### Questions each relevant service must answer

Use concise page copy and FAQs. The owner must confirm the actual answers; do not invent policy.

| Customer question | Required clarity |
|---|---|
| Can I enquire before ordering or having a plan? | Explain the starting point and what is useful to send |
| Is the first discussion or visit charged? | Actual fee/free/conditional policy |
| What does the quote include? | Included work, exclusions and separately quoted elements |
| Who removes the old kitchen and waste? | Responsibility and optional services |
| Who deals with worktops, plumbing, gas, electrics and decoration? | Actual coordination and appropriately qualified trade responsibilities |
| When can work start and how long does it take? | How availability/duration is confirmed; avoid unsupported fixed promises |
| What if parts arrive damaged or missing? | Actual process and responsibilities |
| How do payments work? | Approved deposit/stage policy or a clear route to the written terms |
| What happens at completion? | Handover checks, snag list and contact for aftercare |
| What workmanship commitment applies? | Accurate written terms; no invented warranty period |
| What affects cost? | Useful cost drivers and quote process; publish ranges only with reliable owner-approved data |

For doors, include existing-frame condition, hardware, permitted trimming and separately scoped repairs. For fire doors, publish only the actual competent, supported service and verified claims. For trade installation, explain drawings, delivery/access readiness and sign-off responsibilities.

## 8. Search, local discovery and technical completion — FF-19, FF-20

### Code-controlled requirements

- Unique useful page titles and descriptions. Avoid repeating “Form & Frame” twice in the same title.
- Maintain clear visible service and location language without keyword stuffing.
- Correct canonical URLs for production. Preserve existing useful paths and add redirects if needed.
- Valid sitemap containing public canonical pages. No drafts, preview URLs, enquiry records or private files.
- Review robots/noindex behaviour: production should not inherit preview restrictions; preview/private environments should not become competing indexed sites.
- Add appropriate Organization/LocalBusiness structured data only with verified publishable information. Choose the type based on actual facts and current official guidance.
- Do not invent an address, showroom, hours, rating or review count to satisfy a schema. Omit unsupported fields. Do not assume self-published review markup earns search stars.
- Validate markup and test for discrepancies with visible page content.
- Check meaningful internal links from services to projects, projects to services and supplier pages to enquiries.
- Check Open Graph/social titles, descriptions and genuine share images. Verify that a shared link has a useful preview.
- Check all header/footer actions and obvious 404s, missing assets, console errors and hydration/runtime errors.

### Access-dependent requirements

With authorized access, inspect Search Console index coverage for important routes, sitemap status and URL inspection findings. Check the Google Business Profile's business name, phone, website, coverage, real photographs and relevant review process.

If access is unavailable, complete the code-controlled work, report the exact checks still needed and mark FF-20 **Blocked** or partially completed with the blocked part stated. Do not claim pages are indexed, rankings improved or the profile is optimized without evidence.

## 9. Content and configuration dependencies

Create one concise owner-input list after inspecting existing assets and documentation. Do not ask for material already available and approved. Request only facts that cannot be established reliably from the project.

| Dependency | Needed for | Action if unavailable |
|---|---|---|
| Preferred brand and legal/trading details | Footer, contact, privacy, schema | Implement fields/components; keep unconfirmed facts out of public copy; record blocker |
| Approved inbox/provider configuration | Direct submission and notifications | Complete integration and local/provider tests; document exact setup; delivery remains unverified |
| Privacy decisions and actual providers | Accurate notice | Draft from actual architecture; identify unresolved retention/access/contact details |
| Real portrait and approved biography | About/Meet Arnas | Build layout with available genuine content; omit fake image/claims; report missing proof |
| At least three project packages | Our Work and case studies | Publish available verified projects only; keep unpublished drafts out of sitemap/navigation |
| Approved reviews and sources | Customer trust | Build optional component; hide it when empty; do not invent feedback |
| Original high-resolution images | Hero/case study composition | Optimize genuine available originals; record resolution limitations; do not fake project evidence |
| Official supplier logo assets/usage | Brand chooser | Use consistent plain text while unresolved |
| Visits, scope, timing, payments and aftercare facts | Service FAQs and commitments | Use confirmed facts; list precise unanswered questions rather than guessing |
| Analytics/Search Console/Business Profile access | Measurement and discovery verification | Finish public/code work; state access-dependent checks separately |

For each asset, retain provenance and permission. Check that apparent assets in the repository are genuinely cleared for this use before treating them as business evidence.

Do not put bracketed drafting prompts, such as “[insert real project here],” into public pages. Missing assets belong in the internal status report or unpublished content records.

## 10. Acceptance tests and release checks — FF-22, FF-23

Use focused tests for material behaviour and regression risks. Follow existing test tooling; avoid creating large brittle suites merely to mirror static markup. A visual change can be verified through targeted screenshots and review.

### 10.1 Journey test matrix

Record actual result, environment, date and evidence for every applicable row. **Not run** is a valid status and must remain visible.

| Test | Expected result |
|---|---|
| Homepage primary action | Correct installation enquiry context, useful focus/anchor landing |
| Homepage secondary action | Real Our Work content, different destination from the quote action |
| Supplier chooser | Supported suppliers and Still choosing reach correct pages/context |
| Existing Howdens prefill URL | Retains the three established values or documented compatible mapping |
| Other supplier enquiries | Correct supplier/service, including Other and unknown-query fallback |
| Doors, wardrobes, bespoke and trade routes | Correct service/conditional fields and WhatsApp message |
| Service changed inside form | Irrelevant previous fields cleared or excluded from payload |
| Email-only contact | Valid enquiry can be accepted without phone |
| Phone-only contact | Valid enquiry can be accepted without email |
| No contact method / malformed chosen value | Helpful accessible error, input retained |
| Missing required project information | Server and client reject appropriately; useful error state |
| Valid PDF + supported phone photograph | Upload and enquiry association succeed; authorized recipient can access |
| Unsupported, oversized or excessive files | Clear error before/at rejection; server enforcement; other input retained |
| Attachment interrupted | Retry/remove works; no false completion; abandoned files handled |
| Submission interrupted / backend unavailable | Honest error, preserved text and useful retry |
| Double-click and retry after slow response | No uncontrolled duplicate accepted enquiries |
| Successful enquiry | Durable reference, customer confirmation and actual business notification |
| Notification failure after saving | Enquiry retained; failure observable/retryable; no silent loss |
| Email acknowledgement | Received when email supplied; absence of email does not break phone-only flow |
| Analytics success and failure | Accepted event only after acceptance; clicks separate; no customer details leaked |
| Privacy links | Reach the accurate notice from form and footer |
| Mobile navigation and nested links | Open/close/navigation/focus/scroll behave correctly |
| Telephone and WhatsApp links | Correct destination and encoding; no message sent during link inspection |
| Project cards and internal links | Complete genuine destination; no empty pages or dead ends |
| Refresh, back and return after success | Clear state; no misleading success or accidental resubmission |

Use explicit test data and an authorized test inbox/provider sandbox for controlled delivery tests. Do not submit fake leads to an unapproved production recipient. If production delivery cannot be safely verified in the destination context, report the limitation and the remaining exact test.

### 10.2 Device and visual checks

Test responsive widths **360, 390, 412, 768, 1024 and approximately 1440 px**. Include real iPhone Safari and Android Chrome when devices are available. Clearly distinguish real-device results from emulation.

Verify:

- No unintended horizontal scrolling, clipped headings, broken email wrapping or overlapping sections.
- The main proposition and useful action appear before long decorative content.
- Supplier choices remain near the top of the installation page.
- Hero focal point shows the work; no distorted logos or soft upscaled images.
- Buttons, fields and file controls work with a finger and appropriate mobile keyboards.
- Menus, accordions, anchor offsets and any sticky header do not hide content.
- Any bottom action bar does not obscure fields, errors, footer or on-screen keyboard.
- Portrait/landscape, text zoom and browser back behaviour remain usable.
- Images and consent UI do not cause unexpected layout shifts.

Capture representative before/after views for homepage, installation hub, supplier page, Our Work, project detail, About, door/joinery service and contact. Include form error and accepted states using non-sensitive test data.

### 10.3 Accessibility checks

- Fix the confirmed brass eyebrow contrast and carousel-selector size/spacing problems.
- Test actual colour combinations and interaction states against applicable WCAG AA criteria.
- Aim for at least 44 × 44 px comfortable interactive areas as a design target; do not misstate that value as the universal WCAG AA minimum.
- Retain skip link, semantic headings, visible labels and useful autocomplete.
- Ensure keyboard access, visible focus, sensible focus order and no unintended traps.
- Test menu, accordions, optional carousel and file controls with keyboard; reduced motion must be respected.
- Check form errors, busy state and success announcements with assistive technology where available; report what was actually tested.
- Test reflow/zoom on principal journeys. Do not use a Lighthouse score alone to declare the site accessible.

### 10.4 Performance and build checks

- Run the project's relevant production build, type checks, lint checks and focused behavioural tests. Record exact commands and outcomes; distinguish pre-existing failures.
- Re-run mobile and desktop performance/accessibility checks on key templates: homepage, installation/supplier page, project detail and contact.
- Compare homepage results with section 2 under comparable conditions. Aim to retain strong performance, with Lighthouse performance at least 95 as a project target and no unexplained material regression. Investigate rather than hiding a lower result.
- Good field Core Web Vitals targets, when sufficient real-user data exists, are LCP ≤2.5 s, INP ≤200 ms and CLS ≤0.1 at the 75th percentile. A preview/lab run does not prove those field outcomes.
- Check new hero assets, fonts, analytics and upload scripts for loading cost. Resolve avoidable regressions before release.
- Verify production/preview environment differences, upload limits, function timeouts and safe configuration. Local success does not establish deployed delivery success.

### 10.5 Release decision

Do not describe the work as fully verified while a P0 requirement or core enquiry test remains unverified. A staged release of completed improvements can still be proposed transparently, with remaining limitations identified.

If genuine project/portrait/review content is missing, the implementation can be technically ready while the trust/content target remains incomplete. Explain that distinction in the completion report. Do not fill the gap with fictitious evidence.

## 11. Required implementation handoff

Deliver the following with the completed work:

1. **Preview URL**, exact commit/branch and tested environment. State clearly whether production was changed.
2. **Short change summary:** what changed and why, grouped by customer outcome.
3. **Requirement table:** one row for every FF-01–FF-24, with status, relevant files/routes, evidence and outstanding dependency.
4. **Test results:** actual commands, environment/device, pass/fail/not-run and links/paths to reports or screenshots.
5. **Form evidence:** accepted test reference, persistence/delivery/attachment/acknowledgement results, and failure/retry results. Redact personal data and secrets.
6. **Before/after screenshots:** same viewport where practical; include desktop/mobile and form states.
7. **Content provenance:** approved projects, roles, image rights, portrait, reviews and supplier assets; missing inputs clearly listed.
8. **Configuration guide:** necessary environment variable names, provider setup, retention/access choices, deployment considerations and rollback method. No secrets in the report.
9. **Remaining owner actions:** only precise unresolved facts/assets/access, with their impact and affected requirement IDs.
10. **Suggested next audit URL and scope:** ready for an independent reviewer to reproduce the checks.

Store reports and evidence in an appropriate existing documentation location. If none exists, suggested paths are `docs/website-audit/implementation-report.md`, `docs/website-audit/content-register.md` and `docs/website-audit/evidence/`. Keep private customer originals and credentials outside the public repository.

Use this completion row format:

| ID | Status | Files / URLs changed | Test or visual evidence | Remaining dependency |
|---|---|---|---|---|
| FF-01 | Not started | — | — | Inspect current form infrastructure |

Populate all 24 IDs. Do not leave the example status as the final report. Use **Verified** only when its acceptance evidence exists; if partially complete, name the completed part and remaining blocker.

Final response should state the most important result, link the preview/report, summarize verification and clearly identify blockers. Do not assign yourself a final 95/100 merely because tasks were checked off.

## 12. Repeat-audit procedure and scoring

The follow-up auditor should inspect the changed site independently. The implementation report is evidence to examine, not a substitute for testing.

### Procedure

1. Record audit date, URL, deployment/commit and whether inspecting preview or production.
2. Compare against the original findings and FF-01–FF-24 table. Mark each requirement **Pass / Partial / Fail / Not verified**, with a screenshot, observation or test result.
3. Inspect the same 12 original routes, new About/Our Work/project/privacy pages and representative additional supplier pages.
4. Test all principal contact routes, conditional form behaviour, attachments, validation, acceptance, delivery and relevant failure states with authorized test data.
5. Repeat desktop/mobile visual, keyboard and performance checks. Clearly disclose device/emulation and account-access limits.
6. Verify genuine project/customer evidence and check that copy matches confirmed responsibilities.
7. If claiming relative competitive progress, re-inspect current competitor pages. Do not assume the September 2026 snapshots remain current.
8. Re-score the rubric below, explain deductions and produce a short ordered remaining-actions list.

### Same six-category rubric

| Category | Maximum | Original editorial score | What a high score requires |
|---|---:|---:|---|
| Visual design and proportions | 20 | 14 | Cohesive type/spacing, sharp genuine images, purposeful crops, finished mobile composition |
| Offer clarity and navigation | 15 | 11 | Immediate service/area/next step; installation distinct from supply; proof easy to find |
| Evidence, people and trust | 20 | 5 | Genuine distinct projects, named responsibility, permitted feedback and accurate commitments |
| Enquiry journey | 20 | 6 | Correct context, low friction, accessible states, working uploads, acceptance and verified receipt |
| Content completeness and usefulness | 15 | 10 | Relevant complete services, plain words, practical answers and no placeholders |
| Technical foundation observed | 10 | 9 | Preserved speed, known accessibility fixes, sound metadata/routes and reliable deployment |
| **Total** | **100** | **55** | **Target: 95/100 after independent re-audit** |

The original category scores are editorial judgments, not a statistically calibrated model. Use the same maxima and transparent reasoning for repeatability. Explain each deduction and any untested area. Do not substitute a Lighthouse score for the overall quality score.

### Gates before describing the site as 95/100 ready

- No unresolved P0 defect or unverified core delivery/attachment journey.
- No public placeholders, fake proof, unsupported service claims or misleading success states.
- Correct service context throughout the tested pages and contacts.
- Known contrast and control failures fixed, with manual keyboard/mobile checks.
- Genuine relevant projects, owner identity, permitted feedback and clear aftercare responsibilities.
- Consistent visual execution across the important templates, not only the homepage.
- Performance preserved or any measured regression resolved with evidence.
- A proposed five-second clarity test: at least four of five relevant prospective customers can identify the main service, service area and next step. Record it as **not run** until real participants complete it; do not simulate participants and report their responses as research.
- Qualified leads and booked work have a defined measurement process. Commercial superiority remains unproven until real outcomes are observed.

### Copyable prompt for the later audit

> Audit the updated Form & Frame website against the attached implementation brief and original audit. Inspect the actual deployed pages and test the key journeys; do not rely only on the developer's completion claims. Assess every FF-01–FF-24 requirement as Pass, Partial, Fail or Not verified, with evidence. Re-score the same six categories out of 100, explain deductions, compare desktop/mobile before and after, and list the remaining changes in priority order. Verify genuine content, service clarity, imagery, typography, spacing, enquiry prefills, uploads, errors, acceptance, delivery, accessibility and performance. Use an authorized test destination for submission tests. State all access and testing limits and distinguish technical implementation from missing owner content. Treat 95/100 as an internal quality target, not a market-percentile claim.

## 13. Competitive intent and source references

The aim is to combine the strongest observed competitor practices with Form & Frame's own identity. Do not copy competitor text, images, logos or proprietary layouts.

| Benchmark inspected in original audit | Useful lesson | Requirements that address it |
|---|---|---|
| C S Dyer & Son, Luton | Prominent work/about content and finished-project evidence | FF-09, FF-11–13 |
| Experterra | Personal reassurance and clear care for the customer's home | FF-05, FF-11, FF-14, FF-18 |
| Harpenden Kitchens | Projects identified by place and style | FF-12–13 |
| Brampton Interiors | Case studies and attributable testimonials | FF-12–14 |
| Joshua Donald Kitchens | Reduced uncertainty around budget, booking and guarantees | FF-01, FF-05, FF-17–18 |
| Adam Hope Bespoke | Cabinetry specialism and explanation of production responsibilities | FF-05, FF-11, FF-17 |
| MA Waller Carpentry, additional content comparison | Practical supply/fit, timing, coverage and proof questions | FF-16–18 |

Kitchen studios selling a complete kitchen are not a direct price comparison for fitting-only work. Only adopt service promises, guarantees and price guidance that the owner can support.

### Reference links

- [Live site](https://formandframekitchens.co.uk/)
- [Original mobile lab report](https://pagespeed.web.dev/analysis/https-formandframekitchens-co-uk/1xk6515zlu?form_factor=mobile)
- [Original desktop lab report](https://pagespeed.web.dev/analysis/https-formandframekitchens-co-uk/1xk6515zlu?form_factor=desktop)
- [C S Dyer & Son](https://www.csdyer.com/)
- [Experterra](https://www.experterra.co.uk/)
- [Harpenden Kitchens](https://www.harpendenkitchensltd.co.uk/)
- [Brampton Interiors](https://www.bramptoninteriors.co.uk/)
- [Joshua Donald Kitchens](https://joshuadonaldkitchens.co.uk/)
- [Adam Hope Bespoke](https://www.adamhopecarpentry.co.uk/)
- [MA Waller kitchen fitting](https://mawallercarpentry.co.uk/kitchen-fitting-installation-ma-waller-carpentry/)
- [W3C contrast guidance](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)
- [Web Vitals](https://web.dev/articles/vitals)
- [Google business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)

These links preserve the audit's reference trail. Recheck current official technical guidance during implementation and current competitor pages during the repeat comparison.

---

**Start now:** inspect the project, verify the baseline, create the requirement tracker, and begin P0 implementation. Continue all work that is supported by the available code, facts and assets. Deliver a working, tested preview and an honest completion report with any remaining dependencies.
