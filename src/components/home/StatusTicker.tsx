import React from 'react';
import { motion } from 'motion/react';
import { Activity, Wind, Thermometer, ShieldCheck } from 'lucide-react';

export const StatusTicker = () => {
  return (
    <div className="bg-authority-charcoal border-y border-white/5 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-2">
            <div className="status-live"></div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-safety-orange font-bold">Live Status:</span>
          </div>
          
          <div className="flex items-center gap-6">
            <TickerItem icon={<Wind className="w-3 h-3" />} label="Volcanic Gas (SO2)" value="0.4 ppm" status="SAFE" />
            <TickerItem icon={<Thermometer className="w-3 h-3" />} label="Crater Temp" value="14°C" status="NORMAL" />
            <TickerItem icon={<Activity className="w-3 h-3" />} label="Seismic Level" value="Level I" status="STABLE" />
            <TickerItem icon={<ShieldCheck className="w-3 h-3" />} label="Police Escort" value="Available" status="ACTIVE" />
            <TickerItem icon={<Wind className="w-3 h-3" />} label="Visibility" value="800m" status="CLEAR" />
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-6">
            <TickerItem icon={<Wind className="w-3 h-3" />} label="Volcanic Gas (SO2)" value="0.4 ppm" status="SAFE" />
            <TickerItem icon={<Thermometer className="w-3 h-3" />} label="Crater Temp" value="14°C" status="NORMAL" />
            <TickerItem icon={<Activity className="w-3 h-3" />} label="Seismic Level" value="Level I" status="STABLE" />
            <TickerItem icon={<ShieldCheck className="w-3 h-3" />} label="Police Escort" value="Available" status="ACTIVE" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TickerItem = ({ icon, label, value, status }: { icon: React.ReactNode, label: string, value: string, status: string }) => (
  <div className="flex items-center gap-2 border-r border-white/10 pr-6 last:border-0">
    <span className="text-slate-500">{icon}</span>
    <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{label}:</span>
    <span className="font-mono text-[11px] uppercase tracking-widest text-white font-bold">{value}</span>
    <span className="font-mono text-[11px] px-1.5 py-0.5 rounded-sm bg-verified-bright/10 text-verified-bright border border-verified-bright/20 font-bold">{status}</span>
  </div>
);
