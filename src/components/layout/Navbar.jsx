import React, { useState, useEffect } from 'react';
import { Phone, Sparkles, Menu, X } from 'lucide-react';
import ThemeToggle from '../animation/ThemeToggle';
import { tisData } from '../../data/tisData';

export default function Navbar({ onOpenEnquire, mobileMenuOpen, setMobileMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          {/* Brand Logo & Crest */}
          <a href="#hero" className="brand-link" aria-label="Tula's International School Homepage">
            <div className="brand-crest">
              <span>TIS</span>
            </div>
            <div className="brand-text">
              <span className="brand-name">Tula's International</span>
              <span className="brand-sub">The Modern Gurukul • Dehradun</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-links" aria-label="Main Navigation">
            <a href="#highlights">Campus Stats</a>
            <a href="#rankings">Rankings & Awards</a>
            <a href="#sports">16+ Sports</a>
            <a href="#testimonials">Parent Reviews</a>
            <a href="#about">Why TIS</a>
          </nav>

          {/* Header Actions (Theme Toggle, Phone Link, Enquire CTA, Mobile Hamburger) */}
          <div className="header-actions">
            {/* Feature C: Animated Dark/Light Theme Switcher */}
            <ThemeToggle />

            {/* Quick Phone Contact */}
            <a 
              href={`tel:${tisData.brand.phoneRaw}`} 
              className="phone-quick-link"
              title="Call Admissions Office"
            >
              <span className="phone-dot" />
              <Phone size={15} />
              <span>{tisData.brand.phone}</span>
            </a>

            {/* Enquire Now Call to Action Button */}
            <button 
              id="header-enquire-btn"
              className="btn-primary"
              onClick={onOpenEnquire}
            >
              <Sparkles size={16} />
              <span>Enquire Now</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
