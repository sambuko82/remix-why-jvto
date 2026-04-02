import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Lock, 
  ShieldCheck,
  GraduationCap,
  Zap,
  ExternalLink
} from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';
import { AuditStamp } from '../../../components/AuditStamp';

export default function ISICStudentPackage() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/isic/student-package'];

  const benefits = [
    { title: 'Exclusive Pricing', desc: 'Special discounted rates for verified ISIC cardholders on all private expeditions.', icon: Zap },
    { title: 'Verified Status', desc: 'Seamless verification through our official partnership with ISIC Indonesia.', icon: CheckCircle2 },
    { title: 'Full Inclusions', desc: 'Same high-standard safety protocols, private transport, and expert crew.', icon: ShieldCheck }
  ];

  const steps = [
    { id: '01', title: 'Valid ISIC Card', desc: 'Ensure your International Student Identity Card is active and valid.' },
    { id: '02', title: 'Submit Verification', desc: 'Provide your ISIC number during the booking inquiry process.' },
    { id: '03', title: 'Receive Discount', desc: 'Our team will apply the student package rate to your final quote.' }
  ];

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-[10px] md:text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" /> <span className="hidden xs:inline">Back to </span>Hub
          </button>
          <div className="flex items-center gap-2 md:gap-3 text-safety-orange text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.15em] md:tracking-[0.2em]">
            <Lock className="w-3.5 h-3.5 md:w-4 md:h-4" /> ISIC_AUTH_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-6xl relative z-10">
        <PageSEO route="/isic/student-package" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <GraduationCap className="w-3.5 h-3.5 md:w-4 md:h-4 text-safety-orange" />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-slate-500">Official ISIC Partner</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-4 md:mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'STUDENT EXPEDITIONS.'}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-tight font-light max-w-2xl">
            Verified student pricing for the next generation of explorers. Same safety, same quality, better rates.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {benefits.map((benefit, index) => (
            <div key={index} className="bento-card bg-white p-6 md:p-8 flex flex-col group hover:border-safety-orange transition-all">
              <div className="p-3 md:p-4 bg-slate-50 rounded-lg md:rounded-xl text-slate-500 group-hover:text-safety-orange transition-colors w-fit mb-6">
                <benefit.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-authority-navy uppercase tracking-tight mb-2">{benefit.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Verification Steps */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-black text-authority-navy uppercase leading-none mb-8 md:mb-12">How to Claim</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative bento-card bg-white p-6 md:p-8">
                <div className="text-4xl md:text-5xl font-black text-slate-100 mb-4 font-mono">{step.id}</div>
                <h3 className="text-lg md:text-xl font-black text-authority-navy uppercase tracking-tight mb-2">{step.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Verification Link */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bento-card bg-authority-navy text-white p-8 md:p-12 relative overflow-hidden group mb-16 md:mb-24"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-safety-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-safety-orange/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-none mb-4 md:mb-6 tracking-tighter">Verify our <br />Partnership.</h2>
              <p className="text-slate-300 text-lg md:text-xl font-light leading-tight mb-6 md:mb-8">
                JVTO is an officially recognized partner of ISIC Indonesia. You can verify our status directly on the ISIC global database.
              </p>
              <a 
                href="https://www.isic.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-safety-orange font-mono text-[11px] md:text-xs font-bold uppercase tracking-widest hover:text-orange-400 transition-colors"
              >
                Visit ISIC Global <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
            <div className="w-32 h-32 md:w-48 md:h-48 bg-white p-4 md:p-6 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center shrink-0 shadow-xl">
              <img 
                src="https://javavolcano-touroperator.com/partner/screensot-isic-page-jvto.png" 
                alt="ISIC Verification" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Footer Audit Stamp */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <AuditStamp />
        </div>
      </div>
    </div>
  );
}
