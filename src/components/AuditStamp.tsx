import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface AuditStampProps {
  title?: string;
  subtitle?: string;
  system?: string;
  node?: string;
  className?: string;
}

export const AuditStamp = ({ 
  title = "AUDIT_COMPLETE", 
  subtitle = "Registry Verified 2026",
  system = "JVTO_FORENSIC_V1.9",
  node = "ID_JKT_01_SECURE",
  className = ""
}: AuditStampProps) => {
  return (
    <div className={`mt-32 pt-12 border-t border-slate-200 flex flex-col items-center ${className}`}>
      <div className="p-12 bg-white border-4 border-safety-orange rounded-md rotate-2 shadow-hover relative overflow-hidden group hover:rotate-0 transition-transform">
        <div className="scanline"></div>
        <div className="flex flex-col items-center">
          <ShieldCheck className="w-20 h-20 text-safety-orange mb-8" />
          <span className="text-5xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-3">{title}</span>
          <span className="font-mono text-[11px] text-slate-500 tracking-[0.4em] uppercase">{subtitle}</span>
        </div>
      </div>
      <p className="mt-12 font-mono text-[11px] text-slate-500 uppercase tracking-widest">
        System: {system} // Node: {node}
      </p>
    </div>
  );
};
