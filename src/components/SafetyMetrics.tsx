import React from 'react';
import { motion } from 'motion/react';
import { SafetyMetric } from '../types';
import { ShieldCheck, Activity, AlertTriangle } from 'lucide-react';

interface SafetyMetricsProps {
  metrics: SafetyMetric[];
  compact?: boolean;
}

export const SafetyMetrics: React.FC<SafetyMetricsProps> = ({ metrics, compact = false }) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className={`flex flex-col gap-4 ${compact ? 'gap-2' : 'gap-6'}`}>
      {!compact && (
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-safety-orange" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Safety Performance Metrics</span>
        </div>
      )}

      {metrics.map((metric, idx) => (
        <div key={idx} className="group/metric">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 group-hover/metric:text-authority-navy transition-colors">
              {metric.label}
            </span>
            <span className="font-mono text-[11px] font-bold text-authority-navy">
              {metric.value}%
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Sparkline */}
            <div className="flex-1 h-8 bg-slate-50 rounded border border-slate-100 overflow-hidden relative">
              <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6321" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FF6321" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Area */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: idx * 0.2 }}
                  d={`M 0 40 ${metric.history.map((val, i) => 
                    `L ${(i / (metric.history.length - 1)) * 100} ${40 - (val / 100) * 35}`
                  ).join(' ')} L 100 40 Z`}
                  fill={`url(#grad-${idx})`}
                />

                {/* Line */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: idx * 0.2 }}
                  d={`M 0 ${40 - (metric.history[0] / 100) * 35} ${metric.history.map((val, i) => 
                    `L ${(i / (metric.history.length - 1)) * 100} ${40 - (val / 100) * 35}`
                  ).join(' ')}`}
                  fill="none"
                  stroke="#FF6321"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points */}
                {metric.history.map((val, i) => (
                  <motion.circle
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 + (i * 0.1) }}
                    cx={(i / (metric.history.length - 1)) * 100}
                    cy={40 - (val / 100) * 35}
                    r="1.5"
                    fill="#FF6321"
                  />
                ))}
              </svg>
              
              {/* Scanline effect on sparkline */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2 animate-scan-fast"></div>
            </div>

            {/* Gauge/Indicator */}
            {!compact && (
              <div className="w-12 h-12 relative flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="#F1F5F9"
                    strokeWidth="3"
                  />
                  <motion.circle
                    initial={{ strokeDasharray: "0 126" }}
                    animate={{ strokeDasharray: `${(metric.value / 100) * 126} 126` }}
                    transition={{ duration: 2, delay: idx * 0.3 }}
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="#FF6321"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity className="w-3 h-3 text-safety-orange opacity-50" />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
