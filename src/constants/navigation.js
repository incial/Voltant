/**
 * Navigation Constants
 * Centralized navigation menu configuration
 * @module constants/navigation
 */

/**
 * Main navigation menu items
 */
export const MAIN_NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    order: 1
  },
  {
    id: 'ev-charging',
    label: 'EV Charging',
    path: '/ev-charging',
    order: 2,
    children: [
      {
        id: 'ac-chargers',
        label: 'AC Chargers',
        path: '/ev-charging/ac-chargers',
        order: 1
      },
      {
        id: 'dc-chargers',
        label: 'DC Chargers',
        path: '/ev-charging/dc-chargers',
        order: 2
      },
      {
        id: 'engineering-works',
        label: 'Engineering Works',
        path: '/ev-charging/engineering-works',
        order: 3
      },
      {
        id: 'cpo',
        label: 'CPO',
        path: '/ev-charging/cpo',
        order: 4
      },
      {
        id: 'more',
        label: 'More',
        path: '/ev-charging/more',
        order: 5
      }
    ]
  },
  {
    id: 'waste-to-energy',
    label: 'Waste To Energy',
    path: '/waste-to-energy',
    order: 3,
    children: [
      {
        id: 'household',
        label: 'Household',
        path: '/waste-to-energy/household',
        order: 1
      },
      {
        id: 'large-scale',
        label: 'Large Scale Plant',
        path: '/waste-to-energy/large-scale',
        order: 2
      },
      {
        id: 'containerized',
        label: 'Containerized Plant',
        path: '/waste-to-energy/containerized-plant',
        order: 3
      },
      {
        id: 'smart-waste',
        label: 'Smart Waste',
        path: '/waste-to-energy/smart-waste',
        order: 4
      }
    ]
  },
  {
    id: 'explore',
    label: 'Explore',
    path: '/whoarewe',
    order: 4
  }
];

/**
 * Breadcrumb configuration
 */
export const BREADCRUMB_LABELS = {
  'home': 'Home',
  'ev-charging': 'EV Charging',
  'ac-chargers': 'AC Chargers',
  'dc-chargers': 'DC Chargers',
  'engineering-works': 'Engineering Works',
  'cpo': 'CPO',
  'more': 'More',
  'waste-to-energy': 'Waste To Energy',
  'household': 'Household',
  'large-scale': 'Large Scale Plant',
  'containerized-plant': 'Containerized Plant',
  'smart-waste': 'Smart Waste Segregation Bins',
  'whoarewe': 'Explore'
};

/**
 * Helper function to generate breadcrumbs from path
 * @param {string} path - Current page path
 * @returns {Array<string>} Array of breadcrumb labels
 */
export const generateBreadcrumbs = (path) => {
  if (path === '/') return ['Home'];
  
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = ['Home'];
  
  segments.forEach(segment => {
    const label = BREADCRUMB_LABELS[segment] || segment;
    breadcrumbs.push(label);
  });
  
  return breadcrumbs;
};

/**
 * Quick action buttons configuration
 */
export const CTA_BUTTONS = {
  contact: {
    label: 'Get in Touch',
    action: 'openContactForm',
    variant: 'primary'
  },
  download: {
    label: 'Download Profile',
    action: 'downloadProfile',
    variant: 'secondary'
  }
};
