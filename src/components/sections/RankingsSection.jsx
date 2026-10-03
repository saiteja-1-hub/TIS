import React from 'react';
import { Award } from 'lucide-react';
import Reveal from '../animation/Reveal';
import { tisData } from '../../data/tisData';

export default function RankingsSection() {
  return (
    <section id="rankings" className="section-rankings">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header">
            <span className="section-tag crimson">Accredited Excellence</span>
            <h2 className="section-title">
              National <span className="gold-highlight">Rankings & Awards</span>
            </h2>
            <p className="section-subtitle">
              Consistently recognized as one of India's leading residential institutions by premier educational surveys and statutory bodies.
            </p>
          </div>
        </Reveal>

        <div className="rankings-grid">
          {tisData.rankings.map((award, idx) => (
            <Reveal key={award.id} direction={idx % 2 === 0 ? 'right' : 'left'} delay={0.12 * idx}>
              <div className="ranking-card">
                <span className="ranking-badge-pill">{award.badge}</span>
                
                <div className="ranking-trophy-col">
                  <Award size={30} className="trophy-icon" />
                  <span className="rank-number">{award.rank}</span>
                </div>

                <div className="ranking-info">
                  <h3 className="ranking-category">{award.category}</h3>
                  <div className="ranking-location">{award.location}</div>
                  <p className="ranking-source">{award.source}</p>
                  <span className="ranking-year">Academic Year {award.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
