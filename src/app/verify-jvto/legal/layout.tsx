import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/verify-jvto/legal', {
  title: 'Legal Proof | Verify JVTO | Java Volcano Tour Operator',
  description: 'Business permits, operator records, and legal documents behind Java Volcano Tour Operator.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
