import type { Metadata } from 'next';
import { getSourceHealth } from '@/lib/source-health';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'JVTO Source Health',
  description: 'Operational view of DB mirror availability for the remix JVTO frontend.',
  robots: {
    index: false,
    follow: false,
  },
};

const metricClassName =
  'rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_16px_40px_rgba(17,24,39,0.08)]';

export default async function SourceHealthPage() {
  const health = await getSourceHealth();

  return (
    <main className="min-h-screen bg-[#f6f1e8] px-6 py-16 text-slate-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="space-y-3">
          <span className="inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
            Ops
          </span>
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight text-balance">Source health</h1>
            <p className="max-w-3xl text-sm leading-7 text-slate-600">
              This page confirms whether the frontend is currently reading from DB mirror or
              running on fallback content. It is the fast answer before any visual review or
              debugging session.
            </p>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <article className={metricClassName}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Mode</p>
            <p className="mt-3 text-2xl font-semibold">{health.mode}</p>
          </article>
          <article className={metricClassName}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Configured
            </p>
            <p className="mt-3 text-2xl font-semibold">{health.configured ? 'yes' : 'no'}</p>
          </article>
          <article className={metricClassName}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Reachable
            </p>
            <p className="mt-3 text-2xl font-semibold">{health.reachable ? 'yes' : 'no'}</p>
          </article>
          <article className={metricClassName}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Checked at
            </p>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-700">{health.checkedAt}</p>
          </article>
        </section>

        <section className="rounded-[2rem] border border-black/10 bg-white/75 p-7 shadow-[0_24px_60px_rgba(17,24,39,0.08)]">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Reason
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700">{health.reason}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Site URL
                </p>
                <p className="mt-3 break-all text-sm leading-6 text-slate-700">{health.siteUrl}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <article className={metricClassName}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Active content pages
                </p>
                <p className="mt-3 text-2xl font-semibold">
                  {health.contentPages ?? '[fallback]'}
                </p>
              </article>
              <article className={metricClassName}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Published destinations
                </p>
                <p className="mt-3 text-2xl font-semibold">
                  {health.destinations ?? '[fallback]'}
                </p>
              </article>
              <article className={metricClassName}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Published packages
                </p>
                <p className="mt-3 text-2xl font-semibold">{health.packages ?? '[fallback]'}</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
