import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ServiceCard from '../components/ServiceCard'
import EVChargingVideo from '../assets/Videos/EV_charging _video.mp4'
import acChargerImage from '../assets/images/AC_Chrager_image.png'
import dcChargerImage from '../assets/images/DC_Charger_image.png'
import engineeringImage from '../assets/images/Engineering_works.png'
import cpoImage from '../assets/images/CPO.png'
import moreImage from '../assets/images/More.png'
import whiteLogo from '../assets/images/white_logo.png'
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsWhatsapp } from 'react-icons/bs'

const EvCharging = () => {
  // Services data array
  const services = [
    {
      title: 'AC Chargers',
      image: acChargerImage,
      path: '/ac-chargers'
    },
    {
      title: 'DC Chargers',
      image: dcChargerImage,
      path: '/dc-chargers'
    },
    {
      title: 'Engineering Works',
      image: engineeringImage,
      path: '/engineering-works'
    },
    {
      title: 'CPO',
      image: cpoImage,
      path: '/cpo'
    },
    {
      title: 'More',
      image: moreImage,
      path: '/more'
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
          <div className='absolute inset-0'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={EVChargingVideo} type='video/mp4' />
            </video>
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>


          {/* Hero Content - Positioned at absolute bottom left */}
          <div className="absolute bottom-10 left-8 z-10 max-w-[85%]">
            <h1 className="text-2xl font-semibold text-white mb-6 font-['Cairo']">
              EV Charging <br/> Infrastructure
            </h1>
            
            <p className="text-md text-white font-light font-['Cairo'] w-[300px]">
              Powering the future of mobility with smart, efficient and scalable
              EV charging solutions designed for homes, businesses, and public
              spaces.
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
              <source src={EVChargingVideo} type='video/mp4' />
            </video>
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Hero Content - Positioned at bottom left */}
          <div className="relative z-10 container mx-auto px-6 flex flex-col h-full">
          <div className="max-w-xl absolute bottom-35 left-0 ">
              <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-12 font-['Cairo']">
                EV Charging <br/> Infrastructure
              </h1>

              <p className="text-2xl text-white font-extralight font-['Cairo'] mb-4 w-[500px]">
                Powering the future of mobility with smart, efficient and
                scalable EV charging infrastructure solutions for homes,
                businesses, and public spaces.
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

export default EvCharging
