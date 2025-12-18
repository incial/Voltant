/**
 * Asset Path Constants
 * Centralized asset path management with lazy loading support
 * @module constants/assets
 */

/**
 * Base paths for different asset types
 */
const ASSET_PATHS = {
  images: '/assets/images',
  icons: '/assets/icons',
  videos: '/Videos',
  pdfs: '/pdfs'
};

/**
 * Logo assets
 */
export const LOGOS = {
  main: `${ASSET_PATHS.images}/Home/Logo.webp`,
  white: `${ASSET_PATHS.images}/Home/Logo_white.webp`,
  icon: `${ASSET_PATHS.images}/Home/Logo_icon.webp`
};

/**
 * Icon assets organized by category
 */
export const ICONS = {
  // Energy & Power
  battery: `${ASSET_PATHS.icons}/battery.webp`,
  power: `${ASSET_PATHS.icons}/Power.webp`,
  comet: `${ASSET_PATHS.icons}/comet.webp`,
  sun: `${ASSET_PATHS.icons}/sun.webp`,

  // Nature & Environment
  leaf: `${ASSET_PATHS.icons}/leaf.webp`,
  water: `${ASSET_PATHS.icons}/water.webp`,
  waterPure: `${ASSET_PATHS.icons}/waterpure.webp`,

  // Interface Elements
  circle: `${ASSET_PATHS.icons}/circle.webp`,
  star: `${ASSET_PATHS.icons}/star.webp`,
  like: `${ASSET_PATHS.icons}/like.webp`,
  folder: `${ASSET_PATHS.icons}/folder.webp`,
  shield: `${ASSET_PATHS.icons}/sheild.webp`,

  // Business & Analytics
  stat: `${ASSET_PATHS.icons}/stat.webp`,
  scale: `${ASSET_PATHS.icons}/Scale.webp`,
  scaleMoney: `${ASSET_PATHS.icons}/Scale_money.webp`,
  time: `${ASSET_PATHS.icons}/TIme.webp`,

  // Other
  crop: `${ASSET_PATHS.icons}/crop.webp`,
  multi: `${ASSET_PATHS.icons}/multi.webp`
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
  aboutUs: `${ASSET_PATHS.images}/Home/About_us.webp`,
  footer: `${ASSET_PATHS.images}/Home/Footer.webp`,

  clients: {
    client1: `${ASSET_PATHS.images}/Home/clients/client_1.webp`,
    client2: `${ASSET_PATHS.images}/Home/clients/client_2.webp`,
    client3: `${ASSET_PATHS.images}/Home/clients/client_3.webp`,
    client4: `${ASSET_PATHS.images}/Home/clients/client_4.webp`,
    client5: `${ASSET_PATHS.images}/Home/clients/client_5.webp`,
    client6: `${ASSET_PATHS.images}/Home/clients/client_6.webp`,
    client7: `${ASSET_PATHS.images}/Home/clients/client_7.webp`,
    client8: `${ASSET_PATHS.images}/Home/clients/client_8.webp`,
    client9: `${ASSET_PATHS.images}/Home/clients/client_9.webp`,
    client10: `${ASSET_PATHS.images}/Home/clients/client_10.webp`
  }
};

/**
 * EV Charging images
 */
export const EV_IMAGES = {
  // Hero images
  acCharger: `${ASSET_PATHS.images}/EV_charging/AC_charger1.jpg`,
  dcCharger: `${ASSET_PATHS.images}/EV_charging/EV_main1.webp`,
  cpo: `${ASSET_PATHS.images}/EV_charging/cpo1.jpg`,
  engineeringWorks: `${ASSET_PATHS.images}/EV_charging/Engineering_works.webp`,
  more: `${ASSET_PATHS.images}/EV_charging/More.webp`,
  charger: `${ASSET_PATHS.images}/EV_charging/charger.webp`,

  // About/Detail images
  acAbout: `${ASSET_PATHS.images}/EV_charging/AC_about.webp`,
  dcAbout: `${ASSET_PATHS.images}/EV_charging/DC_about.webp`,
  cpoAbout: `${ASSET_PATHS.images}/EV_charging/cpo_abt.png`,
  ewAbout: `${ASSET_PATHS.images}/EV_charging/EW_about.webp`,
  moreAbout: `${ASSET_PATHS.images}/EV_charging/More_about.webp`,

  // Product images
  acChargerImage: `${ASSET_PATHS.images}/EV_charging/AC_charger_image.png`,
  dcChargerImage: `${ASSET_PATHS.images}/EV_charging/DC_charger_image.png`
};

/**
 * Waste to Energy images
 */
export const WASTE_IMAGES = {
  // Hero images
  household: `${ASSET_PATHS.images}/WateTOEnergy/biogas.jpg`,
  largeScalePlant: `${ASSET_PATHS.images}/WateTOEnergy/Large_Scale_plant.webp`,
  containerizedPlant: `${ASSET_PATHS.images}/WateTOEnergy/container.png`,
  smartWaste: `${ASSET_PATHS.images}/WateTOEnergy/bins.png`,

  // About/Detail images
  hsAbout: `${ASSET_PATHS.images}/WateTOEnergy/biogas.jpg`,
  lsAbout: `${ASSET_PATHS.images}/WateTOEnergy/LS_about.webp`,
  cpAbout: `${ASSET_PATHS.images}/WateTOEnergy/CP_about.webp`,
  swAbout: `${ASSET_PATHS.images}/WateTOEnergy/smart_about.png`
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
