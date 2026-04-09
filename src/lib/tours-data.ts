import { cache } from 'react';
import { SSOT } from './ssot';
import { absoluteAsset, getPool, isConnectivityError, markDbUnavailable } from './jvto-source';

export type TourOrigin = 'surabaya' | 'bali';

export type TechnicalDossier = {
  coordinates?: string;
  elevation?: string;
  difficulty?: string;
  risk_level?: string;
  equipment_check?: string[];
};

export type TourListItem = {
  id: string;
  name: string;
  slug: string;
  origin: TourOrigin;
  href: string;
  duration: string;
  price: string;
  image: string;
  summary: string;
  highlights: string[];
  crewName?: string;
};

export type TourDetailData = TourListItem & {
  originLabel: string;
  routeLabel: string;
  description: string;
  operationalNote: string;
  routeHandling: string;
  healthAccess: string;
  environmentalConditions: string;
  planningNotes: string[];
  healthRequirements: string[];
  environmentalRisks: string[];
  routeHandlingNotes: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: Array<{
    day: number;
    title: string;
    summary: string;
  }>;
  technicalDossier?: TechnicalDossier;
};

type DbPackageRow = {
  id: string | number;
  name: string;
  slug: string;
  description: string | null;
  highlights_bullets: string[] | null;
  operational_complexity_note: string | null;
  health_requirements: string[] | null;
  environmental_risks: string[] | null;
  safety_mitigation: string[] | null;
  handover_notes: string[] | null;
  day: number | null;
  night: number | null;
  min_price: number | null;
  image_url: string | null;
};

const ORIGIN_IDS: Record<TourOrigin, number> = {
  surabaya: 4,
  bali: 3,
};

function getOriginFromRoute(route: string): TourOrigin {
  return route.includes('/from-bali/') ? 'bali' : 'surabaya';
}

function getOriginLabel(origin: TourOrigin) {
  return origin === 'surabaya' ? 'From Surabaya' : 'From Bali';
}

function buildRouteLabel(slug: string) {
  const normalized = slug
    .split('/')
    .pop()
    ?.replace(/-\d+d\d+n$/i, '')
    .replace(/taman-safari-prigen/gi, 'taman_safari_prigen')
    .replace(/tumpak-sewu/gi, 'tumpak_sewu')
    .split('-')
    .filter(Boolean)
    .map((part) => {
      const restored = part.replace(/_/g, ' ');
      const dictionary: Record<string, string> = {
        ijen: 'Ijen',
        bromo: 'Bromo',
        madakaripura: 'Madakaripura',
        malang: 'Malang',
        papuma: 'Papuma',
        'tumpak sewu': 'Tumpak Sewu',
        'taman safari prigen': 'Taman Safari Prigen',
      };

      return dictionary[restored] || restored.replace(/\b\w/g, (char) => char.toUpperCase());
    });

  return normalized && normalized.length > 0 ? normalized.join(' -> ') : 'Private East Java Route';
}

function normalizeArray(value: string[] | null | undefined) {
  return Array.isArray(value)
    ? value.map((item) => item?.trim()).filter((item): item is string => Boolean(item))
    : [];
}

function formatPrice(value: number | null) {
  return typeof value === 'number' && value > 0
    ? `From IDR ${value.toLocaleString('id-ID')}`
    : 'Price on request';
}

function getDurationFromRoute(route: string) {
  const match = route.match(/(\d+)d(\d+)n/i);
  return match ? `${match[1]}D / ${match[2]}N` : 'Custom route';
}

