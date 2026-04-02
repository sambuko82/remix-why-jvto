import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Quote, Fingerprint, ShieldCheck, ChevronRight, Search, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { CrewMember } from '../../types';
import { AuditTrail } from '../AuditTrail';
import { SafetyMetrics } from '../SafetyMetrics';
import { AUDIT_LOGS } from '../../lib/auditLogs';
import { SSOT } from '../../lib/ssot';

interface TeamCardProps {
  crew: CrewMember;
  index: number;
  compact?: boolean;
}

export const TeamCard: React.FC<TeamCardProps> = ({ crew, index, compact = false }) => {
  const navigate = useNavigate();
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  const handleAuditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAuditOpen(true);
  };

  const reviews = SSOT.crew_reviews[crew.name] || [];
  const avgRating = reviews.length > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : null;

  return (
    <>
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        onClick={() => navigate(`/team/${crew.id}`)}
        className={`bento-card bg-audit-white group flex flex-col relative cursor-pointer hover:border-safety-orange transition-all ${compact ? 'p-0' : ''}`}
      >
        <div className="scanline"></div>
        <div className="aspect-[3/4] overflow-hidden relative border-b border-slate-100">
          <img 
            alt={crew.name} 
            className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
            src={crew.profile.image} 
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-6 left-6">
            <div className="tech-badge bg-authority-navy/80 backdrop-blur text-white border border-white/10">
              ID: {crew.id.toUpperCase()}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
            <div className="w-full bg-safety-orange text-white font-black py-4 rounded-md text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-card">
              Inspect Profile {compact ? <Search className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </div>
          </div>
        </div>
        
        <div className="p-8 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-safety-orange uppercase font-black tracking-widest">
                {crew.role}
              </span>
              <div className="status-live"></div>
            </div>
            <h3 className="text-2xl font-black uppercase text-authority-navy leading-none">{crew.name}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={handleAuditClick}
              className="verified-badge hover:bg-verified-bright hover:text-white transition-colors flex items-center gap-2 group/badge"
            >
              VERIFIED_OPERATIVE
              <ShieldCheck className="w-3 h-3 group-hover/badge:scale-110 transition-transform" />
            </button>
            {avgRating && (
              <div className="verified-badge bg-slate-50 text-slate-600 border-slate-200 flex items-center gap-1">
                <Star className="w-3 h-3 text-safety-orange fill-safety-orange" />
                <span>{avgRating} ({reviews.length})</span>
              </div>
            )}
          </div>

          {/* Safety Metrics Integration */}
          {crew.profile.safetyMetrics && (
            <div className="pt-4 border-t border-slate-50">
              <SafetyMetrics metrics={crew.profile.safetyMetrics.slice(0, 1)} compact />
            </div>
          )}
          
          <div className="relative pt-6 border-t border-slate-100">
            <Quote className="absolute -top-3 -left-2 text-slate-100 w-10 h-10 -z-10" />
            <p className="text-xs text-slate-500 italic leading-tight relative z-10 line-clamp-2">"{crew.quote}"</p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <Fingerprint className="w-4 h-4 text-slate-300" />
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Hash: {crew.id.slice(0, 8)}</span>
            </div>
            <ShieldCheck className="w-4 h-4 text-verified-bright" />
          </div>
        </div>
      </motion.article>

      <AuditTrail 
        entityId={crew.id}
        entityName={crew.name}
        logs={AUDIT_LOGS[crew.id] || []}
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />
    </>
  );
};
