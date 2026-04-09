import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/why-jvto/reviews', {
  title: 'JVTO Reviews & Independent References | Java Volcano Tour Operator',
  description:
    'Cross-check JVTO reviews on independent platforms and use them alongside legal, safety, and history proof before choosing a route.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
