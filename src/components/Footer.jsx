import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react';
import { personalInfo } from '../data/projects';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-badge">
                <Terminal size={14} />
              </span>
              <span className="footer-logo-text">
                Manideep<strong>Chilukuri</strong>
              </span>
            </div>
            <p className="footer-tagline">
              Full Stack Developer | Backend Engineer | AI &amp; IoT Product Builder
            </p>
            <div className="footer-status">
              <span className="status-indicator-dot" />
              <span>Available for high-impact software &amp; hardware builds</span>
            </div>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-title">CONNECT</span>
            <div className="footer-social-links">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="footer-link"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="footer-back-col">
            <button
              type="button"
              className="btn-back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} Manideep Chilukuri. Built with React, Vite &amp; Vanilla CSS.
          </p>
          <p className="footer-tech-tag">
            Engineered for speed, zero bloat &amp; product excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
