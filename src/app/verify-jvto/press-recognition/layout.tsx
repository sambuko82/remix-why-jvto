import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/verify-jvto/press-recognition', {
  title: 'Press & Recognition | Verify JVTO | Java Volcano Tour Operator',
  description:
    'Public references, media mentions, and supporting recognition connected to JVTO and its East Java operations.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
