import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ServiceCard, OptimizedImage } from '../../components/ui'
import { evImgs } from '../../utils/localAssets'

const EvCharging = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  // Services data array
  const services = [
    {
      title: 'AC Chargers',
      image: evImgs.acCharger,
      path: '/ev-charging/ac-chargers'
    },
    {
      title: 'DC Chargers',
      image: evImgs.dcCharger,
      path: '/ev-charging/dc-chargers'
    },
    {
      title: 'Engineering Works',
      image: evImgs.engineeringWorks,
      path: '/ev-charging/engineering-works'
    },
    {
      title: 'CPO',
      image: evImgs.cpo,
      path: '/ev-charging/cpo'
    },
    {
      title: 'More',
      image: evImgs.more,
      path: '/ev-charging/more'
    }
  ]

  return (
    <>
      {/* Mobile View - Only visible on small screens */}
      <div className="md:hidden min-h-screen flex flex-col font-['Cairo'] bg-white">
        {/* Hero Section */}
        <div className='relative h-[550px]'>
          {/* Image Background */}
          <div className='absolute inset-0 overflow-hidden'>
            {!imageLoaded && (
              <div className='absolute inset-0 bg-gray-800 z-5 flex items-center justify-center'>
                <div className="w-6 h-6 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <OptimizedImage
              src="/assets/images/EV_charging/EV_main1.png"
              alt="EV Charging"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              style={{ objectPosition: 'center center' }}
              preload
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent'></div>
          </div>
          {/* Hero Content - Positioned at left side */}
          <div className='absolute top-1/2 left-8 -translate-y-1/2 z-10 max-w-[85%] px-2'>
            <h1 className="text-2xl font-semibold text-white mb-4 font-['Cairo'] leading-snug">
              EV Charging <br /> Infrastructure
            </h1>

            <p className="text-sm text-white font-light font-['Cairo'] w-full max-w-[280px] mb-6 leading-relaxed">
              Powering the future of mobility with smart, efficient, and scalable EV charging solutions—designed for homes, businesses, and public spaces.
            </p>
          </div>
        </div>

        {/* Services Grid Section - Improved grid layout */}
        <div className='bg-white p-4 sm:p-8 py-12 sm:py-16'>
          <div className='grid grid-cols-2 gap-4 sm:gap-6'>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                path={service.path}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View - Only visible on medium and larger screens */}
      <div className='hidden md:flex min-h-screen flex-col'>
        {/* Hero Section with Image Background */}
        <section className='relative w-full h-screen'>
          {/* Image Background */}
          <div className='absolute inset-0 w-full h-full overflow-hidden'>
            {!imageLoaded && (
              <div className='absolute inset-0 bg-gray-800 z-5 flex items-center justify-center'>
                <div className="w-6 h-6 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <OptimizedImage
              src="/assets/images/EV_charging/EV_main1.png"
              alt="EV Charging"
              className='w-full h-full object-cover'
              loading='eager'
              decoding='async'
              onLoad={() => setImageLoaded(true)}
              style={{ objectPosition: 'center center' }}
              preload
            />
            {/* Gradient overlay from left to right */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent'></div>
          </div>
          
          {/* Hero Content - Positioned at left center */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='absolute top-1/2 left-[100px] -translate-y-1/2 z-10 text-white text-left w-full max-w-[450px] px-4 md:px-0'
          >
            <h1 className="font-['Cairo'] text-[2.75rem] leading-tight font-semibold m-0 mb-6">
              EV Charging <br /> Infrastructure
            </h1>
            <p className="text-lg text-white font-light font-['Cairo'] w-full max-w-[400px] leading-relaxed">
              Powering the future of mobility with smart, efficient, and scalable EV charging solutions—designed for homes, businesses, and public spaces.
            </p>
          </motion.div>
        </section>

        {/* Services Grid Section */}
        <section className='py-16 px-32 bg-white'>
          <div className='mx-auto max-w-[1500px] px-8'>
            <div className='grid grid-cols-3 gap-6'>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  image={service.image}
                  path={service.path}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default EvCharging