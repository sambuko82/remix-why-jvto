import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  const meta = route ? SSOT.pages[route] : null;
  
  if (!meta && !metaOverride) {
    if (route) console.warn(`Metadata not found for route: ${route}`);
    return null;
  }

  const title = metaOverride?.title_tag || meta?.title_tag;
  const description = metaOverride?.meta_description || meta?.meta_description;
  const canonical = metaOverride?.canonical || meta?.canonical;
  const robots = metaOverride?.robots || meta?.robots;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {robots && <meta name="robots" content={robots} />}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
