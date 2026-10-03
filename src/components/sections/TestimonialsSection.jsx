import React from 'react';
import { Star } from 'lucide-react';
import Reveal from '../animation/Reveal';
import { tisData } from '../../data/tisData';

export default function TestimonialsSection() {
  return (
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
            <Reveal key={t.id} direction="up" delay={0.12 * idx}>
              <div className="testimonial-card">
                <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#fbbf24" stroke="#fbbf24" />
                  ))}
                </div>

                <span className="testimonial-highlight-badge">{t.highlight}</span>

                <p className="testimonial-quote">"{t.quote}"</p>

                <div className="testimonial-author-block">
                  <div className="author-avatar" aria-hidden="true">
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
  );
}
