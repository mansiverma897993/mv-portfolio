import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronDown, ChevronRight, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  // Initialize all sections as expanded
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    skills.forEach(cat => {
      initial[cat.category] = true;
    });
    return initial;
  });

  const toggleSection = (category: string) => {
    setExpanded(prev => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="skills-container fade-in">
      <h2>Skills</h2>
      <p className="section-desc">Technologies, frameworks, and programming languages I work with.</p>
      
      <div className="skills-accordion-list">
        {skills.map(skillCat => {
          const isExpanded = expanded[skillCat.category];
          return (
            <div key={skillCat.category} className="skills-category-wrapper">
              <button 
                className={`category-header-btn ${isExpanded ? 'active' : ''}`}
                onClick={() => toggleSection(skillCat.category)}
              >
                <div className="header-left">
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  <span className="category-title">{skillCat.category}</span>
                </div>
                <span className="category-badge">{skillCat.skills.length} skills</span>
              </button>
              
              {isExpanded && (
                <div className="skills-grid-container">
                  {skillCat.skills.map(skill => (
                    <div key={skill.name} className="skill-item-card">
                      <div className="skill-card-top">
                        <div className="skill-label-group">
                          <Terminal size={14} className="terminal-bullet-icon" />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        {skill.level && <span className="skill-percentage">{skill.level}%</span>}
                      </div>
                      
                      {skill.level && (
                        <div className="skill-progress-track">
                          <div 
                            className="skill-progress-bar" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
