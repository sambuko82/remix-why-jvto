import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import type { HomeVolcanoSignal } from '@/lib/homepage-data';

type VolcanoStatusBridgeProps = {
  signals: HomeVolcanoSignal[];
};

function getToneClasses(level: string) {
  const normalized = level.toLowerCase();
  if (normalized.includes('ii') || normalized.includes('waspada')) {
    return 'border-amber-300/70 bg-amber-50 text-amber-800';
  }
  if (normalized.includes('iii') || normalized.includes('siaga') || normalized.includes('iv') || normalized.includes('awas')) {
    return 'border-red-300/70 bg-red-50 text-red-800';
  }
  return 'border-emerald-300/70 bg-emerald-50 text-emerald-800';
}

export function VolcanoStatusBridge({ signals }: VolcanoStatusBridgeProps) {
  if (!signals.length) return null;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-authority-navy/8 bg-[#f8f5ef] px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-authority-navy">
              <ShieldCheck className="h-4 w-4" />
              Live route context
            </p>
            <h2 className="max-w-4xl text-4xl font-black uppercase tracking-tighter text-authority-navy md:text-6xl md:leading-[0.9]">
              Volcano status belongs
              <br />
              near the route.
            </h2>
          </div>
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Bromo and Ijen conditions should shape expectations before booking. They should not live as an afterthought hidden in a separate research trail.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <article className="rounded-[2.5rem] bg-authority-navy px-6 py-8 text-white md:px-8 md:py-10">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-safety-orange">Operating status</p>
            <h3 className="mt-4 max-w-3xl text-4xl font-black uppercase tracking-tight md:text-5xl md:leading-[0.92]">
              Use live volcanic context before fixing route expectations.
            </h3>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              MAGMA updates are not there to create drama. They exist to keep route promises realistic and to push closures, screening, and access changes back into the decision path.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">Requirement</p>
                <p className="mt-3 text-2xl font-black uppercase tracking-tight text-white">Read weather & closures</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">Use one canonical support page for changes, restrictions, and route alternatives.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">Purpose</p>
                <p className="mt-3 text-2xl font-black uppercase tracking-tight text-white">Prevent false assumptions</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">Conditions belong near route selection so guests do not buy based on outdated summaries.</p>
              </div>
            </div>

            <Link
              href="/travel-guide/weather-and-closures"
              className="mt-8 inline-flex items-center gap-2 rounded-[1rem] bg-safety-orange px-8 py-4 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-white"
            >
              Open live volcano center
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <div className="grid gap-5">
            {signals.map((signal) => (
              <article
                key={signal.id}
                className="rounded-[2rem] border border-black/[0.08] bg-[#fbfaf7] p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-safety-orange">{signal.eyebrow}</p>
                    <h3 className="mt-4 text-3xl font-black uppercase tracking-tight text-authority-navy">{signal.name}</h3>
                  </div>
                  <div className={`inline-flex rounded-full border px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.16em] ${getToneClasses(signal.level)}`}>
                    MAGMA {signal.level}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">{signal.summary}</p>
                <p className="mt-5 text-[11px] font-mono uppercase tracking-[0.16em] text-slate-500">{signal.updatedLabel}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
