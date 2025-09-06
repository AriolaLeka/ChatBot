import { useState, useEffect } from 'react';

export const useCookies = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedPreferences = localStorage.getItem('cookieConsent');
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const hasConsent = (category) => {
    return cookiePreferences[category] || false;
  };

  const hasAnyConsent = () => {
    return Object.values(cookiePreferences).some(preference => preference === true);
  };

  const updatePreferences = (newPreferences) => {
    setCookiePreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
  };

  const clearConsent = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    updatePreferences(onlyEssential);
  };

  return {
    cookiePreferences,
    hasConsent,
    hasAnyConsent,
    updatePreferences,
    clearConsent
  };
};
