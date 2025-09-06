import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const SecondaryCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="secondary-cta">
      <div className="section-divider"></div>
      <div className="container">
        <div className="cta-content">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            {t.secondaryCta.title}
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            {t.secondaryCta.subtitle}
          </p>
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <a href="#contact" className="cta-primary">{t.secondaryCta.button}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryCTA;
