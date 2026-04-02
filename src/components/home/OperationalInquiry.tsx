import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  FileText, 
  Send, 
  CheckCircle2, 
  User, 
  Mail, 
  Calendar, 
  Users,
  AlertTriangle,
  Lock,
  Loader2,
  Fingerprint,
  ShieldAlert,
  Search,
  Database
} from 'lucide-react';
import { SSOT } from '../../lib/ssot';

export const OperationalInquiry = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '2',
    package: '3D2N Bromo-Ijen',
    healthConfirmed: false
  });

  const packages = SSOT.tours.map(t => t.name);

  const processingMessages = [
    "Initializing Secure Connection...",
    "Scanning Operational Database...",
    "Verifying Police Liaison Availability...",
    "Checking Medical Screening Slots...",
    "Finalizing Security Protocol..."
  ];

  useEffect(() => {
    if (isProcessing) {
      const interval = setInterval(() => {
        setProcessingStep(prev => (prev + 1) % processingMessages.length);
      }, 600);
      return () => clearInterval(interval);
    }
  }, [isProcessing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 3500);
  };

  return (
    <section className="py-24 md:py-32 bg-authority-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Authority Context */}
          <div className="lg:col-span-5 text-white">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="badge-eyebrow badge-eyebrow-white mb-6">
                <ShieldCheck className="w-3 h-3 text-safety-orange" /> Operational Deployment
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                Request <br />
                <span className="text-safety-orange">Security Clearance.</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed mb-12 max-w-md">
                This is not a generic booking form. Every request initiates a security audit to ensure safety protocols and police liaison availability.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Fingerprint, text: "Biometric-Ready Verification" },
                  { icon: ShieldAlert, text: "Mandatory Medical Screening Check" },
                  { icon: Database, text: "Encrypted Operational Logging" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-safety-orange/20 flex items-center justify-center">
                      <item.icon className="w-3 h-3 text-safety-orange" />
                    </div>
                    <span className="text-sm font-mono uppercase tracking-widest text-white/80">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-6 rounded-md bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                <div className="scanline opacity-10"></div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-black uppercase tracking-widest text-amber-400">Security Advisory</span>
                </div>
                <p className="text-[11px] font-mono text-white/40 leading-relaxed uppercase tracking-wider">
                  Submission of this form initiates a security audit of your itinerary. Our team will contact you via official channels (+62 822-4478-8833) to finalize deployment.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Forensic Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-md overflow-hidden shadow-hover border border-white/10 relative min-h-[600px]"
            >
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-audit-white"
                  >
                    <div className="w-24 h-24 rounded-full bg-verified-bright/10 flex items-center justify-center mb-8 border-4 border-verified-bright/20">
                      <CheckCircle2 className="w-12 h-12 text-verified-bright" />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-authority-navy mb-4">Clearance Requested</h3>
                    <p className="text-slate-500 font-mono text-sm uppercase tracking-widest mb-12 max-w-md leading-relaxed">
                      Your inquiry has been logged into our operational database. Reference: <span className="text-authority-navy font-bold">JVTO-OPS-{Math.random().toString(36).substring(7).toUpperCase()}</span>
                    </p>
                    <div className="p-6 bg-authority-navy text-white rounded-md w-full max-w-sm">
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">Next Protocol Step</p>
                      <p className="text-xs font-bold uppercase tracking-widest">Awaiting Operational Desk Review</p>
                    </div>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-12 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-authority-navy transition-colors underline"
                    >
                      Submit New Request
                    </button>
                  </motion.div>
                ) : isProcessing ? (
                  <motion.div 
                    key="processing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-authority-navy text-white"
                  >
                    <div className="scanline"></div>
                    <div className="relative mb-12">
                      <Loader2 className="w-16 h-16 text-safety-orange animate-spin" />
                      <Search className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white animate-pulse" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-black uppercase tracking-tighter">Processing Clearance</h3>
                      <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden mx-auto">
                        <motion.div 
                          className="h-full bg-safety-orange"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3.5, ease: "linear" }}
                        />
                      </div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-safety-orange animate-pulse">
                        {processingMessages[processingStep]}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Form Header */}
                    <div className="bg-slate-50 border-b border-slate-200 p-8 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-md bg-authority-navy flex items-center justify-center text-white">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-black uppercase tracking-tight text-authority-navy">Security Clearance Form</h3>
                          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Ref: OPS_REQ_{Math.random().toString(36).substring(7).toUpperCase()}</p>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-verified-bright/10 border border-verified-bright/20">
                        <div className="w-2 h-2 rounded-full bg-verified-bright animate-pulse" />
                        <span className="text-[9px] font-bold text-authority-navy uppercase tracking-widest">Secure Session</span>
                      </div>
                    </div>

                    {/* Form Body */}
                    <div className="p-8 md:p-12">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Name */}
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                            <User className="w-3 h-3" /> Lead Traveler Name
                          </label>
                          <input 
                            required
                            type="text" 
                            placeholder="Enter full name"
                            className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-4 text-sm font-medium focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange outline-none transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                            <Mail className="w-3 h-3" /> Official Email Address
                          </label>
                          <input 
                            required
                            type="email" 
                            placeholder="email@example.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-4 text-sm font-medium focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange outline-none transition-all"
                          />
                        </div>

                        {/* Date */}
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                            <Calendar className="w-3 h-3" /> Deployment Date
                          </label>
                          <input 
                            required
                            type="date" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-4 text-sm font-medium focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange outline-none transition-all"
                          />
                        </div>

                        {/* Guests */}
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                            <Users className="w-3 h-3" /> Total Personnel (Pax)
                          </label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-4 text-sm font-medium focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange outline-none transition-all appearance-none">
                            {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} Person{n > 1 ? 's' : ''}</option>)}
                            <option value="11+">11+ (Group Request)</option>
                          </select>
                        </div>

                        {/* Package */}
                        <div className="md:col-span-2 space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3" /> Selected Operational Package
                          </label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-4 text-sm font-medium focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange outline-none transition-all appearance-none">
                            {packages.map(p => <option key={p} value={p}>{p}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Health Confirmation */}
                      <div className="mt-12 p-6 rounded-md bg-slate-50 border border-slate-200 flex items-start gap-4 cursor-pointer hover:bg-slate-100 transition-colors group">
                        <div className="relative flex items-center justify-center mt-1">
                          <input 
                            required
                            type="checkbox" 
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-sm border border-slate-300 bg-white checked:bg-safety-orange checked:border-safety-orange transition-all"
                          />
                          <CheckCircle2 className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-black uppercase tracking-tight text-authority-navy mb-1">Mandatory Health Protocol Acknowledgment</span>
                          <p className="text-[10px] text-slate-500 leading-relaxed font-light">
                            I understand that Mount Ijen requires a mandatory medical screening. I confirm that all travelers in my group are physically fit for high-altitude volcanic trekking.
                          </p>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button 
                        type="submit"
                        className="w-full mt-12 bg-authority-navy text-white py-6 rounded-md font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-slate-900 transition-all group shadow-hover shadow-authority-navy/20"
                      >
                        <Lock className="w-4 h-4 text-safety-orange group-hover:scale-110 transition-transform" />
                        Submit for Security Clearance
                      </button>

                      <div className="mt-8 flex items-center justify-center gap-6">
                        <div className="flex items-center gap-2 text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                          <Lock className="w-3 h-3" /> Encrypted Data
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                        <div className="flex items-center gap-2 text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                          <ShieldCheck className="w-3 h-3" /> GDPR Compliant
                        </div>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
