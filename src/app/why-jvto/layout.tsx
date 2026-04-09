import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/why-jvto', {
  title: 'Why JVTO | Tourist Police-Led Private Volcano Operator | Java Volcano Tour Operator',
  description:
    'Why JVTO feels operationally different: Tourist Police-led handling, private-only routes, doctor-backed Ijen screening, documented history, and visible proof before payment.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
