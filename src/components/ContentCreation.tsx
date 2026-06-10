import React from 'react';
import { BookOpen, PenTool, Youtube } from 'lucide-react';

export const ContentCreation: React.FC = () => {
  const media = [
    {
      title: "YouTube Tech Channel (@expressbymansi)",
      role: "Video Creator & Podcaster",
      details: "Creating educational tutorials, podcasts, and guidance videos on blockchain development, AI integration, latest technologies, and technical career roadmaps.",
      link: "https://www.youtube.com/@expressbymansi",
      image: "/ebm_logo.png",
      color: '#ff0000'
    },
    {
      title: "Instagram (@expressbymansi)",
      role: "Tech Influencer & Creator",
      details: "Sharing daily programming tips, career guidance reels, developer humor, and updates on blockchain & AI initiatives.",
      link: "https://www.instagram.com/expressbymansi",
      image: "/mansi_avatar.png",
      color: '#e1306c'
    },
    {
      title: "X (Twitter) (@MansiVe61115132)",
      role: "Web3 & Tech Builder",
      details: "Sharing technical threads, updates on Solana/Rust development, AI tooling, developer resources, and building Express by Mansi.",
      link: "https://x.com/MansiVe61115132",
      image: "/mansi_avatar.png",
      color: '#1da1f2'
    },
    {
      title: "Medium & Dev.to Technical Blogs",
      role: "Technical Writer",
      details: "Writing articles detailing cloud emulations, mock validation suites in Java, and TypeScript advanced generic tips. Reaching over 10k readers.",
      link: "https://github.com/mansiverma897993",
      icon: BookOpen,
      color: '#389fff'
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                {m.image ? (
                  <img 
                    src={m.image} 
                    alt={m.title} 
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      objectFit: 'cover',
                      border: `1.5px solid ${m.color}`,
                      backgroundColor: '#fff',
                      padding: '1px'
                    }} 
                  />
                ) : Icon ? (
                  <Icon size={18} style={{ color: m.color }} />
                ) : null}
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
