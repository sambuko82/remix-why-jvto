import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/verify-jvto', {
  title: 'Verify JVTO | Legal, Safety & History Proof | Java Volcano Tour Operator',
  description:
    'Check JVTO legal records, police-safety context, screening evidence, history artifacts, press references, and supporting affiliations before payment.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
