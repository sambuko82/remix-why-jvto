import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/travel-guide/weather-and-closures', {
  title: 'Weather & Closures | Travel Guide | Java Volcano Tour Operator',
  description:
    'Live route context for East Java volcano tours: weather realities, closure logic, and why MAGMA-backed access checks belong before booking assumptions.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
