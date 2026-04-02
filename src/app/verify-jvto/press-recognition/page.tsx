import React, { useState } from 'react';
import { 
  Newspaper, 
  ExternalLink, 
  ArrowLeft, 
  BookOpen, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Fingerprint, 
  Search, 
  Database, 
  ShieldAlert, 
  Activity, 
  FileDigit,
  ChevronRight,
  Eye,
  Download,
  Info,
  Quote
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { ForensicAnnotation } from '../../../types';
import { motion, AnimatePresence } from 'motion/react';
import { AssetViewer } from '../../../components/AssetViewer';
import { HashBadge, EvidenceBadge } from '../../../components/ForensicUI';

export default function PressRecognition() {
  const navigate = useNavigate();
  const onBack = () => navigate('/');
  const [selectedAsset, setSelectedAsset] = useState<{ 
    url: string, 
    title: string, 
    hash: string, 
    type: 'image' | 'pdf',
    annotations?: ForensicAnnotation[]
  } | null>(null);
  const meta = SSOT.pages['/verify-jvto/press-recognition'];

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
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Globe className="w-4 h-4" /> Global Recognition Registry
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl relative z-10">
        <PageSEO route="/verify-jvto/press-recognition" />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <Database className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Public Record Archive</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'PRESS RECOGNITION.'}
          </h1>
          <p className="text-2xl text-slate-500 max-w-3xl leading-tight font-light">
            Our operational history is documented by international media and independent guidebooks. We don't just exist; we are a matter of public record.
          </p>
        </motion.div>

        <div className="space-y-32">
          
          {/* 1. Stefan Loose Guidebook (The German Standard) */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Guidebook Artifact</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">STEFAN_LOOSE_INDONESIEN</p>
                </div>
              </div>
              <div className="tech-badge bg-slate-900 text-white">2016_EDITION</div>
            </div>

            <div className="bento-card bg-white p-12 relative overflow-hidden group">
              <div className="scanline"></div>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://stefan-loose.de/fileadmin/templates/images/logo.png" alt="Stefan Loose Logo" className="h-12 grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                    <div className="h-8 w-[2px] bg-slate-200"></div>
                    <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Independent Audit</span>
                  </div>
                  <h3 className="text-4xl font-black text-authority-navy uppercase leading-none mb-6 tracking-tighter">
                    "The Best Choice in Bondowoso"
                  </h3>
                  <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 italic text-xl text-slate-600 leading-tight mb-8">
                    "{SSOT.history.book2016.quote}"
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-2">ISBN Registry</p>
                      <p className="text-lg font-black text-authority-navy">{SSOT.history.book2016.isbn}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-2">Page Reference</p>
                      <p className="text-lg font-black text-authority-navy">Page {SSOT.history.book2016.page}</p>
                    </div>
                  </div>
                  <HashBadge hash="4F8E...2D1A" />
                </div>
                
                <div 
                  onClick={() => openAsset('https://javavolcano-touroperator.com/history/stefan-loose-ijen-bondowoso-page.png', 'Stefan Loose Guidebook Scan', '4F8E...2D1A', 'image', SSOT.history.book2016.annotations)}
                  className="relative bg-slate-900 rounded-[3rem] p-12 overflow-hidden group cursor-pointer shadow-2xl"
                >
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                    <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="relative z-10">
                    <div className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-8">Archival Scan</div>
                    <div className="flex items-center justify-center h-64 border-2 border-dashed border-white/20 rounded-2xl mb-8">
                      <Eye className="w-16 h-16 text-white/20 group-hover:text-safety-orange group-hover:scale-110 transition-all duration-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-white uppercase tracking-widest font-black">Inspect Document</span>
                      <div className="tech-badge bg-safety-orange text-white">LOUPE_ENABLED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 2. Police & Media Corroboration */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <Newspaper className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Media Corroboration</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">POLICE_LED_OPERATIONS_NEWS</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Official Press" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {SSOT.press.map((item, i) => (
                <div 
                  key={i}
                  onClick={() => openAsset(item.screenshot || '', item.title, 'B257B7...DA64B77', 'image', item.annotations)}
                  className="bento-card bg-white p-12 relative group cursor-pointer hover:bg-authority-navy hover:text-white transition-all duration-500"
                >
                  <div className="scanline"></div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="text-safety-orange font-black font-mono text-[11px] uppercase tracking-[0.2em]">{item.publisher}</div>
                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-safety-orange group-hover:text-white transition-all">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-tight mb-8 tracking-tighter">{item.title}</h3>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="status-live"></div>
                    <span className="font-mono text-[11px] text-slate-500 group-hover:text-slate-300 uppercase tracking-widest">Published: {item.date}</span>
                  </div>
                  <div className="flex items-center justify-between pt-8 border-t border-current/10">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-safety-orange" />
                      <span className="font-mono text-[11px] uppercase tracking-widest font-black">Inspect Source</span>
                    </div>
                    <HashBadge hash="B257...B77" />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 3. Booking.com & Guest Voices */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Guest Registry</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">TRIANGULATED_REVIEWS</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-verified-bright" />
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Verified by Booking.com</span>
              </div>
            </div>

            <div className="bento-card bg-authority-navy text-white p-16 relative overflow-hidden">
              <div className="scanline"></div>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-6 mb-12">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg" alt="Booking.com" className="h-10 brightness-0 invert" referrerPolicy="no-referrer" />
                     <div className="h-8 w-[2px] bg-white/10"></div>
                     <div className="flex items-center gap-1.5">
                       {[...Array(5)].map((_, i) => (
                         <div key={i} className="w-4 h-4 bg-safety-orange rounded-full"></div>
                       ))}
                     </div>
                  </div>
                  <h3 className="text-4xl font-black uppercase leading-none mb-8 tracking-tighter">
                    "Exceptional" <br />
                    <span className="text-safety-orange">9.8 / 10 Score</span>
                  </h3>
                  <p className="text-slate-500 text-xl leading-tight font-light mb-12">
                    Our Booking.com registry dates back to 2015, providing a decade of operational transparency and consistent guest satisfaction.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="tech-badge bg-white/5 border-white/10 text-white">Est_2015</div>
                    <div className="tech-badge bg-white/5 border-white/10 text-white">Verified_Guest_Only</div>
                    <div className="tech-badge bg-white/5 border-white/10 text-white">Zero_Cherry_Picking</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 relative group">
                    <Quote className="absolute top-6 right-6 h-12 w-12 text-white/5" />
                    <p className="text-lg text-slate-300 italic font-light leading-tight mb-6">
                      "The best tour operator in the region. Mr. Sam's police background ensures everything is run with military precision."
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Sarah J. // London, UK</span>
                      <div className="verified-badge bg-white/10 text-white border-white/10">VERIFIED</div>
                    </div>
                  </div>
                  <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 relative group">
                    <Quote className="absolute top-6 right-6 h-12 w-12 text-white/5" />
                    <p className="text-lg text-slate-300 italic font-light leading-tight mb-6">
                      "Professional, safe, and transparent. The only operator I would trust for the Ijen night climb."
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Marc D. // Paris, FR</span>
                      <div className="verified-badge bg-white/10 text-white border-white/10">VERIFIED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col items-center">
          <div className="p-12 bg-white border-4 border-safety-orange rounded-[2.5rem] -rotate-2 shadow-2xl relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <Globe className="w-20 h-20 text-safety-orange mb-8" />
              <span className="text-5xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-3">RECORD_VERIFIED</span>
              <span className="font-mono text-[11px] text-slate-500 tracking-[0.4em] uppercase">Public Registry 2026</span>
            </div>
          </div>
          <p className="mt-12 font-mono text-[11px] text-slate-500 uppercase tracking-widest">
            System: JVTO_PRESS_ARCHIVE_V1.11 // Node: ID_JKT_01_SECURE
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
