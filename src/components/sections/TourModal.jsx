import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Phone } from 'lucide-react';
import { tisData } from '../../data/tisData';

export default function TourModal({ isOpen, onClose, onOpenEnquire }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div
            className="modal-card tour-modal-card"
            style={{ maxWidth: '840px', width: '95%' }}
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

            <h3 className="modal-title">TIS Dehradun Official Campus Tour</h3>
            <p className="modal-subtitle">
              Explore our 22-acre modern Gurukul campus nestled in the serene foothills of Dehradun.
            </p>


            <div
              className="tour-video-container"
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '14px',
                background: '#000000',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                marginBottom: '1.5rem'
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/zWlXJPTb_Vk?autoplay=1&rel=0"
                title="Tula's International School | Campus Tour | Dehradun"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Experience Olympic sports facilities, equestrian arena, robotics labs & residential boarding houses.
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  className="btn-primary"
                  onClick={() => {
                    onClose();
                    onOpenEnquire();
                  }}
                >
                  <span>Schedule Campus Visit</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href={`tel:${tisData.brand.phoneRaw}`}
                  className="btn-secondary"
                >
                  <Phone size={16} />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
