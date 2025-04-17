import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/CPO_main.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const HeroSection = () => {
  return (
    <motion.section 
      className='relative w-full h-[80vh] overflow-hidden'
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className='absolute inset-0 bg-black/30'></div>
      <img
        src={heroImage}
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
          CPO
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default HeroSection;
