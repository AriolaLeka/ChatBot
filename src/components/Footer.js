import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <img src="/logo.png" alt="AtiendeBot Logo" className="footer-logo" />
          <p>{t.footer.tagline}</p>
        </div>
        <div className="footer-section">
          <h4>{t.footer.contact}</h4>
          <span 
            className="footer-email" 
            onClick={() => window.location.href='mailto:paco.amoros.cubells@gmail.com'}
          >
            paco.amoros.cubells@gmail.com
          </span>
        </div>
        <div className="footer-section">
          <span 
            className="terms-link" 
            onClick={() => window.location.href='/terms.html'}
          >
            Terms and Conditions
          </span>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>&copy; 2024 AtiendeBot. {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
