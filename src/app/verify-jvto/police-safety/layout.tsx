import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/verify-jvto/police-safety', {
  title: 'Police & Safety Proof | Verify JVTO | Java Volcano Tour Operator',
  description:
    'Police coordination context, safety-related records, and field evidence tied to JVTO route handling in East Java.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
