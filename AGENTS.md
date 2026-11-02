# Project Architecture Rules

- Preserve completed destination pages as archival routes and create year-specific pages for returning trips, so prior-trip media and testimonials remain independently accessible.
- Keep training-session "is it over" logic in the shared `src/lib/trainingSessionStatus.ts` helper and reuse it on every page that lists sessions, so past sessions deactivate the same way everywhere instead of being marked by hand.
