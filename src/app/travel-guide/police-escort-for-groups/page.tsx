import React from 'react';
import { 
  Siren, 
  ArrowLeft, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  MapPin,
  Calendar,
  ShieldPlus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';

export default function PoliceEscort() {
  const navigate = useNavigate();
  const onBack = () => navigate('/travel-guide');
  const meta = SSOT.pages['/travel-guide/police-escort-for-groups'];
  const data = SSOT.travel_guide.police_escort;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldPlus': return ShieldPlus;
      case 'Users': return Users;
      case 'Info': return Info;
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
            <Siren className="w-4 h-4" /> Police Escort for Groups
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl relative z-10">
        <PageSEO route="/travel-guide/police-escort-for-groups" />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'POLICE ESCORT.'}
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-tight font-light">
            For large groups and high-profile delegations, we provide direct coordination with the Indonesian National Police (POLRI) to ensure seamless transit and maximum security across East Java.
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
            <Siren className="w-10 h-10 md:w-12 md:h-12 text-safety-orange mb-4" />
            <span className="text-xl md:text-2xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-2">ESCORT_VERIFIED</span>
            <span className="font-mono text-[9px] md:text-[10px] text-slate-500 tracking-[0.2em] uppercase">Police Coordination 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
