import React from 'react';
import { Trees, Trophy, HeartPulse, Users } from 'lucide-react';
import Reveal from '../animation/Reveal';
import { tisData } from '../../data/tisData';

const iconMap = {
  Trees,
  Trophy,
  HeartPulse,
  Users,
};

export default function HighlightsSection() {
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
          {tisData.stats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Trophy;
            return (
              <Reveal key={stat.id} direction="up" delay={0.12 * idx}>
                <div className="stat-card stat-card-visual">

                  <div className="stat-card-img-wrap">
                    <img
                      src={stat.image}
                      alt={stat.label}
                      className="stat-card-img"
                      loading="lazy"
                    />
                    <div className="stat-card-img-overlay" />

                    <div className="stat-card-metric-badge">
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-unit">{stat.unit}</span>
                    </div>
                  </div>


                  <div className="stat-card-body">
                    <div className="stat-card-icon-row">
                      <div className="stat-icon-wrapper">
                        <IconComponent size={22} />
                      </div>
                    </div>
                    <h3 className="stat-label">{stat.label}</h3>
                    <p className="stat-description">{stat.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
