// Cookie Management Utility
export class CookieManager {
  static setCookie(name, value, days = 365, category = 'essential') {
    // Check if user has consented to this category
    const consent = this.getConsent();
    if (!consent[category] && category !== 'essential') {
      console.log(`Cookie ${name} blocked - no consent for ${category} category`);
      return false;
    }

    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    return true;
  }

  static getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  static deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }

  static getConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      return JSON.parse(consent);
    }
    return {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    };
  }

  static hasConsent(category) {
    const consent = this.getConsent();
    return consent[category] || false;
  }

  static clearAllCookies() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name.trim()}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }
  }

  static clearCategoryCookies(category) {
    // Define cookies by category
    const cookieCategories = {
      analytics: ['_ga', '_gid', '_gat', '_fbp', '_gcl_au'],
      marketing: ['_fbp', '_gcl_au', 'ads_prefs', 'marketing_id'],
      functional: ['user_preferences', 'theme', 'language_pref']
    };

    if (cookieCategories[category]) {
      cookieCategories[category].forEach(cookieName => {
        this.deleteCookie(cookieName);
      });
    }
  }

  // Google Analytics Integration
  static initializeGoogleAnalytics(measurementId) {
    if (!this.hasConsent('analytics')) {
      console.log('Google Analytics blocked - no analytics consent');
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=Lax;Secure'
    });

    console.log('Google Analytics initialized');
  }

  // Facebook Pixel Integration
  static initializeFacebookPixel(pixelId) {
    if (!this.hasConsent('marketing')) {
      console.log('Facebook Pixel blocked - no marketing consent');
      return;
    }

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', pixelId);
    fbq('track', 'PageView');

    console.log('Facebook Pixel initialized');
  }

  // Track events with consent check
  static trackEvent(eventName, parameters = {}, category = 'analytics') {
    if (!this.hasConsent(category)) {
      console.log(`Event ${eventName} blocked - no ${category} consent`);
      return;
    }

    if (window.gtag) {
      gtag('event', eventName, parameters);
    }

    if (window.fbq) {
      fbq('track', eventName, parameters);
    }

    console.log(`Event tracked: ${eventName}`, parameters);
  }

  // Set user preferences with consent check
  static setUserPreference(key, value) {
    if (!this.hasConsent('functional')) {
      console.log(`User preference ${key} blocked - no functional consent`);
      return false;
    }

    this.setCookie(key, value, 365, 'functional');
    return true;
  }

  // Get user preferences
  static getUserPreference(key) {
    return this.getCookie(key);
  }
}

// Export for use in components
export default CookieManager;
