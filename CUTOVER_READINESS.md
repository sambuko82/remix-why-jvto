# Cutover Readiness

## Objective

Replace the current live frontend with `remix-why-jvto` without reopening migration work or guessing route behavior.

## Active Deployment Base

- frontend repo: `remix-why-jvto`
- linked Vercel project: `remix-why-jvto`
- data source: `DB mirror`

## Route Inventory

### Runtime Discovery

- `/`
- `/tours`
- `/destinations`
- `/ops/source-health`
- `/api/source-health`

Rule:

- these routes must be validated in preview before cutover
- these routes are allowed to use runtime fallback, but fallback mode must be visible through source-health

### Dynamic Detail

- `/tours/[departure]/[slug]`
- `/destinations/[destinationId]`
- `/team/[crewId]`

Rule:

- these routes must remain on-demand
- do not mass-prerender them against `DB mirror`

### Static Informational

- `/why-jvto`
- `/why-jvto/*`
- `/verify-jvto`
- `/verify-jvto/*`
- `/travel-guide`
- `/travel-guide/*`
- `/policy`
- `/policy/*`
- `/faq`
- `/isic/student-package`
- `/team`

Rule:

- these routes can stay static as long as metadata and canonicals are correct

## Pre-Cutover Checks

1. Code health
   - `npm run lint`
   - `npm run build`

2. Preview health
   - deploy preview from this repo
   - verify `/ops/source-health`
   - confirm whether preview is reading `mirror` or `fallback`

3. Route checks
   - homepage loads
   - `/tours` loads
   - `/destinations` loads
   - one tour detail route loads
   - one destination detail route loads
   - one route each for `why-jvto`, `verify-jvto`, `travel-guide`, and `policy`

4. Metadata checks
   - homepage title/description/canonical
   - `/tours` title/description/canonical
   - `/destinations` title/description/canonical
   - no route emits a preview URL as canonical unless intentionally configured

## Cutover Decision Gates

Cutover is allowed only if:

1. preview deploy succeeds from `remix-why-jvto`
2. source-health behavior is understood
3. runtime discovery routes are verified
4. no old frontend repo is needed for implementation or validation

## Deployment Replacement Plan

1. Keep the current production deployment untouched while preview is reviewed.
2. Promote the deployment path from `remix-why-jvto`, not from any donor repo.
3. Ensure production environment variables match the repo's required envs:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_SITE_URL`
4. Re-run a final preview verification after env confirmation.
5. Switch production deployment.

## Rollback Rule

If production behavior is wrong after switch:

1. revert to the previous production deployment
2. do not patch directly in production
3. diagnose in preview using:
   - `/ops/source-health`
   - route-level source behavior
   - adapter logs

## Known Residual Risk

The main residual risk is data-source reachability:

- local machine is not reliable for mirror validation
- preview is the authoritative environment for mirror verification

This is an infrastructure/data-access concern, not a frontend architecture concern.
