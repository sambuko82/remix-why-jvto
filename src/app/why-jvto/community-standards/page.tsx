import React from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Heart, 
  Users, 
  Scale, 
  CheckCircle2, 
  AlertTriangle,
  MessageSquare,
  Handshake,
  Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';

export default function CommunityStandards() {
  const navigate = useNavigate();
  const onBack = () => navigate('/why-jvto');
  const meta = SSOT.pages['/why-jvto/community-standards'];

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Header */}
      <div className="border-b border-slate-100 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Trust Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Users className="w-4 h-4" /> Community Standards
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-4xl relative z-10">
        <PageSEO route="/why-jvto/community-standards" />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h1 className="text-5xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'PARTNERS AS CONTEXT & ACCESS.'}
          </h1>
          <p className="text-2xl text-slate-500 max-w-2xl mx-auto leading-tight font-light">
            ISIC, HPWKI, and INDECON—what they signal and how verification works. Our partnerships are not just logos; they represent our commitment to industry standards and local community integration.
          </p>
        </motion.div>

        <div className="space-y-24">
          
          {/* 1. HPWKI */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-audit-white rounded-2xl text-safety-orange border border-slate-100">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-authority-navy uppercase tracking-tighter">HPWKI Approval</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We are officially approved by HPWKI (Himpunan Pramuwisata Kawah Ijen), ensuring our operations meet the strict guidelines set for guiding in the Ijen Crater area.
              </p>
              {SSOT.proof_vault.partners.map((partner, i) => (
                <div key={i} className="inline-flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-widest">{partner.title}</span>
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono font-bold text-safety-orange uppercase tracking-widest hover:underline"
                  >
                    View Artifact &rarr;
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* 2. ISIC & INDECON */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-audit-white rounded-2xl text-safety-orange border border-slate-100">
                <Handshake className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-authority-navy uppercase tracking-tighter">ISIC & INDECON</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed">
                Our alignment with ISIC and INDECON signals our dedication to sustainable tourism and community-based development. These partnerships provide context to our operational philosophy, ensuring that our tours benefit the local economy and preserve the natural environment.
              </p>
            </div>
          </section>

        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-32 pt-12 border-t border-slate-100 flex flex-col items-center">
          <div className="p-8 bento-card bg-audit-white border border-slate-200 rounded-3xl flex flex-col items-center">
            <Handshake className="w-12 h-12 text-safety-orange mb-4" />
            <span className="text-2xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-2">TRUSTED_COMMUNITY</span>
            <span className="font-mono text-[10px] text-slate-500 tracking-[0.2em] uppercase">JVTO Standards 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