function serializeLegacyTour(tour: (typeof SSOT.tours)[number]): TourDetailData {
  const origin = getOriginFromRoute(tour.route);

  return {
    id: tour.route,
    name: tour.name,
    slug: tour.route.split('/').pop() || tour.route,
    origin,
    originLabel: getOriginLabel(origin),
    href: tour.route,
    routeLabel: tour.overview?.route_meta || buildRouteLabel(tour.route),
    duration: getDurationFromRoute(tour.route),
    price: tour.price,
    image: tour.image,
    summary:
      tour.overview?.highlights?.[0] ||
      tour.overview?.route_meta ||
      'Private East Java route with controlled handling and clear operational framing.',
    description:
      tour.overview?.route_meta
        ? `${tour.name} follows ${tour.overview.route_meta} with private route handling and clear operational framing.`
        : `${tour.name} is a private East Java route operated with controlled pacing and clear pre-payment expectations.`,
    highlights: tour.overview?.highlights || [],
    crewName: tour.crewName,
    operationalNote:
      tour.overview?.highlights?.[0] ||
      'Pickup timing, rest windows, and onward transfers should be treated as part of the route, not as afterthoughts.',
    routeHandling:
      tour.overview?.route_meta ||
      'The route is handled privately so timing and safety decisions stay consistent for one group.',
    healthAccess:
      tour.requirements?.[0] ||
      'Readiness depends on pace, sleep, and honest mobility expectations before the route starts.',
    environmentalConditions:
      tour.technical_dossier?.risk_level ||
      'Mountain weather and local controls can change the exact route sequence and viewing conditions.',
    planningNotes:
      tour.itinerary?.map((item) => item.title).slice(0, 4) ||
      ['Pickup timing and route sequencing should be treated as part of the product.'],
    healthRequirements: tour.requirements || ['Check pace, sleep, and mobility honestly before confirming the route.'],
    environmentalRisks:
      tour.technical_dossier?.risk_level
        ? [tour.technical_dossier.risk_level]
        : ['Mountain weather and local controls can change access timing and viewing conditions.'],
    routeHandlingNotes:
      tour.technical_dossier?.equipment_check?.slice(0, 4) ||
      ['Private route handling keeps timing and safety decisions consistent for one group.'],
    inclusions: tour.includes || [],
    exclusions: tour.excludes || [],
    itinerary:
      tour.itinerary?.map((item) => ({
        day: item.day,
        title: item.title,
        summary: Array.isArray(item.activities) ? item.activities.join(' | ') : item.title,
      })) || [],
    technicalDossier: tour.technical_dossier,
  };
}

const FALLBACK_TOURS: Record<TourOrigin, TourDetailData[]> = {
  surabaya: SSOT.tours
    .filter((tour) => getOriginFromRoute(tour.route) === 'surabaya')
    .map(serializeLegacyTour),
  bali: SSOT.tours
    .filter((tour) => getOriginFromRoute(tour.route) === 'bali')
    .map(serializeLegacyTour),
};

function serializeListRow(origin: TourOrigin, row: DbPackageRow): TourListItem {
  const highlights = normalizeArray(row.highlights_bullets);
  const legacy = SSOT.tours.find((tour) => tour.route === `/${row.slug.replace(/^\/+/, '')}`);

  return {
    id: String(row.id),
    name: row.name,
    slug: row.slug.split('/').pop() || row.slug,
    origin,
    href: `/${row.slug.replace(/^\/+/, '')}`,
    duration: `${row.day ?? 0}D / ${row.night ?? 0}N`,
    price: formatPrice(row.min_price),
    image: absoluteAsset(row.image_url) || legacy?.image || FALLBACK_TOURS[origin][0]?.image || '',
    summary:
      row.description?.split('.').at(0)?.trim() ||
      highlights[0] ||
      'Private East Java route with controlled handling and clear operational framing.',
    highlights: highlights.slice(0, 3),
    crewName: legacy?.crewName,
  };
}

async function getToursFromDb(origin: TourOrigin) {
  const db = getPool();
  if (!db) return null;

  const result = await db.query<DbPackageRow>(
    `
      select
        p.id,
        p.name,
        p.slug,
        p.description,
        p.highlights_bullets,
        p.operational_complexity_note,
        p.health_requirements,
        p.environmental_risks,
        p.safety_mitigation,
        p.handover_notes,
        d.day,
        d.night,
        min(pp.price) as min_price,
        primary_asset.url as image_url
      from packages p
      left join durations d on d.id = p.duration_id
      left join package_prices pp on pp.package_id = p.id
      left join lateral (
        select a.url
        from package_assets pa
        join assets a on a.id = pa.asset_id
        where pa.package_id = p.id
          and a.type = 'image'
          and coalesce(a.is_active, true) = true
        order by case when coalesce(pa.is_primary, false) then 0 else 1 end, pa.id asc
        limit 1
      ) primary_asset on true
      where coalesce(p.is_publish, false) = true
        and p.deleted_at is null
        and p.start_destination_id = $1
      group by
        p.id,
        p.name,
        p.slug,
        p.description,
        p.highlights_bullets,
        p.operational_complexity_note,
        p.health_requirements,
        p.environmental_risks,
        p.safety_mitigation,
        p.handover_notes,
        d.day,
        d.night,
        primary_asset.url
      order by coalesce(d.day, 99) asc, p.id asc
    `,
    [ORIGIN_IDS[origin]],
  );

  return result.rows.map((row) => serializeListRow(origin, row));
}

