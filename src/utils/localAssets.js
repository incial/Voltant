/**
 * Local Assets Utility
 * Provides shorter named imports for local images, videos, and icons
 */

// Hero Section Videos
export const heroVids = {
  vid1: '/Videos/HeroVid1.mp4',
  vid2: '/Videos/HeroVid2.mp4', 
  vid3: '/Videos/HeroVid3.mp4',
  // Fallback mappings for missing hero videos
  heroSection1: '/Videos/HeroVid1.mp4', // Fallback for Hero-Section-1.mp4
  heroSection2: '/Videos/HeroVid2.mp4', // Fallback for Hero-Section-2.mp4
  heroSection3: '/Videos/HeroVid3.mp4'  // Fallback for Hero-Section-3.mp4
};

// Other Videos
export const vids = {
  subfooter: '/Videos/Subfooter.mp4',
  goatfooter: '/Videos/Goatfooter.mp4',
  subhero1: '/Videos/SubHeroVid1.mp4',
  subhero2: '/Videos/SubHeroVid2.mp4',
  // Fallback for missing video files
  evCharging: '/Videos/SubHeroVid1.mp4', // Fallback for EV_charging _video.mp4
  wasteToEnergy: '/Videos/SubHeroVid2.mp4', // Fallback for Waste_To_Energy.mp4
  videoBanner: '/Videos/Goatfooter.mp4', // Fallback for Video_Banner.mp4
  connectWithUs: '/Videos/Subfooter.mp4' // Fallback for Connectwithus.mp4
};

// Logo and Brand Assets
export const logos = {
  main: '/assets/images/Home/Logo.png',
  white: '/assets/images/Home/Logo_white.png',
  icon: '/assets/images/Home/Logo_icon.svg'
};

// Hero Section Icons
export const heroIcons = {
  battery: '/assets/icons/battery.svg',
  circle: '/assets/icons/circle.svg', // Used in SplitImages
  comet: '/assets/icons/comet.svg',
  crop: '/assets/icons/crop.svg',
  folder: '/assets/icons/folder.svg',
  leaf: '/assets/icons/leaf.svg',
  like: '/assets/icons/like.svg',
  multi: '/assets/icons/multi.svg',
  power: '/assets/icons/Power.svg',
  scaleMoney: '/assets/icons/Scale_money.svg',
  scale: '/assets/icons/Scale.svg',
  shield: '/assets/icons/sheild.svg',
  star: '/assets/icons/star.svg',
  stat: '/assets/icons/stat.svg',
  sun: '/assets/icons/sun.svg',
  time: '/assets/icons/TIme.svg',
  water: '/assets/icons/water.svg',
  waterPure: '/assets/icons/waterpure.svg',
  // Fallback mappings for icons used in sectionData.js
  folderAlt: '/assets/icons/folder.svg', // stash_folder-alt-light.svg fallback
  group: '/assets/icons/multi.svg', // Group.svg fallback  
  leafCircle: '/assets/icons/leaf.svg', // pepicons-pencil_leaf-circle.svg fallback
  thumbUp: '/assets/icons/like.svg', // mdi-light_thumb-up.svg fallback
  vectorCombine: '/assets/icons/multi.svg', // mdi-light_vector-combine.svg fallback
  starLight: '/assets/icons/star.svg', // stash_star-light.svg fallback
  lightning: '/assets/icons/comet.svg', // lets-icons_lightning-light.svg fallback
  tailoring: '/assets/icons/crop.svg', // icon-park-outline_tailoring.svg fallback
  hourglass: '/assets/icons/time.svg', // fluent_hourglass-20-regular.svg fallback
  shieldSafety: '/assets/icons/sheild.svg', // si_shield-health-safety-line.svg fallback
  motionBlur: '/assets/icons/comet.svg', // material-symbols-light_motion-blur-rounded.svg fallback
  scaleBroken: '/assets/icons/scale.svg' // solar_scale-broken.svg fallback
};

