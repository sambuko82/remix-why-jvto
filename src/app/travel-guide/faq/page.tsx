import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  Database,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion, AnimatePresence } from 'motion/react';
import { AuditStamp } from '../../../components/AuditStamp';

export default function FAQPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);
  const meta = SSOT.pages['/travel-guide/faq'];

  const filteredFaqs = SSOT.faq.filter(faq => {
    if (!searchQuery.trim()) return true;
    const keywords = searchQuery.toLowerCase().split(' ').filter(k => k.trim() !== '');
    const q = faq.question.toLowerCase();
    const a = faq.answer.toLowerCase();
    
    // Check if every keyword is found in either the question or the answer
    return keywords.every(keyword => q.includes(keyword) || a.includes(keyword));
  });

  const toggleFaq = (question: string) => {
    setOpenId(openId === question ? null : question);
  };

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/travel-guide')}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Travel Guide
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> FAQ_Registry_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl relative z-10">
        <PageSEO route="/travel-guide/faq" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Knowledge Base</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'COMMON QUESTIONS.'}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-tight font-light max-w-2xl">
            Direct answers to the most frequent concerns about safety, logistics, and legal compliance. We believe in radical transparency.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="relative mb-12 md:mb-16">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input 
            type="text"
            placeholder="SEARCH QUESTIONS OR KEYWORDS..."
            className="w-full bg-white border-2 border-slate-200 rounded-2xl py-4 md:py-6 pl-14 md:pl-16 pr-6 font-mono text-[10px] md:text-xs uppercase tracking-widest focus:border-safety-orange focus:ring-0 transition-all outline-none shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.question;
            return (
              <motion.div 
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bento-card bg-audit-white border-2 transition-all overflow-hidden ${isOpen ? 'border-safety-orange shadow-2xl' : 'border-slate-100'}`}
              >
                <button 
                  onClick={() => toggleFaq(faq.question)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="font-mono text-[10px] md:text-[11px] text-slate-300 font-black shrink-0">0{index + 1}</span>
                    <h3 className="text-lg md:text-xl font-black text-authority-navy uppercase leading-tight group-hover:text-safety-orange transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="shrink-0 ml-4">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-safety-orange" /> : <ChevronDown className="w-5 h-5 text-slate-300" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-slate-50">
                        <div className="mt-6 md:mt-8 p-6 md:p-8 bg-slate-50 rounded-2xl border border-slate-100">
                          <p className="text-slate-600 text-base md:text-lg leading-tight font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-16 md:py-24 bg-audit-white rounded-3xl border-2 border-dashed border-slate-200">
              <Database className="w-12 h-12 text-slate-200 mx-auto mb-4" />
              <p className="text-slate-400 font-mono text-[10px] md:text-xs uppercase tracking-widest">No matching records found.</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-24 md:mt-32 p-8 md:p-12 bg-authority-navy rounded-[2rem] md:rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
          <div className="scanline"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-10 md:gap-12">
            <div className="max-w-md">
              <div className="badge-eyebrow badge-eyebrow-orange mb-6">
                <MessageSquare className="w-3 h-3" /> Direct Assistance
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-none mb-4">Still Have <br className="hidden md:block" />Questions?</h2>
              <p className="text-slate-500 text-base md:text-lg font-light leading-tight">
                Message Mr. Sam directly on WhatsApp for real-time answers about your tour.
              </p>
            </div>
            <a 
              href="https://wa.me/6281235061451"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-safety-orange hover:bg-safety-orange/90 text-white px-10 py-5 rounded-xl font-black uppercase tracking-wider transition-all shadow-xl shadow-safety-orange/20 flex items-center justify-center gap-3 group"
            >
              Message Us <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer Audit Stamp */}
        <AuditStamp title="FAQ_VERIFIED" subtitle="Registry 2026" system="JVTO_DOCS_V1.9" />
      </div>
    </div>
  );
}
