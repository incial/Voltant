import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { homeImgs } from "../../../utils/localAssets";
import { OptimizedImage } from "../../ui";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = ({
  title = "Section Title",
  subtitle = "Section Subtitle",
  showSubtitle = true,
  breadcrumbs = ["Home"],
  heroImage,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Get image path from local assets or fallback to provided path
  const imagePath = homeImgs[heroImage] || heroImage;

  return (
    <motion.section
      className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-800 z-5 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <OptimizedImage
        src={imagePath}
        alt="Hero Image"
        className="
  w-full h-full object-cover
  object-center
  scale-[1.3] sm:scale-[1.6] md:scale-100
"
        usage="hero"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        onLoad={() => setImageLoaded(true)}
        style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.5s" }}
        preload
        enableResponsive
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center md:justify-center z-20 px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-h1 font-semibold text-white text-center px-6 md:px-0"
        >
          {title}
        </motion.h1>

        {showSubtitle && (
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-h2 !text-xl md:!text-xl text-white text-center mt-3 md:mt-4 max-w-[80%] md:max-w-[25%] px-4"
          >
            {subtitle}
          </motion.h2>
        )}
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-stretch text-base font-light md:font-semibold text-white font-['Cairo'] text-[16px] leading-[100%] opacity-50 absolute bottom-10 left-10 z-30">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {crumb}
          </div>
        ))}{" "}
      </div>
    </motion.section>
  );
};

export default HeroSection;
