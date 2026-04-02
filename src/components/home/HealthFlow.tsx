import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, ShieldAlert, HeartPulse, ClipboardCheck, ChevronRight, Stethoscope, FileText } from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { motion } from 'motion/react';

export const HealthFlow = () => {
  const navigate = useNavigate();

  const steps = SSOT.health_protocol.parameters.map((param, i) => ({
    icon: param.icon === 'HeartPulse' ? HeartPulse : param.icon === 'Activity' ? Activity : param.icon === 'Stethoscope' ? Stethoscope : ClipboardCheck,
    title: param.title,
    desc: param.desc,
    step: `0${i + 1}`
  }));

  const mainImage = SSOT.assets.find(a => a.slug === 'ijen-screening-hotel-01');

  return (
    <section className="section-spacing bg-audit-white relative overflow-hidden">
      <div className="container-authority">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left: Content & Protocol */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="badge-eyebrow bg-authority-navy text-white mb-8">
                <ShieldAlert className="w-3 h-3" /> Medical "Hard Stop" Protocol
              </div>
              <h2 className="heading-section mb-8">
                Ijen Health Screening — <br />
                <span className="text-safety-orange">Mandatory, Included.</span>
              </h2>
              <p className="body-text mb-12">
                Ijen health screening is mandatory by Indonesian law to hike Ijen. {SSOT.organization.name} arranges your pre-ascent screening with a licensed physician. The cost is included in all Ijen packages — no extra charge.
              </p>
            </motion.div>

            <div className="flex flex-col gap-8 mb-12">
              {steps.map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="p-4 rounded-md bg-slate-50 text-safety-orange group-hover:bg-safety-orange group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-[10px] text-safety-orange font-bold tracking-widest">{item.step}</span>
                      <h3 className="font-black text-authority-navy uppercase tracking-tight text-base md:text-lg">{item.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/travel-guide/ijen-health-screening')}
              className="group inline-flex items-center justify-center w-full sm:w-auto gap-4 bg-authority-navy text-white px-10 py-5 rounded-md font-black uppercase tracking-[0.2em] text-sm transition-all hover:bg-slate-800 shadow-hover shadow-authority-navy/20"
            >
              View Full Medical Protocol <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right: Consolidated Evidence & Data */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-md overflow-hidden bg-slate-100 aspect-[4/5] shadow-hover mb-8"
            >
              {mainImage && (
                <img 
                  src={mainImage.url} 
                  alt={mainImage.alt} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/80 via-transparent to-transparent flex items-end p-8 md:p-12">
                 <div className="text-white">
                   <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-safety-orange animate-pulse" />
                      <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest font-bold">Live Screening Operations</span>
                   </div>
                   <p className="text-lg md:text-xl font-light leading-tight max-w-md">{mainImage?.alt}</p>
                 </div>
              </div>
            </motion.div>

            {/* Data Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-slate-50 p-6 rounded-md border border-slate-100 shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Requirement</span>
                </div>
                <p className="font-black text-authority-navy text-lg md:text-xl uppercase tracking-tight leading-none">Surat Sehat</p>
                <p className="text-xs text-slate-500 mt-2">Official Health Certificate</p>
              </div>
              <div className="bg-authority-navy p-6 rounded-md text-white shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-safety-orange" />
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">Clearance</span>
                </div>
                <p className="font-black text-safety-orange text-lg md:text-xl uppercase tracking-tight leading-none">100%</p>
                <p className="text-xs text-slate-400 mt-2">Guests Screened Pre-Ascent</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
