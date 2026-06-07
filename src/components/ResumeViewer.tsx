import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, ExternalLink, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

export const ResumeViewer: React.FC = () => {
  useEffect(() => {
    // Automatically trigger opening in new tab
    const url = portfolioData.resumeUrl || '/resume.pdf';
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const handleOpenPdf = () => {
    const url = portfolioData.resumeUrl || '/resume.pdf';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#1e1e1e',
      color: '#e1e1e6',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }} className="fade-in">
      {/* PDF Viewer Toolbar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        backgroundColor: '#2d2d2d',
        borderBottom: '1px solid #3c3c3c',
        fontSize: '13px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileText size={16} style={{ color: '#ff5555' }} />
          <span style={{ fontWeight: 500 }}>resume.pdf</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ background: 'none', border: 'none', color: '#cccccc', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ZoomOut size={14} />
          </button>
          <span>100%</span>
          <button style={{ background: 'none', border: 'none', color: '#cccccc', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ZoomIn size={14} />
          </button>
          <div style={{ width: '1px', height: '16px', backgroundColor: '#444' }} />
          <button style={{ background: 'none', border: 'none', color: '#cccccc', cursor: 'pointer' }}>
            <RotateCw size={14} />
          </button>
        </div>

        <button 
          onClick={handleOpenPdf}
          style={{
            backgroundColor: '#007acc',
            color: '#ffffff',
            border: 'none',
            padding: '4px 12px',
            borderRadius: '2px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            fontWeight: 500
          }}
        >
          <ExternalLink size={12} />
          <span>Open in browser</span>
        </button>
      </div>

      {/* Auto-redirection notice banner */}
      <div style={{
        backgroundColor: 'rgba(0, 122, 204, 0.15)',
        color: '#75beff',
        padding: '8px 16px',
        fontSize: '12px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(0, 122, 204, 0.3)'
      }}>
        Opening the PDF in a new tab automatically. If the popup was blocked, please{' '}
        <span style={{ textDecoration: 'underline', cursor: 'pointer', fontWeight: 600 }} onClick={handleOpenPdf}>
          click here to open the PDF
        </span>.
      </div>

      {/* Virtual Document Page */}
      <div style={{
        flexGrow: 1,
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'center',
        padding: '24px 16px',
        backgroundColor: '#181818'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '800px',
          backgroundColor: '#ffffff',
          color: '#333333',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          padding: '48px',
          borderRadius: '4px',
          fontFamily: 'serif',
          lineHeight: '1.5',
          fontSize: '14px',
          boxSizing: 'border-box'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px', fontFamily: 'sans-serif' }}>
            <h1 style={{ margin: '0 0 6px', fontSize: '26px', fontWeight: 700, color: '#111111', letterSpacing: '0.5px' }}>
              {portfolioData.name}
            </h1>
            <p style={{ margin: '0 0 10px', fontSize: '14px', color: '#666666', fontWeight: 500 }}>
              {portfolioData.title} &bull; {portfolioData.secondaryTitle}
            </p>
            <p style={{ margin: 0, fontSize: '12px', color: '#555555' }}>
              Email: {portfolioData.email} | GitHub: github.com/mansiverma897993 | LinkedIn: linkedin.com/in/mansi-verma-4794a4328
            </p>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #dddddd', margin: '16px 0' }} />

          {/* Profile Summary */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ textTransform: 'uppercase', fontSize: '13px', margin: '0 0 8px', color: '#007acc', fontFamily: 'sans-serif', letterSpacing: '1px' }}>
              Summary
            </h3>
            <p style={{ margin: 0 }}>
              {portfolioData.subtitle} Passionate about decentralization protocols, automated developer tools, and building intuitive interactive user interfaces. Contributor to open source emulators and community coding initiatives.
            </p>
          </div>

          {/* Education / Skills */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ textTransform: 'uppercase', fontSize: '13px', margin: '0 0 8px', color: '#007acc', fontFamily: 'sans-serif', letterSpacing: '1px' }}>
              Core Competencies
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px' }}>
              {portfolioData.skills.map((category, idx) => (
                <div key={idx}>
                  <strong style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#555555' }}>
                    {category.category}:
                  </strong>{' '}
                  <span style={{ fontSize: '13px' }}>
                    {category.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ textTransform: 'uppercase', fontSize: '13px', margin: '0 0 12px', color: '#007acc', fontFamily: 'sans-serif', letterSpacing: '1px' }}>
              Work Experience
            </h3>
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: '#222222', fontSize: '13px', fontFamily: 'sans-serif' }}>
                  <span>{exp.role} @ {exp.company}</span>
                  <span style={{ fontWeight: 'normal', color: '#666666' }}>{exp.period}</span>
                </div>
                <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#444444' }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h3 style={{ textTransform: 'uppercase', fontSize: '13px', margin: '0 0 12px', color: '#007acc', fontFamily: 'sans-serif', letterSpacing: '1px' }}>
              Key Projects
            </h3>
            {portfolioData.projects.map((proj, idx) => (
              <div key={idx} style={{ marginBottom: '12px' }}>
                <strong style={{ fontSize: '13px', color: '#222222' }}>{proj.title}</strong>{' '}
                <span style={{ fontSize: '12px', color: '#666666', fontFamily: 'sans-serif' }}>
                  ({proj.tags.join(', ')})
                </span>
                <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#444444' }}>
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
