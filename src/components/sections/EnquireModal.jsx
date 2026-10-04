import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { tisData } from '../../data/tisData';

export default function EnquireModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childGrade: 'Grade VI',
    city: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleClose = () => {
    setFormSubmitted(false);
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      childGrade: 'Grade VI',
      city: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <motion.div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.22 }}
          >
            <button
              className="modal-close-btn"
              onClick={handleClose}
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
                <button className="btn-primary" onClick={handleClose}>
                  Back to Homepage
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
