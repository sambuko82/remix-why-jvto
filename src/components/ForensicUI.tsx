'use client';

import React from 'react';
import { ShieldCheck, FileCheck, ExternalLink, Lock, CheckCircle2, AlertCircle, Fingerprint, ChevronRight } from 'lucide-react';

export const EvidenceBadge = ({ type, text }: { type: 'verified' | 'public' | 'doc', text: string }) => {
  const styles = {
    verified: "bg-verified-bright/10 text-verified-bright border-verified-bright/30",
    public: "bg-safety-orange/10 text-safety-orange border-safety-orange/30",
    doc: "bg-slate-50 text-slate-500 border-slate-200"
  };
  
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-[0.2em] border shadow-card ${styles[type]}`}>
      {type === 'verified' && <CheckCircle2 className="w-3.5 h-3.5" />}
      {type === 'public' && <ExternalLink className="w-3.5 h-3.5" />}
      {type === 'doc' && <FileCheck className="w-3.5 h-3.5" />}
      {text}
    </span>
  );
};

export const SectionHeading = ({ title, subtitle, badge }: { title: string, subtitle?: string, badge?: string }) => (
  <div className="mb-20 md:mb-32 text-center max-w-4xl mx-auto">
    {badge && (
      <div className="badge-eyebrow bg-authority-navy text-white mb-10">
        <Lock className="w-3.5 h-3.5" /> {badge}
      </div>
    )}
    <h2 className="text-4xl md:text-7xl font-black text-authority-navy mb-8 leading-[0.9] uppercase tracking-tighter">{title}</h2>
    {subtitle && <p className="body-text max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export const HashBadge = ({ hash }: { hash: string }) => (
  <div className="bg-slate-50 p-4 rounded-md border border-slate-100 flex items-center gap-4 group shadow-card">
    <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center shadow-card group-hover:bg-safety-orange group-hover:text-white transition-all duration-500">
      <Fingerprint className="w-4 h-4" />
    </div>
    <span className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] truncate">SHA-256: {hash}</span>
  </div>
);

export const PillarCard = ({ 
  icon: Icon, 
  title, 
  claim, 
  evidence, 
  actionLabel, 
  onAction 
}: { 
  icon: any, 
  title: string, 
  claim: string, 
  evidence: string[], 
  actionLabel: string, 
  onAction: () => void 
}) => (
  <div className="bg-white p-10 md:p-12 rounded-md border border-slate-100 shadow-card group hover:shadow-hover transition-all duration-700 relative overflow-hidden">
    <div className="scanline"></div>
    <div className="absolute top-8 right-10 w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
      <ExternalLink className="w-5 h-5 text-safety-orange" />
    </div>
    
    <div className="w-16 h-16 bg-slate-50 rounded-md flex items-center justify-center mb-10 text-authority-navy group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 shadow-card">
      <Icon className="w-8 h-8" />
    </div>
    
    <h3 className="text-2xl md:text-3xl font-black text-authority-navy mb-6 uppercase leading-none tracking-tight">{title}</h3>
    <p className="text-slate-500 mb-10 leading-relaxed text-lg md:text-xl font-black italic border-l-4 border-safety-orange pl-8 drop-shadow-sm">
      "{claim}"
    </p>
    
    <div className="space-y-6 mb-12">
      <p className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Verifiable Evidence:</p>
      <ul className="space-y-4">
        {evidence.map((item, i) => (
          <li key={i} className="flex items-start gap-4 text-[11px] md:text-xs text-authority-navy font-black uppercase tracking-[0.1em] leading-tight">
            <div className="w-5 h-5 rounded-md bg-verified-bright/10 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-3 h-3 text-verified-bright" />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <button 
      onClick={onAction}
      className="w-full py-5 rounded-md bg-slate-50 text-authority-navy text-xs font-black uppercase tracking-[0.2em] hover:bg-safety-orange hover:text-white transition-all duration-500 flex items-center justify-center gap-3 shadow-card"
    >
      {actionLabel} <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

