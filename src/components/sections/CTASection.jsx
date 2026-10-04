import React from 'react';
import { ChevronRight, Phone, Check } from 'lucide-react';
import Reveal from '../animation/Reveal';
import { tisData } from '../../data/tisData';

export default function CTASection({ onOpenEnquire }) {
  return (
    <section className="section-cta-banner">
      <div className="container">
        <Reveal direction="up">
          <div className="cta-banner-box">
            <div className="cta-banner-bg" aria-hidden="true" />
            <div className="cta-banner-inner">
              <div>
                <h2 className="cta-banner-title">
                  Give Your Child The Advantage Of Holistic Excellence.
                </h2>
                <p className="cta-banner-desc">
                  Limited seats available for Academic Session 2025-26. Schedule a campus visit or begin your admission application online today.
                </p>
                <div className="cta-trust-items-row">
                  <div className="trust-item cta-trust-item">
                    <Check size={18} />
                    <span>Direct Interaction with Housemasters</span>
                  </div>
                  <div className="trust-item cta-trust-item">
                    <Check size={18} />
                    <span>Merit Scholarship Assessments</span>
                  </div>
                </div>
              </div>

              <div className="cta-banner-actions">
                <button
                  id="banner-enquire-cta"
                  className="btn-gold"
                  onClick={onOpenEnquire}
                >
                  <span>Request Admission Prospectus</span>
                  <ChevronRight size={18} />
                </button>

                <a
                  href={`tel:${tisData.brand.phoneRaw}`}
                  className="cta-direct-phone"
                >
                  <Phone size={18} />
                  <span>Call Admissions: {tisData.brand.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
