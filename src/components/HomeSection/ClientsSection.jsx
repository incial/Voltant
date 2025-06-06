import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { clientImgs } from '../../utils/localAssets'

const ClientsSection = () => {
  const scrollerRef = useRef(null)
  const scrollerContentRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  
  // Create an array of clients (duplicate for seamless looping)
  const clients = [clientImgs.client1, clientImgs.client2, clientImgs.client1, clientImgs.client2, clientImgs.client1, clientImgs.client2]
  const duplicatedClients = [...clients, ...clients, ...clients] // Triple the array for smooth looping

  // Set up GSAP animation
  useEffect(() => {
    // Skip animation if the refs aren't available
    if (!scrollerContentRef.current || !scrollerRef.current) return
    
    // Store a reference to the DOM element that won't change on cleanup
    const scrollerElement = scrollerRef.current;
    const contentElement = scrollerContentRef.current;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return
    
    // Get the width of a single set of clients
    const contentWidth = contentElement.offsetWidth
    // Create the GSAP animation
    const animation = gsap.to(contentElement, {
      x: -contentWidth, // Move the content left by its width
      duration: 20,
      repeat: -1, // Infinite loop
      ease: "linear",
      paused: false
    })
    
    // Pause animation when hovering
    const handleMouseEnter = () => {
      animation.pause()
      setHovering(true)
    }
    
    const handleMouseLeave = () => {
      animation.play()
      setHovering(false)
    }
    
    // Using passive listeners for touch events to improve scrolling performance
    scrollerElement.addEventListener('mouseenter', handleMouseEnter)
    scrollerElement.addEventListener('mouseleave', handleMouseLeave)
    
    // Touch device support with passive listeners
    scrollerElement.addEventListener('touchstart', handleMouseEnter, { passive: true })
    scrollerElement.addEventListener('touchend', handleMouseLeave, { passive: true })
    
    // Add wheel event with passive listener
    const handleWheel = () => {
      // Only pause if user is actively scrolling
      if (!hovering) {
        animation.pause()
        setHovering(true)
        
        // Resume animation after a short delay
        setTimeout(() => {
          animation.play()
          setHovering(false)
        }, 1000);
      }
    }
    
    scrollerElement.addEventListener('wheel', handleWheel, { passive: true })
    
    // Cleanup
    return () => {
      animation.kill()
      scrollerElement.removeEventListener('mouseenter', handleMouseEnter)
      scrollerElement.removeEventListener('mouseleave', handleMouseLeave)
      scrollerElement.removeEventListener('touchstart', handleMouseEnter)
      scrollerElement.removeEventListener('touchend', handleMouseLeave)
      scrollerElement.removeEventListener('wheel', handleWheel)
    }
  }, [])
  
  // Framer Motion variants for client logo hover effect
  const logoVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  }

  return (
    <section className='w-full py-12 md:mt-24 md:mb-12 overflow-hidden'>
      <div className='flex flex-col items-center w-full max-w-[1200px] mx-auto px-4'>
        {/* Client logos title with Framer Motion */}

        
        {/* Infinite Scroller Container with hover effect */}
        <motion.div 
          ref={scrollerRef} 
          className='w-full py-6 relative overflow-hidden'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Overlay gradient effects for seamless scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent"></div>
          
          {/* GSAP-animated content */}
          <div 
            ref={scrollerContentRef} 
            className='flex items-center'
            style={{
              width: 'fit-content',
              willChange: 'transform'
            }}
          >
            {/* Using one container with all duplicated items for GSAP animation */}
            {duplicatedClients.map((client, index) => (
              <motion.div 
                key={index} 
                className='mx-6 md:mx-10'
                whileHover={hovering ? "hover" : undefined}
                whileTap="tap"
                variants={logoVariants}
              >
                <img
                  src={client}
                  alt={`Client ${(index % clients.length) + 1}`}
                  className='h-12 md:h-16 object-contain max-w-[150px] md:max-w-[200px]'
                  loading="lazy"
                  style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s ease' }}
                  onMouseOver={(e) => hovering && (e.currentTarget.style.filter = 'grayscale(0%)')}
                  onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection
