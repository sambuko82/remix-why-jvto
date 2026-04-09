import type { Metadata } from 'next';
import { getTours } from '../../lib/tours-data';
import { buildPageMetadata } from '../../lib/page-metadata';
import ToursHub from './Hub';

export const dynamic = 'force-dynamic';

export function generateMetadata(): Metadata {
  return buildPageMetadata('/tours', {
    title: 'Private East Java Tours',
    description:
      'Browse private East Java volcano and overland routes from Surabaya and Bali with JVTO safety-first handling.',
  });
}

export default async function ToursPage() {
  const tours = await getTours();
  return <ToursHub tours={tours} />;
}
