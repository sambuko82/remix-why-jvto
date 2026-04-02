import React from 'react';
import { 
  Star, 
  ArrowLeft, 
  MessageSquare, 
  Quote, 
  CheckCircle2, 
  ExternalLink,
  Award,
  ThumbsUp,
  MapPin,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';

export default function ReviewsPage() {
  const navigate = useNavigate();
  const onBack = () => navigate('/why-jvto');
  const meta = SSOT.pages['/why-jvto/reviews'];

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Trust Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Star className="w-4 h-4" /> Guest Voices & Reviews
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl relative z-10">
        <PageSEO route="/why-jvto/reviews" />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Reputation Archive</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'GUEST VOICES.'}
          </h1>
          <p className="text-2xl text-slate-500 max-w-3xl leading-tight font-light">
            We don't just show the highlights. We publish verified feedback from real guests, focusing on our safety protocols, medical screening, and the quality of our private expeditions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {SSOT.organization.same_as_urls.map((url, i) => {
            let platformName = 'Review Platform';
            if (url.includes('trustpilot.com')) platformName = 'Trustpilot';
            if (url.includes('tripadvisor.com')) platformName = 'TripAdvisor';
            if (url.includes('google.com/maps')) platformName = 'Google Reviews';

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bento-card bg-audit-white p-12 relative group flex flex-col items-center text-center hover:border-safety-orange transition-colors"
              >
                <div className="scanline"></div>
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-safety-orange/10 transition-colors">
                  <MessageSquare className="w-8 h-8 text-slate-400 group-hover:text-safety-orange transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-authority-navy uppercase mb-4">{platformName}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Read unfiltered, independent reviews from our past guests on {platformName}.
                </p>
                <a 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-3 text-[11px] font-mono font-bold text-safety-orange uppercase tracking-widest hover:gap-5 transition-all"
                >
                  View Reviews <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col items-center">
          <div className="p-12 bento-card bg-audit-white border-4 border-safety-orange rounded-[2.5rem] -rotate-2 shadow-2xl relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <ThumbsUp className="w-20 h-20 text-safety-orange mb-8" />
              <span className="text-5xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-3">REPUTATION_VERIFIED</span>
              <span className="font-mono text-[11px] text-slate-500 tracking-[0.4em] uppercase">Guest Voices 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
