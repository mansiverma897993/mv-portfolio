import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Learning: React.FC = () => {
  const learningItems = [
    { title: "System Design & Microservices", status: "In Progress", details: "Studying scalable architectures, message brokers, and load balancing." },
    { title: "Go (Golang)", status: "Completed", details: "Learned concurrency patterns, goroutines, and channels." },
    { title: "Solana Blockchain", status: "In Progress", details: "Writing Rust programs with the Anchor framework." }
  ];

  return (
    <div className="learning-container fade-in">
      <h2>Learning Roadmap</h2>
      <p className="section-desc">What I am currently studying and skills I plan to master next.</p>
      <div className="learning-list">
        {learningItems.map((item) => (
          <div key={item.title} className="learning-card">
            <div className="learning-card-header">
              <GraduationCap size={24} className="learning-icon" />
              <h3>{item.title}</h3>
            </div>
            <span className={`status-label ${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</span>
            <p className="learning-details">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Learning;
