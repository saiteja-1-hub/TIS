import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { tisData } from '../../data/tisData';

export default function Footer({ onOpenEnquire }) {
  return (
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
              onClick={onOpenEnquire}
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
  );
}
