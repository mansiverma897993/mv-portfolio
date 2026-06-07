import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Send, CheckCircle, ArrowUpRight } from 'lucide-react';

// Custom brand icons
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
    // Simulate submission delay
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
        {/* Left Side: Connect Info */}
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

        {/* Right Side: Message Form */}
        <div className="contact-form-column">
          <h3>Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="custom-contact-form">
            <div className="form-double-row">
              <div className="custom-form-group">
                <label htmlFor="name-input">Name <span className="req-star">*</span></label>
                <input 
                  id="name-input"
                  type="text" 
                  value={form.name}
                  onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="custom-form-group">
                <label htmlFor="email-input">Email <span className="req-star">*</span></label>
                <input 
                  id="email-input"
                  type="email" 
                  value={form.email}
                  onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="custom-form-group">
              <label htmlFor="subject-input">Subject (Optional)</label>
              <input 
                id="subject-input"
                type="text" 
                value={form.subject}
                onChange={e => setForm(prev => ({ ...prev, subject: e.target.value }))}
                placeholder="What's this about?"
              />
            </div>

            <div className="custom-form-group">
              <label htmlFor="message-input">Message <span className="req-star">*</span></label>
              <textarea 
                id="message-input"
                rows={5}
                value={form.message}
                onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Type your message here..."
                required
              />
            </div>

            <button 
              type="submit" 
              className={`submit-message-btn ${status === 'sending' ? 'btn-loading' : ''}`}
              disabled={status === 'sending'}
            >
              <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
              <Send size={14} />
            </button>

            {status === 'success' && (
              <div className="form-status-alert alert-success">
                <CheckCircle size={16} />
                <span>Message sent successfully! I'll reply to your email soon.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
