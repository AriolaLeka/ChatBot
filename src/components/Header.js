import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
  const { language, switchLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLanguageSwitch = (lang) => {
    switchLanguage(lang);
    closeMobileMenu();
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="AtiendeBot Logo" className="logo-img" />
          <span className="logo-text">AtiendeBot</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#features" onClick={closeMobileMenu}>{t.nav.features}</a></li>
          <li><a href="#use-cases" onClick={closeMobileMenu}>{t.nav.useCases}</a></li>
          <li><a href="#how-it-works" onClick={closeMobileMenu}>{t.nav.howItWorks}</a></li>
          <li><a href="#faq" onClick={closeMobileMenu}>{t.nav.faq}</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>{t.nav.contact}</a></li>
          <li className="language-switcher">
            <button 
              onClick={() => handleLanguageSwitch('en')} 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
            <button 
              onClick={() => handleLanguageSwitch('es')} 
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
            >
              ES
            </button>
          </li>
        </ul>
        
        {/* Mobile Menu Overlay */}
        <div 
          className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
        ></div>
      </nav>
    </header>
  );
};

export default Header;
