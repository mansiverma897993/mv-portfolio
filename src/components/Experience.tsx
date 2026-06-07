import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <div className="experience-container fade-in">
      <h2>Experience</h2>
      <p className="section-desc">My professional journey and work experience in software development.</p>
      
      <div className="timeline-container">
        {experience.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-badge-container">
              <div className={`timeline-badge ${exp.current ? 'current-badge' : ''}`}>
                <Briefcase size={14} />
              </div>
              {idx < experience.length - 1 && <div className="timeline-line"></div>}
            </div>
            
            <div className="timeline-content-card">
              <div className="timeline-card-header">
                <div>
                  <h3 className="role-title">{exp.role}</h3>
                  <h4 className="company-title">{exp.company}</h4>
                </div>
                {exp.current && (
                  <span className="current-status-tag">Current</span>
                )}
              </div>
              
              <div className="timeline-meta">
                <span className="meta-item">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </span>
                <span className="meta-item">
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </span>
              </div>
              
              <p className="experience-description">{exp.description}</p>
              
              <div className="tech-tags-list">
                {exp.tags.map(tag => (
                  <span key={tag} className="tech-tag-item">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
