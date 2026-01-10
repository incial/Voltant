import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter
} from 'react-icons/fa6';

/**
 * Hero Images Configuration
 * Using responsive WebP with JPEG fallback for iOS Safari
 * Images served from /public/images/hero/ with srcSet for optimal loading
 */
const heroImages = [
  {
    // Responsive srcSet for all devices
    srcSet: '/images/hero/hero1-480w.webp 480w, /images/hero/hero1-768w.webp 768w, /images/hero/hero1-1200w.webp 1200w, /images/hero/hero1-1920w.webp 1920w',
    src: '/images/hero/hero1-1200w.webp', // Default fallback
    fallbackSrc: '/images/hero/hero1-1200w.jpg', // JPEG for older Safari
    width: 1920,
    height: 1347,
    title: (
      <>
        For a Sustainable Tomorrow,<br />Save Energy Today.
      </>
    )
  },
  {
    srcSet: '/images/hero/hero2-480w.webp 480w, /images/hero/hero2-768w.webp 768w, /images/hero/hero2-1200w.webp 1200w, /images/hero/hero2-1920w.webp 1920w',
    src: '/images/hero/hero2-1200w.webp',
    fallbackSrc: '/images/hero/hero2-1200w.jpg',
    width: 1920,
    height: 3413,
    title: (
      <>
        Turning Waste into Power,<br /> Fueling a Greener Future.
      </>
    )
  },
  {
    srcSet: '/images/hero/hero3-480w.webp 480w, /images/hero/hero3-768w.webp 768w, /images/hero/hero3-1200w.webp 1200w, /images/hero/hero3-1920w.webp 1920w',
    src: '/images/hero/hero3-1200w.webp',
    fallbackSrc: '/images/hero/hero3-1200w.jpg',
    width: 1920,
    height: 2880,
    title: (
      <>
        Maximize Efficiency,<br /> Minimize Waste.
      </>
    )
  }
];

/**
 * iOS-Safe Hero Section Component
 * 
 * Performance optimizations:
 * - Responsive srcSet for optimal image delivery
 * - fetchPriority="high" for first image
 * - Preloaded via index.html
 * - Animations only start AFTER first image loads
 * - No heavy GPU filters (blur, backdrop-filter)
 */
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showSocialTray, setShowSocialTray] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const imageDuration = 8000;

  // Detect WebP support once at component mount
  const supportsWebP = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }, []);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle first image load - critical for iOS
  const handleFirstImageLoad = useCallback(() => {
    setFirstImageLoaded(true);
  }, []);

  // Preload remaining images after first loads
  useEffect(() => {
    if (!firstImageLoaded) return;
    heroImages.slice(1).forEach((img) => {
      const image = new Image();
      image.src = supportsWebP ? img.src : img.fallbackSrc;
    });
  }, [firstImageLoaded, supportsWebP]);

  // Carousel logic - only after first image loads
  useEffect(() => {
    if (!firstImageLoaded) return;
    
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / imageDuration, 1);
      setProgress(newProgress);
      if (newProgress >= 1) {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [currentIndex, firstImageLoaded]);

  // Show social tray after delay
  useEffect(() => {
    if (isMobile || !firstImageLoaded) return;
    const timer = setTimeout(() => setShowSocialTray(true), 2500);
    return () => clearTimeout(timer);
  }, [isMobile, firstImageLoaded]);

  // Responsive sizes attribute for srcSet
  const imageSizes = "(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px";

  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden"
      style={{ minHeight: '-webkit-fill-available' }}
    >
      {/* Image Container */}
      <div className="absolute inset-0 z-[1]">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full"
            style={{ 
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 1000ms ease-in-out',
              zIndex: index === currentIndex ? 10 : 0,
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <img
              src={supportsWebP ? img.src : img.fallbackSrc}
              srcSet={supportsWebP ? img.srcSet : undefined}
              sizes={supportsWebP ? imageSizes : undefined}
              width={img.width}
              height={img.height}
              alt={`Hero Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding={index === 0 ? 'sync' : 'async'}
              fetchPriority={index === 0 ? 'high' : 'low'}
              onLoad={index === 0 ? handleFirstImageLoad : undefined}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay - NO backdrop-blur */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: currentIndex === 0
            ? 'radial-gradient(circle, rgba(144, 238, 144, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)'
            : 'radial-gradient(circle, rgba(135, 206, 235, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      />

      {/* Social Icons - Only after image loads */}
      {firstImageLoaded && !isMobile && showSocialTray && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 flex-col gap-4 lg:gap-5 xl:gap-6 z-20"
        >
          {[FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaXTwitter].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-1 block hover:text-primary transition-colors duration-200"
              aria-label={Icon.name.replace('Fa', '')}
            >
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
              </motion.div>
            </a>
          ))}
        </motion.div>
      )}

      {/* Text Content - Only after image loads */}
      {firstImageLoaded && (
        <motion.div
          key={`caption-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className={`absolute z-10 text-white text-left ${
            isMobile 
              ? 'bottom-[18%] left-4 max-w-[80%]' 
              : 'bottom-12 sm:bottom-16 lg:bottom-20 left-6 sm:left-8 lg:left-16 xl:left-24'
          }`}
          style={{ maxWidth: isMobile ? '80%' : '600px' }}
        >
          <h1 className={`${
            isMobile 
              ? 'text-xl leading-snug' 
              : 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.45rem] leading-tight'
          } font-normal m-0 font-['Cairo'] drop-shadow-lg`}>
            {heroImages[currentIndex].title}
          </h1>
        </motion.div>
      )}

      {/* Progress Indicators */}
      {firstImageLoaded && (
        <div className={`absolute ${isMobile ? 'bottom-[10%]' : 'bottom-6 sm:bottom-6 lg:bottom-8'} left-0 right-0 flex justify-center gap-2 sm:gap-4 lg:gap-6 z-10`}>
          {heroImages.map((_, index) => (
            <div
              key={index}
              className={`${isMobile ? 'h-1' : 'h-1 md:h-[4px]'} rounded-[2px] overflow-hidden`}
              style={{
                width: index === currentIndex ? (isMobile ? '80px' : '90px') : (isMobile ? '40px' : '48px'),
                backgroundColor: 'rgba(255,255,255,0.3)',
                transition: 'width 300ms ease'
              }}
            >
              <div
                className="h-full rounded-[2px] bg-white"
                style={{
                  width: index === currentIndex ? `${progress * 100}%` : index < currentIndex ? '100%' : '0%',
                  transition: 'width 100ms linear'
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Loading State */}
      {!firstImageLoaded && (
        <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
};

export default HeroSection;