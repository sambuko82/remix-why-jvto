'use client';

import React, { useState } from 'react';
import {
  MapPin,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Clock,
  Navigation,
  ShieldCheck,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Link from 'next/link';
import { PageSEO } from '../../components/PageSEO';
import { motion, AnimatePresence } from 'motion/react';
import type { DestinationDetailData } from '../../lib/destinations-data';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

type DestinationDetailProps = {
  destination: DestinationDetailData;
};

export default function DestinationDetail({ destination }: DestinationDetailProps) {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onBack = () => navigate('/destinations');
  const route = `/destinations/${destination.slug}`;
  const data = {
    title: destination.name,
    image: destination.image,
    images: destination.images?.length ? destination.images : [destination.image],
    imageContext: destination.imageContext || '',
    category: destination.category,
    duration: destination.duration,
    description: destination.description,
    highlights: destination.keyHighlights?.length ? destination.keyHighlights : [destination.highlight],
    safety: destination.safetySummary,
  };

  const nextImage = () => {
    if (data.images) {
      setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
    }
  };

  const prevImage = () => {
    if (data.images) {
      setCurrentImageIndex((prev) => (prev - 1 + data.images.length) % data.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <div className="border-b border-slate-100 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Destinations
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <MapPin className="w-4 h-4" /> {data.title}
          </div>
        </div>
      </div>

      <div className="relative h-[70vh] overflow-hidden group">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentImageIndex}
            src={data.images[currentImageIndex]}
            alt={`${data.title} - Image ${currentImageIndex + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
            referrerPolicy="no-referrer"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                nextImage();
              } else if (swipe > swipeConfidenceThreshold) {
                prevImage();
              }
            }}
          />
        </AnimatePresence>

        {data.images && data.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {data.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </>
        )}

        {data.imageContext && (
          <div className="absolute top-8 left-8 bg-safety-orange text-white text-[10px] px-3 py-1.5 rounded-md font-mono font-bold uppercase tracking-widest z-10 shadow-lg">
            {data.imageContext}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-24 left-0 right-0 z-20 pointer-events-none">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-2 bg-safety-orange text-white text-[11px] font-mono font-black uppercase tracking-widest rounded-full">
                  {data.category}
                </span>
                <span className="px-4 py-2 bg-white/80 backdrop-blur-md text-authority-navy text-[11px] font-mono font-black uppercase tracking-widest rounded-full border border-slate-200">
                  <Clock className="w-3 h-3 inline mr-2" /> {data.duration}
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-authority-navy uppercase tracking-tighter leading-[0.85] mb-8">
                {data.title + '.'}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl relative z-10">
        <PageSEO route={route} />

        <div className="grid lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Overview</h2>
              <p className="text-2xl text-slate-500 leading-tight font-light">
                {data.description}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Route Planning Notes</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-6 bento-card bg-audit-white rounded-3xl border border-slate-100">
                  <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-3">Terrain</span>
                  <p className="text-base font-medium text-slate-600 leading-relaxed">{destination.terrain}</p>
                </div>
                <div className="p-6 bento-card bg-audit-white rounded-3xl border border-slate-100">
                  <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-3">Best Window</span>
                  <p className="text-base font-medium text-slate-600 leading-relaxed">{destination.bestTime}</p>
                </div>
                <div className="p-6 bento-card bg-audit-white rounded-3xl border border-slate-100">
                  <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-3">Physical Fit</span>
                  <p className="text-base font-medium text-slate-600 leading-relaxed">{destination.physicalRequirements}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.highlights.map((highlight: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-6 bento-card bg-audit-white rounded-3xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-safety-orange shrink-0" />
                    <span className="text-lg font-bold uppercase tracking-tight">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-12 bg-safety-orange/5 rounded-[3rem] border border-safety-orange/20">
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="w-10 h-10 text-safety-orange" />
                <h2 className="text-3xl font-black uppercase tracking-tighter">Safety & Coordination</h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {data.safety}
              </p>
              <div className="flex items-center gap-4 p-6 bento-card bg-audit-white rounded-2xl border border-safety-orange/10">
                <Info className="w-6 h-6 text-safety-orange" />
                <span className="text-sm font-mono uppercase tracking-widest text-slate-500">Route handling follows live field and closure updates</span>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="p-12 bg-authority-navy text-white rounded-[3rem] sticky top-32">
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Use This Destination In Your Route</h3>
              <p className="text-white/60 mb-12 leading-relaxed">
                This page explains the destination. The actual booking path stays inside the matching JVTO route and its handling notes.
              </p>
              {destination.relatedTours.length > 0 ? (
                <div className="space-y-4 mb-6">
                  {destination.relatedTours.map((tour) => (
                    <Link
                      key={tour.id}
                      href={tour.href}
                      className="block rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-colors hover:bg-white/10"
                    >
                      <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-2">
                        Matching Route
                      </span>
                      <span className="block text-lg font-black uppercase tracking-tight mb-2">{tour.name}</span>
                      <span className="block text-sm text-white/60">{tour.duration} · {tour.price}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href="/tours"
                  className="block w-full py-6 bg-safety-orange text-center text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-safety-orange transition-all mb-6"
                >
                  Browse Matching Routes
                </Link>
              )}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/travel-guide/weather-and-closures"
                  className="py-5 bg-white/10 text-center text-white font-black uppercase tracking-[0.18em] rounded-2xl hover:bg-white/20 transition-all"
                >
                  Weather
                </Link>
                <Link
                  href="/travel-guide/packing-and-fitness"
                  className="py-5 bg-white/10 text-center text-white font-black uppercase tracking-[0.18em] rounded-2xl hover:bg-white/20 transition-all"
                >
                  Fitness
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col items-center">
          <div className="p-12 bento-card bg-audit-white border-4 border-safety-orange rounded-[2.5rem] -rotate-2 shadow-2xl relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <Navigation className="w-20 h-20 text-safety-orange mb-8" />
              <span className="text-5xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-3">ROUTE_CONTEXT_READY</span>
              <span className="font-mono text-[11px] text-slate-500 tracking-[0.4em] uppercase">Destination Brief For JVTO Route Planning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
