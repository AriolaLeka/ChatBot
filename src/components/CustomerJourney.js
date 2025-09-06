import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const CustomerJourney = () => {
  const { t } = useLanguage();

  const journeySteps = [
    {
      icon: 'fas fa-comment-dots',
      title: t.customerJourney.step1.title,
      description: t.customerJourney.step1.description
    },
    {
      icon: 'fas fa-robot',
      title: t.customerJourney.step2.title,
      description: t.customerJourney.step2.description
    },
    {
      icon: 'fas fa-smile',
      title: t.customerJourney.step3.title,
      description: t.customerJourney.step3.description
    }
  ];

  return (
    <section className="customer-journey">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          {t.customerJourney.title}
        </h2>
        
        <div className="journey-steps">
          {journeySteps.map((step, index) => (
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

export default CustomerJourney;
