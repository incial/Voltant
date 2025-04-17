import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const sectionFadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.25
    }
  }
};

const SeamlessChargingSection = () => {
  return (
    <motion.section 
      className='w-full py-20 md:py-28 px-6'
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={sectionFadeIn}
    >
      <div className='max-w-4xl mx-auto'>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeIn}
          className='text-4xl text-gray-500 font-black text-center mb-24'
        >
          Seamless Charging, Smarter Operations
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInRight}
          className='text-gray-700 mb-6 text-center text-xl font-normal'
        >
          As a Charge Point Operator (CPO), we manage the deployment,
          operation, and maintenance of EV charging stations, ensuring a
          seamless and efficient charging experience. Our smart
          infrastructure enables real-time monitoring, remote diagnostics,
          and optimized energy distribution for cost-effective and reliable
          EV charging solutions.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInLeft}
          className='text-gray-700 mb-8 text-center text-xl font-normal'
        >
          With secure payment integrations, dynamic load balancing, and scalable cloud-based systems, we provide businesses, fleet operators, and public charging networks with a future-ready EV infrastructure that meets industry standards and regulatory requirements.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default SeamlessChargingSection;
