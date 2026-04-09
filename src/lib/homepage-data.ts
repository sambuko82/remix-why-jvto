import { cache } from 'react';
import { SSOT } from './ssot';
import { getDestinations } from './destinations-data';
import { getTours } from './tours-data';
import { getPool, isConnectivityError, markDbUnavailable } from './jvto-source';
import { getLatestBromoMagmaFeed, getLatestIjenMagmaFeed } from './magma';

export type HomeHeroData = {
  eyebrow: string;
  title: string;
  description: string;
  founderImage: string;
  founderAlt: string;
};

export type HomeDestinationItem = {
  id: string;
  name: string;
  highlight: string;
  image: string;
  route: string;
};

export type HomeTourCard = {
  id: string;
  name: string;
  price: string;
  image: string;
  route: string;
  crewName?: string;
};

export type HomeDepartureItem = {
  id: 'surabaya' | 'bali';
  name: string;
  shortName: string;
  highlight: string;
  description: string;
  tours: HomeTourCard[];
};

export type HomeVolcanoSignal = {
  id: string;
  eyebrow: string;
  name: string;
  level: string;
  summary: string;
  updatedLabel: string;
};

export type HomePageViewData = {
  seo: {
    title: string;
    description: string;
  };
  hero: HomeHeroData;
  destinations: HomeDestinationItem[];
  departures: HomeDepartureItem[];
  volcanoSignals: HomeVolcanoSignal[];
};

const destinationHighlightMap: Record<string, string> = {
  'mount-bromo': 'Sunrise over Tengger Caldera',
  'ijen-crater': 'Blue fire phenomenon, acidic crater lake',
  'kawah-ijen': 'Blue fire phenomenon, acidic crater lake',
  'tumpak-sewu-waterfall': 'Thousand-stream waterfall, Semeru backdrop',
  'madakaripura-waterfall': 'Sacred 200m canyon waterfall',
  'papuma-beach': 'White sand beach with rock formations',
};

const fallbackData: HomePageViewData = {
  seo: {
    title: 'Tourist Police-Led Private Volcano Tours in East Java | Java Volcano Tour Operator',
    description:
      'Private Bromo, Ijen & Tumpak Sewu tours from Surabaya or Bali. Tourist Police-led operator, doctor-backed Ijen screening, private-only routes, and proof before payment.',
  },
  hero: {
    eyebrow: 'Verified Police-Led Operator',
    title: 'Private Volcano Tours',
    description:
      'Private Bromo, Ijen, and East Java route planning with police-led context, doctor-backed Ijen screening, visible operator proof, and support before payment.',
    founderImage:
      SSOT.assets.find((asset) => asset.slug === 'jvto-hero-image')?.url ??
      'https://javavolcano-touroperator.com/assets/img/hero/home.webp',
    founderAlt:
      SSOT.assets.find((asset) => asset.slug === 'jvto-hero-image')?.alt ??
      'Scenic view of Java volcanoes.',
  },
  destinations: SSOT.destinations.map((dest) => ({
    id: dest.slug,
    name: dest.name,
    highlight: dest.highlight,
    image: dest.image,
    route: dest.route,
  })),
  departures: [
    {
      id: 'surabaya',
      name: 'Departing from Surabaya',
      shortName: 'Surabaya',
      highlight: '1D – 6D Expeditions',
      description: 'Direct access from Juanda International Airport (SUB). Ideal for multi-volcano circuits.',
      tours: SSOT.tours.filter((tour) => tour.route.includes('surabaya')).slice(0, 6).map((tour, index) => ({
        id: `surabaya-${index}`,
        name: tour.name,
        price: tour.price,
        image: tour.image,
        route: tour.route,
        crewName: tour.crewName,
      })),
    },
    {
      id: 'bali',
      name: 'Departing from Bali',
      shortName: 'Bali',
      highlight: '3D – 5D Expeditions',
      description: 'Seamless overland and ferry transfers from your Bali hotel to the volcanic heart of Java.',
      tours: SSOT.tours.filter((tour) => tour.route.includes('bali')).slice(0, 6).map((tour, index) => ({
        id: `bali-${index}`,
        name: tour.name,
        price: tour.price,
        image: tour.image,
        route: tour.route,
        crewName: tour.crewName,
      })),
    },
  ],
  volcanoSignals: [
    {
      id: 'bromo',
      eyebrow: 'Volcano status',
      name: 'Mount Bromo',
      level: 'Level I',
      summary: 'MAGMA monitoring active. Check the live route conditions page before fixing expectations around sunrise and access.',
      updatedLabel: 'Fallback monitoring summary',
    },
    {
      id: 'ijen',
      eyebrow: 'Volcano status',
      name: 'Kawah Ijen',
      level: 'Level I',
      summary: 'MAGMA monitoring active. Check the live route conditions page before treating Ijen access as fixed.',
      updatedLabel: 'Fallback monitoring summary',
    },
  ],
};

