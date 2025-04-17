import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import HeroImage from "../../assets/images/engineering_works/hero.png"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Hero = ({ title = "Engineering Works", breadcrumbs = ["Home", "EV Charging", "Engineering Works"] }) => {
  return (
    <motion.section 
      className='relative w-full h-[80vh] overflow-hidden'
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className='absolute inset-0 bg-black/30'></div>
      <img
        src={HeroImage}
        alt='EV Charging Stations'
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl md:text-5xl font-semibold text-white text-center'
        >
          {title}
        </motion.h1>
      </div>
      
      {/* Breadcrumbs */}
      <div className="flex items-stretch text-base font-light md:font-semibold text-white font-['Cairo'] text-[16px] leading-[100%] opacity-50 absolute bottom-10 left-10 z-10">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {crumb}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Hero;
