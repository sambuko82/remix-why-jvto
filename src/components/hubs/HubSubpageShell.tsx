import Link from 'next/link';
import type { ReactNode } from 'react';
import type { ProofItem } from '@/types';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export type SummaryCard = {
  eyebrow: string;
  title: string;
  description: string;
};

export type DetailSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  bullets?: string[];
  note?: string;
  tone?: 'default' | 'emphasis' | 'warning';
};

export type ReadNextCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export type ProofGroup = {
  eyebrow: string;
  title: string;
  description: string;
  items: ProofItem[];
};

export type FooterCallout = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

type HubSubpageShellProps = {
  backHref: string;
  backLabel: string;
  protocolLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  summaryCards?: SummaryCard[];
  sections?: DetailSection[];
  proofGroups?: ProofGroup[];
  readNext?: ReadNextCard[];
  footerCallout?: FooterCallout;
  children?: ReactNode;
};

function sectionToneClasses(tone: DetailSection['tone']) {
  if (tone === 'emphasis') return 'border-authority-navy/10 bg-authority-navy text-white';
  if (tone === 'warning') return 'border-safety-orange/20 bg-[#fff3e8] text-authority-navy';
  return 'border-black/10 bg-white/78 text-authority-navy';
}

export function HubSubpageShell({
  backHref,
  backLabel,
  protocolLabel,
  eyebrow,
  title,
  description,
  summaryCards,
  sections,
  proofGroups,
  readNext,
  footerCallout,
  children,
}: HubSubpageShellProps) {
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

      <main className="mx-auto flex max-w-7xl flex-col gap-14 px-4 py-12 md:px-6 md:py-16">
        <header className="max-w-5xl space-y-5">
          <p className="text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-safety-orange">{eyebrow}</p>
          <h1 className="text-4xl font-black uppercase tracking-tighter text-authority-navy md:text-7xl md:leading-[0.88]">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">{description}</p>
        </header>

        {summaryCards?.length ? (
          <section className="grid gap-5 lg:grid-cols-3">
            {summaryCards.map((card) => (
              <article key={card.title} className="rounded-[2rem] border border-black/10 bg-white/78 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)]">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">{card.eyebrow}</p>
                <h2 className="mt-4 text-2xl font-black uppercase tracking-tight text-authority-navy">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
              </article>
            ))}
          </section>
        ) : null}

        {sections?.length ? (
          <section className="grid gap-5 lg:grid-cols-2">
            {sections.map((section) => {
              const tone = sectionToneClasses(section.tone);
              const isEmphasis = section.tone === 'emphasis';
              const copyColor = isEmphasis ? 'text-slate-300' : 'text-slate-600';
              const eyebrowColor = isEmphasis ? 'text-safety-orange' : 'text-slate-500';

              return (
                <article key={section.title} className={`rounded-[2rem] border p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)] ${tone}`}>
                  {section.eyebrow ? (
                    <p className={`text-[10px] font-mono font-bold uppercase tracking-[0.18em] ${eyebrowColor}`}>{section.eyebrow}</p>
                  ) : null}
                  <h2 className="mt-4 text-3xl font-black uppercase tracking-tight">{section.title}</h2>
                  {section.description ? <p className={`mt-4 text-sm leading-7 ${copyColor}`}>{section.description}</p> : null}
                  {section.bullets?.length ? (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className={`flex gap-3 text-sm leading-7 ${copyColor}`}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-safety-orange" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.note ? (
                    <p className={`mt-6 rounded-2xl border px-4 py-4 text-sm leading-7 ${isEmphasis ? 'border-white/10 bg-white/5 text-slate-200' : 'border-black/8 bg-black/[0.03] text-slate-600'}`}>
                      {section.note}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </section>
        ) : null}

        {children}

        {proofGroups?.map((group) => (
          <section key={group.title} className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-safety-orange">{group.eyebrow}</p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-authority-navy">{group.title}</h2>
              <p className="text-sm leading-7 text-slate-600">{group.description}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {group.items.map((item) => (
                <a
                  key={item.slug}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[2rem] border border-black/10 bg-white/78 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)] transition-all hover:-translate-y-1 hover:border-safety-orange/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">
                        {item.category || 'Proof item'}
                      </p>
                      <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-authority-navy">{item.title}</h3>
                    </div>
                    <ExternalLink className="h-5 w-5 shrink-0 text-slate-400 transition-colors group-hover:text-safety-orange" />
                  </div>
                  <div className="mt-6 space-y-2 text-xs font-mono uppercase tracking-[0.16em] text-slate-500">
                    {item.last_verified ? <p>Last verified: {item.last_verified}</p> : null}
                    {item.hash ? <p className="break-all">Ref: {item.hash}</p> : null}
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        {readNext?.length ? (
          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-safety-orange">Read next</p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-authority-navy">Keep the decision path connected</h2>
              <p className="text-sm leading-7 text-slate-600">
                These routes are meant to be read together. Trust, proof, and practical planning work better as one system.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {readNext.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[2rem] border border-black/10 bg-white/78 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)] transition-all hover:-translate-y-1 hover:border-safety-orange/30"
                >
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">{item.eyebrow}</p>
                  <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-authority-navy">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-authority-navy transition-colors group-hover:text-safety-orange">
                    Open path
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {footerCallout ? (
          <section className="rounded-[2.5rem] bg-authority-navy px-6 py-8 text-white md:px-10 md:py-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-safety-orange">
                  {footerCallout.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-black uppercase tracking-tight md:text-4xl">{footerCallout.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{footerCallout.description}</p>
              </div>
              <Link
                href={footerCallout.href}
                className="inline-flex items-center gap-2 rounded-full bg-safety-orange px-5 py-3 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-white"
              >
                {footerCallout.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
