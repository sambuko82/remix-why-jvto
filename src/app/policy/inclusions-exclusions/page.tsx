import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';
import { AuditStamp } from '../../../components/AuditStamp';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function InclusionsExclusions() {
  const navigate = useNavigate();
  const policyData = SSOT.policy_pages.find(p => p.route === '/policy/inclusions-exclusions');

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/travel-guide')}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Travel Guide
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Inclusions_Doc_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl relative z-10">
        <PageSEO route="/policy/inclusions-exclusions" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-black text-authority-navy mb-8 leading-[1.1] uppercase tracking-tighter">
            {policyData?.h1 || 'INCLUSIONS & EXCLUSIONS POLICY.'}
          </h1>
        </motion.div>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-safety-orange hover:prose-a:text-safety-orange/80 prose-strong:text-authority-navy prose-ul:list-disc prose-ul:pl-6">
          <Markdown remarkPlugins={[remarkGfm]}>
            {policyData?.body_md || ''}
          </Markdown>
        </div>

        <div className="mt-24">
          <AuditStamp title="INCLUSIONS_VERIFIED" subtitle="Registry 2026" system="JVTO_DOCS_V1.9" />
        </div>
      </div>
    </div>
  );
}
