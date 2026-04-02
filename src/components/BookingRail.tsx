import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ShieldCheck, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { SSOT } from '../lib/ssot';

export const BookingRail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [auditProgress, setAuditProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show rail after scrolling 300px
      setIsVisible(scrollY > 300);

      // Calculate progress based on scroll
      const progress = Math.min(100, Math.round((scrollY / (documentHeight - windowHeight)) * 100));
      setAuditProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/6281235061451?text=${encodeURIComponent("I have audited the JVTO infrastructure and would like to initiate a secure booking for an Ijen expedition.")}`;

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
            <div className="absolute top-0 left-0 h-[2px] bg-verified-bright transition-all duration-300" style={{ width: `${auditProgress}%` }}></div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="hidden sm:flex p-3 bg-verified-bright/10 rounded-full text-verified-bright relative">
                <ShieldCheck className="w-6 h-6" />
                {auditProgress > 80 && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1"
                  >
                    <CheckCircle2 className="w-4 h-4 text-verified-bright fill-authority-navy" />
                  </motion.div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`flex h-2 w-2 rounded-full ${auditProgress > 90 ? 'bg-verified-bright' : 'bg-safety-orange'} animate-pulse`}></span>
                  <span className="font-mono text-[11px] text-white/70 font-bold uppercase tracking-widest">
                    {auditProgress < 50 ? 'Audit_In_Progress' : auditProgress < 90 ? 'Verification_Deepening' : 'Audit_Complete_Ready_To_Deploy'}
                  </span>
                </div>
                <h4 className="text-white font-black text-sm md:text-lg uppercase leading-none">
                  {auditProgress > 90 ? 'Verified Booking Protocol Active' : 'Continue Your Audit'}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-md md:rounded-md font-black uppercase tracking-tight transition-all group shadow-card text-sm md:text-base ${
                  auditProgress > 70 
                    ? 'bg-safety-orange hover:bg-safety-orange/90 text-white shadow-safety-orange/20' 
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
                onClick={(e) => {
                  if (auditProgress <= 70) {
                    e.preventDefault();
                    window.scrollTo({ top: window.scrollY + 500, behavior: 'smooth' });
                  }
                }}
              >
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                <span>{auditProgress > 70 ? 'Deploy Verified Booking' : 'Audit More to Unlock'}</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="hidden lg:flex flex-col items-end mr-4">
                <div className="flex items-center gap-2 text-white/50 font-mono text-[11px] uppercase tracking-widest mb-1">
                  <Lock className="w-3 h-3" /> Encrypted_Channel
                </div>
                <span className="text-white/70 font-mono text-[11px]">Audit_Score: {auditProgress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
