import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pg from 'pg';

const { Pool } = pg;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

function readEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};

  return Object.fromEntries(
    fs
      .readFileSync(filePath, 'utf8')
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#') && line.includes('='))
      .map((line) => {
        const index = line.indexOf('=');
        const key = line.slice(0, index).trim();
        const rawValue = line.slice(index + 1).trim();
        const value = rawValue.replace(/^['"]|['"]$/g, '');
        return [key, value];
      }),
  );
}

const envLocal = readEnvFile(path.join(repoRoot, '.env.local'));
const envExample = readEnvFile(path.join(repoRoot, '.env.example'));
const DATABASE_URL =
  process.env.DATABASE_URL || envLocal.DATABASE_URL || envExample.DATABASE_URL || '';
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  envLocal.NEXT_PUBLIC_SITE_URL ||
  envExample.NEXT_PUBLIC_SITE_URL ||
  '';

if (!DATABASE_URL) {
  console.error('DATABASE_URL is missing. Add it to .env.local or the environment first.');
  process.exit(1);
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  max: 1,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 4000,
  ssl:
    DATABASE_URL.includes('sslmode=require') ||
    DATABASE_URL.includes('render.com') ||
    DATABASE_URL.includes('supabase.co')
      ? { rejectUnauthorized: false }
      : undefined,
});

try {
  const [contentPages, publishedDestinations, publishedPackages] = await Promise.all([
    pool.query(`select count(*)::int as count from content_pages where coalesce(is_active, true) = true`),
    pool.query(
      `select count(*)::int as count from destinations where coalesce(published, false) = true and deleted_at is null`,
    ),
    pool.query(
      `select count(*)::int as count from packages where coalesce(is_publish, false) = true and deleted_at is null`,
    ),
  ]);

  const sampleHomepage = await pool.query(
    `
      select
        seo->>'title' as title,
        content->>'h1' as h1
      from content_pages
      where route = '/'
        and coalesce(is_active, true) = true
      order by updated_at desc nulls last
      limit 1
    `,
  );

  console.log('JVTO source check');
  console.log(` site_url: ${SITE_URL || '[not set]'}`);
  console.log(` content_pages_active: ${contentPages.rows[0]?.count ?? 0}`);
  console.log(` destinations_published: ${publishedDestinations.rows[0]?.count ?? 0}`);
  console.log(` packages_published: ${publishedPackages.rows[0]?.count ?? 0}`);
  console.log(` homepage_title: ${sampleHomepage.rows[0]?.title || '[missing]'}`);
  console.log(` homepage_h1: ${sampleHomepage.rows[0]?.h1 || '[missing]'}`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`JVTO source check failed: ${message}`);
  process.exitCode = 1;
} finally {
  await pool.end();
}