async function getTourDetailFromDb(origin: TourOrigin, slug: string) {
  const db = getPool();
  if (!db) return null;

  const packageSlug = `tours/from-${origin}/${slug}`;
  const packageResult = await db.query<DbPackageRow>(
    `
      select
        p.id,
        p.name,
        p.slug,
        p.description,
        p.highlights_bullets,
        p.operational_complexity_note,
        p.health_requirements,
        p.environmental_risks,
        p.safety_mitigation,
        p.handover_notes,
        d.day,
        d.night,
        min(pp.price) as min_price,
        primary_asset.url as image_url
      from packages p
      left join durations d on d.id = p.duration_id
      left join package_prices pp on pp.package_id = p.id
      left join lateral (
        select a.url
        from package_assets pa
        join assets a on a.id = pa.asset_id
        where pa.package_id = p.id
          and a.type = 'image'
          and coalesce(a.is_active, true) = true
        order by case when coalesce(pa.is_primary, false) then 0 else 1 end, pa.id asc
        limit 1
      ) primary_asset on true
      where p.slug = $1
        and coalesce(p.is_publish, false) = true
        and p.deleted_at is null
      group by
        p.id,
        p.name,
        p.slug,
        p.description,
        p.highlights_bullets,
        p.operational_complexity_note,
        p.health_requirements,
        p.environmental_risks,
        p.safety_mitigation,
        p.handover_notes,
        d.day,
        d.night,
        primary_asset.url
      limit 1
    `,
    [packageSlug],
  );

  const row = packageResult.rows[0];
  if (!row) return null;

  const [inclusionResult, exclusionResult, itineraryResult] = await Promise.all([
    db.query<{ item: string }>(
      `
        select ii.item
        from package_includes pi
        join item_includes ii on ii.id = pi.item_include_id
        where pi.package_id = $1
          and pi.deleted_at is null
          and ii.deleted_at is null
        order by pi.id asc
      `,
      [row.id],
    ),
    db.query<{ item: string }>(
      `
        select ie.item
        from package_excludes pe
        join item_excludes ie on ie.id = pe.item_exclude_id
        where pe.package_id = $1
          and pe.deleted_at is null
          and ie.deleted_at is null
        order by pe.id asc
      `,
      [row.id],
    ),
    db.query<{ day_no: number; title: string; activity: string | null }>(
      `
        select day_no, title, activity
        from package_itinerary_days
        where package_id = $1
          and deleted_at is null
        order by day_no asc
      `,
      [row.id],
    ),
  ]);

  const base = serializeListRow(origin, row);
  const legacy = FALLBACK_TOURS[origin].find((tour) => tour.slug === slug);
  const healthRequirements = normalizeArray(row.health_requirements);
  const environmentalRisks = normalizeArray(row.environmental_risks);
  const safetyMitigation = normalizeArray(row.safety_mitigation);
  const handoverNotes = normalizeArray(row.handover_notes);
  const planningNotes = [row.operational_complexity_note?.trim(), ...handoverNotes].filter(
    (item): item is string => Boolean(item && item.length > 0),
  );
  const routeHandlingNotes = [...safetyMitigation, ...handoverNotes].filter(
    (item, index, source): item is string => Boolean(item && source.indexOf(item) === index),
  );

  return {
    ...base,
    originLabel: getOriginLabel(origin),
    routeLabel: buildRouteLabel(row.slug),
    description:
      row.description?.trim() ||
      legacy?.description ||
      `${row.name} is a private East Java route operated with controlled pacing and clear pre-payment expectations.`,
    operationalNote:
      row.operational_complexity_note?.trim() ||
      handoverNotes[0] ||
      legacy?.operationalNote ||
      'This route works best when pickup timing, rest windows, and onward transfers are treated as part of the product.',
    routeHandling:
      handoverNotes[0] ||
      safetyMitigation[0] ||
      legacy?.routeHandling ||
      'The route is handled privately so timing and safety decisions stay consistent for one group.',
    healthAccess:
      healthRequirements[0] ||
      legacy?.healthAccess ||
      'Readiness depends on pace, sleep, and honest mobility expectations before the route starts.',
    environmentalConditions:
      environmentalRisks[0] ||
      legacy?.environmentalConditions ||
      'Mountain weather and ranger controls can change the exact route sequence and viewing conditions.',
    planningNotes:
      planningNotes.length > 0
        ? planningNotes.slice(0, 4)
        : legacy?.planningNotes?.slice(0, 4) ||
          ['Pickup timing, rest windows, and onward transfers should be treated as part of the route, not as afterthoughts.'],
    healthRequirements:
      healthRequirements.length > 0
        ? healthRequirements.slice(0, 4)
        : legacy?.healthRequirements?.slice(0, 4) || ['Check pace, sleep, and mobility honestly before confirming the route.'],
    environmentalRisks:
      environmentalRisks.length > 0
        ? environmentalRisks.slice(0, 4)
        : legacy?.environmentalRisks?.slice(0, 4) || ['Mountain weather and local controls can change access timing and viewing conditions.'],
    routeHandlingNotes:
      routeHandlingNotes.length > 0
        ? routeHandlingNotes.slice(0, 4)
        : legacy?.routeHandlingNotes?.slice(0, 4) || ['Private route handling keeps timing and safety decisions consistent for one group.'],
    inclusions: inclusionResult.rows.map((item) => item.item).slice(0, 8),
    exclusions: exclusionResult.rows.map((item) => item.item).slice(0, 6),
    itinerary: itineraryResult.rows.map((item) => ({
      day: item.day_no,
      title: item.title,
      summary: item.activity?.trim() || item.title,
    })),
    technicalDossier: legacy?.technicalDossier,
  } satisfies TourDetailData;
}

function getFallbackTours(origin?: TourOrigin) {
  if (!origin) {
    return [...FALLBACK_TOURS.surabaya, ...FALLBACK_TOURS.bali].map(({ description, operationalNote, routeHandling, healthAccess, environmentalConditions, inclusions, exclusions, itinerary, planningNotes, healthRequirements, environmentalRisks, routeHandlingNotes, originLabel, routeLabel, technicalDossier, ...item }) => item);
  }

  return FALLBACK_TOURS[origin].map(({ description, operationalNote, routeHandling, healthAccess, environmentalConditions, inclusions, exclusions, itinerary, planningNotes, healthRequirements, environmentalRisks, routeHandlingNotes, originLabel, routeLabel, technicalDossier, ...item }) => item);
}

const getToursUncached = async (origin?: TourOrigin): Promise<TourListItem[]> => {
  try {
    if (!origin) {
      const [surabaya, bali] = await Promise.all([getToursFromDb('surabaya'), getToursFromDb('bali')]);
      if (surabaya && bali) return [...surabaya, ...bali];
      return getFallbackTours();
    }

    const tours = await getToursFromDb(origin);
    return tours && tours.length > 0 ? tours : getFallbackTours(origin);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (isConnectivityError(error)) markDbUnavailable(error);
    console.warn(`[tours-data] falling back to bundled tours: ${message}`);
    return getFallbackTours(origin);
  }
};

const getTourBySlugUncached = async (origin: TourOrigin, slug: string): Promise<TourDetailData | null> => {
  try {
    const detail = await getTourDetailFromDb(origin, slug);
    if (detail) return detail;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (isConnectivityError(error)) markDbUnavailable(error);
    console.warn(`[tours-data] falling back to bundled detail for ${origin}/${slug}: ${message}`);
  }

  return FALLBACK_TOURS[origin].find((tour) => tour.slug === slug) || null;
};

export function getOriginFromDepartureSegment(departure: string): TourOrigin | null {
  if (departure === 'from-surabaya' || departure === 'surabaya') return 'surabaya';
  if (departure === 'from-bali' || departure === 'bali') return 'bali';
  return null;
}

export const getTours = cache(getToursUncached);

export const getTourBySlug = cache(getTourBySlugUncached);
