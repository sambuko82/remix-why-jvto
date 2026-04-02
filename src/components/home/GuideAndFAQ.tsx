import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight, ShieldCheck, Thermometer, MapPin, HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const GuideAndFAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const guides = [
    {
      title: "Health & Medical",
      desc: "Mandatory screening protocols for high-altitude ascents.",
      icon: ShieldCheck,
      link: "/travel-guide/ijen-health-screening"
    },
    {
      title: "Packing & Fitness",
      desc: "What to wear for sub-zero temperatures at the crater rim.",
      icon: Thermometer,
      link: "/travel-guide/packing-and-fitness"
    },
    {
      title: "Weather & Closures",
      desc: "Real-time volcanic activity and seasonal weather patterns.",
      icon: MapPin,
      link: "/travel-guide/weather-and-closures"
    }
  ];

  const faqs = [
    {
      question: "Why is the Ijen health screening mandatory?",
      answer: "Indonesian law requires a health screening for all hikers ascending Ijen Crater due to the extreme altitude and toxic sulfur gases. We arrange this screening with a licensed physician as part of your tour package to ensure your safety and compliance with local regulations."
    },
    {
      question: "Are your tours private or shared?",
      answer: "All our tours are 100% private. You will not share a vehicle or guide with other groups. This allows us to maintain strict safety protocols, offer flexible itineraries, and provide personalized attention."
    },
    {
      question: "What happens if a volcano is closed due to activity?",
      answer: "Volcanic activity is unpredictable. If a volcano is closed by authorities, we will offer an alternative itinerary (e.g., visiting a different waterfall or viewpoint) or provide a partial refund/travel credit according to our cancellation policy. Safety is our absolute priority."
    },
    {
      question: "Do I need to bring my own gas mask for Ijen?",
      answer: "No. We provide professional-grade, dual-filter gas masks rated for sulfur environments for all our guests. We do not use cheap, single-filter masks that offer inadequate protection."
    }
  ];

  return (
    <section id="guide-faq" className="section-spacing bg-white border-y border-slate-100 overflow-hidden">
      <div className="container-authority">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Travel Guide Intelligence */}
          <div className="lg:col-span-5">
            <div className="badge-eyebrow bg-authority-navy text-white mb-8">
              <BookOpen className="w-3 h-3" /> Essential Intelligence
            </div>
            <h2 className="heading-section mb-8">
              Travel <br />
              <span className="text-safety-orange">Guide.</span>
            </h2>
            <p className="body-text mb-12">
              Don't arrive unprepared. Our intelligence reports cover the critical logistics of East Java's volcanic terrain.
            </p>

            <div className="space-y-6">
              {guides.map((guide, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => navigate(guide.link)}
                  className="p-8 rounded-md bg-white border border-slate-100 hover:border-safety-orange/50 hover:shadow-hover transition-all duration-500 cursor-pointer group flex items-center gap-8 shadow-card"
                >
                  <div className="w-14 h-14 rounded-md bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 shadow-card">
                    <guide.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-black text-authority-navy uppercase tracking-[0.1em] mb-2 group-hover:text-safety-orange transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-black uppercase tracking-[0.1em] leading-tight opacity-60">
                      {guide.desc}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-sm bg-slate-50 flex items-center justify-center group-hover:bg-safety-orange group-hover:text-white transition-all duration-500">
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: FAQ Intelligence */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-md p-10 md:p-16 border border-slate-100 shadow-hover shadow-slate-200/50">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-sm bg-safety-orange/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-safety-orange" />
                </div>
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">FAQ Registry</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black text-authority-navy uppercase tracking-tighter mb-12 leading-[0.9]">
                Clear Answers. <br />
                <span className="text-safety-orange">No Ambiguity.</span>
              </h3>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-slate-100 rounded-md bg-slate-50/50 overflow-hidden transition-all hover:border-safety-orange/30 hover:bg-white hover:shadow-hover duration-500"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                    >
                      <h4 className="text-sm md:text-lg font-black text-authority-navy pr-8 uppercase tracking-tight group-hover:text-safety-orange transition-colors">
                        {faq.question}
                      </h4>
                      <div className={`w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'bg-safety-orange text-white rotate-180' : 'bg-white text-slate-300 shadow-card'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <div className="px-6 md:px-8 pb-8 text-sm md:text-base text-slate-500 font-medium leading-relaxed border-t border-slate-100 pt-6">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
