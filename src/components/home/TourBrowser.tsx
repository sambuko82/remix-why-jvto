import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, MapPin, Clock, Users, ShieldCheck, Star, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';

export const TourBrowser = () => {
  const navigate = useNavigate();
  const [durationFilter, setDurationFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  const getDurationDays = (name: string) => {
    const match = name.match(/(\d+)D/);
    return match ? parseInt(match[1]) : 0;
  };

  const getPriceValue = (priceStr: string) => {
    const match = priceStr.replace(/,/g, '').match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const tourDepartures = [
    {
      id: 'surabaya',
      name: 'Departing from Surabaya',
      shortName: 'Surabaya',
      highlight: '1D – 6D Expeditions',
      description: 'Direct access from Juanda International Airport (SUB). Ideal for multi-volcano circuits.',
      tours: SSOT.tours.filter(t => t.route.includes('surabaya'))
    },
    {
      id: 'bali',
      name: 'Departing from Bali',
      shortName: 'Bali',
      highlight: '3D – 5D Expeditions',
      description: 'Seamless overland and ferry transfers from your Bali hotel to the volcanic heart of Java.',
      tours: SSOT.tours.filter(t => t.route.includes('bali'))
    }
  ];

  const filteredDepartures = tourDepartures.map(departure => {
    const filteredTours = departure.tours.filter(tour => {
      const duration = getDurationDays(tour.name);
      const price = getPriceValue(tour.price);

      const durationMatch = 
        durationFilter === 'all' ||
        (durationFilter === '1-2' && duration <= 2) ||
        (durationFilter === '3-4' && duration >= 3 && duration <= 4) ||
        (durationFilter === '5+' && duration >= 5);

      const priceMatch = 
        priceFilter === 'all' ||
        (priceFilter === 'under-2m' && price < 2000000) ||
        (priceFilter === '2m-3m' && price >= 2000000 && price < 3000000) ||
        (priceFilter === '3m-4m' && price >= 3000000 && price < 4000000) ||
        (priceFilter === 'over-4m' && price >= 4000000);

      return durationMatch && priceMatch;
    });

    // Limit to 6 tours per departure city for display
    return { ...departure, tours: filteredTours.slice(0, 6) };
  }).filter(d => d.tours.length > 0);

  return (
    <section className="section-spacing bg-white relative overflow-hidden border-b border-slate-100">
      <div className="container-authority mb-16 md:mb-24">
        <div className="max-w-4xl">
          <div className="badge-eyebrow bg-authority-navy text-white mb-6 md:mb-8">
            <Clock className="w-3 h-3" /> Choose Your Departure City
          </div>
          <h2 className="heading-section mb-12">
            Choose Your <br />
            <span className="text-safety-orange">Departure City.</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-8 md:gap-12 p-8 md:p-10 bg-slate-50 rounded-md border border-slate-100">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-authority-navy font-mono text-[10px] font-black uppercase tracking-[0.2em]">
                <Filter className="w-3 h-3 text-safety-orange" /> Duration
              </div>
              <div className="flex flex-wrap gap-2">
                {['all', '1-2', '3-4', '5+'].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => setDurationFilter(opt)}
                    className={`px-5 py-2.5 rounded-sm font-mono text-[10px] font-black uppercase tracking-widest transition-all border ${durationFilter === opt ? 'bg-authority-navy text-white border-authority-navy shadow-card' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200'}`}
                  >
                    {opt === 'all' ? 'All' : opt + ' Days'}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-authority-navy font-mono text-[10px] font-black uppercase tracking-[0.2em]">
                <Filter className="w-3 h-3 text-safety-orange" /> Price Range
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'under-2m', label: '< 2M' },
                  { id: '2m-3m', label: '2M - 3M' },
                  { id: '3m-4m', label: '3M - 4M' },
                  { id: 'over-4m', label: '> 4M' }
                ].map(opt => (
                  <button 
                    key={opt.id}
                    onClick={() => setPriceFilter(opt.id)}
                    className={`px-5 py-2.5 rounded-sm font-mono text-[10px] font-black uppercase tracking-widest transition-all border ${priceFilter === opt.id ? 'bg-authority-navy text-white border-authority-navy shadow-card' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-24 md:space-y-32">
        {filteredDepartures.length > 0 ? (
          filteredDepartures.map((departure) => (
            <div key={departure.id} className="w-full">
              {/* Row Header */}
              <div className="container-authority mb-12">
                <div className="flex items-center gap-6">
                  <div className="h-px flex-1 bg-slate-100"></div>
                  <h3 className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400">
                    {departure.name}
                  </h3>
                  <div className="h-px flex-1 bg-slate-100"></div>
                </div>
              </div>

              {/* Full-bleed scrollable container for tours */}
              <div className="w-full pl-4 md:pl-8 lg:pl-[calc((100vw-80rem)/2+3rem)]">
                <div className="flex overflow-x-auto gap-6 pb-12 pr-4 md:pr-8 snap-x hide-scrollbar">
                  {/* Info Card (First item in scroll) */}
                  <div className="shrink-0 w-[85vw] sm:w-[340px] md:w-[400px] snap-start">
                    <div className="p-8 md:p-12 rounded-md bg-slate-50 border border-slate-100 h-full flex flex-col justify-between aspect-[4/5] shadow-card">
                      <div>
                        <h3 className="text-2xl md:text-4xl font-black text-authority-navy uppercase tracking-tight mb-4 md:mb-6 leading-none">
                          {departure.shortName} <br /> Logistics
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
                      <div className="font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
                        {departure.highlight}
                      </div>
                    </div>
                  </div>

                  {/* Tour Cards */}
                  {departure.tours.map(tour => (
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
                      
                      {/* Top Badge */}
                      {tour.crewName && (
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-safety-orange text-white text-[8px] md:text-[9px] px-2 py-1 md:px-3 md:py-1.5 rounded-sm font-mono font-black uppercase tracking-[0.2em] z-10 shadow-card">
                          {tour.crewName}
                        </div>
                      )}
                      
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
                            <div className="flex items-center text-safety-orange">
                              <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                              <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                              <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                              <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                              <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                            </div>
                            <span className="text-[10px] md:text-xs text-white font-black">5.0</span>
                          </div>
                          <span className="font-mono text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-white/60">
                            Moderate
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="container-authority py-24 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-md flex items-center justify-center text-slate-200 mx-auto mb-8 shadow-card">
              <Filter className="w-10 h-10" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-authority-navy uppercase mb-4 tracking-tight">No Tours Found</h3>
            <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
              We couldn't find any tours matching your current filters. Try adjusting your duration or price range.
            </p>
            <button 
              onClick={() => { setDurationFilter('all'); setPriceFilter('all'); }}
              className="px-8 py-4 bg-authority-navy text-white rounded-md font-mono text-[11px] font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Global View All Button */}
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
