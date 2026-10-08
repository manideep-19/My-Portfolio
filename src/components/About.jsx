import React from 'react';
import { Lightbulb, Compass, Code, Cpu, Rocket, Gauge, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/soundEngine';
import { personalInfo } from '../data/projects';

const stepIcons = [
  <Lightbulb key="01" size={20} className="step-icon" />,
  <Compass key="02" size={20} className="step-icon" />,
  <Code key="03" size={20} className="step-icon" />,
  <Cpu key="04" size={20} className="step-icon" />,
  <Rocket key="05" size={20} className="step-icon" />,
  <Gauge key="06" size={20} className="step-icon" />
];

export default function About() {
  return (
    <section id="about" className="section-wrap about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>&gt;_ PRODUCT-FOCUSED ENGINEERING // 01</span>
          </div>
          <h2 className="section-heading">About Me</h2>
          <p className="section-description">
            Bridging technical depth with user experience to deliver scalable software and connected devices.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="about-narrative-card mechanical-box">
          <div className="narrative-content">
            <p className="narrative-lead">
              {personalInfo.aboutText}
            </p>
            <p className="narrative-detail">
              My engineering approach is anchored in end-to-end accountability. Rather than isolating frontend from backend or mobile from hardware, I look at the entire operational loop: how doctors interact with tap-to-access cards in clinical OPD rooms, how safety applications trigger emergency SMS links under zero-connectivity, or how freelance mobile applications securely handle payment checkouts and third-party partner SDKs.
            </p>
          </div>

          <div className="narrative-aside">
            <div className="aside-stat-box">
              <span className="aside-stat-num">[01]</span>
              <span className="aside-stat-title">End-to-End Ownership</span>
              <span className="aside-stat-desc">From system architecture and database design to cross-platform mobile and edge hardware.</span>
            </div>
            <div className="aside-stat-box">
              <span className="aside-stat-num">[02]</span>
              <span className="aside-stat-title">Pragmatic Tech Choice</span>
              <span className="aside-stat-desc">Selecting the right tools for throughput, offline resilience, and user experience—never resume padding.</span>
            </div>
          </div>
        </div>

        {/* Complete Development Lifecycle */}
        <div className="lifecycle-wrapper">
          <div className="lifecycle-header">
            <div className="lifecycle-header-top">
              <span className="lifecycle-tag">&gt;_ LIFECYCLE_ARCHITECTURE // 6-STAGE ENGINE</span>
              <span className="lifecycle-cadence">01. DISCOVERY ➔ 02. ARCHITECTURE ➔ 03. BUILD ➔ 04. INTEGRATION ➔ 05. SHIP ➔ 06. SCALE</span>
            </div>
            <h3 className="lifecycle-title">The Complete Product Lifecycle</h3>
            <p className="lifecycle-sub">
              How I turn complex real-world requirements into resilient, sub-second production systems:
            </p>
          </div>

          {/* Symmetrical 3x2 Engineering Matrix */}
          <div className="lifecycle-matrix-grid">
            {personalInfo.lifecycleSteps.map((step, idx) => (
              <div
                key={step.step}
                className="lifecycle-matrix-card mechanical-box"
                onMouseEnter={() => sound.playHover()}
              >
                <div className="matrix-card-header">
                  <div className="matrix-step-badge">
                    <span className="matrix-step-num">[{step.step}]</span>
                    <span className="matrix-step-phase">{step.phase}</span>
                  </div>
                  <div className="matrix-icon-box">
                    {stepIcons[idx]}
                  </div>
                </div>

                <div className="matrix-card-body">
                  <h4 className="matrix-step-title">{step.title}</h4>
                  <p className="matrix-step-desc">{step.desc}</p>
                </div>

                <div className="matrix-card-footer">
                  <div className="matrix-deliverable">
                    <CheckCircle2 size={13} className="matrix-check-icon text-orange" />
                    <span>{step.deliverable}</span>
                  </div>
                  <span className="matrix-focus-chip">{step.focusTag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
