import React from 'react';
import { motion } from 'framer-motion';
import { useContactForm } from '../../../context/ContactFormContext';

// Animation variants
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

// ProfileItem component that handles line breaks
const ProfileItem = ({ title, description }) => {
  // Split description by double newlines to create separate paragraphs
  const paragraphs = description.split('\n\n').filter(p => p.trim());
  
  // Check if content contains bullet points (starts with •)
  const hasBullets = description.includes('•');
  
  if (hasBullets) {
    // Split by double newline for bullet lists to preserve spacing
    const items = description.split('\n\n').filter(l => l.trim());
    
    return (
      <motion.div 
        className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"
        variants={itemFadeIn}
      >
        {title && (
          <h3 className="!text-[#7F7F7F] text-lg md:text-xl lg:text-2xl font-medium mb-4 md:mb-6">
            {title}
          </h3>
        )}

        <div className="space-y-4 md:space-y-6">
          {items.map((item, index) => (
            <p key={index} className="text-[#7F7F7F] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div 
      className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"
      variants={itemFadeIn}
    >
      {title && (
        <h3 className="!text-[#7F7F7F] text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-3">
          {title}
        </h3>
      )}

      <div className="space-y-4 md:space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-[#7F7F7F] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

// ProfileLayoutItem for single-column profile layout
const ProfileLayoutItem = ({ title, items }) => {
  return (
    <motion.div 
      className="mb-8 md:mb-10"
      variants={itemFadeIn}
    >
      <h3 className="text-[#7F7F7F] text-sm md:text-base font-medium mb-3">
        {title}
      </h3>
      <div className="space-y-2">
        {items && items.map((item, index) => (
          <p key={index} className="text-[#BFBFBF] text-xs md:text-sm leading-relaxed">
            {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const ProfilesSection = ({ 
  sectionTitle = "",
  leftProfiles = [],
  rightProfiles = [],
  paragraph = "",
  buttonText = "Download Profile",
  showButton = true,
  layoutType,
  items = []
}) => {
  const { toggleContactForm } = useContactForm()

  if (layoutType === 'profile' && items && items.length > 0) {
    return (
      <motion.section 
        className="flex flex-col items-center w-full py-12 md:py-16 lg:py-20 lg:mt-[80px] lg:mb-[80px] xl:mt-[100px] xl:mb-[100px] px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
        variants={fadeIn}
      >
        <div className="max-w-4xl w-full mx-auto flex flex-col">
          <motion.h2 
            className="text-[#7F7F7F] text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-10 font-semibold leading-tight"
            variants={fadeIn}
          >
            {sectionTitle}
          </motion.h2>
          
          <motion.div 
            className="mt-6 md:mt-8 space-y-8 md:space-y-10"
            variants={sectionFadeIn}
            viewport={{ amount: 0.1, once: true }}
          >
            {items.map((section, index) => (
              <ProfileLayoutItem 
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </motion.div>

          {showButton && (
            <motion.div 
              className="flex items-center justify-center w-full mt-12 md:mt-16"
              variants={buttonAnimation}
            >
              <button 
                onClick={() => toggleContactForm()}
                className="text-base md:text-lg font-normal text-[#7F7F7F] text-center leading-none px-8 md:px-10 py-3.5 md:py-4 rounded-full border-[#BFBFBF] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.3)]"
                aria-label={buttonText}
              >
                {buttonText}
              </button>
            </motion.div>
          )}
        </div>
      </motion.section>
    );
  }

  const useParagraphLayout = paragraph && (!leftProfiles.length && !rightProfiles.length);

  return (
    <motion.section 
      className="flex flex-col items-center w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      variants={fadeIn}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col">
        <motion.h2 
          className="text-[#7F7F7F] text-xl sm:text-2xl md:text-3xl mb-8 md:mb-12 font-normal leading-tight px-0"
          variants={fadeIn}
        >
          {sectionTitle}
        </motion.h2>
        <div className="mt-0">
          {useParagraphLayout ? (
            <motion.div 
              className="px-0"
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
                  <button                     onClick={() => toggleContactForm()}                    className="text-sm sm:text-base md:text-lg font-normal text-center leading-none px-6 md:px-8 lg:px-9 py-3 md:py-[16px] rounded-[31px] border-[#7F7F7F] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.3)]"
                    aria-label={buttonText}
                  >
                    {buttonText}
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <div className="gap-8 md:gap-12 lg:gap-16 justify-between flex flex-col md:flex-row px-0">
              <motion.div 
                className="w-full md:w-[45%]"
                variants={sectionFadeIn}
                viewport={{ amount: 0.1, once: true }}
              >
                <div className="text-[#7F7F7F] text-base md:text-lg font-light leading-relaxed">
                  {leftProfiles.map((profile, index) => (
                    <ProfileItem 
                      key={index}
                      title={profile.title} 
                      description={profile.description}
                    />
                  ))}
                </div>
                {showButton && (
                  <motion.div 
                    className="flex items-center justify-start w-full mt-8 md:mt-12"
                    variants={buttonAnimation}
                  >
                    <button 
                      onClick={() => toggleContactForm()}
                      className="text-sm sm:text-base font-normal text-[#7F7F7F] text-center leading-none px-8 md:px-10 py-3 md:py-3.5 rounded-full border-[#BFBFBF] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.3)]"
                      aria-label={buttonText}
                    >
                      {buttonText}
                    </button>
                  </motion.div>
                )}
              </motion.div>
              <motion.div 
                className="w-full md:w-[45%]"
                variants={sectionFadeIn}
                viewport={{ amount: 0.1, once: true }}
              >
                <div className="flex flex-col items-start text-[#7F7F7F]">
                  <div className="text-base md:text-lg font-light leading-relaxed">
                    {rightProfiles.map((profile, index) => (
                      <ProfileItem 
                        key={index}
                        title={profile.title} 
                        description={profile.description}
                      />
                    ))}
                  </div>
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