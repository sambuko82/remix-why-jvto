import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '../../../lib/page-metadata';

export const metadata: Metadata = buildPageMetadata('/why-jvto/safety-leadership', {
  title: 'Safety Leadership | Why JVTO | Java Volcano Tour Operator',
  description:
    'How Tourist Police-led oversight shapes JVTO route handling, safety decisions, and field discipline across East Java private volcano tours.',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
