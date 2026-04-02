import React from 'react';
import { motion } from 'motion/react';

interface AtmosphericBreakProps {
  image: string;
  title: string;
  subtitle?: string;
  overlayOpacity?: number;
}

export const AtmosphericBreak = ({ 
  image, 
  title, 
  subtitle, 
  overlayOpacity = 0.4 
}: AtmosphericBreakProps) => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-like effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div 
          className="absolute inset-0 bg-authority-navy" 
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-serif italic text-4xl md:text-7xl text-white mb-4 tracking-tight leading-none">
            {title}
          </h2>
          {subtitle && (
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};
