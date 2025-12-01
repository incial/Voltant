/**
 * Company Information Constants
 * Central repository for all company-related information
 * @module constants/company
 */

/**
 * Core company information
 */
export const COMPANY_INFO = {
  name: 'Voltant Energy LLC FZ',
  tagline: 'Powering Sustainable Future',
  description: 'Leading provider of EV charging and waste-to-energy solutions',
  
  // Contact information
  contact: {
    email: 'info@voltantenergy.com',
    phone: '+971506419857',
    whatsapp: '+971506419857',
    address: 'Dubai, United Arab Emirates'
  },
  
  // Legal information
  legal: {
    registrationNumber: '',
    tradeLicense: '',
    vatNumber: ''
  }
};

/**
 * Social media links and handles
 */
export const SOCIAL_LINKS = {
  youtube: {
    url: 'https://youtube.com',
    handle: '@voltantenergy',
    label: 'YouTube'
  },
  instagram: {
    url: 'https://instagram.com',
    handle: '@voltantenergy',
    label: 'Instagram'
  },
  facebook: {
    url: 'https://facebook.com',
    handle: 'voltantenergy',
    label: 'Facebook'
  },
  linkedin: {
    url: 'https://linkedin.com',
    handle: 'company/voltantenergy',
    label: 'LinkedIn'
  },
  twitter: {
    url: 'https://twitter.com',
    handle: '@voltantenergy',
    label: 'X/Twitter'
  },
  whatsapp: {
    url: 'https://wa.me/+971506419857',
    number: '+971506419857',
    label: 'WhatsApp'
  }
};

/**
 * Business hours
 */
export const BUSINESS_HOURS = {
  weekdays: {
    open: '09:00',
    close: '18:00',
    display: '9:00 AM - 6:00 PM'
  },
  weekend: {
    open: null,
    close: null,
    display: 'Closed'
  }
};

/**
 * Partner information
 */
export const PARTNERS = {
  designer: {
    name: 'Incial',
    url: 'https://incial.in',
    label: 'Design Partner'
  }
};

/**
 * Copyright information with dynamic year
 */
export const getCopyrightText = () => {
  const currentYear = new Date().getFullYear();
  return `© Copyright ${currentYear} ${COMPANY_INFO.name}. All Rights Reserved`;
};

/**
 * Full copyright with design credit
 */
export const getFullCopyrightText = () => {
  const currentYear = new Date().getFullYear();
  return `© Copyright ${currentYear} ${COMPANY_INFO.name}. All Rights Reserved and Designed by ${PARTNERS.designer.name}`;
};
