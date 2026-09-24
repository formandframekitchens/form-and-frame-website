# B06 bespoke joinery

The landing page at /bespoke-joinery uses the same compact selection component as Kitchen Installation. It contains seven ordered choices with distinct images and links.

## Current scope

The category routes are introductory destinations: a matching image, short description, planning considerations and a prefilled enquiry link. The next design step is to develop the first complete individual page and its gallery, then apply the approved layout to the other categories.

The shared category layout lives in app/components/joinery-category-page.tsx. Category content lives in app/lib/joinery-categories.ts. Each category can accept a gallery array of src, alt and optional caption entries. Empty galleries do not render headings, placeholders or unfinished controls. Use supplied, approved imagery for completed-job features.

Category routes:

- /bespoke-joinery/wardrobes
- /bespoke-joinery/alcove-units
- /bespoke-joinery/bookcases
- /bespoke-joinery/entertainment-units
- /bespoke-joinery/office-furniture
- /bespoke-joinery/under-stairs-storage
- /bespoke-joinery/unique-furniture

## Enquiry context

Category quote links use service=bespoke-joinery and a validated joinery parameter. The form exposes an editable Joinery type field; changing service clears stale category information. The prepared email includes the readable category name. Existing kitchen and general service URLs remain compatible.

## Release

This batch uses b06-bespoke-joinery and targets master through a preview PR. B05 is the approved production baseline. The next new development batch is B07.
