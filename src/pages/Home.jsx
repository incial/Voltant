import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/HomeSection/HeroSection'
import SplitHoverImages from '../components/HomeSection/SplitImages'
import ImpactMetrics from '../components/HomeSection/ImpactMetrics'
import ClientsSection from '../components/HomeSection/ClientsSection'
import WhoAreWe from '../components/HomeSection/WhoAreWe'
import ConnectWithUs from '../components/HomeSection/ConncetWithUs'
import VideoBanner from '../components/HomeSection/VideoBanner'

const Home = () => {
  const location = useLocation();

  // Handle smooth scrolling to sections when hash changes with better cross-browser support
  useEffect(() => {
    if (location.hash) {
      // Wait a moment for component to render
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          // Offset to account for navbar height
          const navbarHeight = 80; // Approximate height of navbar
          
          // Use more cross-browser compatible approach for getting element position
          const rect = element.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const offsetPosition = rect.top + scrollTop - navbarHeight;
          
          // Use scrollTo with fallback for browsers that don't support smooth scrolling
          try {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            // eslint-disable-next-line no-unused-vars
          } catch (_) {
            // Fallback for browsers that don't support smooth scrolling
            window.scrollTo(0, offsetPosition);
          }
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className='bg-white w-full min-h-screen flex flex-col items-center overflow-x-hidden'>
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
      <SplitHoverImages />

      {/* WhoAreWe section */}
      <div id="who-are-we" className='w-full flex justify-center h-auto md:h-[120vh] md:items-center'>
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
        <div className='w-full py-8 md:py-16 lg:py-24 flex justify-center px-4 sm:px-7'>
          <ConnectWithUs />
        </div>
      </div>
    </div>
  )
}

export default Home
