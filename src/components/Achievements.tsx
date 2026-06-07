import React from 'react';
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
          <div key={idx} className="project-card-item" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Visual Badge Header */}
            <div className="project-card-visual" style={{ 
              background: 'linear-gradient(135deg, #1e1e3f 0%, #0c0c14 100%)',
              height: '180px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              borderBottom: '1px solid rgba(255,255,255,0.06)'
            }}>
              {/* Glowing backlights */}
              <div style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: idx === 0 ? 'rgba(255, 170, 0, 0.15)' : idx === 1 ? 'rgba(168, 85, 247, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                filter: 'blur(30px)',
                zIndex: 0
              }} />
              
              <img 
                src={cert.image} 
                alt={cert.title} 
                style={{ 
                  height: '120px', 
                  objectFit: 'contain',
                  zIndex: 1,
                  transition: 'transform 0.3s ease',
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.5))'
                }}
                className="cert-badge-img"
              />
            </div>
            
            {/* Certificate Details */}
            <div className="project-card-body" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <ShieldCheck size={16} style={{ color: idx === 0 ? '#ffaa00' : idx === 1 ? '#a855f7' : '#06b6d4', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                  {cert.issuer}
                </span>
              </div>
              
              <h3 className="project-title" style={{ fontSize: '16px', margin: '4px 0 8px' }}>{cert.title}</h3>
              <p className="project-desc" style={{ flexGrow: 1, minHeight: '60px', marginBottom: '12px' }}>{cert.description}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                <Calendar size={12} />
                <span>Issued: {cert.issueDate}</span>
              </div>
              
              <div className="project-action-links" style={{ marginTop: 'auto' }}>
                <a 
                  href={cert.verificationLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn primary-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
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
};
