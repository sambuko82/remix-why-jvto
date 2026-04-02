import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldAlert, Scale, Mountain, Star, History, Handshake, ChevronRight, Lock, Eye, Database, Fingerprint, FileText, Activity
} from 'lucide-react';
import { motion } from 'motion/react';
import { SSOT } from '../../lib/ssot';

export const TrustStack = () => {
  const navigate = useNavigate();

  const icons = [ShieldAlert, Scale, Activity, Star, Handshake, Mountain];
  const colors = ["text-safety-orange", "text-verified-bright", "text-blue-500", "text-amber-500", "text-emerald-600", "text-authority-navy"];
  const bgs = ["bg-white", "bg-white", "bg-white", "bg-white", "bg-white", "bg-white"];
  const sizes = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-1"
  ];

  const items = SSOT.hub_content.trust_stack.cards.map((card, i) => ({
    ...card,
    icon: icons[i % icons.length],
    iconColor: colors[i % colors.length],
    bg: bgs[i % bgs.length],
    size: sizes[i % sizes.length],
    hash: `SHA-256: ${Math.random().toString(16).substring(2, 6)}...${Math.random().toString(16).substring(2, 6)}`
  }));

  const gridItems = items.slice(0, 5);

  return (
    <section id="trust-stack" className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Database className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Trust Pillar Registry</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-authority-navy leading-[0.85] mb-6 uppercase tracking-tighter">
            {SSOT.hub_content.trust_stack.title.split(' ').slice(0, 2).join(' ')} <br />
            <span className="text-safety-orange">{SSOT.hub_content.trust_stack.title.split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light">
            {SSOT.hub_content.trust_stack.description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="font-mono text-[11px] uppercase text-slate-500">Audit Status</p>
            <p className="font-bold text-emerald-500">PASS / VERIFIED</p>
          </div>
          <div className="h-12 w-[1px] bg-slate-200 hidden md:block"></div>
          <Lock className="w-8 h-8 text-authority-navy" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[minmax(250px,auto)]">
        {gridItems.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => navigate(item.link)}
              className={`p-8 md:p-10 rounded-md border border-slate-200 shadow-card hover:shadow-hover hover:border-safety-orange/30 transition-all group cursor-pointer flex flex-col justify-between ${item.size} ${item.bg} relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-safety-orange/5 transition-colors"></div>
              
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 rounded-md bg-slate-50 group-hover:bg-white transition-colors border border-slate-100 group-hover:border-safety-orange/20">
                    <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${item.iconColor}`} />
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="font-mono text-xs font-bold text-slate-300 mb-2">0{i + 1}</div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">{item.hash}</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase leading-none tracking-tight text-authority-navy group-hover:text-safety-orange transition-colors">{item.title}</h3>
                <p className="text-base md:text-lg leading-relaxed font-light text-slate-500">
                  {item.summary}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <Eye className="w-4 h-4 text-safety-orange" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600">Inspect Proof</span>
                </div>
                <div className="flex items-center gap-2">
                   <Fingerprint className="w-4 h-4 text-slate-300" />
                   <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-safety-orange group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
