import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Crosshair } from 'lucide-react';
import { sound } from '../utils/soundEngine';

export default function TechnicalHUD({ onToggleTerminal }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const [currentSection, setCurrentSection] = useState('//00_HERO');
  const [isAudioMuted, setIsAudioMuted] = useState(sound.isMuted());

  useEffect(() => {
    // Scroll progress listener
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Determine active section for HUD
      const sections = [
        { id: 'hero', label: '//00_HERO' },
        { id: 'about', label: '//01_ABOUT' },
        { id: 'skills', label: '//02_SKILLS' },
        { id: 'featured-projects', label: '//03_FLAGSHIPS' },
        { id: 'freelance', label: '//04_FREELANCE' },
        { id: 'other-projects', label: '//05_MORE_SYS' },
        { id: 'experience', label: '//06_EXPERIENCE' },
        { id: 'certifications', label: '//07_CREDENTIALS' },
        { id: 'contact', label: '//08_CONTACT' }
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setCurrentSection(sections[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Clock in Indian Standard Time (Bengaluru)
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(`${timeStr} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleToggleAudio = () => {
    const nextMuted = sound.toggleMute();
    setIsAudioMuted(nextMuted);
    if (!nextMuted) {
      sound.playSuccess();
    }
  };

  const handleOpenCLI = () => {
    sound.playClick();
    if (onToggleTerminal) {
      onToggleTerminal();
    }
  };

  return (
    <aside className="tech-hud-fixed" aria-label="System HUD Telemetry">
      {/* Laser Orange Progress Bar with Glowing Pulse Head */}
      <div
        className="hud-progress-laser"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      >
        <span className="laser-head" />
      </div>

      {/* Floating HUD Meta Strip */}
      <div className="hud-meta-bar container">
        <div className="hud-left">
          <span className="hud-metric">
            <span className="hud-dot" />
            <span className="hud-label">GPS:</span> 12.9716° N, 77.5946° E [BLR]
          </span>
          <span className="hud-metric hud-section-tag">
            <span className="hud-label">SECTOR:</span> {currentSection}
          </span>
        </div>

        <div className="hud-right">
          <span className="hud-metric hud-clock">
            <span className="hud-label">SERVER_CLOCK:</span> {currentTime}
          </span>
          <span className="hud-metric hud-metric-prog">
            <span className="hud-label">PROGRESS:</span> {Math.round(scrollProgress)}%
          </span>

          {/* Interactive Mechanical Audio Toggle */}
          <button
            type="button"
            className="hud-action-btn"
            onClick={handleToggleAudio}
            onMouseEnter={() => sound.playHover()}
            title={isAudioMuted ? 'Turn Sound FX On' : 'Mute Sound FX'}
            aria-label="Toggle Mechanical Audio FX"
            data-cursor="AUDIO"
          >
            {isAudioMuted ? (
              <>
                <VolumeX size={13} className="text-muted" />
                <span className="btn-hud-text">SFX: OFF</span>
              </>
            ) : (
              <>
                <Volume2 size={13} className="text-orange" />
                <span className="btn-hud-text text-orange">SFX: ON</span>
              </>
            )}
          </button>

          {/* Interactive Terminal Drawer Toggle */}
          <button
            type="button"
            className="hud-action-btn hud-terminal-btn"
            onClick={handleOpenCLI}
            onMouseEnter={() => sound.playHover()}
            title="Open Interactive Developer CLI"
            aria-label="Open Interactive Developer CLI"
            data-cursor="CLI"
          >
            <Terminal size={13} className="text-orange" />
            <span className="btn-hud-text">&gt;_ CLI</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
