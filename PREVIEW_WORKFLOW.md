# Preview Workflow

## Current Operating Model

- Local development is allowed to run on fallback data if `DB mirror` is unreachable from this machine.
- Vercel Preview is the authoritative review environment for real-data validation.
- The goal is to stop burning time on local network instability and keep progress on the final frontend.

## What This Solves

The final frontend now has two explicit modes:

1. `mirror`
   The app is reading real JVTO data from `DB mirror`.
2. `fallback`
   The app is using the bundled JVTO-safe fallback dataset because local connectivity failed or env is missing.

The key rule is simple:

- review layout and component work locally
- review real-data behavior in Vercel Preview

## Commands

### Local quality checks

```powershell
npm run lint
npm run build
npm run check:jvto:source
```

### Preview deployment

```powershell
npm run deploy:preview
```

This script requires `DATABASE_URL` in `.env.local` and will also pass `NEXT_PUBLIC_SITE_URL` if present.

## Health Endpoints

- page: `/ops/source-health`
- api: `/api/source-health`

Use them before any serious visual review. They answer one question immediately:

- are we looking at real `DB mirror` data or fallback content?

## Failure Scenarios

### 1. Local `check:jvto:source` times out

Interpretation:

- local machine cannot currently reach `DB mirror`

Action:

- do not stop feature work
- continue local UI work
- use Vercel Preview for real-data verification

### 2. Vercel Preview reports fallback mode

Interpretation:

- this is no longer a local issue
- either env is missing in the deploy command
- or `DB mirror` is not reachable from Vercel either

Action:

- inspect preview logs
- validate `.env.local`
- re-run `npm run deploy:preview`
- if still failing, treat it as infrastructure/debug work, not page-design work

### 3. Preview builds succeed but data shape looks wrong

Interpretation:

- connectivity is fine
- issue is now in adapters or source mapping

Action:

- debug `src/lib/homepage-data.ts`
- debug `src/lib/tours-data.ts`
- debug `src/lib/destinations-data.ts`

## Strategic Rule

Do not spend multiple cycles trying to make local networking behave if preview already proves the mirror path works. The production-relevant path is preview, not the unstable local connection.
