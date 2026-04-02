import React, { useState } from 'react';
import { Activity, Stethoscope, FileCheck, ArrowLeft, ShieldCheck, HeartPulse, AlertTriangle, CheckCircle2, Lock, Fingerprint, Search, Database, ShieldAlert, ClipboardCheck, QrCode, ChevronRight, UserCheck, Timer, FileDigit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion, AnimatePresence } from 'motion/react';
import { BookingRail } from '../../../components/BookingRail';

export default function IjenHealthScreening() {
  const navigate = useNavigate();
  const onBack = () => navigate('/');
  const [activeStep, setActiveStep] = useState(0);
  const meta = SSOT.pages['/travel-guide/ijen-health-screening'];

  const parameters = SSOT.health_protocol.parameters;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return HeartPulse;
      case 'Activity': return Activity;
      case 'AlertTriangle': return AlertTriangle;
      default: return Activity;
    }
  };

  const proceduralFlow = SSOT.health_protocol.steps.map((step, idx) => ({
    title: step.title,
    icon: idx === 0 ? <Stethoscope className="w-6 h-6" /> : idx === 1 ? <FileDigit className="w-6 h-6" /> : <QrCode className="w-6 h-6" />,
    desc: step.desc
  }));

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Safety Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Activity className="w-4 h-4" /> Medical Protocol v2.0
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-6xl relative z-10">
        <PageSEO route="/travel-guide/ijen-health-screening" />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="badge-eyebrow badge-eyebrow-orange mb-6 md:mb-8">
            <Stethoscope className="w-4 h-4" /> Supervised by Licensed Physician
          </div>
          <h1 className="text-4xl md:text-9xl font-black text-authority-navy mb-6 md:mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'MEDICAL OVERSIGHT.'}
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-tight font-light">
            Safety is not optional. Every guest climbing Mount Ijen must undergo a medical screening to ensure they are fit for the high-altitude environment and volcanic conditions.
          </p>
        </motion.div>

        {/* Procedural Flow (Check -> Record -> Scan QR) */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-2 mb-8 md:mb-12 justify-center">
            <Timer className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-slate-500">The Medical Clearance Flow</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-slate-100 -translate-y-1/2 z-0"></div>
            
            {proceduralFlow.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative z-10 bento-card p-8 md:p-10 text-center transition-all duration-500 group ${activeStep === idx ? 'bg-authority-navy text-white md:scale-105 shadow-2xl' : 'bg-audit-white'}`}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] mx-auto mb-6 md:mb-8 flex items-center justify-center transition-all duration-500 ${activeStep === idx ? 'bg-safety-orange text-white' : 'bg-slate-50 text-slate-500'}`}>
                  {step.icon}
                </div>
                <div className={`font-mono text-[10px] md:text-[11px] uppercase tracking-widest mb-3 md:mb-4 ${activeStep === idx ? 'text-safety-orange' : 'text-slate-500'}`}>Step 0{idx + 1}</div>
                <h3 className="text-xl md:text-2xl font-black uppercase leading-none mb-3 md:mb-4">{step.title}</h3>
                <p className={`text-xs md:text-sm leading-tight font-light ${activeStep === idx ? 'text-slate-300' : 'text-slate-500'}`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Doctor Verification Block */}
        <section className="mb-24 md:mb-32">
          <div className="bento-card bg-audit-white p-0 overflow-hidden shadow-2xl border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              
              {/* Left: Doctor Profile */}
              <div className="lg:col-span-2 bg-authority-navy p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="scanline"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 text-verified-bright border border-white/10 backdrop-blur-sm">
                    <Stethoscope className="w-8 h-8 md:w-12 md:h-12" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase leading-none tracking-tighter">{SSOT.medical.doctor.name}</h2>
                  <p className="text-verified-bright font-black text-base md:text-lg uppercase tracking-widest mb-8 md:mb-12">{SSOT.medical.doctor.affiliation}</p>
                  
                  <div className="space-y-6 md:space-y-8">
                    <div>
                      <div className="font-mono text-[10px] md:text-[11px] text-slate-500 uppercase tracking-widest mb-3 md:mb-4">SIP (Practice License)</div>
                      <div className="font-mono text-white text-xs md:text-sm bg-black/40 p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10 break-all shadow-inner">
                        {SSOT.medical.doctor.sip}
                      </div>
                    </div>
                    <a 
                      href="https://satusehat.kemkes.go.id/sdmk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-[10px] md:text-[11px] font-black text-verified-bright uppercase tracking-widest hover:text-white transition-colors"
                    >
                      <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" /> Verify on SatuSehat <ChevronRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: The Protocol */}
              <div className="lg:col-span-3 p-8 md:p-16 bg-audit-white relative">
                <div className="absolute top-0 right-0 p-8 md:p-16 opacity-[0.02] pointer-events-none">
                  <HeartPulse className="w-64 h-64 md:w-96 md:h-96" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 relative z-10 gap-4">
                  <h3 className="text-2xl md:text-3xl font-black text-authority-navy uppercase tracking-tighter flex items-center gap-3 md:gap-4">
                    <Activity className="w-6 h-6 md:w-8 md:h-8 text-safety-orange" />
                    Mandatory Screening Parameters
                  </h3>
                  <div className="tech-badge bg-slate-900 text-white px-4 py-2 self-start md:self-center">Clinical_v2.0</div>
                </div>
                
                <div className="space-y-8 md:space-y-12 relative z-10">
                  {parameters.map((param, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] ${param.bg} flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-500`}>
                        {React.createElement(getIcon(param.icon), { className: `w-8 h-8 md:w-10 md:h-10 ${param.color}` })}
                      </div>
                      <div>
                        <h4 className="text-authority-navy font-black text-xl md:text-2xl uppercase leading-none mb-2 md:mb-3">{param.title}</h4>
                        <p className="text-slate-500 text-base md:text-lg leading-tight font-light">
                          {param.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Certificate Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <div className="badge-eyebrow bg-verified-bright/10 border border-verified-bright/30 text-verified-bright mb-4 md:mb-6">
              <QrCode className="w-4 h-4" /> Digital Health Ledger
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-authority-navy uppercase mb-4 md:mb-6 tracking-tighter">Fit-to-Climb Certificate</h2>
            <p className="text-slate-500 text-base md:text-xl font-light uppercase tracking-widest max-w-2xl mx-auto">
              Every guest receives a digital clearance certificate upon passing the screening.
            </p>
          </div>

          <div className="bento-card bg-audit-white p-6 md:p-16 shadow-2xl border-slate-200 relative overflow-hidden">
            <div className="scanline"></div>
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <ShieldCheck className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start border-b-2 md:border-b-4 border-authority-navy pb-8 md:pb-12 mb-8 md:mb-12 gap-6 md:gap-8">
                <div>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2 md:mb-3">Fit-to-Climb</h3>
                  <p className="font-mono text-[10px] md:text-sm text-slate-500 uppercase tracking-[0.2em] md:tracking-[0.4em]">Ijen Crater Expedition Clearance</p>
                </div>
                <div className="text-left md:text-right w-full md:w-auto">
                  <div className="font-mono text-[9px] md:text-[11px] font-black uppercase text-slate-500 tracking-widest mb-2 md:mb-3">Certificate ID</div>
                  <div className="font-mono font-black text-xl md:text-3xl text-authority-navy bg-slate-50 px-4 md:px-8 py-2 md:py-4 rounded-xl md:rounded-2xl border border-slate-100 shadow-inner inline-block">JVTO-MED-2026-X92</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
                <div>
                  <div className="font-mono text-[9px] md:text-[11px] font-black uppercase text-slate-500 tracking-widest mb-2 md:mb-4">Guest Name</div>
                  <div className="text-3xl md:text-5xl font-black text-authority-navy uppercase tracking-tighter">Sarah Jenkins</div>
                </div>
                <div>
                  <div className="font-mono text-[9px] md:text-[11px] font-black uppercase text-slate-500 tracking-widest mb-2 md:mb-4">Date of Screening</div>
                  <div className="font-mono text-xl md:text-2xl font-bold text-authority-navy border-b border-slate-100 pb-2">October 12, 2026</div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[3rem] mb-8 md:mb-16 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-10"></div>
                <div className="grid grid-cols-3 gap-4 md:gap-12 text-center relative z-10">
                  <div>
                    <div className="font-mono text-[8px] md:text-[11px] font-black uppercase text-slate-500 tracking-widest mb-2 md:mb-4">SpO2</div>
                    <div className="text-2xl md:text-5xl font-black text-verified-bright">98%</div>
                  </div>
                  <div>
                    <div className="font-mono text-[8px] md:text-[11px] font-black uppercase text-slate-500 tracking-widest mb-2 md:mb-4">BP</div>
                    <div className="text-2xl md:text-5xl font-black text-verified-bright">110/70</div>
                  </div>
                  <div>
                    <div className="font-mono text-[8px] md:text-[11px] font-black uppercase text-slate-500 tracking-widest mb-2 md:mb-4">HR</div>
                    <div className="text-2xl md:text-5xl font-black text-verified-bright">72 bpm</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
                <div className="w-full md:w-auto">
                  <div className="font-mono text-[9px] md:text-[11px] font-black uppercase text-slate-500 tracking-widest mb-4 md:mb-6">Supervising Doctor</div>
                  <div className="text-xl md:text-3xl font-black text-authority-navy uppercase border-b-2 md:border-b-4 border-authority-navy pb-2 md:pb-3 mb-2 md:mb-3 inline-block w-full md:min-w-[350px]">
                    {SSOT.medical.doctor.name}
                  </div>
                  <div className="font-mono text-[9px] md:text-[11px] text-slate-500 uppercase tracking-widest">{SSOT.medical.doctor.sip}</div>
                </div>
                <div className="text-left md:text-right w-full md:w-auto">
                  <div className="verified-badge bg-gradient-to-r from-verified-bright to-verified-lime text-authority-navy px-6 md:px-10 py-3 md:py-5 text-sm md:text-lg shadow-2xl inline-block">Medically Cleared</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>

      {/* GLOBAL BOOKING RAIL */}
      <BookingRail />
    </div>
  );
}
