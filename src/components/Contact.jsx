import React, { useState } from 'react';
import {
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/projects';
import { sound } from '../utils/soundEngine';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [projectTopic, setProjectTopic] = useState('Full Stack Web / Mobile App');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    sound.playSuccess();
    setTimeout(() => setCopied(false), 2800);
  };

  const handleComposeEmail = (e) => {
    e.preventDefault();
    sound.playSuccess();
    const subject = encodeURIComponent(
      `[Project Inquiry] ${projectTopic} - ${senderName || 'Collaboration'}`
    );
    const body = encodeURIComponent(
      `Hi Manideep,\n\n${message || "I'd like to discuss a potential project or opportunity with you."}\n\nBest regards,\n${senderName || 'Your Name'}`
    );
    window.location.href = `mailto:${personalInfo.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-wrap contact-section">
      <div className="container">
        <div className="contact-card-box">
          <div className="contact-grid">
            {/* Left Column: Direct Hook & Social Links */}
            <div className="contact-info-col">
              <div className="section-eyebrow" style={{ color: 'var(--accent)', background: 'transparent' }}>
                <span className="eyebrow-dot" />
                <span>&gt;_ INITIATE_CONTACT // 08</span>
              </div>

              <h2 className="contact-main-headline">
                Have an idea<br />
                <span>worth building?</span>
              </h2>

              <p className="contact-subtext">
                &gt;_ I&apos;m always interested in building meaningful products, solving challenging technical problems, and collaborating on ambitious ideas.
              </p>

              {/* Direct Email Display with Copy Action */}
              <div className="direct-email-card">
                <div className="email-meta">
                  <span className="email-label">&gt; DIRECT_INBOX</span>
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="email-address-link"
                    onClick={() => sound.playClick()}
                    onMouseEnter={() => sound.playHover()}
                    data-cursor="EMAIL"
                  >
                    {personalInfo.socials.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn-copy-email"
                  onClick={handleCopyEmail}
                  onMouseEnter={() => sound.playHover()}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                  data-cursor="COPY"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-orange" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Verified Links */}
              <div className="contact-social-buttons">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                  title="Connect on LinkedIn"
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="LINKEDIN"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={16} className="social-arrow" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                  title="Explore GitHub Repositories"
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="GITHUB"
                >
                  <Github size={20} />
                  <span>GitHub Repositories</span>
                  <ArrowUpRight size={16} className="social-arrow" />
                </a>
              </div>
            </div>

            {/* Right Column: Pre-Configured Message Composer */}
            <div className="contact-form-col">
              <div className="composer-wrapper">
                <div className="composer-header">
                  <MessageSquare size={18} />
                  <span>&gt;_ QUICK_MESSAGE_COMPOSER</span>
                </div>

                <form onSubmit={handleComposeEmail} className="composer-form">
                  <div className="form-group">
                    <label htmlFor="sender-name" className="form-label">
                      &gt; YOUR NAME / COMPANY
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Alex (Founder / Recruiter)"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      onFocus={() => sound.playHover()}
                      data-cursor="NAME"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="project-topic" className="form-label">
                      &gt; PROJECT SPECIFICATION
                    </label>
                    <select
                      id="project-topic"
                      className="form-select"
                      value={projectTopic}
                      onChange={(e) => {
                        setProjectTopic(e.target.value);
                        sound.playClick();
                      }}
                      data-cursor="TOPIC"
                    >
                      <option value="Full Stack Web Application">Full Stack Web Application</option>
                      <option value="Mobile App (Flutter / Android)">Mobile App (Flutter / Android)</option>
                      <option value="AI / LLM Integration">AI / LLM Integration</option>
                      <option value="IoT / Hardware Firmware">IoT / Hardware &amp; Connected System</option>
                      <option value="Freelance Product Engineering">Freelance Product Engineering</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="project-message" className="form-label">
                      &gt; REQUIREMENTS BRIEF
                    </label>
                    <textarea
                      id="project-message"
                      rows={4}
                      className="form-textarea"
                      placeholder="Describe the problem, timeline, or key technical constraints..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => sound.playHover()}
                      data-cursor="MESSAGE"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-send-email"
                    onMouseEnter={() => sound.playHover()}
                    data-cursor="SEND"
                  >
                    <Send size={16} />
                    <span>LAUNCH EMAIL CLIENT</span>
                  </button>

                  <p className="composer-note">
                    <Sparkles size={14} className="note-sparkle text-orange" />
                    Opens your default email client with all parameters formatted. Guaranteed zero message loss.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
