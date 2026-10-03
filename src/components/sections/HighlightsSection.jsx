import React from 'react';
import { Trees, Trophy, HeartPulse, Users } from 'lucide-react';
import Reveal from '../animation/Reveal';
import { tisData } from '../../data/tisData';

export default function HighlightsSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trees': return <Trees size={26} />;
      case 'Trophy': return <Trophy size={26} />;
      case 'HeartPulse': return <HeartPulse size={26} />;
      case 'Users': return <Users size={26} />;
      default: return <Trophy size={26} />;
    }
  };

  return (
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
            <Reveal key={stat.id} direction="up" delay={0.12 * idx}>
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  {getIcon(stat.icon)}
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
  );
}
