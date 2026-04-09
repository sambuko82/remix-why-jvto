import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/verify', destination: '/verify-jvto', permanent: true },
      { source: '/ijen-health-screening', destination: '/travel-guide/ijen-health-screening', permanent: true },
      { source: '/press', destination: '/verify-jvto/press-recognition', permanent: true },
      { source: '/faq', destination: '/travel-guide/faq', permanent: true },
      { source: '/why-jvto/our-team', destination: '/team', permanent: true },
      { source: '/why-jvto/proof-transparency', destination: '/verify-jvto', permanent: true },
      { source: '/why-jvto/local-team-operations', destination: '/team', permanent: true },
      { source: '/tour/:slug', destination: '/tours', permanent: false },
      { source: '/crew/:crewId', destination: '/team/:crewId', permanent: true },
    ];
  },
};

export default nextConfig;
