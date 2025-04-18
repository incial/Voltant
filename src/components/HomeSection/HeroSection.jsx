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
import CloudinaryVideo from '../common/CloudinaryVideo'
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper'

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showSocialTray, setShowSocialTray] = useState(false)

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

  // Play the current video when it changes - with error handling
  useEffect(() => {
    if (currentVideoRef.current) {
      try {
        currentVideoRef.current.play()
          .catch(e => console.error('Error playing current video:', e))
      } catch (error) {
        console.error('Error accessing video player:', error)
      }
    }
  }, [currentVideoIndex])

  // Set up the progression and transitions with improved reliability
  useEffect(() => {
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
  }, [currentVideoIndex, videoMappings.length])

  // Show social media tray after 2.5 seconds instead of 4
  useEffect(() => {
    const socialTrayTimer = setTimeout(() => {
      setShowSocialTray(true)
    }, 2500)

    return () => clearTimeout(socialTrayTimer)
  }, [])

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'black'
      }}
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={`current-${currentVideoIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.05, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            backgroundColor: 'black'
          }}
        >
          {/* Use the fixed CloudinaryVideo component instead */}
          <CloudinaryVideo
            ref={currentVideoRef}
            {...getOptimizedAssetProps(
              videoMappings[currentVideoIndex].path,
              'hero',
              'video'
            )}
            className='w-full h-full object-cover'

          />

          {/* Radial overlay with different colors for each video */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background:
                currentVideoIndex === 0
                  ? 'radial-gradient(circle, rgba(144, 238, 144, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)'
                  : currentVideoIndex === 1
                  ? 'radial-gradient(circle, rgba(135, 206, 235, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)'
                  : 'radial-gradient(circle, rgba(135, 206, 235, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)',
              mixBlendMode: 'multiply',
              pointerEvents: 'none'
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
            style={{
              position: 'absolute',
              right: '50px',
              top: '32%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '50px',
              zIndex: 20
            }}
          >
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'white' }}
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
              style={{ color: 'white' }}
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
              style={{ color: 'white' }}
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
              style={{ color: 'white' }}
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
              style={{ color: 'white' }}
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
          style={{
            position: 'absolute',
            bottom: '200px',
            left: '100px',
            zIndex: 10,
            color: 'white',
            textAlign: 'left',
            width: '500px'
          }}
        >
          <h3
            style={{
              fontSize: '2.45rem',
              lineHeight: '1',
              fontWeight: '400',
              margin: 0,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
            className="font-['Cairo']"
          >
            {videoMappings[currentVideoIndex].title}
          </h3>
        </motion.div>
      </AnimatePresence>

      {/* White Bar Video Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          zIndex: 10
        }}
      >
        {videoMappings.map((_, index) => (
          <div
            key={index}
            style={{
              width: index === currentVideoIndex ? '160px' : '80px',
              height: '4px',
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderRadius: '2px',
              overflow: 'hidden',
              transition: 'width 0.8s ease'
            }}
          >
            <motion.div
              style={{
                height: '100%',
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
                borderRadius: '2px'
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
