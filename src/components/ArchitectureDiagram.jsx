import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Shield,
  Server,
  Database,
  QrCode,
  ArrowRight,
  ArrowDown,
  Info,
  CheckCircle2,
  Play,
  RotateCcw,
  Terminal,
  Activity,
  Stethoscope,
  UserCheck,
  Building2,
  Lock,
  Layers,
  Cpu
} from 'lucide-react';
import { sound } from '../utils/soundEngine';

// The 3 dedicated mobile applications
const mobileApps = [
  {
    id: "doctor-app",
    name: "Doctor Mobile App",
    roleTag: "OPD CLINICAL DESK",
    icon: <Stethoscope size={24} />,
    color: "#ff4500",
    badge: "MOBILE CLIENT (FLUTTER/ANDROID)",
    headline: "Zero-handwriting clinical charting & ECDSA digital prescription composer",
    specs: [
      "Patient NFC tap-scan & QR lookup loading vitals and past visit logs in < 2 seconds",
      "Auto-suggested molecule dosage library with allergy & drug contraindication warnings",
      "Client-side cryptographic signature signing using doctor's ECDSA private key (P-256)",
      "Structured ~50KB clinical payload output eliminating physical paperwork"
    ]
  },
  {
    id: "patient-app",
    name: "Patient Mobile App & NFC",
    roleTag: "HEALTH PASSPORT WALLET",
    icon: <UserCheck size={24} />,
    color: "#27c93f",
    badge: "MOBILE CLIENT & SMART CARD",
    headline: "Contactless patient identity, records vault & dynamic optical QR generation",
    specs: [
      "Physical NTAG213 / PN532 NFC card linkage with offline emergency medical ID access",
      "Dynamic optical QR code generator for instant walk-in check-in at non-NFC clinics",
      "Active prescriptions organizer, scheduled medication reminders, and dosage history",
      "Encrypted offline storage for verified diagnostic reports and doctor advice notes"
    ]
  },
  {
    id: "pharmacy-app",
    name: "Pharmacy Dispensing App",
    roleTag: "POINT-OF-SALE DISPENSING",
    icon: <Building2 size={24} />,
    color: "#00b4d8",
    badge: "DISPENSING DESK CLIENT",
    headline: "High-speed camera QR scanner, public-key verification & anti-duplicate lock",
    specs: [
      "Sub-200ms optical QR scan of patient's digital prescription token",
      "Cryptographic verification of doctor's ECDSA signature via public key registry",
      "One-tap state transition from 'ISSUED' to 'DISPENSED' preventing double-fulfillment",
      "Tamper detection alert if prescription payload was altered in transit"
    ]
  }
];

