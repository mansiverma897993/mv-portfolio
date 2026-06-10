import React from 'react';
import { Youtube, ExternalLink } from 'lucide-react';

export const Startup: React.FC = () => {
  const featuredVideos = [
    {
      title: "What is Blockchain? - A Short Overview",
      link: "https://www.youtube.com/watch?v=Z_7pJWsbGEI",
      description: "A short, conceptual overview of blockchain technology, explaining decentralization, blocks, consensus, and security for beginners.",
      badge: "Featured Video"
    },
    {
      title: "Best Open Source Opportunity in 2026",
      link: "https://www.youtube.com/watch?v=sRkkocWuYvo&pp=0gcJCTkLAYcqIYzv",
      description: "A curated guide discussing paid open-source opportunities, internships, developer stipends, and global community contributions in 2026.",
      badge: "Featured Video"
    }
  ];

  return (
    <div className="startup-container fade-in">
      <h2>Startup & Side Projects</h2>
      <p className="section-desc">Ideas, projects, and featured media I am tinkering with and building.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        {/* Main Startup Brand Card */}
        <div 
          className="startup-card" 
          style={{ 
            marginTop: 0,
            cursor: 'pointer',
            transition: 'transform 0.2s, border-color 0.2s'
          }}
          onClick={() => window.open('https://www.youtube.com/@expressbymansi', '_blank')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.borderColor = '#ff4d4d';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--border-light)';
          }}
        >
          <div className="startup-header" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img 
              src="/ebm_logo.png" 
              alt="EBM Logo" 
              style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                objectFit: 'cover',
                border: '2px solid #ff0000',
                backgroundColor: '#fff',
                padding: '2px'
              }} 
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Express by Mansi (EBM)
                <ExternalLink size={14} style={{ opacity: 0.5 }} />
              </h3>
              <span style={{ 
                fontSize: '11px', 
                backgroundColor: 'rgba(255, 0, 0, 0.15)', 
                color: '#ff4d4d', 
                padding: '2px 8px', 
                borderRadius: '10px',
                fontWeight: 'bold',
                display: 'inline-block',
                marginTop: '4px'
              }}>Co-Founder</span>
            </div>
          </div>
          <p className="startup-desc">
            A developer media, podcast, and education brand providing high-quality tutorials on blockchain (Solana & Anchor), AI engineering, tech guidance, and developer career roadmaps, reaching thousands of students and builders.
          </p>
        </div>

        {/* Section Divider */}
        <div style={{ margin: '10px 0 5px 0', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
          <h3 style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Youtube size={16} style={{ color: '#ff0000' }} />
            Featured Videos & Tutorials
          </h3>
        </div>

        {/* Video Cards */}
        {featuredVideos.map((video, idx) => (
          <div 
            key={idx}
            className="startup-card" 
            style={{ 
              marginTop: 0,
              cursor: 'pointer',
              transition: 'transform 0.2s, border-color 0.2s'
            }}
            onClick={() => window.open(video.link, '_blank')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = '#ff4d4d';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-light)';
            }}
          >
            <div className="startup-header" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1.5px solid #ff0000'
              }}>
                <Youtube size={20} style={{ color: '#ff0000' }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {video.title}
                  <ExternalLink size={12} style={{ opacity: 0.5 }} />
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                  color: 'var(--text-muted)', 
                  padding: '1px 6px', 
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  marginTop: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>{video.badge}</span>
              </div>
            </div>
            <p className="startup-desc" style={{ fontSize: '13px' }}>
              {video.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Startup;
