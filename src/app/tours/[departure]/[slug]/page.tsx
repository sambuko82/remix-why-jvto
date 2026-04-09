import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TourDetail from '../../Detail';
import { getOriginFromDepartureSegment, getTourBySlug } from '../../../../lib/tours-data';
import { buildPageMetadata } from '../../../../lib/page-metadata';

type TourDetailPageProps = {
  params: Promise<{
    departure: string;
    slug: string;
  }>;
};

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
  const { departure, slug } = await params;
  const origin = getOriginFromDepartureSegment(departure);

  if (!origin) {
    return buildPageMetadata(`/tours/${departure}/${slug}`, {
      title: 'Tour',
      description: 'Private East Java route briefing from Java Volcano Tour Operator.',
    });
  }

  const tour = await getTourBySlug(origin, slug);

  if (!tour) {
    return buildPageMetadata(`/tours/${departure}/${slug}`, {
      title: 'Tour',
      description: 'Private East Java route briefing from Java Volcano Tour Operator.',
    });
  }

  return buildPageMetadata(tour.href, {
    title: tour.name,
    description: tour.summary,
  });
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { departure, slug } = await params;
  const origin = getOriginFromDepartureSegment(departure);

  if (!origin) notFound();

  const tour = await getTourBySlug(origin, slug);

  if (!tour) notFound();

  return <TourDetail tour={tour} />;
}
