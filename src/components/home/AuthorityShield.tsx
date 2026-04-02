import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle2, ExternalLink, Newspaper, Quote } from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { motion, AnimatePresence } from 'motion/react';

export const AuthorityShield = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  
  if (!SSOT.press || SSOT.press.length === 0) return null;
  const activeArticle = SSOT.press[activeIndex];

  return (
    <section className="section-spacing">
      <div className="container-authority">
        <div className="bg-authority-navy rounded-md p-8 md:p-16 lg:p-20 text-white relative overflow-hidden shadow-hover">
          <div className="relative z-10">
            {/* Header Narrative */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24 max-w-4xl"
            >
              <div className="badge-eyebrow badge-eyebrow-white mb-8">
                <Newspaper className="w-3 h-3" /> Police Leadership & Media Verification
              </div>
              <h2 className="heading-section text-white mb-6">
                Duty First, <br className="hidden md:block" />
                <span className="text-safety-orange">Business Second.</span>
              </h2>
              <p className="text-white/70 text-lg md:text-2xl leading-relaxed font-light max-w-3xl">
                Our dedication to safety is not just a company SOP. Our founder, {SSOT.organization.founder.name}, is an active Tourist Police officer covered by national media for guarding visitor safety directly in the extreme conditions of Ijen Crater.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left: Founder Photo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <img 
                  src={SSOT.assets.find(a => a.slug === 'mr-sam-tourist-police-portrait')?.url || 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Agung_Sambuko.jpg'} 
                  alt={SSOT.assets.find(a => a.slug === 'mr-sam-tourist-police-portrait')?.alt || 'Officer Agung Sambuko in Official Tourist Police Uniform'} 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-2 w-2 rounded-full bg-safety-orange animate-pulse"></span>
                    <p className="font-mono text-[11px] text-safety-orange uppercase tracking-[0.2em] font-bold">Active Duty: {SSOT.organization.founder.unit}</p>
                  </div>
                  <p className="text-white font-black text-3xl uppercase leading-none tracking-tighter">{SSOT.organization.founder.name}</p>
                  <p className="text-white/70 font-mono text-[11px] uppercase tracking-widest mt-2">{SSOT.organization.founder.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Media Proof & Interactive Viewer */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col gap-12"
            >
              {/* Media Selection List */}
              <div className="flex flex-wrap gap-6 border-b border-white/10 pb-6">
                {SSOT.press.map((article, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`transition-all flex items-center gap-2 pb-2 border-b-2 ${
                      activeIndex === idx 
                        ? 'border-safety-orange text-white' 
                        : 'border-transparent text-white/40 hover:text-white/80'
                    }`}
                  >
                    <span className="font-bold uppercase tracking-widest text-sm">
                      {article.publisher}
                    </span>
                  </button>
                ))}
              </div>

              {/* Media Screenshot Viewer */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-8"
                >
                  {/* Quote Box */}
                  <div>
                    <p className="text-white/90 italic text-2xl md:text-3xl leading-relaxed mb-6 font-light">
                      "{activeArticle.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-px w-8 bg-safety-orange"></div>
                      <span className="text-xs font-mono font-bold text-safety-orange uppercase tracking-widest">{activeArticle.author}</span>
                      <span className="text-xs font-mono text-white/30 uppercase tracking-widest ml-2">{new Date(activeArticle.date).getFullYear()}</span>
                    </div>
                  </div>

                  {/* Main Image (Clickable) */}
                  <a 
                    href={activeArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-md overflow-hidden group cursor-pointer"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                      <img 
                        src={activeArticle.screenshot} 
                        alt={`${activeArticle.publisher} Article Screenshot`} 
                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-authority-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                        <div className="bg-safety-orange text-white px-8 py-4 rounded-full font-black uppercase tracking-wider text-sm flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          Read Original Article <ExternalLink className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
