import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/travel-guide/safety-on-tours', {
  title: 'Safety on Tours | Travel Guide | Java Volcano Tour Operator',
  description:
    'JVTO route-safety standards, gear expectations, crew handling, and emergency response logic for East Java private tours.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
