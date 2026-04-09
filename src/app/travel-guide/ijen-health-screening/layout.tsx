import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/travel-guide/ijen-health-screening', {
  title: 'Ijen Health Screening | Travel Guide | Java Volcano Tour Operator',
  description:
    'Mandatory Ijen medical screening explained: vital checks, fit-to-climb clearance, and how JVTO handles pre-ascent safety.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
