import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Wrench,
  Award,
  Layers,
  Cpu,
  UserCheck,
  FileCode2,
  Workflow,
  Apple,
  Play
} from 'lucide-react';
import ArchitectureDiagram from './ArchitectureDiagram';

// Telemetry visualizers with restored signature animations
const AudioWaveTelemetry = () => (
  <div className="telemetry-block mechanical-box">
    <div className="telemetry-header">&gt;_ LIVE_AUDIO_STREAM_ANALYSIS • WebRTC_CH_01</div>
    <div className="audio-bars">
      {Array.from({ length: 24 }, (_, i) => `bar-${i}`).map((id, i) => (
        <div key={id} className="audio-bar" style={{ animationDelay: `${(i % 12) * 0.06}s` }} />
      ))}
    </div>
    <div className="telemetry-footer-stats">
      <span>SAMPLING: 48kHz / 24-bit</span>
      <span>LATENCY: 142ms</span>
      <span>STATUS: ACTIVE_STREAM</span>
    </div>
  </div>
);

const VisionScanTelemetry = () => (
  <div className="telemetry-block mechanical-box">
    <div className="telemetry-header">&gt;_ SPATIAL_MAPPING • ON_DEVICE_NEURAL_WARP</div>
    <div className="vision-grid">
      <div className="scanner-line" />
      <div className="vision-crosshair" />
    </div>
    <div className="telemetry-footer-stats">
      <span>FRAME_RATE: 32 FPS</span>
      <span>INFERENCE_TIME: 16.4ms</span>
      <span>CONFIDENCE: 98.7%</span>
    </div>
  </div>
);

const ServerNodeTelemetry = () => (
  <div className="telemetry-block mechanical-box">
    <div className="telemetry-header">&gt;_ CLUSTER_NODE_STATUS • CLOUD_MICROSERVICES</div>
    <div className="server-nodes">
      {[
        { name: "NODE_API_GATEWAY", ping: "18ms", load: "24%" },
        { name: "AUTH_ECDSA_SERVICE", ping: "22ms", load: "31%" },
        { name: "EHR_RELATIONAL_NODE", ping: "14ms", load: "27%" },
        { name: "OBJECT_STORAGE_CDN", ping: "12ms", load: "19%" }
      ].map((node, i) => (
        <div key={i} className="server-node">
          <span className="node-id">{node.name}</span>
          <span className="node-stat">{node.ping} | {node.load}</span>
          <div className="led-indicator" style={{ animationDelay: `${i * 0.25}s` }} />
        </div>
      ))}
    </div>
    <div className="telemetry-footer-stats">
      <span>UPTIME: 99.98%</span>
      <span>SOCKETS: 1,420 ACTIVE</span>
      <span>SSL: TLS_1.3_ENCRYPTED</span>
    </div>
  </div>
);

const HeartbeatTelemetry = () => (
  <div className="telemetry-block mechanical-box">
    <div className="telemetry-header">&gt;_ BIOMETRIC_PPG_SYNC • CARDIO_OPTICAL_FEED</div>
    <div className="heartbeat-container">
      <div className="heartbeat-wave" />
    </div>
    <div className="telemetry-footer-stats">
      <span>NFC_PROTOCOL: ISO/IEC 14443A</span>
      <span>SIGNATURE: ECDSA P-256</span>
      <span>LATENCY: &lt; 1.2s</span>
    </div>
  </div>
);

const MobileSyncTelemetry = () => (
  <div className="telemetry-block mechanical-box">
    <div className="telemetry-header">&gt;_ EDGE_DEVICE_BUS • GUARDIAN_DISPATCH_TELEMETRY</div>
    <div className="mobile-sync-grid">
      <div className="sync-channel">
        <span className="channel-label">GPS_LOCK</span>
        <span className="channel-val">ACTIVE (SUB-3M)</span>
      </div>
      <div className="sync-channel">
        <span className="channel-label">SMS_FALLBACK</span>
        <span className="channel-val">STANDBY_READY</span>
      </div>
      <div className="sync-channel">
        <span className="channel-label">ACCESSIBILITY_SVC</span>
        <span className="channel-val">RUNNING</span>
      </div>
      <div className="sync-channel">
        <span className="channel-label">DISPATCH_SPEED</span>
        <span className="channel-val">&lt; 200ms</span>
      </div>
    </div>
    <div className="telemetry-footer-stats">
      <span>BATTERY_IMPACT: &lt;1.1%/HR</span>
      <span>BACKGROUND_STATE: ACTIVE</span>
    </div>
  </div>
);

