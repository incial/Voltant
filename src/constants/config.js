/**
 * Application Configuration
 * Global application settings and feature flags
 * @module constants/config
 */

const APP_CONFIG = {
  /**
   * Application metadata
   */
  app: {
    name: 'Voltant Energy',
    version: '1.0.0',
    environment: import.meta.env.MODE || 'development',
    baseUrl: import.meta.env.BASE_URL || '/'
  },

  /**
   * Feature flags
   */
  features: {
    enableAnalytics: true,
    enableContactForm: true,
    enableNewsletter: false,
    enableLiveChat: true,
    enableDarkMode: false,
    enableMultiLanguage: false
  },

  /**
   * UI Configuration
   */
  ui: {
    // Animation settings
    animations: {
      enabled: true,
      duration: {
        fast: 200,
        normal: 300,
        slow: 500
      }
    },
    
    // Navbar settings
    navbar: {
      height: 80,
      scrollThreshold: 50,
      hideOnScroll: false
    },
    
    // Loader settings
    loader: {
      showDelay: 200, // ms before showing loader
      minDisplayTime: 500 // minimum time to display loader
    },
    
    // Toast notification settings
    toast: {
      position: 'top-right',
      duration: 5000,
      maxToasts: 3
    }
  },

  /**
   * Performance settings
   */
  performance: {
    // Lazy loading
    lazyLoading: {
      enabled: true,
      threshold: 0.1, // Intersection observer threshold
      rootMargin: '50px' // Load before element comes into view
    },
    
    // Image optimization
    images: {
      lazyLoad: true,
      placeholder: 'blur',
      quality: 80
    },
    
    // Code splitting
    codeSplitting: {
      enabled: true,
      chunkSize: 200000 // bytes
    }
  },

  /**
   * SEO Configuration
   */
  seo: {
    defaultTitle: 'Voltant Energy - EV Charging & Waste to Energy Solutions',
    titleTemplate: '%s | Voltant Energy',
    defaultDescription: 'Leading provider of EV charging infrastructure and waste-to-energy solutions in the UAE',
    defaultKeywords: ['EV Charging', 'Waste to Energy', 'Sustainable Solutions', 'UAE', 'Dubai'],
    siteName: 'Voltant Energy',
    twitterHandle: '@voltantenergy'
  },

  /**
   * Analytics configuration
   */
  analytics: {
    googleAnalyticsId: import.meta.env.VITE_GA_ID,
    facebookPixelId: import.meta.env.VITE_FB_PIXEL_ID,
    enabled: import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
  },

  /**
   * Form validation settings
   */
  validation: {
    email: {
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      maxLength: 255
    },
    phone: {
      pattern: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
      minLength: 10,
      maxLength: 15
    },
    name: {
      minLength: 2,
      maxLength: 100
    },
    message: {
      minLength: 10,
      maxLength: 1000
    }
  },

  /**
   * Storage keys for localStorage/sessionStorage
   */
  storage: {
    keys: {
      theme: 'voltant_theme',
      language: 'voltant_language',
      consent: 'voltant_cookie_consent',
      userPreferences: 'voltant_user_prefs'
    }
  },

  /**
   * Cache settings
   */
  cache: {
    duration: {
      short: 300000,    // 5 minutes
      medium: 1800000,  // 30 minutes
      long: 3600000     // 1 hour
    }
  }
};

export default APP_CONFIG;
