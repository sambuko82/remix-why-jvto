'use client';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Search, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { SSOT } from '../../lib/ssot';
import type { HomeHeroData } from '../../lib/homepage-data';

type HeroSectionProps = {
  data?: HomeHeroData;
};

export const HeroSection = ({ data }: HeroSectionProps) => {
  const navigate = useNavigate();
  const heroImage = data?.founderImage || SSOT.assets.find(a => a.slug === 'jvto-hero-image')?.url || 'https://javavolcano-touroperator.com/assets/img/hero/home.webp';
  const heroAlt = data?.founderAlt || SSOT.assets.find(a => a.slug === 'jvto-hero-image')?.alt || 'Scenic view of Java volcanoes.';
  const heroEyebrow = data?.eyebrow || 'Verified Police-Led Operator';
  const heroTitle = data?.title || 'Private Volcano Tours';
  const heroDescription =
    data?.description ||
    'Private Bromo, Ijen, and East Java route planning with visible operator proof, doctor-backed Ijen screening, and route clarity before payment.';
  const supportItems = ['Tourist Police-led context', 'Doctor-backed Ijen screening', 'Verify before payment'];

  return (
    <section className="relative bg-authority-navy text-white min-h-[90vh] flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage} 
          alt={heroAlt} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="pro-overlay" />
        
        {/* Scanline Effect - Halo Enhancement */}
        <div className="scanline opacity-10"></div>
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 w-full">
        <div className="max-w-5xl text-center flex flex-col items-center mt-20 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge-eyebrow bg-safety-orange text-white mb-8 shadow-card shadow-safety-orange/20"
          >
            <ShieldCheck className="w-3 h-3 text-white" /> {heroEyebrow}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center gap-2 md:gap-4 mb-12 w-full"
          >
            <div className="block text-sm sm:text-xl md:text-2xl lg:text-3xl text-safety-orange font-black tracking-[0.3em] uppercase drop-shadow-lg">
              Tourist Police-Led, Private-Only
            </div>
            <h1 className="heading-display block text-white text-center drop-shadow-[0_12px_12px_rgba(0,0,0,0.8)]">
              {heroTitle}
            </h1>
            <span className="block text-lg sm:text-2xl md:text-4xl lg:text-5xl font-light italic text-white/90 drop-shadow-md mt-2">
              East Java, Indonesia
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl text-base md:text-lg leading-8 text-white/80 mb-10"
          >
            {heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-10 flex flex-wrap items-center justify-center gap-3 text-white/70"
          >
            {supportItems.map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 ? <span className="text-safety-orange/80">•</span> : null}
                <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold">
                  {item}
                </span>
              </React.Fragment>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <button 
              onClick={() => navigate('/tours')}
              className="w-full sm:w-auto bg-safety-orange hover:bg-orange-600 text-white px-12 py-5 rounded-md font-black uppercase tracking-[0.15em] transition-all shadow-hover shadow-safety-orange/40 flex items-center justify-center gap-4 group text-sm md:text-lg"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" /> 
              Browse Private Tours
            </button>
            <button 
              onClick={() => navigate('/verify-jvto')}
              className="w-full sm:w-auto bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 text-white px-12 py-5 rounded-md font-black uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-4 text-sm md:text-lg"
            >
              <Lock className="w-5 h-5 md:w-6 md:h-6 text-safety-orange" /> 
              Verify Credentials
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

