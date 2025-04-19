import React, { useEffect, useRef } from 'react'
import client1 from '../../assets/images/clients/client_1.png'
import client2 from '../../assets/images/clients/client_1.png'
import CloudinaryImage from '../common/CloudinaryImage'
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper'

const ClientsSection = () => {
  const scrollerRef = useRef(null);
  const firstScrollerRef = useRef(null);
  const secondScrollerRef = useRef(null);
  
  // Create an array of clients (duplicate for seamless looping)
  const clients = [client1, client2, client1, client2];
  const duplicatedClients = [...clients, ...clients]; // Double the array for smooth looping

  // Set up the scroll animation using IntersectionObserver for better performance
  useEffect(() => {
    // Check if the browser supports IntersectionObserver
    if (!('IntersectionObserver' in window) || !scrollerRef.current) {
      return;
    }

    // Function to check if the browser has reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Don't animate if user prefers reduced motion
    if (prefersReducedMotion) {
      return;
    }

    // Apply CSS animations with JavaScript for better browser support
    if (firstScrollerRef.current && secondScrollerRef.current) {
      firstScrollerRef.current.style.animation = 'scroll 30s linear infinite';
      secondScrollerRef.current.style.animation = 'scroll 30s linear infinite';
    }

    // Clean up animations on unmount
    return () => {
      if (firstScrollerRef.current) {
        firstScrollerRef.current.style.animation = '';
      }
      if (secondScrollerRef.current) {
        secondScrollerRef.current.style.animation = '';
      }
    };
  }, []);

  return (
    <section className='w-full py-12 md:mt-24 md:mb-12 overflow-hidden'>
      <div className='flex flex-col items-center w-full max-w-[1200px] mx-auto px-4'>
        {/* Infinite Scroller Container */}
        <div ref={scrollerRef} className='w-full py-4 relative'>
          <div className='flex'>
            {/* First set for seamless looping */}
            <div ref={firstScrollerRef} className='flex whitespace-nowrap client-scroller'>
              {duplicatedClients.map((client, index) => (
                <div key={`first-${index}`} className='inline-block mx-4 md:mx-8'>
                  <img
                    src={client}
                    alt={`Client ${(index % clients.length) + 1}`}
                    className='h-12 md:h-16 object-contain max-w-[150px] md:max-w-[200px] inline-block'
                    loading="lazy"
                  />
                  {/* use this commented instead of img tag for cloudinary image */}

                  {/* <CloudinaryImage
                    {...getOptimizedAssetProps(client)}
                    alt={`Client ${(index % clients.length) + 1}`}
                    className='h-12 md:h-16 object-contain max-w-[150px] md:max-w-[200px] inline-block'
                    loading="lazy"
                  /> */}
                </div>
              ))}
            </div>
            {/* Second set for continuous animation */}
            <div ref={secondScrollerRef} className='flex whitespace-nowrap client-scroller'>
              {duplicatedClients.map((client, index) => (
                <div key={`second-${index}`} className='inline-block mx-4 md:mx-8'>
                  <img
                    src={client}
                    alt={`Client ${(index % clients.length) + 1}`}
                    className='h-12 md:h-16 object-contain max-w-[150px] md:max-w-[200px] inline-block'
                    loading="lazy"
                  />
                  {/* use this commented instead of img tag for cloudinary image */}
                  
                  {/* <CloudinaryImage
                    {...getOptimizedAssetProps(client)}
                    alt={`Client ${(index % clients.length) + 1}`}
                    className='h-12 md:h-16 object-contain max-w-[150px] md:max-w-[200px] inline-block'
                    loading="lazy"
                  /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles with improved cross-browser support */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .client-scroller {
          display: inline-block;
          will-change: transform;
        }
        
        /* Only use animation if no reduced motion is preferred */
        @media (prefers-reduced-motion: no-preference) {
          .client-scroller {
            animation: scroll 30s linear infinite;
          }
        }
        
        /* Fallback for browsers that don't support CSS animations */
        @supports not (animation: scroll 30s linear infinite) {
          .client-scroller {
            position: relative;
            left: 0;
            transition: left 0.5s ease-out;
          }
        }
      `}</style>
    </section>
  )
}

export default ClientsSection
