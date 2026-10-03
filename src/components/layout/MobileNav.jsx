import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Sparkles } from 'lucide-react';
import ThemeToggle from '../animation/ThemeToggle';
import { tisData } from '../../data/tisData';

export default function MobileNav({ isOpen, onClose, onOpenEnquire }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="mobile-nav-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <a href="#highlights" onClick={onClose}>Campus Highlights</a>
          <a href="#rankings" onClick={onClose}>Rankings & Accolades</a>
          <a href="#sports" onClick={onClose}>Sports Facilities</a>
          <a href="#testimonials" onClick={onClose}>Parent Testimonials</a>
          <a href="#about" onClick={onClose}>Why TIS</a>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--navy-border)' }}>
            {/* Theme Switcher in Mobile Drawer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.25rem 0' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Theme Appearance</span>
              <ThemeToggle showLabel={true} />
            </div>

            <a 
              href={`tel:${tisData.brand.phoneRaw}`}
              className="phone-quick-link"
              style={{ width: 'fit-content' }}
            >
              <Phone size={15} />
              <span>{tisData.brand.phone}</span>
            </a>

            <button 
              className="btn-primary" 
              style={{ width: '100%' }}
              onClick={() => {
                onClose();
                onOpenEnquire();
              }}
            >
              <Sparkles size={16} />
              <span>Enquire Now</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
