import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/projects';

export default function Experience() {
  return (
    <section id="experience" className="section-wrap experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>&gt;_ PROFESSIONAL_TRACK_RECORD // 06</span>
          </div>
          <h2 className="section-heading">Experience</h2>
          <p className="section-description">
            Startup technical leadership, freelance product engineering, and frontend team leadership in production environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-spine" />

          <div className="timeline-items">
            {experienceData.map((item) => (
              <div key={`${item.role}-${item.company}`} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot">
                    <Briefcase size={20} />
                  </div>
                </div>

                <div className="timeline-card mechanical-box">
                  <div className="timeline-card-header">
                    <div>
                      <h3 className="timeline-role">{item.role}</h3>
                      <div className="timeline-company">&gt;_ {item.company}</div>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-badge timeline-period">
                        <Calendar size={13} /> {item.period}
                      </span>
                      <span className="timeline-badge timeline-loc">
                        <MapPin size={13} /> {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Contributions List */}
                  <div className="timeline-contributions">
                    {item.contributions.map((c, idx) => (
                      <div key={idx} className="contribution-row">
                        <CheckCircle2 size={16} className="contribution-icon" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Used */}
                  <div className="timeline-tech-tags">
                    {item.tech.map((t) => (
                      <span key={t} className="timeline-tech-pill">[{t}]</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
