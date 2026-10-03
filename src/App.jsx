import React, { useState } from 'react';

// Animation & Interaction Drivers
import ScrollProgress from './components/animation/ScrollProgress';
import CustomCursor from './components/animation/CustomCursor';

// Layout Components
import Navbar from './components/layout/Navbar';
import MobileNav from './components/layout/MobileNav';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import HighlightsSection from './components/sections/HighlightsSection';
import RankingsSection from './components/sections/RankingsSection';
import SportsSection from './components/sections/SportsSection';
import AboutSection from './components/sections/AboutSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CTASection from './components/sections/CTASection';

// Modals
import EnquireModal from './components/sections/EnquireModal';
import TourModal from './components/sections/TourModal';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);

  return (
    <div className="tis-app">
      {/* Background Atmosphere Radial Glows */}
      <div className="bg-glow-container" aria-hidden="true">
        <div className="bg-glow-crimson" />
        <div className="bg-glow-gold" />
        <div className="bg-glow-bottom" />
      </div>

      {/* Feature A: Custom Mouse-Follower Cursor */}
      <CustomCursor />

      {/* Feature D: Top Reading Scroll Progress Bar */}
      <ScrollProgress />

      {/* Semantic Header: Navigation Bar */}
      <Navbar 
        onOpenEnquire={() => setEnquireModalOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Responsive Mobile Drawer */}
      <MobileNav 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenEnquire={() => setEnquireModalOpen(true)}
      />

      {/* Semantic Main Content */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection 
          onOpenEnquire={() => setEnquireModalOpen(true)}
          onOpenTour={() => setTourModalOpen(true)}
        />

        {/* 2. Campus Highlights (4-Card Metric Grid) */}
        <HighlightsSection />

        {/* 3. National Rankings & Awards */}
        <RankingsSection />

        {/* 4. Sports Facilities Showcase (16+ Sports) */}
        <SportsSection />

        {/* 5. Why TIS / Gurukul Pillars */}
        <AboutSection />

        {/* 6. Parent Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 7. High-Converting CTA Banner */}
        <CTASection onOpenEnquire={() => setEnquireModalOpen(true)} />
      </main>

      {/* Semantic Footer */}
      <Footer onOpenEnquire={() => setEnquireModalOpen(true)} />

      {/* Interactive Admission Enquiry Modal */}
      <EnquireModal 
        isOpen={enquireModalOpen}
        onClose={() => setEnquireModalOpen(false)}
      />

      {/* Interactive 360° Virtual Tour Modal */}
      <TourModal 
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        onOpenEnquire={() => setEnquireModalOpen(true)}
      />
    </div>
  );
}
