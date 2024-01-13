import React from 'react';
import { ContactForm } from './ContactForm';

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-wrap">
        <div className="hero-left">
          <h1 className="heading-1">
            <strong className="bold-text">
            QSBS Attestation Letter Service
            </strong>
          </h1>
          <p className="subhead-1">
            <strong className="bold-text-2">
              

            Formally certify your eligibility for QSBS. We provide you with defensible proof that your investment meets the specific Internal Revenue Code, Section 1202 requirements.
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
