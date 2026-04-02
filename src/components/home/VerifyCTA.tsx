import React from 'react';
import { Search, ShieldCheck, Lock, Activity, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export const VerifyCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-audit-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative p-8 md:p-20 rounded-md bg-authority-navy text-white overflow-hidden shadow-hover">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 grid-pattern z-0 opacity-10"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="badge-eyebrow badge-eyebrow-orange mb-6 md:mb-8">
              <Lock className="w-3 h-3" /> System Audit Ready
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6 md:mb-8">
              Ready to <br />
              <span className="text-safety-orange text-4xl xs:text-5xl md:text-8xl">Audit Our System?</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-300 mb-10 md:mb-12 leading-tight font-light">
              Don't take our word for it. Audit our legal entity, police liaison, and medical protocols in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => navigate('/verify-jvto')}
                className="w-full sm:w-auto bg-safety-orange hover:bg-safety-orange/90 text-white px-8 md:px-10 py-4 md:py-5 rounded-md font-black uppercase tracking-wider text-xs md:text-sm transition-all shadow-hover shadow-safety-orange/20 flex items-center justify-center gap-3 group"
              >
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" /> Start Forensic Audit
              </button>
              <button 
                onClick={() => navigate('/why-jvto/the-jvto-difference')}
                className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-md font-black uppercase tracking-wider text-xs md:text-sm transition-all flex items-center justify-center gap-3"
              >
                The JVTO Difference <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Floating Icons for Visual Interest */}
          <div className="absolute top-20 right-20 hidden lg:block opacity-20">
            <ShieldCheck className="w-40 h-40 text-safety-orange" />
          </div>
          <div className="absolute bottom-20 right-40 hidden lg:block opacity-10">
            <Activity className="w-60 h-60 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
