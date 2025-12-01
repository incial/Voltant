/**
 * API Configuration Constants
 * Centralized API endpoints and configuration
 * @module constants/api
 */

/**
 * Base API URLs for different environments
 */
const API_BASE_URLS = {
  development: 'http://localhost:3000',
  staging: 'https://staging-api.voltantenergy.com',
  production: 'https://api.voltantenergy.com'
};

/**
 * Current environment
 */
const ENVIRONMENT = import.meta.env.MODE || 'development';

/**
 * Active API base URL
 */
export const API_BASE_URL = API_BASE_URLS[ENVIRONMENT];

/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  contact: {
    submit: '/api/contact/submit',
    validate: '/api/contact/validate'
  },
  newsletter: {
    subscribe: '/api/newsletter/subscribe',
    unsubscribe: '/api/newsletter/unsubscribe'
  },
  downloads: {
    profile: '/api/downloads/profile',
    datasheet: '/api/downloads/datasheet',
    brochure: '/api/downloads/brochure'
  },
  quote: {
    request: '/api/quote/request',
    status: '/api/quote/status'
  }
};

/**
 * EmailJS configuration
 */
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  // Rate limiting
  maxAttemptsPerMinute: 3,
  cooldownPeriod: 60000 // 1 minute in milliseconds
};

/**
 * API request timeout configuration
 */
export const API_TIMEOUTS = {
  default: 10000, // 10 seconds
  upload: 30000,  // 30 seconds
  download: 30000 // 30 seconds
};

/**
 * API retry configuration
 */
export const API_RETRY_CONFIG = {
  maxRetries: 3,
  retryDelay: 1000, // 1 second
  retryableStatusCodes: [408, 429, 500, 502, 503, 504]
};

/**
 * Helper function to build full API URL
 * @param {string} endpoint - API endpoint path
 * @returns {string} Full API URL
 */
export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};
