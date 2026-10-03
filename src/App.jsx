import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Award,
  CheckCircle,
  MapPin,
  Trophy,
  Trees,
  HeartPulse,
  Users,
  Star,
  ArrowRight,
  Shield,
  Play,
  X,
  Menu,
  Sparkles,
  GraduationCap,
  Calendar,
  Compass,
  Check,
  ChevronRight,
  Clock,
  BookOpen
} from 'lucide-react';

import ScrollProgress from './components/ScrollProgress';
import Reveal from './components/Reveal';
import { tisData } from './data/tisData';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [selectedSportCategory, setSelectedSportCategory] = useState('All');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childGrade: 'Grade VI',
    city: ''
  });

  // Track scroll position for header blur & border styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Category filter for sports
  const categories = ['All', 'Equestrian', 'Olympic Spec', 'Racquet Sports', 'Field Sports', 'Indoor'];
  
  const filteredSports = tisData.sports.filter((sport) => {
    if (selectedSportCategory === 'All') return true;
    if (selectedSportCategory === 'Equestrian') return sport.category.toLowerCase().includes('equestrian');
    if (selectedSportCategory === 'Olympic Spec') return sport.badge.toLowerCase().includes('olympic') || sport.badge.toLowerCase().includes('pro');
    if (selectedSportCategory === 'Racquet Sports') return sport.category.toLowerCase().includes('racquet');
    if (selectedSportCategory === 'Field Sports') return sport.category.toLowerCase().includes('field') || sport.category.toLowerCase().includes('court') || sport.category.toLowerCase().includes('team');
    if (selectedSportCategory === 'Indoor') return sport.category.toLowerCase().includes('indoor') || sport.category.toLowerCase().includes('combat') || sport.category.toLowerCase().includes('club') || sport.category.toLowerCase().includes('wellness');
    return true;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setEnquireModalOpen(false);
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      childGrade: 'Grade VI',
      city: ''
    });
  };

  return (
    <div className="tis-app">
      {/* Background Atmosphere Radial Glows */}
      <div className="bg-glow-container">
        <div className="bg-glow-crimson" />
        <div className="bg-glow-gold" />
        <div className="bg-glow-bottom" />
      </div>

      {/* Feature 1: Top Reading Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation: Fixed blurred glass header */}
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

            {/* Quick Phone Contact & Enquire CTA */}
            <div className="header-actions">
              <a 
                href={`tel:${tisData.brand.phoneRaw}`} 
                className="phone-quick-link"
                title="Call Admissions Office"
              >
                <span className="phone-dot" />
                <Phone size={15} />
                <span>{tisData.brand.phone}</span>
              </a>

              <button 
                id="header-enquire-btn"
                className="btn-primary"
                onClick={() => setEnquireModalOpen(true)}
              >
                <Sparkles size={16} />
                <span>Enquire Now</span>
              </button>

              {/* Mobile Menu Hamburger */}
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

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="mobile-nav-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <a href="#highlights" onClick={() => setMobileMenuOpen(false)}>Campus Highlights</a>
              <a href="#rankings" onClick={() => setMobileMenuOpen(false)}>Rankings & Accolades</a>
              <a href="#sports" onClick={() => setMobileMenuOpen(false)}>Sports Facilities</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Parent Testimonials</a>
              <a 
                href={`tel:${tisData.brand.phoneRaw}`}
                className="phone-quick-link"
                style={{ width: 'fit-content', marginTop: '0.5rem' }}
              >
                <Phone size={15} />
                <span>{tisData.brand.phone}</span>
              </a>
              <button 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '0.5rem' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setEnquireModalOpen(true);
                }}
              >
                Enquire Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
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
                  unmatched residential mentorship.
                </p>
              </Reveal>

              {/* Direct CTAs */}
              <Reveal direction="up" delay={0.4}>
                <div className="hero-cta-group">
                  <button 
                    id="hero-apply-btn"
                    className="btn-primary"
                    onClick={() => setEnquireModalOpen(true)}
                  >
                    <span>Apply for Admissions</span>
                    <ArrowRight size={18} />
                  </button>

                  <button 
                    id="hero-tour-btn"
                    className="btn-secondary"
                    onClick={() => setTourModalOpen(true)}
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

                <div className="visual-preview-box" onClick={() => setTourModalOpen(true)} role="button" tabIndex={0}>
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

      {/* Campus Highlights (4-Card Metric Grid) */}
      <section id="highlights" className="section-highlights">
        <div className="container">
          <Reveal direction="up">
            <div className="section-header">
              <span className="section-tag">Campus Metrics</span>
              <h2 className="section-title">
                World-Class Infrastructure Built For <span className="gold-highlight">Holistic Growth</span>
              </h2>
              <p className="section-subtitle">
                Carefully engineered facilities that bridge the finest academic rigor with physical endurance and caring pastoral support.
              </p>
            </div>
          </Reveal>

          <div className="stats-grid">
            {tisData.stats.map((stat, idx) => (
              <Reveal key={stat.id} direction="up" delay={0.15 * idx}>
                <div className="stat-card">
                  <div className="stat-icon-wrapper">
                    {stat.icon === 'Trees' && <Trees size={26} />}
                    {stat.icon === 'Trophy' && <Trophy size={26} />}
                    {stat.icon === 'HeartPulse' && <HeartPulse size={26} />}
                    {stat.icon === 'Users' && <Users size={26} />}
                  </div>

                  <div className="stat-number-wrap">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-unit">{stat.unit}</span>
                  </div>

                  <h3 className="stat-label">{stat.label}</h3>
                  <p className="stat-description">{stat.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings & Awards */}
      <section id="rankings" className="section-rankings">
        <div className="container">
          <Reveal direction="up">
            <div className="section-header">
              <span className="section-tag crimson">Accredited Excellence</span>
              <h2 className="section-title">
                National <span className="gold-highlight">Rankings & Awards</span>
              </h2>
              <p className="section-subtitle">
                Consistently recognized as one of India's leading residential institutions by premier educational surveys and statutory bodies.
              </p>
            </div>
          </Reveal>

          <div className="rankings-grid">
            {tisData.rankings.map((award, idx) => (
              <Reveal key={award.id} direction={idx % 2 === 0 ? 'right' : 'left'} delay={0.15 * idx}>
                <div className="ranking-card">
                  <span className="ranking-badge-pill">{award.badge}</span>
                  
                  <div className="ranking-trophy-col">
                    <Award size={30} className="trophy-icon" />
                    <span className="rank-number">{award.rank}</span>
                  </div>

                  <div className="ranking-info">
                    <h3 className="ranking-category">{award.category}</h3>
                    <div className="ranking-location">{award.location}</div>
                    <p className="ranking-source">{award.source}</p>
                    <span className="ranking-year">Academic Year {award.year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Showcase (16+ Sports Facilities) */}
      <section id="sports" className="section-sports">
        <div className="container">
          <Reveal direction="up">
            <div className="section-header">
              <span className="section-tag">Athletic Leadership</span>
              <h2 className="section-title">
                16+ Olympic & Modern <span className="gold-highlight">Sports Facilities</span>
              </h2>
              <p className="section-subtitle">
                Every student trains under NIS-certified coaches across international-grade courts, arenas, and ranges.
              </p>
            </div>
          </Reveal>

          {/* Category Tabs */}
          <Reveal direction="up" delay={0.1}>
            <div className="sports-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`sports-filter-btn ${selectedSportCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedSportCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Sports Grid */}
          <div className="sports-grid">
            {filteredSports.map((sport, idx) => (
              <Reveal key={sport.name} direction="up" delay={0.05 * (idx % 4)}>
                <div className="sport-card">
                  <div className="sport-header">
                    <div className="sport-icon-box">
                      <Trophy size={20} />
                    </div>
                    <span className="sport-pill-tag">{sport.badge}</span>
                  </div>

                  <h3 className="sport-name">{sport.name}</h3>
                  <span className="sport-category">{sport.category}</span>
                  <p className="sport-desc">{sport.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why TIS / Core Gurukul Pillars */}
      <section id="about" className="section-highlights" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <Reveal direction="up">
            <div className="section-header">
              <span className="section-tag">The TIS Distinction</span>
              <h2 className="section-title">
                The <span className="gold-highlight">Modern Gurukul</span> Ethos
              </h2>
              <p className="section-subtitle">
                Balancing ancient mindfulness and discipline with forward-thinking STEM curricula and global university pathways.
              </p>
            </div>
          </Reveal>

          <div className="stats-grid">
            {tisData.keyPillars.map((pillar, idx) => (
              <Reveal key={pillar.title} direction="up" delay={0.1 * idx}>
                <div className="stat-card" style={{ padding: '2rem 1.5rem' }}>
                  <div className="stat-icon-wrapper" style={{ background: 'rgba(251, 191, 36, 0.1)', borderColor: 'rgba(251, 191, 36, 0.3)' }}>
                    <Shield size={24} style={{ color: 'var(--gold-primary)' }} />
                  </div>
                  <h3 className="stat-label" style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>{pillar.title}</h3>
                  <p className="stat-description">{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials (2-Column Review Cards) */}
      <section id="testimonials" className="section-testimonials">
        <div className="container">
          <Reveal direction="up">
            <div className="section-header">
              <span className="section-tag crimson">Parent Voices</span>
              <h2 className="section-title">
                What <span className="gold-highlight">Parents Say</span> About TIS
              </h2>
              <p className="section-subtitle">
                Honest feedback from parents across India whose children have blossomed under our guidance.
              </p>
            </div>
          </Reveal>

          <div className="testimonials-grid">
            {tisData.testimonials.map((t, idx) => (
              <Reveal key={t.id} direction="up" delay={0.15 * idx}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#fbbf24" stroke="#fbbf24" />
                    ))}
                  </div>

                  <span className="testimonial-highlight-badge">{t.highlight}</span>

                  <p className="testimonial-quote">"{t.quote}"</p>

                  <div className="testimonial-author-block">
                    <div className="author-avatar">
                      {t.author.charAt(0)}
                    </div>
                    <div className="author-details">
                      <span className="author-name">{t.author}</span>
                      <span className="author-role">{t.role}</span>
                      <span className="author-location">{t.city}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner Section */}
      <section className="section-cta-banner">
        <div className="container">
          <Reveal direction="up">
            <div className="cta-banner-box">
              <div className="cta-banner-inner">
                <div>
                  <h2 className="cta-banner-title">
                    Give Your Child The Advantage Of Holistic Excellence.
                  </h2>
                  <p className="cta-banner-desc">
                    Limited seats available for Academic Session 2025-26. Schedule a campus visit or begin your admission application online today.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div className="trust-item" style={{ color: '#fef08a' }}>
                      <Check size={18} />
                      <span>Direct Interaction with Housemasters</span>
                    </div>
                    <div className="trust-item" style={{ color: '#fef08a' }}>
                      <Check size={18} />
                      <span>Merit Scholarship Assessments</span>
                    </div>
                  </div>
                </div>

                <div className="cta-banner-actions">
                  <button 
                    id="banner-enquire-cta"
                    className="btn-gold"
                    onClick={() => setEnquireModalOpen(true)}
                  >
                    <span>Request Admission Prospectus</span>
                    <ChevronRight size={18} />
                  </button>

                  <a 
                    href={`tel:${tisData.brand.phoneRaw}`} 
                    className="cta-direct-phone"
                  >
                    <Phone size={18} />
                    <span>Call Admissions: {tisData.brand.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Brand & Contact */}
            <div>
              <div className="brand-link" style={{ marginBottom: '1rem' }}>
                <div className="brand-crest">
                  <span>TIS</span>
                </div>
                <div className="brand-text">
                  <span className="brand-name">Tula's International</span>
                  <span className="brand-sub">The Modern Gurukul</span>
                </div>
              </div>
              <p className="footer-brand-desc">
                A premier co-educational CBSE boarding school located in Dehradun, combining ancient Gurukul heritage with 21st-century academic and athletic infrastructure.
              </p>
              <a href={`tel:${tisData.brand.phoneRaw}`} className="footer-phone-cta">
                <Phone size={16} />
                <span>Direct Desk: {tisData.brand.phone}</span>
              </a>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="footer-col-title">Quick Navigation</h4>
              <ul className="footer-links">
                <li><a href="#hero">Overview & Admissions</a></li>
                <li><a href="#highlights">Campus Stats & 22-Acres</a></li>
                <li><a href="#rankings">National Rankings</a></li>
                <li><a href="#sports">16+ Sports Complex</a></li>
                <li><a href="#testimonials">Parent Testimonials</a></li>
              </ul>
            </div>

            {/* Col 3: Academic Programs */}
            <div>
              <h4 className="footer-col-title">Academics & Life</h4>
              <ul className="footer-links">
                <li><a href="#about">Gurukul Pedagogy</a></li>
                <li><a href="#highlights">6:1 Faculty Mentorship</a></li>
                <li><a href="#sports">Olympic Coaching</a></li>
                <li><a href="#highlights">24/7 Infirmary & Hospital Care</a></li>
                <li><a href="#about">Career Counseling Cell</a></li>
              </ul>
            </div>

            {/* Col 4: Campus Location */}
            <div>
              <h4 className="footer-col-title">Campus Address</h4>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>{tisData.brand.address}</span>
              </div>
              <div className="footer-contact-item">
                <Clock size={18} />
                <span>Office Hours: Mon - Sat: 9:00 AM - 5:30 PM IST</span>
              </div>
              <button 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '1rem', padding: '0.6rem 1rem' }}
                onClick={() => setEnquireModalOpen(true)}
              >
                Book Campus Visit
              </button>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>
              © {new Date().getFullYear()} Tula's International School, Dehradun. All rights reserved.
            </div>
            <div className="footer-policy-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Mandatory Public Disclosure</a>
              <a href="#">CBSE Affiliation Info</a>
              <a href="#">Terms of Admission</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Admission Enquiry Modal */}
      <AnimatePresence>
        {enquireModalOpen && (
          <div className="modal-overlay" onClick={resetForm}>
            <motion.div 
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              <button 
                className="modal-close-btn" 
                onClick={resetForm}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {!formSubmitted ? (
                <>
                  <h3 className="modal-title">Enquire For Admissions</h3>
                  <p className="modal-subtitle">
                    Academic Year 2025-26 • Grades IV to XII • Fill the form below to receive syllabus, fee structure & prospectus.
                  </p>

                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label className="form-label">Parent / Guardian Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="form-input"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">Phone Number *</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="e.g. +91 98765 43210"
                          className="form-input"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Grade Applying For *</label>
                        <select 
                          className="form-select"
                          value={formData.childGrade}
                          onChange={(e) => setFormData({ ...formData, childGrade: e.target.value })}
                        >
                          <option value="Grade IV">Grade IV</option>
                          <option value="Grade V">Grade V</option>
                          <option value="Grade VI">Grade VI</option>
                          <option value="Grade VII">Grade VII</option>
                          <option value="Grade VIII">Grade VIII</option>
                          <option value="Grade IX">Grade IX</option>
                          <option value="Grade X">Grade X</option>
                          <option value="Grade XI (Science)">Grade XI (Science)</option>
                          <option value="Grade XI (Commerce)">Grade XI (Commerce)</option>
                          <option value="Grade XI (Humanities)">Grade XI (Humanities)</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="parent@example.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Current City</label>
                      <input 
                        type="text" 
                        placeholder="e.g. New Delhi / Dehradun / Dubai"
                        className="form-input"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary" 
                      style={{ width: '100%', marginTop: '0.75rem', padding: '0.85rem' }}
                    >
                      <span>Submit Admission Enquiry</span>
                      <ArrowRight size={18} />
                    </button>

                    <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      🔒 Your information is confidential. Our admissions team connects within 24 hours.
                    </div>
                  </form>
                </>
              ) : (
                <div className="modal-success-box">
                  <CheckCircle className="success-icon" />
                  <h3 className="modal-title" style={{ color: '#22c55e' }}>Enquiry Received!</h3>
                  <p className="modal-subtitle" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.parentName || 'Parent'}</strong>. Our Senior Admissions Counselor has been notified and will contact you at <strong>{formData.phone || tisData.brand.phone}</strong> with the 2025-26 prospectus and fee details.
                  </p>
                  <button className="btn-primary" onClick={resetForm}>
                    Back to Homepage
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Interactive Virtual Tour Modal */}
      <AnimatePresence>
        {tourModalOpen && (
          <div className="modal-overlay" onClick={() => setTourModalOpen(false)}>
            <motion.div 
              className="modal-card"
              style={{ maxWidth: '780px' }}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
            >
              <button 
                className="modal-close-btn" 
                onClick={() => setTourModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <h3 className="modal-title">TIS Dehradun 360° Campus Tour</h3>
              <p className="modal-subtitle">
                Explore our 22-acre campus nestled in the tranquil foothills of Chakrata Road, Dehradun.
              </p>

              <div style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#070a12',
                border: '1px solid rgba(251, 191, 36, 0.25)',
                padding: '2.5rem 1.5rem',
                textAlign: 'center'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'var(--crimson-primary)',
                  border: '2px solid var(--gold-primary)',
                  boxShadow: '0 0 30px var(--crimson-glow)',
                  marginBottom: '1.5rem'
                }}>
                  <Play size={32} fill="#ffffff" style={{ marginLeft: '4px' }} />
                </div>
                <h4 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: '#ffffff' }}>
                  Aerial & Campus Walkthrough Video
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                  Tour our Olympic shooting range, equestrian horse riding paddocks, semi-Olympic all-weather swimming pool, modern boarding houses, and smart digital classrooms.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button 
                    className="btn-primary"
                    onClick={() => {
                      setTourModalOpen(false);
                      setEnquireModalOpen(true);
                    }}
                  >
                    <span>Schedule an In-Person Campus Visit</span>
                    <ArrowRight size={16} />
                  </button>
                  <a 
                    href={`tel:${tisData.brand.phoneRaw}`} 
                    className="btn-secondary"
                  >
                    <Phone size={16} />
                    <span>Call Desk: {tisData.brand.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
