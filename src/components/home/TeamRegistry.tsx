import React, { useState } from 'react';
import { UserCheck, ShieldCheck, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { SSOT } from '../../lib/ssot';
import { TeamCard } from '../team/TeamCard';
import { TeamFilter } from '../team/TeamFilter';

export const TeamRegistry = () => {
  const [crewFilter, setCrewFilter] = useState('All');

  const filteredCrew = SSOT.crew.filter(c => crewFilter === 'All' || c.role === crewFilter.slice(0, -1));

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <UserCheck className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Human Intelligence Infrastructure</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-authority-navy leading-[0.9] mb-6 uppercase">
            PERSONNEL <br />
            <span className="text-safety-orange">ROSTER.</span>
          </h2>
          <p className="text-slate-600 text-xl leading-tight font-light">
            Every operative listed below is vetted through our multi-layer verification protocol. Connecting faces to verifiable competencies.
          </p>
        </div>
        <TeamFilter 
          currentFilter={crewFilter} 
          onFilterChange={setCrewFilter} 
          count={filteredCrew.length} 
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCrew.map((crew, i) => (
          <TeamCard key={crew.id} crew={crew} index={i} compact={true} />
        ))}
      </div>

      <div className="mt-24 pt-12 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h4 className="font-mono text-[11px] uppercase text-slate-500 tracking-widest font-black">Standard Operating Procedure</h4>
          <ul className="space-y-3">
            {['Background Checks', 'Annual Health Audit', 'Safety Training Cert'].map((sop, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-safety-orange" />
                <span className="text-[11px] font-bold text-authority-navy uppercase tracking-wider">{sop}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-mono text-[11px] uppercase text-slate-500 tracking-widest font-black">Certification Bodies</h4>
          <ul className="space-y-3">
            {['Banyuwangi Tourist Guide Assoc.', 'Indonesian Ministry of Tourism', 'JVTO Safety Infrastructure'].map((body, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-verified-lime" />
                <span className="text-[11px] font-bold text-authority-navy uppercase tracking-wider">{body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end justify-center gap-6">
          <div className="p-8 bg-white border-2 border-safety-orange rounded-md -rotate-3 shadow-hover relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-safety-orange mb-4" />
              <span className="text-3xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-2">100% COMPLIANT</span>
              <span className="font-mono text-[11px] text-slate-500 tracking-widest uppercase">Personnel Audit 2026</span>
            </div>
          </div>

          <div className="p-6 bg-authority-navy rounded-md border border-white/10 shadow-hover w-full max-w-[200px]">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-4 h-4 text-safety-orange" />
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Fleet Safety Index</span>
            </div>
            <div className="text-3xl font-black text-white mb-2">95.4%</div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '95.4%' }}
                transition={{ duration: 1.5 }}
                className="h-full bg-safety-orange"
              />
            </div>
            <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mt-2">Aggregate performance across {SSOT.crew.length} operatives</p>
          </div>
        </div>
      </div>
    </section>
  );
};
