import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/why-jvto/community-standards', {
  title: 'Community Standards & Supporting Network | Java Volcano Tour Operator',
  description:
    'Understand the standards, supporting affiliations, and partner context behind JVTO operations in East Java.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
