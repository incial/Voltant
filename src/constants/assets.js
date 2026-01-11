/**
 * Asset Path Constants
 * DEPRECATED: This file is maintained for backward compatibility.
 * Please use imports from '@constants/assets' folder instead.
 * 
 * @deprecated Use src/constants/assets/index.js instead
 * @module constants/assets
 */

// Re-export everything from new modular structure
export * from './assets/index';

// =============================================================================
// LEGACY EXPORTS (for backward compatibility - will be removed in future)
// =============================================================================

/**
 * Base paths for different asset types
 * @deprecated Use ASSET_PATHS from './assets/paths' instead
 */
const ASSET_PATHS = {
  images: '/assets/images',
  icons: '/assets/icons',
  videos: '/Videos',
  pdfs: '/pdfs'
};

/**
 * Logo assets
 * @deprecated Use LOGOS from './assets/images' instead
 */
export const LOGOS = {
  main: `${ASSET_PATHS.images}/Home/Logo.png`,
  white: `${ASSET_PATHS.images}/Home/Logo_white.png`,
  whitePng: `${ASSET_PATHS.images}/Home/Logo_white.png`,
  icon: `${ASSET_PATHS.images}/Home/Logo_icon.png`
};

/**
 * Icon assets organized by category
 * @deprecated Use ICONS from './assets/icons' instead
 */
export const ICONS = {
  // Energy & Power
  battery: `${ASSET_PATHS.icons}/battery.png`,
  power: `${ASSET_PATHS.icons}/Power.png`,
  comet: `${ASSET_PATHS.icons}/comet.png`,
  sun: `${ASSET_PATHS.icons}/sun.png`,

  // Nature & Environment
  leaf: `${ASSET_PATHS.icons}/leaf.png`,
  water: `${ASSET_PATHS.icons}/water.png`,
  waterPure: `${ASSET_PATHS.icons}/waterpure.png`,

  // Interface Elements
  circle: `${ASSET_PATHS.icons}/circle.png`,
  star: `${ASSET_PATHS.icons}/star.png`,
  like: `${ASSET_PATHS.icons}/like.png`,
  folder: `${ASSET_PATHS.icons}/folder.png`,
  shield: `${ASSET_PATHS.icons}/sheild.png`,

  // Business & Analytics
  stat: `${ASSET_PATHS.icons}/stat.png`,
  scale: `${ASSET_PATHS.icons}/Scale.png`,
  scaleMoney: `${ASSET_PATHS.icons}/Scale_money.png`,
  // Backwards-compatible alias for previous 'money' key
  money: `${ASSET_PATHS.icons}/Scale_money.png`,
  time: `${ASSET_PATHS.icons}/TIme.png`,

  // Other
  crop: `${ASSET_PATHS.icons}/crop.png`,
  multi: `${ASSET_PATHS.icons}/multi.png`
};

/**
 * Video assets
 */
export const VIDEOS = {
  hero: {
    vid1: `${ASSET_PATHS.videos}/HeroVid1.mp4`,
    vid2: `${ASSET_PATHS.videos}/HeroVid2.mp4`,
    vid3: `${ASSET_PATHS.videos}/HeroVid3.mp4`
  },
  banners: {
    subhero1: `${ASSET_PATHS.videos}/SubHeroVid1.mp4`,
    subhero2: `${ASSET_PATHS.videos}/SubHeroVid2.mp4`,
    goatfooter: `${ASSET_PATHS.videos}/Goatfooter.mp4`,
    subfooter: `${ASSET_PATHS.videos}/Subfooter.mp4`
  }
};

/**
 * Home page images
 */
export const HOME_IMAGES = {
  aboutUs: `${ASSET_PATHS.images}/Home/About_us.png`,
  footer: `${ASSET_PATHS.images}/Home/Footer.png`,

  clients: {
    client1: `${ASSET_PATHS.images}/Home/clients/client_1.png`,
    client2: `${ASSET_PATHS.images}/Home/clients/client_2.png`,
    client3: `${ASSET_PATHS.images}/Home/clients/client_3.png`,
    client4: `${ASSET_PATHS.images}/Home/clients/client_4.png`,
    client5: `${ASSET_PATHS.images}/Home/clients/client_5.png`,
    client6: `${ASSET_PATHS.images}/Home/clients/client_6.png`,
    client7: `${ASSET_PATHS.images}/Home/clients/client_7.png`,
    client8: `${ASSET_PATHS.images}/Home/clients/client_8.png`,
    client9: `${ASSET_PATHS.images}/Home/clients/client_9.png`,
    client10: `${ASSET_PATHS.images}/Home/clients/client_10.png`
  }
};