// Complete 6-hop execution pipeline
const architectureNodes = [
  {
    id: "patient-touchpoint",
    step: "01",
    label: "Patient App & NFC Card",
    sub: "Contactless Identity Presentation",
    icon: <UserCheck size={22} />,
    protocol: "NFC (ISO/IEC 14443-A) • Dynamic Optical QR",
    description: "Patient checks into OPD clinic by tapping their NFCura contactless smart card or presenting their dynamic single-use QR code via the Patient Mobile App.",
    details: [
      "NTAG213 / PN532 contactless NFC card tap transmits opaque patient GUID in < 2ms",
      "Dynamic optical QR code fallback for legacy clinic terminals without NFC hardware",
      "Zero plain-text personal identifying information (PII) broadcast over radio"
    ],
    simLatency: "2ms (NFC Reader Hop)"
  },
  {
    id: "doctor-workspace",
    step: "02",
    label: "Doctor Mobile App",
    sub: "OPD Charting & ECDSA Key Signing",
    icon: <Stethoscope size={22} />,
    protocol: "Web Crypto API • ECDSA (P-256) • Flutter Native",
    description: "Doctor's mobile app receives patient GUID, retrieves verified medical history, allows structured prescription charting, and digitally signs the clinical payload.",
    details: [
      "OPD workspace displays past visit summaries, chronic conditions, and allergy warnings",
      "Prescription composer validates molecule dosages against clinical database",
      "Doctor's device signs the prescription hash with their secure ECDSA private key"
    ],
    simLatency: "14ms (Doctor Signature Hop)"
  },
  {
    id: "api-gateway",
    step: "03",
    label: "Node.js API & RBAC Gateway",
    sub: "REST Microservices & Auth Security",
    icon: <Server size={22} />,
    protocol: "RESTful JSON • Express.js • Strict RBAC Tokens",
    description: "Cloud microservice validates doctor's accreditation JWT, checks role boundaries, and verifies the signed payload format.",
    details: [
      "Strict Role-Based Access Control: Doctor writes; Pharmacy reads/dispenses; Patient views",
      "Sub-200ms response time optimized for unreliable hospital mobile network connections",
      "Opaque token generation prevents predictable URL enumeration of health files"
    ],
    simLatency: "28ms (Gateway Auth Hop)"
  },
  {
    id: "fhir-abdm-engine",
    step: "04",
    label: "ABDM & FHIR R4 Engine",
    sub: "Clinical Schema Transformation",
    icon: <Shield size={22} />,
    protocol: "HL7 FHIR R4 • ABDM (Ayushman Bharat Digital Mission)",
    description: "Data transformer maps structured clinical fields into lightweight ~50KB ABDM-compliant FHIR R4 JSON bundles.",
    details: [
      "Conforms directly to India's national Ayushman Bharat Digital Mission (ABDM) standard",
      "Separates lightweight clinical vitals and medication tables from heavy imaging scans",
      "Enables seamless future interoperability with hospital HIS and government health repositories"
    ],
    simLatency: "45ms (FHIR Schema Hop)"
  },
  {
    id: "pharmacy-dispense",
    step: "05",
    label: "Pharmacy Mobile App",
    sub: "Optical QR Scan & Signature Verification",
    icon: <QrCode size={22} />,
    protocol: "Mobile Camera Stream • ECDSA Public Key Verify",
    description: "Patient presents digital Rx at retail pharmacy; chemist scans optical QR code using the Pharmacy Mobile App to verify doctor signature authenticity.",
    details: [
      "Pharmacy app validates doctor's ECDSA signature against public registry in real time",
      "Immediate visual indicator confirms prescription authenticity and flags any tampering",
      "Pharmacist reviews approved drug dosages before dispensing to patient"
    ],
    simLatency: "72ms (Pharmacy Verify Hop)"
  },
  {
    id: "immutable-ledger",
    step: "06",
    label: "Dispensing Sync & Audit Ledger",
    sub: "Anti-Duplicate Lock & Cloud Commit",
    icon: <Database size={22} />,
    protocol: "Cloud DB (AES-256) • Non-Repudiation Audit",
    description: "Prescription state transitions from 'ISSUED' to 'DISPENSED', locking the token to prevent duplicate dispensing across multiple retail pharmacies.",
    details: [
      "State transition locking permanently eliminates double-filling and unauthorized re-dispensing",
      "Audit trail records timestamp, chemist license ID, and dispensed medicine list",
      "Patient Mobile App receives instantaneous push notification confirming dispense event"
    ],
    simLatency: "98ms (Ledger Commit Hop)"
  }
];

