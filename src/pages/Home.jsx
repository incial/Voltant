import React, { useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'

// Only import components needed for the initial viewport eagerly
import { HomeHeroSection as HeroSection, SplitImages as SplitHoverImages, RecentWorks } from '../components/sections/home'

// Lazy load components that appear below the fold
const ConnectWithUs = lazy(() => import('../components/sections/home/ConnectWithUs'))
const VideoBanner = lazy(() => import('../components/sections/home/VideoBanner'))

// Simple loading component for below-the-fold sections
const SectionLoader = () => (
  <div className="flex items-center justify-center w-full py-16">
    <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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



      <div className='w-full'>
        {/* ImpactMetrics section - Wrapped in Suspense for lazy loading */}
        <Suspense fallback={<SectionLoader />}>
          <div className='w-full'>
          <RecentWorks />
          </div>
        </Suspense>

        {/* VideoBanner - Wrapped in Suspense for lazy loading */}
        <Suspense fallback={<SectionLoader />}>
          <div className='w-full flex justify-center md:py-10'>
            <VideoBanner />
          </div>
        </Suspense>
        
        {/* ConnectWithUs - Wrapped in Suspense for lazy loading */}
        <Suspense fallback={<SectionLoader />}>
          <div className='w-full py-8 md:py-16 lg:py-24 flex justify-center px-4 sm:px-7'>
            <ConnectWithUs />
          </div>
        </Suspense>
      </div>
    </div>
  )
}

export default Home
