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
          <h4>Follow Us</h4>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/atiendebot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="https://www.tiktok.com/@atiendebot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a 
              href="https://www.youtube.com/@AtiendeBot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a 
              href="https://x.com/AtiendeBot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="X (Twitter)"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>{t.footer.navigation}</h4>
          <div className="footer-nav">
            <a href="#features" className="footer-nav-link">{t.nav.features}</a>
            <a href="#use-cases" className="footer-nav-link">{t.nav.useCases}</a>
            <a href="#how-it-works" className="footer-nav-link">{t.nav.howItWorks}</a>
            <a href="#customer-journey" className="footer-nav-link">{t.nav.customerJourney}</a>
            <a href="#faq" className="footer-nav-link">{t.nav.faq}</a>
            <a href="#contact" className="footer-nav-link">{t.nav.contact}</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>{t.footer.contact}</h4>
          <div className="footer-nav">
            <a 
              href="mailto:atiendebot@gmail.com" 
              className="footer-nav-link"
            >
              atiendebot@gmail.com
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>{t.footer.legal}</h4>
          <div className="footer-nav">
            <span 
              className="footer-nav-link" 
              onClick={() => window.location.href='/terms.html'}
            >
              {t.footer.terms}
            </span>
            <span 
              className="footer-nav-link" 
              onClick={() => window.location.href='/privacy.html'}
            >
              {t.footer.privacy}
            </span>
            <span 
              className="footer-nav-link" 
              onClick={() => window.location.href='/cookies.html'}
            >
              {t.footer.cookies}
            </span>
          </div>
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
