import { cache } from 'react';
import { SSOT } from './ssot';
import { absoluteAsset, getPool, isConnectivityError, markDbUnavailable } from './jvto-source';

export type DestinationListItem = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  highlight: string;
  category: string;
  duration: string;
  difficulty: string;
  bestTime: string;
  image: string;
  imageContext?: string;
  href: string;
};

export type DestinationDetailData = DestinationListItem & {
  description: string;
  terrain: string;
  temperatureRange: string;
  physicalRequirements: string;
  culturalContext: string;
  safetyNotes: string[];
  safetySummary: string;
  keyHighlights: string[];
  requiredGear: string[];
  images: string[];
  relatedTours: Array<{
    id: string;
    name: string;
    href: string;
    duration: string;
    price: string;
  }>;
};

type DbDestinationRow = {
  id: string | number;
  slug: string;
  name: string;
  summary: string | null;
  description: string | null;
  highlight: string | null;
  category: string | null;
  duration: string | null;
  difficulty_level: string | null;
  best_time_to_visit: string | null;
  terrain: string | null;
  temperature_range: string | null;
  physical_requirements: string | null;
  cultural_context: string | null;
  safety_notes: unknown;
  key_highlights: unknown;
  required_gear: unknown;
  image_url: string | null;
};

const LEGACY_DESTINATION_DETAILS: Record<string, Partial<DestinationDetailData>> = {
  'ijen-crater': {
    description: "The world's largest acidic crater lake and the home of the rare blue fire phenomenon.",
    keyHighlights: ['Blue Fire Phenomenon', 'Acidic Crater Lake', 'Sulfur Miners', 'Sunrise Views'],
    safetySummary: 'Mandatory health screening required. Gas masks provided.',
    images: [
      'https://javavolcano-touroperator.com/screening/ijen-screening-hotel-01.jpeg',
      'https://javavolcano-touroperator.com/ops/ijen-geopark-briefing.png',
      'https://javavolcano-touroperator.com/screening/ijen-screening-hotel-01.jpeg',
    ],
  },
  'mount-bromo': {
    description: 'The most iconic sunrise in Indonesia, featuring an active volcano in a vast sea of sand.',
    keyHighlights: ['Sunrise at Penanjakan', 'Bromo Crater Hike', 'Sea of Sand', 'Luhur Poten Temple'],
    safetySummary: 'Active volcano monitoring. Safe viewing zones enforced.',
    images: [
      'https://javavolcano-touroperator.com/ops/jvto-police-escort-arrival-hotel-bondowoso-day.jpg',
      'https://javavolcano-touroperator.com/ops/group-at-jvto-office.jpg',
      'https://javavolcano-touroperator.com/ops/jvto-police-escort-arrival-hotel-bondowoso-day.jpg',
    ],
  },
  'tumpak-sewu-waterfall': {
    description: 'A thousand waterfalls cascading down a semicircular cliff. A true hidden paradise.',
    keyHighlights: ['Panorama Viewpoint', 'Bottom of the Falls Hike', 'Goa Tetes Cave', 'River Trekking'],
    safetySummary: 'Slippery terrain. Professional guides mandatory.',
    images: [
      'https://javavolcano-touroperator.com/ops/baratha-hotel-departure-team.jpg',
      'https://javavolcano-touroperator.com/ops/baratha-hotel-departure-team.jpg',
    ],
  },
  'madakaripura-waterfall': {
    description: 'The eternal waterfall, believed to be the meditation place of Gajah Mada.',
    keyHighlights: ['Eternal Waterfall', 'Deep Canyon Trek', 'Gajah Mada Statue', 'Sacred Atmosphere'],
    safetySummary: 'Wet conditions. Raincoats and waterproof gear recommended.',
    images: [
      'https://javavolcano-touroperator.com/ops/ijen-geopark-briefing.png',
      'https://javavolcano-touroperator.com/ops/ijen-geopark-briefing.png',
    ],
  },
  'papuma-beach': {
    description: 'White sands and dramatic rock formations on the southern coast of Jember.',
    keyHighlights: ['White Sand Beach', 'Rock Formations', 'Sunset Views', 'Local Seafood'],
    safetySummary: 'Strong southern currents. Swimming only in designated areas.',
    images: [
      'https://javavolcano-touroperator.com/ops/group-at-jvto-office.jpg',
      'https://javavolcano-touroperator.com/ops/group-at-jvto-office.jpg',
    ],
  },
};

