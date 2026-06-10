import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, Cpu, Globe, MessageSquareCode, Network, Dna, Shield, Coins, Search } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  // Render a custom mockup icon/design based on project title
  const renderProjectIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('roow')) {
      return <Network size={36} className="project-feature-icon roow-icon" />;
    }
    if (t.includes('dna')) {
      return <Dna size={36} className="project-feature-icon dna-icon" />;
    }
    if (t.includes('gtx')) {
      return <Shield size={36} className="project-feature-icon gtx-icon" />;
    }
    if (t.includes('solchit')) {
      return <Coins size={36} className="project-feature-icon solchit-icon" />;
    }
    if (t.includes('gtg') || t.includes('good to go')) {
      return <Search size={36} className="project-feature-icon gtg-icon" />;
    }
    if (t.includes('athenamock')) {
      return <Cpu size={36} className="project-feature-icon athena-icon" />;
    }
    if (t.includes('chatai')) {
      return <MessageSquareCode size={36} className="project-feature-icon chat-icon" />;
    }
    return <Globe size={36} className="project-feature-icon default-icon" />;
  };

  const getGradientClass = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('roow')) return 'gradient-roow';
    if (t.includes('dna')) return 'gradient-dnadao';
    if (t.includes('gtx')) return 'gradient-gtx';
    if (t.includes('solchit')) return 'gradient-solchit';
    if (t.includes('gtg') || t.includes('good to go')) return 'gradient-gtg';
    if (t.includes('athenamock')) return 'gradient-athena';
    if (t.includes('chatai')) return 'gradient-chat';
    return 'gradient-portfolio';
  };

  return (
    <div className="projects-container fade-in">
      <h2>Projects</h2>
      <p className="section-desc">A curated selection of projects I've engineered and open-sourced.</p>
      
      <div className="projects-grid-list">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card-item">
            {/* Project Mock Visual */}
            <div className={`project-card-visual ${getGradientClass(proj.title)}`}>
              <div className="window-dots">
                <span className="dot dot-r"></span>
                <span className="dot dot-y"></span>
                <span className="dot dot-g"></span>
              </div>
              {proj.image ? (
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="project-visual-img"
                />
              ) : (
                <div className="visual-content">
                  {renderProjectIcon(proj.title)}
                  <span className="visual-project-title">{proj.title}</span>
                </div>
              )}
            </div>
            
            {/* Project Details */}
            <div className="project-card-body">
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>
              
              <div className="project-tags-wrap">
                {proj.tags.map(tag => (
                  <span key={tag} className="project-tag-pill">{tag}</span>
                ))}
              </div>
              
              <div className="project-action-links">
                <a 
                  href={proj.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn primary-btn"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
                {proj.githubLink && (
                  <a 
                    href={proj.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn secondary-btn"
                  >
                    <Github size={14} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
