import React, { useState, useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter
} from 'react-icons/fa6'
// Import only the cloudinary utilities we need
import { getCloudinaryId } from '../../utils/cloudinaryAssets'
import cld from '../../utils/cloudinary'

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showSocialTray, setShowSocialTray] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  // Use video mapping with Cloudinary public IDs
  const videoMappings = [
    {
      path: 'public/Videos/Hero-Section-1.mp4',
      title: (
        <>
          For a Sustainable Tomorrow,
          <br />
          Save Energy Today.
        </>
      )
    },
    {
      path: 'public/Videos/Hero-Section-2.mp4',
      title: (
        <>
          Turning Waste into Power,
          <br /> Fueling a Greener Future.
        </>
      )
    },
    {
      path: 'public/Videos/Hero-Section-3.mp4',
      title: (
        <>
          Maximize Efficiency,
          <br /> Minimize Waste.
        </>
      )
    }
  ]

  const currentVideoRef = useRef(null)
  const intervalRef = useRef(null)
  const animationRef = useRef(null)

  // Video duration and transition settings
  const videoDuration = 12000 // 12 seconds

  // Generate the Cloudinary video URL with format optimization for wider browser support
  const getVideoUrl = (path) => {
    const publicId = getCloudinaryId(path, 'video')
    if (!publicId) {
      return null
    }
    
    return cld.video(publicId)
      .format('auto')
      .quality('auto')
      .toURL()
  }

  // Handle video loading
  const handleVideoLoaded = () => {
    setVideoLoaded(true)
  }

  // Play the current video when it changes - with enhanced error handling for browser compatibility
  useEffect(() => {
    if (currentVideoRef.current) {
      try {
        // Reset the video loaded state when changing videos
        setVideoLoaded(false)
        
        // Make sure video is muted for autoplay compatibility across browsers
        currentVideoRef.current.muted = true
        
        const playPromise = currentVideoRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video started playing successfully
            })
            .catch((error) => {
              console.log("Video play error:", error)
              // iOS Safari specific handling - try playing on user interaction
              document.addEventListener('touchstart', function videoTouchPlayHandler() {
                if (currentVideoRef.current) {
                  currentVideoRef.current.play();
                }
                document.removeEventListener('touchstart', videoTouchPlayHandler);
              }, { once: true });
            })
        }
      } catch (error) {
        // Error handling silently
      }
    }
  }, [currentVideoIndex])

  // Set up the progression and transitions with improved reliability
  useEffect(() => {
    // Don't start timing until video is loaded
    if (!videoLoaded) return;
    
    // Capture current ref values at the start of the effect
    const currentIntervalRef = intervalRef.current
    const currentAnimationRef = animationRef.current

    if (currentIntervalRef) clearTimeout(currentIntervalRef)
    if (currentAnimationRef) cancelAnimationFrame(currentAnimationRef)

    setProgress(0)

    const startTime = Date.now()

    const animateProgress = () => {
      const elapsedTime = Date.now() - startTime
      const newProgress = Math.min(elapsedTime / videoDuration, 1)
      setProgress(newProgress)

      if (newProgress < 1) {
        animationRef.current = requestAnimationFrame(animateProgress)
      }
    }

    animationRef.current = requestAnimationFrame(animateProgress)

    // Set up video transition at the end of video duration
    intervalRef.current = setTimeout(() => {
      const next = (currentVideoIndex + 1) % videoMappings.length

      // Switch directly to the next video
      setCurrentVideoIndex(next)
    }, videoDuration)

    return () => {
      // Use captured values in cleanup function
      if (currentIntervalRef) clearTimeout(currentIntervalRef)
      if (currentAnimationRef) cancelAnimationFrame(currentAnimationRef)
      if (intervalRef.current) clearTimeout(intervalRef.current)
    }
  }, [currentVideoIndex, videoMappings.length, videoLoaded])

  // Show social media tray after 2.5 seconds
  useEffect(() => {
    const socialTrayTimer = setTimeout(() => {
      setShowSocialTray(true)
    }, 2500)

    return () => clearTimeout(socialTrayTimer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode='wait'>
        <motion.div
          key={`current-${currentVideoIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 z-[1] bg-black"
        >
          {/* Video Element with cross-browser compatibility improvements */}
          {getVideoUrl(videoMappings[currentVideoIndex].path) && (
            <video
              ref={currentVideoRef}
              src={getVideoUrl(videoMappings[currentVideoIndex].path)}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={handleVideoLoaded}
            />
          )}

          {/* Radial overlay with different colors for each video */}
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
        </motion.div>
      </AnimatePresence>

      {/* Social Media Icons Sidebar */}
      <AnimatePresence>
        {showSocialTray && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              duration: 0.4
            }}
            className="absolute right-8 md:right-[50px] top-1/3 md:top-[32%] transform -translate-y-1/2 flex flex-col gap-8 md:gap-[50px] z-20"
          >
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              className="text-white p-1 block"
              aria-label="YouTube"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <FaYoutube size={24} />
              </motion.div>
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className="text-white p-1 block"
              aria-label="Instagram"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <FaInstagram size={24} />
              </motion.div>
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className="text-white p-1 block"
              aria-label="Facebook"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <FaFacebook size={24} />
              </motion.div>
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className="text-white p-1 block"
              aria-label="LinkedIn"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <FaLinkedin size={24} />
              </motion.div>
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className="text-white p-1 block"
              aria-label="Twitter"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <FaXTwitter size={24} />
              </motion.div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Left Text Caption */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={`caption-${currentVideoIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute bottom-20 sm:bottom-32 md:bottom-[200px] left-8 sm:left-12 md:left-[100px] z-10 text-white text-left w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px]"
        >
          <h3
            className="text-3xl sm:text-4xl md:text-[2.45rem] leading-tight font-normal m-0 font-['Cairo'] drop-shadow-lg"
          >
            {videoMappings[currentVideoIndex].title}
          </h3>
        </motion.div>
      </AnimatePresence>

      {/* White Bar Video Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-[30px] left-0 right-0 flex justify-center gap-3 sm:gap-5 md:gap-[20px] z-10">
        {videoMappings.map((_, index) => (
          <div
            key={index}
            className="h-1 md:h-[4px] rounded-[2px] overflow-hidden transition-[width] duration-800"
            style={{
              width: index === currentVideoIndex ? '100px' : '50px',
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
          >
            <motion.div
              className="h-full rounded-[2px]"
              style={{
                width:
                  index === currentVideoIndex
                    ? `${progress * 100}%`
                    : index < currentVideoIndex ||
                      (currentVideoIndex === 0 &&
                        index === videoMappings.length - 1)
                    ? '100%'
                    : '0%',
                backgroundColor:
                  index === currentVideoIndex
                    ? 'rgba(255,255,255,1)'
                    : 'rgba(255,255,255,0.4)',
              }}
              transition={{ ease: 'linear' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSection
