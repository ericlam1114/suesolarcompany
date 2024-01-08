import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="footer-top">
        <div className="footer-top-wrap">
          <div className="footer-link-wrap">
            <a href="mailto:sftaxappeals@gmail.com" className="footer-link">
              Contact
            </a>
            <Link
              href="/privacy-policy-terms-and-conditions"
              className="footer-link"
            >
              Privacy
            </Link>
            <Link
              href="/privacy-policy-terms-and-conditions"
              className="footer-link"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="legal">515 South Flower Street 18th and 19th Floors, Los Angeles, CA 90071</div>
        <div className="footer-bottom-wrap">
          <div className="legal">
            © 2017, QSBS Letter, LLC. All Rights Reserved.{' '}
          </div>
        </div>
      </div>
    </div>
  );
};
