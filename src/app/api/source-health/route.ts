import { NextResponse } from 'next/server';
import { getSourceHealth } from '@/lib/source-health';

export const dynamic = 'force-dynamic';

export async function GET() {
  const health = await getSourceHealth();
  const status = health.reachable ? 200 : 503;

  return NextResponse.json(health, { status });
}
