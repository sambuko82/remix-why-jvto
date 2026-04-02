import React, { useState, useEffect } from 'react';
import { Shield, FileCheck, ArrowLeft, ExternalLink, MapPin, FileText, Stethoscope, History, Lock, Fingerprint, Search, Database, ShieldCheck, CheckCircle2, Eye, Download, ChevronRight, Building2, Activity, UserCheck, MessageSquare, ClipboardList } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { EvidenceBadge, SectionHeading, HashBadge } from '../../components/ForensicUI';
import { AuditStamp } from '../../components/AuditStamp';
import { motion, AnimatePresence } from 'motion/react';
import { AssetViewer } from '../../components/AssetViewer';
import { BookingRail } from '../../components/BookingRail';
import { AuditTrail } from '../../components/AuditTrail';
import { AUDIT_LOGS } from '../../lib/auditLogs';
import { ForensicAnnotation } from '../../types';

export default function VerifyJvto() {
  const navigate = useNavigate();
  const location = useLocation();
  const onBack = () => navigate('/');
  const [selectedAsset, setSelectedAsset] = useState<{ url: string, title: string, hash: string, type: 'image' | 'pdf', annotations?: ForensicAnnotation[] } | null>(null);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const meta = SSOT.pages['/verify-jvto'];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const openAsset = (url: string, title: string, hash: string, type: 'image' | 'pdf' = 'image', annotations?: ForensicAnnotation[]) => {
    setSelectedAsset({ url, title, hash, type, annotations });
  };

  return (
    <div className="min-h-screen bg-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <PageSEO route="/verify-jvto" />
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="sticky top-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[10px] md:text-[11px] font-black text-slate-500 hover:text-authority-navy transition-all uppercase tracking-[0.2em]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> <span className="hidden xs:inline">Back to </span>Hub
          </button>
          <div className="flex items-center gap-4 md:gap-8">
            <button 
              onClick={() => setIsAuditOpen(true)}
              className="flex items-center gap-2 text-[10px] md:text-[11px] font-black text-safety-orange hover:text-authority-navy transition-all uppercase tracking-[0.2em] border border-safety-orange/20 px-3 md:px-5 py-2 rounded-md bg-safety-orange/5 shadow-card"
            >
              <ClipboardList className="w-4 h-4" /> <span className="hidden sm:inline">View Org Audit Trail</span><span className="sm:hidden">Audit</span>
            </button>
            <div className="flex items-center gap-2 md:gap-3 text-authority-navy text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
              <Lock className="w-4 h-4" /> <span className="hidden xs:inline">Forensic Registry</span><span className="xs:hidden">v1.9</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-32 text-center"
        >
          <div className="badge-eyebrow bg-authority-navy text-white mb-10 mx-auto">
            <Database className="w-3.5 h-3.5 md:w-4 md:h-4" /> Forensic Evidence Locker
          </div>
          <h1 className="text-4xl xs:text-5xl md:text-8xl font-black text-authority-navy mb-8 md:mb-12 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'IMMUTABLE PROOF.'}
          </h1>
          <p className="body-text max-w-2xl mx-auto">
            We believe trust is earned through evidence, not marketing. Every legal, medical, and operational claim we make is backed by verifiable artifacts in our Proof Vault.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-32">
          
          {/* 1. License to Operate */}
          <motion.section
            id="license"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 md:mb-48"
          >
            <SectionHeading 
              title="License to Operate" 
              subtitle="Official government authorizations and business certifications."
              badge="Legal_Compliance"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
              {SSOT.proof_vault.license.map((item: any) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bg-white p-8 md:p-10 rounded-md border border-slate-100 shadow-card group cursor-pointer hover:shadow-hover transition-all duration-700 flex items-center justify-between relative overflow-hidden"
                >
                  <div className="scanline"></div>
                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-md flex items-center justify-center text-authority-navy group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 shadow-card">
                      <FileCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-authority-navy uppercase leading-tight mb-2 tracking-tight">{item.title}</h3>
                      <p className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-safety-orange group-hover:text-white group-hover:translate-x-2 transition-all duration-500 shadow-card">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 2. Legal Entity & Business Identity */}
          <motion.section
            id="legality"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 md:mb-48"
          >
            <SectionHeading 
              title="Legal Entity" 
              subtitle="Official registration and identification of our business entity."
              badge="NIB_REGISTRATION"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
              {SSOT.proof_vault.legality.map((item: any) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bg-white p-8 md:p-10 rounded-md border border-slate-100 shadow-card group cursor-pointer hover:shadow-hover transition-all duration-700 flex items-center justify-between relative overflow-hidden"
                >
                  <div className="scanline"></div>
                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-md flex items-center justify-center text-authority-navy group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 shadow-card">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-authority-navy uppercase leading-tight mb-2 tracking-tight">{item.title}</h3>
                      <p className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-safety-orange group-hover:text-white group-hover:translate-x-2 transition-all duration-500 shadow-card">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 3. Operational Transparency & Field Evidence */}
          <motion.section
            id="accountability"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 md:mb-48"
          >
            <SectionHeading 
              title="Accountability" 
              subtitle="Real-time field evidence and operational transparency logs."
              badge="FIELD_EVIDENCE_LOGS"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {SSOT.proof_vault.accountability.map((item: any) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bg-white rounded-md border border-slate-100 shadow-card overflow-hidden group cursor-pointer hover:shadow-hover transition-all duration-700 relative"
                >
                  <div className="scanline"></div>
                  <div className="h-56 md:h-64 overflow-hidden relative">
                    <img 
                      src={item.url} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-authority-navy/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-authority-navy/40 backdrop-blur-sm">
                      <div className="w-14 h-14 rounded-full bg-safety-orange text-white flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                        <Search className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-lg md:text-xl font-black text-authority-navy uppercase leading-tight mb-3 tracking-tight">{item.title}</h3>
                    <p className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.category} // {item.last_verified}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 4. Health & Safety Protocols */}
          <motion.section
            id="safety"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 md:mb-48"
          >
            <SectionHeading 
              title="Safety Protocols" 
              subtitle="Comprehensive health screening and safety audit compliance."
              badge="HEALTH_SCREENING_AUDIT"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
              {SSOT.proof_vault.safety.map((item: any) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bg-white p-8 md:p-10 rounded-md border border-slate-100 shadow-card group cursor-pointer hover:shadow-hover transition-all duration-700 flex items-center justify-between relative overflow-hidden"
                >
                  <div className="scanline"></div>
                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-md flex items-center justify-center text-authority-navy group-hover:bg-verified-bright group-hover:text-white transition-all duration-500 shadow-card">
                      <Activity className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-authority-navy uppercase leading-tight mb-2 tracking-tight">{item.title}</h3>
                      <p className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-verified-bright group-hover:text-white group-hover:translate-x-2 transition-all duration-500 shadow-card">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 5. Tourist Police Integration & Safety Command */}
          <motion.section
            id="police-safety"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 md:mb-48"
          >
            <SectionHeading 
              title="Police Integration" 
              subtitle="Direct coordination with Indonesian Tourist Police for maximum security."
              badge="AUTHORITY_COMMAND_LOGS"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
              {SSOT.proof_vault.police_safety.map((item: any) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bg-white p-8 md:p-10 rounded-md border border-slate-100 shadow-card group cursor-pointer hover:shadow-hover transition-all duration-700 flex items-center justify-between relative overflow-hidden"
                >
                  <div className="scanline"></div>
                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-md flex items-center justify-center text-authority-navy group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 shadow-card">
                      <Lock className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-authority-navy uppercase leading-tight mb-2 tracking-tight">{item.title}</h3>
                      <p className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-safety-orange group-hover:text-white group-hover:translate-x-2 transition-all duration-500 shadow-card">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 6. Guide / Team Credentials */}
          <motion.section
            id="credentials"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 md:mb-48"
          >
            <SectionHeading 
              title="Team Credentials" 
              subtitle="Verified professional licenses and certifications for all field personnel."
              badge="LICENSED_PERSONNEL"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {SSOT.proof_vault.credentials.map((item: any) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bg-white p-8 md:p-10 rounded-md border border-slate-100 shadow-card group cursor-pointer hover:shadow-hover transition-all duration-700 flex items-center justify-between relative overflow-hidden"
                >
                  <div className="scanline"></div>
                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-md flex items-center justify-center text-authority-navy group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 shadow-card">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-authority-navy uppercase leading-tight mb-2 tracking-tight">{item.title}</h3>
                      <p className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-safety-orange group-hover:text-white group-hover:translate-x-2 transition-all duration-500 shadow-card">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 7. Press & Recognition */}
          <motion.section
            id="press"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 md:mb-48"
          >
            <SectionHeading 
              title="Press & Recognition" 
              subtitle="International and national media coverage of our operations."
              badge="THIRD_PARTY_VALIDATION"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {SSOT.proof_vault.press.map((item: any) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bg-white rounded-md border border-slate-100 shadow-card overflow-hidden group cursor-pointer hover:shadow-hover transition-all duration-700 relative"
                >
                  <div className="scanline"></div>
                  <div className="h-56 md:h-64 overflow-hidden relative">
                    <img 
                      src={item.url} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-authority-navy/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-authority-navy/40 backdrop-blur-sm">
                      <div className="w-14 h-14 rounded-full bg-safety-orange text-white flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-lg md:text-xl font-black text-authority-navy uppercase leading-tight mb-3 tracking-tight">{item.title}</h3>
                    <p className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.category} // {item.last_verified}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 8. History & Historical Validation */}
          <motion.section
            id="history"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 md:mb-48"
          >
            <SectionHeading 
              title="History Proof" 
              subtitle="Historical documentation of our long-standing presence in Indonesian tourism."
              badge="ARCHIVAL_CONTINUITY"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {SSOT.proof_vault.history.map((item: any) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bg-white rounded-md border border-slate-100 shadow-card overflow-hidden group cursor-pointer hover:shadow-hover transition-all duration-700 relative"
                >
                  <div className="scanline"></div>
                  <div className="h-56 md:h-64 overflow-hidden relative">
                    <img 
                      src={item.url} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-authority-navy/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-authority-navy/40 backdrop-blur-sm">
                      <div className="w-14 h-14 rounded-full bg-safety-orange text-white flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                        <History className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-lg md:text-xl font-black text-authority-navy uppercase leading-tight mb-3 tracking-tight">{item.title}</h3>
                    <p className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.category} // {item.last_verified}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 9. Partners & Memberships */}
          <motion.section
            id="partners"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 md:mb-48"
          >
            <SectionHeading 
              title="Partner Network" 
              subtitle="Strategic affiliations with international tourism boards and organizations."
              badge="VERIFIED_AFFILIATIONS"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
              {SSOT.proof_vault.partners.map((item: any) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bg-white p-8 md:p-10 rounded-md border border-slate-100 shadow-card group cursor-pointer hover:shadow-hover transition-all duration-700 flex items-center justify-between relative overflow-hidden"
                >
                  <div className="scanline"></div>
                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-md flex items-center justify-center text-authority-navy group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 shadow-card">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-authority-navy uppercase leading-tight mb-2 tracking-tight">{item.title}</h3>
                      <p className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-safety-orange group-hover:text-white group-hover:translate-x-2 transition-all duration-500 shadow-card">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 10. Reputation (Review Verification Paths) */}
          <motion.section
            id="reputation"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 md:mb-48"
          >
            <SectionHeading 
              title="Reputation" 
              subtitle="Verified reviews and trust signals from global travel platforms."
              badge="REVIEW_VERIFICATION_PATHS"
            />
            
            <div className="bg-white p-10 md:p-16 rounded-md border border-slate-100 shadow-card text-center relative overflow-hidden">
              <div className="scanline"></div>
              <div className="w-20 h-20 bg-slate-50 rounded-md flex items-center justify-center text-slate-200 mx-auto mb-8 shadow-inner">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-authority-navy uppercase mb-6 tracking-tight">Reputation Registry</h3>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
                We are currently indexing review patterns across TripAdvisor, Google, and Booking.com. 
                Use the links below to verify our reputation independently.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://www.tripadvisor.com" 
                  target="_blank" 
                  className="px-8 py-4 bg-slate-50 rounded-md font-mono text-[11px] font-black uppercase tracking-[0.2em] text-authority-navy hover:bg-safety-orange hover:text-white transition-all duration-500 shadow-card"
                >
                  TripAdvisor
                </a>
                <a 
                  href="https://www.google.com/maps" 
                  target="_blank" 
                  className="px-8 py-4 bg-slate-50 rounded-md font-mono text-[11px] font-black uppercase tracking-[0.2em] text-authority-navy hover:bg-safety-orange hover:text-white transition-all duration-500 shadow-card"
                >
                  Google Reviews
                </a>
              </div>
            </div>
          </motion.section>

        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-16 md:mt-0">
          <AuditStamp />
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

      <AuditTrail 
        entityId="jvto_org"
        entityName="Java Volcano Tour Operator"
        logs={AUDIT_LOGS["jvto_org"] || []}
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />
    </div>
  );
}
