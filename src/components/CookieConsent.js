import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import CookieManager from '../utils/cookieManager';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const preferences = JSON.parse(consent);
      setCookiePreferences(preferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
    // Initialize analytics and other services
    initializeServices(allAccepted);
  };

  const handleDeclineAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setCookiePreferences(onlyEssential);
    localStorage.setItem('cookieConsent', JSON.stringify(onlyEssential));
    setShowBanner(false);
    // Only initialize essential services
    initializeServices(onlyEssential);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    setShowPreferences(false);
    setShowBanner(false);
    // Initialize services based on preferences
    initializeServices(cookiePreferences);
  };

  const handlePreferenceChange = (category) => {
    if (category === 'essential') return; // Can't disable essential cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const initializeServices = (preferences) => {
    // Initialize Google Analytics if analytics cookies are accepted
    if (preferences.analytics) {
      // Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics ID
      // CookieManager.initializeGoogleAnalytics('GA_MEASUREMENT_ID');
      console.log('Analytics cookies accepted - Google Analytics ready to initialize');
    }

    // Initialize marketing tools if marketing cookies are accepted
    if (preferences.marketing) {
      // Replace 'FACEBOOK_PIXEL_ID' with your actual Facebook Pixel ID
      // CookieManager.initializeFacebookPixel('FACEBOOK_PIXEL_ID');
      console.log('Marketing cookies accepted - Facebook Pixel ready to initialize');
    }

    // Initialize functional services if functional cookies are accepted
    if (preferences.functional) {
      // Set default user preferences
      CookieManager.setUserPreference('theme', 'light');
      CookieManager.setUserPreference('language', 'en');
      console.log('Functional cookies accepted - user preferences enabled');
    }

    // Clear cookies for declined categories
    if (!preferences.analytics) {
      CookieManager.clearCategoryCookies('analytics');
    }
    if (!preferences.marketing) {
      CookieManager.clearCategoryCookies('marketing');
    }
    if (!preferences.functional) {
      CookieManager.clearCategoryCookies('functional');
    }
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const closePreferences = () => {
    setShowPreferences(false);
  };

  if (!showBanner && !showPreferences) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="cookie-banner">
          <div className="cookie-banner-content">
            <div className="cookie-banner-text">
              <h4>{t.cookies.banner.title}</h4>
              <p>{t.cookies.banner.description}</p>
              <p className="cookie-policy-link">
                <a href="/cookies.html" target="_blank" rel="noopener noreferrer">
                  {t.cookies.banner.learnMore}
                </a>
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button 
                className="cookie-btn cookie-btn-secondary"
                onClick={openPreferences}
              >
                {t.cookies.banner.preferences}
              </button>
              <button 
                className="cookie-btn cookie-btn-decline"
                onClick={handleDeclineAll}
              >
                {t.cookies.banner.decline}
              </button>
              <button 
                className="cookie-btn cookie-btn-accept"
                onClick={handleAcceptAll}
              >
                {t.cookies.banner.accept}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="cookie-modal-overlay" onClick={closePreferences}>
          <div className="cookie-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cookie-modal-header">
              <h3>{t.cookies.preferences.title}</h3>
              <button className="cookie-modal-close" onClick={closePreferences}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="cookie-modal-content">
              <p className="cookie-modal-description">
                {t.cookies.preferences.description}
              </p>

              {/* Essential Cookies */}
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>{t.cookies.categories.essential.title}</h4>
                    <p>{t.cookies.categories.essential.description}</p>
                  </div>
                  <div className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.essential}
                      disabled
                      readOnly
                    />
                    <span className="cookie-toggle-label">{t.cookies.alwaysActive}</span>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>{t.cookies.categories.analytics.title}</h4>
                    <p>{t.cookies.categories.analytics.description}</p>
                  </div>
                  <div className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.analytics}
                      onChange={() => handlePreferenceChange('analytics')}
                    />
                    <span className="cookie-toggle-slider"></span>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>{t.cookies.categories.marketing.title}</h4>
                    <p>{t.cookies.categories.marketing.description}</p>
                  </div>
                  <div className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.marketing}
                      onChange={() => handlePreferenceChange('marketing')}
                    />
                    <span className="cookie-toggle-slider"></span>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>{t.cookies.categories.functional.title}</h4>
                    <p>{t.cookies.categories.functional.description}</p>
                  </div>
                  <div className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.functional}
                      onChange={() => handlePreferenceChange('functional')}
                    />
                    <span className="cookie-toggle-slider"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cookie-modal-footer">
              <button 
                className="cookie-btn cookie-btn-secondary"
                onClick={handleDeclineAll}
              >
                {t.cookies.preferences.declineAll}
              </button>
              <button 
                className="cookie-btn cookie-btn-accept"
                onClick={handleSavePreferences}
              >
                {t.cookies.preferences.savePreferences}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
