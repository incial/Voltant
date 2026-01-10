/**
 * Framer Motion Animation Presets
 * Reusable animation variants for consistent UI motion
 * @module lib/motion
 */

/**
 * Fade animations
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5 } 
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.3 } 
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

/**
 * Slide animations
 */
export const slideIn = {
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  },
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  }
};

/**
 * Scale animations
 */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.4, ease: 'easeOut' } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    transition: { duration: 0.3 } 
  }
};

export const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const scaleOnTap = {
  scale: 0.95
};

/**
 * Container animations for staggered children
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

/**
 * Stagger child item animations
 */
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

/**
 * Modal/Dialog animations
 */
export const modalOverlay = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2, delay: 0.1 }
  }
};

export const modalContent = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 30 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 10,
    transition: { duration: 0.2 }
  }
};

/**
 * Page transition animations
 */
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

/**
 * Hero section specific animations
 */
export const heroTitle = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export const heroSubtitle = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' }
  }
};

export const heroCta = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' }
  }
};

/**
 * Card animations
 */
export const cardHover = {
  y: -5,
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  transition: { duration: 0.2 }
};

export const cardTap = {
  y: 0,
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  transition: { duration: 0.1 }
};

/**
 * Navigation animations
 */
export const navItem = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3 }
  })
};

export const mobileMenuContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

export const mobileMenuItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
};

/**
 * Utility function to create custom spring animation
 * @param {number} stiffness - Spring stiffness (default: 300)
 * @param {number} damping - Spring damping (default: 30)
 * @returns {Object} Spring transition config
 */
export const springTransition = (stiffness = 300, damping = 30) => ({
  type: 'spring',
  stiffness,
  damping
});

/**
 * Utility function to create custom tween animation
 * @param {number} duration - Duration in seconds
 * @param {string} ease - Easing function
 * @returns {Object} Tween transition config
 */
export const tweenTransition = (duration = 0.3, ease = 'easeOut') => ({
  type: 'tween',
  duration,
  ease
});
