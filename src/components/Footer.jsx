import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-logo">
          <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Portfolio.</span>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Freelance Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
