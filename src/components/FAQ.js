import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const FAQ = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = t.faq.questions;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          {t.faq.title}
        </h2>
        
        <div className="faq-container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
