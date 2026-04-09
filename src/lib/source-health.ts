import { getPool, getSiteUrl, isConnectivityError, markDbUnavailable } from './jvto-source';

export type SourceHealth = {
  mode: 'mirror' | 'fallback';
  configured: boolean;
  reachable: boolean;
  checkedAt: string;
  siteUrl: string;
  reason: string;
  contentPages: number | null;
  destinations: number | null;
  packages: number | null;
};

export async function getSourceHealth(): Promise<SourceHealth> {
  const checkedAt = new Date().toISOString();
  const siteUrl = getSiteUrl();

  if (!process.env.DATABASE_URL) {
    return {
      mode: 'fallback',
      configured: false,
      reachable: false,
      checkedAt,
      siteUrl,
      reason: 'DATABASE_URL is not configured.',
      contentPages: null,
      destinations: null,
      packages: null,
    };
  }

  const pool = getPool();

  if (!pool) {
    return {
      mode: 'fallback',
      configured: true,
      reachable: false,
      checkedAt,
      siteUrl,
      reason: 'DB mirror is temporarily disabled after a connectivity failure.',
      contentPages: null,
      destinations: null,
      packages: null,
    };
  }

  try {
    const [contentPages, destinations, packages] = await Promise.all([
      pool.query(`select count(*)::int as count from content_pages where coalesce(is_active, true) = true`),
      pool.query(
        `select count(*)::int as count from destinations where coalesce(published, false) = true and deleted_at is null`,
      ),
      pool.query(
        `select count(*)::int as count from packages where coalesce(is_publish, false) = true and deleted_at is null`,
      ),
    ]);

    return {
      mode: 'mirror',
      configured: true,
      reachable: true,
      checkedAt,
      siteUrl,
      reason: 'DB mirror is reachable.',
      contentPages: contentPages.rows[0]?.count ?? 0,
      destinations: destinations.rows[0]?.count ?? 0,
      packages: packages.rows[0]?.count ?? 0,
    };
  } catch (error) {
    if (isConnectivityError(error)) {
      markDbUnavailable(error);
    }

    const reason = error instanceof Error ? error.message : String(error);

    return {
      mode: 'fallback',
      configured: true,
      reachable: false,
      checkedAt,
      siteUrl,
      reason,
      contentPages: null,
      destinations: null,
      packages: null,
    };
  }
}
