import React from 'react';
import { ArrowRight, Play, CheckCircle, Sparkles } from 'lucide-react';
import Reveal from '../animation/Reveal';
import { tisData } from '../../data/tisData';

export default function HeroSection({ onOpenEnquire, onOpenTour }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            {/* Admissions Status Badge */}
            <Reveal direction="down" delay={0.1}>
              <div className="admissions-badge">
                <span className="badge-beacon" />
                <span className="badge-text">
                  {tisData.brand.admissionsOpenText.split('2025-26')[0]}
                  <span className="badge-year">2025-26</span>
                </span>
              </div>
            </Reveal>

            {/* Primary Value Proposition Headline */}
            <Reveal direction="up" delay={0.2}>
              <h1 className="hero-headline">
                Where Ancient <span className="text-gold">Gurukul Wisdom</span> Meets Modern Global <span className="text-crimson">Excellence</span>.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="hero-description">
                Nestled in the tranquil Himalayan foothills of Dehradun, TIS fosters holistic scholars, 
                state athletes, and grounded global leaders through our tailored <strong>6:1 student-teacher ratio</strong> and 
                unrivaled residential mentorship.
              </p>
            </Reveal>

            {/* Direct CTAs */}
            <Reveal direction="up" delay={0.4}>
              <div className="hero-cta-group">
                <button 
                  id="hero-apply-btn"
                  className="btn-primary"
                  onClick={onOpenEnquire}
                >
                  <span>Apply for Admissions</span>
                  <ArrowRight size={18} />
                </button>

                <button 
                  id="hero-tour-btn"
                  className="btn-secondary"
                  onClick={onOpenTour}
                >
                  <Play size={16} fill="currentColor" />
                  <span>Watch Virtual Tour</span>
                </button>
              </div>
            </Reveal>

            {/* Quick Trust Highlights Banner */}
            <Reveal direction="up" delay={0.5}>
              <div className="hero-trust-row">
                <div className="trust-item">
                  <CheckCircle size={16} />
                  <span>CBSE Affiliated (Grades IV-XII)</span>
                </div>
                <div className="trust-item">
                  <CheckCircle size={16} />
                  <span>Co-Educational Boarding</span>
                </div>
                <div className="trust-item">
                  <CheckCircle size={16} />
                  <span>Dehradun Foothills</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Interactive Visual Card */}
          <Reveal direction="left" delay={0.35}>
            <div className="hero-visual-card">
              <div className="visual-top-badge">
                <Sparkles size={14} />
                <span>Immersive Campus Tour</span>
              </div>

              <div 
                className="visual-preview-box interactive-target" 
                onClick={onOpenTour} 
                role="button" 
                tabIndex={0}
                aria-label="Open 360 Campus Tour"
              >
                <div className="visual-art-overlay" />
                <div className="visual-play-pill" title="Click to view campus tour">
                  <Play size={24} fill="#ffffff" style={{ marginLeft: '3px' }} />
                </div>
                <div className="visual-preview-content">
                  <div className="visual-preview-title">Tula's 22-Acre Campus Experience</div>
                  <div className="visual-preview-sub">Dehradun, Uttarakhand • Virtual 360 Walkthrough</div>
                </div>
              </div>

              <div className="quick-stats-row">
                <div className="quick-stat-box">
                  <div className="quick-stat-val">#1</div>
                  <div className="quick-stat-lbl">Co-Ed School Dehradun</div>
                </div>
                <div className="quick-stat-box">
                  <div className="quick-stat-val">100%</div>
                  <div className="quick-stat-lbl">CBSE Board Pass Record</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
