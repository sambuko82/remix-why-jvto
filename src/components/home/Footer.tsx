import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ShieldCheck, ChevronRight, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { SSOT } from '../../lib/ssot';

export const Footer = () => {
  const navigate = useNavigate();
  const org = SSOT.organization;
  return (
    <footer className="bg-authority-navy text-white pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden relative border-t border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03]"></div>
      
      <div className="container-authority relative z-10">
        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-24 md:mb-32">
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-8">Identity</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-black uppercase tracking-tight">
              <li className="text-white">{org.legalName}</li>
              <li className="opacity-60">{org.address_json?.addressLocality}, {org.address_json?.addressRegion}</li>
              <li className="opacity-60">{org.contact_phone}</li>
              <li className="opacity-60">{org.contact_email}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-8">Tours</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-black uppercase tracking-tight">
              <li><button onClick={() => navigate('/tours')} className="hover:text-safety-orange transition-colors">All Tours</button></li>
              <li><button onClick={() => navigate('/tours/from-surabaya')} className="hover:text-safety-orange transition-colors">From Surabaya</button></li>
              <li><button onClick={() => navigate('/tours/from-bali')} className="hover:text-safety-orange transition-colors">From Bali</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-8">Learn</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-black uppercase tracking-tight">
              <li><button onClick={() => navigate('/why-jvto')} className="hover:text-safety-orange transition-colors">Why JVTO</button></li>
              <li><button onClick={() => navigate('/why-jvto/our-team')} className="hover:text-safety-orange transition-colors">Meet the Team</button></li>
              <li><button onClick={() => navigate('/why-jvto/reviews')} className="hover:text-safety-orange transition-colors">Reviews</button></li>
              <li><button onClick={() => navigate('/travel-guide')} className="hover:text-safety-orange transition-colors">Travel Guide</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-8">Verify</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-black uppercase tracking-tight">
              <li><button onClick={() => navigate('/verify-jvto')} className="hover:text-safety-orange transition-colors">Verify JVTO</button></li>
              <li><button onClick={() => navigate('/policy/booking-payment-cancellation')} className="hover:text-safety-orange transition-colors">Booking Policy</button></li>
              <li><button onClick={() => navigate('/policy/inclusions-exclusions')} className="hover:text-safety-orange transition-colors">Inclusions</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-8">Proof</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-black uppercase tracking-tight">
              {org.same_as_urls.map((url, i) => (
                <li key={i}><a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-safety-orange transition-colors">{url.split('/')[2]}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-md border border-white/10">
              <ShieldCheck className="w-4 h-4 text-safety-orange" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Verified Operator</span>
            </div>
            <p className="text-[10px] md:text-xs text-slate-500 font-mono uppercase tracking-[0.2em] text-center md:text-left">
              © 2015–2026 {org.legalName} · {org.address_json?.addressLocality}, {org.address_json?.addressRegion} · License No. 1102230032918
            </p>
          </div>
          
          <div className="flex items-center gap-8">
             <button onClick={() => navigate('/policy/privacy')} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors">Privacy</button>
             <button onClick={() => navigate('/policy/terms')} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
