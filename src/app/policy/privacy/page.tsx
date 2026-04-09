import type { Metadata } from 'next';
import { HubSubpageShell } from '@/components/hubs/HubSubpageShell';
import { buildPageMetadata } from '@/lib/page-metadata';
import { privacyContent } from '@/lib/secondary-content';
import { SSOT } from '@/lib/ssot';

const route = '/policy/privacy';
const meta = SSOT.pages[route];

export const metadata: Metadata = buildPageMetadata(route, {
  title: 'Privacy Policy | Java Volcano Tour Operator',
  description:
    'How JVTO handles guest data used for permits, health screening, route coordination, and booking communication.',
});

export default function PrivacyPolicyPage() {
  return (
    <HubSubpageShell
      backHref="/policy"
      backLabel="Back to Policy Pack"
      protocolLabel="Policy Pack"
      eyebrow="Data handling"
      title={meta?.h1 || 'Privacy Policy'}
      description="Use this page to understand how guest information is handled in the booking and route-delivery process. The standard should be narrow, purpose-bound, and tied directly to the route being operated."
      summaryCards={[...privacyContent.summaryCards]}
      sections={[...privacyContent.sections]}
      readNext={[
        {
          eyebrow: 'Guide',
          title: 'Booking information',
          description: 'Read the booking flow to see where guest data enters the route-handling process.',
          href: '/travel-guide/booking-information',
        },
        {
          eyebrow: 'Health',
          title: 'Ijen health screening',
          description: 'Open the screening page if the route includes a medical or QR-verification layer.',
          href: '/travel-guide/ijen-health-screening',
        },
        {
          eyebrow: 'Terms',
          title: 'Booking policy',
          description: 'Use the policy pack when you need the legal and financial side of the booking process.',
          href: '/policy/booking-payment-cancellation',
        },
      ]}
    />
  );
}
