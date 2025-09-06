import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "AtiendeBot has transformed our customer service. We never miss an inquiry anymore!",
      author: "María González",
      role: "Restaurant Owner",
      rating: 5
    },
    {
      quote: "The AI responses are so natural, customers think they're talking to a real person. Amazing technology!",
      author: "Carlos Rodriguez",
      role: "Hotel Manager",
      rating: 5
    },
    {
      quote: "Our response time went from hours to seconds. AtiendeBot is a game-changer for our business.",
      author: "Ana Martinez",
      role: "Retail Store Owner",
      rating: 5
    },
    {
      quote: "The multilingual support is incredible. We can now serve customers in 5 different languages automatically.",
      author: "David Kim",
      role: "Service Business Owner",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          {t.testimonials.title}
        </h2>
        
        <div className="testimonials-container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <div className="stars">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="testimonial-quote">"{testimonials[currentTestimonial].quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <h4>{testimonials[currentTestimonial].author}</h4>
                  <span>{testimonials[currentTestimonial].role}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${currentTestimonial === index ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
