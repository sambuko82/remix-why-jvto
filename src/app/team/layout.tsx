import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/team', {
  title: 'JVTO Field Team | Guides, Drivers & Route Crew | Java Volcano Tour Operator',
  description:
    'Meet the field team behind JVTO routes: guides, drivers, and support crew handling East Java private tours on the ground.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
