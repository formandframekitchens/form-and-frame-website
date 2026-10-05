# B13 gallery completion — 5 October 2026

Owner authorised the complete audit fix list and four prepared galleries in one working session. Baseline: master e212a7b12dde101ae1c40750791c94f58e75ffdd, 51 public records, 266 image references.

## Checkpoints and fuses

| Lane | Branch | Current checkpoint | Next action |
| --- | --- | --- | --- |
| Shared corrections | b13-gallery-completion | Build/lint and all relevant desktop/mobile checks passed | Preview, PR, production |
| G57 white library | g57-full-wall-white-library-bookcase | Prepared assets | Verify original asset/report hashes; integrate after shared corrections |
| G58 Esher bathroom | g58-esher-bathroom-vanity-mirror | Prepared assets | Verify and integrate after G57 production check |
| G59 radiator covers | g59-traditional-radiator-covers-shelving | Prepared assets | Verify and integrate after G58 production check |
| G60 Esher make-up table | g60-esher-make-up-table | Prepared single image | Verify source-quality exception; integrate after G59 production check |

Each lane keeps its own commit, preview and production verification. Shared master integration stays serial. Two failures of the same operation park that operation; diagnose once, record the cause, use a different supported approach and continue independent work. No unverified assets or invented project facts advance to publication.

## Identity decisions

- Retain G01 and its established kitchen route as canonical; consolidate G53's useful photography into it and redirect the G53 route. G53 is retired, never reused.
- The competing G57 Fulham media-wall proposal is G32; G58 Garsdale is G27; G59 shoe storage is G07; G60 study bookcase is G12. Those branch labels are historical proposals, not new public IDs.
- G57–G60 are assigned only to the four distinct prepared projects above. Existing public IDs remain stable.
- Proposed G40 h0024.jpg already appears in G45. Keep it in G45 and keep G40 reserved; close duplicate PR #68 after reconciliation is published.
- Preserve intentional HOLD projects, including under-stairs (no verified finished example), low-resolution rise-and-fall TV cabinet, unfinished projects and renders.
- Additional Aram/kitchen archive candidates remain source-review work, not part of the four prepared publication lanes. They require original mapping and confirmed project facts.

## Verification scope

Filters/search and no-results recovery; category-to-project links; covers and full-room composition; accurate captions/copy; canonical redirects and sitemap; editable project-aware enquiry payload and notification content; related projects; keyboard/modal focus; desktop/mobile layout; private access request and local authorised-login/logout checks with a test-only code. Production private credentials remain unchanged.

## Resolved setup issues

- Existing master lockfile omitted @vercel/blob and its dependencies. Clean install failed once; repaired the lock with declared dependency versions, then installed successfully.
- Browser verification caught the seventh kitchen/joinery row clipping at laptop height; reduced row padding by 1px. Photo-dialog Tab wrapping is explicit as well as using a native modal. Related projects prioritise the main furniture type before secondary classifications.
- Validation: production build and lint passed. Full suite had 57 passing plus two ranking failures and one viewport-independent skip; repaired ranking, then gallery suite passed 19/19 applicable checks. Other 40 existing checks passed in the full run. Enquiry delivery was mocked or unconfigured; no test emails sent.
