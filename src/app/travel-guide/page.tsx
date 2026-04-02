import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  CloudRain, 
  Users, 
  CreditCard, 
  HelpCircle, 
  ArrowRight,
  ChevronRight,
  Info,
  Lock,
  ArrowLeft
} from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { motion } from 'motion/react';
import { AuditStamp } from '../../components/AuditStamp';

export default function TravelGuideHub() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/travel-guide'];

  const guideCategories = SSOT.travel_guide.categories;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return Activity;
      case 'ShieldCheck': return ShieldCheck;
      case 'CloudRain': return CloudRain;
      case 'Users': return Users;
      case 'CreditCard': return CreditCard;
      case 'Info': return Info;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Guide_Registry_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-6xl relative z-10">
        <PageSEO route="/travel-guide" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Official Travel Guide</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'EXPEDITION KNOWLEDGE.'}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-tight font-light max-w-2xl">
            Everything you need to know about safety, logistics, and operational standards for your East Java journey. No marketing fluff—just the facts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {guideCategories.map((category, catIdx) => (
            <div key={category.id}>
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-black text-authority-navy uppercase tracking-tight mb-4">{category.title}</h2>
                <p className="text-slate-500 font-light text-sm md:text-base">{category.description}</p>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (catIdx * 3 + itemIdx) * 0.1 }}
                    onClick={() => navigate(item.path)}
                    className="bento-card bg-audit-white p-6 md:p-8 group cursor-pointer hover:border-safety-orange transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 ${item.color} flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform shrink-0`}>
                        {React.createElement(getIcon(item.icon), { className: "w-5 h-5 md:w-6 md:h-6" })}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-authority-navy uppercase leading-none mb-2 tracking-tight">{item.title}</h3>
                        <p className="text-slate-500 text-xs md:text-sm font-light leading-tight">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-safety-orange group-hover:translate-x-1 transition-all shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Quick Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => navigate('/travel-guide/faq')}
          className="mt-16 md:mt-24 bento-card bg-authority-navy text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer"
        >
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8">
            <div className="w-16 h-16 rounded-2xl bg-white/5 text-safety-orange flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform shrink-0">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase leading-none mb-2 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-slate-500 text-base md:text-lg font-light leading-tight">Direct answers to common concerns about Bromo and Ijen tours.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-safety-orange font-mono text-[11px] font-bold uppercase tracking-widest">
            View FAQ <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>

        {/* Footer Audit Stamp */}
        <AuditStamp title="GUIDE_VERIFIED" subtitle="Registry 2026" system="JVTO_DOCS_V1.9" />
      </div>
    </div>
  );
}
