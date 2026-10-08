import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Volume2, VolumeX } from 'lucide-react';
import { sound } from '../utils/soundEngine';

export default function Navbar({ onToggleTerminal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(sound.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  const handleToggleAudio = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) {
      sound.playSuccess();
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* 3px Laser Scroll Indicator running across the header */}
      <div
        className="nav-laser-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="header-inner container">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="brand-logo"
          onClick={handleNavClick}
          onMouseEnter={() => sound.playHover()}
        >
          <span className="logo-badge">MC</span>
          <span className="logo-text">
            MANIDEEP<strong>CHILUKURI</strong>
          </span>
          <span className="live-pill" title="Available for Product Engineering">
            <span className="live-dot" />
            <span className="live-label">AVAILABLE</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a
            href="#about"
            className="nav-link"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
          >
            About
          </a>
          <a
            href="#skills"
            className="nav-link"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
          >
            Skills
          </a>
          <a
            href="#featured-projects"
            className="nav-link"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
          >
            Projects
          </a>
          <a
            href="#freelance"
            className="nav-link"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
          >
            Freelance
          </a>
          <a
            href="#experience"
            className="nav-link"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="nav-link"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
          >
            Contact
          </a>
        </nav>

        {/* Header Action Buttons */}
        <div className="header-actions">
          {/* Audio Synthesizer Toggle */}
          <button
            type="button"
            className="btn-nav-sfx"
            onClick={handleToggleAudio}
            onMouseEnter={() => sound.playHover()}
            title={isMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
            aria-label="Toggle Sound Effects"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-orange" />}
            <span className="sfx-text">{isMuted ? 'SFX: OFF' : 'SFX: ON'}</span>
          </button>

          {/* Quick CLI launcher */}
          <button
            type="button"
            className="btn-nav-cli"
            onClick={() => {
              sound.playClick();
              if (onToggleTerminal) onToggleTerminal();
            }}
            onMouseEnter={() => sound.playHover()}
            title="Open Interactive Terminal"
          >
            <Terminal size={14} className="text-orange" />
            <span>&gt;_ CLI</span>
          </button>

          {/* Let's Build CTA */}
          <a
            href="#contact"
            className="btn-cta-nav"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
          >
            <span>Let&apos;s Build</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={handleNavClick}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="mobile-brand">NAVIGATION</span>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                aria-label="Close Navigation"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="mobile-nav-links">
              <a href="#hero" className="mobile-nav-link" onClick={handleNavClick}>
                <span>01.</span> Home
              </a>
              <a href="#about" className="mobile-nav-link" onClick={handleNavClick}>
                <span>02.</span> About
              </a>
              <a href="#skills" className="mobile-nav-link" onClick={handleNavClick}>
                <span>03.</span> Skills
              </a>
              <a href="#featured-projects" className="mobile-nav-link" onClick={handleNavClick}>
                <span>04.</span> Featured Projects
              </a>
              <a href="#freelance" className="mobile-nav-link" onClick={handleNavClick}>
                <span>05.</span> Freelance Experience
              </a>
              <a href="#experience" className="mobile-nav-link" onClick={handleNavClick}>
                <span>06.</span> Experience
              </a>
              <a href="#contact" className="mobile-nav-link" onClick={handleNavClick}>
                <span>07.</span> Contact
              </a>
            </nav>
            <div className="mobile-menu-footer">
              <button
                type="button"
                className="btn-secondary w-full mb-3"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onToggleTerminal) onToggleTerminal();
                }}
              >
                <Terminal size={15} className="text-orange" />
                <span>Open Terminal</span>
              </button>
              <a href="#contact" className="btn-primary w-full" onClick={handleNavClick}>
                <span>Let&apos;s Build</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
