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

  "Skills.json": `{
  "Languages": [
    "C++",
    "C",
    "Rust",
    "Python",
    "Go (Golang)",
    "JavaScript (ES6+)",
    "TypeScript"
  ],
  "Frontend": [
    "HTML5",
    "CSS3",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
    "Responsive Web Design",
    "3D Animated UI"
  ],
  "Backend": [
    "Node.js",
    "Express.js",
    "FastAPI",
    "TypeScript",
    "RESTful APIs",
    "JWT Authentication",
    "Middleware",
    "CRUD Operations",
    "Scalable Architecture",
    "Infrastructure"
  ],
  "Databases & Cache": [
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "MySQL",
    "SQL",
    "Prisma ORM",
    "Redis",
    "Database Design",
    "Schema Modeling"
  ],
  "DevOps & Cloud": [
    "AWS",
    "GCP",
    "Docker",
    "CI/CD",
    "WSL",
    "Git",
    "GitHub",
    "Postman",
    "Vercel",
    "Deployment",
    "API Testing"
  ],
  "AI Skills": [
    "Machine Learning (ML)",
    "LLMs",
    "RAG",
    "Claude Code",
    "Cursor Skill",
    "Prompt Engineering"
  ],
  "Blockchain & Web3": [
    "Solana",
    "Rust (Anchor)",
    "Wallet Adapter",
    "DeFi Protocols",
    "AMM",
    "PDA",
    "Solidity",
    "Ethereum",
    "Smart Contracts",
    "dApps"
  ],
  "Core Concepts": [
    "Data Structures and Algorithms",
    "Problem Solving",
    "OOPs",
    "DBMS",
    "Operating Systems",
    "System Design",
    "Code Optimization"
  ]
}`,

  "Skills.tsx": `import React, { useState } from 'react';
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
            <div className={\`project-card-visual \${getGradientClass(proj.title)}\`}>
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
                    <h3 className="role-title">\${osExperience.role}</h3>
                    <h4 className="company-title">\${osExperience.company}</h4>
                  </div>
                  {osExperience.current && (
                    <span className="current-status-tag">Current</span>
                  )}
                </div>
                
                <div className="timeline-meta">
                  <span className="meta-item">
                    <Calendar size={12} />
                    <span>\${osExperience.period}</span>
                  </span>
                  <span className="meta-item">
                    <MapPin size={12} />
                    <span>\${osExperience.location}</span>
                  </span>
                </div>
                
                <p className="experience-description">\${osExperience.description}</p>
                
                <div className="tech-tags-list">
                  {osExperience.tags.map(tag => (
                    <span key={tag} className="tech-tag-item">\${tag}</span>
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
              <h3 style={{ fontSize: '14px', fontFamily: 'monospace' }}>\${c.repo}</h3>
            </div>
            <p style={{ fontSize: '13px', lineHeight: '1.4', margin: '4px 0', color: '#cccccc' }}>
              \${c.description}
            </p>
            <div className="anime-meta" style={{ marginTop: 'auto', paddingTop: '8px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={12} fill="#cca700" stroke="#cca700" /> \${c.stars} stars
              </span>
              <span>\${c.type}</span>
            </div>
            <span className="anime-genre" style={{ backgroundColor: 'rgba(137, 209, 133, 0.15)', color: '#a3e635' }}>
              \${c.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenSource;`,

  "Community.tsx": `import React from 'react';

export const Community: React.FC = () => {
  const groups = [
    {
      name: "CoE AI Skills Lab",
      role: "Blockchain Lead",
      details: "Leading blockchain initiatives, coordinating technical bootcamps, and mentoring students in Solidity, Web3 integrations, and AI-blockchain synergy.",
      logo: "/coe_ai_logo.png",
      badgeColor: '#389fff'
    },
    {
      name: "Genesis",
      role: "Core Team Member",
      details: "Active contributor and core technical team member in the Genesis Web3 & Blockchain Community, organizing campus hackathons and technical study circles.",
      logo: "/genesis_logo.png",
      badgeColor: '#f472b6'
    },
    {
      name: "GDG on Campus KIET",
      role: "Web Developer",
      details: "Developing web portals, managing technical event registration platforms, and contributing to developer group projects.",
      logo: "/gdg_logo.png",
      badgeColor: '#fbbc05'
    },
    {
      name: "FOSSC",
      role: "Student Member",
      details: "Engaging in Free and Open Source Software (FOSS) initiatives, contributing to community packages, and promoting open-source development practices.",
      logo: "/fossc_logo.png",
      badgeColor: '#34a853'
    }
  ];

  return (
    <div className="gaming-container fade-in">
      <h2>Clubs and Community</h2>
      <p className="section-desc">My involvement in engineering guilds, developer clubs, and technical student organizations.</p>
      <div className="gaming-grid">
        {groups.map((g) => {
          return (
            <div key={g.name} className="gaming-card" style={{ borderBottomColor: g.badgeColor }}>
              <div className="gaming-card-header" style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                  src={g.logo} 
                  alt={g.name} 
                  style={{ 
                    width: '24px', 
                    height: '24px', 
                    objectFit: 'contain',
                    marginRight: '10px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    padding: '2px'
                  }} 
                />
                <h3>\${g.name}</h3>
              </div>
              <div className="gaming-stats">
                <p style={{ fontSize: '13px', lineHeight: '1.4', color: '#cccccc' }}>\${g.details}</p>
              </div>
              <span className="game-role" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', border: \`1px solid \${g.badgeColor}\` }}>
                \${g.role}
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
}`,

  "LICENSE": `MIT License

Copyright (c) 2026 MAN$I VERMA

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,

  "Achievements.tsx": `import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  const certificates = portfolioData.certificates || [];

  return (
    <div className="projects-container fade-in">
      <h2>Achievements & Certifications</h2>
      <p className="section-desc">Professional certifications, cloud credentials, and developer badges.</p>
      
      <div className="projects-grid-list">
        {certificates.map((cert, idx) => (
          <div key={idx} className="project-card-item">
            <div className="project-card-visual" style={{ background: 'linear-gradient(135deg, #1e1e3f 0%, #0c0c14 100%)' }}>
              <img src={cert.image} alt={cert.title} className="cert-badge-img" />
            </div>
            <div className="project-card-body">
              <div className="cert-issuer">
                <ShieldCheck size={16} />
                <span>{cert.issuer}</span>
              </div>
              <h3 className="project-title">{cert.title}</h3>
              <p className="project-desc">{cert.description}</p>
              <div className="cert-date">
                <Calendar size={12} />
                <span>Issued: {cert.issueDate}</span>
              </div>
              <div className="project-action-links">
                <a href={cert.verificationLink} className="project-link-btn primary-btn">
                  <ExternalLink size={14} />
                  <span>Verify Credential</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`,

  "resume.pdf": `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << >> /MediaBox [0 0 612 792] /Contents 4 0 R >>
endobj
4 0 obj
<< /Length 65 >>
stream
BT
/F1 24 Tf
100 700 Td
(MAN$I VERMA - Resume) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000056 00000 n 
0000000111 00000 n 
0000000212 00000 n 
trailer
<< /Size 5 /Root 1 0 R >>
startxref
326
%%EOF`
};
