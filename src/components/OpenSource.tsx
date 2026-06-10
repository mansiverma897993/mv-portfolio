import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GitPullRequest, Star, Briefcase, Calendar, MapPin } from 'lucide-react';

export const OpenSource: React.FC = () => {
  const osExperience = portfolioData.experience.find(exp => exp.role === "Open Source Contributor");

  const contributions = [
    {
      project: "solana-templates",
      repo: "solana-foundation/templates",
      description: "Contributed starter template schemas, Anchor contract layouts, and tooling templates to the official Solana Foundation repository.",
      stars: 450,
      role: "Contributor",
      type: "Pull Request Merged"
    },
    {
      project: "geekroom-kiet",
      repo: "GEEK-ROOM-KIET/geekroom-kiet",
      description: "Contributed registration workflows, community portal features, and UI/UX tweaks for the campus geek room platform.",
      stars: 32,
      role: "Contributor",
      type: "Pull Request Merged"
    }
  ];

  return (
    <div className="anime-container fade-in">
      <h2>Open Source Contributions</h2>
      <p className="section-desc">My contributions to community developer tools, programs, and open source repositories.</p>

      {osExperience && (
        <div className="os-experience-section" style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '15px', color: 'var(--text-bright)', marginBottom: '12px', fontWeight: 'bold' }}>Programs & Mentorships</h3>
          <div className="timeline-container" style={{ margin: 0, paddingLeft: 0 }}>
            <div className="timeline-item" style={{ paddingBottom: 0 }}>
              <div className="timeline-badge-container">
                <div className="timeline-badge current-badge">
                  <Briefcase size={14} />
                </div>
              </div>
              
              <div className="timeline-content-card" style={{ margin: 0 }}>
                <div className="timeline-card-header">
                  <div>
                    <h3 className="role-title">{osExperience.role}</h3>
                    <h4 className="company-title">{osExperience.company}</h4>
                  </div>
                  {osExperience.current && (
                    <span className="current-status-tag">Current</span>
                  )}
                </div>
                
                <div className="timeline-meta">
                  <span className="meta-item">
                    <Calendar size={12} />
                    <span>{osExperience.period}</span>
                  </span>
                  <span className="meta-item">
                    <MapPin size={12} />
                    <span>{osExperience.location}</span>
                  </span>
                </div>
                
                <p className="experience-description">{osExperience.description}</p>
                
                <div className="tech-tags-list">
                  {osExperience.tags.map(tag => (
                    <span key={tag} className="tech-tag-item">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <h3 style={{ fontSize: '15px', color: 'var(--text-bright)', marginBottom: '12px', fontWeight: 'bold' }}>Merged Pull Requests & Repositories</h3>
      <div className="anime-grid">
        {contributions.map((c) => (
          <div key={c.project} className="anime-card" style={{ borderBottomColor: '#89d185' }}>
            <div className="anime-card-header">
              <GitPullRequest size={20} style={{ color: '#89d185', marginRight: '8px' }} />
              <h3 style={{ fontSize: '14px', fontFamily: 'monospace' }}>{c.repo}</h3>
            </div>
            <p style={{ fontSize: '13px', lineHeight: '1.4', margin: '4px 0', color: '#cccccc' }}>
              {c.description}
            </p>
            <div className="anime-meta" style={{ marginTop: 'auto', paddingTop: '8px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={12} fill="#cca700" stroke="#cca700" /> {c.stars} stars
              </span>
              <span>{c.type}</span>
            </div>
            <span className="anime-genre" style={{ backgroundColor: 'rgba(137, 209, 133, 0.15)', color: '#a3e635' }}>
              {c.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenSource;
