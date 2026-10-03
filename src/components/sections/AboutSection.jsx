import React from 'react';
import { Shield } from 'lucide-react';
import Reveal from '../animation/Reveal';
import { tisData } from '../../data/tisData';

export default function AboutSection() {
  return (
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
                <div 
                  className="stat-icon-wrapper" 
                  style={{ 
                    background: 'rgba(251, 191, 36, 0.1)', 
                    borderColor: 'rgba(251, 191, 36, 0.3)' 
                  }}
                >
                  <Shield size={24} style={{ color: 'var(--gold-primary)' }} />
                </div>
                <h3 className="stat-label" style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>
                  {pillar.title}
                </h3>
                <p className="stat-description">{pillar.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
