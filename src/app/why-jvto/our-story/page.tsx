import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  History, 
  ShieldCheck, 
  Lock, 
  ChevronRight,
  Award,
  BookOpen,
  Calendar,
  Globe,
  Newspaper
} from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';

export default function OurStory() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/why-jvto/our-story'];

  const historyClaims = SSOT.claims;

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
            <Lock className="w-4 h-4" /> Protocol_History_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-5xl relative z-10">
        <PageSEO route="/why-jvto/our-story" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <History className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Our Story & Recognition</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'PROVEN HERITAGE.'}
          </h1>
          <p className="text-slate-500 text-xl leading-tight font-light max-w-2xl">
            JVTO was founded by Bripka Agung Sambuko of the East Java Tourist Police. What started as a mission to protect travelers became the region's most trusted private tour operator.
          </p>
        </motion.div>

        {/* Historical Milestones */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="bento-card bg-audit-white p-12 border-2 border-slate-100 relative overflow-hidden">
            <div className="scanline opacity-5"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/5 text-amber-500 flex items-center justify-center mb-8 border border-amber-500/10">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase mb-4 leading-none">{SSOT.history.award2015.title}</h3>
              <p className="text-slate-500 text-lg font-light leading-tight mb-8">
                Recognized for excellence with a score of {SSOT.history.award2015.score} in {SSOT.history.award2015.year}.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <Calendar className="w-4 h-4 text-slate-300" />
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Registry_2015</span>
              </div>
            </div>
          </div>

          <div className="bento-card bg-authority-navy text-white p-12 relative overflow-hidden">
            <div className="scanline"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 text-safety-orange flex items-center justify-center mb-8 border border-white/10">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase mb-4 leading-none">{SSOT.history.book2016.title}</h3>
              <p className="text-slate-500 text-lg font-light leading-tight mb-8">
                Featured in the 4th Edition of Stefan Loose Reiseführer Indonesien (Page {SSOT.history.book2016.page}).
              </p>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 mb-8 italic text-slate-500 text-sm leading-relaxed">
                "{SSOT.history.book2016.quote}"
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <Globe className="w-4 h-4 text-slate-500" />
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Global_Recognition</span>
              </div>
            </div>
          </div>
        </div>

        {/* Press Section */}
        <div className="mb-32">
          <div className="flex items-center gap-2 mb-12">
            <Newspaper className="w-4 h-4 text-safety-orange" />
            <h2 className="text-3xl font-black uppercase">Independent Media Coverage</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {SSOT.press.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bento-card bg-audit-white p-10 border-2 border-slate-100 group hover:border-safety-orange transition-all"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[11px] text-safety-orange uppercase tracking-widest font-bold">{item.publisher}</span>
                  <span className="font-mono text-[11px] text-slate-300 uppercase tracking-widest">{item.date}</span>
                </div>
                <h4 className="text-xl font-black uppercase mb-6 leading-tight group-hover:text-safety-orange transition-colors">
                  {item.title}
                </h4>
                {item.translatedTitle && (
                  <p className="text-slate-500 text-xs italic mb-8">
                    "{item.translatedTitle}"
                  </p>
                )}
                <button 
                  onClick={() => navigate('/verify-jvto#press')}
                  className="inline-flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest hover:text-safety-orange transition-all"
                >
                  View Original Artifact <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* History Claims */}
        <div className="space-y-12">
          {historyClaims.map((claim) => (
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

        {/* Final CTA */}
        <div className="mt-32 p-12 bg-audit-white border-4 border-slate-100 rounded-[3rem] text-center">
          <h3 className="text-3xl font-black uppercase mb-6">Explore the Full Proof Vault</h3>
          <p className="text-slate-500 text-lg font-light leading-tight mb-12 max-w-2xl mx-auto">
            Our history is just one layer of the Trust Stack. Access the centralized 
            registry of all legal, medical, and operational evidence.
          </p>
          <button 
            onClick={() => navigate('/verify-jvto')}
            className="bg-authority-navy text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-safety-orange transition-all shadow-2xl"
          >
            Access Proof Vault
          </button>
        </div>
      </div>
    </div>
  );
}
