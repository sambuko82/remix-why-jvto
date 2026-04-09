'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, BookOpen, Lock, Activity, Scale, HeartPulse, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { HomeVolcanoSignal } from '../../lib/homepage-data';

type HubTab = 'trust' | 'support' | 'live';

type TrustHubProps = {
  signals?: HomeVolcanoSignal[];
};

const fallbackSignals: HomeVolcanoSignal[] = [
  {
    id: 'bromo',
    eyebrow: 'Volcano status',
    name: 'Mount Bromo',
    level: 'Level I',
    summary: 'Use the central closures page to confirm access expectations before sunrise plans are treated as fixed.',
    updatedLabel: 'Fallback monitoring summary',
  },
  {
    id: 'ijen',
    eyebrow: 'Volcano status',
    name: 'Kawah Ijen',
    level: 'Level I',
    summary: 'Use the central closures page before treating blue-fire or crater access as guaranteed for the selected date.',
    updatedLabel: 'Fallback monitoring summary',
  },
];

function getLevelTone(level: string) {
  const normalized = level.toLowerCase();
  if (normalized.includes('ii') || normalized.includes('waspada')) return 'border-amber-300/70 bg-amber-50 text-amber-800';
  if (normalized.includes('iii') || normalized.includes('iv') || normalized.includes('siaga') || normalized.includes('awas')) {
    return 'border-red-300/70 bg-red-50 text-red-800';
  }
  return 'border-emerald-300/70 bg-emerald-50 text-emerald-800';
}

