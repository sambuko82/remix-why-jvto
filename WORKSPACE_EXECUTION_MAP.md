# Workspace Execution Map

## Active Objective

Turn `remix-why-jvto` into the real JVTO frontend, not just a connected remix shell.

That means:

- keep the remix visual system
- replace placeholder/template behavior with JVTO-specific content and logic
- use `DB mirror` as the primary data source
- keep fallback only as a safety net, not as the product

## Locked Decisions

### Active frontend

- `remix-why-jvto`

This is the only active frontend workspace.

### Not active frontend workspaces

- `JVTO-Why-JVTO-Next15`
- `jvto-web`

These are reference sources only.

### Primary data source

- `DB mirror`

### Fallback data source

- local `SSOT` inside `remix-why-jvto`

Fallback is allowed for resilience, but it must not define the final product experience.

## What The Old Repos Are Used For

### `JVTO-Why-JVTO-Next15`

Use only for:

- content structure
- trust/support logic
- page grouping
- decision flow patterns discussed earlier

### `jvto-web`

Use only for:

- route reality
- live-detail checks
- implementation behavior worth preserving

Do not use either repo as a visual source of truth.

## Visual Rule

The design system must stay native to `remix-why-jvto`.

Do:

- keep its typography direction
- keep its card language
- keep its spacing/rhythm
- fit JVTO content into those patterns

Do not:

- re-import visual drift from older workspaces
- redesign sections from scratch when remix already has a usable pattern
- force long copy into layouts that cannot support it

## Current Stage

### Completed

- Next.js App Router migration
- route foundation
- homepage/tours/destinations adapters
- metadata/canonical layer
- preview deployment workflow
- source-health diagnostics
- policy and secondary content route migration
- package intelligence migration
- MAGMA integration
- source reliability strategy for discovery pages
- cutover-readiness documentation

### Verified

- preview deploy works from `remix-why-jvto`
- source health in preview reports `mirror`
- key routes return `200`
- sample package and destination assets are coming from mirror-backed data

### Not complete

- visual/content completion
- placeholder removal across the visible user experience
- section-by-section fitting of JVTO content into remix-native components

## Main Problem Right Now

The project is technically ready enough for staging review, but the visible website still feels too close to the original remix/template baseline.

Why:

- too much of the user-facing content still comes from fallback/template structures
- some sections are connected to live data but not yet translated into strong JVTO-specific presentation
- several components still read as generic remix content rather than finished JVTO content

## Current Priority

Do not continue infrastructure work unless a blocker appears.

The correct priority now is:

1. homepage content fitting
2. tours discovery fitting
3. destinations fitting
4. trust/support content fitting

This is the path that changes what the website actually looks and feels like.

## Execution Rule For Next Batches

Each batch must be narrow and visible.

Good batch:

- replace homepage placeholder content with JVTO-specific content using existing remix patterns

Bad batch:

- add another data layer
- add another diagnostic layer
- redesign multiple clusters at once
- invent new visual patterns while placeholders still remain

## Decision Standard

Before changing anything, ask:

1. does this reduce placeholder/template behavior?
2. does this preserve the remix visual system?
3. does this move visible product quality forward?
4. is this more important than another infrastructure improvement right now?

If the answer to 1-3 is not clearly yes, do not do it.

## Next Recommended Batch

### Homepage content fitting

Goal:

- make homepage visibly JVTO-specific without changing the remix visual grammar

Focus:

- hero copy and supporting cues
- destination section content fit
- departure/tour browser content fit
- founder/trust blocks
- remove empty/generic/template-feeling language

Exit criteria:

- homepage no longer reads like a starter remix with injected data
- homepage reads like JVTO using remix-native design
