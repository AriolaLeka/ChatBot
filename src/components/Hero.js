import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-icon" data-aos="fade-up" data-aos-duration="1000">
            <i data-lucide="message-circle" className="hero-main-icon"></i>
          </div>
          
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            {t.hero.title}
          </h1>
          
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            {t.hero.subtitle}
          </p>
          
          <div className="hero-cta" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <a href="#contact" className="cta-primary">
              <i data-lucide="rocket" className="cta-icon"></i>
              {t.hero.cta}
            </a>
            <a href="#how-it-works" className="cta-secondary">
              <i data-lucide="play-circle" className="cta-icon"></i>
              See How It Works
            </a>
          </div>
          
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
            <div className="stat-item">
              <i className="fas fa-users stat-icon"></i>
              <div className="stat-number">{t.hero.stats.businesses.number}</div>
              <div className="stat-label">{t.hero.stats.businesses.label}</div>
            </div>
            <div className="stat-item">
              <i className="fas fa-clock stat-icon"></i>
              <div className="stat-number">{t.hero.stats.availability.number}</div>
              <div className="stat-label">{t.hero.stats.availability.label}</div>
            </div>
            <div className="stat-item">
              <i className="fas fa-language stat-icon"></i>
              <div className="stat-number">{t.hero.stats.languages.number}</div>
              <div className="stat-label">{t.hero.stats.languages.label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
