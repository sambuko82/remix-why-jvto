import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, MapPin, Award, Star, Phone, Mail } from 'lucide-react';

interface CrewProfileModalProps {
  crew: any;
  isOpen: boolean;
  onClose: () => void;
}

export const CrewProfileModal: React.FC<CrewProfileModalProps> = ({ crew, isOpen, onClose }) => {
  if (!crew) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-[#151619] border border-white/10 rounded-md overflow-hidden shadow-hover flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Left: Image Section */}
            <div className="w-full md:w-2/5 relative h-[400px] md:h-auto">
              <img 
                src={crew.profile.image} 
                alt={crew.name}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151619] via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-white font-semibold">
                    {crew.profile.archetype}
                  </span>
                </div>
                <h2 className="text-4xl font-light text-white tracking-tight mb-1">{crew.name}</h2>
                <p className="text-white/60 font-mono text-sm uppercase tracking-wider">{crew.role}</p>
              </div>
            </div>

            {/* Right: Content Section */}
            <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto max-h-[80vh] md:max-h-none">
              <div className="space-y-10">
                {/* Quote */}
                <section>
                  <p className="text-2xl font-serif italic text-white/90 leading-relaxed">
                    "{crew.profile.fullQuote}"
                  </p>
                </section>

                {/* Expertise & Credentials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <section>
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-4">Expertise</h3>
                    <ul className="space-y-3">
                      {crew.profile.expertise.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-3 text-white/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          <span className="font-mono text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-4">Official Credential</h3>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-md">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-white/10 rounded-md">
                          <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{crew.profile.credential.name}</p>
                          <p className="text-white/40 text-xs mt-1">Issued by {crew.profile.credential.issuer}</p>
                          <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-[10px] font-bold uppercase tracking-wider">
                            <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                            {crew.profile.credential.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Safety Metrics */}
                <section>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {crew.profile.safetyMetrics.map((metric: any, idx: number) => (
                      <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-md">
                        <div className="flex justify-between items-end mb-4">
                          <div>
                            <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{metric.label}</p>
                            <p className="text-3xl font-mono text-white">{metric.value}%</p>
                          </div>
                          <div className="flex gap-1 items-end h-12">
                            {metric.history.map((h: number, i: number) => (
                              <div 
                                key={i} 
                                className="w-2 bg-white/20 rounded-t-sm"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.value}%` }}
                            className="h-full bg-white/40"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Contact CTA */}
                <section className="pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-4">
                    <button className="flex-1 bg-white text-black px-6 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Request for My Tour
                    </button>
                    <button className="px-6 py-4 border border-white/20 rounded-md text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
