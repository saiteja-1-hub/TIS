import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import Reveal from '../animation/Reveal';
import { tisData } from '../../data/tisData';

export default function SportsSection() {
  const [selectedSportCategory, setSelectedSportCategory] = useState('All');

  const categories = ['All', 'Equestrian', 'Olympic Spec', 'Racquet Sports', 'Field Sports', 'Indoor'];
  
  const filteredSports = tisData.sports.filter((sport) => {
    if (selectedSportCategory === 'All') return true;
    if (selectedSportCategory === 'Equestrian') return sport.category.toLowerCase().includes('equestrian');
    if (selectedSportCategory === 'Olympic Spec') return sport.badge.toLowerCase().includes('olympic') || sport.badge.toLowerCase().includes('pro');
    if (selectedSportCategory === 'Racquet Sports') return sport.category.toLowerCase().includes('racquet');
    if (selectedSportCategory === 'Field Sports') return sport.category.toLowerCase().includes('field') || sport.category.toLowerCase().includes('court') || sport.category.toLowerCase().includes('team');
    if (selectedSportCategory === 'Indoor') return sport.category.toLowerCase().includes('indoor') || sport.category.toLowerCase().includes('combat') || sport.category.toLowerCase().includes('club') || sport.category.toLowerCase().includes('wellness');
    return true;
  });

  return (
    <section id="sports" className="section-sports">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header">
            <span className="section-tag">Athletic Leadership</span>
            <h2 className="section-title">
              16+ Olympic & Modern <span className="gold-highlight">Sports Facilities</span>
            </h2>
            <p className="section-subtitle">
              Every student trains under NIS-certified coaches across international-grade courts, arenas, and ranges.
            </p>
          </div>
        </Reveal>

        {/* Category Tabs */}
        <Reveal direction="up" delay={0.1}>
          <div className="sports-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`sports-filter-btn ${selectedSportCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedSportCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Sports Grid */}
        <div className="sports-grid">
          {filteredSports.map((sport, idx) => (
            <Reveal key={sport.name} direction="up" delay={0.04 * (idx % 4)}>
              <div className="sport-card">
                <div className="sport-header">
                  <div className="sport-icon-box">
                    <Trophy size={20} />
                  </div>
                  <span className="sport-pill-tag">{sport.badge}</span>
                </div>

                <h3 className="sport-name">{sport.name}</h3>
                <span className="sport-category">{sport.category}</span>
                <p className="sport-desc">{sport.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