/**
 * EV Charging images
 */
export const EV_IMAGES = {
  // Hero images
  acCharger: `${ASSET_PATHS.images}/EV_charging/AC_charger1.png`,
  dcCharger: `${ASSET_PATHS.images}/EV_charging/EV_main1.png`,
  cpo: `${ASSET_PATHS.images}/EV_charging/Cpo1.png`,
  engineeringWorks: `${ASSET_PATHS.images}/EV_charging/Engineering_works.png`,
  more: `${ASSET_PATHS.images}/EV_charging/More.png`,
  charger: `${ASSET_PATHS.images}/EV_charging/charger.png`,

  // About/Detail images
  acAbout: `${ASSET_PATHS.images}/EV_charging/AC_about.png`,
  dcAbout: `${ASSET_PATHS.images}/EV_charging/DC_about.png`,
  cpoAbout: `${ASSET_PATHS.images}/EV_charging/cpo_abt.png`,
  ewAbout: `${ASSET_PATHS.images}/EV_charging/EW_about.png`,
  moreAbout: `${ASSET_PATHS.images}/EV_charging/More_about.png`,

  // Product images
  acChargerImage: `${ASSET_PATHS.images}/EV_charging/AC_charger_image.png`,
  dcChargerImage: `${ASSET_PATHS.images}/EV_charging/DC_charger_image.png`,
  wallImage: `${ASSET_PATHS.images}/EV_charging/wallbox.png`,
  dcImage: `${ASSET_PATHS.images}/EV_charging/DC_fast.png`,
  dcNew: `${ASSET_PATHS.images}/EV_charging/DC_new.png`
};

/**
 * Waste to Energy images
 */
export const WASTE_IMAGES = {
  // Hero images
  household: `${ASSET_PATHS.images}/WateTOEnergy/biogas.png`,
  largeScalePlant: `${ASSET_PATHS.images}/WateTOEnergy/Large_Scale_plant.png`,
  containerizedPlant: `${ASSET_PATHS.images}/WateTOEnergy/container.png`,
  smartWaste: `${ASSET_PATHS.images}/WateTOEnergy/bins.png`,
  // About/Detail images
  hsAbout: `${ASSET_PATHS.images}/WateTOEnergy/biogas.png`,
  lsAbout: `${ASSET_PATHS.images}/WateTOEnergy/LS_about.png`,
  cpAbout: `${ASSET_PATHS.images}/WateTOEnergy/CP_about.png`,
  swAbout: `${ASSET_PATHS.images}/WateTOEnergy/wastebin1.png`
};

/**
 * PDF documents
 */
export const PDF_DOCUMENTS = {
  acCharger: {
    datasheet: `${ASSET_PATHS.pdfs}/ac-charger-datasheet.pdf`,
    profile: `${ASSET_PATHS.pdfs}/ac-charger-profile.pdf`
  },
  dcCharger: {
    datasheet: `${ASSET_PATHS.pdfs}/dc-charger-datasheet.pdf`,
    profile: `${ASSET_PATHS.pdfs}/dc-charger-profile.pdf`
  },
  company: {
    profile: `${ASSET_PATHS.pdfs}/company-profile.pdf`,
    brochure: `${ASSET_PATHS.pdfs}/company-brochure.pdf`
  }
};

/**
 * Asset loading utilities
 */
export const AssetLoader = {
  /**
   * Preload an image
   * @param {string} src - Image source URL
   * @returns {Promise<HTMLImageElement>}
   */
  preloadImage: (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  },

  /**
   * Preload multiple images
   * @param {Array<string>} sources - Array of image URLs
   * @returns {Promise<Array<HTMLImageElement>>}
   */
  preloadImages: (sources) => {
    return Promise.all(sources.map(src => AssetLoader.preloadImage(src)));
  },

  /**
   * Preload a video
   * @param {string} src - Video source URL
   * @returns {Promise<HTMLVideoElement>}
   */
  preloadVideo: (src) => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => resolve(video);
      video.onerror = reject;
      video.src = src;
      video.load();
    });
  }
};
