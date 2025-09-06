import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: 'fas fa-clock',
      title: t.features.availability.title,
      description: t.features.availability.description
    },
    {
      icon: 'fas fa-robot',
      title: t.features.automation.title,
      description: t.features.automation.description
    },
    {
      icon: 'fas fa-comments',
      title: t.features.conversations.title,
      description: t.features.conversations.description
    },
    {
      icon: 'fas fa-chart-line',
      title: t.features.growth.title,
      description: t.features.growth.description
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          {t.features.title}
        </h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card" 
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)} 
              data-aos-duration="1000"
            >
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
