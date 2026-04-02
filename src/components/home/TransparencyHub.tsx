import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History, 
  Newspaper, 
  ShieldCheck, 
  Lock, 
  Fingerprint, 
  ChevronRight, 
  Search, 
  ExternalLink, 
  Quote,
  Database,
  FileDigit,
  BookOpen
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';

type TabType = 'history' | 'press' | 'forensic';

export const TransparencyHub = () => {
  const [activeTab, setActiveTab] = useState<TabType>('history');
  const [activePressIndex, setActivePressIndex] = useState(0);
  const navigate = useNavigate();

  const tabs = [
    { id: 'history', label: 'Continuity Log', icon: History, desc: 'Archival evidence of operational stability since 2015.' },
    { id: 'press', label: 'Media Verification', icon: Newspaper, desc: 'National press coverage and independent safety audits.' },
    { id: 'forensic', label: 'Evidence Locker', icon: ShieldCheck, desc: 'Cryptographic proof of legal and safety credentials.' },
  ];

  const artifacts = [
    {
      year: SSOT.history.award2015.year.toString(),
      title: "THE FOUNDATION",
      desc: `Original shipping labels and plaques from Booking.com addressed to our current headquarters. Recognized with a score of ${SSOT.history.award2015.score}.`,
      images: [
        SSOT.assets.find(a => a.slug === 'booking-2015-plaque')?.url || "https://picsum.photos/seed/booking1/800/600",
        SSOT.assets.find(a => a.slug === 'booking-2015-shipping-label')?.url || "https://picsum.photos/seed/booking2/800/600"
      ],
      hash: "SHA-256: 4F8E...2D1A",
      type: "LOGISTICS_RECORD"
    },
    {
      year: SSOT.history.book2016.year.toString(),
      title: "THE GUIDEBOOK STANDARD",
      desc: "Recommended by the 'German Travel Bible' (Stefan Loose) long before the post-pandemic tourism boom.",
      images: [
        SSOT.assets.find(a => a.slug === 'stefan-loose-ijen-bondowoso-page')?.url || "https://picsum.photos/seed/stefan/800/600"
      ],
      hash: "SHA-256: 9C2A...7F3B",
      type: "ARCHIVAL_PRINT",
      meta: {
        title: SSOT.history.book2016.title,
        page: SSOT.history.book2016.page.toString(),
        isbn: SSOT.history.book2016.isbn
      }
    }
  ];

  const formatHash = (hash: string) => {
    return hash.substring(0, 8).toUpperCase() + "..." + hash.substring(hash.length - 4).toUpperCase();
  };

  const forensicDocs = [
    { title: "NIB Entity", img: SSOT.proof_vault.legality[0].url, hash: formatHash(SSOT.proof_vault.legality[0].hash), type: "LEGAL_ENTITY" },
    { title: "Police SPRIN", img: SSOT.proof_vault.police_safety[0].url, hash: formatHash(SSOT.proof_vault.police_safety[0].hash), type: "AUTHORITY_LOG" },
    { title: "Health Screening", img: SSOT.proof_vault.safety[0].url, hash: formatHash(SSOT.proof_vault.safety[0].hash), type: "MEDICAL_RECORD" },
    { title: "HPWKI License", img: SSOT.proof_vault.credentials[1].url, hash: formatHash(SSOT.proof_vault.credentials[1].hash), type: "PERSONNEL_ID" }
  ];

  const activeArticle = SSOT.press[activePressIndex];

  return (
    <section className="bg-authority-navy py-32 px-6 relative overflow-hidden border-y border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-4 h-4 text-safety-orange" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">The Audit Vault v3.0</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] mb-6 uppercase">
              TRANSPARENCY <br />
              <span className="text-safety-orange">HUB.</span>
            </h2>
            <p className="text-slate-400 text-xl leading-tight font-light">
              Consolidated forensic evidence. We don't ask for trust; we provide the infrastructure for you to audit us directly.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-md border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md font-black uppercase tracking-wider text-xs transition-all ${
                  activeTab === tab.id 
                    ? 'bg-safety-orange text-white shadow-card shadow-safety-orange/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === 'history' && (
              <motion.div
                key="history"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                <div className="space-y-8">
                  {artifacts.map((artifact, i) => (
                    <div key={i} className="bento-card bg-white/5 border-white/10 p-8 group hover:bg-white/10 transition-all">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-safety-orange text-white flex items-center justify-center font-black text-lg">
                            {artifact.year}
                          </div>
                          <div className="tech-badge bg-white/10 text-white border-white/20">{artifact.type}</div>
                        </div>
                        <Fingerprint className="w-4 h-4 text-slate-500" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3 uppercase">{artifact.title}</h3>
                      <p className="text-slate-400 leading-relaxed mb-6 font-light">{artifact.desc}</p>
                      
                      {artifact.meta && (
                        <div className="bg-black/20 p-4 rounded-md border border-white/5 mb-6">
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(artifact.meta).map(([key, value]) => (
                              <div key={key}>
                                <span className="block font-mono text-[9px] uppercase text-slate-500 mb-1">{key}</span>
                                <span className="block font-bold text-xs text-white truncate">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        <Lock className="w-3 h-3" />
                        {artifact.hash}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {artifacts.map((artifact, i) => (
                    <div key={i} className="relative rounded-md overflow-hidden border border-white/10 group aspect-[16/9]">
                      <img 
                        src={artifact.images[0]} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        alt={artifact.title}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-authority-navy to-transparent opacity-60"></div>
                      <div className="absolute bottom-8 left-8">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-safety-orange mb-2 block">Archival Record {artifact.year}</span>
                        <h4 className="text-xl font-black text-white uppercase">{artifact.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'press' && (
              <motion.div
                key="press"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row gap-12"
              >
                <div className="lg:w-1/3 space-y-3">
                  {SSOT.press.map((article, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePressIndex(idx)}
                      className={`w-full text-left p-5 rounded-md border transition-all flex items-center justify-between group ${
                        activePressIndex === idx 
                          ? 'bg-white/10 border-safety-orange/50 shadow-card' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div>
                        <span className={`block font-black uppercase tracking-wider text-sm mb-1 ${activePressIndex === idx ? 'text-white' : 'text-slate-400'}`}>
                          {article.publisher}
                        </span>
                        <p className={`text-xs line-clamp-1 ${activePressIndex === idx ? 'text-slate-300' : 'text-slate-500'}`}>
                          {article.translatedTitle}
                        </p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activePressIndex === idx ? 'text-safety-orange translate-x-1' : 'text-slate-600'}`} />
                    </button>
                  ))}
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white/5 p-8 rounded-md border border-white/10 mb-8 relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                    <p className="text-slate-200 italic text-xl leading-relaxed mb-8 relative z-10">
                      "{activeArticle.quote}"
                    </p>
                    <div className="flex items-center justify-between border-t border-white/5 pt-6">
                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-safety-orange"></div>
                        <span className="font-mono font-bold text-safety-orange uppercase tracking-widest text-xs">— {activeArticle.author}</span>
                      </div>
                      <span className="font-mono text-slate-500 text-xs">{new Date(activeArticle.date).getFullYear()}</span>
                    </div>
                  </div>
                  <a 
                    href={activeArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative bg-white rounded-md overflow-hidden group shadow-hover"
                  >
                    <div className="bg-slate-100 px-6 py-4 flex items-center justify-between border-b border-slate-200">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                      </div>
                      <div className="bg-white px-4 py-1.5 rounded-full border border-slate-200 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                        <Lock className="w-3 h-3 text-emerald-500" />
                        {activeArticle.url.replace('https://', '').split('/')[0]}
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-safety-orange transition-colors" />
                    </div>
                    <img 
                      src={activeArticle.screenshot} 
                      className="w-full aspect-[16/9] object-cover object-top"
                      alt="Press Screenshot"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </div>
              </motion.div>
            )}

            {activeTab === 'forensic' && (
              <motion.div
                key="forensic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {forensicDocs.map((doc, i) => (
                    <div key={i} className="bento-card bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all">
                      <div className="relative h-48 rounded-md mb-6 overflow-hidden border border-white/10">
                        <img 
                          src={doc.img} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                          alt={doc.title}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-authority-navy/40">
                          <Search className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="tech-badge bg-white/10 text-white border-white/20 text-[9px]">{doc.type}</div>
                        </div>
                      </div>
                      <h4 className="font-black text-white text-lg uppercase mb-4">{doc.title}</h4>
                      <div className="bg-black/20 p-3 rounded-md border border-white/5 flex items-center gap-3">
                        <Fingerprint className="w-4 h-4 text-slate-500" />
                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest truncate">SHA-256: {doc.hash}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white/5 rounded-md border border-white/10 gap-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="status-live"></div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">Live Verification Nodes: 12/12 Active</span>
                    </div>
                    <p className="text-slate-500 text-sm">Last cryptographic audit performed on {new Date().toLocaleDateString()}</p>
                  </div>
                  <button 
                    onClick={() => navigate('/verify-jvto')}
                    className="w-full md:w-auto group bg-white text-authority-navy px-10 py-4 rounded-md font-black uppercase tracking-wider transition-all hover:bg-safety-orange hover:text-white flex items-center justify-center gap-3 shadow-hover"
                  >
                    <Lock className="w-5 h-5"/> Enter Full Proof Library <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
