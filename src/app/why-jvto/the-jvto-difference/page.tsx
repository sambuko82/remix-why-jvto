import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Zap, 
  ShieldCheck, 
  Lock, 
  ChevronRight,
  Target,
  Users,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';

export default function JVTODifference() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/why-jvto/the-jvto-difference'];

  const claims = SSOT.claims;

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/why-jvto')}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Why JVTO Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Protocol_Difference_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-5xl relative z-10">
        <PageSEO route="/why-jvto/the-jvto-difference" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">The JVTO Difference</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'INTEGRITY OVER SCALE.'}
          </h1>
          <p className="text-slate-500 text-xl leading-tight font-light max-w-2xl">
            We are not a mass-market agency. We limit our tour capacity to ensure every guest receives police-led security and medical-grade screening. This is how we maintain a 100% safety record.
          </p>
        </motion.div>

        {/* Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <div className="bento-card bg-audit-white p-10 border-2 border-slate-100">
            <Target className="w-10 h-10 text-safety-orange mb-6" />
            <h3 className="text-xl font-black uppercase mb-4">Operational Certainty</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We prioritize safety over "summit fever". If conditions are dangerous, we stop. Period.
            </p>
          </div>
          <div className="bento-card bg-audit-white p-10 border-2 border-slate-100">
            <Users className="w-10 h-10 text-safety-orange mb-6" />
            <h3 className="text-xl font-black uppercase mb-4">Private Exclusivity</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              No strangers, no waiting, no compromised safety due to mixed-group dynamics.
            </p>
          </div>
          <div className="bento-card bg-audit-white p-10 border-2 border-slate-100">
            <Layers className="w-10 h-10 text-safety-orange mb-6" />
            <h3 className="text-xl font-black uppercase mb-4">All-Inclusive</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              No surprise costs or mid-trip negotiations. Everything is covered upfront.
            </p>
          </div>
        </div>

        {/* Claims & Evidence */}
        <div className="space-y-12">
          <div className="flex items-center gap-2 mb-8">
            <ShieldCheck className="w-4 h-4 text-safety-orange" />
            <h2 className="text-3xl font-black uppercase">Verified Claims</h2>
          </div>

          {claims.map((claim, idx) => (
            <motion.div 
              key={claim.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bento-card bg-audit-white p-12 border-2 border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 font-mono text-[11px] text-slate-200 font-black">
                CLAIM_{claim.id}
              </div>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-black text-authority-navy uppercase leading-tight mb-6">
                  {claim.text}
                </h3>
                <div className="p-6 bg-audit-white rounded-xl border border-slate-100 mb-8">
                  <p className="text-slate-600 font-light leading-relaxed italic">
                    "{claim.meaning}"
                  </p>
                </div>
                <button 
                  onClick={() => navigate(`/verify-jvto#${claim.evidenceAnchor}`)}
                  className="inline-flex items-center gap-3 text-[11px] font-mono font-bold text-safety-orange uppercase tracking-widest hover:gap-5 transition-all"
                >
                  Inspect Evidence <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-black uppercase mb-12 text-center">The Industry Standard vs. <span className="text-safety-orange">JVTO</span></h2>
          <div className="grid md:grid-cols-2 gap-px bg-slate-200 rounded-[2rem] overflow-hidden border-2 border-slate-200 shadow-2xl">
            <div className="bg-audit-white p-12">
              <h4 className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-8">Typical Operators</h4>
              <ul className="space-y-6">
                {[
                  'Mixed groups with unknown fitness levels',
                  'Cheap surgical masks or no masks',
                  'Surprise fees for "extra" services',
                  'Pressure to summit regardless of conditions',
                  'Generic guides with no safety training'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-500 line-through decoration-slate-300">
                    <span className="w-2 h-2 rounded-full bg-slate-200 mt-2 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-authority-navy p-12 text-white">
              <h4 className="font-mono text-[11px] text-safety-orange uppercase tracking-widest mb-8">JVTO Protocol</h4>
              <ul className="space-y-6">
                {[
                  '100% Private tours for your group only',
                  'Professional medical-grade gas masks',
                  'Transparent, all-inclusive pricing',
                  'Police-led safety & hazard monitoring',
                  'Certified guides with medical sign-off'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-safety-orange shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 text-center">
          <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-8">Ready to experience the difference?</p>
          <button 
            onClick={() => navigate('/booking')}
            className="bg-safety-orange text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-safety-orange/20"
          >
            Book Your Expedition
          </button>
        </div>
      </div>
    </div>
  );
}
