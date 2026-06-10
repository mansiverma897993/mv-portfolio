import React from 'react';

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
                <h3>{g.name}</h3>
              </div>
              <div className="gaming-stats">
                <p style={{ fontSize: '13px', lineHeight: '1.4', color: '#cccccc' }}>{g.details}</p>
              </div>
              <span className="game-role" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', border: `1px solid ${g.badgeColor}` }}>
                {g.role}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
