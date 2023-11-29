import React from 'react';
import { ContactForm } from './ContactForm';

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-wrap">
        <div className="hero-left">
          <h1 className="heading-1">
            <strong className="bold-text">
            Commercial Property Tax Appeal
            </strong>
          </h1>
          <p className="subhead-1">
            <strong className="bold-text-2">
              We&#x27;ll help you challenge your commercial
              property assessment appeal.
            </strong>
          </p>
        </div>
        <div className="hero-right">
          <div className="w-layout-blockcontainer w-container">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
