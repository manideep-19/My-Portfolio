import React from 'react';
import {
  Briefcase,
  Layers,
  CreditCard,
  Smartphone,
  Server,
  ArrowRight,
  CheckCircle2,
  Play
} from 'lucide-react';
import { freelanceWork, featuredProjects } from '../data/projects';

const capabilityIcons = [
  <Layers key="0" size={24} />,
  <CreditCard key="1" size={24} />,
  <Smartphone key="2" size={24} />,
  <Server key="3" size={24} />
];

export default function FreelanceSection({ onSelectProject }) {
  const proofboxProject = featuredProjects.find((p) => p.id === 'proofbox');
  const intobuddyProject = featuredProjects.find((p) => p.id === 'intobuddy');

  return (
    <section id="freelance" className="section-wrap freelance-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>&gt;_ CLIENT &amp; PRODUCT DELIVERY // 04</span>
          </div>
          <h2 className="section-heading">{freelanceWork.title}</h2>
          <p className="section-description">
            {freelanceWork.description}
          </p>
        </div>

        {/* Client Engineering Capabilities Grid */}
        <div className="freelance-capabilities-grid">
          {freelanceWork.capabilities.map((cap, idx) => (
            <div key={cap.title} className="freelance-cap-card mechanical-box">
              <div className="cap-icon-box">
                {capabilityIcons[idx]}
              </div>
              <h4 className="cap-title">{cap.title}</h4>
              <p className="cap-desc">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Featured Freelance Deliverables Showcase */}
        <div className="freelance-deliverables-wrap">
          <div className="deliverables-header">
            <Briefcase size={16} />
            <span>&gt;_ SHIPPED FREELANCE DELIVERABLES</span>
          </div>

          <div className="deliverables-grid">
            {/* Deliverable 1: Proofbox */}
            <div className="deliverable-card mechanical-box">
              <div className="deliverable-header">
                <div>
                  <span className="deliverable-badge">★ FINTECH &amp; DOCUMENT VAULT</span>
                  <h4 className="deliverable-title">Proofbox — Mobile Application</h4>
                </div>
                <span className="deliverable-period">[2025]</span>
              </div>
              <p className="deliverable-desc">
                Engineered a digital invoice and warranty manager from scratch. Integrated <strong>Razorpay payment gateway</strong> for transactions, embedded <strong>Hubble SDK</strong> session management with logout invalidation, and implemented <strong>GoWarranty</strong> tracking with biometric lock and expiry push notifications.
              </p>
              <div className="deliverable-pills">
                <span>[Flutter]</span>
                <span>[Razorpay SDK]</span>
                <span>[Hubble SDK]</span>
                <span>[GoWarranty]</span>
                <span>[Firebase]</span>
                <span>[Biometrics]</span>
              </div>
              <div className="deliverable-actions">
                <button
                  type="button"
                  className="btn-deliverable-inspect"
                  onClick={() => proofboxProject && onSelectProject(proofboxProject)}
                >
                  <span>INSPECT_DELIVERABLE</span>
                  <ArrowRight size={14} />
                </button>
                {proofboxProject?.playStore && (
                  <a
                    href={proofboxProject.playStore}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-deliverable-store"
                    title="Download Proofbox on Google Play Store"
                  >
                    <Play size={13} className="fill-current text-orange" />
                    <span>PLAY STORE</span>
                  </a>
                )}
              </div>
            </div>

            {/* Deliverable 2: IntoBuddy */}
            <div className="deliverable-card mechanical-box">
              <div className="deliverable-header">
                <div>
                  <span className="deliverable-badge">★ EVENT NETWORKING &amp; QR</span>
                  <h4 className="deliverable-title">IntoBuddy — Mobile Application</h4>
                </div>
                <span className="deliverable-period">[2026]</span>
              </div>
              <p className="deliverable-desc">
                Engineered a cross-platform Flutter application for live event networking. Built <strong>digital e-Card generator</strong> with <strong>MobileScanner QR</strong> recognition, device contact export via <strong>flutter_contacts</strong>, goal-driven <strong>nearby attendee radar matching</strong>, and in-app <strong>real-time Firestore chat</strong>.
              </p>
              <div className="deliverable-pills">
                <span>[Flutter]</span>
                <span>[MobileScanner QR]</span>
                <span>[Phone OTP]</span>
                <span>[Firestore Chat]</span>
                <span>[Radar Matching]</span>
                <span>[Local Push]</span>
              </div>
              <div className="deliverable-actions">
                <button
                  type="button"
                  className="btn-deliverable-inspect"
                  onClick={() => intobuddyProject && onSelectProject(intobuddyProject)}
                >
                  <span>INSPECT_DELIVERABLE</span>
                  <ArrowRight size={14} />
                </button>
                {intobuddyProject?.playStore && (
                  <a
                    href={intobuddyProject.playStore}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-deliverable-store"
                    title="Download IntoBuddy on Google Play Store"
                  >
                    <Play size={13} className="fill-current text-orange" />
                    <span>PLAY STORE</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="freelance-guarantee-banner mechanical-box">
          <div className="guarantee-row">
            <div className="guarantee-item">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>Direct communication — zero agency intermediaries</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>Full source code and deployment ownership handed over</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>Production-tested codebases with clean documentation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
