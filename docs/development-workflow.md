# Form & Frame Website Development Workflow

## Branch numbering

Every new development batch uses one increasing branch number.

Format:

- Codex task: `[B06] Short task name`
- Git branch: `b06-short-task-name`
- Pull request: `[B06] Short task name`
- Vercel preview: automatically inherits the same Git branch name
- Merge commit: `[B06] Short task name`
- Production / solid version: `master`

## Meaning

### TEST
Any numbered `bNN-...` branch is a development/test version.

Example:

`b06-supplier-logos`

This is the version reviewed in Vercel before production.

### SOLID
`master` is the approved live production version.

We do not create a second "solid" branch for each task. Once a numbered test branch is approved, it is merged into `master`.

This keeps the structure simple:

`B06 TEST -> preview in Vercel -> approved -> merge to master SOLID`

## Current sequence — 5 October 2026

- B15 — Owner-directed gallery visibility and bottom ordering.
- Branch: `b15-gallery-visibility-order`.
- Next new website batch: B16; next unassigned gallery: G62.

### Previous sequence (B14)

- B14 — Owner-directed gallery photo corrections and Manchester merge.
- Branch: `b14-gallery-photo-corrections`.

### Previous sequence (B13)

- B13 — Gallery completion, navigation, enquiries and content reconciliation.
- Branch: `b13-gallery-completion`.
- Four already prepared gallery branches retain their assigned G57–G60 lane names; each is integrated and verified separately under this batch.
- Next new website batch: B14. Check remote branches before assigning it in case another task has reserved a later number.
- Earlier B07–B12 work exists in repository history. Numbers are never reused.

## Historical sequence (superseded)

Current development batch:

- B06 — Bespoke joinery selection and category pages
- Git branch: `b06-bespoke-joinery`

Previous approved batch:

- B05 — Services hub and kitchen selection flow, merged into `master`

Next development batch:

- B07 — next website change

Then:

- B08
- B09
- etc.

Numbers are never reused, even if a branch is abandoned.

## Naming rules

1. Always use two digits: B05, B06, B07.
2. Git branch names use lowercase `bNN-`.
3. Keep the descriptive part short and readable.
4. Codex instructions always state the branch number at the top.
5. PR titles always begin with the same branch number.
6. Vercel previews should therefore display the same numbered Git branch.
7. After approval, the merge commit into master also begins with the same branch number.
8. Never start a new website batch without assigning the next number first.

## Example

Codex:
`[B06] Add supplier logos and brand assets`

Git:
`b06-supplier-logos`

PR:
`[B06] Supplier logos and brand assets`

Vercel:
preview for `b06-supplier-logos`

Production:
merge to `master` with commit title `[B06] Supplier logos and brand assets`
