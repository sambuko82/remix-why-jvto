import React from 'react';
import { PageSEO } from '../components/PageSEO';
import { HeroSection } from '../components/home/HeroSection';
import { Differentiators } from '../components/home/Differentiators';
import { FounderSpotlight } from '../components/home/FounderSpotlight';
import { DestinationGrid } from '../components/home/DestinationGrid';
import { TourBrowser } from '../components/home/TourBrowser';
import { VerifyCTA } from '../components/home/VerifyCTA';
import { Footer } from '../components/home/Footer';
import { AuthorityShield } from '../components/home/AuthorityShield';
import { HealthFlow } from '../components/home/HealthFlow';
import { TrustHub } from '../components/home/TrustHub';
import { CrewSection } from '../components/CrewSection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { GuideAndFAQ } from '../components/home/GuideAndFAQ';
import { AuthorityDock } from '../components/home/AuthorityDock';
import { OperationalInquiry } from '../components/home/OperationalInquiry';
import { AtmosphericBreak } from '../components/home/AtmosphericBreak';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-audit-white font-sans text-authority-navy selection:bg-safety-orange/30">
      <PageSEO route="/" />

      {/* SECTION A-B: HERO */}
      <HeroSection />

      {/* SECTION D: DIFFERENTIATORS */}
      <Differentiators />

      {/* SECTION D.1: FOUNDER SPOTLIGHT */}
      <FounderSpotlight />

      {/* SECTION E: DESTINATIONS */}
      <DestinationGrid />

      {/* SECTION F: DEPARTURE CITY */}
      <TourBrowser />

      {/* SECTION I: MANDATORY REQUIREMENT */}
      <HealthFlow />

      {/* SECTION J: INTEGRATED TRUST HUB */}
      <TrustHub />

      {/* SECTION K: TEAM & CREW */}
      <CrewSection />

      {/* SECTION L: REVIEWS */}
      <ReviewsSection />

      {/* SECTION M & N: TRAVEL GUIDE & FAQ */}
      <GuideAndFAQ />

      {/* SECTION P: FOOTER */}
      <Footer />
    </div>
  );
}
