import React from 'react';
import {
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Workflow,
  Sparkles,
  ShieldAlert,
  Activity,
  Users,
  ReceiptText,
  Apple,
  Play
} from 'lucide-react';
import { featuredProjects } from '../data/projects';
import { sound } from '../utils/soundEngine';

const projectIcons = {
  nfcura: <Activity size={26} />,
  nazr: <ShieldAlert size={26} />,
  intobuddy: <Users size={26} />,
  proofbox: <ReceiptText size={26} />
};

export default function FeaturedProjects({ onSelectProject }) {
  return (
    <section id="featured-projects" className="section-wrap featured-projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>&gt;_ PRODUCTION_SYSTEMS &amp; FLAGSHIPS // 03</span>
          </div>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-description">
            Real-world systems, applications, and platforms I&apos;ve architected and shipped.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="featured-card mechanical-box"
              onMouseEnter={() => sound.playHover()}
            >
              {/* Card Header & Badges */}
              <div className="featured-card-header">
                <div className="featured-card-meta">
                  <div className="featured-icon-box">
                    {projectIcons[project.id] || <Sparkles size={26} />}
                  </div>
                  <div>
                    <div className="badge-row">
                      <span className="badge-highlight">★ {project.badge}</span>
                      <span className="badge-cat">[{project.categoryLabel}]</span>
                    </div>
                    <span className="featured-role">&gt;_ ROLE: {project.role}</span>
                  </div>
                </div>
                <div className="card-index-indicator">
                  {`0${index + 1}`}
                </div>
              </div>

              {/* Title & Description */}
              <div className="featured-card-body">
                <h3 className="featured-title">{project.title}</h3>
                <p className="featured-subtitle">&gt;_ {project.subtitle}</p>
                <p className="featured-summary">{project.summary}</p>

                {/* Key Highlights (First 3) */}
                <div className="featured-highlights-list">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <div key={idx} className="highlight-item-preview">
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="featured-tech-row">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="tech-pill-tag"
                      onMouseEnter={() => sound.playHover()}
                    >
                      [{t}]
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="featured-card-footer">
                <button
                  type="button"
                  className="btn-inspect-case"
                  onClick={() => {
                    sound.playClick();
                    onSelectProject(project);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="CASE STUDY"
                >
                  <span>INSPECT_SYS</span>
                  <ArrowRight size={16} />
                </button>

                <div className="footer-ext-links">
                  {project.hasArchitecture && (
                    <button
                      type="button"
                      className="btn-ext-arch"
                      onClick={() => {
                        sound.playClick();
                        onSelectProject(project);
                      }}
                      onMouseEnter={() => sound.playHover()}
                      title="Inspect System Architecture"
                      data-cursor="ARCH"
                    >
                      <Workflow size={14} />
                      <span>ARCHITECTURE</span>
                    </button>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ext-icon btn-ext-store"
                      title="Download on Apple App Store (iOS)"
                      onClick={() => sound.playClick()}
                      onMouseEnter={() => sound.playHover()}
                      data-cursor="APP STORE"
                    >
                      <Apple size={14} />
                      <span>APP STORE</span>
                    </a>
                  )}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ext-icon btn-ext-store"
                      title="Download on Google Play Store (Android)"
                      onClick={() => sound.playClick()}
                      onMouseEnter={() => sound.playHover()}
                      data-cursor="PLAY STORE"
                    >
                      <Play size={13} className="fill-current text-orange" />
                      <span>PLAY STORE</span>
                    </a>
                  )}
                  {project.live && !project.appStore && !project.playStore && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ext-icon"
                      title="View Live Platform"
                      onClick={() => sound.playClick()}
                      onMouseEnter={() => sound.playHover()}
                      data-cursor="LIVE"
                    >
                      <ExternalLink size={14} />
                      <span>LIVE</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ext-icon"
                      title="View Source Code"
                      onClick={() => sound.playClick()}
                      onMouseEnter={() => sound.playHover()}
                      data-cursor="GITHUB"
                    >
                      <Github size={14} />
                      <span>CODE</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