const FALLBACK_DESTINATIONS: DestinationDetailData[] = SSOT.destinations.map((dest) => {
  const extra = LEGACY_DESTINATION_DETAILS[dest.slug] ?? {};
  const fallbackImage = dest.image || '';

  return {
    id: dest.slug,
    slug: dest.slug,
    name: dest.name,
    summary: extra.description?.split('.').at(0)?.trim() || dest.highlight,
    description: extra.description || dest.highlight,
    highlight: dest.highlight,
    category: dest.name.toLowerCase().includes('beach')
      ? 'Beach'
      : dest.name.toLowerCase().includes('waterfall')
        ? 'Waterfall'
        : 'Volcano',
    duration: dest.name.toLowerCase().includes('waterfall') || dest.name.toLowerCase().includes('beach') ? '1 Day' : '1-2 Days',
    difficulty: dest.slug === 'tumpak-sewu-waterfall' ? 'Demanding' : 'Moderate',
    bestTime: 'Dry season mornings',
    terrain: 'Field conditions vary by weather and route access.',
    temperatureRange: 'Variable mountain and tropical conditions',
    physicalRequirements: 'Route suitability depends on pace, footing, and the exact sequence combined with your package.',
    culturalContext: 'This destination should be understood inside the wider East Java route context, not as an isolated postcard stop.',
    safetyNotes: extra.safetySummary ? [extra.safetySummary] : ['Operational safety rules apply on all active route zones.'],
    safetySummary: extra.safetySummary || 'Operational safety rules apply on all active route zones.',
    keyHighlights: extra.keyHighlights || [dest.highlight],
    requiredGear: ['Closed shoes', 'Light layer', 'Personal medication'],
    image: fallbackImage,
    imageContext: dest.imageContext,
    images: (extra.images && extra.images.length > 0 ? extra.images : [fallbackImage]).filter(Boolean),
    href: dest.route,
    relatedTours: [],
  };
});

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item).trim()).filter(Boolean);
}

function asHighlightArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (typeof item === 'string') return item.trim();
      if (item && typeof item === 'object' && 'title' in item) return String(item.title).trim();
      return '';
    })
    .filter(Boolean);
}

function formatPrice(value: number | null) {
  return typeof value === 'number' && value > 0 ? `From IDR ${value.toLocaleString('id-ID')}` : 'Price on request';
}

function serializeDestination(row: DbDestinationRow): DestinationListItem {
  const legacy = SSOT.destinations.find((dest) => dest.slug === row.slug);

  return {
    id: String(row.id),
    slug: row.slug,
    name: row.name,
    summary: row.summary?.trim() || row.description?.split('.').at(0)?.trim() || row.highlight?.trim() || row.name,
    highlight: row.highlight?.trim() || row.category?.trim() || 'East Java route node',
    category: row.category?.trim() || 'Destination',
    duration: row.duration?.trim() || '1 Day',
    difficulty: row.difficulty_level?.trim() || 'Variable',
    bestTime: row.best_time_to_visit?.trim() || 'Season-dependent',
    image: absoluteAsset(row.image_url) || legacy?.image || '',
    imageContext: legacy?.imageContext,
    href: `/destinations/${row.slug}`,
  };
}

async function getDestinationsFromDb() {
  const db = getPool();
  if (!db) return null;

  const result = await db.query<DbDestinationRow>(
    `
      select
        d.id,
        d.slug,
        d.name,
        d.summary,
        d.description,
        d.highlight,
        d.category,
        d.duration,
        d.difficulty_level,
        d.best_time_to_visit,
        d.terrain,
        d.temperature_range,
        d.physical_requirements,
        d.cultural_context,
        d.safety_notes,
        d.key_highlights,
        d.required_gear,
        coalesce(primary_asset.url, d.featured_image, d.thumbnail_url) as image_url
      from destinations d
      left join lateral (
        select a.url
        from destination_assets da
        join assets a on a.id = da.asset_id
        where da.destination_id = d.id
          and a.type = 'image'
          and coalesce(a.is_active, true) = true
        order by case when da.type = 'primary' then 0 else 1 end, da.id asc
        limit 1
      ) primary_asset on true
      where coalesce(d.published, false) = true
        and d.deleted_at is null
        and d.slug is not null
        and d.id not in (3, 4)
      order by coalesce(d.featured, false) desc, d.id asc
    `,
  );

  return result.rows;
}

