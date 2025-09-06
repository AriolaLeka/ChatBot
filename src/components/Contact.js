import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          {t.contact.title}
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          {t.contact.subtitle}
        </p>
        
        <form className="contact-form" id="contactForm" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">{t.contact.form.name}</label>
              <input type="text" id="name" name="name" required />
              <span className="error-message"></span>
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.form.email}</label>
              <input type="email" id="email" name="email" required />
              <span className="error-message"></span>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">{t.contact.form.phone}</label>
              <input type="tel" id="phone" name="phone" />
              <span className="error-message"></span>
            </div>
            <div className="form-group">
              <label htmlFor="business">{t.contact.form.business}</label>
              <select id="business" name="business">
                <option value="">{t.contact.form.businessPlaceholder}</option>
                <option value="restaurant">{t.contact.form.businessOptions.restaurant}</option>
                <option value="hotel">{t.contact.form.businessOptions.hotel}</option>
                <option value="retail">{t.contact.form.businessOptions.retail}</option>
                <option value="services">{t.contact.form.businessOptions.services}</option>
                <option value="other">{t.contact.form.businessOptions.other}</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">{t.contact.form.message}</label>
            <textarea id="message" name="message" rows="5" required placeholder={t.contact.form.messagePlaceholder}></textarea>
            <span className="error-message"></span>
          </div>
          
          <button type="submit" className="cta-primary">
            <i data-lucide="send" className="cta-icon"></i>
            {t.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
