'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Activity, Calendar, ChevronRight, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AuthorityStickyBar = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-[60px] z-[90] w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between gap-4">
        {/* Live Status Section */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex items-center gap-2 px-2 py-1 bg-emerald-50 rounded-full border border-emerald-100 shrink-0">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700">Live</span>
          </div>
          
          <div className="flex items-center gap-2 min-w-0">
            <Activity className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-slate-600 truncate">
              <span className="font-bold text-authority-navy">Ijen Status:</span> Normal (Level 1) • <span className="text-emerald-600 font-bold">Open for Tourism</span>
            </p>
          </div>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-2 shrink-0">
          <button 
            onClick={() => navigate('/travel-guide/weather-and-closures')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-slate-500 hover:text-authority-navy transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Details</span>
          </button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/tours')}
            className="flex items-center gap-2 bg-authority-navy text-white px-4 py-1.5 rounded-md shadow-card shadow-authority-navy/10 group transition-all"
          >
            <Calendar className="w-3.5 h-3.5 text-safety-orange" />
            <span className="font-black uppercase tracking-wider text-[10px] md:text-[11px]">Check Availability</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>
      </div>
      
      {/* Subtle Progress/Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );
};

