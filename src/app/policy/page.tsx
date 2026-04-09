import type { Metadata } from 'next';
import { HubPageShell } from '@/components/hubs/HubPageShell';
import { buildPageMetadata } from '@/lib/page-metadata';
import { policyHubCards } from '@/lib/secondary-content';
import { SSOT } from '@/lib/ssot';

const route = '/policy';
const meta = SSOT.pages[route];

export const metadata: Metadata = buildPageMetadata(route, {
  title: 'JVTO Policy Pack | Java Volcano Tour Operator',
  description:
    'Booking, inclusion, privacy, and support policies that clarify how JVTO routes are funded, handled, and documented.',
});

export default function PolicyHubPage() {
  return (
    <HubPageShell
      backHref="/"
      backLabel="Back to home"
      protocolLabel="Policy Layer"
      eyebrow="Policy pack"
      title={meta?.h1 || 'JVTO Policy Pack'}
      description="This is the policy layer for booking, scope, and guest data handling. Read it alongside route pages and the travel guide so the commercial and operational boundaries stay visible before payment."
      cards={[...policyHubCards]}
      aside={{
        eyebrow: 'Support route',
        title: 'Use this with the travel guide',
        description:
          'Policy explains the boundaries. The travel guide explains how the route is actually prepared, screened, and executed.',
        href: '/travel-guide',
        cta: 'Open Travel Guide',
      }}
      bottomCallout={{
        eyebrow: 'Decision path',
        title: 'Still comparing packages?',
        description:
          'Return to tours once the financial and practical rules are clear so the route decision stays grounded in the real operating model.',
        href: '/tours',
        cta: 'Open Tours',
      }}
    />
  );
}
