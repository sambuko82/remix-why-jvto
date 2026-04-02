import React from 'react';
import { ShieldCheck, Activity, Lock, FileCheck, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';

const TwoToneIcon = ({ Icon }: { Icon: any }) => (
  <div className="relative w-16 h-16 mb-6 group-hover:scale-105 transition-transform origin-bottom-left">
    {/* Accent shape (simulating the green blob in the illustration) */}
    <div className="absolute top-0 right-1 w-10 h-10 bg-safety-orange rounded-full opacity-90" />
    {/* Main icon (simulating the black outline) */}
    <Icon className="absolute bottom-0 left-0 w-12 h-12 text-authority-navy relative z-10" strokeWidth={1.5} />
  </div>
);

export const Differentiators = () => {
  const navigate = useNavigate();

  // Reduced to 3 items to match the 1-row layout perfectly without scrolling
  const differentiators = [
    {
      icon: ShieldCheck,
      title: "Police-Led Security",
      desc: `Direct authority liaison led by active ${SSOT.organization.founder.role}.`,
      link: "/why-jvto/safety-leadership"
    },
    {
      icon: Activity,
      title: "Medical Clearance",
      desc: "Strict high-altitude health screenings to prevent hypoxia.",
      link: "/travel-guide/ijen-health-screening"
    },
    {
      icon: Lock,
      title: "Cryptographic Proof",
      desc: "Verifiable hashes back every operational claim we make.",
      link: "/verify-jvto"
    }
  ];

  return (
    <section className="section-spacing bg-audit-white relative overflow-hidden border-y border-slate-100">
      <div className="container-authority">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-center">
          
          {/* Text Column (Left) */}
          <div className="xl:w-1/3 flex flex-col justify-center shrink-0 text-center xl:text-left">
            <div className="inline-block relative mb-6 w-fit mx-auto xl:mx-0">
              <h2 className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-authority-navy relative z-10">
                Operational Excellence
              </h2>
              {/* Marker underline effect */}
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-safety-orange/80 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 0 100 5 Q 50 10 0 5" fill="currentColor" />
              </svg>
            </div>
            
            <h3 className="heading-section mb-6">
              Volcanic precision.
            </h3>
            <p className="body-text">
              We operate with military-grade protocols to ensure every expedition is secured against the unpredictable nature of East Java's peaks.
            </p>
          </div>

          {/* Cards Grid (Right - Scrollable on mobile, 3 Columns on desktop) */}
          <div className="xl:w-2/3 w-full">
            <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x hide-scrollbar">
              {differentiators.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => navigate(item.link)}
                  className="shrink-0 w-[85vw] md:w-auto snap-start p-8 md:p-10 rounded-md bg-white shadow-card border border-slate-100 hover:shadow-hover hover:-translate-y-2 transition-all duration-500 group flex flex-col cursor-pointer"
                >
                  <TwoToneIcon Icon={item.icon} />
                  <h3 className="text-lg md:text-xl font-black text-authority-navy uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="body-text text-sm mb-8 line-clamp-3">
                    {item.desc}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-safety-orange font-mono text-[11px] font-black uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
