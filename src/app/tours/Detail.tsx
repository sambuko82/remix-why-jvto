import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { motion } from 'motion/react';
import { 
  MapPin, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Map, 
  CalendarDays, 
  Activity, 
  Compass, 
  ShieldAlert, 
  ShieldCheck,
  Fingerprint,
  FileText,
  Lock
} from 'lucide-react';

export default function TourDetail() {
  const { departure, slug } = useParams();
  const navigate = useNavigate();
  const route = `/tours/${departure}/${slug}`;
  const tour = SSOT.tours.find(t => t.route === route) as any;

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-audit-white text-authority-navy">
        <div className="text-center">
          <h1 className="text-4xl font-black uppercase mb-4">Tour Not Found</h1>
          <button onClick={() => navigate('/tours')} className="text-safety-orange underline uppercase font-mono text-sm">Return to Tours</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <PageSEO route={route} />
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/tours')}
            className="group flex items-center gap-3 text-[10px] md:text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" /> <span className="hidden xs:inline">Back to </span>Tours
          </button>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-verified-bright/10 border border-verified-bright/20 rounded-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-verified-bright animate-pulse"></div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-authority-navy font-bold">System Active</span>
            </div>
            <button onClick={() => navigate('/verify-jvto')} className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 hover:text-authority-navy transition-colors">Verify</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-24 flex flex-col lg:flex-row gap-12 lg:gap-24"
        >
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <Fingerprint className="w-3.5 h-3.5 md:w-4 md:h-4 text-safety-orange" />
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-slate-500">Operational Dossier: {tour.name.split(' ')[0]}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-authority-navy mb-4 md:mb-8 leading-[0.85] uppercase tracking-tighter">
              {tour.name}
            </h1>
            
            <div className="flex items-center gap-6 mb-8">
              <p className="text-slate-500 font-mono text-lg uppercase tracking-widest">
                {tour.price}
              </p>
              <div className="h-6 w-px bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-verified-bright" />
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-slate-400">All-Inclusive</span>
              </div>
            </div>
            
            {/* Technical Dossier Grid */}
            {tour.technical_dossier && (
              <div className="grid grid-cols-2 gap-4 mb-12 p-6 bg-authority-navy text-white rounded-md border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-safety-orange/50 to-transparent animate-marquee"></div>
                <div className="scanline opacity-10"></div>
                
                <div className="space-y-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">Coordinates</p>
                  <p className="font-mono text-xs font-bold flex items-center gap-2">
                    <Compass className="w-3 h-3 text-safety-orange" />
                    {tour.technical_dossier.coordinates}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">Max Elevation</p>
                  <p className="font-mono text-xs font-bold flex items-center gap-2">
                    <Activity className="w-3 h-3 text-verified-bright" />
                    {tour.technical_dossier.elevation}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">Difficulty</p>
                  <p className="font-mono text-xs font-bold text-safety-orange">{tour.technical_dossier.difficulty}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">Risk Level</p>
                  <p className="font-mono text-xs font-bold text-red-400">{tour.technical_dossier.risk_level}</p>
                </div>
              </div>
            )}

            {/* Overview Highlights */}
            {tour.overview && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Map className="w-5 h-5 text-safety-orange" />
                  <h3 className="font-mono text-sm uppercase tracking-widest font-bold">Route & Highlights</h3>
                </div>
                <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4 border-l-2 border-safety-orange pl-4 py-1">
                  {tour.overview.route_meta}
                </p>
                <ul className="space-y-3">
                  {tour.overview.highlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-verified-bright shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button 
              onClick={() => navigate('/travel-guide/booking-information')}
              className="w-full bg-safety-orange text-white py-5 rounded-md font-black uppercase tracking-wider text-sm hover:bg-safety-orange/90 transition-all shadow-hover shadow-safety-orange/20 mb-8 flex items-center justify-center gap-3"
            >
              <Lock className="w-4 h-4" />
              Request Booking Clearance
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="aspect-[4/3] rounded-md overflow-hidden shadow-hover relative border-8 border-white">
              <div className="scanline"></div>
              <img 
                src={tour.image}
                alt={tour.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/60 via-transparent to-transparent"></div>
              
              {tour.crewName && (
                <div className="absolute bottom-6 left-6 bg-authority-navy/90 backdrop-blur text-white text-xs px-4 py-2 rounded-md font-mono uppercase tracking-widest shadow-hover border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3 text-verified-bright" />
                  {tour.crewName}
                </div>
              )}

              {/* Forensic Stamp overlay */}
              <div className="absolute top-6 right-6 rotate-12 opacity-80 pointer-events-none">
                <div className="border-4 border-verified-bright text-verified-bright px-4 py-2 font-black uppercase tracking-tighter text-xl rounded-md bg-verified-bright/10 backdrop-blur-sm">
                  Verified JVTO
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Itinerary */}
          <div className="lg:col-span-2">
            {tour.itinerary && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-8">
                  <CalendarDays className="w-6 h-6 text-safety-orange" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Itinerary Protocol</h2>
                </div>
                <div className="space-y-8">
                  {tour.itinerary.map((day: any, idx: number) => (
                    <div key={idx} className="relative pl-8 md:pl-12 border-l border-slate-200">
                      <div className="absolute left-[-17px] top-0 bg-audit-white border-2 border-safety-orange text-safety-orange w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold">
                        {day.day}
                      </div>
                      <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{day.title}</h3>
                      <ul className="space-y-3">
                        {day.activities.map((act: string, aIdx: number) => (
                          <li key={aIdx} className="text-slate-600 flex items-start gap-3 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-2"></span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar: Inclusions, Exclusions, Requirements */}
          <div className="space-y-12">
            {tour.includes && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-md border border-slate-200 shadow-card"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-verified-bright" /> Inclusions
                </h3>
                <ul className="space-y-3">
                  {tour.includes.map((item: string, idx: number) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 font-mono uppercase tracking-tight">
                      <span className="text-verified-bright mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {tour.excludes && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-md border border-slate-200 shadow-card"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" /> Exclusions
                </h3>
                <ul className="space-y-3">
                  {tour.excludes.map((item: string, idx: number) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 font-mono uppercase tracking-tight">
                      <span className="text-red-500 mt-0.5">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {tour.requirements && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-authority-navy text-white p-8 rounded-md border border-white/10 shadow-hover"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest font-bold mb-6 flex items-center gap-2 text-safety-orange">
                  <ShieldAlert className="w-4 h-4" /> Requirements
                </h3>
                <ul className="space-y-3">
                  {tour.requirements.map((item: string, idx: number) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 font-mono uppercase tracking-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-safety-orange shrink-0 mt-1.5"></span> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-verified-bright" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Official Health Protocol Applied</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

