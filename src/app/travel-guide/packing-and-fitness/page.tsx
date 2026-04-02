import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Info, 
  ArrowLeft, 
  Lock, 
  ShieldCheck,
  ChevronRight,
  Wind,
  Thermometer,
  Footprints,
  Backpack,
  HeartPulse,
  Mountain
} from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';
import { AuditStamp } from '../../../components/AuditStamp';

export default function PackingAndFitness() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/travel-guide/packing-and-fitness'];

  const packingList = SSOT.travel_guide.packing_and_fitness.packingList;
  const fitnessLevels = SSOT.travel_guide.packing_and_fitness.fitnessLevels;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Thermometer': return Thermometer;
      case 'Footprints': return Footprints;
      case 'Backpack': return Backpack;
      case 'Mountain': return Mountain;
      case 'HeartPulse': return HeartPulse;
      case 'Wind': return Wind;
      default: return Info;
    }
  };

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/travel-guide')}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Travel Guide
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Prep_Protocol_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-5xl relative z-10">
        <PageSEO route="/travel-guide/packing-and-fitness" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <Backpack className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Preparation Standards</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'PACKING & FITNESS.'}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-tight font-light max-w-2xl">
            Success in volcanic environments depends on preparation. Use this guide to ensure you have the right gear and understand the physical demands of each site.
          </p>
        </motion.div>

        {/* Fitness Section */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-black text-authority-navy uppercase tracking-tight mb-8 md:mb-12">Fitness Expectations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {fitnessLevels.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bento-card bg-audit-white p-6 md:p-8 border-t-4 border-t-authority-navy"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 text-safety-orange flex items-center justify-center border border-slate-100 mb-6">
                  {React.createElement(getIcon(item.icon), { className: "w-5 h-5 md:w-6 md:h-6" })}
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-authority-navy text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
                  {item.level}
                </div>
                <h3 className="text-lg md:text-xl font-black text-authority-navy uppercase mb-3 tracking-tight">{item.site}</h3>
                <p className="text-slate-500 text-sm leading-tight font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Packing List Section */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-black text-authority-navy uppercase tracking-tight mb-8 md:mb-12">Packing Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {packingList.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bento-card bg-audit-white p-6 md:p-8"
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-authority-navy flex items-center justify-center border border-slate-100">
                    {React.createElement(getIcon(category.icon), { className: "w-5 h-5" })}
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-authority-navy uppercase tracking-tight">{category.category}</h3>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-500 text-sm leading-tight font-light">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-safety-orange shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gear Provided Notice */}
        <div className="p-8 md:p-12 bg-authority-navy text-white rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="scanline"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-10 md:gap-12">
            <div className="max-w-md">
              <div className="badge-eyebrow badge-eyebrow-white mb-6">
                <ShieldCheck className="w-3 h-3" /> JVTO Provided Gear
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-none mb-4">We Supply <br />The Tech.</h2>
              <p className="text-slate-400 text-base md:text-lg font-light leading-tight">
                For every Ijen expedition, we provide professional-grade gas masks with specialized filters and headlamps. We don't use cheap, unverified masks.
              </p>
            </div>
            <button 
              onClick={() => navigate('/travel-guide/safety-on-tours')}
              className="w-full md:w-auto bg-white text-authority-navy px-8 md:px-10 py-4 md:py-5 rounded-xl font-black uppercase tracking-wider transition-all hover:bg-slate-100 flex items-center justify-center gap-3 group"
            >
              Safety Standards <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Footer Audit Stamp */}
        <AuditStamp title="PREP_VERIFIED" subtitle="Registry 2026" system="JVTO_DOCS_V1.9" />
      </div>
    </div>
  );
}
