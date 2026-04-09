# Active Frontend State

## Active Workspace

- Frontend implementation: `remix-why-jvto`
- Preview rail: Vercel project linked from this repository
- Visual source of truth: the components and layouts in this repository

## Current Stage

The migration/reset phase is complete.

The project is now in:

- `source reliability`
- `cutover-readiness`

That means the main work is no longer framework migration or donor-repo extraction.
The remaining work is to make route/data behavior deterministic enough for production replacement.

## What Is Already In Place

- Next.js App Router foundation
- homepage adapter layer
- tours adapter layer
- destinations adapter layer
- metadata/canonical layer
- preview deployment workflow
- source-health diagnostics
- policy and secondary content routes
- package intelligence
- MAGMA/live-volcano context

## Active Source Model

- `DB mirror`
  - primary staged data source
- `JVTO-Why-JVTO-Next15`
  - reference for missing content logic only
- `jvto-web`
  - reference for route parity and live-detail checks only

## Not Active

These are not active frontend workspaces and should not be used for ongoing implementation:

- `Why-JVTO`
- any prior donor/migration workspace used before parity was reached

## Current Risks

1. Local DB mirror access is unreliable from this machine.
2. Discovery pages can still fall back to bundled data when DB mirror times out.
3. Cutover decisions still need a route-by-route source strategy.

## Immediate Next Work

1. tighten source reliability for discovery pages:
   - `/`
   - `/tours`
   - `/destinations`
2. prepare cutover checklist:
   - source per route
   - metadata/canonical check
   - preview verification pass
   - deployment replacement steps

Route source policy is defined in `ROUTE_SOURCE_STRATEGY.md`.

## Decision Rule

Only change visuals when required to fit this repository's native design system.
Do not re-open migration decisions that are already complete.
