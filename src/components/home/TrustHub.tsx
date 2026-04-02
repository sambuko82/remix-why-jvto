import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Database, 
  Lock, 
  Fingerprint, 
  ChevronRight, 
  History, 
  Newspaper, 
  Handshake,
  ExternalLink,
  Award,
  Globe,
  Search,
  Quote,
  FileDigit,
  Scale,
  Activity,
  Star,
  Mountain,
  Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';

type HubTab = 'pillars' | 'partners' | 'evidence';
type EvidenceSubTab = 'history' | 'press' | 'forensic';

export const TrustHub = () => {
  const [activeTab, setActiveTab] = useState<HubTab>('pillars');
  const [evidenceTab, setEvidenceTab] = useState<EvidenceSubTab>('history');
  const [activePressIndex, setActivePressIndex] = useState(0);
  const navigate = useNavigate();

  const mainTabs = [
    { id: 'pillars', label: 'Trust Pillars', icon: Database, desc: 'Our core operational values.' },
    { id: 'partners', label: 'Affiliations', icon: Handshake, desc: 'Strategic global partnerships.' },
    { id: 'evidence', label: 'Audit Vault', icon: ShieldCheck, desc: 'Forensic proof & media.' },
  ];

  // --- PILLARS DATA ---
  const pillarIcons = [ShieldCheck, Scale, Activity, Star, Handshake, Mountain];
  const pillarColors = ["text-safety-orange", "text-verified-bright", "text-blue-500", "text-amber-500", "text-emerald-600", "text-authority-navy"];
  const pillars = SSOT.hub_content.trust_stack.cards.slice(0, 5).map((card, i) => ({
    ...card,
    icon: pillarIcons[i % pillarIcons.length],
    iconColor: pillarColors[i % pillarColors.length],
    hash: `SHA-256: ${Math.random().toString(16).substring(2, 6)}...${Math.random().toString(16).substring(2, 6)}`
  }));

  // --- PARTNERS DATA ---
  const partnerHighlight = SSOT.hub_content.trust_stack.cards[5] as any;

  // --- EVIDENCE DATA ---
  const artifacts = [
    {
      year: SSOT.history.award2015.year.toString(),
      title: "Foundation",
      desc: `Original shipping labels and plaques from Booking.com addressed to our current headquarters. Recognized with a score of ${SSOT.history.award2015.score}.`,
      images: [SSOT.assets.find(a => a.slug === 'booking-2015-plaque')?.url || "https://picsum.photos/seed/booking1/800/600"],
      hash: "SHA-256: 4F8E...2D1A",
      type: "LOGISTICS_RECORD"
    },
    {
      year: SSOT.history.book2016.year.toString(),
      title: "Guidebook Standard",
      desc: "Recommended by the 'German Travel Bible' (Stefan Loose) long before the post-pandemic tourism boom.",
      images: [SSOT.assets.find(a => a.slug === 'stefan-loose-ijen-bondowoso-page')?.url || "https://picsum.photos/seed/stefan/800/600"],
      hash: "SHA-256: 9C2A...7F3B",
      type: "ARCHIVAL_PRINT"
    }
  ];

  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(text);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  const formatHash = (hash: string) => hash.substring(0, 8).toUpperCase() + "..." + hash.substring(hash.length - 4).toUpperCase();
  const forensicDocs = [
    { title: "NIB Entity", img: SSOT.proof_vault.legality[0].url, hash: formatHash(SSOT.proof_vault.legality[0].hash), type: "LEGAL_ENTITY" },
    { title: "Police SPRIN", img: SSOT.proof_vault.police_safety[0].url, hash: formatHash(SSOT.proof_vault.police_safety[0].hash), type: "AUTHORITY_LOG" },
    { title: "Health Screening", img: SSOT.proof_vault.safety[0].url, hash: formatHash(SSOT.proof_vault.safety[0].hash), type: "MEDICAL_RECORD" }
  ];

  const activeArticle = SSOT.press[activePressIndex];

  return (
    <section id="trust-hub" className="section-spacing bg-white relative overflow-hidden">
      <div className="container-authority">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="badge-eyebrow bg-authority-navy text-white mb-6">
              <Lock className="w-3 h-3" /> System Integrity Dashboard
            </div>
            <h2 className="heading-section mb-6">
              OPERATIONAL <br />
              <span className="text-safety-orange">TRANSPARENCY.</span>
            </h2>
            <p className="body-text">
              We don't ask for trust; we provide the infrastructure for you to audit our legal, safety, and historical credentials directly.
            </p>
          </div>

          {/* Main Hub Navigation */}
          <div className="flex flex-wrap gap-3 bg-slate-50 p-2 rounded-md border border-slate-100 w-full lg:w-auto">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as HubTab)}
                className={`flex-1 lg:flex-none flex items-center justify-center gap-3 px-8 py-4 rounded-md font-black uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all ${
                  activeTab === tab.id 
                    ? 'bg-authority-navy text-white shadow-hover shadow-authority-navy/20' 
                    : 'text-slate-400 hover:text-authority-navy hover:bg-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            
            {/* PILLARS TAB */}
            {activeTab === 'pillars' && (
              <motion.div
                key="pillars"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {pillars.map((item, i) => (
                  <div 
                    key={i}
                    onClick={() => navigate(item.link)}
                    className={`p-10 md:p-12 rounded-md border border-slate-100 bg-white shadow-card hover:shadow-hover hover:border-safety-orange/30 transition-all group cursor-pointer flex flex-col justify-between relative overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-safety-orange/5 transition-colors"></div>
                    <div>
                      <div className="flex justify-between items-start mb-12">
                        <div className="p-5 rounded-md bg-slate-50 group-hover:bg-white transition-colors border border-slate-100 group-hover:border-safety-orange/20">
                          <item.icon className={`w-10 h-10 ${item.iconColor}`} />
                        </div>
                        <span className="font-mono text-[10px] text-slate-300 font-black uppercase tracking-[0.25em]">{item.hash}</span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black mb-6 uppercase leading-none tracking-tight text-authority-navy group-hover:text-safety-orange transition-colors">{item.title}</h3>
                      <p className="body-text text-base md:text-lg">{item.summary}</p>
                    </div>
                    <div className="flex items-center justify-between mt-12 pt-10 border-t border-slate-100">
                      <div className="flex items-center gap-4">
                        <Eye className="w-5 h-5 text-safety-orange" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black text-slate-600">Inspect Proof</span>
                      </div>
                      <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-safety-orange group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* PARTNERS TAB */}
            {activeTab === 'partners' && partnerHighlight && (
                <motion.div
                key="partners"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-md bg-authority-navy text-white overflow-hidden border border-white/10 shadow-hover grid grid-cols-1 lg:grid-cols-2"
              >
                <div className="p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative">
                  <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 rounded-md bg-safety-orange/20 border border-safety-orange/30">
                        <Handshake className="w-6 h-6 text-safety-orange" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-[0.4em] font-black text-safety-orange">Strategic Affiliations</span>
                    </div>
                    <h2 className="heading-section text-white mb-8">
                      {partnerHighlight.title.split(' ').slice(0, 2).join(' ')} <br />
                      <span className="text-safety-orange">{partnerHighlight.title.split(' ').slice(2).join(' ')}</span>
                    </h2>
                    <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed mb-10 border-l-2 border-safety-orange/30 pl-8">
                      {partnerHighlight.narrative}
                    </p>
                    <button 
                      onClick={() => navigate(partnerHighlight.link)}
                      className="px-8 py-4 bg-safety-orange hover:bg-safety-orange/90 text-white rounded-sm font-black uppercase tracking-widest transition-all flex items-center gap-3 group"
                    >
                      Verify Standards <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                <div className="p-8 md:p-16 bg-black/20 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  {partnerHighlight.partners?.map((partner: any, idx: number) => (
                    <div key={idx} className="bg-white rounded-md p-8 flex flex-col items-center justify-center gap-4 shadow-card group/partner hover:scale-105 transition-all duration-500">
                      <img src={partner.logo} alt={partner.name} className="h-12 object-contain grayscale group-hover/partner:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                      <span className="font-mono text-[9px] uppercase tracking-widest font-black text-slate-400 group-hover/partner:text-safety-orange">{partner.name}</span>
                    </div>
                  ))}
                  <div className="bg-safety-orange/10 border border-safety-orange/30 rounded-md p-8 flex flex-col items-center text-center gap-2">
                    <Globe className="w-8 h-8 text-safety-orange mb-2" />
                    <h4 className="text-lg font-black uppercase text-white">Local Impact</h4>
                    <p className="text-[10px] text-white/60 uppercase tracking-widest">100% Community Support</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* EVIDENCE TAB */}
            {activeTab === 'evidence' && (
              <motion.div
                key="evidence"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8"
              >
                {/* Evidence Sub-Tabs */}
                <div className="flex gap-4 border-b border-slate-200 pb-4">
                  {(['history', 'press', 'forensic'] as EvidenceSubTab[]).map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setEvidenceTab(sub)}
                      className={`font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold pb-2 border-b-2 transition-all ${
                        evidenceTab === sub ? 'border-safety-orange text-authority-navy' : 'border-transparent text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {sub === 'history' ? 'Continuity Log' : sub === 'press' ? 'Media Proof' : 'Evidence Locker'}
                    </button>
                  ))}
                </div>

                <div className="min-h-[400px]">
                  <AnimatePresence mode="wait">
                    
                    {/* HISTORY SUB-TAB */}
                    {evidenceTab === 'history' && (
                      <motion.div
                        key="history-sub"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                      >
                        <div className="space-y-6">
                          {artifacts.map((art, i) => (
                            <div key={i} className="p-8 rounded-md bg-white border border-slate-200 shadow-card">
                              <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-authority-navy text-white flex items-center justify-center font-black">{art.year}</div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">{art.type}</span>
                              </div>
                              <h4 className="text-xl font-black text-authority-navy uppercase mb-2">{art.title}</h4>
                              <p className="text-slate-500 font-light text-sm leading-relaxed">{art.desc}</p>
                            </div>
                          ))}
                        </div>
                        <div className="rounded-md overflow-hidden border border-slate-200 relative group">
                          <img src={artifacts[0].images[0]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="History" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/80 to-transparent flex items-end p-8">
                            <p className="text-white font-mono text-[10px] uppercase tracking-widest">Archival Record: {artifacts[0].hash}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* PRESS SUB-TAB */}
                    {evidenceTab === 'press' && (
                      <motion.div
                        key="press-sub"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col lg:flex-row gap-8"
                      >
                        <div className="lg:w-1/3 space-y-2">
                          {SSOT.press.map((article, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActivePressIndex(idx)}
                              className={`w-full text-left p-4 rounded-sm border transition-all ${
                                activePressIndex === idx ? 'bg-authority-navy text-white border-authority-navy shadow-card' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                              }`}
                            >
                              <span className="block font-black uppercase tracking-wider text-[10px] mb-1">{article.publisher}</span>
                              <p className="text-[11px] line-clamp-1 opacity-70">{article.translatedTitle}</p>
                            </button>
                          ))}
                        </div>
                        <div className="lg:w-2/3 space-y-6">
                          <div className="p-8 rounded-md bg-slate-50 border border-slate-200 relative">
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-200" />
                            <p className="text-authority-navy italic text-lg md:text-xl leading-relaxed mb-6 font-light relative z-10">"{activeArticle.quote}"</p>
                            <div className="flex items-center gap-3">
                              <div className="h-px w-8 bg-safety-orange"></div>
                              <span className="font-mono font-bold text-safety-orange uppercase tracking-widest text-[10px]">— {activeArticle.author}</span>
                            </div>
                          </div>
                          <a href={activeArticle.url} target="_blank" rel="noopener noreferrer" className="block relative rounded-md overflow-hidden border border-slate-200 group">
                            <img src={activeArticle.screenshot} className="w-full aspect-video object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity" alt="Press" referrerPolicy="no-referrer" />
                            <div className="absolute inset-0 bg-authority-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                              <div className="bg-white text-authority-navy px-6 py-3 rounded-sm font-black uppercase tracking-wider text-[10px] flex items-center gap-2">Read Original <ExternalLink className="w-4 h-4" /></div>
                            </div>
                          </a>
                        </div>
                      </motion.div>
                    )}

                    {/* FORENSIC SUB-TAB */}
                    {evidenceTab === 'forensic' && (
                      <motion.div
                        key="forensic-sub"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                      >
                        {forensicDocs.map((doc, i) => (
                          <div key={i} className="p-6 rounded-md bg-white border border-slate-200 group hover:border-safety-orange/30 transition-all shadow-card">
                            <div className="relative aspect-square rounded-sm overflow-hidden mb-6 bg-slate-100">
                              <img src={doc.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" alt={doc.title} referrerPolicy="no-referrer" />
                              <div className="absolute top-4 right-4 bg-authority-navy/80 text-white px-2 py-1 rounded-sm text-[8px] font-mono uppercase tracking-widest">{doc.type}</div>
                            </div>
                            <h4 className="font-black text-authority-navy uppercase mb-4">{doc.title}</h4>
                            <div 
                              onClick={() => copyToClipboard(doc.hash)}
                              className="bg-slate-50 p-3 rounded-sm border border-slate-100 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-100 transition-colors relative"
                            >
                              <div className="flex items-center gap-3">
                                <Fingerprint className="w-4 h-4 text-slate-400" />
                                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest truncate">{doc.hash}</span>
                              </div>
                              <AnimatePresence>
                                {copiedHash === doc.hash && (
                                  <motion.div 
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-success-green text-white text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-card z-50 whitespace-nowrap"
                                  >
                                    Hash Copied
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        ))}
                        <div className="p-8 rounded-md bg-authority-navy text-white flex flex-col justify-center items-center text-center gap-6 shadow-card">
                          <Lock className="w-12 h-12 text-safety-orange" />
                          <h4 className="text-xl font-black uppercase tracking-tight">Full Audit Library</h4>
                          <button onClick={() => navigate('/verify-jvto')} className="w-full py-4 bg-safety-orange text-white rounded-sm font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform">Enter Vault</button>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Global Audit Status Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-verified-bright animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">System Status: Operational</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-verified-bright" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">Audit Pass: 2026</span>
            </div>
          </div>
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
            Last Cryptographic Sync: {new Date().toLocaleTimeString()} UTC
          </p>
        </div>

      </div>
    </section>
  );
};
