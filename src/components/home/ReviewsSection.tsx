import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, ExternalLink, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SSOT } from '../../lib/ssot';

const PLATFORMS = [
  {
    name: "Google Maps",
    rating: "5.0",
    reviews: "240+",
    color: "bg-[#4285F4]",
    url: SSOT.organization.same_as_urls.find(u => u.includes('google.com')) || "#",
    icon: (
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4285F4]">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      </div>
    )
  },
  {
    name: "Trustpilot",
    rating: "4.9",
    reviews: "180+",
    color: "bg-[#00b67a]",
    url: SSOT.organization.same_as_urls.find(u => u.includes('trustpilot.com')) || "#",
    icon: (
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#00b67a]">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </div>
    )
  },
  {
    name: "TripAdvisor",
    rating: "5.0",
    reviews: "320+",
    color: "bg-[#34E0A1]",
    url: SSOT.organization.same_as_urls.find(u => u.includes('tripadvisor.com')) || "#",
    icon: (
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#000000]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <circle cx="8.5" cy="10.5" r="1.5" />
          <circle cx="15.5" cy="10.5" r="1.5" />
          <path d="M12 18c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      </div>
    )
  }
];

export const ReviewsSection = () => {
  // Flatten reviews and add crew name to each review
  const topReviews = useMemo(() => {
    const reviews: Array<{
      crewName: string;
      author: string;
      text: string;
      platform: string;
      rating: number;
      date: string;
    }> = [];

    Object.entries(SSOT.crew_reviews).forEach(([crewName, crewReviewList]) => {
      crewReviewList.forEach(review => {
        reviews.push({ ...review, crewName });
      });
    });

    // Sort by date descending and take top 3
    return reviews
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, []);

  return (
    <section className="section-spacing bg-white relative overflow-hidden border-y border-slate-200">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 transform translate-x-1/4 pointer-events-none" />
      
      <div className="container-authority relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Trust Signals */}
          <div className="lg:col-span-5">
            <div className="badge-eyebrow bg-authority-navy text-white mb-8">
              <ShieldCheck className="w-3 h-3" /> External Verification Hub
            </div>
            <h2 className="heading-section mb-8">
              Verified <br />
              <span className="text-safety-orange">Trust Signals.</span>
            </h2>
            <p className="body-text mb-12 max-w-md">
              Our reputation is built on transparency. We don't host reviews ourselves—we invite you to audit our performance on the world's most trusted independent platforms.
            </p>

            <div className="space-y-6">
              {PLATFORMS.map((platform, idx) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center justify-between p-6 bg-white rounded-md border border-slate-100 shadow-card hover:shadow-hover hover:border-safety-orange/30 transition-all duration-500"
                >
                  <div className="flex items-center gap-5">
                    {platform.icon}
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.1em] text-authority-navy group-hover:text-safety-orange transition-colors">
                        {platform.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-0.5 text-safety-orange">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                          {platform.rating} • {platform.reviews}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 shadow-card">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT: Featured Testimonials */}
          <div className="lg:col-span-7">
            <div className="grid gap-8">
              {topReviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="bg-white p-8 md:p-12 rounded-md border border-slate-100 shadow-card relative group hover:shadow-hover transition-all duration-500"
                >
                  <div className="absolute top-8 right-12 opacity-5 group-hover:opacity-10 transition-opacity">
                    <MessageSquare className="w-20 h-20 text-authority-navy" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center gap-0.5 text-safety-orange">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                      Verified {review.platform}
                    </span>
                  </div>

                  <p className="text-authority-navy text-lg md:text-2xl leading-relaxed font-black mb-10 italic relative z-10 drop-shadow-sm">
                    "{review.text}"
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center text-authority-navy font-black text-sm shadow-card">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-authority-navy font-black uppercase tracking-tight text-base">
                          {review.author}
                        </p>
                        <p className="text-slate-400 font-mono text-[10px] font-black uppercase tracking-[0.2em]">
                          {new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 bg-verified-bright/5 rounded-sm border border-verified-bright/10">
                      <CheckCircle2 className="w-4 h-4 text-verified-bright" />
                      <span className="text-[10px] md:text-[11px] font-black text-authority-navy uppercase tracking-[0.1em]">
                        Guided by {review.crewName}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10 p-10 md:p-12 bg-authority-navy rounded-md text-white overflow-hidden relative shadow-hover shadow-authority-navy/20"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="text-center sm:text-left relative z-10">
                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 leading-none">Ready to audit us?</h4>
                <p className="text-white/60 text-base font-light">Explore 700+ verified guest experiences across all platforms.</p>
              </div>
              <a 
                href="/why-jvto/reviews" 
                className="px-10 py-5 bg-safety-orange hover:bg-orange-600 text-white rounded-md font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all relative z-10 shadow-hover shadow-safety-orange/20"
              >
                View All Reviews
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
