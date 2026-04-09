'use client';

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, MessageSquare, ChevronRight } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';

export const TopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navItems = [
    { label: 'Tours', path: '/tours' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Why JVTO', path: '/why-jvto' },
    { label: 'Travel Guide', path: '/travel-guide' },
  ];

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-safety-orange origin-left z-[102]" style={{ scaleX }} />
      <nav className="fixed top-0 left-0 right-0 z-[101] bg-authority-navy/95 backdrop-blur-xl border-b border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer group" onClick={() => navigate('/')}>
            <div className="p-1.5 md:p-2 bg-safety-orange rounded-md text-white group-hover:scale-105 transition-transform shadow-card shadow-safety-orange/20">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div>
              <div className="font-black uppercase tracking-tighter leading-none text-white text-sm md:text-base">JVTO</div>
              <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Java Volcano Tour Operator</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`relative font-mono text-[11px] uppercase tracking-[0.15em] transition-colors group ${
                  location.pathname === item.path ? 'text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div layoutId="navIndicator" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-safety-orange" />
                )}
              </button>
            ))}
            <div className="flex items-center gap-4 ml-6">
              <button 
                onClick={() => navigate('/tours')} 
                className="bg-safety-orange text-white px-8 py-3 rounded-md font-black uppercase tracking-widest text-[11px] hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-card shadow-safety-orange/20"
              >
                Book Tour
              </button>
              <button 
                onClick={() => navigate('/verify-jvto')} 
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-3 rounded-md font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                Verify
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden text-white p-2 -mr-2 hover:bg-white/10 rounded-full transition-colors active:scale-95" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden absolute top-full left-0 right-0 bg-authority-navy/95 backdrop-blur-2xl border-t border-white/10 flex flex-col overflow-hidden"
            >
              <div className="flex-1 p-6 flex flex-col gap-2 overflow-y-auto">
                {navItems.map((item, i) => (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.path}
                    onClick={() => { navigate(item.path); setIsOpen(false); }}
                    className={`flex items-center justify-between font-black uppercase tracking-widest text-lg py-4 border-b border-white/5 transition-colors ${
                      location.pathname === item.path ? 'text-safety-orange' : 'text-white hover:text-safety-orange'
                    }`}
                  >
                    {item.label}
                    <ChevronRight className={`w-5 h-5 ${location.pathname === item.path ? 'text-safety-orange' : 'text-slate-600'}`} />
                  </motion.button>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 flex flex-col gap-4"
                >
                  <button onClick={() => { navigate('/tours'); setIsOpen(false); }} className="w-full bg-safety-orange text-white py-4 rounded-md font-black uppercase tracking-wider text-sm active:scale-95 transition-transform shadow-card shadow-safety-orange/20">
                    View All Tours
                  </button>
                  <button onClick={() => { navigate('/verify-jvto'); setIsOpen(false); }} className="w-full border border-white/20 text-white py-4 rounded-md font-black uppercase tracking-wider text-sm active:scale-95 transition-transform">
                    Verify JVTO
                  </button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto pt-8 pb-12"
                >
                  <a href="https://wa.me/6282244788833" className="flex items-center justify-center gap-3 text-safety-orange font-black uppercase tracking-widest text-sm p-4 bg-white/5 rounded-md active:scale-95 transition-transform">
                    <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
                  </a>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest text-center mt-4">Available 08:00–22:00 WIB</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

