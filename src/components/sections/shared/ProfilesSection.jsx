import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

// ---------------- Animations ----------------
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
}

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
}

const sectionFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.25,
      ease: 'easeOut'
    }
  }
}

const buttonAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.4,
      ease: 'easeOut'
    }
  }
}

// ---------------- Profile Item ----------------
const ProfileItem = ({ title, description }) => {
  return (
    <motion.div className="mb-12" variants={itemFadeIn}>
      <h3 className="text-lg md:text-xl font-medium text-[#6F6F6F] mb-3">
        {title}
      </h3>
      <p className="text-base sm:text-lg md:text-[20px] text-[#9A9A9A] leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

// ---------------- Main Section ----------------
const ProfilesSection = ({
  sectionTitle = '',
  leftProfiles = [],
  rightProfiles = [],
  paragraph = '',
  layout = 'columns', // ✅ columns | single
  buttonText = 'Download Profile',
  showButton = true
}) => {
  const useParagraphLayout =
    paragraph && !leftProfiles.length && !rightProfiles.length

  const useSingleColumnLayout = layout === 'single'

  return (
    <motion.section
      className="flex flex-col items-center w-full py-12 md:py-16 lg:mt-[100px] lg:mb-[100px] px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      variants={fadeIn}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col">
        {/* Section Title */}
        <motion.h2
          className="text-[#7F7F7F] text-3xl md:text-4xl mb-8 md:mb-12 font-bold leading-tight"
          variants={fadeIn}
        >
          {sectionTitle}
        </motion.h2>

        {/* ---------------- PARAGRAPH LAYOUT (CPO) ---------------- */}
        {useParagraphLayout && (
          <motion.div
            className="max-w-5xl mx-auto text-center"
            variants={sectionFadeIn}
          >
            <p className="text-[#7F7F7F] text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed lg:leading-[48px] mb-12">
              {paragraph}
            </p>

            {showButton && (
              <motion.div
                className="flex justify-center"
                variants={buttonAnimation}
              >
                <button className="text-base md:text-lg font-normal px-8 md:px-12 py-[16px] rounded-[31px] border-2 border-[#7F7F7F] hover:bg-[rgba(127,127,127,0.1)] transition-colors">
                  {buttonText}
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* ---------------- SINGLE COLUMN (MORE PAGE) ---------------- */}
        {useSingleColumnLayout && !useParagraphLayout && (
          <motion.div
            className="max-w-5xl"
            variants={sectionFadeIn}
          >
            {[...leftProfiles, ...rightProfiles].map((profile, index) => (
              <ProfileItem
                key={index}
                title={profile.title}
                description={profile.description}
              />
            ))}
          </motion.div>
        )}

        {/* ---------------- TWO COLUMN (ENGINEERING) ---------------- */}
        {!useParagraphLayout && !useSingleColumnLayout && (
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <motion.div
              className="w-full md:w-5/12"
              variants={sectionFadeIn}
            >
              {leftProfiles.map((profile, index) => (
                <ProfileItem
                  key={index}
                  title={profile.title}
                  description={profile.description}
                />
              ))}
            </motion.div>

            <motion.div
              className="w-full md:w-5/12"
              variants={sectionFadeIn}
            >
              {rightProfiles.map((profile, index) => (
                <ProfileItem
                  key={index}
                  title={profile.title}
                  description={profile.description}
                />
              ))}
            </motion.div>
          </div>
        )}

        {/* ---------------- BOTTOM BUTTON (COLUMNS ONLY) ---------------- */}
        {!useParagraphLayout && !useSingleColumnLayout && showButton && (
          <motion.div
            className="flex justify-center mt-16"
            variants={buttonAnimation}
          >
            <button className="text-base md:text-lg font-normal px-8 md:px-12 py-[16px] rounded-[31px] border-2 border-[#7F7F7F] hover:bg-[rgba(127,127,127,0.1)] transition-colors">
              {buttonText}
            </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default ProfilesSection
