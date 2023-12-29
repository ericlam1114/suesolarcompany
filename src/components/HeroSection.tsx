import React from 'react';
import { ContactForm } from './ContactForm';

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-wrap">
        <div className="hero-left">
          <h1 className="heading-1">
            <strong className="bold-text">
          QSBS Attestation Letter Online
            </strong>
          </h1>
          <p className="subhead-1">
            <strong className="bold-text-2">
              

              Let us handle the IRS compliance and eligibility, while you focus on the growth and success of your business.
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
