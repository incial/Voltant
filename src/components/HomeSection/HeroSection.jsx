import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter
} from 'react-icons/fa6';
import { heroVids } from '../../utils/localAssets';

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showSocialTray, setShowSocialTray] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoElements = useRef([]);
  const progressInterval = useRef(null);
  const videoDuration = 8000; // 8 seconds per video
  const videoMappings = [
    {
      path: heroVids.heroSection1,
      title: (
        <>
          For a Sustainable Tomorrow,
          <br />
          Save Energy Today.
        </>
      )
    },
    {
      path: heroVids.heroSection2,
      title: (
        <>
          Turning Waste into Power,
          <br /> Fueling a Greener Future.
        </>
      )
    },
    {
      path: heroVids.heroSection3,
      title: (
        <>
          Maximize Efficiency,
          <br /> Minimize Waste.
        </>
      )
    }
  ];

  const getVideoUrl = (path) => {
    return path; // Return local path directly
  };

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);  // Initialize videos and handle playback
  useEffect(() => {
    let mounted = true;

    const transitionToNextVideo = () => {
      // Reset progress
      setProgress(0);

      // Pause current video
      videoElements.current[currentVideoIndex]?.pause();

      // Switch to next video
      const nextIndex = (currentVideoIndex + 1) % videoMappings.length;
      setCurrentVideoIndex(nextIndex);
    };

    const startPlayback = async () => {
      try {
        // Play the current video
        const currentVideo = videoElements.current[currentVideoIndex];
        if (currentVideo) {
          await currentVideo.play();
          setIsPlaying(true);
        }
      } catch {
        console.log("Autoplay prevented, waiting for interaction");
        const handleInteraction = () => {
          if (mounted) {
            videoElements.current[currentVideoIndex]?.play();
            setIsPlaying(true);
          }
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
        };
        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);
      }
    };

    // Clear previous interval
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    // Start progress bar
    let startTime = Date.now();
    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / videoDuration, 1);
      setProgress(newProgress);

      if (newProgress >= 1) {
        clearInterval(progressInterval.current);
        transitionToNextVideo();
      }
    }, 50); // Update progress every 50ms for smoother animation

    startPlayback();

    return () => {
      mounted = false;
      clearInterval(progressInterval.current);
    };
  }, [currentVideoIndex, videoDuration, videoMappings.length]);
  // Handle video errors and retries
  const handleVideoError = (index) => {
    console.log(`Video ${index} error, attempting to reload`);
    const video = videoElements.current[index];
    if (video) {
      video.load();
      if (index === currentVideoIndex) {
        video.play().catch(err => console.log("Retry play failed:", err));
      }
    }
  };

  // Show social tray only on desktop
  useEffect(() => {
    if (isMobile) return;
    const timer = setTimeout(() => setShowSocialTray(true), 2500);
    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Container */}
      <div className="absolute inset-0 z-[1] bg-black overflow-hidden">
        {videoMappings.map((video, index) => (
          <video
            key={index}
            ref={el => {
              videoElements.current[index] = el;
            }}
            src={getVideoUrl(video.path)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentVideoIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            muted
            loop
            playsInline
            preload="auto"
            onError={() => handleVideoError(index)}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            currentVideoIndex === 0
              ? 'radial-gradient(circle, rgba(144, 238, 144, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)'
              : currentVideoIndex === 1
                ? 'radial-gradient(circle, rgba(135, 206, 235, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)'
                : 'radial-gradient(circle, rgba(135, 206, 235, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Social Media Icons - Desktop Only */}
      {!isMobile && showSocialTray && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0.4
          }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-20"
        >
          {[FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaXTwitter].map((Icon, index) => (
            <a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-1 block hover:text-primary transition-colors duration-200"
              aria-label={Icon.name.replace('Fa', '')}
            >
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                <Icon size={24} />
              </motion.div>
            </a>
          ))}
        </motion.div>
      )}

      {/* Text Content - Now using dvh units */}
      <motion.div
        key={`caption-${currentVideoIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className={`absolute ${isMobile ? 'bottom-[20dvh] left-4 max-w-[80%]'
          : 'bottom-20 sm:bottom-32 md:bottom-[200px] left-8 sm:left-12 md:left-[100px]'
          } z-10 text-white text-left`}
        style={{ maxWidth: isMobile ? '80%' : '500px' }}
      >
        <h3 className={`${isMobile ? 'text-xl leading-snug'
          : 'text-3xl sm:text-4xl md:text-[2.45rem] leading-tight'
          } font-normal m-0 font-['Cairo'] drop-shadow-lg`}>
          {videoMappings[currentVideoIndex].title}
        </h3>
      </motion.div>

      {/* Progress Indicators - Using dvh units */}
      <div className={`absolute ${isMobile ? 'bottom-[10dvh]'
        : 'bottom-6 sm:bottom-8 md:bottom-[30px]'
        } left-0 right-0 flex justify-center gap-2 sm:gap-5 md:gap-[20px] z-10`}>
        {videoMappings.map((_, index) => (
          <div
            key={index}
            className={`${isMobile ? 'h-1' : 'h-1 md:h-[4px]'
              } rounded-[2px] overflow-hidden transition-all duration-300`}
            style={{
              width: index === currentVideoIndex ? (isMobile ? '80px' : '100px') : (isMobile ? '40px' : '50px'),
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
          >
            <div
              className="h-full rounded-[2px] bg-white transition-all duration-100"
              style={{
                width: index === currentVideoIndex
                  ? `${progress * 100}%`
                  : index < currentVideoIndex
                    ? '100%'
                    : '0%'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;