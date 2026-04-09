import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/travel-guide/faq', {
  title: 'FAQ | Travel Guide | Java Volcano Tour Operator',
  description:
    'Common JVTO questions about routes, booking, screening, weather, and what to expect before departure.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
