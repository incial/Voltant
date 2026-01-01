import React, { useState } from 'react'
import { Navbar, Footer } from '../../components/layout'
import { ServiceCard } from '../../components/ui'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { vids, wasteImgs } from '../../utils/localAssets'

const WasteToEnergy = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  // Services data array
  const services = [
    {
      title: (
        <>
          Containerized
          <br />
          Plant
        </>
      ),
      image: wasteImgs.containerizedPlant,
      path: '/waste-to-energy/containerized-plant'
    },
    {
      title: (
        <>
          Large Scale
          <br />
          Plant
        </>
      ),
      image: wasteImgs.largeScalePlant,
      path: '/waste-to-energy/large-scale'
    },
    {
      title: <>Household</>,
      image: wasteImgs.household,
      path: '/waste-to-energy/household'
    },
    {
      title: (
        <>
          Smart Waste
          <br />
          Segregation
          <br />
          Bins
        </>
      ),
      image: wasteImgs.smartWaste,
      path: '/waste-to-energy/smart-waste'
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
            {!imageLoaded && (
              <div className='absolute inset-0 bg-gray-800 z-5 flex items-center justify-center'>
                <div className="w-6 h-6 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <img
              src="/assets/images/WateTOEnergy/main.jpg"
              alt="Waste to Energy"
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
              style={{ objectPosition: '70% 80%' }}
            />
            <div className='absolute inset-0 bg-black opacity-40'></div>
          </div>

          {/* Hero Content - Positioned at absolute bottom left */}
          <div className='absolute bottom-10 left-8 z-10 max-w-[85%] px-2'>
            <h1 className="text-2xl font-semibold text-white mb-6 font-['Cairo'] leading-snug">
              Waste to Energy <br /> Solutions
            </h1>

            <p className="text-md text-white font-light font-['Cairo'] w-full max-w-[300px] mb-6">
              From smart, modular containerized plants to large-scale anaerobic
              digestion solutions, we transform organic waste into sustainable
              energy
            </p>

            <a
              href="/pdfs/FoodOrganic waste to Energy Solutions A CIRCULAR ECONOMY SOLUTION FOR A CARBON NEUTRAL FUTURE-4.pdf"
              download="Waste-to-Energy-Solutions.pdf"
              className="inline-block text-sm font-normal text-center leading-none px-5 py-3 rounded-[31px] border-white border-solid border-2 text-white hover:bg-white hover:text-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Services Grid Section - Improved grid layout */}
        <div className='p-4 sm:p-8 py-12 sm:py-16 bg-white'>
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
            {!imageLoaded && (
              <div className='absolute inset-0 bg-gray-800 z-5 flex items-center justify-center'>
                <div className="w-6 h-6 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <img
              src="/assets/images/WateTOEnergy/main.jpg"
              alt="Waste to Energy"
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
              style={{ objectPosition: '50% 45%' }}
            />
            <div className='absolute inset-0 bg-black opacity-40'></div>
          </div>

          {/* Hero Content - Positioned at bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute bottom-[200px] left-[100px] z-10 text-white text-left w-full max-w-[500px] px-4 md:px-0"
          >
            <h1
              className="font-['Cairo'] text-[3rem] leading-tight font-semibold m-0"
            >
              Waste to Energy <br /> Solutions
            </h1>
            <p className="text-2xl text-white font-extralight font-['Cairo'] mt-10 md:mt-14 w-full max-w-[500px] mb-8">
              From smart, modular containerized plants to large-scale anaerobic
              digestion solutions, we transform organic waste into sustainable
              energy
            </p>
            <a
              href="/pdfs/FoodOrganic waste to Energy Solutions A CIRCULAR ECONOMY SOLUTION FOR A CARBON NEUTRAL FUTURE-4.pdf"
              download="Waste-to-Energy-Solutions.pdf"
              className="inline-block text-base md:text-lg font-normal text-center leading-none px-6 md:px-9 py-4 rounded-[31px] border-white border-solid border-2 text-white hover:bg-white hover:text-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Download Brochure
            </a>
          </motion.div>
        </section>

        {/* Services Grid Section */}
        <section className='py-16 px-8 md:px-16 lg:px-32 bg-white'>
          <div className='mx-auto max-w-[1500px] px-4 sm:px-6'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
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

export default WasteToEnergy
