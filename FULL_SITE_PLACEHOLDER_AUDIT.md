# Full-Site Placeholder Audit

## Scope
- Active frontend only: `remix-why-jvto`
- Visual truth: remix layouts + screenshots + `jvto_design_system_prd.html`
- Goal: remove remaining template/demo language without reopening architecture or redesigning sections

## What Is Already In Good Shape
- Homepage core sections are no longer dominated by fake audit/demo claims
- Tours hub is now route/departure oriented instead of generic listing copy
- Destinations hub/detail now reads as route context rather than placeholder gallery copy
- `verify-jvto`, `travel-guide`, and `why-jvto` hubs are fitted to JVTO language
- `verify-jvto`, `travel-guide`, and `why-jvto` subpages have been normalized

## High-Priority Residual Placeholder Zones

### 1. Team Layer
Status: partially cleaned, still a residual placeholder cluster

Why it matters:
- `/team` and `/team/[crewId]` are public routes
- they still carried the strongest leftover forensic/demo wording outside the trust hubs

What was just corrected:
- hub labels changed from `registry/protocol` style language to `Field Team`
- profile page moved from `audit/forensic/triangulated proof` language to `team/credential/review` language

Residual risk:
- deeper child components such as team cards and internal viewer labels may still use `inspect/audit` wording in small pockets

### 2. Legacy FAQ Route
Status: resolved

Why it mattered:
- `/faq` was an outdated duplicate using heavy template/demo language

What was done:
- converted `/faq` to redirect to `/travel-guide/faq`

### 3. Verification CTA / Mobile Nav / Policy Hub Labels
Status: resolved

What was done:
- homepage verify CTA no longer says `Audit Our System`
- mobile nav no longer says `Audit Hub`
- policy hub label no longer says `Policy Registry`

## Medium-Priority Residual Placeholder Zones

### 4. Verify Hub Supporting Components
Files to review next if needed:
- `src/components/AssetViewer.tsx`
- `src/components/AuditTrail.tsx`
- `src/components/AuditStamp.tsx`

Why:
- these are reusable primitives and still carry `audit` naming internally
- not all of that is wrong, but some labels are still more demo-like than product-like

Rule:
- do not rename the entire primitive system unless user-facing copy is affected
- only adjust labels that are actually rendered and visible

### 5. Team Card / Partner Highlight / Transparency Components
Files flagged by scan:
- `src/components/team/TeamCard.tsx`
- `src/components/home/PartnerHighlight.tsx`
- `src/components/home/TransparencyHub.tsx`
- `src/components/home/TrustStack.tsx`

Why:
- these still contain terms like `registry`, `audit`, `cryptographic`, `forensic`

Risk assessment:
- some may be inactive or secondary
- they should be checked against actual route usage before editing

## Low-Priority / Internal-Only Residuals
- types and internal variable names such as `ProofVault`, `auditLogs`, `AuditTrail`
- these are not a user-facing problem by themselves
- do not spend time renaming internals unless they block clarity in visible UI

## Recommended Next Batch
One batch only:

1. Route-usage check for flagged components
2. Clean only the user-facing components still leaking template/demo wording
3. Re-run preview and stop

## Do Not Do
- do not redesign layouts
- do not reopen architecture
- do not chase internal naming just because the scan found it
- do not touch components unless they are visible on active routes
