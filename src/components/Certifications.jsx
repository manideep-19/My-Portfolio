import React from 'react';
import { Award, Calendar, CheckCircle2, Trophy, Sparkles } from 'lucide-react';
import { certificationsData, achievementsData } from '../data/projects';

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrap certifications-section">
      <div className="container">
        {/* Achievements Spotlight Banner */}
        <div className="achievements-banner mechanical-box">
          <div className="achievements-header">
            <Trophy size={20} />
            <span>&gt;_ VERIFIED_ACHIEVEMENTS_AND_IMPACT</span>
          </div>

          <div className="achievements-stats-grid">
            {achievementsData.map((ach) => (
              <div key={ach.label} className="achievement-stat-card">
                <div className="ach-num-row">
                  <span className="ach-stat-value">{ach.stat}</span>
                  <Sparkles size={16} className="text-amber" />
                </div>
                <div className="ach-stat-label">{ach.label}</div>
                <div className="ach-stat-desc">&gt;_ {ach.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="section-header" style={{ marginTop: '5rem' }}>
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>&gt;_ CREDENTIALS_AND_HONORS // 07</span>
          </div>
          <h2 className="section-heading">Certifications</h2>
          <p className="section-description">
            Verified academic honors, hackathon achievements, and technical credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div key={cert.title} className="cert-card mechanical-box">
              <div className="cert-card-header">
                <div className="cert-icon-box">
                  <Award size={22} />
                </div>
                <div className="cert-cat-pill">[{cert.category}]</div>
              </div>

              <h4 className="cert-title">{cert.title}</h4>
              <div className="cert-org">&gt;_ {cert.organization}</div>

              <p className="cert-desc">{cert.desc}</p>

              <div className="cert-card-footer">
                <span className="cert-date">
                  <Calendar size={13} /> [{cert.date}]
                </span>
                <span className="cert-verified-badge">
                  <CheckCircle2 size={13} /> VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
