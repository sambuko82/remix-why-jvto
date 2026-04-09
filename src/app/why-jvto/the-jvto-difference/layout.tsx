import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/why-jvto/the-jvto-difference', {
  title: 'The JVTO Difference | Private Route Standards | Java Volcano Tour Operator',
  description:
    'Compare the operating standards that make JVTO different: private-only handling, proof before payment, route clarity, and Ijen screening built into the plan.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
