import { useEffect } from 'react';

export const useAnimations = () => {
  useEffect(() => {
    // Initialize AOS animations
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }

    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners for smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // FAQ accordion functionality is now handled by React state

    // Handle navigation from legal pages
    const handleNavigationFromLegalPages = () => {
      const sectionToNavigate = localStorage.getItem('navigateToSection');
      if (sectionToNavigate) {
        localStorage.removeItem('navigateToSection');
        setTimeout(() => {
          const element = document.getElementById(sectionToNavigate);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 1000); // Wait for page to fully load
      }
    };

    // Check for navigation on page load
    handleNavigationFromLegalPages();

    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        if (!name.value.trim()) {
          showError(name, 'Name is required');
          isValid = false;
        } else {
          clearError(name);
        }
        
        if (!email.value.trim() || !isValidEmail(email.value)) {
          showError(email, 'Valid email is required');
          isValid = false;
        } else {
          clearError(email);
        }
        
        if (!message.value.trim()) {
          showError(message, 'Message is required');
          isValid = false;
        } else {
          clearError(message);
        }
        
        if (isValid) {
          // Here you would typically send the form data to your backend
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
        }
      });
    }

    // Cleanup function
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
};

// Helper functions
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const showError = (input, message) => {
  const errorElement = input.parentNode.querySelector('.error-message');
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  input.style.borderColor = '#e74c3c';
};

const clearError = (input) => {
  const errorElement = input.parentNode.querySelector('.error-message');
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }
  input.style.borderColor = '';
};
