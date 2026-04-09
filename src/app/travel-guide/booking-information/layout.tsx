import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/travel-guide/booking-information', {
  title: 'Booking Information | Travel Guide | Java Volcano Tour Operator',
  description:
    'How JVTO booking works: deposits, final payment, confirmation flow, travel credit rules, and private-route handling.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
