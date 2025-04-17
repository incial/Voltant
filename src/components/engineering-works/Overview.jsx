import React from 'react';
// eslint-disable-next-line no-unused-vars
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

const Overview = () => {
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
          Engineering Works: Precision, Efficiency & Innovation
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInRight}
          className=' text-[#7F7F7F] font-300 mb-6 text-center text-xl'
        >
           Our Engineering Works ensure seamless EV charging infrastructure
          deployment, from planning to execution. We specialize in site
          assessment, electrical integration, grid connectivity, and custom
          installation solutions tailored to meet diverse operational needs.
          <br />
          <br />
          With a team of experts, we handle everything from power load analysis
          to safety compliance, ensuring that every charging station is built
          for efficiency, reliability, and scalability. Whether it's a
          commercial charging hub, fleet depot, or residential setup, our
          engineering solutions optimize performance while minimizing downtime.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInLeft}
          className='text-[#7F7F7F] font-300 text-center text-xl font-normal'
        >
          Through cutting-edge technology and industry best practices, we
          provide end-to-end support, ensuring your EV charging infrastructure
          is future-ready.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Overview;
