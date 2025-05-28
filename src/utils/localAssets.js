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
  main: '/src/assets/images/Home/Logo.png',
  white: '/src/assets/images/Home/Logo_white.png',
  icon: '/src/assets/images/Home/Logo_icon.svg'
};

// Hero Section Icons
export const heroIcons = {
  battery: '/src/assets/icons/battery.svg',
  circle: '/src/assets/icons/circle.svg', // Used in SplitImages
  comet: '/src/assets/icons/comet.svg',
  crop: '/src/assets/icons/crop.svg',
  folder: '/src/assets/icons/folder.svg',
  leaf: '/src/assets/icons/leaf.svg',
  like: '/src/assets/icons/like.svg',
  multi: '/src/assets/icons/multi.svg',
  power: '/src/assets/icons/Power.svg',
  scaleMoney: '/src/assets/icons/Scale_money.svg',
  scale: '/src/assets/icons/Scale.svg',
  shield: '/src/assets/icons/sheild.svg',
  star: '/src/assets/icons/star.svg',
  stat: '/src/assets/icons/stat.svg',
  sun: '/src/assets/icons/sun.svg',
  time: '/src/assets/icons/TIme.svg',
  water: '/src/assets/icons/water.svg',
  waterPure: '/src/assets/icons/waterpure.svg',
  // Fallback mappings for icons used in sectionData.js
  folderAlt: '/src/assets/icons/folder.svg', // stash_folder-alt-light.svg fallback
  group: '/src/assets/icons/multi.svg', // Group.svg fallback  
  leafCircle: '/src/assets/icons/leaf.svg', // pepicons-pencil_leaf-circle.svg fallback
  thumbUp: '/src/assets/icons/like.svg', // mdi-light_thumb-up.svg fallback
  vectorCombine: '/src/assets/icons/multi.svg', // mdi-light_vector-combine.svg fallback
  starLight: '/src/assets/icons/star.svg', // stash_star-light.svg fallback
  lightning: '/src/assets/icons/comet.svg', // lets-icons_lightning-light.svg fallback
  tailoring: '/src/assets/icons/crop.svg', // icon-park-outline_tailoring.svg fallback
  hourglass: '/src/assets/icons/time.svg', // fluent_hourglass-20-regular.svg fallback
  shieldSafety: '/src/assets/icons/sheild.svg', // si_shield-health-safety-line.svg fallback
  motionBlur: '/src/assets/icons/comet.svg', // material-symbols-light_motion-blur-rounded.svg fallback
  scaleBroken: '/src/assets/icons/scale.svg' // solar_scale-broken.svg fallback
};

// Home Section Images
export const homeImgs = {
  aboutUs: '/src/assets/images/Home/About_us.jpg',
  aboutUsSection: '/src/assets/images/Home/About_us.jpg', // For WhoAreWe background
  footerImage: '/src/assets/images/Home/Footer.png', // For footer_image.png reference
  footerPng: '/src/assets/images/Home/Footer.png',
  logoWhite: '/src/assets/images/Home/Logo_white.png',
  logo: '/src/assets/images/Home/Logo.png',
  fallbackBg: '/src/assets/images/Home/About_us.jpg' // Fallback for fallbackBg.png
};

// Client Images
export const clientImgs = {
  client1: '/src/assets/images/Home/clients/client_1.png',
  client2: '/src/assets/images/Home/clients/client_2.png',
  client3: '/src/assets/images/Home/clients/client_3.png',
  client4: '/src/assets/images/Home/clients/client_4.png',
  client5: '/src/assets/images/Home/clients/client_5.png',
  client6: '/src/assets/images/Home/clients/client_6.png',
  client7: '/src/assets/images/Home/clients/client_7.png',
  client8: '/src/assets/images/Home/clients/client_8.png',
  client9: '/src/assets/images/Home/clients/client_9.png',
  client10: '/src/assets/images/Home/clients/client_10.png'
};

// EV Charging Images
export const evImgs = {
  acAbout: '/src/assets/images/EV_charging/AC_about.png',
  acCharger: '/src/assets/images/EV_charging/Ac_charger.jpg',
  cpoAbout: '/src/assets/images/EV_charging/CPO_about.jpg',
  cpo: '/src/assets/images/EV_charging/Cpo.jpg',
  dcAbout: '/src/assets/images/EV_charging/DC_about.jpg',
  dcCharger: '/src/assets/images/EV_charging/Dc_charger.jpg',
  engineeringWorks: '/src/assets/images/EV_charging/Engineering_works.jpg',
  ewAbout: '/src/assets/images/EV_charging/EW_about.jpg',
  moreAbout: '/src/assets/images/EV_charging/More_about.jpg',
  more: '/src/assets/images/EV_charging/More.jpg'
};

// Waste to Energy Images
export const wasteImgs = {
  containerizedPlant: '/src/assets/images/WateTOEnergy/Containerized_Plant.jpg',
  cpAbout: '/src/assets/images/WateTOEnergy/CP_about.jpg',
  household: '/src/assets/images/WateTOEnergy/Household.png',
  hsAbout: '/src/assets/images/WateTOEnergy/HS_about.png',
  largeScalePlant: '/src/assets/images/WateTOEnergy/Large_Scale_plant.jpg',
  lsAbout: '/src/assets/images/WateTOEnergy/LS_about.jpg',
  smartWaste: '/src/assets/images/WateTOEnergy/SmartWaste.png',
  swAbout: '/src/assets/images/WateTOEnergy/SW_about.png'
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
