import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { sendContactFormEmail, sendAutoReplyEmail } from '../utils/emailService';

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    return name.trim() && email.trim() && message.trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email notification to you
      const emailResult = await sendContactFormEmail(formData);
      
      if (emailResult.success) {
        // Send auto-reply to the user
        await sendAutoReplyEmail(formData);
        
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-divider"></div>
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          {t.contact.title}
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          {t.contact.subtitle}
        </p>
        
        <form className="contact-form" id="contactForm" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">{t.contact.form.name}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <span className="error-message"></span>
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.form.email}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
              <span className="error-message"></span>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">{t.contact.form.phone}</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleInputChange}
              />
              <span className="error-message"></span>
            </div>
            <div className="form-group">
              <label htmlFor="business">{t.contact.form.business}</label>
              <select 
                id="business" 
                name="business"
                value={formData.business}
                onChange={handleInputChange}
              >
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
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleInputChange}
              required 
              placeholder={t.contact.form.messagePlaceholder}
            ></textarea>
            <span className="error-message"></span>
          </div>
          
          <button type="submit" className="cta-primary" disabled={isSubmitting}>
            <i data-lucide={isSubmitting ? "loader" : "send"} className="cta-icon"></i>
            {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
          </button>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="form-success" style={{ 
              marginTop: '1rem', 
              padding: '1rem', 
              backgroundColor: '#d4edda', 
              color: '#155724', 
              border: '1px solid #c3e6cb', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <i data-lucide="check-circle" style={{ marginRight: '0.5rem' }}></i>
              {t.contact.form.successMessage}
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="form-error" style={{ 
              marginTop: '1rem', 
              padding: '1rem', 
              backgroundColor: '#f8d7da', 
              color: '#721c24', 
              border: '1px solid #f5c6cb', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <i data-lucide="alert-circle" style={{ marginRight: '0.5rem' }}></i>
              {t.contact.form.errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
