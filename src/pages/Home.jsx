import React from 'react'
import HeroSection from '../components/HeroSection'
import ImpactMetrics from '../components/ImpactMetrics'
import Navbar from '../components/common/Navbar'
import ClientsSection from '../components/ClientsSection'
import WhoAreWe from '../components/WhoAreWe'
import Footer from '../components/common/Footer'
import ConnectWithUs from '../components/ConncetWithUs'
import VideoBanner from '../components/VideoBanner'

const Home = () => {
  return (
    <div className='bg-white w-full min-h-screen flex flex-col items-center'>
      {/* Navbar */}
      <div className='w-full absolute top-0 left-0 z-50'>
        <Navbar />
      </div>

      {/* Hero section */}
      <div
        className='relative bg-black w-full h-screen'
        style={{
          overflow: 'hidden'
        }}
      >
        <HeroSection />
      </div>
      {/* Content sections */}

      {/* WhoAreWe section */}
      <div className='w-full flex justify-center'>
        <WhoAreWe />
      </div>

      {/* ClientsSection */}
      <div className='w-full'>
        <ClientsSection />
      </div>

      <div className='w-full'>
        {/* ImpactMetrics section */}
        <div className='w-full'>
          <ImpactMetrics />
        </div>

        <div className='w-full flex justify-center py-4 md:py-10'>
          <VideoBanner />
        </div>
        <div className='w-full py-10 md:py-30 flex justify-center px-7'>
          <ConnectWithUs />
        </div>

        {/* Footer */}
        <div className='w-full'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
