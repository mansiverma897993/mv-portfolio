import React from 'react';
import { Lightbulb } from 'lucide-react';

export const Startup: React.FC = () => {
  return (
    <div className="startup-container fade-in">
      <h2>Startup & Side Projects</h2>
      <p className="section-desc">Ideas and projects I am tinkering with to build the next big thing.</p>
      <div className="startup-card">
        <div className="startup-header">
          <Lightbulb size={32} className="bulb-icon" />
          <h3>DevFlow Space</h3>
        </div>
        <p className="startup-desc">
          A collaborative editor and emulator suite specifically designed for full-stack cloud developers to test AWS queries and microservice interactions locally without incurring cloud expenses.
        </p>
      </div>
    </div>
  );
};
export default Startup;
