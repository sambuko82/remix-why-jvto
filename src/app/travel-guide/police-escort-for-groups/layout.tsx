import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/travel-guide/police-escort-for-groups', {
  title: 'Police Escort for Groups | Travel Guide | Java Volcano Tour Operator',
  description:
    'When police escort support is relevant for JVTO groups, how coordination works, and how it fits into route handling.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
