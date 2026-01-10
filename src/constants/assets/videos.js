/**
 * Video Asset Constants
 * @module constants/assets/videos
 */

import { ASSET_PATHS } from './paths';

/**
 * Hero section videos
 */
export const HERO_VIDEOS = {
  vid1: `${ASSET_PATHS.videos}/HeroVid1.mp4`,
  vid2: `${ASSET_PATHS.videos}/HeroVid2.mp4`,
  vid3: `${ASSET_PATHS.videos}/HeroVid3.mp4`,
};

/**
 * Banner/Section videos
 */
export const BANNER_VIDEOS = {
  subhero1: `${ASSET_PATHS.videos}/SubHeroVid1.mp4`,
  subhero2: `${ASSET_PATHS.videos}/SubHeroVid2.mp4`,
  goatfooter: `${ASSET_PATHS.videos}/Goatfooter.mp4`,
  subfooter: `${ASSET_PATHS.videos}/Subfooter.mp4`,
};

/**
 * All videos combined
 */
export const VIDEOS = {
  hero: HERO_VIDEOS,
  banners: BANNER_VIDEOS,
};

/**
 * Get hero video by index (1-based)
 * @param {number} index - Video index (1-3)
 * @returns {string} Video path
 */
export const getHeroVideo = (index) => {
  const key = `vid${index}`;
  return HERO_VIDEOS[key] || HERO_VIDEOS.vid1;
};

/**
 * Get all hero video paths (for preloading)
 * @returns {string[]} Array of video paths
 */
export const getAllHeroVideoPaths = () => Object.values(HERO_VIDEOS);

/**
 * Get all video paths (for preloading)
 * @returns {string[]} Array of all video paths
 */
export const getAllVideoPaths = () => [
  ...Object.values(HERO_VIDEOS),
  ...Object.values(BANNER_VIDEOS),
];
