import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { motion } from 'motion/react';
import { MapPin, Clock, Users, ShieldCheck, ChevronRight } from 'lucide-react';

export default function ToursHub() {
  const navigate = useNavigate();
  const tours = SSOT.tours;

  return (
    <div className="min-h-screen bg-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <PageSEO route="/tours" />
      
      {/* Header */}
      <div className="border-b border-slate-100 bg-white/80 relative z-40 backdrop-blur-xl sticky top-0">
        <div className="container-authority py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-safety-orange text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
            <MapPin className="w-4 h-4" /> Tour Registry
          </div>
          <div className="flex items-center gap-6 md:gap-10">
            <button onClick={() => navigate('/why-jvto')} className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-authority-navy transition-colors">Why JVTO</button>
            <button onClick={() => navigate('/verify-jvto')} className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-authority-navy transition-colors">Verify</button>
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
            <Clock className="w-3.5 h-3.5" /> Expedition Catalog
          </div>
          <h1 className="text-5xl md:text-9xl font-black text-authority-navy mb-10 leading-[0.85] uppercase tracking-tighter">
            VERIFIED <br />
            <span className="text-safety-orange">EXPEDITIONS.</span>
          </h1>
          <p className="body-text max-w-2xl">
            Explore our curated selection of private tours, led by certified guides and supported by our rigorous safety protocols.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {tours.map((tour, idx) => (
            <motion.div
              key={tour.route}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(tour.route)}
              className="group cursor-pointer relative aspect-[4/5] rounded-md overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
            >
              <img 
                src={tour.image}
                alt={tour.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              
              {tour.crewName && (
                <div className="absolute top-6 left-6 bg-safety-orange text-white text-[10px] px-4 py-2 rounded-sm font-mono font-black uppercase tracking-[0.2em] z-10 shadow-card">
                  {tour.crewName}
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 h-[30%] p-6 md:p-8 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3 md:mb-4 drop-shadow-lg group-hover:-translate-y-1 transition-transform duration-500 leading-none">
                  {tour.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4 md:mb-5 relative z-10 bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-sm border border-white/10">
                  <div className="flex flex-col">
                    <span className="text-white/60 text-[9px] font-mono font-black uppercase tracking-[0.2em] mb-1">Duration</span>
                    <span className="text-white font-black text-xs uppercase">{tour.name.split(' ')[0]}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-white/60 text-[9px] font-mono font-black uppercase tracking-[0.2em] mb-1">From</span>
                    <span className="text-safety-orange font-black text-base md:text-lg">{tour.price}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-safety-orange font-mono text-[10px] uppercase tracking-[0.2em] font-black">
                    <ShieldCheck className="w-4 h-4" /> Verified Route
                  </div>
                  <div className="w-10 h-10 rounded-md bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-safety-orange transition-all duration-500">
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
