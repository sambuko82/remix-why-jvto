import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, ShieldCheck, MessageSquare, Menu } from 'lucide-react';

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Audit Hub', path: '/' },
    { icon: <FileText className="w-5 h-5" />, label: 'Evidence', path: '/verify-jvto' },
    { icon: <ShieldCheck className="w-5 h-5" />, label: 'Safety', path: '/travel-guide/ijen-health-screening' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Support', path: '/why-jvto' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-authority-navy/95 backdrop-blur-xl border-t border-white/10 px-6 py-3 pb-6">
      <div className="flex items-center justify-between max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 group relative"
            >
              <div className={`p-2 rounded-md transition-all duration-300 ${isActive ? 'bg-safety-orange text-white shadow-card shadow-safety-orange/20 -translate-y-1' : 'text-slate-500 group-hover:text-white'}`}>
                {item.icon}
              </div>
              <span className={`text-[11px] font-mono uppercase tracking-widest transition-colors ${isActive ? 'text-safety-orange font-bold' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
