import React from 'react';
import { Users, Award, Landmark } from 'lucide-react';

export const Community: React.FC = () => {
  const groups = [
    {
      name: "Google Developer Groups (GDG)",
      role: "Active Contributor",
      details: "Spoke at local developer meetups about building high-performance local-first web applications and emulators.",
      icon: Users,
      badgeColor: '#389fff'
    },
    {
      name: "Web Development Guild",
      role: "Organizer & Lead",
      details: "Organized internal technical workshops, brownbag sessions, and design review boards at Entropretty.",
      icon: Landmark,
      badgeColor: '#c084fc'
    },
    {
      name: "OpenSource Noida Community",
      role: "Mentor",
      details: "Co-hosted community bootcamps, guiding 50+ students in setting up Git configurations and making their first pull requests.",
      icon: Award,
      badgeColor: '#f472b6'
    }
  ];

  return (
    <div className="gaming-container fade-in">
      <h2>Clubs and Community</h2>
      <p className="section-desc">My involvement in engineering guilds, developer meetups, and local tech communities.</p>
      <div className="gaming-grid">
        {groups.map((g) => {
          const Icon = g.icon;
          return (
            <div key={g.name} className="gaming-card" style={{ borderBottomColor: g.badgeColor }}>
              <div className="gaming-card-header">
                <Icon size={20} style={{ color: g.badgeColor, marginRight: '8px' }} />
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
