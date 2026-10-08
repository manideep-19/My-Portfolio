import React, { useState } from 'react';
import {
  Layout,
  Server,
  Smartphone,
  Cloud,
  Brain,
  Cpu,
  Wrench,
  Check
} from 'lucide-react';
import { techStackData } from '../data/projects';
import { sound } from '../utils/soundEngine';

const categoryIcons = {
  Frontend: <Layout size={20} className="cat-icon" />,
  Backend: <Server size={20} className="cat-icon" />,
  Mobile: <Smartphone size={20} className="cat-icon" />,
  "Cloud & Databases": <Cloud size={20} className="cat-icon" />,
  AI: <Brain size={20} className="cat-icon" />,
  "IoT & Hardware": <Cpu size={20} className="cat-icon" />,
  Tools: <Wrench size={20} className="cat-icon" />
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...techStackData.map((d) => d.category)];

  const displayedData =
    activeTab === 'All'
      ? techStackData
      : techStackData.filter((d) => d.category === activeTab);

  const getCategoryCount = (cat) => {
    if (cat === 'All') {
      return techStackData.reduce((acc, curr) => acc + curr.skills.length, 0);
    }
    const match = techStackData.find((d) => d.category === cat);
    return match ? match.skills.length : 0;
  };

  return (
    <section id="skills" className="section-wrap skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>&gt;_ CORE_COMPETENCIES // 02</span>
          </div>
          <h2 className="section-heading">Technical Stack</h2>
          <p className="section-description">
            Production-tested languages, frameworks, and hardware systems I use to build real-world products.
          </p>
        </div>

        {/* Filter Tabs with Dynamic Counts */}
        <div className="tech-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`tech-tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => {
                sound.playClick();
                setActiveTab(cat);
              }}
              onMouseEnter={() => sound.playHover()}
              data-cursor="FILTER"
            >
              <span>[{cat.toUpperCase()}]</span>
              <span className="tab-count-pill">{getCategoryCount(cat)}</span>
            </button>
          ))}
        </div>

        {/* Categorized Tech Grid */}
        <div className="tech-categories-grid">
          {displayedData.map((group) => (
            <div key={group.category} className="tech-category-card mechanical-box">
              <div className="category-card-header">
                <div className="category-icon-wrap">
                  {categoryIcons[group.category] || <Cpu size={20} />}
                </div>
                <div>
                  <h3 className="category-title">{group.category}</h3>
                  <p className="category-sub">&gt;_ {group.description}</p>
                </div>
              </div>

              <div className="skills-pill-cloud">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="skill-pill"
                    onMouseEnter={() => sound.playHover()}
                  >
                    <Check size={13} className="skill-check" />
                    <span className="skill-name">[{skill}]</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
