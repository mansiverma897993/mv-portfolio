import React from 'react';
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
                <span className="anime-genre" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: m.color, border: `1px solid ${m.color}` }}>
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
};
export default ContentCreation;
