import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ServiceCard from '../components/ServiceCard'
import WasteToEnergyVideo from '/Videos/Waste_To_Energy.mp4'
import containerizedPlantImage from '../assets/images/Containerized_plant.png'
import householdImage from '../assets/images/Household.png'
import largeScalePlantImage from '../assets/images/Large_Scale_plant.png'
import smartWasteImage from '../assets/images/Smart_Waste.png'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const WasteToEnergy = () => {
  // Services data array
  const services = [
    {
      title: 'Containerized Plant',
      image: containerizedPlantImage,
      path: '/waste-to-energy/containerized-plant'
    },
    {
      title: 'Household',
      image: householdImage,
      path: '/waste-to-energy/household'
    },
    {
      title: <>Large Scale Plant</>,
      image: largeScalePlantImage,
      path: '/waste-to-energy/large-scale'
    },
    {
      title: <>Smart Waste <br/> Segregation <br/> Bins</>,
      image: smartWasteImage,
      path: '/waste-to-energy/smart-waste'
    },
  ]

  return (
    <>
        <Navbar />
      {/* Mobile View - Only visible on small screens */}
      <div className="md:hidden min-h-screen flex flex-col font-['Cairo'] bg-white">

        {/* Hero Section */}
        <div className='relative h-[550px]'>
          {/* Video Background */}
          <div className='absolute inset-0'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={WasteToEnergyVideo} type='video/mp4' />
            </video>
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>


          {/* Hero Content - Positioned at absolute bottom left */}
          <div className="absolute bottom-10 left-8 z-10 max-w-[85%]">
            <h1 className="text-2xl font-semibold text-white mb-6 font-['Cairo']">
              Waste to Energy <br/> Solutions
            </h1>
            
            <p className="text-md text-white font-light font-['Cairo'] w-[300px]">
            From smart, modular containerized plants to large-scale anaerobic digestion solutions, we transform organic waste into sustainable energy
            </p>
          </div>
        </div>

        {/* Services Grid Section - Improved grid layout */}
        <div className="bg-white p-8 py-16">
          <div className="grid grid-cols-2 gap-6 ">
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
            <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={WasteToEnergyVideo} type='video/mp4' />
            </video>
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Hero Content - Positioned at bottom left */}
          <div className="relative z-10 container mx-auto px-6 flex flex-col h-full">
          <div className="max-w-xl absolute bottom-35 left-0 ">
              <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-12 font-['Cairo']">
              Waste to Energy <br/> Solutions
              </h1>

              <p className="text-2xl text-white font-extralight font-['Cairo'] mb-4 w-[500px]">
              From smart, modular containerized plants to large-scale anaerobic digestion solutions, we transform organic waste into sustainable energy
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className='py-16 bg-white'>
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

export default WasteToEnergy