async function getHomepageSeoFromDb() {
  const db = getPool();
  if (!db) return null;

  const result = await db.query<{
    title: string | null;
    description: string | null;
  }>(
    `
      select
        seo->>'title' as title,
        seo->>'description' as description
      from content_pages
      where route = '/'
        and coalesce(is_active, true) = true
      order by updated_at desc nulls last
      limit 1
    `,
  );

  return result.rows[0] ?? null;
}

async function getHomepageDestinations() {
  const destinations = await getDestinations();

  return destinations.slice(0, 8).map((destination) => ({
    id: destination.id,
    name: destination.name,
    highlight: destinationHighlightMap[destination.slug] ?? destination.highlight ?? 'Operational zone',
    image: destination.image || fallbackData.destinations.find((item) => item.id === destination.slug)?.image || '',
    route: destination.href,
  }));
}

async function getHomepageTours() {
  const rows = await getTours();

  const byFamily = (family: 'surabaya' | 'bali'): HomeDepartureItem => ({
    id: family,
    name: family === 'bali' ? 'Departing from Bali' : 'Departing from Surabaya',
    shortName: family === 'bali' ? 'Bali' : 'Surabaya',
    highlight: family === 'bali' ? '3D – 5D Expeditions' : '1D – 6D Expeditions',
    description:
      family === 'bali'
        ? 'Seamless overland and ferry transfers from your Bali hotel to the volcanic heart of Java.'
        : 'Direct access from Juanda International Airport (SUB). Ideal for multi-volcano circuits.',
    tours: rows
      .filter((row) => row.origin === family)
      .slice(0, 6)
      .map((tour) => ({
        id: tour.id,
        name: tour.name,
        price: tour.price,
        image: tour.image,
        route: tour.href,
        crewName: tour.crewName,
      })),
  });

  return [byFamily('surabaya'), byFamily('bali')].filter((departure) => departure.tours.length > 0);
}

async function getHomepageVolcanoSignals() {
  try {
    const [bromoResult, ijenResult] = await Promise.allSettled([
      getLatestBromoMagmaFeed(),
      getLatestIjenMagmaFeed(),
    ]);

    const bromo = bromoResult.status === 'fulfilled' ? bromoResult.value : null;
    const ijen = ijenResult.status === 'fulfilled' ? ijenResult.value : null;

    return [
      {
        id: 'bromo',
        eyebrow: 'Volcano status',
        name: 'Mount Bromo',
        level: bromo?.latestReport?.level || fallbackData.volcanoSignals[0].level,
        summary:
          bromo?.latestReport?.visualObservation ||
          bromo?.recentReports[0]?.summary ||
          fallbackData.volcanoSignals[0].summary,
        updatedLabel: bromo?.recentReports[0]?.authorDate || fallbackData.volcanoSignals[0].updatedLabel,
      },
      {
        id: 'ijen',
        eyebrow: 'Volcano status',
        name: 'Kawah Ijen',
        level: ijen?.latestReport?.level || fallbackData.volcanoSignals[1].level,
        summary:
          ijen?.latestReport?.visualObservation ||
          ijen?.recentReports[0]?.summary ||
          fallbackData.volcanoSignals[1].summary,
        updatedLabel: ijen?.recentReports[0]?.authorDate || fallbackData.volcanoSignals[1].updatedLabel,
      },
    ] satisfies HomeVolcanoSignal[];
  } catch {
    return fallbackData.volcanoSignals;
  }
}

export const getHomepageViewData = cache(async (): Promise<HomePageViewData> => {
  try {
    const [seo, destinations, departures, volcanoSignals] = await Promise.all([
      getHomepageSeoFromDb(),
      getHomepageDestinations(),
      getHomepageTours(),
      getHomepageVolcanoSignals(),
    ]);

    return {
      seo: {
        title: seo?.title || fallbackData.seo.title,
        description: seo?.description || fallbackData.seo.description,
      },
      hero: fallbackData.hero,
      destinations: destinations?.length ? destinations : fallbackData.destinations,
      departures: departures?.length ? departures : fallbackData.departures,
      volcanoSignals,
    };
  } catch (error) {
    if (isConnectivityError(error)) {
      markDbUnavailable(error);
    }

    console.warn(
      `[homepage-data] falling back to bundled JVTO data: ${error instanceof Error ? error.message : String(error)}`,
    );
    return fallbackData;
  }
});
