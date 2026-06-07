export const simulatedCode: Record<string, string> = {
  "Welcome.tsx": `import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

interface WelcomeProps {
  onNavigate: (fileName: string) => void;
}

const renderPlatformIcon = (platform: string) => {
  const style = { marginRight: '10px', flexShrink: 0 };
  switch (platform.toLowerCase()) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={style}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={style}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    case 'twitter':
    case 'x':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={style}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'linktree':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={style}>
          <path d="M13.511 5.853l4.005-4.117h4.75l-6.2 6.374 3.6 7.425h-4.83l-2.836-5.853-2.836 5.853H4.332l3.6-7.425-6.2-6.374h4.75l4.005 4.117V0h2.024v5.853zm-2.024 8.784H12.5v9.363h-1.013v-9.363z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={style}>
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    default:
      return null;
  }
};

const getPlatformName = (platform: string) => {
  if (platform === 'twitter') return 'X (Twitter)';
  if (platform === 'linktree') return 'Linktr.ee';
  return platform.charAt(0).toUpperCase() + platform.slice(1);
};

export const Welcome: React.FC<WelcomeProps> = ({ onNavigate }) => {
  const { name, title, socials } = portfolioData;

  const handleConnectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="welcome-container fade-in">
      <div className="welcome-grid">
        <div className="welcome-hero-panel">
          <h1 className="name-title">{name}</h1>
          <p className="subtitle">{title}</p>
          
          <div className="start-section">
            <h3>Start</h3>
            <ul className="start-links">
              <li>
                <button className="link-btn" onClick={() => onNavigate('Skills.json')}>
                  <span className="bullet-symbol">&#123;&#125;</span>
                  <span>Skills...</span>
                </button>
              </li>
              <li>
                <button className="link-btn" onClick={() => onNavigate('Projects.tsx')}>
                  <span className="bullet-symbol">⚛</span>
                  <span>Projects...</span>
                </button>
              </li>
              <li>
                <button className="link-btn" onClick={() => onNavigate('Anime.tsx')}>
                  <span className="bullet-symbol">#</span>
                  <span>Anime...</span>
                </button>
              </li>
              <li>
                <button className="link-btn" onClick={() => onNavigate('contact.tsx')}>
                  <span className="bullet-symbol">✉</span>
                  <span>Get in Touch...</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="connect-panel">
          <h3>Connect</h3>
          <div className="social-links-list">
            {Object.entries(socials).map(([platform, url]) => (
              <button 
                key={platform} 
                onClick={() => handleConnectClick(url)} 
                className="social-bar-button"
              >
                <div className="social-bar-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <div className="social-left-side" style={{ display: 'flex', alignItems: 'center', color: '#e1e1e6' }}>
                    {renderPlatformIcon(platform)}
                    <span className="social-platform-label" style={{ textTransform: 'none' }}>
                      {getPlatformName(platform)}
                    </span>
                  </div>
                  <span className="social-platform-arrow" style={{ display: 'flex', alignItems: 'center' }}><ArrowRight size={14} /></span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};`,

  "Experience.tsx": `import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <p className="section-desc">My professional journey and work experience in software development.</p>
      
      <div className="timeline">
        {experience.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-icon">
              <Briefcase size={16} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                {exp.current && <span className="badge-current">Current</span>}
              </div>
              <h4 className="company-name">{exp.company}</h4>
              <div className="meta-info">
                <span><Calendar size={12} /> {exp.period}</span>
                <span><MapPin size={12} /> {exp.location}</span>
              </div>
              <p className="description">{exp.description}</p>
              <div className="tag-container">
                {exp.tags.map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`,

  "Skills.tsx": `import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronDown, ChevronRight, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    "Programming": true,
    "Full-Stack Development": true,
    "Database & Cache": true,
    "DevOps & Cloud": true
  });

  const toggleSection = (category: string) => {
    setExpanded(prev => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <p className="section-desc">Technologies and tools I work with.</p>
      
      <div className="skills-list">
        {skills.map(skillCat => (
          <div key={skillCat.category} className="skill-category-box">
            <div className="category-header" onClick={() => toggleSection(skillCat.category)}>
              {expanded[skillCat.category] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              <span className="category-title">{skillCat.category}</span>
            </div>
            
            {expanded[skillCat.category] && (
              <div className="skills-grid">
                {skillCat.skills.map(skill => (
                  <div key={skill.name} className="skill-card">
                    <Terminal size={14} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};`,

  "Projects.tsx": `import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, Folder } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <p className="section-desc">A collection of projects I've built and contributed to.</p>
      
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <div className="project-preview-mock">
              <Folder size={48} className="proj-mock-icon" />
              <div className="proj-image-placeholder">{proj.title} Demo</div>
            </div>
            
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>
              
              <div className="project-tags">
                {proj.tags.map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={proj.liveLink} target="_blank" rel="noreferrer" className="link-item">
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`,

  "contact.tsx": `import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Send, CheckCircle, ArrowUpRight } from 'lucide-react';

const renderPlatformIcon = (platform: string) => {
  const style = { marginRight: '8px', flexShrink: 0 };
  switch (platform.toLowerCase()) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={style}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={style}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    case 'twitter':
    case 'x':
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={style}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'linktree':
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={style}>
          <path d="M13.511 5.853l4.005-4.117h4.75l-6.2 6.374 3.6 7.425h-4.83l-2.836-5.853-2.836 5.853H4.332l3.6-7.425-6.2-6.374h4.75l4.005 4.117V0h2.024v5.853zm-2.024 8.784H12.5v9.363h-1.013v-9.363z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={style}>
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    default:
      return null;
  }
};

const getPlatformName = (platform: string) => {
  if (platform === 'twitter') return 'X (Twitter)';
  if (platform === 'linktree') return 'Linktr.ee';
  return platform.charAt(0).toUpperCase() + platform.slice(1);
};

export const Contact: React.FC = () => {
  const { socials } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-view fade-in">
      <h2>Get in Touch</h2>
      <p className="section-desc">Have a project idea, question, or want to say hello? Drop me a message below!</p>
      
      <div className="contact-grid">
        <div className="contact-info-column">
          <h3>Connect / DM</h3>
          <p className="column-subtext">You can also find me on these developer and social platforms:</p>
          
          <div className="platforms-container">
            {Object.entries(socials).map(([platform, url]) => (
              <button 
                key={platform} 
                className="platform-row-btn"
                onClick={() => handleSocialClick(url)}
              >
                <div style={{ display: 'flex', alignItems: 'center', color: '#e1e1e6' }}>
                  {renderPlatformIcon(platform)}
                  <span className="platform-name-tag" style={{ textTransform: 'none' }}>
                    {getPlatformName(platform)}
                  </span>
                </div>
                <span className="platform-link-tag">
                  <span>Open link</span>
                  <ArrowUpRight size={12} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};`,

  "OpenSource.tsx": `import React from 'react';
import { GitPullRequest, Star } from 'lucide-react';

export const OpenSource: React.FC = () => {
  const contributions = [
    {
      project: "aws-athena-emulator",
      repo: "entropretty/aws-athena-emulator",
      description: "Contributed validation logic, query validation checks, and integration tests to the Athena emulator mock layer.",
      stars: 124,
      role: "Contributor",
      type: "Pull Request merged"
    },
    {
      project: "solana-anchor-dao",
      repo: "solana-labs/anchor-dao-template",
      description: "Contributed smart contract governance modules and on-chain voting program code using the Anchor framework.",
      stars: 350,
      role: "Contributor",
      type: "Feature addition"
    },
    {
      project: "vscode-emulation-core",
      repo: "vscode-contrib/emulation-core",
      description: "Improved tab focus state management, terminal shell input buffer validation, and responsive pane dimensions.",
      stars: 88,
      role: "Contributor",
      type: "Bug fix merged"
    }
  ];

  return (
    <div className="anime-container fade-in">
      <h2>Open Source Contributions</h2>
      <p className="section-desc">My contributions to community developer tools and open source repositories.</p>
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
};`,

  "Community.tsx": `import React from 'react';
import { Users, Award, Landmark } from 'lucide-react';

export const Community: React.FC = () => {
  const groups = [
    {
      name: "Google Developer Groups (GDG)",
      role: "Active Contributor",
      details: "Spoke at local developer meetups about building high-performance local-first web applications and emulators.",
      icon: Users,
      badgeColor: '#389fff'
    },
    {
      name: "Web Development Guild",
      role: "Organizer & Lead",
      details: "Organized internal technical workshops, brownbag sessions, and design review boards at Entropretty.",
      icon: Landmark,
      badgeColor: '#c084fc'
    },
    {
      name: "OpenSource Noida Community",
      role: "Mentor",
      details: "Co-hosted community bootcamps, guiding 50+ students in setting up Git configurations and making their first pull requests.",
      icon: Award,
      badgeColor: '#f472b6'
    }
  ];

  return (
    <div className="gaming-container fade-in">
      <h2>Clubs and Community</h2>
      <p className="section-desc">My involvement in engineering guilds, developer meetups, and local tech communities.</p>
      <div className="gaming-grid">
        {groups.map((g) => {
          const Icon = g.icon;
          return (
            <div key={g.name} className="gaming-card" style={{ borderBottomColor: g.badgeColor }}>
              <div className="gaming-card-header">
                <Icon size={20} style={{ color: g.badgeColor, marginRight: '8px' }} />
                <h3>{g.name}</h3>
              </div>
              <div className="gaming-stats">
                <p style={{ fontSize: '13px', lineHeight: '1.4', color: '#cccccc' }}>{g.details}</p>
              </div>
              <span className="game-role" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', border: '1px solid ' + g.badgeColor }}>
                {g.role}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};`,

  "ContentCreation.tsx": `import React from 'react';
import { Youtube, BookOpen, PenTool } from 'lucide-react';

export const ContentCreation: React.FC = () => {
  const media = [
    {
      title: "YouTube Tech Channel (@expressbymansi)",
      role: "Video Creator",
      details: "Creating educational tutorials on Express.js, TypeScript patterns, and backend system designs. Focused on making complex concepts simple.",
      link: "https://www.youtube.com/@expressbymansi",
      icon: Youtube,
      color: '#ff0000'
    },
    {
      title: "Medium & Dev.to Technical Blogs",
      role: "Technical Writer",
      details: "Writing articles detailing cloud emulations, mock validation suites in Java, and TypeScript advanced generic tips. Reaching over 10k readers.",
      link: "https://github.com/mansiverma897993",
      icon: BookOpen,
      color: '#389fff'
    },
    {
      title: "Interactive Documentation",
      role: "Author",
      details: "Writing high-quality markdown guides on developer workflows, system engineering tools, and Git workflows for junior developers.",
      link: "https://linktr.ee/MANSIVERMA",
      icon: PenTool,
      color: '#89d185'
    }
  ];

  return (
    <div className="blogs-container fade-in">
      <h2>Content Creation</h2>
      <p className="section-desc">Technical blogs, educational videos, and developer guides I create to share knowledge.</p>
      <div className="blogs-list">
        {media.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.title} className="blog-card click-card" style={{ borderLeftColor: m.color }} onClick={() => window.open(m.link, '_blank')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Icon size={18} style={{ color: m.color }} />
                <h3 style={{ margin: 0 }}>{m.title}</h3>
              </div>
              <p className="blog-summary" style={{ margin: '4px 0' }}>{m.details}</p>
              <div className="blog-meta" style={{ marginTop: '8px' }}>
                <span className="anime-genre" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: m.color, border: '1px solid ' + m.color }}>
                  {m.role}
                </span>
                <span style={{ color: '#3794ff', fontSize: '11px', cursor: 'pointer', marginLeft: 'auto' }}>
                  Visit resource ↗
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};`,

  "Learning.tsx": `import React from 'react';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

export const Learning: React.FC = () => {
  const learningItems = [
    { title: "System Design & Microservices", status: "In Progress", details: "Studying scalable architectures, message brokers, and load balancing." },
    { title: "Go (Golang)", status: "Completed", details: "Learned concurrency patterns, goroutines, and channels." },
    { title: "Solana Blockchain", status: "In Progress", details: "Writing Rust programs with the Anchor framework." }
  ];

  return (
    <div className="learning-container">
      <h2>Learning Roadmap</h2>
      <p className="section-desc">What I am currently studying and skills I plan to master next.</p>
      <div className="learning-list">
        {learningItems.map((item) => (
          <div key={item.title} className="learning-card">
            <GraduationCap size={24} />
            <div>
              <h3>{item.title}</h3>
              <span className="status-label">{item.status}</span>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`,

  "Startup.tsx": `import React from 'react';
import { Lightbulb, Users, Compass } from 'lucide-react';

export const Startup: React.FC = () => {
  return (
    <div className="startup-container">
      <h2>Startup & Side Projects</h2>
      <p className="section-desc">Ideas and projects I am tinkering with to build the next big thing.</p>
      <div className="startup-card">
        <Lightbulb size={32} className="bulb-icon" />
        <h3>DevFlow Space</h3>
        <p>A collaborative editor and emulator suite specifically designed for full-stack cloud developers to test AWS queries and microservice interactions locally without incurring cloud expenses.</p>
      </div>
    </div>
  );
};`,

  "Settings.json": `{
  "workbench.colorTheme": "Mansi Dark Premium",
  "editor.fontSize": 14,
  "editor.fontFamily": "'Fira Code', 'Courier New', monospace",
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "terminal.integrated.fontSize": 12,
  "portfolio.owner": "MAN$I VERMA",
  "portfolio.version": "2.0.0",
  "portfolio.status": "Open to select SDE roles",
  "portfolio.deployment": "Vercel Direct"
}`
};
