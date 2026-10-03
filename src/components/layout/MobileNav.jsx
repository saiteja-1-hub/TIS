import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Sparkles } from 'lucide-react';
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
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
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
