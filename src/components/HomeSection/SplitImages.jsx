import React, { useState, useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { vids, heroIcons } from '../../utils/localAssets'
import { Link } from 'react-router-dom'

const images = [
  {
    id: 'ev',
    title: 'EV Charging Infrastructure',
    description:
      'Powering the future of mobility with smart, efficient, and scalable EV charging solutions—designed for homes, businesses, and public spaces.',
    button: 'Learn More',
    vid: vids.evCharging,
    icon: heroIcons.battery,
    link: '/ev-charging'
  },
  {
    id: 'pollution',
    title: 'Waste to Energy Solutions',
    description:
      'From smart modular containerized plants to large-scale anerobic digestion solutions, we transform organic waste into sustainable energy.',
    button: 'Learn More',
    vid: vids.wasteToEnergy,
    icon: heroIcons.circle,
    link: '/waste-to-energy'
  }
]

const SplitHoverImages = () => {
  const [activeId, setActiveId] = useState(images[0].id)
  const [playedId, setPlayedId] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState({})
  const [mobileInitialized, setMobileInitialized] = useState(false)
  const videoRefs = useRef({})

  // Check if device is mobile on component mount and when window resizes
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIsMobile()

    // Add resize listener
    window.addEventListener('resize', checkIsMobile)

    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Set all sections to show content on initial mobile load
  useEffect(() => {
    if (isMobile && !mobileInitialized) {
      // Set all sections as played when on mobile to show content initially
      const allPlayed = {}
      images.forEach(item => {
        allPlayed[item.id] = true
      })
      setPlayedId(images[0].id)
      setMobileInitialized(true)
    }
  }, [isMobile, mobileInitialized])

  // Video loading state logic
  const handleVideoLoadStart = id => {
    setVideoLoaded(prev => ({ ...prev, [id]: false }))
  }
  
  const handleVideoLoadedData = id => {
    setVideoLoaded(prev => ({ ...prev, [id]: true }))
  }
  
  const handleVideoError = id => {
    // Try to reload video if error
    const ref = videoRefs.current[id]
    if (ref) {
      ref.load()
      ref.play?.().catch(() => {})
    }
  }

  return (
    <div className='flex md:flex-row flex-col h-auto md:h-[100vh] w-full overflow-hidden'>
      {images.map(item => {
        const isActive = activeId === item.id
        const isPlayed = playedId === item.id || (isMobile && mobileInitialized)
        const hasLoaded = videoLoaded[item.id]

        return (
          <motion.div
            key={item.id}
            layout
            className='relative cursor-pointer overflow-hidden transition-all'
            onMouseEnter={() => !isMobile && setActiveId(item.id)}
            onClick={() => isMobile && setPlayedId(item.id)}
            style={{
              flexBasis: isMobile ? '100%' : isActive ? '66.66%' : '33.33%',
              transition: 'flex-basis 0.8s cubic-bezier(0.83, 0, 0.17, 1)',
              aspectRatio: isMobile ? '14 / 14' : undefined,
              height: isMobile ? '70vh' : '100%'
            }}
          >
            {/* Top-right Icon */}
            <img
              src={item.icon}
              alt={`${item.id} icon`}
              className='absolute top-6 md:top-36 right-6 md:right-28 w-8 h-8 md:w-20 md:h-20 z-20 opacity-100'
              loading='lazy'
            />
            
            {/* Video with Loading State */}
            <motion.div
              className='w-full h-full overflow-hidden'
              initial={{ scale: 1 }}
              animate={{ scale: !isMobile && isActive ? 1.02 : 1 }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            >
              <AnimatePresence>
                {!hasLoaded && (
                  <motion.div
                    className='absolute inset-0 bg-black/40 z-5 flex items-center justify-center'
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className='w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin' />
                  </motion.div>
                )}
              </AnimatePresence>
              
              <video
                ref={el => (videoRefs.current[item.id] = el)}
                src={item.vid}
                className='w-full h-full object-cover'
                autoPlay={isActive || isMobile}
                loop={true}
                muted={true}
                playsInline={true}
                onLoadStart={() => handleVideoLoadStart(item.id)}
                onLoadedData={() => handleVideoLoadedData(item.id)}
                onError={() => handleVideoError(item.id)}
                style={{ transition: 'opacity 1s', opacity: hasLoaded ? 1 : 0 }}
              />
            </motion.div>
            
            {/* Overlay */}
            <motion.div
              className='absolute inset-0 bg-black/30 p-6 md:p-36 text-white flex flex-col justify-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive || isPlayed ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className='relative flex flex-col'>
                <div></div>
                {/* Standalone vertical line */}
                <motion.div
                  className='absolute top-0 left-0 bottom-0 w-[2px] bg-white rounded-full'
                  initial={{ height: 0 }}
                  animate={{ height: isActive || isPlayed ? '100%' : 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                />

                <div className='ml-16'>
                  <motion.h2
                    className='md:mt-0 text-2xl md:text-4xl font-semibold mb-4'
                    initial={{ y: 40, opacity: 0 }}
                    animate={{
                      y: isActive || isPlayed ? 0 : 40,
                      opacity: isActive || isPlayed ? 1 : 0
                    }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    className='text-sm md:text-base max-w-md mb-8'
                    initial={{ y: 30, opacity: 0 }}
                    animate={{
                      y: isActive || isPlayed ? 0 : 30,
                      opacity: isActive || isPlayed ? 1 : 0
                    }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                  >
                    {item.description}
                  </motion.p>

                  <Link to={item.link}>
                    <motion.button
                      className='border border-white px-4 py-2 md:px-6 md:py-4 rounded-full w-fit hover:bg-white hover:text-black transition-colors text-sm md:text-base'
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{
                        opacity: isActive || isPlayed ? 1 : 0,
                        scale: isActive || isPlayed ? 1 : 0.95
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                        ease: 'easeOut'
                      }}
                      whileHover={{ scale: !isMobile ? 1.05 : 1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.button}
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default SplitHoverImages
