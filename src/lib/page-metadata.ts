import type { Metadata } from 'next';
import { SSOT } from './ssot';
import { getSiteUrl } from './jvto-source';

type MetadataFallback = {
  title: string;
  description: string;
};

function absoluteCanonical(route: string) {
  if (/^https?:\/\//i.test(route)) return route;
  const normalized = route.startsWith('/') ? route : `/${route}`;
  return `${getSiteUrl()}${normalized}`;
}

function resolveMetadataTitle(title: string) {
  const normalized = title.toLowerCase();
  const orgName = SSOT.organization.name.toLowerCase();

  if (normalized.includes(orgName) || /\bjvto\b/i.test(title)) {
    return { absolute: title };
  }

  return title;
}

export function resolvePageMeta(route: string, fallback: MetadataFallback) {
  const meta = SSOT.pages?.[route as keyof typeof SSOT.pages] as
    | {
        title_tag?: string;
        meta_description?: string;
        canonical?: string;
      }
    | undefined;

  const title = meta?.title_tag || fallback.title;
  const description = meta?.meta_description || fallback.description;
  const canonical = absoluteCanonical(meta?.canonical || route);

  return {
    title,
    description,
    canonical,
  };
}

export function buildPageMetadata(route: string, fallback: MetadataFallback): Metadata {
  const { title, description, canonical } = resolvePageMeta(route, fallback);

  return {
    title: resolveMetadataTitle(title),
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SSOT.organization.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