const FraudMatrixTelemetry = () => (
  <div className="telemetry-block mechanical-box">
    <div className="telemetry-header">&gt;_ TRANSACTION_ANOMALY_DETECTOR • SMOTE_CLASSIFIER</div>
    <div className="fraud-bars-container">
      <div className="fraud-metric-row">
        <span>LEGITIMATE_PROBABILITY</span>
        <div className="meter-track"><div className="meter-fill" style={{ width: '97%' }} /></div>
        <span className="meter-val">0.974</span>
      </div>
      <div className="fraud-metric-row">
        <span>ANOMALY_SCORE</span>
        <div className="meter-track"><div className="meter-fill meter-accent" style={{ width: '2.6%' }} /></div>
        <span className="meter-val">0.026</span>
      </div>
    </div>
    <div className="telemetry-footer-stats">
      <span>ROC_AUC: 0.984</span>
      <span>EVAL_LATENCY: 8.6ms</span>
    </div>
  </div>
);

const ProjectTelemetryWidget = ({ telemetryType, id }) => {
  if (telemetryType === 'heartbeat' || id === 'nfcura') return <HeartbeatTelemetry />;
  if (telemetryType === 'mobile' || id === 'nazr' || id === 'feel-safe') return <MobileSyncTelemetry />;
  if (telemetryType === 'audio' || id === 'equalvoice') return <AudioWaveTelemetry />;
  if (telemetryType === 'vision' || id === 'circlify') return <VisionScanTelemetry />;
  if (telemetryType === 'fraud') return <FraudMatrixTelemetry />;
  return <ServerNodeTelemetry />;
};

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('case-study');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy || {
    problem: project.detailedOverview || project.desc,
    solution: project.desc,
    architecture: project.highlights || [],
    myRole: project.role || "Software Developer — Full Stack implementation.",
    challenges: "Optimizing throughput, reliability, and edge performance within production constraints.",
    outcome: "Successfully deployed and tested in target environments."
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header */}
        <div className="modal-header">
          <div className="modal-breadcrumbs">
            <span className="crumb-root">&gt;_ PORTFOLIO_SYS</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-cat">{project.categoryLabel || "PROJECT"}</span>
            {project.badge && (
              <span className="crumb-badge">★ {project.badge}</span>
            )}
          </div>
          <button
            type="button"
            className="btn-modal-close"
            onClick={onClose}
            aria-label="Close Case Study"
          >
            <X size={18} />
            <span className="close-label">CLOSE_SYS</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Main Title & Metadata */}
          <div className="modal-hero-bar">
            <div className="modal-hero-info">
              <h2 className="modal-project-title">{project.title}</h2>
              <p className="modal-project-subtitle">&gt;_ {project.subtitle}</p>
              {project.role && (
                <div className="modal-role-pill">
                  <UserCheck size={14} />
                  <span>&gt;_ ROLE: <strong>{project.role}</strong></span>
                </div>
              )}
            </div>

            {/* Action Links */}
            <div className="modal-action-links">
              {project.appStore && (
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-modal-action btn-modal-primary"
                  title="Download on Apple App Store (iOS)"
                >
                  <Apple size={16} />
                  <span>APP_STORE (iOS)</span>
                </a>
              )}
              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-modal-action btn-modal-primary"
                  title="Download on Google Play Store (Android)"
                >
                  <Play size={15} className="fill-current text-orange" />
                  <span>PLAY_STORE (Android)</span>
                </a>
              )}
              {project.live && !project.appStore && !project.playStore && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-modal-action btn-modal-primary"
                >
                  <ExternalLink size={16} />
                  <span>LAUNCH_LIVE</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-modal-action btn-modal-secondary"
                >
                  <Github size={16} />
                  <span>VIEW_REPO</span>
                </a>
              )}
            </div>
          </div>

          {/* Modal Tab Controls if Architecture exists */}
          {project.hasArchitecture && (
            <div className="modal-tabs">
              <button
                type="button"
                className={`modal-tab ${activeTab === 'case-study' ? 'active' : ''}`}
                onClick={() => setActiveTab('case-study')}
              >
                <Layers size={15} />
                <span>CASE_STUDY_BREAKDOWN</span>
              </button>
              <button
                type="button"
                className={`modal-tab ${activeTab === 'architecture' ? 'active' : ''}`}
                onClick={() => setActiveTab('architecture')}
              >
                <Workflow size={15} />
                <span>SYSTEM_ARCHITECTURE_VISUALIZER</span>
              </button>
            </div>
          )}

          {activeTab === 'architecture' && project.hasArchitecture ? (
            <div className="modal-architecture-wrapper">
              <ArchitectureDiagram />
            </div>
          ) : (
            <div className="case-study-grid">
              {/* Left Column: Problem, Solution, Role, Challenges, Outcome */}
              <div className="case-study-main">
                {/* 1. Problem */}
                <div className="case-study-block mechanical-box">
                  <div className="block-label">
                    <AlertCircle size={16} />
                    <span>01. The Problem</span>
                  </div>
                  <p className="block-content">{caseStudy.problem}</p>
                </div>

                {/* 2. Solution */}
                <div className="case-study-block mechanical-box">
                  <div className="block-label">
                    <CheckCircle2 size={16} />
                    <span>02. The Solution &amp; System</span>
                  </div>
                  <p className="block-content">{caseStudy.solution}</p>
                </div>

                {/* 3. My Role */}
                <div className="case-study-block mechanical-box">
                  <div className="block-label">
                    <UserCheck size={16} />
                    <span>03. My Role &amp; Exact Implementation</span>
                  </div>
                  <p className="block-content">{caseStudy.myRole}</p>
                </div>

                {/* 4. Challenges & Technical Solutions */}
                <div className="case-study-block mechanical-box">
                  <div className="block-label">
                    <Wrench size={16} />
                    <span>04. Technical Challenges &amp; Engineering Decisions</span>
                  </div>
                  <p className="block-content">{caseStudy.challenges}</p>
                </div>

                {/* 5. Outcome */}
                <div className="case-study-block mechanical-box">
                  <div className="block-label">
                    <Award size={16} />
                    <span>05. Real-World Outcome</span>
                  </div>
                  <p className="block-content">{caseStudy.outcome}</p>
                </div>

                {/* Key Architectural Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="case-study-block highlights-block mechanical-box">
                    <div className="block-label">
                      <Layers size={16} />
                      <span>Key Architectural Highlights</span>
                    </div>
                    <div className="highlights-list">
                      {project.highlights.map((h, idx) => (
                        <div key={idx} className="highlight-row">
                          <CheckCircle2 size={16} className="highlight-check" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Tech Stack, Architecture List, Telemetry */}
              <div className="case-study-sidebar">
                {/* Tech Stack Modules */}
                <div className="sidebar-card mechanical-box">
                  <div className="sidebar-header">
                    <Cpu size={16} />
                    <span>Technologies Used ({project.tech?.length || 0})</span>
                  </div>
                  <div className="sidebar-tags">
                    {project.tech?.map((t) => (
                      <span key={t} className="sidebar-tag">[{t}]</span>
                    ))}
                  </div>
                </div>

                {/* Architecture Pipeline Summary */}
                {Array.isArray(caseStudy.architecture) && caseStudy.architecture.length > 0 && (
                  <div className="sidebar-card mechanical-box">
                    <div className="sidebar-header">
                      <FileCode2 size={16} />
                      <span>Architecture Stack</span>
                    </div>
                    <ul className="sidebar-arch-list">
                      {caseStudy.architecture.map((arch, i) => (
                        <li key={i}>
                          <span className="arch-bullet">&gt;</span>
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Telemetry Simulation */}
                <div className="telemetry-container">
                  <ProjectTelemetryWidget
                    telemetryType={project.telemetryType}
                    id={project.id}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
