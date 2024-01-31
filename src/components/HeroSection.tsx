import React from 'react';
import { ContactForm } from './ContactForm';

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-wrap">
        <div className="hero-left">
          <h1 className="heading-1">
            <strong className="bold-text">
            Sue Your Solar Company
            </strong>
          </h1>
          <p className="subhead-1">
            <strong className="bold-text-2">
              

            Our expertise helps you navigate the complex legal landscape, providing you with solid evidence and support to sue your solar company effectively.
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
