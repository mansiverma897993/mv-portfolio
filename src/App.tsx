import React, { useState, useEffect } from 'react';
import { 
  Files, Search, GitBranch, Play, Blocks, User, Settings, 
  ChevronDown, ChevronRight, X, Eye, Code as CodeIcon,
  RefreshCw, Terminal, Bell, FileText
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import { Welcome } from './components/Welcome';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/contact';
import { ResumeViewer } from './components/ResumeViewer';
import { OpenSource } from './components/OpenSource';
import { Community } from './components/Community';
import { ContentCreation } from './components/ContentCreation';
import { Learning } from './components/Learning';
import { Startup } from './components/Startup';
import { CodeViewer } from './components/CodeViewer';
import { simulatedCode } from './data/simulatedCode';
import './App.css';

// Custom Official React Icon Component
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="14" height="14" className="custom-file-icon">
    <circle cx="0" cy="0" r="2.05" fill="#58c4dc"/>
    <g stroke="#58c4dc" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

// Custom Markdown Icon Component
const MarkdownIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" className="custom-file-icon" fill="#40a6ff">
    <path d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM5 10H3.5V6.5H5V8l1.5-1.5L8 8V6.5h1.5V10H8V8.5L6.5 10 5 8.5V10zm5.5-2.5h-1v-1h1v1zm2 1.5H11v1h1.5v1H9.5v-1H11v-1H9.5v-2h3v2z" fill="#518c8d" />
  </svg>
);

// Custom JSON Icon Component
const JsonIcon = () => (
  <span className="file-icon-json-symbol" style={{ color: '#cbcb41', fontWeight: 'bold', fontSize: '13px', fontFamily: 'monospace', marginRight: '6px' }}>&#123;&#125;</span>
);

