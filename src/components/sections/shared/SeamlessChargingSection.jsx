import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const sectionFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.25,
    },
  },
};

const SeamlessChargingSection = ({
  title = "Seamless Charging, Smarter Operations",
  paragraphs = [],
}) => {
  return (
    <motion.section
      className="w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionFadeIn}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeIn}
          className="text-h2 text-gray-500 font-black text-center mb-24"
        >
          {title}
        </motion.h2>

        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-gray-700 mb-6 text-center font-normal text-body"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
};

export default SeamlessChargingSection;
