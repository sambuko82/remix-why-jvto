import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/why-jvto/our-story', {
  title: 'Our Story | Documented JVTO History | Java Volcano Tour Operator',
  description:
    'Documented continuity behind JVTO: founding history, earlier tourism records, guidebook traces, and long-running East Java operating context.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
