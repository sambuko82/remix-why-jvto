import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/verify-jvto/history-artifacts', {
  title: 'History Proof | Verify JVTO | Java Volcano Tour Operator',
  description: 'Archived records, early references, and continuity artifacts that document JVTO operating history.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
