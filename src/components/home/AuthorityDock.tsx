import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Activity, 
  CloudSun, 
  MessageSquare, 
  Lock, 
  ChevronUp,
  AlertCircle
} from 'lucide-react';

export const AuthorityDock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const statusItems = [
    { label: 'Police Liaison', value: 'Active', icon: ShieldCheck, color: 'text-verified-bright' },
    { label: 'Medical Desk', value: 'Standby', icon: Activity, color: 'text-blue-400' },
    { label: 'Volcanic Alert', value: 'Normal', icon: AlertCircle, color: 'text-verified-bright' },
    { label: 'Weather (Ijen)', value: 'Clear', icon: CloudSun, color: 'text-amber-400' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-4xl"
        >
          <div className="relative">
            {/* Expanded Status Panel */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="absolute bottom-full left-0 right-0 mb-4 bg-authority-navy/95 backdrop-blur-xl border border-white/10 rounded-md overflow-hidden shadow-hover"
                >
                  <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {statusItems.map((item, idx) => (
                      <div key={idx} className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <item.icon className={`w-4 h-4 ${item.color}`} />
                          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">{item.label}</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-black text-white uppercase tracking-tight">{item.value}</span>
                          <div className={`w-1.5 h-1.5 rounded-full ${item.color === 'text-verified-bright' ? 'bg-verified-bright animate-pulse' : 'bg-white/20'}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/5 p-4 text-center border-t border-white/5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">Last System Sync: {new Date().toLocaleTimeString()} UTC</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Dock Bar */}
            <div className="bg-authority-navy/90 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-hover flex items-center justify-between gap-4">
              {/* Status Toggle */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-3 pl-6 pr-4 py-3 hover:bg-white/5 rounded-full transition-colors group"
              >
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-verified-bright/20 border border-verified-bright/30 flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-verified-bright" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-blue-400/20 border border-blue-400/30 flex items-center justify-center">
                    <Activity className="w-3 h-3 text-blue-400" />
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white/40 leading-none mb-1">System Status</span>
                  <span className="text-[11px] font-black text-white uppercase tracking-tight flex items-center gap-2">
                    All Clear <ChevronUp className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </span>
                </div>
              </button>

              {/* Center Divider */}
              <div className="h-8 w-px bg-white/10 hidden md:block" />

              {/* Quick Actions */}
              <div className="flex items-center gap-2 pr-2">
                <a 
                  href="https://wa.me/6282244788833" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-full transition-all border border-white/5 group"
                >
                  <MessageSquare className="w-4 h-4 text-safety-orange group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Direct Inquiry</span>
                </a>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-safety-orange hover:bg-safety-orange/90 text-white px-6 py-3 rounded-full font-black uppercase tracking-widest text-[10px] transition-all shadow-hover shadow-safety-orange/20 flex items-center gap-2"
                >
                  <Lock className="w-3 h-3" /> Secure Booking
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
