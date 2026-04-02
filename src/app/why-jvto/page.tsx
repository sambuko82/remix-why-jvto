import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShieldCheck,
  Shield,
  AlertTriangle, 
  Scale, 
  Siren, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  FileText, 
  Star, 
  Menu, 
  X,
  ChevronRight,
  Lock
} from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { AuditStamp } from '../../components/AuditStamp';
import { FounderSpotlight } from '../../components/home/FounderSpotlight';

export default function WhyJVTOHub() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extracting data from SSOT
  const founder = SSOT.organization.founder;
  const policeAuth = SSOT.police_authority;
  const healthProto = SSOT.health_protocol;
  const claims = SSOT.claims;
  
  // Map features to icons
  const featureIcons = [AlertTriangle, Scale, Siren, Network];

  return (
    <div className="bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30">
      <PageSEO route="/why-jvto" />
      
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-10 pointer-events-none"></div>

      <div className="relative z-10 pt-12 pb-24">
        {/* 🎯 LAYER 2: CORE THESIS (HERO SECTION) */}
        <section className="container mx-auto px-6 py-20 text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <div className="badge-eyebrow badge-eyebrow-orange mb-8">
              <Shield className="w-4 h-4" /> {policeAuth.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-authority-navy mb-8 leading-[1.1] tracking-tight">
              Beyond Tourism. Engineered for Safety & Certainty.
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light mb-12 max-w-2xl mx-auto">
              {SSOT.organization.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate('/verify-jvto')}
                className="w-full sm:w-auto bg-safety-orange hover:bg-safety-orange/90 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider transition-all shadow-card flex items-center justify-center gap-2"
              >
                View Forensic Proof <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/team')}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-authority-navy px-8 py-4 rounded-md font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-card"
              >
                Meet the Team
              </button>
            </div>
          </motion.div>
        </section>

        {/* FOUNDER SPOTLIGHT */}
        <FounderSpotlight />

        {/* 🛡️ LAYER 3: AUTHORITY SHIELD (POLICE LEADERSHIP) */}
        <section id="safety" className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ShieldCheck className="w-12 h-12 text-safety-orange mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-authority-navy mb-6 tracking-tight">
                {policeAuth.title}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                {policeAuth.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                {policeAuth.features.map((feature, idx) => {
                  const Icon = featureIcons[idx % featureIcons.length];
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-authority-navy" />
                      </div>
                      <div>
                        <h4 className="text-authority-navy font-bold text-sm">{feature}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <button 
                onClick={() => navigate('/why-jvto/safety-leadership')}
                className="text-safety-orange font-mono text-sm uppercase tracking-widest hover:text-authority-navy transition-colors flex items-center gap-2"
              >
                Read the Founder's Doctrine <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-safety-orange/10 to-transparent rounded-md blur-2xl"></div>
              <div className="relative rounded-md overflow-hidden border border-slate-200 bg-white aspect-[4/5] shadow-card">
                <img 
                  src={SSOT.assets.find(a => a.slug === 'mr-sam-tourist-police-portrait')?.url} 
                  alt={founder.name} 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="font-mono text-xs text-safety-orange uppercase tracking-widest mb-1">Founder</div>
                  <div className="text-white font-bold text-xl">{founder.name}</div>
                  <div className="text-slate-300 text-sm">{founder.role} - {founder.unit}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ⏳ LAYER 4: TIMELINE TWIN (HISTORY & ARTIFACTS) */}
        <section id="history" className="container mx-auto px-6 py-24 border-t border-slate-200">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-authority-navy mb-6 tracking-tight">
              Roots in Documented History
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Long-term artifacts that predate the recent tourism boom. Trace our footprint through international guidebooks and operational milestones.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row gap-8 md:flex-row-reverse"
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-safety-orange rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 md:top-1/2 md:-translate-y-1/2 shadow-[0_0_10px_rgba(249,115,22,0.4)]"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
                  <div className="font-mono text-safety-orange text-sm font-bold mb-2">2015</div>
                  <h3 className="text-xl font-bold text-authority-navy mb-4">{SSOT.history.award2015.title}</h3>
                  <div className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-md text-xs text-slate-500 font-mono shadow-card">
                    [Artifact: Score {SSOT.history.award2015.score}]
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row gap-8"
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-safety-orange rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 md:top-1/2 md:-translate-y-1/2 shadow-[0_0_10px_rgba(249,115,22,0.4)]"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                  <div className="font-mono text-safety-orange text-sm font-bold mb-2">2016</div>
                  <h3 className="text-xl font-bold text-authority-navy mb-4">{SSOT.history.book2016.title}</h3>
                  <div className="inline-flex px-4 py-2 bg-white border border-slate-200 rounded-md text-xs text-slate-500 font-mono shadow-card">
                    [Artifact: ISBN {SSOT.history.book2016.isbn}]
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row gap-8 md:flex-row-reverse"
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-safety-orange rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 md:top-1/2 md:-translate-y-1/2 shadow-[0_0_10px_rgba(249,115,22,0.4)]"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
                  <div className="font-mono text-safety-orange text-sm font-bold mb-2">2016</div>
                  <h3 className="text-xl font-bold text-authority-navy mb-4">Official Founding</h3>
                  <div className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-md text-xs text-slate-500 font-mono shadow-card">
                    [Artifact: Founded {SSOT.organization.foundingDate}]
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 text-center">
              <button 
                onClick={() => navigate('/verify-jvto/history-artifacts')}
                className="text-safety-orange font-mono text-sm uppercase tracking-widest hover:text-authority-navy transition-colors inline-flex items-center gap-2"
              >
                Explore the Artifact Vault <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 🏛️ LAYER 5: FORTRESS CARD (LEGAL & COMPLIANCE) */}
        <section id="legal" className="container mx-auto px-6 py-24 border-t border-slate-200">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card bg-audit-white p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-safety-orange/5 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <FileText className="w-8 h-8 text-safety-orange" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-authority-navy tracking-tight">
                    Verified Legal Entity
                  </h2>
                  <p className="text-slate-500 mt-1">Operating under strict Indonesian tourism laws. No shell companies.</p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-audit-white border border-slate-100 rounded-md p-6">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Entity Name</div>
                  <div className="text-authority-navy font-mono font-bold">{SSOT.organization.legalName}</div>
                </div>
                <div className="bg-audit-white border border-slate-100 rounded-md p-6">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">NIB Registration</div>
                  <div className="text-authority-navy font-mono font-bold">1102230032918</div>
                </div>
                <div className="bg-audit-white border border-slate-100 rounded-md p-6">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">TDUP License</div>
                  <div className="text-authority-navy font-mono font-bold">1102230032918</div>
                </div>
                <div className="bg-audit-white border border-slate-100 rounded-md p-6">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Location</div>
                  <div className="text-authority-navy font-mono font-bold">{SSOT.organization.address_json.addressLocality}, {SSOT.organization.address_json.addressRegion}</div>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/verify-jvto/legal')}
                className="bg-authority-navy hover:bg-authority-navy/90 text-white px-6 py-3 rounded-md font-mono text-sm uppercase tracking-widest transition-all w-full sm:w-auto shadow-card"
              >
                View Cryptographic Legal Proof
              </button>
            </motion.div>
          </div>
        </section>

        {/* 🔍 LAYER 6: TRIANGULATION GRID (REVIEWS & GUEST VOICES) */}
        <section id="reviews" className="container mx-auto px-6 py-24 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-authority-navy mb-6 tracking-tight">
              Guest Voices on Independent Platforms
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Independent reviews across major platforms—see the patterns for yourself. We don't hide behind curated testimonials.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {SSOT.organization.same_as_urls.map((url, idx) => {
              let platform = "Platform";
              if (url.includes("trustpilot")) platform = "TrustPilot";
              if (url.includes("tripadvisor")) platform = "TripAdvisor";
              if (url.includes("google")) platform = "Google Reviews";
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bento-card bg-audit-white p-8 flex flex-col items-center justify-center text-center"
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-safety-orange text-safety-orange" />
                    ))}
                  </div>
                  <h3 className="text-authority-navy text-xl font-bold mb-4">Verified on {platform}</h3>
                  <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-safety-orange uppercase tracking-widest hover:underline"
                  >
                    View Profile
                  </a>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => navigate('/why-jvto/reviews')}
              className="text-safety-orange font-mono text-sm uppercase tracking-widest hover:text-authority-navy transition-colors inline-flex items-center gap-2"
            >
              Analyze All Reviews <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* 🏥 LAYER 7: HEALTH FLOW (MEDICAL PROTOCOL) */}
        <section id="health" className="container mx-auto px-6 py-24 border-t border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Activity className="w-12 h-12 text-safety-orange mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-authority-navy mb-6 tracking-tight">
                {healthProto.title}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                {healthProto.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
              {healthProto.steps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center gap-4 w-full md:w-auto">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-safety-orange flex items-center justify-center text-authority-navy font-bold text-xl shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                    {step.step}
                  </div>
                  <div className="bg-white border border-slate-200 px-6 py-3 rounded-md text-authority-navy font-medium text-center w-full md:w-48 shadow-card">
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-red-50 border border-red-100 rounded-md p-6 flex items-start gap-4 mb-10">
              <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-red-600 font-bold mb-1">WARNING</h4>
                <p className="text-red-500/80 text-sm">{healthProto.policy}</p>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => navigate('/travel-guide/ijen-health-screening')}
                className="text-safety-orange font-mono text-sm uppercase tracking-widest hover:text-authority-navy transition-colors inline-flex items-center gap-2"
              >
                View the Full Medical Protocol <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 💎 LAYER 8: VALUE LIST (THE JVTO DIFFERENCE) */}
        <section className="container mx-auto px-6 py-24 border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-authority-navy mb-4 tracking-tight text-center">
              Safety as Operational Discipline
            </h2>
            <p className="text-slate-500 text-lg text-center mb-12">
              Police-led safety mindset and clear decision boundaries. Tangible benefits, not marketing fluff.
            </p>
            
            <div className="space-y-4 mb-12">
              {claims.map((claim, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 bento-card bg-audit-white border border-slate-200 rounded-md p-6 shadow-card"
                >
                  <CheckCircle2 className="w-6 h-6 text-verified-lime shrink-0 mt-1" />
                  <div>
                    <span className="text-authority-navy font-bold block mb-1">{claim.text}</span>
                    <span className="text-slate-500 text-sm">{claim.meaning}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => navigate('/why-jvto/the-jvto-difference')}
                className="text-safety-orange font-mono text-sm uppercase tracking-widest hover:text-authority-navy transition-colors inline-flex items-center gap-2"
              >
                Compare Our Standards <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 🤝 LAYER 9: PARTNER LOGOS (TRUST NETWORK) */}
        <section className="container mx-auto px-6 py-16 border-t border-slate-200">
          <h2 className="text-center text-sm font-mono text-slate-500 uppercase tracking-widest mb-10">
            Our Trust Network
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {SSOT.proof_vault.partners.map((partner, idx) => (
              <div key={idx} className="text-xl font-black text-authority-navy tracking-tighter">
                {partner.title}
              </div>
            ))}
            <div className="text-xl font-black text-authority-navy tracking-tighter">
              ISIC
            </div>
            <div className="text-xl font-black text-authority-navy tracking-tighter">
              INDECON
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


