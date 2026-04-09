import type { Metadata } from 'next';
import { getDestinations } from '../../lib/destinations-data';
import { buildPageMetadata } from '../../lib/page-metadata';
import DestinationsHub from './Hub';

export const dynamic = 'force-dynamic';

export function generateMetadata(): Metadata {
  return buildPageMetadata('/destinations', {
    title: 'East Java Destinations',
    description:
      'Browse Mount Bromo, Ijen Crater, Tumpak Sewu, Madakaripura, and other East Java route nodes handled by JVTO.',
  });
}

export default async function DestinationsPage() {
  const destinations = await getDestinations();
  return <DestinationsHub destinations={destinations} />;
}
