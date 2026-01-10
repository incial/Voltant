/**
 * Icon Asset Constants
 * @module constants/assets/icons
 */

import { ASSET_PATHS } from './paths';

/**
 * Icon assets organized by category
 */
export const ICONS = {
  // Energy & Power
  battery: `${ASSET_PATHS.icons}/battery.png`,
  power: `${ASSET_PATHS.icons}/power.png`,
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
  shield: `${ASSET_PATHS.icons}/shield.png`,
  
  // Business & Analytics
  stat: `${ASSET_PATHS.icons}/stat.png`,
  scale: `${ASSET_PATHS.icons}/scale.png`,
  scaleMoney: `${ASSET_PATHS.icons}/scale-money.png`,
  time: `${ASSET_PATHS.icons}/time.png`,
  
  // Other
  crop: `${ASSET_PATHS.icons}/crop.png`,
  multi: `${ASSET_PATHS.icons}/multi.png`,
};

/**
 * Icon aliases for backward compatibility and semantic naming
 */
export const ICON_ALIASES = {
  money: ICONS.scaleMoney,
  lightning: ICONS.comet,
  thumbUp: ICONS.like,
  shieldSafety: ICONS.shield,
  hourglass: ICONS.time,
  scaleBroken: ICONS.scale,
  leafCircle: ICONS.leaf,
  starLight: ICONS.star,
  motionBlur: ICONS.comet,
  tailoring: ICONS.crop,
  folderAlt: ICONS.folder,
  group: ICONS.multi,
  vectorCombine: ICONS.multi,
};

/**
 * Get icon by name with fallback
 * @param {string} name - Icon name
 * @param {string} fallback - Fallback icon name
 * @returns {string} Icon path
 */
export const getIcon = (name, fallback = 'star') => {
  return ICONS[name] || ICON_ALIASES[name] || ICONS[fallback];
};

/**
 * Get all icon paths as array (for preloading)
 * @returns {string[]} Array of icon paths
 */
export const getAllIconPaths = () => Object.values(ICONS);
