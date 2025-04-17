import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HeroSection from '../components/Cpo/HeroSection';
import SeamlessChargingSection from '../components/Cpo/SeamlessChargingSection';
import MidSection from '../components/Cpo/MidSection';
import ProfilesSection from '../components/Cpo/ProfilesSection';

const Cpo = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col min-h-screen bg-white'>
        <HeroSection />
        <SeamlessChargingSection />
        
        <motion.section 
          className='w-full py-16'
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={{ 
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
        >
          <MidSection />
        </motion.section>
        
        <ProfilesSection />
      </div>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.footer>
    </>
  );
};

export default Cpo;
