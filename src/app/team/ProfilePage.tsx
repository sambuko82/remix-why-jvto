import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Camera, 
  Star, 
  Award, 
  CheckCircle2, 
  Quote, 
  MapPin, 
  Code,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  Lock,
  Fingerprint,
  Search,
  Database,
  UserCheck,
  ShieldAlert,
  Activity,
  FileDigit,
  Filter,
  SlidersHorizontal,
  ChevronLeft,
  Compass,
  MessageSquare
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { ForensicAnnotation } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { HashBadge } from '../../components/ForensicUI';
import { AuditStamp } from '../../components/AuditStamp';
import { SafetyMetrics } from '../../components/SafetyMetrics';
import { AssetViewer } from '../../components/AssetViewer';

export default function CrewProfile() {
  const { crewId } = useParams<{ crewId: string }>();
  const navigate = useNavigate();
  const [showSchema, setShowSchema] = useState(false);
  const [platformFilter, setPlatformFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest'); // Newest, Highest, Lowest
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState<{ url: string, title: string, annotations?: ForensicAnnotation[] } | null>(null);

  // Find crew data from SSOT
  const crewMember = SSOT.crew.find(c => c.id === crewId);
  
  // If not found or missing profile data, show error or fallback
  if (!crewMember || !crewMember.profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-audit-white">
        <PageSEO 
          metaOverride={{
            title_tag: 'Personnel Not Found | Java Volcano Tour Operator',
            meta_description: 'The requested personnel profile could not be found in our registry.',
            robots: 'noindex, nofollow'
          }}
        />
        <div className="text-center bento-card p-16 bg-white shadow-2xl border-slate-200">
          <ShieldAlert className="w-20 h-20 text-safety-orange mx-auto mb-8" />
          <h2 className="text-4xl font-black text-authority-navy uppercase mb-6 tracking-tighter">Personnel Not Found</h2>
          <button 
            onClick={() => navigate('/')} 
            className="group inline-flex items-center gap-3 bg-authority-navy text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-safety-orange transition-all shadow-xl shadow-authority-navy/20"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Return to Registry
          </button>
        </div>
      </div>
    );
  }

  const profileData = {
    id: crewMember.id,
    name: crewMember.name,
    role: crewMember.role,
    archetype: crewMember.profile.archetype,
    image: crewMember.profile.image,
    quote: crewMember.profile.fullQuote,
    expertise: crewMember.profile.expertise,
    credential: crewMember.profile.credential,
    reviews: [] // will be populated below
  };

  const dynamicMeta = {
    title_tag: `${profileData.name} | ${profileData.role} Profile | Java Volcano Tour Operator`,
    meta_description: `Meet ${profileData.name}, a ${profileData.role} at JVTO. Archetype: ${profileData.archetype}. Expertise: ${profileData.expertise.join(', ')}. Verified credentials and guest reviews.`,
    canonical: `https://javavolcano-touroperator.com/team/${profileData.id}`,
    robots: 'index, follow'
  };

  // Get reviews from SSOT
  const rawReviews = SSOT.crew_reviews[crewMember.name] || [];

  // Apply filtering and sorting
  const filteredAndSortedReviews = [...rawReviews]
    .filter(review => platformFilter === 'All' || review.platform === platformFilter)
    .sort((a, b) => {
      if (sortBy === 'Highest') return b.rating - a.rating;
      if (sortBy === 'Lowest') return a.rating - b.rating;
      // For 'Newest', we don't have full dates, but we can assume order in SSOT is chronological or just keep as is
      return 0; 
    });

  const platforms = ['All', ...new Set(rawReviews.map(r => r.platform))] as string[];

  // Reset carousel when filters change
  React.useEffect(() => {
    setCurrentReviewIndex(0);
  }, [platformFilter, sortBy]);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % filteredAndSortedReviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + filteredAndSortedReviews.length) % filteredAndSortedReviews.length);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'TripAdvisor': return <img src="https://www.tripadvisor.com/favicon.ico" alt="TripAdvisor" className="w-4 h-4" referrerPolicy="no-referrer" />;
      case 'Google Reviews': return <img src="https://www.google.com/favicon.ico" alt="Google Reviews" className="w-4 h-4" referrerPolicy="no-referrer" />;
      case 'Trustpilot': return <img src="https://www.trustpilot.com/favicon.ico" alt="Trustpilot" className="w-4 h-4" referrerPolicy="no-referrer" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'TripAdvisor': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'Google Reviews': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Trustpilot': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  profileData.reviews = filteredAndSortedReviews;

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "@id": `https://javavolcano-touroperator.com/#${profileData.id}`,
      "name": profileData.name,
      "jobTitle": profileData.role,
      "worksFor": {
        "@id": "https://javavolcano-touroperator.com/#organization"
      },
      "knowsAbout": profileData.expertise,
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": profileData.credential.name,
        "recognizedBy": {
          "@type": "Organization",
          "name": profileData.credential.issuer
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-audit-white font-sans text-authority-navy selection:bg-safety-orange/30 pb-24 md:pb-0">
      <PageSEO metaOverride={dynamicMeta} />
      {/* Invisible JSON-LD Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }} />

      {/* Header / Nav */}
      <nav className="bg-authority-navy border-b border-white/5 relative z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-white transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Registry
          </button>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-verified-bright text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
              <UserCheck className="w-4 h-4" /> Personnel Profile v1.9
            </div>
            <button 
              onClick={() => setShowSchema(!showSchema)}
              className="font-mono text-[11px] bg-white/5 hover:bg-white/10 text-verified-bright px-4 py-1.5 rounded-lg border border-white/10 transition-all flex items-center gap-2 uppercase tracking-widest"
            >
              <Code className="h-3 w-3" /> {showSchema ? 'Close Graph' : 'Inspect Graph'}
            </button>
          </div>
        </div>
      </nav>

      {/* Schema Debugger */}
      {showSchema && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="bg-black/40 border-b border-white/5 overflow-x-auto"
        >
          <div className="max-w-7xl mx-auto px-6 py-10">
            <pre className="text-[11px] text-verified-bright font-mono leading-relaxed">{JSON.stringify(jsonLdGraph, null, 2)}</pre>
          </div>
        </motion.div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-24 relative z-10">
        
        {/* Header Profile Section (ID Card Aesthetic) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bento-card bg-white p-0 shadow-2xl border-slate-200 relative overflow-hidden"
        >
          <div className="scanline"></div>
          <div className="grid lg:grid-cols-5">
            
            {/* Left: High-Contrast Portrait */}
            <div className="lg:col-span-2 relative group overflow-hidden bg-slate-900">
              <img 
                src={profileData.image} 
                alt={profileData.name} 
                className="w-full h-full object-cover grayscale contrast-150 brightness-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              
              {/* ID Card Overlay Elements */}
              <div className="absolute top-8 left-8 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <Fingerprint className="w-10 h-10 text-white opacity-50" />
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="status-live"></div>
                  <span className="font-mono text-[11px] text-safety-orange uppercase tracking-widest font-black">Active_Duty_Status</span>
                </div>
                <div className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-2">Personnel ID</div>
                <div className="font-mono text-xl font-black text-white tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                  {profileData.id.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Right: Personnel Data */}
            <div className="lg:col-span-3 p-16 lg:p-24 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-20 opacity-[0.01] pointer-events-none">
                <UserCheck className="w-[600px] h-[600px]" />
              </div>

              <div className="relative z-10">
                <div className="badge-eyebrow badge-eyebrow-orange mb-10">
                  <Award className="h-4 w-4" /> {profileData.archetype}
                </div>
                <h1 className="text-6xl md:text-9xl font-black text-authority-navy mb-4 leading-[0.85] uppercase tracking-tighter">
                  {profileData.name}
                </h1>
                <p className="text-3xl text-slate-500 font-light uppercase tracking-widest mb-12">{profileData.role}</p>

                <div className="flex flex-wrap gap-3 mb-16">
                  {profileData.expertise.map(skill => (
                    <div key={skill} className="tech-badge bg-slate-50 text-authority-navy border-slate-200 flex items-center gap-2 px-5 py-2.5 text-xs">
                      <CheckCircle2 className="h-4 w-4 text-verified-bright" /> {skill}
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 text-white p-12 rounded-[3rem] relative overflow-hidden group">
                  <div className="scanline"></div>
                  <Quote className="absolute top-8 right-8 h-24 w-24 text-white/5 rotate-180" />
                  <p className="relative z-10 leading-tight text-3xl font-light italic">"{profileData.quote}"</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Safety Performance Audit Section */}
        {crewMember.profile.safetyMetrics && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card bg-white p-16 shadow-2xl border-slate-200"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-slate-50 rounded-[1.5rem] text-safety-orange border border-slate-100">
                  <Activity className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-authority-navy uppercase leading-none mb-2 tracking-tighter">Safety Performance Audit</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">QUANTIFIED_TRUST_METRICS</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                <div className="text-right">
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-1">Aggregate Safety Score</p>
                  <p className="text-2xl font-black text-authority-navy leading-none">
                    {Math.round(crewMember.profile.safetyMetrics.reduce((acc, m) => acc + m.value, 0) / crewMember.profile.safetyMetrics.length)}%
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-safety-orange/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-safety-orange" />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <SafetyMetrics metrics={crewMember.profile.safetyMetrics} />
              </div>
              <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100 flex flex-col justify-center">
                <h3 className="text-sm font-black text-authority-navy uppercase mb-4 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-safety-orange" /> Forensic Insight
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  "These metrics are derived from a combination of field observation logs, guest feedback triangulation, and periodic technical assessments. The upward trend in historical data reflects our commitment to continuous safety training and operational refinement."
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* Forensic Evidence & Credentials */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Official License */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card bg-authority-navy text-white p-16 shadow-2xl border-white/5 flex flex-col relative overflow-hidden"
          >
            <div className="scanline"></div>
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/5 rounded-[1.5rem] text-safety-orange border border-white/10">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-4xl font-black uppercase leading-none mb-2 tracking-tighter">Operational Credential</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">HPWKI_LICENSED_OPERATIVE</p>
                </div>
              </div>
              <div className="verified-badge bg-verified-bright text-authority-navy px-6 py-3 text-sm">ACTIVE</div>
            </div>
            
            <p className="text-slate-500 text-2xl leading-tight font-light mb-16">
              To operate legally within the Ijen crater, guides must hold active certification from HPWKI. {profileData.name}'s credentials are cryptographically tied to our entity graph.
            </p>

            <div className="bg-white/5 rounded-[3rem] p-10 border border-white/10 mt-auto group">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-3">Issuer Authority</p>
                  <p className="text-2xl font-black text-white uppercase tracking-tight">{profileData.credential.issuer}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-3">Audit Status</p>
                  <div className="flex items-center gap-3 text-verified-bright font-black text-sm uppercase tracking-widest">
                    <div className="w-2.5 h-2.5 bg-verified-bright rounded-full animate-pulse"></div>
                    {profileData.credential.status}
                  </div>
                </div>
              </div>
              <div 
                onClick={() => setSelectedAsset({ 
                  url: profileData.credential.cardImage, 
                  title: `${profileData.name} - ${profileData.credential.name}`,
                  annotations: (profileData.credential as any).annotations
                })}
                className="relative bg-black/40 rounded-[2rem] p-6 border border-white/5 flex justify-center items-center h-80 overflow-hidden cursor-pointer group"
              >
                <img 
                  src={profileData.credential.cardImage} 
                  alt="License KTA" 
                  className="h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 rounded-2xl grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                   <div className="bg-authority-navy/80 backdrop-blur-md text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest border border-white/10">
                     Click to Inspect KTA
                   </div>
                </div>
              </div>
              <div className="mt-10">
                <HashBadge hash={profileData.id.toUpperCase() + "...9A2B"} />
              </div>
            </div>
          </motion.section>

          {/* Right Column: Triangulated Reviews */}
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card bg-white p-16 shadow-2xl border-slate-200"
          >
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-slate-50 rounded-[1.5rem] text-safety-orange border border-slate-100">
                  <Star className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-authority-navy uppercase leading-none mb-2 tracking-tighter">Guest Verification</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">TRIANGULATED_PROOF</p>
                </div>
              </div>
              <div className="flex -space-x-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-safety-orange fill-safety-orange" />
                ))}
              </div>
            </div>

            <p className="text-slate-500 text-2xl leading-tight font-light mb-16">
              Algorithmic proof extracted directly from third-party review platforms confirming {profileData.name}'s specific competencies.
            </p>

            {/* Review Controls */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12 pb-12 border-b border-slate-100">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-3 h-3 text-slate-500" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Filter by Platform</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {platforms.map(platform => (
                    <button
                      key={platform}
                      onClick={() => setPlatformFilter(platform)}
                      className={`px-4 py-2 rounded-xl font-mono text-[11px] uppercase tracking-widest transition-all border ${
                        platformFilter === platform 
                          ? 'bg-authority-navy text-white border-authority-navy shadow-lg' 
                          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
              <div className="sm:w-48">
                <div className="flex items-center gap-2 mb-3">
                  <SlidersHorizontal className="w-3 h-3 text-slate-500" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Sort by Rating</span>
                </div>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 font-mono text-[11px] uppercase tracking-widest focus:border-safety-orange outline-none"
                >
                  <option value="Newest">Newest First</option>
                  <option value="Highest">Highest Rated</option>
                  <option value="Lowest">Lowest Rated</option>
                </select>
              </div>
            </div>

            <div className="space-y-8">
              {profileData.reviews.length > 0 ? (
                <div className="relative group/carousel">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentReviewIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 hover:border-safety-orange/30 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center gap-5">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center font-black text-authority-navy border border-slate-200 shadow-sm text-2xl">
                            {profileData.reviews[currentReviewIndex].author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-black text-authority-navy uppercase leading-none mb-2 text-2xl tracking-tight">{profileData.reviews[currentReviewIndex].author}</p>
                            <div className="flex items-center gap-3">
                              <div className={`font-mono text-[11px] uppercase tracking-widest flex items-center justify-center w-8 h-8 rounded-md border ${getPlatformColor(profileData.reviews[currentReviewIndex].platform)}`} title={profileData.reviews[currentReviewIndex].platform}>
                                {getPlatformIcon(profileData.reviews[currentReviewIndex].platform)}
                              </div>
                              <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`h-4 w-4 ${i < profileData.reviews[currentReviewIndex].rating ? 'text-safety-orange fill-safety-orange' : 'text-slate-200'}`} />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="verified-badge bg-white text-authority-navy border-slate-200 px-4 py-2 hidden sm:block">VERIFIED_REVIEW</div>
                      </div>
                      <p className="text-2xl md:text-3xl text-slate-600 italic font-light leading-tight">"{profileData.reviews[currentReviewIndex].text}"</p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Side Navigation Arrows */}
                  {profileData.reviews.length > 1 && (
                    <>
                      <button 
                        onClick={prevReview}
                        className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-xl border border-slate-100 text-authority-navy hover:bg-safety-orange hover:text-white hover:border-safety-orange transition-all z-20 opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0 hidden sm:flex items-center justify-center"
                        aria-label="Previous review"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={nextReview}
                        className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-xl border border-slate-100 text-authority-navy hover:bg-safety-orange hover:text-white hover:border-safety-orange transition-all z-20 opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0 hidden sm:flex items-center justify-center"
                        aria-label="Next review"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Enhanced Indicators */}
                  {profileData.reviews.length > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-12">
                      {profileData.reviews.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentReviewIndex(idx)}
                          className={`h-2.5 rounded-full transition-all duration-500 ${
                            idx === currentReviewIndex 
                              ? 'w-12 bg-safety-orange shadow-lg shadow-safety-orange/40' 
                              : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                          }`}
                          aria-label={`Go to review ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Mobile Controls */}
                  {profileData.reviews.length > 1 && (
                    <div className="flex sm:hidden items-center justify-center gap-6 mt-8">
                      <button 
                        onClick={prevReview}
                        className="p-4 rounded-full bg-white shadow-lg border border-slate-100 text-authority-navy"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={nextReview}
                        className="p-4 rounded-full bg-white shadow-lg border border-slate-100 text-authority-navy"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-24 text-slate-500 bento-card border-dashed border-2">
                  <div className="status-live mb-4 mx-auto"></div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">No specific reviews loaded for this profile yet.</p>
                </div>
              )}
            </div>
          </motion.section>

        </div>
        
        {/* Footer Audit Stamp */}
        <AuditStamp title="PERSONNEL_VERIFIED" subtitle="Roster Audit 2026" className="pt-16" />
      </main>

      {/* Asset Viewer Modal */}
      <AssetViewer 
        isOpen={!!selectedAsset}
        onClose={() => setSelectedAsset(null)}
        assetUrl={selectedAsset?.url || ''}
        assetTitle={selectedAsset?.title || ''}
        assetHash={profileData.id.toUpperCase() + "...9A2B"}
        assetType="image"
        annotations={selectedAsset?.annotations}
      />
    </div>
  );
}
