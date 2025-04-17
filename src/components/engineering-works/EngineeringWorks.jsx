import React from "react";
import { motion } from 'framer-motion';
import Hero  from "./Hero";
import Overview from "./Overview";
import { WhyChooseUs } from "./WhyChooseUs";
import { EngineeringProfiles } from "./EngineeringProfiles";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const EngineeringWorks = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col min-h-screen bg-white'>
      <Hero 
          title="Engineering Works"
          breadcrumbs={["Home", "EV Charging", "Engineering Works"]}
        />
        <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
        <Overview />
        </div>
        
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
          <WhyChooseUs />
        </motion.section>
        
        <EngineeringProfiles />
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

export default EngineeringWorks;

