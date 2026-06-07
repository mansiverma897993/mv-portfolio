import React from 'react';
import { GitPullRequest, Star } from 'lucide-react';

export const OpenSource: React.FC = () => {
  const contributions = [
    {
      project: "aws-athena-emulator",
      repo: "entropretty/aws-athena-emulator",
      description: "Contributed validation logic, query validation checks, and integration tests to the Athena emulator mock layer.",
      stars: 124,
      role: "Contributor",
      type: "Pull Request merged"
    },
    {
      project: "solana-anchor-dao",
      repo: "solana-labs/anchor-dao-template",
      description: "Contributed smart contract governance modules and on-chain voting program code using the Anchor framework.",
      stars: 350,
      role: "Contributor",
      type: "Feature addition"
    },
    {
      project: "vscode-emulation-core",
      repo: "vscode-contrib/emulation-core",
      description: "Improved tab focus state management, terminal shell input buffer validation, and responsive pane dimensions.",
      stars: 88,
      role: "Contributor",
      type: "Bug fix merged"
    }
  ];

  return (
    <div className="anime-container fade-in">
      <h2>Open Source Contributions</h2>
      <p className="section-desc">My contributions to community developer tools and open source repositories.</p>
      <div className="anime-grid">
        {contributions.map((c) => (
          <div key={c.project} className="anime-card" style={{ borderBottomColor: '#89d185' }}>
            <div className="anime-card-header">
              <GitPullRequest size={20} style={{ color: '#89d185', marginRight: '8px' }} />
              <h3 style={{ fontSize: '14px', fontFamily: 'monospace' }}>{c.repo}</h3>
            </div>
            <p style={{ fontSize: '13px', lineHeight: '1.4', margin: '4px 0', color: '#cccccc' }}>
              {c.description}
            </p>
            <div className="anime-meta" style={{ marginTop: 'auto', paddingTop: '8px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={12} fill="#cca700" stroke="#cca700" /> {c.stars} stars
              </span>
              <span>{c.type}</span>
            </div>
            <span className="anime-genre" style={{ backgroundColor: 'rgba(137, 209, 133, 0.15)', color: '#a3e635' }}>
              {c.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OpenSource;
