'use client';

import React from 'react';
import { SSOT } from '../lib/ssot';

interface PageSEOProps {
  route?: string;
  schema?: any;
  metaOverride?: {
    title_tag?: string;
    meta_description?: string;
    canonical?: string;
    robots?: string;
  };
}

export const PageSEO: React.FC<PageSEOProps> = ({ route, schema, metaOverride }) => {
  void route;
  void metaOverride;
  void SSOT;

  if (!schema) return null;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};