export const TrustHub = ({ signals }: TrustHubProps) => {
  const [activeTab, setActiveTab] = useState<HubTab>('trust');
  const navigate = useNavigate();
  const activeSignals = signals?.length ? signals : fallbackSignals;

  const mainTabs = [
    { id: 'trust', label: 'Why JVTO', icon: ShieldCheck },
    { id: 'support', label: 'Prepare & Book', icon: BookOpen },
    { id: 'live', label: 'Live Route Context', icon: Activity },
  ];

  return (
    <section id="trust-hub" className="section-spacing bg-white relative overflow-hidden">
      <div className="container-authority">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="badge-eyebrow bg-authority-navy text-white mb-6">
              <Lock className="w-3 h-3" /> Operator Proof Layer
            </div>
            <h2 className="heading-section mb-6">
              OPERATIONAL <br />
              <span className="text-safety-orange">TRANSPARENCY.</span>
            </h2>
            <p className="body-text">
              Use one place to understand the operator, prepare for the route, and read live volcano context before payment. This keeps support and proof inside the decision path instead of scattering them across the homepage.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 bg-slate-50 p-2 rounded-md border border-slate-100 w-full lg:w-auto">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as HubTab)}
                className={`flex-1 lg:flex-none flex items-center justify-center gap-3 px-8 py-4 rounded-md font-black uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all ${
                  activeTab === tab.id ? 'bg-authority-navy text-white shadow-hover shadow-authority-navy/20' : 'text-slate-400 hover:text-authority-navy hover:bg-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait">
            {activeTab === 'trust' ? (
              <motion.div
                key="trust"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)] gap-4"
              >
                <article className="p-10 md:p-12 rounded-md border border-slate-100 bg-white shadow-card flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-4 rounded-md bg-slate-50 border border-slate-100">
                        <Scale className="w-8 h-8 text-safety-orange" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] font-black text-slate-400">WHY JVTO</span>
                    </div>
                    <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-authority-navy leading-[0.95] mb-6">
                      Safety as operational discipline.
                    </h3>
                    <p className="body-text text-base md:text-lg mb-10">
                      JVTO is different because trust is not treated as decoration. The operator, the route seriousness, and the proof path are all made visible before guests are asked to treat a package as settled.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-md border border-slate-100 bg-slate-50 p-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Operator context</p>
                        <p className="mt-3 text-lg font-black uppercase tracking-tight text-authority-navy">Tourist Police-led, private-only routes</p>
                      </div>
                      <div className="rounded-md border border-slate-100 bg-slate-50 p-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Trust rule</p>
                        <p className="mt-3 text-lg font-black uppercase tracking-tight text-authority-navy">Proof stays visible before payment</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/why-jvto')}
                    className="mt-10 inline-flex items-center gap-3 text-safety-orange font-mono text-[10px] font-black uppercase tracking-[0.2em]"
                  >
                    Open Why JVTO
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </article>

                <article className="p-10 rounded-md border border-slate-100 bg-white shadow-card flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-4 rounded-md bg-slate-50 border border-slate-100">
                      <ShieldCheck className="w-8 h-8 text-safety-orange" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] font-black text-slate-400">PROOF PATH</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-authority-navy leading-[0.95] mb-5">
                    Proof & transparency you can verify.
                  </h3>
                  <p className="body-text text-sm md:text-base mb-8">
                    Legal records, police-safety context, public references, and supporting affiliations live on canonical routes instead of being hidden behind sales claims.
                  </p>
                  <div className="space-y-3 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
                    <button onClick={() => navigate('/verify-jvto/legal')} className="flex items-center justify-between w-full rounded-sm border border-slate-100 bg-slate-50 px-4 py-3 hover:border-safety-orange/30 hover:text-authority-navy">
                      <span>Legal proof</span>
                      <ArrowUpRight className="w-4 h-4 text-safety-orange" />
                    </button>
                    <button onClick={() => navigate('/verify-jvto/police-safety')} className="flex items-center justify-between w-full rounded-sm border border-slate-100 bg-slate-50 px-4 py-3 hover:border-safety-orange/30 hover:text-authority-navy">
                      <span>Police & safety proof</span>
                      <ArrowUpRight className="w-4 h-4 text-safety-orange" />
                    </button>
                    <button onClick={() => navigate('/why-jvto/reviews')} className="flex items-center justify-between w-full rounded-sm border border-slate-100 bg-slate-50 px-4 py-3 hover:border-safety-orange/30 hover:text-authority-navy">
                      <span>Review references</span>
                      <ArrowUpRight className="w-4 h-4 text-safety-orange" />
                    </button>
                    <button onClick={() => navigate('/verify-jvto/press-recognition')} className="flex items-center justify-between w-full rounded-sm border border-slate-100 bg-slate-50 px-4 py-3 hover:border-safety-orange/30 hover:text-authority-navy">
                      <span>Press & supporting network</span>
                      <ArrowUpRight className="w-4 h-4 text-safety-orange" />
                    </button>
                  </div>
                  <button
                    onClick={() => navigate('/verify-jvto')}
                    className="mt-8 inline-flex items-center gap-3 text-safety-orange font-mono text-[10px] font-black uppercase tracking-[0.2em]"
                  >
                    Open Verify Hub
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </article>
              </motion.div>
            ) : null}

            {activeTab === 'support' ? (
              <motion.div
                key="support"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)] gap-4"
              >
                <article className="p-10 md:p-12 rounded-md border border-slate-100 bg-white shadow-card">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-4 rounded-md bg-slate-50 border border-slate-100">
                      <BookOpen className="w-8 h-8 text-safety-orange" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] font-black text-slate-400">PREPARE & BOOK</span>
                  </div>
                  <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-authority-navy leading-[0.95] mb-6">
                    Prepare before you pay.
                  </h3>
                  <p className="body-text text-base md:text-lg mb-10">
                    Support belongs before payment. Booking flow, Ijen screening, packing, weather, and contact routes should reduce doubt before guests commit to dates.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <button onClick={() => navigate('/travel-guide/booking-information')} className="rounded-md border border-slate-100 bg-slate-50 p-5 text-left hover:border-safety-orange/30">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Booking</p>
                      <p className="mt-3 text-lg font-black uppercase tracking-tight text-authority-navy">Payment and booking flow</p>
                    </button>
                    <button onClick={() => navigate('/travel-guide/ijen-health-screening')} className="rounded-md border border-slate-100 bg-slate-50 p-5 text-left hover:border-safety-orange/30">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Ijen</p>
                      <p className="mt-3 text-lg font-black uppercase tracking-tight text-authority-navy">Screening before ascent</p>
                    </button>
                    <button onClick={() => navigate('/travel-guide/packing-and-fitness')} className="rounded-md border border-slate-100 bg-slate-50 p-5 text-left hover:border-safety-orange/30">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Fitness</p>
                      <p className="mt-3 text-lg font-black uppercase tracking-tight text-authority-navy">Packing and physical fit</p>
                    </button>
                    <button onClick={() => navigate('/contact')} className="rounded-md border border-slate-100 bg-slate-50 p-5 text-left hover:border-safety-orange/30">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Contact</p>
                      <p className="mt-3 text-lg font-black uppercase tracking-tight text-authority-navy">Official inquiry paths</p>
                    </button>
                  </div>
                </article>

                <article className="p-10 rounded-md border border-slate-100 bg-white shadow-card flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-4 rounded-md bg-slate-50 border border-slate-100">
                      <HeartPulse className="w-8 h-8 text-safety-orange" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] font-black text-slate-400">SUPPORT RULES</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-authority-navy leading-[0.95] mb-5">
                    Support stays practical.
                  </h3>
                  <p className="body-text text-sm md:text-base mb-8">
                    The goal is not to create more reading. The goal is to answer the next practical question before it turns into booking friction.
                  </p>
                  <div className="space-y-4 text-sm leading-7 text-slate-600">
                    <p className="rounded-sm border border-slate-100 bg-slate-50 px-4 py-3">Read the route first, then use support pages to clarify screening, timing, and weather-sensitive access.</p>
                    <p className="rounded-sm border border-slate-100 bg-slate-50 px-4 py-3">If the route includes Ijen, screening is part of the plan, not a late add-on.</p>
                    <p className="rounded-sm border border-slate-100 bg-slate-50 px-4 py-3">If route fit is still unclear, go back to tours before turning support pages into a substitute for route choice.</p>
                  </div>
                  <button
                    onClick={() => navigate('/travel-guide')}
                    className="mt-8 inline-flex items-center gap-3 text-safety-orange font-mono text-[10px] font-black uppercase tracking-[0.2em]"
                  >
                    Open Travel Guide
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </article>
              </motion.div>
            ) : null}

            {activeTab === 'live' ? (
              <motion.div
                key="live"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-4"
              >
                <article className="p-10 md:p-12 rounded-md border border-slate-100 bg-authority-navy text-white shadow-hover">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-4 rounded-md bg-white/10 border border-white/10">
                      <Activity className="w-8 h-8 text-safety-orange" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] font-black text-white/50">CENTRAL STATUS PAGE</span>
                  </div>
                  <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-6">
                    MAGMA belongs near the route.
                  </h3>
                  <p className="text-base md:text-lg leading-8 text-slate-300 mb-10">
                    Volcano context should shape expectations before booking, but it should not become a separate dashboard. JVTO keeps one weather and closures page so route promises stay realistic and support stays readable.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-md border border-white/10 bg-white/[0.06] p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-black text-white/50">Why this exists</p>
                      <p className="mt-3 text-lg font-black uppercase tracking-tight">Prevent false assumptions</p>
                    </div>
                    <div className="rounded-md border border-white/10 bg-white/[0.06] p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-black text-white/50">Canonical path</p>
                      <p className="mt-3 text-lg font-black uppercase tracking-tight">Weather & closures</p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/travel-guide/weather-and-closures')}
                    className="mt-10 inline-flex items-center gap-3 text-safety-orange font-mono text-[10px] font-black uppercase tracking-[0.2em]"
                  >
                    Open live volcano center
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </article>

                <div className="grid gap-4">
                  {activeSignals.map((signal) => (
                    <article
                      key={signal.id}
                      className="rounded-md border border-slate-100 bg-white p-8 shadow-card"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-black text-safety-orange">{signal.eyebrow}</p>
                          <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-authority-navy">{signal.name}</h3>
                        </div>
                        <div className={`inline-flex rounded-full border px-3 py-1.5 text-[10px] font-mono font-black uppercase tracking-[0.16em] ${getLevelTone(signal.level)}`}>
                          MAGMA {signal.level}
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-slate-600">{signal.summary}</p>
                      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{signal.updatedLabel}</p>
                    </article>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-verified-bright animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">Trust and support layer ready</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-verified-bright" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">Live route context connected</span>
            </div>
          </div>
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
            Use support and proof as decision paths, not as homepage clutter
          </p>
        </div>
      </div>
    </section>
  );
};
