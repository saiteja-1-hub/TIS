import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ArrowRight, Phone } from 'lucide-react';
import { tisData } from '../../data/tisData';

export default function TourModal({ isOpen, onClose, onOpenEnquire }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div 
            className="modal-card"
            style={{ maxWidth: '780px' }}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2 }}
          >
            <button 
              className="modal-close-btn" 
              onClick={onClose}
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
                    onClose();
                    onOpenEnquire();
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
  );
}
