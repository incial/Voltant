import React, { useEffect, useRef, useState } from 'react'
import client1 from '../../assets/images/clients/client_1.png'
import client2 from '../../assets/images/clients/client_1.png'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const ClientsSection = () => {
  const scrollerRef = useRef(null)
  const scrollerContentRef = useRef(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [hovering, setHovering] = useState(false)
  
  // Create an array of clients (duplicate for seamless looping)
  const clients = [client1, client2, client1, client2, client1, client2]
  const duplicatedClients = [...clients, ...clients, ...clients] // Triple the array for smooth looping

  // Set up GSAP animation
  useEffect(() => {
    // Skip animation if the refs aren't available
    if (!scrollerContentRef.current || !scrollerRef.current) return
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return
    
    // Get the width of a single set of clients
    const contentWidth = scrollerContentRef.current.offsetWidth
    setScrollWidth(contentWidth)
    
    // Create the GSAP animation
    const animation = gsap.to(scrollerContentRef.current, {
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
    
    scrollerRef.current.addEventListener('mouseenter', handleMouseEnter)
    scrollerRef.current.addEventListener('mouseleave', handleMouseLeave)
    
    // Touch device support
    scrollerRef.current.addEventListener('touchstart', handleMouseEnter)
    scrollerRef.current.addEventListener('touchend', handleMouseLeave)
    
    // Cleanup
    return () => {
      animation.kill()
      if (scrollerRef.current) {
        scrollerRef.current.removeEventListener('mouseenter', handleMouseEnter)
        scrollerRef.current.removeEventListener('mouseleave', handleMouseLeave)
        scrollerRef.current.removeEventListener('touchstart', handleMouseEnter)
        scrollerRef.current.removeEventListener('touchend', handleMouseLeave)
      }
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
                  onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
                {/* use this commented instead of img tag for cloudinary image */}
                {/* <CloudinaryImage
                  {...getOptimizedAssetProps(client)}
                  alt={`Client ${(index % clients.length) + 1}`}
                  className='h-12 md:h-16 object-contain max-w-[150px] md:max-w-[200px]'
                  loading="lazy"
                  style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s ease' }}
                  onMouseOver={(e) => hovering && (e.currentTarget.style.filter = 'grayscale(0%)')}
                  onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
                /> */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection
