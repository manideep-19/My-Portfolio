import React, { useEffect, useState } from 'react';
import { X, Terminal, Cpu, Layout } from 'lucide-react';

const AudioWaveTelemetry = () => (
  <div className="telemetry-block mechanical-box">
    <div className="telemetry-header">&gt;_ LIVE_AUDIO_STREAM_ANALYSIS</div>
    <div className="audio-bars">
      {Array.from({ length: 20 }, (_, i) => `bar-${i}`).map((id, i) => (
        <div key={id} className="audio-bar" style={{ animationDelay: `${i * 0.05}s` }} />
      ))}
    </div>
  </div>
);

const VisionScanTelemetry = () => (
  <div className="telemetry-block mechanical-box">
    <div className="telemetry-header">&gt;_ SPATIAL_MAPPING_V2</div>
    <div className="vision-grid">
      <div className="scanner-line" />
    </div>
  </div>
);

const ServerNodeTelemetry = () => (
  <div className="telemetry-block mechanical-box">
    <div className="telemetry-header">&gt;_ CLUSTER_NODE_STATUS</div>
    <div className="server-nodes">
      {Array.from({ length: 4 }, (_, i) => `node-${i}`).map((id, i) => (
        <div key={id} className="server-node">
          <span className="node-id">SERVER_NODE_{100+i}</span>
          <div className="led-indicator" style={{ animationDelay: `${i * 0.2}s` }} />
        </div>
      ))}
    </div>
  </div>
);

const HeartbeatTelemetry = () => (
  <div className="telemetry-block mechanical-box">
    <div className="telemetry-header">&gt;_ NFC_BIOMETRIC_SYNC</div>
    <div className="heartbeat-container">
      <div className="heartbeat-wave" />
    </div>
  </div>
);

const ProjectTelemetry = ({ title }) => {
  if (title === 'EqualVoice') return <AudioWaveTelemetry />;
  if (title === 'Circlify') return <VisionScanTelemetry />;
  if (title === 'NEXUS') return <ServerNodeTelemetry />;
  if (title === 'NFCura') return <HeartbeatTelemetry />;
  return null;
};

export default function ProjectDetail({ project, onClose }) {
  const [bootSequence, setBootSequence] = useState(0);

  useEffect(() => {
    if (!project) return;
    const t1 = setTimeout(() => setBootSequence(1), 100);
    const t2 = setTimeout(() => setBootSequence(2), 250);
    const t3 = setTimeout(() => setBootSequence(3), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); setBootSequence(0); };
  }, [project]);

  if (!project) return null;

  return (
    <div className="project-detail-overlay">
      <div className="project-detail-container">
        <div className="detail-header">
          <button className="mechanical-box btn-close" onClick={onClose}>
            <X size={24} /> CLOSE_SYS
          </button>
        </div>

        {bootSequence >= 1 && (
          <div className="detail-grid">
            {/* Left sidebar: Stats & Tech Stack */}
            <div className="detail-left-col">
              <div className="mechanical-box detail-sys-status">
                <Terminal size={16} />
                <span>SYS.STATUS: ONLINE</span>
                <span className="blinking-cursor">_</span>
              </div>
              
              <div className="mechanical-box detail-tech-stack">
                <h3 className="tech-header"><Cpu size={18}/> MODULES</h3>
                <div className="tech-tags">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">[{t}]</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="detail-main-col">
              {bootSequence >= 2 && (
                <>
                  <div className="detail-title-block">
                    <h1 className="detail-title">{project.title}</h1>
                    <p className="detail-subtitle">&gt;_ {project.subtitle}</p>
                  </div>

                  <div className="mechanical-box detail-overview">
                    <h3 className="overview-header"><Layout size={18}/> SYS.OVERVIEW</h3>
                    <p className="overview-text">{project.detailedOverview}</p>
                  </div>
                </>
              )}

              {bootSequence >= 3 && (
                <ProjectTelemetry title={project.title} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
