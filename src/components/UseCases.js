import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const UseCases = () => {
  const { t } = useLanguage();

  const useCases = [
    {
      icon: 'fas fa-utensils',
      title: t.useCases.restaurants.title,
      description: t.useCases.restaurants.description
    },
    {
      icon: 'fas fa-bed',
      title: t.useCases.hotels.title,
      description: t.useCases.hotels.description
    },
    {
      icon: 'fas fa-shopping-cart',
      title: t.useCases.retail.title,
      description: t.useCases.retail.description
    },
    {
      icon: 'fas fa-briefcase',
      title: t.useCases.services.title,
      description: t.useCases.services.description
    }
  ];

  return (
    <section id="use-cases" className="use-cases">
      <div className="section-divider"></div>
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          {t.useCases.title}
        </h2>
        
        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="use-case" 
              data-aos="zoom-in" 
              data-aos-delay={100 * (index + 1)} 
              data-aos-duration="1000"
            >
              <i className={useCase.icon}></i>
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
