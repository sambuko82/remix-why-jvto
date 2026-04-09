# remix-why-jvto

Active JVTO frontend workspace.

## Current Role

- This repository is the only active frontend codebase.
- Visual truth lives here.
- Preview deployments are produced from this repository.

## Source Model

- `DB mirror`
  - primary data source for staged/live-candidate content
- `JVTO-Why-JVTO-Next15`
  - reference for content structure and decision logic when needed
- `jvto-web`
  - reference for route reality and live-detail checks when needed

Old frontend workspaces are not part of the active implementation path.

## Run Locally

1. Install dependencies:
   `npm install`
2. Copy env values:
   `.env.example` -> `.env.local`
3. Run:
   `npm run dev`

## Key Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run check:jvto:source`
- `npm run deploy:preview`

## Operational Notes

- Local development may fall back to bundled data when `DB mirror` is unreachable.
- Preview on Vercel is the main review rail for real environment checks.
- `/ops/source-health` and `/api/source-health` are available for diagnostics.
