import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ServiceCard from '../components/common/ServiceCard'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import CloudinaryImage from '../components/common/CloudinaryImage'
import CloudinaryVideo from '../components/common/CloudinaryVideo'
import { getOptimizedAssetProps } from '../utils/cloudinaryHelper'

const EvCharging = () => {
  // Services data array
  const services = [
    {
      title: 'AC Chargers',
      image: 'src/assets/images/AC_Chrager_image.png',
      path: '/ac-chargers'
    },
    {
      title: 'DC Chargers',
      image: 'src/assets/images/DC_Charger_image.png',
      path: '/dc-chargers'
    },
    {
      title: 'Engineering Works',
      image: 'src/assets/images/Engineering_works.png',
      path: '/ev-charging/engineering-works'
    },
    {
      title: 'CPO',
      image: 'src/assets/images/CPO.png',
      path: '/ev-charging/cpo'
    },
    {
      title: 'More',
      image: 'src/assets/images/More.png',
      path: '/ev-charging/more'
    }
  ]

  return (
    <>
      <Navbar />
      {/* Mobile View - Only visible on small screens */}
      <div className="md:hidden min-h-screen flex flex-col font-['Cairo'] bg-white">
        {/* Hero Section */}
        <div className='relative h-[550px]'>
          {/* Video Background */}
          <div className='absolute inset-0 overflow-hidden'>
            <CloudinaryVideo
              {...getOptimizedAssetProps(
                'public/Videos/EV_charging _video.mp4',
                'hero',
                'video'
              )}
              className='w-full h-full object-cover'
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
              playsInline={true}
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
      <div className='hidden md:flex min-h-screen flex-col'>
        {/* Hero Section with Video Background */}
        <section className='relative w-full h-screen'>
          {/* Video Background */}
          <div className='absolute inset-0 w-full h-full overflow-hidden'>
            <CloudinaryVideo
              {...getOptimizedAssetProps(
                'public/Videos/EV_charging _video.mp4',
                'hero',
                'video'
              )}
              className='w-full h-full object-cover'
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
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
      <Footer />
    </>
  )
}

export default EvCharging
