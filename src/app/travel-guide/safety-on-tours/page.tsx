import React from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Heart, 
  Users, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  MapPin,
  Calendar,
  ShieldPlus,
  Siren,
  LifeBuoy
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';

export default function SafetyOnTours() {
  const navigate = useNavigate();
  const onBack = () => navigate('/travel-guide');
  const meta = SSOT.pages['/travel-guide/safety-on-tours'];
  const data = SSOT.travel_guide.safety_on_tours;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldPlus': return ShieldPlus;
      case 'LifeBuoy': return LifeBuoy;
      case 'Siren': return Siren;
      case 'Users': return Users;
      default: return ShieldCheck;
    }
  };

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Header */}
      <div className="border-b border-slate-100 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Travel Guide
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-4 h-4" /> Safety on Tours
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl relative z-10">
        <PageSEO route="/travel-guide/safety-on-tours" />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'SAFETY ON TOURS.'}
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-tight font-light">
            We don't just follow safety guidelines; we set them. From medical-grade gas masks to police-led hazard monitoring, discover the protocols that keep our guests safe in East Java's most extreme environments.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {data.sections.map((section, index) => (
            <section key={index}>
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-2.5 md:p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  {React.createElement(getIcon(section.icon), { className: "w-6 h-6 md:w-8 md:h-8" })}
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-authority-navy uppercase tracking-tighter">{section.title}</h2>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </section>
          ))}
        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-24 md:mt-32 pt-12 border-t border-slate-100 flex flex-col items-center">
          <div className="p-6 md:p-8 bento-card bg-audit-white border border-slate-200 rounded-3xl flex flex-col items-center">
            <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-safety-orange mb-4" />
            <span className="text-xl md:text-2xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-2">SAFETY_VERIFIED</span>
            <span className="font-mono text-[9px] md:text-[10px] text-slate-500 tracking-[0.2em] uppercase">JVTO Safety 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
