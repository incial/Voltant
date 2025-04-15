import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/common/Navbar'

const Home = () => {
  const heroContainerRef = useRef(null);
  const navbarRef = useRef(null);
  
  // Handle intro animation sequence
  useEffect(() => {
    // Initial setup - hide navbar
    gsap.set(navbarRef.current, { opacity: 0, y: -50 });
    
    // Timeline for the hero section animation
    const tl = gsap.timeline({
      onComplete: () => {
        // Animation completed
      }
    });
    
    // First move hero container from top to center
    tl.to(heroContainerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });
    
    // Then expand hero container to fill the screen
    tl.to(heroContainerRef.current, {
      width: '100%',
      height: '100vh',
      borderRadius: 0,
      duration: 1,
      ease: "power3.inOut"
    }, "+=0.2");
    
    // Fade in and slide down the navbar
    tl.to(navbarRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");
    
    return () => {
      tl.kill(); // Clean up animation on component unmount
    };
  }, []);

  return (
    <div className="bg-white w-full h-screen overflow-hidden flex items-center justify-center relative">
      {/* Hidden navbar that will be revealed by animation */}
      <div ref={navbarRef} className="w-full absolute top-0 left-0 z-50">
        <Navbar />
      </div>
      
      {/* Hero container with animation */}
      <motion.div 
        ref={heroContainerRef}
        initial={{ 
          width: '80%', 
          height: '70vh', 
          borderRadius: '30px', 
          overflow: 'hidden',
          y: -200,
          opacity: 0
        }}
        className="relative bg-black"
      >
        <HeroSection />
      </motion.div>
    </div>
  )
}

export default Home
