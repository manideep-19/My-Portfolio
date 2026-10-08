import React, { useState, useMemo } from 'react';
import {
  Search,
  ExternalLink,
  Github,
  ArrowRight,
  Database,
  MessageSquare,
  Sparkles,
  ShieldAlert,
  Video,
  Leaf,
  CreditCard,
  Bus,
  Bot,
  HeartPulse,
  Building2,
  SlidersHorizontal
} from 'lucide-react';
import { otherProjects } from '../data/projects';
import { sound } from '../utils/soundEngine';

const iconMap = {
  Database: <Database size={22} />,
  MessageSquare: <MessageSquare size={22} />,
  Sparkles: <Sparkles size={22} />,
  ShieldAlert: <ShieldAlert size={22} />,
  Video: <Video size={22} />,
  Leaf: <Leaf size={22} />,
  CreditCard: <CreditCard size={22} />,
  Bus: <Bus size={22} />,
  Bot: <Bot size={22} />,
  HeartPulse: <HeartPulse size={22} />,
  Building2: <Building2 size={22} />
};

const filterTabs = [
  { id: 'all', label: 'ALL SYSTEMS' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'web', label: 'WEB & SAAS' },
  { id: 'mobile', label: 'MOBILE APPS' },
  { id: 'iot', label: 'IOT & ROBOTICS' }
];

export default function OtherProjects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return otherProjects.filter((p) => {
      const matchesFilter =
        activeFilter === 'all' ? true : p.tags?.includes(activeFilter);

      if (!matchesFilter) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchSub = p.subtitle.toLowerCase().includes(q);
      const matchDesc = p.desc.toLowerCase().includes(q);
      const matchTech = p.tech.some((t) => t.toLowerCase().includes(q));

      return matchTitle || matchSub || matchDesc || matchTech;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="other-projects" className="section-wrap other-projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>&gt;_ MORE_SYSTEMS_AND_PROTOTYPES // 05</span>
          </div>
          <h2 className="section-heading">More Projects</h2>
          <p className="section-description">
            Specialized platforms, AI prototypes, mobile applications, and embedded hardware systems.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="other-projects-controls">
          <div className="filter-pill-group">
            {filterTabs.map((tab) => {
              const count =
                tab.id === 'all'
                  ? otherProjects.length
                  : otherProjects.filter((p) => p.tags?.includes(tab.id)).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`filter-pill-btn mechanical-box ${activeFilter === tab.id ? 'active' : ''}`}
                  onClick={() => {
                    sound.playClick();
                    setActiveFilter(tab.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="FILTER"
                >
                  <span>{tab.label}</span>
                  <span className="pill-count">[{count}]</span>
                </button>
              );
            })}
          </div>

          <div className="search-input-wrap">
            <Search size={16} className="search-icon-inside" />
            <input
              type="text"
              placeholder="FILTER_SYS (React, PyTorch, IoT...)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                sound.playHover();
              }}
              className="search-field mechanical-box"
              data-cursor="SEARCH"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-cross"
                onClick={() => {
                  sound.playClick();
                  setSearchQuery('');
                }}
                aria-label="Clear Search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="empty-results-box mechanical-box">
            <SlidersHorizontal size={28} className="empty-icon text-orange" />
            <p className="empty-msg">&gt; NO_SYSTEMS_MATCH_FILTER: &quot;{searchQuery}&quot;</p>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                sound.playClick();
                setActiveFilter('all');
                setSearchQuery('');
              }}
            >
              RESET_FILTERS
            </button>
          </div>
        ) : (
          <div className="other-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="other-card mechanical-box"
                onMouseEnter={() => sound.playHover()}
              >
                <div className="other-card-top">
                  <div className="other-icon-wrap">
                    {iconMap[project.icon] || <Database size={22} />}
                  </div>
                  <span className="other-cat-badge">[{project.categoryLabel}]</span>
                </div>

                <div className="other-card-body">
                  <h4 className="other-title">{project.title}</h4>
                  <p className="other-sub">&gt;_ {project.subtitle}</p>
                  <p className="other-desc">{project.desc}</p>

                  <div className="other-tech-row">
                    {project.tech.map((t) => (
                      <span key={t} className="other-tech-tag">[{t}]</span>
                    ))}
                  </div>
                </div>

                <div className="other-card-footer">
                  <button
                    type="button"
                    className="other-inspect-btn"
                    onClick={() => {
                      sound.playClick();
                      onSelectProject(project);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    data-cursor="INSPECT"
                  >
                    <span>INSPECT_SYS</span>
                    <ArrowRight size={14} />
                  </button>

                  <div className="other-links-group">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="other-ext-link"
                        title="Live Demo"
                        onClick={() => sound.playClick()}
                        onMouseEnter={() => sound.playHover()}
                        data-cursor="LIVE"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="other-ext-link"
                        title="GitHub Code"
                        onClick={() => sound.playClick()}
                        onMouseEnter={() => sound.playHover()}
                        data-cursor="GITHUB"
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
