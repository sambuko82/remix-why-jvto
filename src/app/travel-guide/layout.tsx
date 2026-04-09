import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/travel-guide', {
  title: 'Travel Guide | Booking, Weather & Screening | Java Volcano Tour Operator',
  description:
    'Prepare for a JVTO route with booking information, Ijen screening, packing guidance, weather realities, police escort context, and FAQs.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
