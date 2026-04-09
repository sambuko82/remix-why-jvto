import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export type HubCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

type HubPageShellProps = {
  backHref: string;
  backLabel: string;
  protocolLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  cards: HubCard[];
  aside?: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  };
  bottomCallout?: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  };
  children?: ReactNode;
};

export function HubPageShell({
  backHref,
  backLabel,
  protocolLabel,
  eyebrow,
  title,
  description,
  cards,
  aside,
  bottomCallout,
  children,
}: HubPageShellProps) {
  return (
    <div className="min-h-screen bg-[#f6f1e8] text-authority-navy">
      <div className="border-b border-black/8 bg-[#f6f1e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-6">
          <Link
            href={backHref}
            className="inline-flex items-center gap-3 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-slate-500 transition-colors hover:text-authority-navy"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
          <span className="inline-flex rounded-full border border-safety-orange/20 bg-white/70 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-safety-orange">
            {protocolLabel}
          </span>
        </div>
      </div>

      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12 md:px-6 md:py-16">
        <header className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:items-end">
          <div className="space-y-5">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-safety-orange">{eyebrow}</p>
            <h1 className="max-w-5xl text-4xl font-black uppercase tracking-tighter text-authority-navy md:text-7xl md:leading-[0.88]">
              {title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">{description}</p>
          </div>

          {aside ? (
            <aside className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.08)]">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">{aside.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-authority-navy">{aside.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{aside.description}</p>
              <Link
                href={aside.href}
                className="mt-6 inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-authority-navy transition-colors hover:text-safety-orange"
              >
                {aside.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          ) : null}
        </header>

        <section className="grid gap-5 lg:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-[2rem] border border-black/10 bg-white/78 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)] transition-all hover:-translate-y-1 hover:border-safety-orange/30"
            >
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">{card.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-authority-navy">{card.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-authority-navy transition-colors group-hover:text-safety-orange">
                Open path
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </section>

        {children}

        {bottomCallout ? (
          <section className="rounded-[2.5rem] bg-authority-navy px-6 py-8 text-white md:px-10 md:py-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-safety-orange">
                  {bottomCallout.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-black uppercase tracking-tight md:text-4xl">{bottomCallout.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{bottomCallout.description}</p>
              </div>
              <Link
                href={bottomCallout.href}
                className="inline-flex items-center gap-2 rounded-full bg-safety-orange px-5 py-3 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-white"
              >
                {bottomCallout.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
