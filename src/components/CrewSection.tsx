import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SSOT } from '../lib/ssot';
import { CrewProfileModal } from './CrewProfileModal';
import { ShieldCheck, ArrowUpRight, Star, Quote, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CrewSection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCrew, setSelectedCrew] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCrewClick = (crew: any) => {
    setSelectedCrew(crew);
    setIsModalOpen(true);
  };

  const displayedCrew = SSOT.crew.slice(0, 3);

  return (
    <section id="crew" className="section-spacing bg-white relative overflow-hidden">
      <div className="container-authority">
        {/* Header Section - Authority Style */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="badge-eyebrow bg-authority-navy text-white mb-6 md:mb-8">
              <Users className="w-3 h-3" /> The Human Element
            </div>
            <h2 className="heading-section">
              MEET THE <br />
              <span className="text-safety-orange">VANGUARD.</span>
            </h2>
          </div>
          <p className="body-text max-w-sm">
            Our crew isn't just a team; they are the heart of our mission. Every guide and driver is vetted, licensed, and deeply committed to your safety.
          </p>
        </div>

        {/* Crew Grid - Full Photo Style aligned with DestinationGrid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {displayedCrew.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleCrewClick(member)}
              className="relative aspect-[4/5] rounded-md overflow-hidden group cursor-pointer shadow-card hover:shadow-hover transition-all duration-500"
            >
              {/* Full Profile Image */}
              <img 
                src={member.profile.image} 
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradient - Consistent with DestinationCard */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/90 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-safety-orange font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                    {member.role}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="text-white/60 font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                    {member.profile.archetype}
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-4 group-hover:-translate-y-2 transition-transform duration-500 leading-none">
                  {member.name}
                </h3>

                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 text-safety-orange font-mono text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                    View Profile <ChevronRight className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-verified-bright" />
                    <span className="text-[10px] font-mono text-white/40 font-black uppercase tracking-[0.2em]">Licensed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Consistent with VerifyCTA button style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center"
        >
          <button 
            onClick={() => navigate('/team')}
            className="w-full sm:w-auto bg-safety-orange hover:bg-orange-600 text-white px-12 py-6 rounded-md font-black uppercase tracking-[0.2em] text-sm transition-all shadow-hover shadow-safety-orange/20 flex items-center justify-center gap-4 mx-auto group"
          >
            Explore Full Team Registry <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          <p className="mt-8 text-slate-400 font-mono text-[10px] font-black uppercase tracking-[0.25em]">
            Total Operational Force: {SSOT.crew.length} Verified Members
          </p>
        </motion.div>
      </div>



      {/* Modal */}
      <CrewProfileModal 
        crew={selectedCrew} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};