export default function ArchitectureDiagram() {
  const [viewMode, setViewMode] = useState('pipeline'); // 'pipeline' | 'apps'
  const [activeNode, setActiveNode] = useState(architectureNodes[0]);
  const [selectedApp, setSelectedApp] = useState(mobileApps[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeSimIndex, setActiveSimIndex] = useState(-1);
  const [simCompleted, setSimCompleted] = useState(false);

  // Simulation step timer
  useEffect(() => {
    let timeoutId;
    if (isSimulating && activeSimIndex >= 0 && activeSimIndex < architectureNodes.length) {
      sound.playChirp(activeSimIndex);
      timeoutId = setTimeout(() => {
        if (activeSimIndex < architectureNodes.length - 1) {
          const nextIndex = activeSimIndex + 1;
          setActiveSimIndex(nextIndex);
          setActiveNode(architectureNodes[nextIndex]);
        } else {
          setIsSimulating(false);
          setSimCompleted(true);
          sound.playSuccess();
        }
      }, 750);
    }
    return () => clearTimeout(timeoutId);
  }, [isSimulating, activeSimIndex]);

  const startSimulation = () => {
    sound.playClick();
    setViewMode('pipeline');
    setSimCompleted(false);
    setIsSimulating(true);
    setActiveSimIndex(0);
    setActiveNode(architectureNodes[0]);
  };

  const resetSimulation = () => {
    sound.playClick();
    setIsSimulating(false);
    setActiveSimIndex(-1);
    setSimCompleted(false);
    setActiveNode(architectureNodes[0]);
  };

  return (
    <div className="architecture-diagram-wrapper mechanical-box">
      {/* Top Header */}
      <div className="arch-header">
        <div className="arch-header-top">
          <div className="arch-badge">
            <Shield size={14} />
            <span>&gt;_ NFCURA_3_MOBILE_APPS_ECOSYSTEM_ARCHITECTURE</span>
          </div>

          <div className="arch-sim-actions">
            {!isSimulating ? (
              <button
                type="button"
                className="btn-sim-trigger"
                onClick={startSimulation}
                onMouseEnter={() => sound.playHover()}
                data-cursor="RUN"
              >
                <Play size={14} className="fill-current text-orange" />
                <span>SIMULATE 3-APP CLINICAL WORKFLOW</span>
              </button>
            ) : (
              <button
                type="button"
                className="btn-sim-trigger simulating"
                disabled
              >
                <Activity size={14} className="animate-spin text-orange" />
                <span>PROCESSING HOP [{activeSimIndex + 1}/6]...</span>
              </button>
            )}

            {simCompleted && (
              <button
                type="button"
                className="btn-sim-reset"
                onClick={resetSimulation}
                title="Reset simulation"
              >
                <RotateCcw size={14} />
                <span>RESET</span>
              </button>
            )}
          </div>
        </div>

        <h4 className="arch-title">3-App Mobile Healthcare Ecosystem Architecture</h4>
        <p className="arch-sub">
          NFCura is engineered as <strong>3 dedicated mobile applications</strong> (Doctor App, Patient App, and Pharmacy App) connected via contactless NFC smart cards, dynamic optical QR tokens, and an ABDM FHIR R4-compliant cloud backend.
        </p>

        {/* View Mode Switcher */}
        <div className="arch-view-tabs">
          <button
            type="button"
            className={`arch-view-tab ${viewMode === 'pipeline' ? 'active' : ''}`}
            onClick={() => {
              sound.playClick();
              setViewMode('pipeline');
            }}
          >
            <Layers size={14} />
            <span>6-HOP TRANSACTION PIPELINE</span>
          </button>
          <button
            type="button"
            className={`arch-view-tab ${viewMode === 'apps' ? 'active' : ''}`}
            onClick={() => {
              sound.playClick();
              setViewMode('apps');
            }}
          >
            <Smartphone size={14} />
            <span>THE 3 DEDICATED MOBILE APPS</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: THE 3 DEDICATED MOBILE APPS SHOWCASE */}
      {viewMode === 'apps' && (
        <div className="arch-apps-showcase">
          <div className="apps-grid">
            {mobileApps.map((app) => (
              <div
                key={app.id}
                className={`app-spotlight-card mechanical-box ${selectedApp.id === app.id ? 'active-app' : ''}`}
                onClick={() => {
                  sound.playClick();
                  setSelectedApp(app);
                }}
              >
                <div className="app-card-top">
                  <div className="app-icon-wrap" style={{ borderColor: app.color }}>
                    {app.icon}
                  </div>
                  <span className="app-role-pill" style={{ color: app.color, borderColor: app.color }}>
                    [{app.roleTag}]
                  </span>
                </div>
                <h5 className="app-name">{app.name}</h5>
                <span className="app-badge-text">&gt;_ {app.badge}</span>
                <p className="app-headline">{app.headline}</p>

                <div className="app-specs-list">
                  {app.specs.map((spec, idx) => (
                    <div key={idx} className="app-spec-item">
                      <CheckCircle2 size={14} className="spec-check text-orange" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="apps-interop-banner mechanical-box">
            <Cpu size={18} className="text-orange" />
            <div>
              <strong>CROSS-APP INTEROPERABILITY:</strong> Patient presents NFC card or dynamic QR → Doctor Mobile App reads &amp; signs with ECDSA private key → Pharmacy Mobile App validates public key &amp; marks DISPENSED in under 200ms.
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: 6-HOP EXECUTION PIPELINE */}
      {viewMode === 'pipeline' && (
        <>
          {/* Nodes Pipeline Track */}
          <div className="arch-nodes-track">
            {architectureNodes.map((node, i) => {
              const isNodeActive = activeNode.id === node.id;
              const isSimHop = activeSimIndex === i;
              const isSimPassed = activeSimIndex > i || simCompleted;

              return (
                <React.Fragment key={node.id}>
                  <button
                    type="button"
                    className={`arch-node-box ${isNodeActive ? 'active' : ''} ${isSimHop ? 'sim-active-pulse' : ''} ${isSimPassed ? 'sim-passed' : ''}`}
                    onClick={() => {
                      sound.playClick();
                      setActiveNode(node);
                    }}
                    onMouseEnter={() => sound.playHover()}
                  >
                    <div className="arch-node-top">
                      <span className="arch-node-step">[{node.step}]</span>
                      <div className="arch-node-icon">{node.icon}</div>
                    </div>
                    <div className="arch-node-label">{node.label}</div>
                    <div className="arch-node-sub">{node.sub}</div>

                    <div className="arch-node-latency">
                      {node.simLatency}
                    </div>

                    {isNodeActive && (
                      <div className="arch-node-active-bar" />
                    )}
                  </button>

                  {i < architectureNodes.length - 1 && (
                    <div className={`arch-flow-arrow ${isSimPassed ? 'arrow-active' : ''}`} aria-hidden="true">
                      <ArrowRight size={18} className="arrow-desktop" />
                      <ArrowDown size={18} className="arrow-mobile" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Active Node Detail Panel */}
          <div className="arch-detail-panel mechanical-box">
            <div className="detail-panel-header">
              <div className="panel-title-group">
                <span className="panel-step">&gt;_ HOP [{activeNode.step}]</span>
                <h5 className="panel-name">{activeNode.label}</h5>
                <span className="panel-protocol">
                  <Info size={13} /> {activeNode.protocol}
                </span>
              </div>
              <div className="panel-latency-badge">
                LATENCY: <strong>{activeNode.simLatency}</strong>
              </div>
            </div>

            <p className="panel-desc">{activeNode.description}</p>

            <div className="panel-bullet-list">
              {activeNode.details.map((detail, idx) => (
                <div key={idx} className="panel-bullet-item">
                  <CheckCircle2 size={16} className="bullet-check text-orange" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Live Terminal Log Stream during / after simulation */}
            {(activeSimIndex >= 0 || simCompleted) && (
              <div className="sim-live-terminal-box">
                <div className="sim-terminal-header">
                  <Terminal size={14} className="text-orange" />
                  <span>NFCURA 3-APP CRYPTOGRAPHIC STREAM // HOP_{activeNode.step}</span>
                  {simCompleted && (
                    <span className="sim-status-tag">TRANSACTION COMMITTED (98ms) ✓</span>
                  )}
                </div>
                <pre className="sim-json-payload">
{`{
  "system": "NFCURA_3_MOBILE_APPS_ECOSYSTEM",
  "hop": "${activeNode.step}",
  "node_id": "${activeNode.id}",
  "channel": "${activeNode.protocol}",
  "payload": {
    "patient_identity": "NFC_TOKEN_0x89A312B (NTAG213)",
    "doctor_app_action": "ECDSA_P256_DIGITAL_RX_SIGN",
    "pharmacy_app_status": "${simCompleted ? 'DISPENSED_LOCKED' : 'VERIFIED_ACTIVE'}",
    "abdm_fhir_r4_bundle": "MedicationRequest/0x4f82",
    "execution_latency": "${activeNode.simLatency}"
  },
  "verified_tamper_proof": true,
  "timestamp": "${new Date().toISOString()}"
}`}
                </pre>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
