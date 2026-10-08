import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Activity,
  Radio
} from 'lucide-react';
import profileImg from '../assets/prof.jpeg';
import { personalInfo } from '../data/projects';
import { sound } from '../utils/soundEngine';

const rotatingTitles = [
  "Full Stack Developer",
  "Backend & Cloud Architect",
  "AI & IoT Product Builder",
  "Co-Founder & CTO @ NFCura",
  "Mobile Application Engineer"
];

export default function Hero({ onToggleTerminal }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    const current = rotatingTitles[titleIndex];
    let timer;

    if (isDeleting) {
      if (displayText === '') {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
          setTypingSpeed(100);
        }, 350);
      } else {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setTypingSpeed(40);
        }, typingSpeed);
      }
    } else {
      if (displayText === current) {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      } else {
        timer = setTimeout(() => {
          setDisplayText((prev) => current.slice(0, prev.length + 1));
          setTypingSpeed(90);
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  return (
    <>
      <section id="hero" className="hero-section">
        <div className="hero-grid container">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="hero-text-col">
            <div
              className="hero-role-tag"
              onClick={() => {
                sound.playClick();
                if (onToggleTerminal) onToggleTerminal();
              }}
              title="Click to launch Developer CLI"
            >
              <span className="live-dot" />
              <Terminal size={14} className="text-orange" />
              <span className="role-text">
                &gt;_ {displayText}
                <span className="blinking-cursor">|</span>
              </span>
            </div>

            <h1 className="hero-headline">
              BUILDING PRODUCTS WHERE SOFTWARE MEETS{' '}
              <span className="text-orange">AI, CLOUD &amp; HARDWARE.</span>
            </h1>

            <p className="hero-subtext">
              {personalInfo.heroSubtext}
            </p>

            {/* Core Strengths Chips */}
            <div className="hero-strengths">
              <span
                className="strength-chip"
                onMouseEnter={() => sound.playHover()}
              >
                <Layers size={13} className="text-orange" /> Full Stack &amp; Backend
              </span>
              <span
                className="strength-chip"
                onMouseEnter={() => sound.playHover()}
              >
                <Code2 size={13} className="text-orange" /> Mobile Apps (Flutter/Android)
              </span>
              <span
                className="strength-chip"
                onMouseEnter={() => sound.playHover()}
              >
                <Activity size={13} className="text-orange" /> AI Systems &amp; APIs
              </span>
              <span
                className="strength-chip"
                onMouseEnter={() => sound.playHover()}
              >
                <Cpu size={13} className="text-orange" /> Connected IoT &amp; NFC
              </span>
            </div>

            {/* Prominent CTAs */}
            <div className="hero-cta-group">
              <a
                href="#featured-projects"
                className="btn-primary"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
              >
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>

              <a
                href="#contact"
                className="btn-secondary"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                className="btn-secondary btn-cli-hero"
                onClick={() => {
                  sound.playClick();
                  if (onToggleTerminal) onToggleTerminal();
                }}
                onMouseEnter={() => sound.playHover()}
                title="Launch in-browser interactive terminal"
              >
                <Terminal size={15} className="text-orange" />
                <span>Launch CLI</span>
              </button>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="btn-icon-link"
                title="GitHub Profile"
                aria-label="GitHub Profile"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-icon-link"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Stats Banner */}
            <div className="hero-telemetry-banner mechanical-box">
              <div className="telemetry-item">
                <span className="telemetry-num">4+</span>
                <span className="telemetry-label">Production Apps</span>
              </div>
              <div className="telemetry-divider" />
              <div className="telemetry-item">
                <span className="telemetry-num">&lt;200ms</span>
                <span className="telemetry-label">SOS Dispatch Speed</span>
              </div>
              <div className="telemetry-divider" />
              <div className="telemetry-item">
                <span className="telemetry-num">CTO</span>
                <span className="telemetry-label">Healthcare Co-Founder</span>
              </div>
              <div className="telemetry-divider" />
              <div className="telemetry-item telemetry-status-live">
                <Radio size={16} className="telemetry-radio-icon text-orange" />
                <span className="telemetry-label">LIVE DEPLOYED</span>
              </div>
            </div>
          </div>

          {/* Right Column: Seamless Portrait Image */}
          <div className="hero-visual-col">
            <div className="hero-photo-wrapper">
              <img
                src={profileImg}
                alt="Manideep Chilukuri - Full Stack Developer & AI/IoT Product Builder"
                className="hero-photo"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Marquee Ticker 1: Leftward Scroll */}
      <div className="ticker-strip ticker-primary" aria-hidden="true">
        <div className="ticker-inner">
          <span className="ticker-item"><span className="ticker-star">★</span> FULL STACK ARCHITECTURE</span>
          <span className="ticker-item"><span className="ticker-star">★</span> NFCURA 3-APP HEALTHCARE ECOSYSTEM (CO-FOUNDER &amp; CTO)</span>
          <span className="ticker-item"><span className="ticker-star">★</span> NAZR MISSION-CRITICAL WOMEN SAFETY APP</span>
          <span className="ticker-item"><span className="ticker-star">★</span> INTOBUDDY FLUTTER NETWORKING &amp; RADAR</span>
          <span className="ticker-item"><span className="ticker-star">★</span> PROOFBOX DOCUMENT VAULT &amp; RAZORPAY</span>
          <span className="ticker-item"><span className="ticker-star">★</span> ESP32 &amp; CONNECTED HARDWARE</span>
          <span className="ticker-item"><span className="ticker-star">★</span> SUB-200MS REAL-TIME DISPATCH</span>
          <span className="ticker-item"><span className="ticker-star">★</span> FULL STACK ARCHITECTURE</span>
          <span className="ticker-item"><span className="ticker-star">★</span> NFCURA 3-APP HEALTHCARE ECOSYSTEM (CO-FOUNDER &amp; CTO)</span>
          <span className="ticker-item"><span className="ticker-star">★</span> NAZR MISSION-CRITICAL WOMEN SAFETY APP</span>
          <span className="ticker-item"><span className="ticker-star">★</span> INTOBUDDY FLUTTER NETWORKING &amp; RADAR</span>
          <span className="ticker-item"><span className="ticker-star">★</span> PROOFBOX DOCUMENT VAULT &amp; RAZORPAY</span>
          <span className="ticker-item"><span className="ticker-star">★</span> ESP32 &amp; CONNECTED HARDWARE</span>
          <span className="ticker-item"><span className="ticker-star">★</span> SUB-200MS REAL-TIME DISPATCH</span>
        </div>
      </div>

      {/* Kinetic Marquee Ticker 2: Rightward Scroll */}
      <div className="ticker-strip ticker-secondary" aria-hidden="true">
        <div className="ticker-inner ticker-reverse">
          <span className="ticker-item"><span className="ticker-star">⚡</span> LATENCY: &lt;200MS</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> NFC ISO/IEC 14443</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> CRYPTO: ECDSA P-256</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> FLUTTER 3.X MOBILE</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> ABDM &amp; FHIR R4 COMPLIANT</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> RAZORPAY &amp; HUBBLE SDK</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> REALTIME FIRESTORE &amp; NODE.JS</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> LATENCY: &lt;200MS</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> NFC ISO/IEC 14443</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> CRYPTO: ECDSA P-256</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> FLUTTER 3.X MOBILE</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> ABDM &amp; FHIR R4 COMPLIANT</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> RAZORPAY &amp; HUBBLE SDK</span>
          <span className="ticker-item"><span className="ticker-star">⚡</span> REALTIME FIRESTORE &amp; NODE.JS</span>
        </div>
      </div>
    </>
  );
}
