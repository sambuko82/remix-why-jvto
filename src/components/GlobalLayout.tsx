import React, { useEffect } from 'react';
import { TopNav } from './TopNav';
import { BottomNav } from './home/BottomNav';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const canonicalUrl = `https://javavolcano-touroperator.com${location.pathname}`;
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-audit-white">
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <TopNav />
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-1 pt-[60px] pb-24 md:pb-24"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <BottomNav />
    </div>
  );
};
