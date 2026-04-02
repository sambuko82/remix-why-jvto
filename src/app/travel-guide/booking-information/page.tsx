import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  CheckCircle2, 
  Calendar, 
  UserCheck, 
  ArrowLeft, 
  Lock, 
  ShieldCheck,
  Info,
  ChevronRight,
  Clock,
  RefreshCcw,
  FileText,
  Users
} from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';
import { AuditStamp } from '../../../components/AuditStamp';

export default function BookingInformation() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/travel-guide/booking-information'];

  const steps = SSOT.travel_guide.booking_info.steps;
  const policies = SSOT.travel_guide.booking_info.policies;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar': return Calendar;
      case 'CreditCard': return CreditCard;
      case 'CheckCircle2': return CheckCircle2;
      case 'UserCheck': return UserCheck;
      case 'RefreshCcw': return RefreshCcw;
      case 'ShieldCheck': return ShieldCheck;
      case 'Info': return Info;
      case 'Users': return Users;
      default: return FileText;
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
            onClick={() => navigate('/travel-guide')}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Travel Guide
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Booking_Protocol_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-5xl relative z-10">
        <PageSEO route="/travel-guide/booking-information" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Operational Workflow</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'HOW TO BOOK.'}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-tight font-light max-w-2xl">
            A transparent, 4-step process designed for certainty. From initial inquiry to meeting your crew, we prioritize clarity and security.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-24 md:mb-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bento-card bg-white p-8 md:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 md:p-8 font-mono text-4xl md:text-6xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                {step.id}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 text-safety-orange flex items-center justify-center border border-slate-100 mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  {React.createElement(getIcon(step.icon), { className: "w-6 h-6 md:w-7 md:h-7" })}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-authority-navy uppercase mb-4 tracking-tight">
                  <span className="text-safety-orange mr-2">{step.id}.</span> {step.title}
                </h3>
                <p className="text-slate-500 text-base md:text-lg leading-tight font-light mb-6">
                  {step.desc}
                </p>
                <div className="pt-6 border-t border-slate-50 flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-widest">
                  <Info className="w-3 h-3" /> {step.details}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Policies */}
        <div className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-slate-200"></div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-slate-400">Core Policies</h2>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center p-6 md:p-0"
              >
                <div className="w-12 h-12 rounded-full bg-slate-50 text-authority-navy flex items-center justify-center border border-slate-100 mx-auto mb-6">
                  {React.createElement(getIcon(policy.icon), { className: "w-5 h-5" })}
                </div>
                <h4 className="text-lg font-black text-authority-navy uppercase mb-3 tracking-tight">{policy.title}</h4>
                <p className="text-slate-500 text-sm leading-tight font-light">{policy.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Policy Link CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          onClick={() => navigate('/policy/booking-payment-cancellation')}
          className="bento-card bg-slate-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer border-2 border-dashed border-slate-200"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white text-authority-navy flex items-center justify-center border border-slate-200 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase leading-none mb-2 tracking-tight text-authority-navy">Full Policy Document</h2>
              <p className="text-slate-500 text-base md:text-lg font-light leading-tight">Read the detailed legal terms for booking, payments, and cancellations.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-authority-navy font-mono text-[11px] font-bold uppercase tracking-widest">
            Read Policy <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>

        {/* Footer Audit Stamp */}
        <AuditStamp title="BOOKING_VERIFIED" subtitle="Registry 2026" system="JVTO_DOCS_V1.9" />
      </div>
    </div>
  );
}
