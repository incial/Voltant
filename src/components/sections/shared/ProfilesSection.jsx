import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Animation variants with improved cross-browser performance
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] // Cubic bezier curve for smoother animation
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
      staggerChildren: 0.25,
      ease: "easeOut"
    }
  }
};

const buttonAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      delay: 0.6, 
      duration: 0.4,
      ease: "easeOut"
    } 
  }
};

// Profile Item Component
const ProfileItem = ({ title, description }) => {
  return (
    <motion.div 
      className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"
      variants={itemFadeIn}
    >
      <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-3">{title}</h3>
      <p className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed md:leading-normal">
        {description}
      </p>
    </motion.div>
  );
};

const ProfilesSection = ({ 
  sectionTitle = "",
  leftProfiles = [],
  rightProfiles = [],
  paragraph = "",
  buttonText = "Download Profile",
  showButton = true
}) => {
  // If paragraph is provided, use single column layout
  const useParagraphLayout = paragraph && (!leftProfiles.length && !rightProfiles.length);

  return (
    <motion.section 
      className="flex flex-col items-center w-full py-12 md:py-16 lg:py-20 lg:mt-[80px] lg:mb-[80px] xl:mt-[100px] xl:mb-[100px] px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      variants={fadeIn}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col">
        <motion.h2 
          className="text-[#7F7F7F] text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-10 lg:mb-12 font-bold leading-tight px-4 sm:px-6 md:px-0"
          variants={fadeIn}
        >
          {sectionTitle}
        </motion.h2>
        <div className="mt-6 md:mt-10 lg:mt-[60px]">
          {useParagraphLayout ? (
            <motion.div 
              className="px-4 sm:px-6 md:px-0"
              variants={sectionFadeIn}
              viewport={{ amount: 0.1, once: true }}
            >
              <p className="text-[#7F7F7F] text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed md:leading-normal lg:leading-[48px] mb-6 md:mb-10 lg:mb-12">
                {paragraph}
              </p>
              {showButton && (
                <motion.div 
                  className="flex items-center justify-start w-full py-6 md:py-8 lg:py-[40px] lg:my-[70px]"
                  variants={buttonAnimation}
                >
                  <button 
                    className="text-sm sm:text-base md:text-lg font-normal text-center leading-none px-6 md:px-8 lg:px-9 py-3 md:py-[16px] rounded-[31px] border-[#7F7F7F] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.3)]"
                    aria-label={buttonText}
                  >
                    {buttonText}
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <div className="gap-4 md:gap-6 lg:gap-8 xl:gap-10 justify-between flex flex-col md:flex-row px-4 sm:px-6 md:px-0">
              <motion.div 
                className="w-full md:w-[47%]"
                variants={sectionFadeIn}
                viewport={{ amount: 0.1, once: true }}
              >
                <div className="text-[#7F7F7F] text-lg md:text-xl lg:text-2xl font-light leading-normal md:leading-[40px] lg:leading-[48px]">
                  {leftProfiles.map((profile, index) => (
                    <ProfileItem 
                      key={index}
                      title={profile.title} 
                      description={profile.description}
                    />
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="w-full md:w-[47%]"
                variants={sectionFadeIn}
                viewport={{ amount: 0.1, once: true }}
              >
                <div className="flex flex-col items-start md:items-end text-[#7F7F7F]">
                  <div className="text-lg md:text-xl lg:text-2xl font-light leading-normal md:leading-[40px] lg:leading-[48px]">
                    {rightProfiles.map((profile, index) => (
                      <ProfileItem 
                        key={index}
                        title={profile.title} 
                        description={profile.description}
                      />
                    ))}
                  </div>
                  {showButton && (
                    <motion.div 
                      className="flex items-center justify-start w-full py-6 md:py-8 lg:py-[40px] lg:my-[70px]"
                      variants={buttonAnimation}
                    >
                      <button 
                        className="text-sm sm:text-base md:text-lg font-normal text-center leading-none px-6 md:px-8 lg:px-9 py-3 md:py-[16px] rounded-[31px] border-[#7F7F7F] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.3)]"
                        aria-label={buttonText}
                      >
                        {buttonText}
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ProfilesSection;