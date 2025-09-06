import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: 'fas fa-cog',
      title: t.howItWorks.setup.title,
      description: t.howItWorks.setup.description
    },
    {
      icon: 'fas fa-paint-brush',
      title: t.howItWorks.customize.title,
      description: t.howItWorks.customize.description
    },
    {
      icon: 'fas fa-rocket',
      title: t.howItWorks.launch.title,
      description: t.howItWorks.launch.description
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="section-divider"></div>
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          {t.howItWorks.title}
        </h2>
        
        <div className="steps">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="step" 
              data-aos="fade-up" 
              data-aos-delay={200 * (index + 1)} 
              data-aos-duration="1000"
            >
              <i className={step.icon}></i>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
