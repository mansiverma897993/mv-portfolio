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
        alignItems: 'flex-start',
        padding: '24px 16px',
        backgroundColor: '#181818'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '820px',
          backgroundColor: '#ffffff',
          color: '#000000',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          padding: '50px 60px',
          borderRadius: '4px',
          fontFamily: '"Times New Roman", Times, Georgia, serif',
          lineHeight: '1.4',
          fontSize: '13px',
          boxSizing: 'border-box'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '14px' }}>
            <h1 style={{ margin: '0 0 4px', fontSize: '28px', fontWeight: 'normal', color: '#000000', letterSpacing: '0.5px' }}>
              MANSI VERMA
            </h1>
            <div style={{ fontSize: '11px', color: '#111111', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
              <span>📞 +91-8851562605</span>
              <span>•</span>
              <a href="mailto:missmv897@gmail.com" style={{ color: '#000000', textDecoration: 'none' }}>✉ missmv897@gmail.com</a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/mansi-verma-4794a4328/" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline' }}>LinkedIn</a>
              <span>•</span>
              <a href="https://github.com/mansiverma897993" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline' }}>GitHub</a>
              <span>•</span>
              <a href="https://mansiverma-portfolio.vercel.app" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline' }}>Portfolio</a>
              <span>•</span>
              <a href="https://leetcode.com/u/mansiverma897993/" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline' }}>LeetCode</a>
              <span>•</span>
              <a href="https://x.com/MansiVe61115132" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline' }}>Twitter</a>
            </div>
          </div>

          {/* Section: SUMMARY */}
          <div style={{ marginBottom: '14px' }}>
            <h2 style={{ 
              fontSize: '13px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              margin: '0 0 4px', 
              borderBottom: '1px solid #000000',
              paddingBottom: '2px',
              letterSpacing: '0.5px'
            }}>
              SUMMARY
            </h2>
            <p style={{ margin: 0, textAlign: 'justify' }}>
              Full-Stack Software Developer with experience in building scalable web applications, modern 3D animated frontends, and production-ready backend systems. Skilled in JavaScript, React.js, Next.js, Tailwind CSS, Node.js, and Express.js for developing responsive UI and RESTful APIs. Strong foundation in Data Structures, Algorithms, problem-solving, and debugging. Also experienced in Blockchain Development using Solana, Rust, TypeScript, and Web3 integration.
            </p>
          </div>

          {/* Section: TECHNICAL SKILLS */}
          <div style={{ marginBottom: '14px' }}>
            <h2 style={{ 
              fontSize: '13px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              margin: '0 0 4px', 
              borderBottom: '1px solid #000000',
              paddingBottom: '2px',
              letterSpacing: '0.5px'
            }}>
              TECHNICAL SKILLS
            </h2>
            <ul style={{ margin: 0, paddingLeft: '16px' }}>
              <li style={{ marginBottom: '3px' }}>
                <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, GSAP, Responsive Web Design, 3D Animated UI
              </li>
              <li style={{ marginBottom: '3px' }}>
                <strong>Backend:</strong> Node.js, Express.js, TypeScript, RESTful APIs, JWT Authentication, Middleware, CRUD Operations
              </li>
              <li style={{ marginBottom: '3px' }}>
                <strong>Databases:</strong> MongoDB, Mongoose, PostgreSQL, MySQL, SQL, Database Design, Schema Modeling
              </li>
              <li style={{ marginBottom: '3px' }}>
                <strong>Core Concepts and Languages:</strong> C++, C, Python, Rust, Data Structures and Algorithms, Problem Solving, OOPs, DBMS, Operating Systems, System Design Basics, Debugging, Code Optimization
              </li>
              <li style={{ marginBottom: '3px' }}>
                <strong>Developer Tools:</strong> Git, GitHub, Postman, Vercel, Claude Code, Cursor, WSL, Deployment, API Testing
              </li>
            </ul>
          </div>

          {/* Section: EXPERIENCE */}
          <div style={{ marginBottom: '14px' }}>
            <h2 style={{ 
              fontSize: '13px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              margin: '0 0 6px', 
              borderBottom: '1px solid #000000',
              paddingBottom: '2px',
              letterSpacing: '0.5px'
            }}>
              EXPERIENCE
            </h2>
            
            {/* Neeyat AI */}
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Full Stack Software Developer — Neeyat AI</span>
                <span style={{ fontWeight: 'normal' }}>Mar 2026 – Present</span>
              </div>
              <ul style={{ margin: '2px 0 0', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '2px' }}>Engineered scalable RESTful APIs and optimized database queries to enhance core platform performance.</li>
                <li style={{ marginBottom: '2px' }}>Worked on backend and full-stack systems using Node.js, Express.js, and MongoDB.</li>
                <li style={{ marginBottom: '2px' }}>Designed and improved RESTful APIs, JWT authentication, and database-driven backend services.</li>
              </ul>
            </div>

            {/* CoE AI Skills Lab */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Blockchain Lead & Coordinator — CoE AI Skills Lab, KIET</span>
                <span style={{ fontWeight: 'normal' }}>Feb 2026 – Present</span>
              </div>
              <ul style={{ margin: '2px 0 0', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '2px' }}>Led the planning and execution of blockchain practicals, workshops, and bootcamps under the AI Skills Lab Centre of Excellence (CoE).</li>
                <li style={{ marginBottom: '2px' }}>Coordinated with faculty, industry experts, and student teams to deliver hands-on, industry-relevant training programs.</li>
                <li style={{ marginBottom: '2px' }}>Guided participants through blockchain concepts and applications while ensuring smooth operations and high engagement across domains.</li>
              </ul>
            </div>
          </div>

          {/* Section: PROJECTS */}
          <div style={{ marginBottom: '14px' }}>
            <h2 style={{ 
              fontSize: '13px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              margin: '0 0 6px', 
              borderBottom: '1px solid #000000',
              paddingBottom: '2px',
              letterSpacing: '0.5px'
            }}>
              PROJECTS
            </h2>

            {/* Roow */}
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Roow : AI Pipeline Builder (YC Startup Project) — Full-Stack Project</span>
                <span style={{ fontWeight: 'normal' }}>Jul 2025 – Aug 2025</span>
              </div>
              <ul style={{ margin: '2px 0 0', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '2px' }}>Developed a visual AI workflow builder for a YC startup using React.js, TypeScript, Tailwind CSS, and React Flow with drag-and-drop node architecture for building complex pipeline systems.</li>
                <li style={{ marginBottom: '2px' }}>Built backend validation services using FastAPI and Python to parse nodes and edges, perform graph construction, cycle detection, and topological sorting before execution.</li>
                <li style={{ marginBottom: '2px' }}>Optimized rendering loops and flow state updates, reducing render times by 40% for large graphs with 100+ elements.</li>
              </ul>
            </div>

            {/* VedaAI */}
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>VedaAI : Cognitive AI Assessment Suite — Full-Stack Project</span>
                <span></span>
              </div>
              <ul style={{ margin: '2px 0 0', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '2px' }}>Built an end-to-end AI agent platform that evaluates developers' skills through voice-interactive and coding assessments.</li>
                <li style={{ marginBottom: '2px' }}>Configured a Python backend with LangChain and Llama3 for real-time speech evaluation and multi-turn audio conversation.</li>
                <li style={{ marginBottom: '2px' }}>Programmed a responsive assessment dashboard in Next.js, showing real-time progress indicators, system logs, and detailed performance metrics.</li>
              </ul>
            </div>

            {/* DNA DAO */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>DNA DAO : Decentralized Bio-Governance Platform — Web3 Project</span>
                <span></span>
              </div>
              <ul style={{ margin: '2px 0 0', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '2px' }}>Developed a decentralized science governance portal on the Solana blockchain for voting and funding genomic research proposals.</li>
                <li style={{ marginBottom: '2px' }}>Coded Anchor Rust smart contracts for escrow, proposal voting, and fractionalized NFT token rewards.</li>
                <li style={{ marginBottom: '2px' }}>Designed a futuristic glassmorphic UI using React and Tailwind CSS with real-time Solana network RPC status polling.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
