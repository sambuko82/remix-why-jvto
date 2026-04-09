import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/travel-guide/packing-and-fitness', {
  title: 'Packing & Fitness | Travel Guide | Java Volcano Tour Operator',
  description:
    'What to pack and how fit you need to be for Bromo, Ijen, Tumpak Sewu, and other JVTO routes in East Java.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
