'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ShieldCheck, ArrowRight, Lock } from 'lucide-react';
import { useNavigate } from '@/lib/router-compat';

export const BookingRail = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [readinessProgress, setReadinessProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show rail after scrolling 300px
      setIsVisible(scrollY > 300);

      // Calculate progress based on scroll
      const progress = Math.min(100, Math.round((scrollY / (documentHeight - windowHeight)) * 100));
      setReadinessProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-20 md:bottom-8 left-0 right-0 z-[90] pointer-events-none flex justify-center px-4 md:px-6"
        >
          <div className="pointer-events-auto w-full max-w-5xl bg-authority-navy/95 backdrop-blur-xl border border-white/10 p-4 md:p-4 rounded-md md:rounded-md shadow-hover flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 h-[2px] bg-verified-bright transition-all duration-300" style={{ width: `${readinessProgress}%` }}></div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="hidden sm:flex p-3 bg-verified-bright/10 rounded-full text-verified-bright relative">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`flex h-2 w-2 rounded-full ${readinessProgress > 90 ? 'bg-verified-bright' : 'bg-safety-orange'} animate-pulse`}></span>
                  <span className="font-mono text-[11px] text-white/70 font-bold uppercase tracking-widest">
                    {readinessProgress < 50 ? 'Readiness_Path' : readinessProgress < 90 ? 'Keep_Route_Context_Visible' : 'Ready_To_Contact'}
                  </span>
                </div>
                <h4 className="text-white font-black text-sm md:text-lg uppercase leading-none">
                  {readinessProgress > 90 ? 'Open Official Contact Channels' : 'Use Contact Once The Route Is Clear'}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => navigate('/contact')}
                className="flex-1 md:flex-none flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-md md:rounded-md font-black uppercase tracking-tight transition-all group shadow-card text-sm md:text-base bg-safety-orange hover:bg-safety-orange/90 text-white shadow-safety-orange/20"
              >
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                <span>Open Contact</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="hidden lg:flex flex-col items-end mr-4">
                <div className="flex items-center gap-2 text-white/50 font-mono text-[11px] uppercase tracking-widest mb-1">
                  <Lock className="w-3 h-3" /> Official_Channels
                </div>
                <span className="text-white/70 font-mono text-[11px]">Readiness: {readinessProgress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

