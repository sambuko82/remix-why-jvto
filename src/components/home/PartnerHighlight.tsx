import React from 'react';
import { motion } from 'motion/react';
import { Handshake, ChevronRight, ShieldCheck, ExternalLink, Globe, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';

export const PartnerHighlight = () => {
  const navigate = useNavigate();
  const highlight = SSOT.hub_content.trust_stack.cards[5] as any;

  if (!highlight) return null;

  return (
    <section id="strategic-affiliations" className="py-24 bg-audit-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-md bg-authority-navy text-white overflow-hidden border border-white/10 shadow-hover"
        >
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-safety-orange/10 via-transparent to-blue-500/10 pointer-events-none" />
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Narrative */}
            <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="p-3 rounded-md bg-safety-orange/20 border border-safety-orange/30">
                  <Handshake className="w-6 h-6 text-safety-orange" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.4em] font-black text-safety-orange">Strategic Affiliations</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black mb-8 uppercase leading-[0.9] tracking-tighter"
              >
                {highlight.title.split(' ').slice(0, 2).join(' ')} <br />
                <span className="text-safety-orange">{highlight.title.split(' ').slice(2).join(' ')}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl font-light text-white/70 leading-relaxed mb-10 max-w-xl border-l-2 border-safety-orange/30 pl-8"
              >
                {highlight.narrative}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate(highlight.link)}
                  className="px-8 py-4 bg-safety-orange hover:bg-safety-orange/90 text-white rounded-md font-black uppercase tracking-widest transition-all shadow-card shadow-safety-orange/20 flex items-center gap-3 group"
                >
                  <span>Verify Standards</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-md border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-verified-bright" />
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-white/60">Audit Status: PASS</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Logos & Proof */}
            <div className="p-8 md:p-16 lg:p-20 bg-black/20 backdrop-blur-sm flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlight.partners?.map((partner: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="group/partner relative bg-white rounded-md p-8 flex flex-col items-center justify-center gap-6 shadow-hover hover:shadow-safety-orange/10 transition-all duration-500 border border-white/5"
                  >
                    {/* Verification Badge */}
                    <div className="absolute -top-3 -right-3 bg-authority-navy text-white p-2 rounded-md shadow-card border border-white/10 z-20 group-hover/partner:scale-110 transition-transform">
                      <ShieldCheck className="w-4 h-4 text-verified-bright" />
                    </div>

                    <div className="relative w-full aspect-video flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain grayscale group-hover/partner:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-1 group-hover/partner:text-safety-orange transition-colors">
                        {partner.name}
                      </span>
                      <div className="flex items-center gap-1.5 opacity-0 group-hover/partner:opacity-100 transition-opacity">
                        <ExternalLink className="w-3 h-3 text-slate-300" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">View Registry</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Community Impact Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-safety-orange/10 border border-safety-orange/30 rounded-md p-8 flex flex-col justify-center items-center text-center gap-4 group cursor-pointer hover:bg-safety-orange/20 transition-all"
                >
                  <Globe className="w-10 h-10 text-safety-orange mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-black uppercase tracking-tighter text-white">Local Impact</h4>
                  <p className="text-xs text-white/60 font-medium leading-relaxed">
                    100% of our operations support local conservation and community development.
                  </p>
                </motion.div>
              </div>

              <div className="mt-12 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-safety-orange" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 font-bold">Industry Compliance 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-1 w-8 bg-safety-orange/30 rounded-full overflow-hidden">
                    <div className="h-full bg-safety-orange w-3/4 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
