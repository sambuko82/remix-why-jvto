'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, FileText, ExternalLink, BadgeCheck, Scale, CheckCircle2 } from 'lucide-react';
import { SSOT } from '../../lib/ssot';

export const FounderSpotlight = () => {
  const founder = SSOT.organization.founder;
  const portrait = SSOT.assets.find(a => a.slug === 'mr-sam-tourist-police-portrait');
  const proofLinks = [
    { title: 'Legal proof', href: '/verify-jvto/legal' },
    { title: 'Police-safety proof', href: '/verify-jvto/police-safety' },
    { title: 'Field team context', href: '/team' },
  ];

  return (
    <section className="section-spacing bg-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />
      
      <div className="container-authority relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Portrait */}
              <div className="relative rounded-md overflow-hidden shadow-hover border-8 border-white group">
                <img 
                  src={portrait?.url} 
                  alt={portrait?.alt}
                  className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-safety-orange rounded-md">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/70 leading-none mb-1">Official ID</p>
                      <p className="font-black text-white uppercase tracking-tight text-sm">POLRI Ditpamobvit</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-safety-orange/30 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-authority-navy/20 -z-10" />
            </motion.div>

            {/* Context Card - Floating */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-10 -right-6 md:right-0 bg-authority-navy text-white p-6 rounded-md shadow-hover max-w-[280px] hidden md:block"
            >
              <div className="flex items-center gap-3 mb-4">
                <BadgeCheck className="w-6 h-6 text-safety-orange" />
                <span className="font-black uppercase tracking-widest text-xs">Dual-Authority</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                "As an active officer, I don't just sell tours. I enforce safety standards that protect both travelers and the volcanic environment."
              </p>
              <div className="h-px w-full bg-white/10 mb-4" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">Verified Status</span>
                <span className="text-[10px] font-bold text-verified-bright uppercase">Active Duty</span>
              </div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full mb-6">
                <Scale className="w-3 h-3 text-authority-navy" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-authority-navy">Leadership Spotlight</span>
              </div>

              <h2 className="heading-section mb-6">
                The Authority Behind <span className="text-safety-orange">The Expedition.</span>
              </h2>

              <div className="space-y-6 mb-10">
                <p className="body-text">
                  Meet <strong>{founder.name}</strong>, widely known as Mr. Sam. He is the architect of JVTO's safety-first philosophy and an active officer in the <strong>{founder.unit}</strong> of the Indonesian National Police.
                </p>
                
                <p className="body-text">
                  His role changes how JVTO handles private routes. Safety decisions stay operational, Ijen seriousness is surfaced early, and guests are pointed toward proof before payment instead of being asked to trust the brand blindly.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-slate-50 rounded-md border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-4 h-4 text-safety-orange" />
                    <span className="font-bold text-sm text-authority-navy uppercase tracking-tight">Private-Only Handling</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Routes are designed around dedicated handling, clear transfer logic, and adult decision-making rather than shared-tour shortcuts.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-md border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-4 h-4 text-safety-orange" />
                    <span className="font-bold text-sm text-authority-navy uppercase tracking-tight">Proof Ownership</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Legal, police-safety, review, and history pages stay separated so guests can check claims directly before moving toward booking.
                  </p>
                </div>
              </div>

              {/* CTA / Proof Link */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button 
                  onClick={() => window.location.href = '/verify-jvto/police-safety'}
                  className="w-full sm:w-auto bg-authority-navy text-white px-10 py-5 rounded-md font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-hover shadow-authority-navy/20 flex items-center justify-center gap-4 group"
                >
                  View Police Credentials
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <div className="grid gap-2 text-left">
                  {proofLinks.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => window.location.href = item.href}
                      className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-slate-500 hover:text-authority-navy transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-safety-orange" />
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

