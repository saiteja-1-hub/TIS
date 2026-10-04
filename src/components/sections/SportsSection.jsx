import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import Reveal from '../animation/Reveal';
import { tisData } from '../../data/tisData';

export default function SportsSection() {
  const sports = tisData.sports;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);


  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 560) {
        setVisibleCount(1);
      } else if (width < 860) {
        setVisibleCount(2);
      } else if (width < 1180) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, sports.length - visibleCount);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);


  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);


  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const slideWidthPercent = 100 / visibleCount;

  return (
    <section id="sports" className="section-sports">
      <div className="container">

        <Reveal direction="up">
          <div className="sports-section-header">
            <div>
              <span className="section-tag">Athletic Leadership</span>
              <h2 className="section-title">
                Olympic & Championship <span className="gold-highlight">Sports</span>
              </h2>
              <p className="section-subtitle">
                Explore our world-class sporting facilities with NIS-certified coaches across international-grade courts, arenas, and ranges.
              </p>
            </div>


            <div className="sports-carousel-arrows">
              <button
                className="sports-arrow-btn"
                onClick={handlePrev}
                aria-label="Previous Sports Slide"
                title="Previous Sport"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="sports-arrow-btn"
                onClick={handleNext}
                aria-label="Next Sports Slide"
                title="Next Sport"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </Reveal>


        <div
          className="sports-carousel-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="sports-carousel-track"
            style={{
              transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
              transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            {sports.map((sport) => (
              <div
                key={sport.id}
                className="sports-carousel-slide"
                style={{ width: `${slideWidthPercent}%` }}
              >
                <div className="sport-carousel-card">

                  <div className="sport-carousel-img-wrap">
                    <img
                      src={sport.image}
                      alt={sport.name}
                      className="sport-carousel-img"
                      loading="lazy"
                    />
                    <div className="sport-card-glow" />
                    <span className="sport-carousel-badge">{sport.badge}</span>
                  </div>


                  <div className="sport-carousel-body">
                    <span className="sport-carousel-category">{sport.category}</span>
                    <h3 className="sport-carousel-title">{sport.name}</h3>
                    <p className="sport-carousel-desc">{sport.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="sports-carousel-dots" aria-label="Sports Carousel Pagination">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`sports-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to sport slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
