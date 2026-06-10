import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Learning: React.FC = () => {
  const learningItems = [
    { title: "System Design & Microservices", status: "In Progress", details: "Studying scalable architectures, message brokers, and load balancing." },
    { title: "Solana Blockchain", status: "Completed", details: "Writing Rust programs with the Anchor framework and building decentralized applications." },
    { title: "Full-Stack Web Development", status: "Completed", details: "Mastered frontend interfaces with React/Next.js and backend API integration with Node.js/Express." },
    { title: "Advanced Rust", status: "In Progress", details: "Deep diving into advanced lifetimes, smart pointers, concurrency, and macro development." },
    { title: "LLM RAG & Gen AI", status: "In Progress", details: "Building context-aware AI applications using LLMs, vector databases, and retrieval-augmented generation." },
    { title: "DSA & Problem Solving", status: "In Progress", details: "Solving complex algorithmic problems and mastering advanced data structures." }
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
