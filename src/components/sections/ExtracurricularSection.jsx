import React, { useState } from 'react';
import { Sparkles, Palette, Crosshair, FlaskConical, Trophy, Shield, Award } from 'lucide-react';
import Reveal from '../animation/Reveal';
import { tisData } from '../../data/tisData';

const iconMap = {
  arts: Sparkles,
  pottery: Palette,
  shooting: Crosshair,
  science: FlaskConical,
  cricket: Trophy,
  karate: Shield,
};

export default function ExtracurricularSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Arts & Culture', 'Sports & Adventure'];

  const filteredItems = tisData.extracurricular.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Arts & Culture') {
      return ['arts', 'pottery', 'science'].includes(item.id);
    }
    if (activeFilter === 'Sports & Adventure') {
      return ['shooting', 'cricket', 'karate'].includes(item.id);
    }
    return true;
  });

  return (
    <section id="extracurricular" className="section-extracurricular">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header">
            <span className="section-tag">Beyond Academics</span>
            <h2 className="section-title">
              Holistic <span className="gold-highlight">Extracurricular</span> Activities
            </h2>
            <p className="section-subtitle">
              Nurturing creative self-expression, mental discipline, and athletic prowess through state-of-the-art studios, arenas, and certified mentors.
            </p>
          </div>
        </Reveal>


        <Reveal direction="up" delay={0.1}>
          <div className="filter-tabs-wrapper">
            <div className="sports-filter-tabs">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`sports-filter-btn ${activeFilter === opt ? 'active' : ''}`}
                  onClick={() => setActiveFilter(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </Reveal>


        <div className="activities-grid">
          {filteredItems.map((act, index) => {
            const IconComponent = iconMap[act.id] || Award;
            return (
              <Reveal key={act.id} direction="up" delay={0.08 * (index % 3)}>
                <div className="activity-card">
                  <div className="activity-image-wrap">
                    <img
                      src={act.image}
                      alt={act.name}
                      className={`activity-image ${act.imageClass || ''}`}
                      style={act.imagePosition ? { objectPosition: act.imagePosition } : {}}
                      loading="lazy"
                    />
                    <div className="activity-image-gradient" />
                    <div className="activity-badge-pill">
                      <IconComponent size={14} />
                      <span>{act.badge}</span>
                    </div>
                  </div>

                  <div className="activity-card-body">
                    <span className="activity-category">{act.category}</span>
                    <h3 className="activity-title">{act.name}</h3>
                    <p className="activity-desc">{act.description}</p>
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
