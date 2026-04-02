import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  UserCheck, 
  Lock, 
  Search, 
  Database
} from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { motion } from 'motion/react';
import { TeamCard } from '../../components/team/TeamCard';
import { TeamFilter } from '../../components/team/TeamFilter';
import { AuditStamp } from '../../components/AuditStamp';

export default function TeamRegistryPage() {
  const navigate = useNavigate();
  const [crewFilter, setCrewFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const meta = SSOT.pages['/team'];

  const filteredCrew = SSOT.crew.filter(c => {
    const matchesFilter = crewFilter === 'All' || c.role === crewFilter.slice(0, -1);
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         c.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-[10px] md:text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" /> <span className="hidden xs:inline">Back to </span>Hub
          </button>
          <div className="flex items-center gap-2 md:gap-3 text-safety-orange text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.15em] md:tracking-[0.2em]">
            <Lock className="w-3.5 h-3.5 md:w-4 md:h-4" /> Personnel Protocol v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-7xl relative z-10">
        <PageSEO route="/team" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <UserCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-safety-orange" />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-slate-500">Human Intelligence Registry</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-4 md:mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'THE TEAM REGISTRY.'}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-tight font-light max-w-2xl">
            Our team is not composed of freelancers. Meet the full-time field operators, drivers, and guides who execute our safety-first protocols every day.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-12 md:mb-16 items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <div className="absolute inset-y-0 left-5 md:left-6 flex items-center pointer-events-none">
              <Search className="w-4 h-4 md:w-5 md:h-5 text-slate-500" />
            </div>
            <input 
              type="text"
              placeholder="SEARCH PERSONNEL..."
              className="w-full bg-white border-2 border-slate-200 rounded-md md:rounded-md py-4 md:py-5 pl-12 md:pl-16 pr-4 md:pr-6 font-mono text-[10px] md:text-xs uppercase tracking-widest focus:border-safety-orange focus:ring-0 transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <TeamFilter currentFilter={crewFilter} onFilterChange={setCrewFilter} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredCrew.map((crew, i) => (
            <TeamCard key={crew.id} crew={crew} index={i} />
          ))}
        </div>

        {filteredCrew.length === 0 && (
          <div className="text-center py-16 md:py-32 bento-card border-dashed border-2 border-slate-200">
            <Database className="w-10 h-10 md:w-12 md:h-12 text-slate-200 mx-auto mb-4 md:mb-6" />
            <p className="font-mono text-[10px] md:text-[11px] text-slate-500 uppercase tracking-widest px-4">No personnel matching your criteria found in the registry.</p>
          </div>
        )}

        {/* Footer Audit Stamp */}
        <div className="mt-16 md:mt-0">
          <AuditStamp title="ROSTER_VERIFIED" subtitle="Audit Registry 2026" />
        </div>
      </div>
    </div>
  );
}
