import React, { useState } from 'react';
import {
  ArrowRight,
  MessageSquare,
  Smartphone,
  Database,
  Activity
} from 'lucide-react';
import ProjectDetail from './ProjectDetail';

const flagshipProjects = [
  {
    title: "EqualVoice",
    subtitle: "AI-Powered Comm Platform • Real-time Audio",
    tech: ["React", "Node.js", "WebRTC", "TensorFlow", "Socket.io"],
    desc: "A real-time AI communication platform enabling deaf, mute, and speech-impaired users to participate in live phone calls without speaking or hearing.",
    detailedOverview: "EqualVoice is an AI-powered communication platform designed to provide real-time audio processing and translation. It bridges communication gaps by leveraging advanced machine learning models for speech recognition and generation.",
    icon: <MessageSquare size={32} strokeWidth={2} />
  },
  {
    title: "Circlify",
    subtitle: "Virtual Fashion Try-On • Generative AI",
    tech: ["Python", "PyTorch", "React Native", "AWS", "FastAPI"],
    desc: "Universal AI-based virtual try-on platform allowing users to visualize clothing across e-commerce using generative AI pipelines.",
    detailedOverview: "Circlify revolutionizes the e-commerce fashion industry by allowing users to virtually try on clothing. It uses generative AI to superimpose garments onto user photos with highly realistic physics and lighting.",
    icon: <Smartphone size={32} strokeWidth={2} />
  },
  {
    title: "NEXUS",
    subtitle: "Project Management Platform • Cloud AI",
    tech: ["Vue.js", "Go", "PostgreSQL", "Docker", "Kubernetes"],
    desc: "Multi-tenant academic platform to manage capstone projects with AI-based Project Readiness Checks.",
    detailedOverview: "Nexus is a comprehensive project management platform that integrates cloud AI to automate task assignment, predict project bottlenecks, and optimize resource allocation for large-scale enterprise teams.",
    icon: <Database size={32} strokeWidth={2} />
  },
  {
    title: "NFCura",
    subtitle: "Healthcare Platform • NFC Integration",
    tech: ["React", "Firebase", "Node.js", "NFC API", "Express"],
    desc: "NFC-powered healthcare platform with role-based access for doctors, patients, and administrators.",
    detailedOverview: "An advanced NFC-powered healthcare platform ensuring secure, role-based access for medical professionals, patients, and system administrators. Facilitates seamless real-time data synchronization and encrypted record management.",
    icon: <Activity size={32} strokeWidth={2} />
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">MC.</div>
        <div className="nav-links">
          <a href="#about" className="nav-item">About</a>
          <a href="#work" className="nav-item">Work</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            MANIDEEP<br />
            CHILUKURI.
          </h1>
          <p className="hero-subtitle">
            Software Developer focused on forging powerful intelligence and uncompromising human-centric design. Bridging AI engineering with intuitive web experiences.
          </p>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-photo-container">
            <img
              src="src\assets\prof.jpeg"
              alt="Manideep Chilukuri"
              className="hero-photo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback if image not found */}
            <div className="photo-placeholder-text" style={{ display: 'none' }}>
              [IMAGE URL ERROR: src\assets\prof.jpg]
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section container">
        <h2 className="section-header">Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <div className="exp-block">
            <div className="exp-date">2025</div>
            <div>
              <h3 className="exp-role">Flutter Developer (Freelance)</h3>
              <p style={{ fontFamily: 'var(--font-mono)', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase' }}>Proofbox App | Remote</p>
              <p className="exp-desc">
                Developed an application to store and track the invoices,warranties and coupons using Dart and Firebase.
              </p>
            </div>
          </div>

          <div className="exp-block">
            <div className="exp-date">2024</div>
            <div>
              <h3 className="exp-role">Hackathon Participant</h3>
              <p style={{ fontFamily: 'var(--font-mono)', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase' }}>Metadome AI</p>
              <p className="exp-desc">
                Built an AI-powered web app integrating Face-API.js and React.js dynamically adapting explanations based on real-time expression detection.
              </p>
            </div>
          </div>
          <div className="exp-block">
            <div className="exp-date">2025</div>
            <div>
              <h3 className="exp-role">Hackathon Participant</h3>
              <p style={{ fontFamily: 'var(--font-mono)', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase' }}>Recurzive v2</p>
              <p className="exp-desc">
                Built an an AI tool that analyzes GitHub repositories to generate documentation, visualize dependencies, and provide quick project insights.
              </p>
            </div>
          </div>

          <div className="exp-block">
            <div className="exp-date">2023</div>
            <div>
              <h3 className="exp-role">Software Dev Intern</h3>
              <p style={{ fontFamily: 'var(--font-mono)', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase' }}>Cricentech Infosystem | Bengaluru</p>
              <p className="exp-desc">
                Led development of an E-Commerce platform and an AI conversational chatbot.
                Architected full-stack solutions and shipped production-ready features utilizing modern web frameworks and cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="section container" style={{ borderBottom: 'none' }}>
        <h2 className="section-header">Flagship Projects</h2>

        <div className="projects-grid">
          {flagshipProjects.map((project, idx) => (
            <div key={idx} className="project-card mechanical-box">
              <div className="project-header">
                <div className="proj-icon-wrapper">
                  {project.icon}
                </div>
                <div className="proj-num">0{idx + 1}</div>
              </div>
              <h3 className="proj-title">{project.title}</h3>
              <p className="proj-desc">{project.desc}</p>
              <button className="proj-link-btn" onClick={() => setSelectedProject(project)}>
                KNOW MORE <ArrowRight size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="contact" className="contact-section">
        <h2 className="contact-hug">Let's build<br />together.</h2>
        <div className="contact-links">
          <a href="mailto:manideepchilukuri1@gmail.com" className="contact-link">
            Email
          </a>
          <a href="https://linkedin.com/in/manideep-chilukuri-1a7952256" target="_blank" rel="noreferrer" className="contact-link">
            LinkedIn
          </a>
          <a href="https://github.com/manideep-19" target="_blank" rel="noreferrer" className="contact-link">
            GitHub
          </a>
        </div>
      </section>

      <footer>
        <div>© {new Date().getFullYear()} Manideep Chilukuri</div>
        <div>Engineered with React</div>
      </footer>

      {/* Project Details Modal */}
      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
