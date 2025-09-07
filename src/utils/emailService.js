import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_57gh8lr'; // Your Gmail service ID
const EMAILJS_TEMPLATE_ID = 'template_0msdukn'; // Your contact form template ID
const EMAILJS_PUBLIC_KEY = 'ojM8KNFwVySNEX8JT'; // Your public key

// Check if EmailJS is configured
const isEmailJSConfigured = () => {
  return EMAILJS_SERVICE_ID && 
         EMAILJS_TEMPLATE_ID && 
         EMAILJS_PUBLIC_KEY;
};

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendContactFormEmail = async (formData) => {
  try {
    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      console.warn('EmailJS not configured. Please follow the setup guide in EMAILJS_SETUP.md');
      // For development/testing, simulate success
      return { success: true, response: { status: 200, text: 'EmailJS not configured - simulated success' } };
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      business_type: formData.business || 'Not specified',
      message: formData.message,
      to_email: 'atiendebot@gmail.com', // Your email address
      reply_to: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      date: new Date().toLocaleString(),
    };

    // Send email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};

export const sendAutoReplyEmail = async (formData) => {
  try {
    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      console.warn('EmailJS not configured. Auto-reply skipped.');
      return { success: true, response: { status: 200, text: 'EmailJS not configured - auto-reply skipped' } };
    }

    // Auto-reply template parameters
    const templateParams = {
      to_name: formData.name,
      to_email: formData.email,
      from_name: 'AtiendeBot Team',
      subject: 'Thank you for contacting AtiendeBot!',
      message: `Hi ${formData.name},\n\nThank you for reaching out to us! We've received your message and will get back to you within 24 hours.\n\nYour message:\n"${formData.message}"\n\nBest regards,\nThe AtiendeBot Team`,
    };

    // Send auto-reply (you might want a different template for this)
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_hlyo47k', // Your auto-reply template ID
      templateParams
    );

    console.log('Auto-reply sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    return { success: false, error };
  }
};