// Home Section Images
export const homeImgs = {
  aboutUs: '/assets/images/Home/About_us.jpg',
  aboutUsSection: '/assets/images/Home/About_us.jpg', // For WhoAreWe background
  footerImage: '/assets/images/Home/Footer.png', // For footer_image.png reference
  footerPng: '/assets/images/Home/Footer.png',
  logoWhite: '/assets/images/Home/Logo_white.png',
  logo: '/assets/images/Home/Logo.png',
  fallbackBg: '/assets/images/Home/About_us.jpg' // Fallback for fallbackBg.png
};

// Client Images
export const clientImgs = {
  client1: '/assets/images/Home/clients/client_1.png',
  client2: '/assets/images/Home/clients/client_2.png',
  client3: '/assets/images/Home/clients/client_3.png',
  client4: '/assets/images/Home/clients/client_4.png',
  client5: '/assets/images/Home/clients/client_5.png',
  client6: '/assets/images/Home/clients/client_6.png',
  client7: '/assets/images/Home/clients/client_7.png',
  client8: '/assets/images/Home/clients/client_8.png',
  client9: '/assets/images/Home/clients/client_9.png',
  client10: '/assets/images/Home/clients/client_10.png'
};

// EV Charging Images
export const evImgs = {
  acAbout: '/assets/images/EV_charging/AC_about.png',
  acCharger: '/assets/images/EV_charging/Ac_charger.jpg',
  cpoAbout: '/assets/images/EV_charging/CPO_about.jpg',
  cpo: '/assets/images/EV_charging/Cpo.jpg',
  dcAbout: '/assets/images/EV_charging/DC_about.jpg',
  dcCharger: '/assets/images/EV_charging/Dc_charger.jpg',
  engineeringWorks: '/assets/images/EV_charging/Engineering_works.jpg',
  ewAbout: '/assets/images/EV_charging/EW_about.jpg',
  moreAbout: '/assets/images/EV_charging/More_about.jpg',
  charger: '/assets/images/EV_charging/charger.png',
  more: '/assets/images/EV_charging/More.jpg'
};

// Waste to Energy Images
export const wasteImgs = {
  containerizedPlant: '/assets/images/WateTOEnergy/Containerized_Plant.jpg',
  cpAbout: '/assets/images/WateTOEnergy/CP_about.jpg',
  household: '/assets/images/WateTOEnergy/Household.png',
  hsAbout: '/assets/images/WateTOEnergy/HS_about.png',
  largeScalePlant: '/assets/images/WateTOEnergy/Large_Scale_plant.jpg',
  lsAbout: '/assets/images/WateTOEnergy/LS_about.jpg',
  smartWaste: '/assets/images/WateTOEnergy/SmartWaste.png',
  swAbout: '/assets/images/WateTOEnergy/SW_about.png'
};

// Utility function to get video source with error handling
export const getVideoSrc = (videoKey, category = 'heroVids') => {
  const videoMaps = { heroVids, vids };
  const videoMap = videoMaps[category];
  
  if (!videoMap || !videoMap[videoKey]) {
    console.warn(`Video not found: ${category}.${videoKey}`);
    return '';
  }
  
  return videoMap[videoKey];
};

// Utility function to get image source with error handling
export const getImageSrc = (imageKey, category = 'homeImgs') => {
  const imageMaps = { 
    logos, 
    homeImgs, 
    clientImgs, 
    evImgs, 
    wasteImgs 
  };
  const imageMap = imageMaps[category];
  
  if (!imageMap || !imageMap[imageKey]) {
    console.warn(`Image not found: ${category}.${imageKey}`);
    return '';
  }
  
  return imageMap[imageKey];
};

// Utility function to get icon source with error handling
export const getIconSrc = (iconKey) => {
  if (!heroIcons[iconKey]) {
    console.warn(`Icon not found: ${iconKey}`);
    return '';
  }
  
  return heroIcons[iconKey];
};

// Helper function to preload videos for better performance
export const preloadVideo = (videoSrc) => {
  if (!videoSrc) return;
  
  const video = document.createElement('video');
  video.preload = 'metadata';
  video.src = videoSrc;
  video.load();
};

// Helper function to preload multiple videos
export const preloadVideos = (videoSources) => {
  videoSources.forEach(src => preloadVideo(src));
};

// Common exports for easy importing
export const footerImage = homeImgs.footerImage;
export const whiteLogo = logos.white;
