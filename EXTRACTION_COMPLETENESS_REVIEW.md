# Extraction Completeness Review

## Current Baseline

Active frontend:
- `remix-why-jvto`

Runtime data source:
- `DB mirror`

Reference-only donor sources:
- `JVTO-Why-JVTO-Next15`
- `jvto-web`

Visual rule:
- remix patterns stay primary
- donor repos provide content, logic, and missing context only

## What Was Closed In This Batch

### 1. Support-layer gap: `/contact`

This route was missing from the active frontend even though it belongs to the agreed support foundation.

It is now present at:
- `/contact`

Implemented using remix-compatible light/editorial styling and support-shell grammar, not donor visual code.

### 2. Broken support paths

Visible broken or stale support links were normalized:
- homepage footer no longer points to dead routes like `/why-jvto/our-team`
- homepage footer no longer points to dead routes like `/policy/terms`
- homepage footer no longer points to non-existent departure hub routes
- travel-guide FAQ CTA now points to `/contact`

### 3. Wrong support CTA behavior

`BookingRail` on the Ijen screening page was still using demo-style audit/deploy language and a wrong WhatsApp number.

It now:
- uses official-channel language
- points into `/contact`
- behaves as a support/readiness rail instead of a fake audit unlock

### 4. Global heading structure bug

`TopNav` was still using a logo `<h1>`, which hijacked the page heading and caused route-level `h1` extraction to be wrong.

That is now fixed.

## Verification

Latest verified preview:
- `https://remix-why-jvto-95ly6btt9-sams-projects-jvto.vercel.app`

Checks passed:
- `npm run lint`
- `npm run build`
- `/api/source-health` = `mirror`, `reachable: true`
- `/contact` = `200`
- `/travel-guide/faq` = `200`
- `/travel-guide/ijen-health-screening` = `200`

Contact route metadata check:
- title = `Contact JVTO | Java Volcano Tour Operator`
- canonical = `https://javavolcano-touroperator.com/contact`
- route `h1` = `Contact JVTO`

## What Is Now Complete Enough

### Support layer

Now materially represented:
- travel guide hub
- booking information
- weather and closures
- packing and fitness
- Ijen health screening
- policy hub and policy subpages
- FAQ
- contact

This layer is no longer missing a foundational route.

## What Still Looks Partial

### 1. Commercial extraction depth

Package detail pages already carry route intelligence, but there is still more donor logic available from:
- `LIVE_PACKAGE_VARIABLE_MAP.md`
- package editorial backups
- `jvto-web` package detail context

The remaining opportunity is not route creation. It is sharper booking-confidence and route-fit language inside existing package slots.

### 2. Trust/authority density on high-level surfaces

The trust layer exists across:
- `/why-jvto`
- `/verify-jvto`
- homepage trust components

But some donor context still appears deeper in source material than on the highest-visibility surfaces. The gap is not structural; it is selective extraction.

### 3. Content-system layer

Content governance, CMS ownership, and reusable section governance are still not the active priority. The current site is frontend-first and runtime-backed, but not yet editorial-system-complete.

## Recommended Next Priority

The next batch should be:

### `commercial extraction pass`

Reason:
- the support layer now has its missing core route
- the runtime and preview rails are stable
- the highest-value remaining gap is route-confidence and booking-confidence depth inside tours/package pages

That pass should:
- stay inside existing remix route/detail slots
- absorb only the strongest missing route-confidence logic from donor sources
- avoid new visual systems
- tighten the package-first decision path before any broader polish
