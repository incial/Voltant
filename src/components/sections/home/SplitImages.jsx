import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroIcons } from '../../../utils/localAssets'
import { Link } from 'react-router-dom'

const images = [
  {
    id: 'ev',
    title: 'EV Charging Infrastructure',
    description:
      'Powering the future of mobility with smart, efficient, and scalable EV charging solutions—designed for homes, businesses, and public spaces.',
    button: 'Learn More',
    img: '/assets/images/Home/split/split2.webp',
    icon: heroIcons.battery,
    link: '/ev-charging'
  },
  {
    id: 'pollution',
    title: 'Waste to Energy Solutions',
    description:
      'From smart modular containerized plants to large-scale anaerobic digestion solutions, we transform organic waste into sustainable energy.',
    button: 'Learn More',
    img: '/assets/images/Home/split/split1.webp',
    icon: heroIcons.waterPure,
    link: '/waste-to-energy'
  }
]

const SplitHoverImages = () => {
  const [activeId, setActiveId] = useState(images[0].id)
  const [playedId, setPlayedId] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileInitialized, setMobileInitialized] = useState(false)

  // Check if device is mobile on component mount and when window resizes
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Set all sections to show content on initial mobile load
  useEffect(() => {
    if (isMobile && !mobileInitialized) {
      setPlayedId(images[0].id)
      setMobileInitialized(true)
    }
  }, [isMobile, mobileInitialized])

  return (
    <div className='flex md:flex-row flex-col h-auto md:h-[100vh] w-full overflow-hidden'>
      {images.map(item => {
        const isActive = activeId === item.id
        const isPlayed = playedId === item.id || (isMobile && mobileInitialized)

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
              className='absolute top-4 sm:top-5 md:top-8 lg:top-12 xl:top-16 right-4 sm:right-5 md:right-8 lg:right-12 xl:right-16 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 z-20 opacity-100'
              loading='lazy'
            />

            {/* Image Background */}
            <motion.div
              className='w-full h-full overflow-hidden'
              initial={{ scale: 1 }}
              animate={{ scale: !isMobile && isActive ? 1.02 : 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <img
                src={item.img}
                alt={item.title}
                className='w-full h-full object-cover transition-opacity duration-1000'
                draggable={false}
                style={{ opacity: 1 }}
              />
            </motion.div>

            {/* Overlay */}
            <motion.div
              className='absolute inset-0 bg-black/30 p-5 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 text-white flex flex-col justify-center'
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

                <div className='ml-8 sm:ml-10 md:ml-10 lg:ml-12 xl:ml-14'>
                  <motion.h2
                    className='md:mt-0 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 md:mb-4'
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
                    className='text-xs sm:text-sm md:text-base max-w-xs md:max-w-md mb-5 md:mb-6 lg:mb-8'
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
                      className='border border-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 rounded-full w-fit hover:bg-white hover:text-black transition-colors text-xs sm:text-sm md:text-base'
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
