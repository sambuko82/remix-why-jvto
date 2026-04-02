import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, MapPin, UserCheck, Star, ChevronRight, ExternalLink } from 'lucide-react';
import { SSOT } from '../../lib/ssot';

export const TeamSection = () => {
  return (
    <section id="team-section" className="py-20 bg-audit-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge-eyebrow badge-eyebrow-navy mb-4"
            >
              <Shield className="w-3 h-3" />
              <span>Operational Excellence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-authority-navy leading-tight"
            >
              The Crew Behind <br />
              <span className="text-safety-orange">Your Expedition</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-md font-medium border-l-2 border-safety-orange/30 pl-6"
          >
            Led by an active Tourist Police officer, our team combines tactical safety protocols with deep local knowledge of East Java's volcanic landscapes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SSOT.crew.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card group flex flex-col h-full"
            >
              {/* Profile Image & Archetype */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.profile.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/90 via-authority-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4">
                  <div className="badge-eyebrow badge-eyebrow-white backdrop-blur-md bg-white/10">
                    <UserCheck className="w-3 h-3" />
                    <span>{member.profile.archetype}</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="status-live" />
                    <span className="text-[10px] font-mono font-bold text-verified-bright uppercase tracking-widest">Active Duty</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-1">{member.name}</h3>
                  <p className="text-white/70 font-mono text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                    {member.role} • {member.tags[0]} Specialist
                  </p>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-8 flex-grow flex flex-col relative">
                {/* Scanline effect on hover */}
                <div className="absolute inset-0 bg-safety-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-safety-orange fill-safety-orange" />
                      <span className="font-mono text-[10px] font-black uppercase tracking-tighter text-slate-400">Expertise Matrix</span>
                    </div>
                    <span className="font-mono text-[9px] text-slate-300">ID: {member.id.toUpperCase()}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.profile.expertise.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-[10px] font-bold text-authority-navy uppercase transition-colors group-hover:bg-safety-orange/10 group-hover:border-safety-orange/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6 p-4 bg-audit-white rounded-md border border-slate-200/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Shield className="w-12 h-12 text-authority-navy" />
                  </div>
                  <p className="text-sm italic text-slate-600 leading-relaxed relative z-10">
                    <span className="text-4xl text-safety-orange/20 absolute -top-4 -left-2 font-serif">"</span>
                    {member.quote}
                  </p>
                </div>

                {/* Credentials & Metrics */}
                <div className="mt-auto pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                  <div className="group/cred">
                    <span className="block font-mono text-[9px] text-slate-400 uppercase mb-1">Credential</span>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3 h-3 text-verified-lime" />
                      <span className="text-[10px] font-black text-authority-navy truncate uppercase">
                        {member.profile.credential.name || "Police Verified"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-slate-400 uppercase mb-1">Safety Record</span>
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3 h-3 text-safety-orange" />
                      <span className="text-[10px] font-black text-authority-navy uppercase">
                        {member.profile.safetyMetrics[0].value}% Incident-Free
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-1 bg-gradient-to-r from-safety-orange via-authority-navy to-verified-lime rounded-md"
        >
          <div className="bg-white rounded-md p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-safety-orange/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div className="w-full lg:w-1/3 relative">
              <div className="aspect-square rounded-md overflow-hidden border-4 border-audit-white shadow-hover">
                <img
                  src={SSOT.organization.founder.sameAs[0] === "https://polri.go.id/" ? "https://upload.wikimedia.org/wikipedia/commons/b/bf/Agung_Sambuko.jpg" : "https://upload.wikimedia.org/wikipedia/commons/b/bf/Agung_Sambuko.jpg"}
                  alt={SSOT.organization.founder.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-authority-navy text-white p-4 rounded-md shadow-hover border border-white/10">
                <Shield className="w-6 h-6 text-safety-orange mb-1" />
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest">Active Duty</p>
              </div>
            </div>

            <div className="w-full lg:w-2/3">
              <div className="badge-eyebrow badge-eyebrow-orange mb-6">
                <Award className="w-3 h-3" />
                <span>Founder & Strategic Lead</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-authority-navy mb-4">
                {SSOT.organization.founder.name}
              </h3>
              <p className="text-xl font-bold text-safety-orange mb-6">
                {SSOT.organization.founder.role}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl">
                "As an active Tourist Police officer, my mission is to elevate the safety standards of East Java's tourism. Every JVTO itinerary is a tactical operation designed for maximum safety, local impact, and unforgettable experiences."
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-slate-400 uppercase mb-1">Unit</span>
                  <span className="font-bold text-authority-navy text-sm">{SSOT.organization.founder.unit}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-slate-400 uppercase mb-1">Experience</span>
                  <span className="font-bold text-authority-navy text-sm">10+ Years</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-slate-400 uppercase mb-1">Verification</span>
                  <div className="flex items-center gap-1 text-verified-lime">
                    <UserCheck className="w-4 h-4" />
                    <span className="font-bold text-sm">Polri Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
