import React from 'react';
import type { Metadata } from 'next';
import { PageSEO } from '../components/PageSEO';
import { HeroSection } from '../components/home/HeroSection';
import { Differentiators } from '../components/home/Differentiators';
import { FounderSpotlight } from '../components/home/FounderSpotlight';
import { DestinationGrid } from '../components/home/DestinationGrid';
import { TourBrowser } from '../components/home/TourBrowser';
import { Footer } from '../components/home/Footer';
import { TrustHub } from '../components/home/TrustHub';
import { VerifyCTA } from '../components/home/VerifyCTA';
import { getHomepageViewData } from '../lib/homepage-data';
import { buildPageMetadata } from '../lib/page-metadata';
import { getSiteUrl } from '../lib/jvto-source';
import { SSOT } from '../lib/ssot';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHomepageViewData();

  return buildPageMetadata('/', {
    title: home.seo.title,
    description: home.seo.description,
  });
}

export default async function HomePage() {
  const home = await getHomepageViewData();
  const siteUrl = getSiteUrl();
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TravelAgency',
        '@id': organizationId,
        name: SSOT.organization.name,
        legalName: SSOT.organization.legalName,
        url: siteUrl,
        description: home.seo.description,
        telephone: SSOT.organization.contact_phone,
        email: SSOT.organization.contact_email,
        founder: {
          '@type': 'Person',
          name: SSOT.organization.founder.name,
          jobTitle: SSOT.organization.founder.role,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: SSOT.organization.address_json.addressLocality,
          addressRegion: SSOT.organization.address_json.addressRegion,
          addressCountry: 'ID',
        },
        sameAs: SSOT.organization.same_as_urls,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: SSOT.organization.name,
        description: home.seo.description,
        inLanguage: 'en',
        publisher: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/#homepage`,
        url: siteUrl,
        name: home.hero.title,
        headline: home.hero.title,
        description: home.seo.description,
        isPartOf: {
          '@id': websiteId,
        },
        about: [
          { '@type': 'Thing', name: 'Private volcano tours' },
          { '@type': 'Place', name: 'East Java, Indonesia' },
          { '@type': 'Thing', name: 'Mount Bromo' },
          { '@type': 'Thing', name: 'Kawah Ijen' },
          { '@type': 'Thing', name: 'Tumpak Sewu Waterfall' },
        ],
        significantLink: [
          `${siteUrl}/tours`,
          `${siteUrl}/why-jvto`,
          `${siteUrl}/verify-jvto`,
          `${siteUrl}/travel-guide`,
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-audit-white font-sans text-authority-navy selection:bg-safety-orange/30">
      <PageSEO route="/" schema={homeSchema} />

      <HeroSection data={home.hero} />
      <Differentiators />
      <FounderSpotlight />
      <DestinationGrid destinations={home.destinations} />
      <TourBrowser departures={home.departures} />
      <TrustHub signals={home.volcanoSignals} />
      <VerifyCTA />
      <Footer />
    </div>
  );
}