function App() {
  const [openFiles, setOpenFiles] = useState<string[]>([
    'Welcome.tsx', 
    'Experience.tsx', 
    'Skills.json', 
    'Projects.tsx', 
    'contact.tsx', 
    'OpenSource.tsx', 
    'Community.tsx', 
    'ContentCreation.md', 
    'Learning.tsx'
  ]);
  const [activeFile, setActiveFile] = useState<string>('Welcome.tsx');
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
  const [activeActivityIcon, setActiveActivityIcon] = useState<string>('explorer');
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    portfolio: true,
    additional: true,
    more: true
  });
  
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [terminalVisible, setTerminalVisible] = useState<boolean>(true);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'Microsoft Windows [Version 10.0.22631]',
    '(c) Microsoft Corporation. All rights reserved.',
    '',
    `D:\\Entropretty\\vscodeportfolio> vercel login`,
    'Logged in to Mansi Verma (mansi.verma@example.com)',
    `D:\\Entropretty\\vscodeportfolio> npm run dev`,
    '',
    '  VITE v8.0.16  ready in 234 ms',
    '',
    '  ➜  Local:   http://localhost:5173/',
    '  ➜  Network: use --host to expose',
    ''
  ]);
  const [terminalInput, setTerminalInput] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');

  // Live clock update effect
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  const openFileHandler = (fileName: string) => {
    if (!openFiles.includes(fileName)) {
      setOpenFiles(prev => [...prev, fileName]);
    }
    setActiveFile(fileName);
  };

  const closeFileHandler = (fileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = openFiles.filter(f => f !== fileName);
    setOpenFiles(updated);

    if (activeFile === fileName) {
      if (updated.length > 0) {
        setActiveFile(updated[updated.length - 1]);
      } else {
        setActiveFile('');
      }
    }
  };

  const handleActivityIconClick = (icon: string) => {
    if (activeActivityIcon === icon) {
      setSidebarVisible(!sidebarVisible);
    } else {
      setActiveActivityIcon(icon);
      setSidebarVisible(true);
    }
  };
  const renderActiveComponent = () => {
    if (viewMode === 'code') {
      let codeKey = activeFile;
      if (activeFile === 'ContentCreation.md') codeKey = 'ContentCreation.tsx';
      return <CodeViewer code={simulatedCode[codeKey] || ''} fileName={activeFile} />;
    }

    switch (activeFile) {
      case 'Welcome.tsx':
        return <Welcome onNavigate={openFileHandler} />;
      case 'Experience.tsx':
        return <Experience />;
      case 'Skills.json':
        return <Skills />;
      case 'Projects.tsx':
        return <Projects />;
      case 'Achievements.tsx':
        return <Achievements />;
      case 'resume.pdf':
        return <ResumeViewer />;
      case 'contact.tsx':
        return <Contact />;
      case 'OpenSource.tsx':
        return <OpenSource />;
      case 'Community.tsx':
        return <Community />;
      case 'ContentCreation.md':
        return <ContentCreation />;
      case 'Learning.tsx':
        return <Learning />;
      case 'Startup.tsx':
        return <Startup />;
      case 'Settings.json':
        return <CodeViewer code={simulatedCode['Settings.json']} fileName="Settings.json" />;
      case 'LICENSE':
        return <CodeViewer code={simulatedCode['LICENSE']} fileName="LICENSE" />;
      default:
        return (
          <div className="watermark-container">
            <div className="watermark-content">
              <h2 className="watermark-title">{portfolioData.name}</h2>
              <p className="watermark-subtitle" style={{ marginBottom: '4px' }}>{portfolioData.title}</p>
              {portfolioData.secondaryTitle && (
                <p className="watermark-subtitle-secondary" style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '30px', marginTop: 0 }}>
                  {portfolioData.secondaryTitle}
                </p>
              )}
              <div className="watermark-shortcuts">
                <div className="shortcut-row">
                  <span className="shortcut-label">Show Welcome</span>
                  <span className="shortcut-keys">Ctrl + Alt + W</span>
                </div>
                <div className="shortcut-row">
                  <span className="shortcut-label">Toggle Sidebar</span>
                  <span className="shortcut-keys">Ctrl + B</span>
                </div>
                <div className="shortcut-row">
                  <span className="shortcut-label">Search Project</span>
                  <span className="shortcut-keys">Ctrl + P</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim();
    let response = [`D:\\Entropretty\\vscodeportfolio> ${cmd}`];

    if (cmd.toLowerCase() === 'clear') {
      setTerminalOutput([]);
      setTerminalInput('');
      return;
    } else if (cmd.toLowerCase() === 'help') {
      response.push(
        'Available commands:',
        '  help      - List available commands',
        '  clear     - Clear the terminal screen',
        '  about     - Brief summary of portfolio owner',
        '  skills    - Print key software engineering skills',
        '  deploy    - Simulate Vercel production deployment',
        '  neofetch  - Display system-like portfolio info'
      );
    } else if (cmd.toLowerCase() === 'about') {
      response.push(
        `Name: ${portfolioData.name}`,
        `Role: ${portfolioData.title}`,
        `Bio: ${portfolioData.subtitle}`
      );
    } else if (cmd.toLowerCase() === 'skills') {
      portfolioData.skills.forEach(cat => {
        response.push(`[${cat.category}]`);
        response.push(`  ${cat.skills.map(s => s.name).join(', ')}`);
      });
    } else if (cmd.toLowerCase() === 'deploy') {
      response.push(
        'Deploying project to Vercel...',
        'inspecting build folder...',
        'deploying source code...',
        'production build finished.',
        'Production URL: https://mansiverma-portfolio.vercel.app',
        'Success! Project deployed successfully.'
      );
    } else if (cmd.toLowerCase() === 'neofetch') {
      response.push(
        '  /\\_/\\      OS: MansiOS 2.0.0',
        ' ( o.o )     Host: Vercel Cloud Server',
        '  > ^ <      Kernel: React 19 / Vite 8',
        '             Shell: powershell.exe',
        '             Uptime: 2 years active dev',
        `             Theme: ${portfolioData.name} Dark Premium`,
        '             Terminal: VSCode Integrated Console',
        '             CPU: Intel Core SDE v99',
        '             Memory: 16GB / 32GB (Active Focus)'
      );
    } else {
      response.push(`'${cmd}' is not recognized as an internal or external command,`, 'operable program or batch file. Type "help" for a list of commands.');
    }

    setTerminalOutput(prev => [...prev, ...response]);
    setTerminalInput('');
  };

  const allFiles = [
    'Welcome.tsx', 
    'Experience.tsx', 
    'Skills.json', 
    'Projects.tsx', 
    'Achievements.tsx',
    'resume.pdf',
    'contact.tsx', 
    'OpenSource.tsx', 
    'Community.tsx', 
    'ContentCreation.md', 
    'Learning.tsx', 
    'Startup.tsx', 
    'Settings.json',
    'LICENSE'
  ];

  const filteredFiles = searchQuery 
    ? allFiles.filter(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
    : allFiles;

  const renderFileIcon = (file: string) => {
    if (file === 'LICENSE') return <FileText size={14} style={{ color: '#b3b3b3', marginRight: '6px', flexShrink: 0 }} />;
    if (file === 'resume.pdf') return <FileText size={14} style={{ color: '#ff5555', marginRight: '6px', flexShrink: 0 }} />;
    if (file.endsWith('.json')) return <JsonIcon />;
    if (file.endsWith('.md')) return <MarkdownIcon />;
    return <ReactIcon />;
  };

  return (
    <div className="vscode-window-app">
      {/* 1. TOP MENU / WINDOW CONTROLS */}
      <header className="vscode-titlebar">
        <div className="titlebar-left">
          {/* Official VS Code Ribbon Logo */}
          <svg className="vscode-logo-svg" viewBox="0 0 24 24" width="16" height="16" style={{ marginRight: '8px' }}>
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" fill="#007acc"/>
          </svg>
          <div className="menu-bar">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Go</span>
            <span onClick={() => setTerminalVisible(prev => !prev)} className="terminal-menu-item">Terminal</span>
            <span>Help</span>
          </div>
        </div>
        
        <div className="titlebar-center">
          <span>{portfolioData.name}</span>
        </div>
        
        <div className="titlebar-right-controls">
          <div className="window-action-btn minimize-action"></div>
          <div className="window-action-btn maximize-action"></div>
          <div className="window-action-btn close-action">×</div>
        </div>
      </header>

      {/* 2. CORE WORKSPACE AREA */}
      <div className="vscode-main-layout">
        {/* ACTIVITY BAR (LEFT-MOST STRIP) */}
        <nav className="vscode-activitybar">
          <div className="activity-top-icons">
            <button 
              className={`activity-icon-btn ${activeActivityIcon === 'explorer' && sidebarVisible ? 'active' : ''}`}
              onClick={() => handleActivityIconClick('explorer')}
              title="Explorer (Ctrl+Shift+E)"
            >
              <Files size={24} />
              <span className="git-badge">{openFiles.length}</span>
            </button>
            <button 
              className={`activity-icon-btn ${activeActivityIcon === 'search' && sidebarVisible ? 'active' : ''}`}
              onClick={() => handleActivityIconClick('search')}
              title="Search (Ctrl+Shift+F)"
            >
              <Search size={24} />
            </button>
            <button 
              className={`activity-icon-btn ${activeActivityIcon === 'git' && sidebarVisible ? 'active' : ''}`}
              onClick={() => handleActivityIconClick('git')}
              title="Source Control (Ctrl+Shift+G)"
            >
              <GitBranch size={24} />
            </button>
            <button 
              className={`activity-icon-btn ${activeActivityIcon === 'run' && sidebarVisible ? 'active' : ''}`}
              onClick={() => handleActivityIconClick('run')}
              title="Run and Debug (Ctrl+Shift+D)"
            >
              <Play size={24} />
            </button>
            <button 
              className={`activity-icon-btn ${activeActivityIcon === 'extensions' && sidebarVisible ? 'active' : ''}`}
              onClick={() => handleActivityIconClick('extensions')}
              title="Extensions (Ctrl+Shift+X)"
            >
              <Blocks size={24} />
            </button>
          </div>
          <div className="activity-bottom-icons">
            <button className="activity-icon-btn" title="Accounts">
              <User size={24} />
            </button>
            <button className="activity-icon-btn" title="Settings">
              <Settings size={24} />
            </button>
          </div>
        </nav>

        {/* SIDEBAR */}
        {sidebarVisible && (
          <aside className="vscode-sidebar">
            {/* EXPLORER SIDEBAR VIEW */}
            {activeActivityIcon === 'explorer' && (
              <div className="sidebar-view explorer-view">
                <div className="sidebar-header">
                  <span>EXPLORER</span>
                </div>
                
                {/* Folder 1: PORTFOLIO */}
                <div className="explorer-folder-section">
                  <button className="folder-header-btn" onClick={() => toggleFolder('portfolio')}>
                    {expandedFolders.portfolio ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    <span className="folder-name-text">PORTFOLIO</span>
                  </button>
                  {expandedFolders.portfolio && (
                    <div className="folder-files-list">
                      <button 
                        className={`file-item-btn ${activeFile === 'Welcome.tsx' ? 'active' : ''}`}
                        onClick={() => openFileHandler('Welcome.tsx')}
                      >
                        <ReactIcon />
                        <span>Welcome.tsx</span>
                      </button>
                      <button 
                        className={`file-item-btn ${activeFile === 'Experience.tsx' ? 'active' : ''}`}
                        onClick={() => openFileHandler('Experience.tsx')}
                      >
                        <ReactIcon />
                        <span>Experience.tsx</span>
                      </button>
                      <button 
                        className={`file-item-btn ${activeFile === 'Skills.json' ? 'active' : ''}`}
                        onClick={() => openFileHandler('Skills.json')}
                      >
                        <JsonIcon />
                        <span>Skills.json</span>
                      </button>
                      <button 
                        className={`file-item-btn ${activeFile === 'Projects.tsx' ? 'active' : ''}`}
                        onClick={() => openFileHandler('Projects.tsx')}
                      >
                        <ReactIcon />
                        <span>Projects.tsx</span>
                      </button>
                      <button 
                        className={`file-item-btn ${activeFile === 'Achievements.tsx' ? 'active' : ''}`}
                        onClick={() => openFileHandler('Achievements.tsx')}
                      >
                        <ReactIcon />
                        <span>Achievements.tsx</span>
                      </button>
                      <button 
                        className={`file-item-btn ${activeFile === 'resume.pdf' ? 'active' : ''}`}
                        onClick={() => openFileHandler('resume.pdf')}
                      >
                        <FileText size={14} style={{ marginRight: '6px', color: '#e05a47', flexShrink: 0 }} />
                        <span>resume.pdf</span>
                      </button>
                      <button 
                        className={`file-item-btn ${activeFile === 'contact.tsx' ? 'active' : ''}`}
                        onClick={() => openFileHandler('contact.tsx')}
                      >
                        <ReactIcon />
                        <span>contact.tsx</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Folder 2: ADDITIONAL */}
                <div className="explorer-folder-section">
                  <button className="folder-header-btn" onClick={() => toggleFolder('additional')}>
                    {expandedFolders.additional ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    <span className="folder-name-text">ADDITIONAL</span>
                  </button>
                  {expandedFolders.additional && (
                    <div className="folder-files-list">
                      <button 
                        className={`file-item-btn ${activeFile === 'OpenSource.tsx' ? 'active' : ''}`}
                        onClick={() => openFileHandler('OpenSource.tsx')}
                      >
                        <ReactIcon />
                        <span>OpenSource.tsx</span>
                      </button>
                      <button 
                        className={`file-item-btn ${activeFile === 'Community.tsx' ? 'active' : ''}`}
                        onClick={() => openFileHandler('Community.tsx')}
                      >
                        <ReactIcon />
                        <span>Community.tsx</span>
                      </button>
                      <button 
                        className={`file-item-btn ${activeFile === 'ContentCreation.md' ? 'active' : ''}`}
                        onClick={() => openFileHandler('ContentCreation.md')}
                      >
                        <MarkdownIcon />
                        <span>ContentCreation.md</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Folder 3: MORE */}
                <div className="explorer-folder-section">
                  <button className="folder-header-btn" onClick={() => toggleFolder('more')}>
                    {expandedFolders.more ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    <span className="folder-name-text">MORE</span>
                  </button>
                  {expandedFolders.more && (
                    <div className="folder-files-list">
                      <button 
                        className={`file-item-btn ${activeFile === 'Learning.tsx' ? 'active' : ''}`}
                        onClick={() => openFileHandler('Learning.tsx')}
                      >
                        <ReactIcon />
                        <span>Learning.tsx</span>
                      </button>
                      <button 
                        className={`file-item-btn ${activeFile === 'Startup.tsx' ? 'active' : ''}`}
                        onClick={() => openFileHandler('Startup.tsx')}
                      >
                        <ReactIcon />
                        <span>Startup.tsx</span>
                      </button>
                      <button 
                        className={`file-item-btn ${activeFile === 'Settings.json' ? 'active' : ''}`}
                        onClick={() => openFileHandler('Settings.json')}
                      >
                        <JsonIcon />
                        <span>Settings.json</span>
                      </button>
                      <button 
                        className={`file-item-btn ${activeFile === 'LICENSE' ? 'active' : ''}`}
                        onClick={() => openFileHandler('LICENSE')}
                      >
                        <FileText size={14} style={{ marginRight: '6px', color: '#858585', flexShrink: 0 }} />
                        <span>LICENSE</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* SEARCH SIDEBAR VIEW */}
            {activeActivityIcon === 'search' && (
              <div className="sidebar-view search-view">
                <div className="sidebar-header">
                  <span>SEARCH</span>
                </div>
                <div className="search-input-wrapper">
                  <input 
                    type="text" 
                    placeholder="Search file names..." 
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="sidebar-search-box"
                  />
                </div>
                <div className="search-results-list">
                  {filteredFiles.map(file => (
                    <button 
                      key={file} 
                      className="search-result-btn"
                      onClick={() => openFileHandler(file)}
                    >
                      {renderFileIcon(file)}
                      <span>{file}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* GIT SIDEBAR VIEW */}
            {activeActivityIcon === 'git' && (
              <div className="sidebar-view git-view">
                <div className="sidebar-header">
                  <span>SOURCE CONTROL</span>
                </div>
                <div className="git-changes-panel">
                  <div className="git-section-title">
                    <span>Changes</span>
                    <span className="git-badge">{allFiles.length}</span>
                  </div>
                  <div className="git-changes-items">
                    {allFiles.map(file => (
                      <div key={file} className="git-change-row">
                        <span className="git-file-name">{file}</span>
                        <span className="git-badge-m">M</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* RUN SIDEBAR VIEW */}
            {activeActivityIcon === 'run' && (
              <div className="sidebar-view run-view">
                <div className="sidebar-header">
                  <span>RUN AND DEBUG</span>
                </div>
                <div className="run-config-panel">
                  <button className="run-button-primary" onClick={() => setViewMode(viewMode === 'preview' ? 'code' : 'preview')}>
                    <Play size={14} fill="currentColor" />
                    <span>Run Portfolio ({viewMode === 'preview' ? 'Preview' : 'Code'})</span>
                  </button>
                  <div className="run-variables-list">
                    <h4>Variables</h4>
                    <div className="var-item">
                      <span className="var-key">name:</span>
                      <span className="var-val">"{portfolioData.name}"</span>
                    </div>
                    <div className="var-item">
                      <span className="var-key">status:</span>
                      <span className="var-val">"Ready to Code"</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* EXTENSIONS SIDEBAR VIEW */}
            {activeActivityIcon === 'extensions' && (
              <div className="sidebar-view extensions-view">
                <div className="sidebar-header">
                  <span>EXTENSIONS</span>
                </div>
                <div className="extensions-list">
                  <div className="ext-item-card">
                    <div className="ext-icon">⚛</div>
                    <div className="ext-details">
                      <span className="ext-title">React Developer Tools</span>
                      <span className="ext-version">v5.3.1</span>
                      <span className="ext-desc">Adds React debugging tools</span>
                    </div>
                  </div>
                  <div className="ext-item-card">
                    <div className="ext-icon">⚡</div>
                    <div className="ext-details">
                      <span className="ext-title">Vite Development Server</span>
                      <span className="ext-version">v8.0.16</span>
                      <span className="ext-desc">Instant HMR for React components</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </aside>
        )}

        {/* EDITOR AREA */}
        <main className="vscode-editor-pane">
          {openFiles.length > 0 ? (
            <>
              {/* TABS BAR */}
              <div className="editor-tabs-bar">
                <div className="tabs-scroll-area">
                  {openFiles.map(file => {
                    const isActive = file === activeFile;
                    return (
                      <div 
                        key={file} 
                        className={`editor-tab-item ${isActive ? 'active' : ''}`}
                        onClick={() => openFileHandler(file)}
                      >
                        {renderFileIcon(file)}
                        <span className="tab-file-name">{file}</span>
                        <button 
                          className="tab-close-btn" 
                          onClick={(e) => closeFileHandler(file, e)}
                        >
                          <X size={12} />
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* PREVIEW / CODE VIEW TOGGLE */}
                {activeFile && activeFile !== 'Settings.json' && (
                  <div className="view-mode-toggle-group">
                    <button 
                      className={`view-mode-btn ${viewMode === 'preview' ? 'active' : ''}`}
                      onClick={() => setViewMode('preview')}
                      title="Show Visual Preview"
                    >
                      <Eye size={14} />
                      <span>Preview</span>
                    </button>
                    <button 
                      className={`view-mode-btn ${viewMode === 'code' ? 'active' : ''}`}
                      onClick={() => setViewMode('code')}
                      title="Show Component Code"
                    >
                      <CodeIcon size={14} />
                      <span>Code</span>
                    </button>
                  </div>
                )}
              </div>

              {/* BREADCRUMBS BAR */}
              {activeFile && (
                <div className="editor-breadcrumbs-bar">
                  <span>src</span>
                  <span className="bread-sep">&gt;</span>
                  <span>portfolio</span>
                  <span className="bread-sep">&gt;</span>
                  <span className="bread-active-file">{activeFile}</span>
                </div>
              )}

              {/* CORE FILE CONTENT PREVIEW */}
              <div className="editor-content-viewport">
                {renderActiveComponent()}
              </div>
            </>
          ) : (
            // WATERMARK / KEYBOARD SHORTCUTS IF NO TABS OPEN
            <div className="watermark-container">
              <div className="watermark-content">
                <h2 className="watermark-title">{portfolioData.name}</h2>
                <p className="watermark-subtitle">{portfolioData.title}</p>
                <div className="watermark-shortcuts">
                  <div className="shortcut-row">
                    <span className="shortcut-label">Open Welcome File</span>
                    <button className="watermark-nav-btn" onClick={() => openFileHandler('Welcome.tsx')}>Welcome.tsx</button>
                  </div>
                  <div className="shortcut-row">
                    <span className="shortcut-label">Toggle Explorer</span>
                    <span className="shortcut-keys">Ctrl + B</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* INTEGRATED TERMINAL */}
          {terminalVisible && (
            <div className="vscode-terminal-pane">
              <div className="terminal-header-bar">
                <div className="terminal-tabs">
                  <span className="terminal-tab active">Terminal</span>
                  <span className="terminal-tab">Output</span>
                  <span className="terminal-tab">Debug Console</span>
                  <span className="terminal-tab">Problems <span className="term-badge">0</span></span>
                </div>
                <div className="terminal-actions">
                  <span className="terminal-shell-name">powershell</span>
                  <button className="terminal-action-btn" title="Clear Terminal" onClick={() => setTerminalOutput([])}><RefreshCw size={12} /></button>
                  <button className="terminal-action-btn" title="Close Panel" onClick={() => setTerminalVisible(false)}>×</button>
                </div>
              </div>
              
              <div className="terminal-output-viewport">
                {terminalOutput.map((line, idx) => (
                  <div key={idx} className="terminal-line-row">{line}</div>
                ))}
                <form onSubmit={handleTerminalSubmit} className="terminal-input-row">
                  <span className="terminal-prompt">D:\Entropretty\vscodeportfolio&gt;</span>
                  <input 
                    type="text" 
                    value={terminalInput} 
                    onChange={e => setTerminalInput(e.target.value)}
                    placeholder="Type a command (try 'help', 'about', 'skills', 'deploy', 'neofetch')..."
                    className="terminal-shell-input"
                  />
                </form>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* 3. STATUS BAR (BOTTOM STRIP) */}
      <footer className="vscode-statusbar">
        <div className="statusbar-left">
          <div className="statusbar-item status-branch" title="Git Branch: main">
            <GitBranch size={13} />
            <span>main</span>
          </div>
          <div className="statusbar-item status-sync" title="Sync Status">
            <RefreshCw size={12} />
          </div>
          <div className="statusbar-item status-problems" title="Problems: 0 errors, 0 warnings">
            <span className="error-dot">●</span>
            <span>0</span>
            <span className="warn-dot">▲</span>
            <span>0</span>
          </div>
        </div>
        
        <div className="statusbar-right">
          <div className="statusbar-item">Next.js</div>
          <div className="statusbar-item">TypeScript</div>
          <div className="statusbar-item">Tailwind</div>
          <div className="statusbar-item">UTF-8</div>
          <div className="statusbar-item status-port" title="Development Port">
            <Terminal size={12} />
            <span>Port: 3000</span>
          </div>
          <div className="statusbar-item status-time">
            {currentTime}
          </div>
          <div className="statusbar-item status-bell" title="Notifications">
            <Bell size={12} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