async function getDestinationDetailFromDb(slug: string) {
  const rows = await getDestinationsFromDb();
  if (!rows) return null;

  const row = rows.find((item) => item.slug === slug);
  if (!row) return null;

  const db = getPool();
  if (!db) return null;

  const [relatedToursResult, galleryAssetsResult] = await Promise.all([
    db.query<{
      id: string | number;
      name: string;
      slug: string;
      day: number | null;
      night: number | null;
      min_price: number | null;
    }>(
      `
        select
          p.id,
          p.name,
          p.slug,
          dur.day,
          dur.night,
          min(pp.price) as min_price
        from package_destinations pd
        join packages p on p.id = pd.package_id
        left join durations dur on dur.id = p.duration_id
        left join package_prices pp on pp.package_id = p.id
        where pd.destination_id = $1
          and coalesce(p.is_publish, false) = true
          and p.deleted_at is null
        group by p.id, p.name, p.slug, dur.day, dur.night
        order by coalesce(dur.day, 99) asc, p.id asc
        limit 3
      `,
      [row.id],
    ),
    db.query<{ url: string }>(
      `
        select a.url
        from destination_assets da
        join assets a on a.id = da.asset_id
        where da.destination_id = $1
          and a.type = 'image'
          and coalesce(a.is_active, true) = true
        order by case when da.type = 'primary' then 0 else 1 end, da.id asc
      `,
      [row.id],
    ),
  ]);

  const base = serializeDestination(row);
  const legacy = LEGACY_DESTINATION_DETAILS[slug];
  const safetyNotes = asStringArray(row.safety_notes);
  const keyHighlights = asHighlightArray(row.key_highlights);
  const requiredGear = asStringArray(row.required_gear);
  const galleryImages = galleryAssetsResult.rows
    .map((asset) => absoluteAsset(asset.url))
    .filter((image, index, list) => Boolean(image) && list.indexOf(image) === index);
  const fallbackImages = legacy?.images || [];

  return {
    ...base,
    description: row.description?.trim() || legacy?.description || base.summary,
    terrain: row.terrain?.trim() || 'Field conditions vary by weather and route access.',
    temperatureRange: row.temperature_range?.trim() || 'Variable mountain and tropical conditions',
    physicalRequirements:
      row.physical_requirements?.trim() ||
      'Route suitability depends on pace, footing, and the exact sequence combined with your package.',
    culturalContext:
      row.cultural_context?.trim() ||
      'This destination should be understood in the wider East Java route context, not as an isolated postcard stop.',
    safetyNotes: safetyNotes.length > 0 ? safetyNotes : legacy?.safetySummary ? [legacy.safetySummary] : [],
    safetySummary:
      safetyNotes[0] ||
      legacy?.safetySummary ||
      'Operational safety rules apply on all active route zones.',
    keyHighlights: keyHighlights.length > 0 ? keyHighlights : legacy?.keyHighlights || [base.highlight],
    requiredGear: requiredGear.length > 0 ? requiredGear : ['Closed shoes', 'Light layer', 'Personal medication'],
    images:
      galleryImages.length > 0
        ? galleryImages
        : [base.image, ...fallbackImages].filter(
            (image, index, list) => Boolean(image) && list.indexOf(image) === index,
          ),
    relatedTours: relatedToursResult.rows.map((tour) => ({
      id: String(tour.id),
      name: tour.name,
      href: `/${tour.slug.replace(/^\/+/, '')}`,
      duration: `${tour.day ?? 0}D / ${tour.night ?? 0}N`,
      price: formatPrice(tour.min_price),
    })),
  } satisfies DestinationDetailData;
}

function getFallbackList() {
  return FALLBACK_DESTINATIONS.map(({ description, terrain, temperatureRange, physicalRequirements, culturalContext, safetyNotes, safetySummary, keyHighlights, requiredGear, images, relatedTours, ...item }) => item);
}

const getDestinationsUncached = async (): Promise<DestinationListItem[]> => {
  try {
    const rows = await getDestinationsFromDb();
    if (rows && rows.length > 0) return rows.map(serializeDestination);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (isConnectivityError(error)) markDbUnavailable(error);
    console.warn(`[destinations-data] falling back to bundled destinations: ${message}`);
  }

  return getFallbackList();
};

const getDestinationBySlugUncached = async (slug: string): Promise<DestinationDetailData | null> => {
  try {
    const row = await getDestinationDetailFromDb(slug);
    if (row) return row;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (isConnectivityError(error)) markDbUnavailable(error);
    console.warn(`[destinations-data] falling back to bundled destination for ${slug}: ${message}`);
  }

  return FALLBACK_DESTINATIONS.find((item) => item.slug === slug) || null;
};

export const getDestinations = cache(getDestinationsUncached);

export const getDestinationBySlug = cache(getDestinationBySlugUncached);
