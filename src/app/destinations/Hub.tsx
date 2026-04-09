'use client';

import React from 'react';
import {
  MapPin,
  ArrowRight,
  Compass,
  Clock,
  Navigation,
} from 'lucide-react';
import Link from 'next/link';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { motion } from 'motion/react';
import type { DestinationListItem } from '../../lib/destinations-data';

type DestinationsHubProps = {
  destinations: DestinationListItem[];
};

export default function DestinationsHub({ destinations }: DestinationsHubProps) {
  const meta = SSOT.pages['/destinations'];

  return (
    <div className="min-h-screen bg-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <div className="border-b border-slate-100 bg-white/80 relative z-40 backdrop-blur-xl sticky top-0">
        <div className="container-authority py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-safety-orange text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
            <Compass className="w-4 h-4" /> Operational Zones
          </div>
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/why-jvto" className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-authority-navy transition-colors">Why JVTO</Link>
            <Link href="/verify-jvto" className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-authority-navy transition-colors">Verify</Link>
          </div>
        </div>
      </div>

      <div className="container-authority py-16 md:py-32 relative z-10">
        <PageSEO route="/destinations" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-20 md:mb-32"
        >
          <div className="badge-eyebrow bg-safety-orange/10 text-safety-orange mb-8">
            <MapPin className="w-3.5 h-3.5" /> East Java Route Nodes
          </div>
          <h1 className="text-5xl md:text-9xl font-black text-authority-navy mb-10 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'DESTINATIONS.'}
          </h1>
          <p className="body-text max-w-3xl">
            These are the destination layers behind JVTO routes. Use them to understand terrain, timing, and route character before choosing the package that fits your departure point and pace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={dest.href} className="group block cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md mb-8 bg-slate-50 shadow-card group-hover:shadow-hover transition-all duration-700">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {dest.imageContext && (
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-authority-navy text-[10px] px-4 py-2 rounded-md font-black uppercase tracking-[0.1em] z-10 shadow-hover border border-white/20">
                      {dest.imageContext}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/90 via-authority-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-1.5 bg-safety-orange text-white text-[10px] font-black uppercase tracking-[0.1em] rounded-md shadow-hover shadow-safety-orange/20">
                        {dest.category}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-4 group-hover:text-safety-orange transition-colors">{dest.name}</h3>
                    <div className="flex items-center gap-3 text-white/60 font-mono text-[10px] uppercase tracking-[0.2em] font-black">
                      <Clock className="w-4 h-4" /> {dest.duration}
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-slate-500 text-base leading-relaxed mb-6 line-clamp-2 font-medium">
                    {dest.summary}
                  </p>
                  <div className="flex items-center gap-3 text-safety-orange font-black uppercase tracking-[0.2em] text-[11px] group-hover:gap-5 transition-all duration-500">
                    Open Destination Brief <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 md:mt-40 pt-16 md:pt-24 border-t border-slate-100 flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.02, rotate: 0 }}
            className="p-12 md:p-20 bg-white border-4 md:border-8 border-safety-orange rounded-md md:rounded-md -rotate-2 shadow-hover relative overflow-hidden group transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-safety-orange/5 to-transparent" />
            <div className="scanline"></div>
            <div className="flex flex-col items-center relative z-10">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-md bg-safety-orange/10 flex items-center justify-center mb-8 md:mb-12">
                <Navigation className="w-12 h-12 md:w-16 md:h-16 text-safety-orange" />
              </div>
              <span className="text-4xl md:text-7xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-4">FIELD_BRIEF_READY</span>
              <span className="font-mono text-[10px] md:text-xs text-slate-400 tracking-[0.3em] md:tracking-[0.5em] uppercase font-black">East Java Route Planning Layer</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
