import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';
import FreelanceSection from './components/FreelanceSection';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import TerminalDrawer from './components/TerminalDrawer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Prevent background scroll when modal or terminal drawer is active
  useEffect(() => {
    if (selectedProject || isTerminalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, isTerminalOpen]);

  // Global hotkey listener (press '~' or '`' to toggle terminal drawer)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === '`' || e.key === '~') && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        if (selectedProject) setSelectedProject(null);
        if (isTerminalOpen) setIsTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, isTerminalOpen]);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Top Navigation with Laser Scroll Indicator */}
      <Navbar onToggleTerminal={() => setIsTerminalOpen(true)} />

      <main id="main-content">
        {/* Clean, Impactful Hero Section */}
        <Hero onToggleTerminal={() => setIsTerminalOpen(true)} />

        {/* About Section & Lifecycle Workflow */}
        <About />

        {/* Technical Competencies Stack */}
        <TechStack />

        {/* Flagship Featured Projects */}
        <FeaturedProjects onSelectProject={handleSelectProject} />

        {/* Dedicated Freelance Section */}
        <FreelanceSection onSelectProject={handleSelectProject} />

        {/* Secondary Specialized Projects */}
        <OtherProjects onSelectProject={handleSelectProject} />

        {/* Professional Experience Timeline */}
        <Experience />

        {/* Achievements & Certifications */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study & Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}

      {/* Interactive Developer CLI Terminal Drawer */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
