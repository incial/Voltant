/**
 * Image Asset Constants
 * @module constants/assets/images
 */

import { ASSET_PATHS, getResponsiveImagePaths } from './paths';

/**
 * Logo assets
 */
export const LOGOS = {
  main: `${ASSET_PATHS.home}/logo.png`,
  explore: `${ASSET_PATHS.home}/logo-explore.png`,
  white: `${ASSET_PATHS.home}/logo-white.png`,
  icon: `${ASSET_PATHS.home}/logo-icon.png`,
  iconSvg: '/Logo_icon.svg',
};

/**
 * Home page images
 */
export const HOME_IMAGES = {
  // Hero section
  hero: {
    slide1: getResponsiveImagePaths('hero', 'hero1'),
    slide2: getResponsiveImagePaths('hero', 'hero2'),
    slide3: getResponsiveImagePaths('hero', 'hero3'),
  },
  
  // Split section
  split: {
    image1: `${ASSET_PATHS.split}/split1.png`,
    image2: `${ASSET_PATHS.split}/split2.png`,
  },
  
  // About section
  about: `${ASSET_PATHS.home}/about-us.png`,
  aboutBanner: `${ASSET_PATHS.home}/about-banner.png`,
  subLogo: `${ASSET_PATHS.home}/sub-logo.png`,
  
  // Footer & Background
  footer: `${ASSET_PATHS.home}/footer.png`,
  connectBg: `${ASSET_PATHS.home}/connect-with-us-bg.png`,
  descriptionBg: `${ASSET_PATHS.home}/description-bg.png`,
  biogas: `${ASSET_PATHS.home}/biogas.png`,
  largeScalePlant: `${ASSET_PATHS.home}/large-scale-plant.png`,
};

/**
 * Client logos
 */
export const CLIENT_IMAGES = {
  client1: `${ASSET_PATHS.clients}/client-1.png`,
  client2: `${ASSET_PATHS.clients}/client-2.png`,
  client3: `${ASSET_PATHS.clients}/client-3.png`,
  client4: `${ASSET_PATHS.clients}/client-4.png`,
  client5: `${ASSET_PATHS.clients}/client-5.png`,
  client6: `${ASSET_PATHS.clients}/client-6.png`,
  client7: `${ASSET_PATHS.clients}/client-7.png`,
  client8: `${ASSET_PATHS.clients}/client-8.png`,
  client9: `${ASSET_PATHS.clients}/client-9.png`,
  client10: `${ASSET_PATHS.clients}/client-10.png`,
};

/**
 * Showcase/Gallery images
 */
export const SHOWCASE_IMAGES = {
  image1: `${ASSET_PATHS.showcase}/image-13.png`,
  image2: `${ASSET_PATHS.showcase}/image-14.png`,
  image3: `${ASSET_PATHS.showcase}/image-15.png`,
  image4: `${ASSET_PATHS.showcase}/image-16.png`,
  image5: `${ASSET_PATHS.showcase}/image-17.png`,
  image6: `${ASSET_PATHS.showcase}/image-18.png`,
  image7: `${ASSET_PATHS.showcase}/image-19.png`,
  image8: `${ASSET_PATHS.showcase}/image-20.png`,
  image9: `${ASSET_PATHS.showcase}/image-21.png`,
  image10: `${ASSET_PATHS.showcase}/image-22.png`,
  image11: `${ASSET_PATHS.showcase}/image-23.png`,
  image12: `${ASSET_PATHS.showcase}/image-24.png`,
};

/**
 * EV Charging section images
 */
export const EV_IMAGES = {
  // Main/Hero images
  main: getResponsiveImagePaths('evCharging', 'ev-main'),
  evCharging: getResponsiveImagePaths('evCharging', 'ev-charging'),
  charger: `${ASSET_PATHS.evCharging}/charger.png`,
  
  // AC Charger
  ac: {
    hero: getResponsiveImagePaths('evCharging', 'ac-charger'),
    charger1: getResponsiveImagePaths('evCharging', 'ac-charger1'),
    about: getResponsiveImagePaths('evCharging', 'ac-about'),
    image: `${ASSET_PATHS.evCharging}/ac-charger-image.png`,
    wallbox: getResponsiveImagePaths('evCharging', 'wallbox'),
  },
  
  // DC Charger
  dc: {
    hero: getResponsiveImagePaths('evCharging', 'dc-charger'),
    charger1: getResponsiveImagePaths('evCharging', 'dc-charger1'),
    about: getResponsiveImagePaths('evCharging', 'dc-about'),
    image: `${ASSET_PATHS.evCharging}/dc-charger-image.png`,
    fast: getResponsiveImagePaths('evCharging', 'dc-fast'),
    new: getResponsiveImagePaths('evCharging', 'dc-new'),
  },
  
  // CPO (Charge Point Operator)
  cpo: {
    hero: getResponsiveImagePaths('evCharging', 'cpo'),
    main: getResponsiveImagePaths('evCharging', 'cpo1'),
    about: getResponsiveImagePaths('evCharging', 'cpo-about'),
    abt: `${ASSET_PATHS.evCharging}/cpo-abt.png`,
  },
  
  // Engineering Works
  engineering: {
    hero: getResponsiveImagePaths('evCharging', 'engineering-works'),
    about: getResponsiveImagePaths('evCharging', 'ew-about'),
  },
  
  // More Services
  more: {
    hero: getResponsiveImagePaths('evCharging', 'more'),
    about: getResponsiveImagePaths('evCharging', 'more-about'),
  },
};

/**
 * Waste to Energy section images
 */
export const WASTE_IMAGES = {
  // Main
  main: getResponsiveImagePaths('wasteToEnergy', 'main'),
  
  // Household/Biogas
  household: {
    hero: getResponsiveImagePaths('wasteToEnergy', 'biogas'),
    main: getResponsiveImagePaths('wasteToEnergy', 'household'),
    about: getResponsiveImagePaths('wasteToEnergy', 'hs-about'),
  },
  
  // Large Scale Plant
  largeScale: {
    hero: getResponsiveImagePaths('wasteToEnergy', 'large-scale-plant'),
    about: getResponsiveImagePaths('wasteToEnergy', 'ls-about'),
  },
  
  // Containerized Plant
  containerized: {
    hero: getResponsiveImagePaths('wasteToEnergy', 'containerized-plant'),
    container: getResponsiveImagePaths('wasteToEnergy', 'container'),
    about: getResponsiveImagePaths('wasteToEnergy', 'cp-about'),
  },
  
  // Smart Waste
  smartWaste: {
    hero: getResponsiveImagePaths('wasteToEnergy', 'smart-waste'),
    bins: getResponsiveImagePaths('wasteToEnergy', 'bins'),
    smartbin: getResponsiveImagePaths('wasteToEnergy', 'smartbin'),
    about: getResponsiveImagePaths('wasteToEnergy', 'sw-about'),
    end: getResponsiveImagePaths('wasteToEnergy', 'smart-end'),
  },
};

/**
 * Get all images for a section as a flat array (for preloading)
 * @param {Object} imageObj - Image object to flatten
 * @returns {string[]} Array of image paths
 */
export const flattenImagePaths = (imageObj) => {
  const paths = [];
  
  const extract = (obj) => {
    for (const value of Object.values(obj)) {
      if (typeof value === 'string') {
        paths.push(value);
      } else if (typeof value === 'object') {
        extract(value);
      }
    }
  };
  
  extract(imageObj);
  return paths;
};
