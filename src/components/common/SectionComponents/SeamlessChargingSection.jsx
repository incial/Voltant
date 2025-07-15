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
      className="w-full py-20 md:py-28 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      variants={sectionFadeIn}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={fadeIn}
          className="text-4xl text-gray-500 font-black text-center mb-24"
        >
          {title}
        </motion.h2>

        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
            className="text-gray-700 mb-6 text-center text-xl font-normal"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
};

export default SeamlessChargingSection;
