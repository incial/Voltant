import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    } 
  }
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    } 
  }
};

const sectionFadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.2,
      ease: "easeOut"
    }
  }
};

const HowItWorksSection = ({ 
  sectionTitle = "How It Works",
  steps = []
}) => {
  return (
    <motion.section 
      className="flex flex-col items-center w-full py-8 md:py-12 px-4 sm:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      variants={fadeIn}
    >
      <div className="max-w-[1098px] w-full flex flex-col">
        <motion.h2 
          className="text-[#7F7F7F] text-3xl md:text-4xl mb-6 md:mb-8 lg:mb-10 font-bold leading-tight text-center"
          variants={fadeIn}
        >
          {sectionTitle}
        </motion.h2>
        <motion.div 
          className="flex flex-col gap-6 md:gap-8"
          variants={sectionFadeIn}
          viewport={{ amount: 0.1, once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex gap-4 md:gap-6 items-start"
              variants={itemFadeIn}
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#7F7F7F] text-white flex items-center justify-center text-xl md:text-2xl font-bold">
                {index + 1}
              </div>
              <p className="text-[#7F7F7F] text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed md:leading-normal pt-1 md:pt-2">
                {step}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;
