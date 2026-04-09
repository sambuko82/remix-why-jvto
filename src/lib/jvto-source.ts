import { Pool } from 'pg';
import { SSOT } from './ssot';

let pool: Pool | null = null;
let dbUnavailableUntil = 0;
let lastDbFailure = '';

export function getPool() {
  if (!process.env.DATABASE_URL) return null;
  if (Date.now() < dbUnavailableUntil) return null;

  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 3,
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 4000,
      ssl:
        process.env.DATABASE_URL.includes('sslmode=require') ||
        process.env.DATABASE_URL.includes('render.com') ||
        process.env.DATABASE_URL.includes('supabase.co')
          ? { rejectUnauthorized: false }
          : undefined,
    });
  }

  return pool;
}

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || SSOT.organization.url).replace(/\/$/, '');
}

export function absoluteAsset(url?: string | null) {
  if (!url) return '';
  if (/^https?:\/\//i.test(url)) return url;
  return `${getSiteUrl()}/${url.replace(/^\//, '')}`;
}

export function isConnectivityError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  return /ETIMEDOUT|ECONNREFUSED|ENOTFOUND|Connection terminated|timeout/i.test(message);
}

export function markDbUnavailable(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  dbUnavailableUntil = Date.now() + 60_000;

  if (message !== lastDbFailure) {
    lastDbFailure = message;
    console.warn(`[jvto-source] DB mirror temporarily disabled for 60s: ${message}`);
  }
}
