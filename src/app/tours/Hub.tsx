'use client';

import React from 'react';
import Link from 'next/link';
import { PageSEO } from '../../components/PageSEO';
import { motion } from 'motion/react';
import { MapPin, Clock, ShieldCheck, ChevronRight, Users, Route } from 'lucide-react';
import type { TourListItem } from '../../lib/tours-data';

type ToursHubProps = {
  tours: TourListItem[];
};

export default function ToursHub({ tours }: ToursHubProps) {
  const groupedTours = [
    {
      id: 'surabaya',
      label: 'From Surabaya',
      description:
        'Best for guests landing in East Java and comparing multi-stop routes with more pickup flexibility.',
      tours: tours.filter((tour) => tour.origin === 'surabaya'),
    },
    {
      id: 'bali',
      label: 'From Bali',
      description:
        'Best for overland cross-island routing where ferry timing and transfer handling matter before payment.',
      tours: tours.filter((tour) => tour.origin === 'bali'),
    },
  ].filter((group) => group.tours.length > 0);

  return (
    <div className="min-h-screen bg-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <PageSEO route="/tours" />

      <div className="border-b border-slate-100 bg-white/80 relative z-40 backdrop-blur-xl sticky top-0">
        <div className="container-authority py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-safety-orange text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
            <MapPin className="w-4 h-4" /> Private Route Catalog
          </div>
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/why-jvto" className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-authority-navy transition-colors">Why JVTO</Link>
            <Link href="/verify-jvto" className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-authority-navy transition-colors">Verify</Link>
          </div>
        </div>
      </div>

      <div className="container-authority py-16 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-20 md:mb-32"
        >
          <div className="badge-eyebrow bg-safety-orange/10 text-safety-orange mb-8">
            <Clock className="w-3.5 h-3.5" /> Departure-Based Planning
          </div>
          <h1 className="text-5xl md:text-9xl font-black text-authority-navy mb-10 leading-[0.85] uppercase tracking-tighter">
            PRIVATE <br />
            <span className="text-safety-orange">EAST JAVA ROUTES.</span>
          </h1>
          <p className="body-text max-w-2xl">
            Start with departure logic first. Compare Surabaya and Bali route families, then inspect the package pages for handling, readiness, and support before you commit.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {groupedTours.map((group, groupIndex) => (
            <section key={group.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.08 }}
                className="mb-10 md:mb-14"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 md:gap-8">
                  <div>
                    <div className="badge-eyebrow bg-authority-navy text-white mb-5">
                      <Users className="w-3 h-3" /> {group.label}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-authority-navy leading-[0.9]">
                      {group.label}
                    </h2>
                  </div>
                  <p className="body-text max-w-xl">{group.description}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {group.tours.map((tour, idx) => (
                  <motion.div
                    key={tour.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link
                      href={tour.href}
                      className="group block cursor-pointer relative aspect-[4/5] rounded-md overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
                    >
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="absolute top-6 left-6 right-6 flex items-start justify-between gap-4 z-10">
                        <div className="bg-safety-orange text-white text-[10px] px-4 py-2 rounded-sm font-mono font-black uppercase tracking-[0.2em] shadow-card">
                          {group.label}
                        </div>
                        {tour.crewName && (
                          <div className="bg-black/25 backdrop-blur-md text-white text-[10px] px-3 py-2 rounded-sm font-mono font-black uppercase tracking-[0.18em] border border-white/10">
                            {tour.crewName}
                          </div>
                        )}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3 drop-shadow-lg group-hover:-translate-y-1 transition-transform duration-500 leading-none">
                          {tour.name}
                        </h3>

                        <p className="text-sm text-white/75 leading-relaxed mb-4 line-clamp-3">
                          {tour.summary}
                        </p>

                        {tour.highlights.length > 0 && (
                          <div className="mb-4 flex flex-wrap gap-2">
                            {tour.highlights.slice(0, 2).map((highlight) => (
                              <span
                                key={highlight}
                                className="bg-white/10 backdrop-blur-md border border-white/10 text-white/85 text-[10px] px-3 py-1.5 rounded-sm font-mono uppercase tracking-[0.14em]"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-4 relative z-10 bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-sm border border-white/10">
                          <div className="flex flex-col">
                            <span className="text-white/60 text-[9px] font-mono font-black uppercase tracking-[0.2em] mb-1">Duration</span>
                            <span className="text-white font-black text-xs uppercase">{tour.duration}</span>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-white/60 text-[9px] font-mono font-black uppercase tracking-[0.2em] mb-1">From</span>
                            <span className="text-safety-orange font-black text-base md:text-lg">{tour.price}</span>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-3 text-safety-orange font-mono text-[10px] uppercase tracking-[0.2em] font-black">
                            <Route className="w-4 h-4" /> View route handling
                          </div>
                          <div className="w-10 h-10 rounded-md bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-safety-orange transition-all duration-500">
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
