import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, History, X, Fingerprint, Clock, CheckCircle2 } from 'lucide-react';

export interface AuditLogEntry {
  timestamp: string;
  event: string;
  detail: string;
}

interface AuditTrailProps {
  entityId: string;
  entityName: string;
  logs: AuditLogEntry[];
  isOpen: boolean;
  onClose: () => void;
}

export const AuditTrail: React.FC<AuditTrailProps> = ({ entityId, entityName, logs, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-authority-navy/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Popover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl bg-white rounded-md shadow-hover z-[101] overflow-hidden border border-slate-200"
          >
            <div className="scanline"></div>
            
            {/* Header */}
            <div className="p-10 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center text-authority-navy shadow-card">
                  <History className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-authority-navy uppercase tracking-tight leading-none mb-2">Audit Trail</h3>
                  <p className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Entity: {entityName} // ID: {entityId}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-md bg-white hover:bg-safety-orange hover:text-white flex items-center justify-center text-slate-400 transition-all duration-500 shadow-card group"
              >
                <X className="w-6 h-6 group-hover:text-white" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-10 relative">
                {/* Timeline Line */}
                <div className="absolute left-[23px] top-4 bottom-4 w-px bg-slate-100"></div>
                
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1 w-12 h-12 rounded-md bg-white border border-slate-100 flex items-center justify-center z-10 shadow-card group hover:border-safety-orange transition-all duration-500">
                      <CheckCircle2 className="w-5 h-5 text-verified-bright" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-black text-safety-orange uppercase tracking-[0.2em]">{log.event}</span>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em]">{log.timestamp}</span>
                        </div>
                      </div>
                      <p className="text-base text-authority-navy font-black leading-tight tracking-tight">{log.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Fingerprint className="w-5 h-5 text-slate-300" />
                <span className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Hash: {entityId.slice(0, 12)}...</span>
              </div>
              <div className="px-5 py-2 rounded-md bg-verified-bright/10 text-verified-bright border border-verified-bright/20 font-black text-[10px] uppercase tracking-[0.2em] shadow-card">
                STATUS: SECURE
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
