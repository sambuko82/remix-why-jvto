/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Existing Pages
import WhyJvto from './app/page';
import DestinationsHub from './app/destinations/page';
import DestinationDetail from './app/destinations/Detail';
import VerifyJvto from './app/verify-jvto/page';
import TravelGuideHub from './app/travel-guide/page';
import FAQPage from './app/travel-guide/faq/page';
import BookingInformation from './app/travel-guide/booking-information/page';
import IjenHealthScreening from './app/travel-guide/ijen-health-screening/page';
import PoliceEscort from './app/travel-guide/police-escort-for-groups/page';
import SafetyOnTours from './app/travel-guide/safety-on-tours/page';
import WeatherClosures from './app/travel-guide/weather-and-closures/page';
import PackingAndFitness from './app/travel-guide/packing-and-fitness/page';
import BookingPaymentCancellation from './app/policy/booking-payment-cancellation/page';
import InclusionsExclusions from './app/policy/inclusions-exclusions/page';
import PrivacyPolicy from './app/policy/privacy/page.tsx';
import ISICStudentPackage from './app/isic/student-package/page';
import PressRecognitionPage from './app/verify-jvto/press-recognition/page';
import LegalProof from './app/verify-jvto/legal/page';
import PoliceSafetyProof from './app/verify-jvto/police-safety/page';
import HistoryArtifactsProof from './app/verify-jvto/history-artifacts/page';
import CrewProfile from './app/team/ProfilePage';
import TeamRegistryPage from './app/team/page';
import ToursHub from './app/tours/page';
import TourDetail from './app/tours/Detail';
import WhyJvtoHub from './app/why-jvto/page';
import JVTODifference from './app/why-jvto/the-jvto-difference/page';
import SafetyLeadership from './app/why-jvto/safety-leadership/page';
import OurStory from './app/why-jvto/our-story/page';
import CommunityStandards from './app/why-jvto/community-standards/page';
import ReviewsPage from './app/why-jvto/reviews/page';
import { GlobalLayout } from './components/GlobalLayout';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GlobalLayout>
          <Routes>
            {/* Main Hub */}
            <Route path="/" element={<WhyJvto />} />

            {/* Destinations Cluster */}
            <Route path="/destinations" element={<DestinationsHub />} />
            <Route path="/destinations/:destinationId" element={<DestinationDetail />} />

            {/* Trust Hub */}
            <Route path="/why-jvto" element={<WhyJvtoHub />} />
            <Route path="/why-jvto/safety-leadership" element={<SafetyLeadership />} />
            <Route path="/why-jvto/our-story" element={<OurStory />} />
            <Route path="/why-jvto/our-team" element={<Navigate to="/team" replace />} />
            <Route path="/why-jvto/the-jvto-difference" element={<JVTODifference />} />
            <Route path="/why-jvto/proof-transparency" element={<Navigate to="/verify-jvto" replace />} />
            <Route path="/why-jvto/local-team-operations" element={<Navigate to="/team" replace />} />
            <Route path="/why-jvto/community-standards" element={<CommunityStandards />} />
            <Route path="/why-jvto/guest-voices-reviews" element={<ReviewsPage />} />

            {/* Proof Library (SSOT dedicated hub) */}
            <Route path="/verify-jvto" element={<VerifyJvto />} />
            <Route path="/verify-jvto/press-recognition" element={<PressRecognitionPage />} />
            <Route path="/verify-jvto/legal" element={<LegalProof />} />
            <Route path="/verify-jvto/police-safety" element={<PoliceSafetyProof />} />
            <Route path="/verify-jvto/history-artifacts" element={<HistoryArtifactsProof />} />
            <Route path="/verify-jvto/partners" element={<Navigate to="/verify-jvto#partners" replace />} />
            <Route path="/verify-jvto/partners/:partnerId" element={<Navigate to="/verify-jvto#partners" replace />} />

            {/* Crew Registry */}
            <Route path="/team/:crewId" element={<CrewProfile />} />
            <Route path="/team" element={<TeamRegistryPage />} />

            {/* Travel Guide */}
            <Route path="/travel-guide" element={<TravelGuideHub />} />
            <Route path="/travel-guide/faq" element={<FAQPage />} />
            <Route path="/travel-guide/booking-information" element={<BookingInformation />} />
            <Route path="/travel-guide/ijen-health-screening" element={<IjenHealthScreening />} />
            <Route path="/travel-guide/police-escort-for-groups" element={<PoliceEscort />} />
            <Route path="/travel-guide/safety-on-tours" element={<SafetyOnTours />} />
            <Route path="/travel-guide/weather-and-closures" element={<WeatherClosures />} />
            <Route path="/travel-guide/packing-and-fitness" element={<PackingAndFitness />} />

            {/* Itinerary Cluster */}
            <Route path="/tours" element={<ToursHub />} />
            <Route path="/tours/:departure/:slug" element={<TourDetail />} />
            <Route path="/tour/:slug" element={<Navigate to="/tours" replace />} />

            {/* Reviews Registry */}
            <Route path="/reviews" element={<ReviewsPage />} />

            {/* Policy */}
            <Route path="/policy/booking-payment-cancellation" element={<BookingPaymentCancellation />} />
            <Route path="/policy/inclusions-exclusions" element={<InclusionsExclusions />} />
            <Route path="/policy/privacy" element={<PrivacyPolicy />} />

            {/* Partner Landing Page */}
            <Route path="/isic/student-package" element={<ISICStudentPackage />} />

            {/* Legacy Redirects */}
            <Route path="/verify" element={<Navigate to="/verify-jvto" replace />} />
            <Route path="/ijen-health-screening" element={<Navigate to="/travel-guide/ijen-health-screening" replace />} />
            <Route path="/press" element={<Navigate to="/verify-jvto/press-recognition" replace />} />
            <Route path="/faq" element={<Navigate to="/travel-guide/faq" replace />} />
            <Route path="/crew/:crewId" element={<Navigate to="/team/:crewId" replace />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </GlobalLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
