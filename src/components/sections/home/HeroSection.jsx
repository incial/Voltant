import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter
} from 'react-icons/fa6';
import { isIOS } from '../../../utils/device';
import { preloadImages } from '../../../utils/imageSupport';

const heroFrames = [
  {
    src: '/assets/images/Home/Hero/hero1.png',
    mobileSrc: '/assets/images/Home/Hero/hero1-mobile.png',
    title: (
      <>
        For a Sustainable Tomorrow,<br />Save Energy Today.
      </>
    )
  },
  {
    src: '/assets/images/Home/Hero/hero2.png',
    mobileSrc: '/assets/images/Home/Hero/hero2-mobile.png',
    title: (
      <>
        Turning Waste into Power,<br /> Fueling a Greener Future.
      </>
    )
  },
  {
    src: '/assets/images/Home/Hero/hero3.png',
    mobileSrc: '/assets/images/Home/Hero/hero3-mobile.png',
    title: (
      <>
        Maximize Efficiency,<br /> Minimize Waste.
      </>
    )
  }
];

const imageDuration = 8000;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showSocialTray, setShowSocialTray] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [firstImageReady, setFirstImageReady] = useState(false);
  const iosDevice = isIOS;
  const enableMotion = !iosDevice;

  const frameSources = useMemo(
    () => heroFrames.map((frame) => isMobile ? frame.mobileSrc : frame.src),
    [isMobile]
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const primary = frameSources[0];
    if (!primary) {
      setFirstImageReady(true);
      return undefined;
    }
    let cancelled = false;
    const preloader = new Image();
    preloader.src = primary;
    preloader.onload = preloader.onerror = () => {
      if (!cancelled) setFirstImageReady(true);
    };
    return () => {
      cancelled = true;
    };
  }, [frameSources]);

  useEffect(() => {
    if (!firstImageReady || iosDevice) return;
    preloadImages(frameSources.slice(1));
  }, [firstImageReady, iosDevice, frameSources]);

  useEffect(() => {
    if (!firstImageReady || iosDevice) return;
    let animationFrame = 0;
    let startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const localProgress = Math.min(elapsed / imageDuration, 1);
      setProgress(localProgress);

      if (localProgress >= 1) {
        startTime = now;
        setProgress(0);
        setCurrentIndex((prev) => (prev + 1) % heroFrames.length);
      }

      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [firstImageReady, iosDevice]);

  useEffect(() => {
    if (!firstImageReady) return;
    if (iosDevice) {
      setShowSocialTray(true);
      return;
    }
    if (isMobile) return;
    const timer = setTimeout(() => setShowSocialTray(true), 2500);
    return () => clearTimeout(timer);
  }, [firstImageReady, iosDevice, isMobile]);

  const currentFrame = heroFrames[currentIndex];

  const frameClassName = (index) =>
    index === currentIndex ? 'hero-frame hero-frame--active' : 'hero-frame';

  const SocialWrapper = enableMotion ? motion.div : 'div';
  const CaptionWrapper = enableMotion ? motion.div : 'div';

  return (
    <section className="hero-section relative w-full">
      <div className="hero-background-layer absolute inset-0 z-[1]">
        {heroFrames.map((frame, index) => (
          <div
            key={index}
            className={frameClassName(index)}
            style={{
              backgroundImage: `url(${frameSources[index]})`
            }}
          />
        ))}
      </div>

      <div
        className="hero-overlay absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: currentIndex === 0
            ? 'radial-gradient(circle, rgba(144, 238, 144, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)'
            : 'radial-gradient(circle, rgba(135, 206, 235, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      />

      {firstImageReady && !isMobile && showSocialTray && (
        <SocialWrapper
          {...(enableMotion
            ? {
                initial: { x: 100, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { type: 'spring', stiffness: 260, damping: 20 }
              }
            : {})}
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
              {enableMotion ? (
                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </motion.div>
              ) : (
                <div className="transition-transform duration-200">
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
              )}
            </a>
          ))}
        </SocialWrapper>
      )}

      {firstImageReady && (
        <CaptionWrapper
          {...(enableMotion
            ? {
                key: `caption-${currentIndex}`,
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
              }
            : {})}
          className={`absolute z-10 text-white text-left ${
            isMobile
              ? 'bottom-[18%] left-4 max-w-[80%]'
              : 'bottom-12 sm:bottom-16 lg:bottom-20 left-6 sm:left-8 lg:left-16 xl:left-24'
          }`}
          style={{ maxWidth: isMobile ? '80%' : '600px' }}
        >
          <h1
            className={`${
              isMobile
                ? 'text-xl leading-snug'
                : 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.45rem] leading-tight'
            } font-normal m-0 font-['Cairo'] drop-shadow-lg`}
          >
            {currentFrame.title}
          </h1>
        </CaptionWrapper>
      )}

      {firstImageReady && (
        <div
          className={`absolute ${
            isMobile ? 'bottom-[10%]' : 'bottom-6 sm:bottom-6 lg:bottom-8'
          } left-0 right-0 flex justify-center gap-2 sm:gap-4 lg:gap-6 z-10`}
        >
          {heroFrames.map((_, index) => {
            const isActive = index === currentIndex;
            const width = isActive
              ? isMobile
                ? '80px'
                : '90px'
              : isMobile
                ? '40px'
                : '48px';

            const barProgress = enableMotion ? `${progress * 100}%` : isActive ? '100%' : '0%';

            return (
              <div
                key={index}
                className={`${isMobile ? 'h-1' : 'h-1 md:h-[4px]'} rounded-[2px] overflow-hidden`}
                style={{
                  width,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  transition: 'width 300ms ease'
                }}
              >
                <div
                  className="h-full rounded-[2px] bg-white"
                  style={{
                    width: barProgress,
                    transition: enableMotion ? 'width 100ms linear' : 'none'
                  }}
                />
              </div>
            );
          })}
        </div>
      )}

      {!firstImageReady && (
        <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
};

export default HeroSection;