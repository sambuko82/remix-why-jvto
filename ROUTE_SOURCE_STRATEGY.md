# Route Source Strategy

## Objective

Keep the active frontend deterministic enough for preview and cutover.

The main rule is:

- pages that define discovery and first impressions must not silently freeze bundled fallback data at build time
- pages that are content-static and not DB-critical can stay static

## Route Classes

### Runtime Discovery

These routes must resolve data at request time:

- `/`
- `/tours`
- `/destinations`
- `/ops/source-health`
- `/api/source-health`

Reason:

- they are the main review and entry routes
- build-time fallback would otherwise deploy stale bundled content as if it were live data
- runtime resolution keeps preview behavior closer to the real source state

Fallback policy:

- fallback is allowed only as a runtime safety net
- fallback must not become the baked build artifact for these routes

### Dynamic Detail

These routes stay dynamic:

- `/tours/[departure]/[slug]`
- `/destinations/[destinationId]`
- `/team/[crewId]`

Reason:

- they already use on-demand rendering
- they should not be mass-prerendered against DB mirror

### Static Informational

These routes can remain static:

- `/why-jvto`
- `/verify-jvto`
- `/travel-guide/*`
- `/policy/*`
- `/faq`
- `/isic/student-package`
- `/team`

Reason:

- they are mostly content-stable
- they do not depend on DB mirror for core route validity

## Cutover Rule

Before production replacement:

1. runtime discovery pages must be reviewed in preview
2. source-health must confirm whether preview is reading mirror or fallback
3. static informational routes must pass metadata/canonical review
4. no donor frontend repo is used for implementation or validation
