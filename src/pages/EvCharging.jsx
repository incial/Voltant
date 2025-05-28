import React, { useState } from 'react'
import ServiceCard from '../components/common/ServiceCard'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { evImgs, vids } from '../utils/localAssets'

const EvCharging = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

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
          {/* Video Background */}
          <div className='absolute inset-0 overflow-hidden'>
            {!videoLoaded && (
              <div className='absolute inset-0 bg-gray-800 z-10 flex items-center justify-center'>
                <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <video
              src={vids.evCharging}
              className='w-full h-full object-cover'
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
              playsInline={true}
              onLoadedData={() => setVideoLoaded(true)}
              style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s' }}
            />

            <div className='absolute inset-0 bg-black opacity-40'></div>
          </div>
          {/* Hero Content - Positioned at absolute bottom left */}
          <div className='absolute bottom-10 left-8 z-10 max-w-[85%] px-2'>
            <h1 className="text-2xl font-semibold text-white mb-6 font-['Cairo'] leading-snug">
              EV Charging <br /> Infrastructure
            </h1>

            <p className="text-md text-white font-light font-['Cairo'] w-full max-w-[300px]">
              Powering the future of mobility with smart, efficient and scalable
              EV charging solutions designed for homes, businesses, and public
              spaces.
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
      <div className='hidden md:flex min-h-screen flex-col'>        {/* Hero Section with Video Background */}
        <section className='relative w-full h-screen'>
          {/* Video Background */}
          <div className='absolute inset-0 w-full h-full overflow-hidden'>
            {!videoLoaded && (
              <div className='absolute inset-0 bg-gray-800 z-10 flex items-center justify-center'>
                <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <video
              src={vids.evCharging}
              className='w-full h-full object-cover'
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
              onLoadedData={() => setVideoLoaded(true)}
              style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s' }}
            />
            <div className='absolute inset-0 bg-black opacity-60'></div>
          </div>
          {/* Hero Content - Positioned at bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='absolute bottom-[200px] left-[100px] z-10 text-white text-left w-full max-w-[500px] px-4 md:px-0'
          >
            <h1 className="font-['Cairo'] text-[3rem] leading-tight font-semibold m-0">
              EV Charging <br /> Infrastructure
            </h1>
            <p className="text-2xl text-white font-extralight font-['Cairo'] mt-10 md:mt-14 w-full max-w-[500px]">
              Powering the future of mobility with smart, efficient and scalable
              EV charging infrastructure solutions for homes, businesses, and
              public spaces.
            </p>
          </motion.div>
        </section>

        {/* Services Grid Section */}
        <section className='py-16 px-32'>
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
