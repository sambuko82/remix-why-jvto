import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Search, 
  Database, 
  FileText,
  ChevronRight,
  Eye,
  Download,
  Building2,
  Scale,
  ShieldPlus,
  AlertTriangle,
  Siren
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { ForensicAnnotation } from '../../../types';
import { motion, AnimatePresence } from 'motion/react';
import { AssetViewer } from '../../../components/AssetViewer';
import { HashBadge, EvidenceBadge } from '../../../components/ForensicUI';

export default function PoliceSafetyProof() {
  const navigate = useNavigate();
  const onBack = () => navigate('/verify-jvto');
  const [selectedAsset, setSelectedAsset] = useState<{ 
    url: string, 
    title: string, 
    hash: string, 
    type: 'image' | 'pdf',
    annotations?: ForensicAnnotation[]
  } | null>(null);
  const meta = SSOT.pages['/verify-jvto/police-safety'];

  const openAsset = (
    url: string, 
    title: string, 
    hash: string, 
    type: 'image' | 'pdf' = 'image',
    annotations?: ForensicAnnotation[]
  ) => {
    setSelectedAsset({ url, title, hash, type, annotations });
  };

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Proof Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Siren className="w-4 h-4" /> Police & Safety Registry
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl relative z-10">
        <PageSEO route="/verify-jvto/police-safety" />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <ShieldPlus className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Security & Compliance Archive</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'POLICE & SAFETY.'}
          </h1>
          <p className="text-2xl text-slate-500 max-w-3xl leading-tight font-light">
            We maintain direct coordination with the Indonesian National Police (POLRI) and local authorities to ensure maximum safety for our guests.
          </p>
        </motion.div>

        <div className="space-y-32">
          
          {/* 1. Police Coordination */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <ShieldAlert className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Police Coordination</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">POLRI_COORDINATION_REGISTRY</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Active Coordination" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {SSOT.proof_vault.police_safety.map((item, i) => (
                <div 
                  key={i}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image')}
                  className="bento-card bg-white p-12 relative group cursor-pointer hover:border-safety-orange transition-all duration-500"
                >
                  <div className="scanline"></div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="text-safety-orange font-black font-mono text-[11px] uppercase tracking-[0.2em]">{item.category}</div>
                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-safety-orange group-hover:text-white transition-all">
                      <Download className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-tight mb-8 tracking-tighter">{item.title}</h3>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="status-live"></div>
                    <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Last Verified: {item.last_verified}</span>
                  </div>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-safety-orange" />
                      <span className="font-mono text-[11px] uppercase tracking-widest font-black">Inspect Document</span>
                    </div>
                    <HashBadge hash={item.hash || 'PENDING'} />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 2. Safety Equipment & Certs */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Safety Equipment</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">EQUIPMENT_AUDIT_LOG</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Certified Gear" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {SSOT.proof_vault.safety.map((item, i) => (
                <div 
                  key={i}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image')}
                  className="bento-card bg-white p-12 relative group cursor-pointer hover:border-safety-orange transition-all duration-500"
                >
                  <div className="scanline"></div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="text-safety-orange font-black font-mono text-[11px] uppercase tracking-[0.2em]">{item.category}</div>
                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-safety-orange group-hover:text-white transition-all">
                      <Download className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-tight mb-8 tracking-tighter">{item.title}</h3>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="status-live"></div>
                    <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Last Verified: {item.last_verified}</span>
                  </div>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-safety-orange" />
                      <span className="font-mono text-[11px] uppercase tracking-widest font-black">Inspect Document</span>
                    </div>
                    <HashBadge hash={item.hash || 'PENDING'} />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col items-center">
          <div className="p-12 bg-white border-4 border-safety-orange rounded-[2.5rem] -rotate-2 shadow-2xl relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <Siren className="w-20 h-20 text-safety-orange mb-8" />
              <span className="text-5xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-3">SECURITY_VERIFIED</span>
              <span className="font-mono text-[11px] text-slate-500 tracking-[0.4em] uppercase">Police Coordination 2026</span>
            </div>
          </div>
          <p className="mt-12 font-mono text-[11px] text-slate-500 uppercase tracking-widest">
            System: JVTO_SECURITY_ARCHIVE_V1.0 // Node: ID_JKT_02_SECURE
          </p>
        </div>
      </div>

      {/* Asset Viewer Modal */}
      <AssetViewer 
        isOpen={!!selectedAsset}
        onClose={() => setSelectedAsset(null)}
        assetUrl={selectedAsset?.url || ''}
        assetTitle={selectedAsset?.title || ''}
        assetHash={selectedAsset?.hash || ''}
        assetType={selectedAsset?.type || 'image'}
        annotations={selectedAsset?.annotations}
      />
    </div>
  );
}
