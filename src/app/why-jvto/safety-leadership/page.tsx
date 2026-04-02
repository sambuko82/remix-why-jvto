import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  ShieldCheck, 
  Lock, 
  ChevronRight,
  Activity,
  UserCheck,
  Stethoscope,
  Radio,
  MapPin,
  AlertTriangle
} from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';

export default function SafetyLeadership() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/why-jvto/safety-leadership'];

  const safetyClaims = SSOT.claims.filter(c => ['C4'].includes(c.id));

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/why-jvto')}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Why JVTO Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Protocol_Safety_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-5xl relative z-10">
        <PageSEO route="/why-jvto/safety-leadership" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Safety Leadership</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'POLICE-LED SECURITY.'}
          </h1>
          <p className="text-slate-500 text-xl leading-tight font-light max-w-2xl">
            We don't guess with your safety. Our operations are led by active Tourist Police personnel and supported by mandatory medical screening for all Ijen hikers.
          </p>
        </motion.div>

        {/* Police Authority Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="bento-card bg-authority-navy text-white p-12 relative overflow-hidden">
            <div className="scanline"></div>
            <div className="relative z-10">
              <div className="badge-eyebrow badge-eyebrow-orange mb-8">
                <ShieldCheck className="w-3 h-3" /> State-Sanctioned Security
              </div>
              <h3 className="text-3xl font-black uppercase mb-6 leading-none">Police Command</h3>
              <p className="text-slate-500 text-lg font-light leading-tight mb-12">
                Agung Sambuko (Mr. Sam) is an active member of the East Java Tourist Police Unit (Ditpamobvit), 
                specializing in tourist safety and risk management.
              </p>
              <ul className="space-y-4 mb-12">
                {SSOT.police_authority.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-slate-300">
                    <Radio className="w-4 h-4 text-safety-orange" /> {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/verify-jvto#police-safety')}
                className="inline-flex items-center gap-3 text-[11px] font-mono font-bold text-safety-orange uppercase tracking-widest hover:gap-5 transition-all"
              >
                Inspect Police Credentials <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bento-card bg-audit-white p-10 border-2 border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-verified-bright/5 text-verified-bright flex items-center justify-center border border-verified-bright/10">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black uppercase">Real-time Intel</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Direct access to volcanic hazard monitoring and emergency services coordination 
                through official police channels.
              </p>
            </div>
            <div className="bento-card bg-audit-white p-10 border-2 border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/5 text-indigo-500 flex items-center justify-center border border-indigo-500/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black uppercase">Official Patrols</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our routes are vetted and monitored by local authorities, ensuring 
                compliance with all safety regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Medical Screening Section */}
        <div className="mb-32">
          <div className="flex items-center gap-2 mb-12">
            <Stethoscope className="w-4 h-4 text-safety-orange" />
            <h2 className="text-3xl font-black uppercase">Medical Screening Protocol</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {SSOT.health_protocol.steps.map((step, i) => (
              <div key={i} className="bento-card bg-audit-white p-8 border-2 border-slate-100 relative">
                <span className="absolute top-6 right-6 font-mono text-[11px] text-slate-200 font-black">{step.step}</span>
                <h4 className="text-lg font-black uppercase mb-3 mt-4">{step.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-12 bg-verified-bright/5 border-2 border-verified-bright/10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h3 className="text-2xl font-black text-authority-navy uppercase mb-4">The "Hard Stop" Policy</h3>
              <p className="text-slate-600 font-light leading-tight">
                {SSOT.health_protocol.policy} We prioritize your life over the itinerary. 
                Unfit guests are not permitted to climb.
              </p>
            </div>
            <button 
              onClick={() => navigate('/verify-jvto#safety')}
              className="bg-verified-bright text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-verified-bright/20 flex items-center gap-3"
            >
              Inspect Medical Proof <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Safety Claims */}
        <div className="space-y-12">
          {safetyClaims.map((claim) => (
            <motion.div 
              key={claim.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bento-card bg-audit-white p-12 border-2 border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 font-mono text-[11px] text-slate-200 font-black">
                CLAIM_{claim.id}
              </div>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-black text-authority-navy uppercase leading-tight mb-6">
                  {claim.text}
                </h3>
                <div className="p-6 bg-audit-white rounded-xl border border-slate-100 mb-8">
                  <p className="text-slate-600 font-light leading-relaxed italic">
                    "{claim.meaning}"
                  </p>
                </div>
                <button 
                  onClick={() => navigate(`/verify-jvto#${claim.evidenceAnchor}`)}
                  className="inline-flex items-center gap-3 text-[11px] font-mono font-bold text-safety-orange uppercase tracking-widest hover:gap-5 transition-all"
                >
                  Inspect Evidence <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hazard Warning */}
        <div className="mt-32 p-12 bg-amber-50 border-2 border-amber-200 rounded-[3rem] flex flex-col md:flex-row items-center gap-12">
          <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-amber-900 uppercase mb-4">Volcanic Hazard Notice</h3>
            <p className="text-amber-800/70 text-lg font-light leading-tight">
              Mount Ijen and Mount Bromo are active volcanoes. Conditions can change in minutes. 
              Our safety protocols are designed to manage these risks, but absolute safety 
              cannot be guaranteed in a volcanic environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
