import type { Metadata } from 'next';
import { HubSubpageShell } from '@/components/hubs/HubSubpageShell';
import { buildPageMetadata } from '@/lib/page-metadata';
import { bookingPolicyContent } from '@/lib/secondary-content';
import { SSOT } from '@/lib/ssot';

const route = '/policy/booking-payment-cancellation';
const meta = SSOT.pages[route];

export const metadata: Metadata = buildPageMetadata(route, {
  title: 'Booking, Payment & Cancellation Policy | Java Volcano Tour Operator',
  description: 'Deposits, balance timing, travel credit, and booking change rules for JVTO private routes.',
});

export default function BookingPaymentCancellationPage() {
  return (
    <HubSubpageShell
      backHref="/policy"
      backLabel="Back to Policy Pack"
      protocolLabel="Policy Pack"
      eyebrow="Booking terms"
      title={meta?.h1 || 'Booking, Payment & Cancellation Policy'}
      description="Use this page to understand the payment sequence, route-change boundaries, and Travel Credit logic before money moves. It is designed to reduce ambiguity around planning, not create it."
      summaryCards={[...bookingPolicyContent.summaryCards]}
      sections={[...bookingPolicyContent.sections]}
      readNext={[
        {
          eyebrow: 'Guide',
          title: 'Booking information',
          description: 'Read the guest-facing booking flow that sits in front of the formal policy.',
          href: '/travel-guide/booking-information',
        },
        {
          eyebrow: 'Scope',
          title: 'Inclusions & exclusions',
          description: 'Check what the route normally covers and what should never be assumed.',
          href: '/policy/inclusions-exclusions',
        },
        {
          eyebrow: 'Conditions',
          title: 'Weather & closures',
          description: 'Use this if you are testing what happens when access or conditions change.',
          href: '/travel-guide/weather-and-closures',
        },
      ]}
      footerCallout={{
        eyebrow: 'Decision path',
        title: 'Compare the route before you commit to payment.',
        description:
          'Policy works best when it sits beside the route page and the travel guide. Open the tours layer if you still need to shortlist the right package.',
        href: '/tours',
        cta: 'Open Tours',
      }}
    />
  );
}
