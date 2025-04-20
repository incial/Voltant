import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import CloudinaryImage from '../CloudinaryImage'
import { getOptimizedAssetProps } from '../../../utils/cloudinaryHelper'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const HeroSection = ({
  title = 'Section Title',
  subtitle = 'Section Subtitle',
  showSubtitle = true,
  breadcrumbs = ['Home'],
  heroImage
}) => {
  return (
    <motion.section
      className='relative w-full h-[80vh] overflow-hidden'
      initial='hidden'
      animate='visible'
      variants={fadeIn}
    >
      <div className='absolute inset-0 bg-black/30'></div>

      <CloudinaryImage
        {...getOptimizedAssetProps(heroImage)}
        alt='Hero Image'
        className='w-full h-full object-cover'
      />

      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl md:text-5xl font-semibold text-white text-center md:px-0 px-20'
        >
          {title}
        </motion.h1>
        
        {showSubtitle && (
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl md:text-xl text-white text-center mt-3 md:mt-4 max-w-[80%] md:max-w-[25%] px-4'
          >
            {subtitle}
          </motion.h2>
        )}
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-stretch text-base font-light md:font-semibold text-white font-['Cairo'] text-[16px] leading-[100%] opacity-50 absolute bottom-10 left-10 z-10">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className='flex items-center'>
            {index > 0 && <span className='mx-2'>/</span>}
            {crumb}
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default HeroSection
