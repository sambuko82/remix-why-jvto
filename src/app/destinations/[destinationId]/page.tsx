import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DestinationDetail from '../Detail';
import { getDestinationBySlug } from '../../../lib/destinations-data';
import { buildPageMetadata } from '../../../lib/page-metadata';

type DestinationDetailPageProps = {
  params: Promise<{
    destinationId: string;
  }>;
};

export async function generateMetadata({ params }: DestinationDetailPageProps): Promise<Metadata> {
  const { destinationId } = await params;
  const destination = await getDestinationBySlug(destinationId);

  if (!destination) {
    return buildPageMetadata(`/destinations/${destinationId}`, {
      title: 'Destination',
      description: 'East Java destination briefing from Java Volcano Tour Operator.',
    });
  }

  return buildPageMetadata(`/destinations/${destination.slug}`, {
    title: destination.name,
    description: destination.summary,
  });
}

export default async function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const { destinationId } = await params;
  const destination = await getDestinationBySlug(destinationId);

  if (!destination) notFound();

  return <DestinationDetail destination={destination} />;
}
