"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  {
    id: "ev",
    title: "EV Charging Infrastructure",
    description:
      "Powering the future of mobility with smart, efficient, and scalable EV charging solutions—designed for homes, businesses, and public spaces.",
    button: "Learn More",
    img: "/assets/images/Home/split/split2.png",
    icon: "/assets/icons/battery.png",
    link: "/ev-charging",
  },
  {
    id: "pollution",
    title: "Waste to Energy Solutions",
    description:
      "From smart modular containerized plants to large-scale anaerobic digestion solutions, we transform organic waste into sustainable energy.",
    button: "Learn More",
    img: "/assets/images/Home/split/split1.png",
    icon: "/assets/icons/waterpure.png",
    link: "/waste-to-energy",
  },
];

const SplitImages = () => {
  const [activeId, setActiveId] = useState(images[0].id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div 
      className="flex md:flex-row flex-col md:h-screen w-full md:overflow-y-visible"
      style={{
        WebkitOverflowScrolling: 'touch',
        height: isMobile ? 'auto' : undefined,
        overflowY: isMobile ? 'visible' : undefined
      }}
    >
      {images.map(item => {
        const isActive = activeId === item.id
        const isPlayed = playedId === item.id || (isMobile && mobileInitialized)

        return (
          <motion.div
            key={item.id}
            layout={!isMobile}
            className='relative cursor-pointer overflow-hidden'
            onMouseEnter={() => !isMobile && setActiveId(item.id)}
            style={{
              flexBasis: isMobile ? '100%' : isActive ? '66.66%' : '33.33%',
              transition: isMobile ? 'none' : 'flex-basis 0.8s cubic-bezier(0.83, 0, 0.17, 1)',
              minHeight: isMobile ? '100vh' : '100%',
              height: isMobile ? '100vh' : '100%',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden'
            }}
          >
            {/* Icon */}
            <div className="absolute top-4 md:top-12 right-4 md:right-12 w-8 md:w-16 h-8 md:h-16 z-20">
              <Image
                src={item.icon}
                alt={`${item.id} icon`}
                fill
                className="object-contain"
              />
            </div>

            {/* Image Background */}
            <div className="w-full absolute inset-0 overflow-hidden">
              <motion.div
                className="w-full h-full"
                initial={false}
                animate={{ scale: !isMobile && isActive ? 1.02 : 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                <OptimizedImage
                  src={item.img}
                  alt={item.title}
                  width={1920}
                  height={1080}
                  className='w-full h-full object-cover'
                  loading='eager'
                  decoding='async'
                  fetchPriority={item.id === images[0].id ? 'high' : undefined}
                  draggable={false}
                  style={{ opacity: 1 }}
                  preload={item.id === images[0].id}
                />
              </motion.div>
            </div>

            {/* Overlay */}
            <motion.div
              className='absolute inset-0 bg-black/30 p-5 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 text-white flex flex-col justify-center pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)]'
              initial={false}
              animate={{ opacity: isActive || isPlayed ? 1 : 0 }}
              transition={{ 
                duration: isMobile ? 0 : 0.5, 
                ease: 'easeInOut' 
              }}
            >
              <div className='relative flex flex-col'>
                {/* Standalone vertical line */}
                <motion.div
                  className='absolute top-0 left-0 bottom-0 w-[2px] bg-white rounded-full'
                  initial={false}
                  animate={{ height: isActive || isPlayed ? '100%' : 0 }}
                  transition={{ 
                    duration: isMobile ? 0 : 1, 
                    delay: isMobile ? 0 : 0.1, 
                    ease: 'easeOut' 
                  }}
                />

                <div className="ml-8 md:ml-12">
                  <motion.h2
                    className='md:mt-0 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 md:mb-4'
                    initial={false}
                    animate={{
                      y: showContent ? 0 : 40,
                      opacity: showContent ? 1 : 0,
                    }}
                    transition={{ 
                      duration: isMobile ? 0 : 0.6, 
                      delay: isMobile ? 0 : 0.2, 
                      ease: 'easeOut' 
                    }}
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    className='text-xs sm:text-sm md:text-base max-w-xs md:max-w-md mb-5 md:mb-6 lg:mb-8'
                    initial={false}
                    animate={{
                      y: showContent ? 0 : 30,
                      opacity: showContent ? 1 : 0,
                    }}
                    transition={{ 
                      duration: isMobile ? 0 : 0.6, 
                      delay: isMobile ? 0 : 0.3, 
                      ease: 'easeOut' 
                    }}
                  >
                    {item.description}
                  </motion.p>

                  <Link href={item.link}>
                    <motion.button
                      className='border border-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 rounded-full w-fit hover:bg-white hover:text-black transition-colors text-xs sm:text-sm md:text-base'
                      initial={false}
                      animate={{
                        opacity: isActive || isPlayed ? 1 : 0,
                        scale: isActive || isPlayed ? 1 : 0.95
                      }}
                      transition={{
                        duration: isMobile ? 0 : 0.5,
                        delay: isMobile ? 0 : 0.4,
                        ease: 'easeOut'
                      }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.button}
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SplitHoverImages
