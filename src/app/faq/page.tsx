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
  ShieldCheck,
  MessageSquare,
  FileText,
  Activity,
  UserCheck
} from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { motion, AnimatePresence } from 'motion/react';
import { BookingRail } from '../../components/BookingRail';

export default function FAQPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = SSOT.faq.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Support Protocol v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Knowledge Base & FAQ</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            SYSTEM <br />
            <span className="text-safety-orange">GUIDANCE.</span>
          </h1>
          <p className="text-slate-500 text-xl leading-tight font-light max-w-2xl">
            Technical answers to operational questions. If your query is not addressed below, 
            initiate a secure channel via WhatsApp for direct human intelligence.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="relative mb-16">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-500" />
          </div>
          <input 
            type="text"
            placeholder="SEARCH PROTOCOLS (E.G. 'VERIFY', 'POLICE', 'LEGAL')..."
            className="w-full bg-white border-2 border-slate-200 rounded-2xl py-6 pl-16 pr-6 font-mono text-xs uppercase tracking-widest focus:border-safety-orange focus:ring-0 transition-all outline-none shadow-xl shadow-black/5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`bento-card bg-white border-2 transition-all overflow-hidden ${openIndex === index ? 'border-safety-orange shadow-2xl' : 'border-slate-100 hover:border-slate-200'}`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[11px] text-slate-300 font-black">0{index + 1}</span>
                  <h3 className="text-xl font-black text-authority-navy uppercase leading-tight group-hover:text-safety-orange transition-colors">
                    {faq.question}
                  </h3>
                </div>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-safety-orange" /> : <ChevronDown className="w-5 h-5 text-slate-300" />}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-0 border-t border-slate-50">
                      <div className="mt-8 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-slate-600 text-lg leading-tight font-light">
                          {faq.answer}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Database className="w-3 h-3 text-slate-500" />
                          <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Source: SSOT_v1.9</span>
                        </div>
                        <div className="h-3 w-px bg-slate-200"></div>
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-3 h-3 text-verified-bright" />
                          <span className="font-mono text-[11px] text-verified-bright uppercase tracking-widest font-bold">Verified_Answer</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-24 bento-card border-dashed border-2 border-slate-200">
              <Database className="w-12 h-12 text-slate-200 mx-auto mb-6" />
              <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">No matching protocols found in the knowledge base.</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-32 p-12 bg-authority-navy rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
          <div className="scanline"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <div className="badge-eyebrow badge-eyebrow-orange mb-6">
                <MessageSquare className="w-3 h-3" /> Direct Assistance
              </div>
              <h2 className="text-4xl font-black uppercase leading-none mb-4">Still Have <br />Questions?</h2>
              <p className="text-slate-500 text-lg font-light leading-tight">
                Initiate a secure WhatsApp session with Mr. Sam for real-time operational intelligence.
              </p>
            </div>
            <a 
              href="https://wa.me/6281235061451"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-safety-orange hover:bg-safety-orange/90 text-white px-10 py-5 rounded-xl font-black uppercase tracking-wider transition-all shadow-xl shadow-safety-orange/20 flex items-center gap-3 group"
            >
              Open Secure Channel <ChevronDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer Audit Stamp */}
        <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col items-center">
          <div className="p-12 bg-white border-4 border-safety-orange rounded-[2.5rem] rotate-2 shadow-2xl relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-20 h-20 text-safety-orange mb-8" />
              <span className="text-5xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-3">KNOWLEDGE_AUDITED</span>
              <span className="font-mono text-[11px] text-slate-500 tracking-[0.4em] uppercase">Support Registry 2026</span>
            </div>
          </div>
          <p className="mt-12 font-mono text-[11px] text-slate-500 uppercase tracking-widest">
            System: JVTO_SUPPORT_V1.9 // Node: ID_JKT_01_SECURE
          </p>
        </div>
      </div>
    </div>
  );
}
