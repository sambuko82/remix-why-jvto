'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MapPin, Clock, Users, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import type { HomeDepartureItem, HomeTourCard } from '../../lib/homepage-data';

type TourBrowserProps = {
  departures?: HomeDepartureItem[];
};

function getRouteSignal(tour: HomeTourCard) {
  const normalized = tour.name.toLowerCase();

  if (normalized.includes('ijen') && normalized.includes('bromo')) return 'Bromo + Ijen combo';
  if (normalized.includes('tumpak')) return 'Waterfall route added';
  if (normalized.includes('madakaripura')) return 'Canyon waterfall extension';
  if (normalized.includes('ijen')) return 'Ijen in scope';
  return 'Private route';
}

export const TourBrowser = ({ departures }: TourBrowserProps) => {
  const navigate = useNavigate();

  const fallbackDepartures: HomeDepartureItem[] = [
    {
      id: 'surabaya',
      name: 'Departing from Surabaya',
      shortName: 'Surabaya',
      highlight: '1D – 6D Expeditions',
      description: 'Direct access from Juanda International Airport (SUB). Ideal for multi-volcano circuits.',
      tours: SSOT.tours.filter((tour) => tour.route.includes('surabaya')).slice(0, 4).map((tour, index) => ({
        id: `surabaya-${index}`,
        name: tour.name,
        price: tour.price,
        image: tour.image,
        route: tour.route,
        crewName: tour.crewName,
      })),
    },
    {
      id: 'bali',
      name: 'Departing from Bali',
      shortName: 'Bali',
      highlight: '3D – 5D Expeditions',
      description: 'Seamless overland and ferry transfers from your Bali hotel to the volcanic heart of Java.',
      tours: SSOT.tours.filter((tour) => tour.route.includes('bali')).slice(0, 4).map((tour, index) => ({
        id: `bali-${index}`,
        name: tour.name,
        price: tour.price,
        image: tour.image,
        route: tour.route,
        crewName: tour.crewName,
      })),
    },
  ];

  const featuredDepartures = (departures?.length ? departures : fallbackDepartures)
    .map((departure) => ({ ...departure, tours: departure.tours.slice(0, 4) }))
    .filter((departure) => departure.tours.length > 0);

  return (
    <section className="section-spacing bg-white relative overflow-hidden border-b border-slate-100">
      <div className="container-authority mb-16 md:mb-24">
        <div className="max-w-4xl">
          <div className="badge-eyebrow bg-authority-navy text-white mb-6 md:mb-8">
            <Clock className="w-3 h-3" /> Featured Private Routes
          </div>
          <h2 className="heading-section mb-12">
            Choose the <br />
            <span className="text-safety-orange">Route Family.</span>
          </h2>
          <p className="body-text max-w-2xl">
            Start with the entry point that matches your real trip. Surabaya works best for range and flexibility. Bali works when cross-island handling needs to stay controlled from the start.
          </p>
        </div>
      </div>

      <div className="space-y-24 md:space-y-32">
        {featuredDepartures.map((departure) => (
          <div key={departure.id} className="w-full">
            <div className="container-authority mb-12">
              <div className="flex items-center gap-6">
                <div className="h-px flex-1 bg-slate-100"></div>
                <h3 className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400">
                  {departure.name}
                </h3>
                <div className="h-px flex-1 bg-slate-100"></div>
              </div>
            </div>

            <div className="w-full pl-4 md:pl-8 lg:pl-[calc((100vw-80rem)/2+3rem)]">
              <div className="flex overflow-x-auto gap-6 pb-12 pr-4 md:pr-8 snap-x hide-scrollbar">
                <div className="shrink-0 w-[85vw] sm:w-[340px] md:w-[400px] snap-start">
                  <div className="p-8 md:p-12 rounded-md bg-slate-50 border border-slate-100 h-full flex flex-col justify-between aspect-[4/5] shadow-card">
                    <div>
                      <h3 className="text-2xl md:text-4xl font-black text-authority-navy uppercase tracking-tight mb-4 md:mb-6 leading-none">
                        {departure.shortName} <br /> Start
                      </h3>
                      <p className="body-text text-sm md:text-base mb-8 md:mb-10">
                        {departure.description}
                      </p>
                      <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                        <div className="flex items-center gap-4 text-authority-navy font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                          <ShieldCheck className="w-5 h-5 text-safety-orange shrink-0" /> Police Escort
                        </div>
                        <div className="flex items-center gap-4 text-authority-navy font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                          <Users className="w-5 h-5 text-safety-orange shrink-0" /> Private Group
                        </div>
                        <div className="flex items-center gap-4 text-authority-navy font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                          <MapPin className="w-5 h-5 text-safety-orange shrink-0" /> Door-to-Door
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
                        {departure.highlight}
                      </div>
                      <button
                        onClick={() => navigate('/tours')}
                        className="inline-flex items-center gap-2 text-safety-orange font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]"
                      >
                        Open all routes <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {departure.tours.map((tour) => (
                  <div
                    key={tour.route}
                    className="relative shrink-0 w-[85vw] sm:w-[340px] md:w-[400px] aspect-[4/5] snap-start group cursor-pointer rounded-md overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
                    onClick={() => navigate(tour.route)}
                  >
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>

                    {tour.crewName ? (
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-safety-orange text-white text-[8px] md:text-[9px] px-2 py-1 md:px-3 md:py-1.5 rounded-sm font-mono font-black uppercase tracking-[0.2em] z-10 shadow-card">
                        {tour.crewName}
                      </div>
                    ) : null}

                    <div className="absolute bottom-0 left-0 right-0 h-[30%] p-4 md:p-8 flex flex-col justify-end">
                      <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight mb-2 md:mb-4 drop-shadow-lg group-hover:-translate-y-1 transition-transform duration-500 leading-none">
                        {tour.name}
                      </h3>

                      <div className="flex items-center justify-between mb-3 md:mb-5 relative z-10 bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-sm border border-white/10">
                        <div className="flex flex-col">
                          <span className="text-white/60 text-[8px] md:text-[9px] font-mono font-black uppercase tracking-[0.2em] mb-1">Duration</span>
                          <span className="text-white font-black text-[10px] md:text-xs uppercase">{tour.name.split(' ')[0]}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-white/60 text-[8px] md:text-[9px] font-mono font-black uppercase tracking-[0.2em] mb-1">From</span>
                          <span className="text-safety-orange font-black text-sm md:text-base">{tour.price}</span>
                        </div>
                      </div>

                      <div className="pt-3 md:pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-safety-orange" />
                          <span className="text-[10px] md:text-xs text-white font-black uppercase tracking-[0.15em]">{getRouteSignal(tour)}</span>
                        </div>
                        <span className="font-mono text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-white/60">
                          {tour.crewName ? tour.crewName : 'JVTO crew'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-24 md:mt-32 text-center">
        <button
          onClick={() => navigate('/tours')}
          className="w-full sm:w-auto bg-authority-navy hover:bg-slate-800 text-white px-12 py-6 rounded-md font-black uppercase tracking-[0.2em] text-sm transition-all shadow-hover shadow-authority-navy/20 flex items-center justify-center gap-4 mx-auto group"
        >
          View All Private Tours <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
};
