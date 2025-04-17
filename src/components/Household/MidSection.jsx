import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import MidImage from '../../assets/images/Household_mid.png'

// Import icons with names matching the actual filenames
import Group from '../../assets/icons/household/Group.svg'
import ThumbUp from '../../assets/icons/household/mdi-light_thumb-up.svg'
import LeafCircle from '../../assets/icons/household/pepicons-pencil_leaf-circle.svg'
import Crop from '../../assets/icons/household/icon-park-outline_tailoring.svg'
import StarLight from '../../assets/icons/household/stash_star-light.svg'

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const blurSectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const features = [
  {
    icon: Crop,
    title: 'Compact & Space-Saving',
    description:
      'Perfect for home and small-scale setups.'
  },
  {
    icon: StarLight,
    title: 'Waste-to-Energy Convenience',
    description:
      'Converts kitchen and organic waste into usable biogas.'
  },
  {
    icon: Group,
    title: 'Eco-Friendly & Cost-Effective',
    description:
      'Reduces reliance on fossil fuels and lowers waste management costs.'
  },
  {
    icon: ThumbUp,
    title: 'Low Maintenance',
    description: 'Simple operation with minimal upkeep.'
  },
  {
    icon: LeafCircle,
    title: 'Sustainable Living',
    description:
      'upports a circular economy and reduces carbon footprint.'
  }
]

function Feature ({ icon, title, description }) {
  return (
    <motion.div 
      className='flex items-center gap-[38px] md:gap-[38px] mt-10 first:mt-20 first:max-md:mt-6'
      variants={itemVariants}
    >
      {/* Desktop and Mobile: Icon */}
      {icon && (
        <div className="flex-shrink-0">
          <img
            src={icon}
            className='aspect-[1] object-contain w-8 md:w-12 shrink-0 my-auto'
            alt={`${title} icon`}
          />
        </div>
      )}

      {/* Desktop: Title and Description */}
      <div className='grow shrink w-[415px] basis-auto max-md:hidden'>
        <div className="text-white font-['Cairo'] text-[24px] font-[400] leading-[100%]">
          {title}
        </div>
        <span className="text-white font-['Cairo'] text-[18px] font-[200] block mt-1">
          {description}
        </span>
      </div>

      {/* Mobile: Title and Description */}
      <div className='hidden max-md:block max-md:w-full'>
        <div className="text-white font-['Cairo'] text-[18px] font-[500] leading-[100%]">
          {title}
        </div>
        <span className="text-white font-['Cairo'] text-[14px] font-[200] block mt-2">
          {description}
        </span>
      </div>
    </motion.div>
  )
}

const MidSection = () => {
  return (
    <>
      <section className='relative h-auto md:h-[120vh] w-full overflow-hidden'>
        <img
          src={MidImage}
          alt='EV Charging Stations'
          className='w-full h-full object-cover absolute inset-0'
        />
        <div className='absolute inset-0 bg-black/50 md:bg-black/30 z-10'></div>
        <motion.div 
          className='relative md:absolute top-0 left-0 backdrop-blur-sm w-full md:w-1/2 h-full flex justify-center items-center z-20 px-4 py-16 md:py-0 md:px-24 bg-transparent'
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={blurSectionVariants}
        >
          <motion.div 
            className='flex flex-col items-stretch w-full'
            variants={containerVariants}
          >
            <motion.h2 
              className='text-[28px] md:text-[40px] text-white font-bold text-center md:text-left mb-10 md:mb-0'
              variants={itemVariants}
            >
              Why Choose Us?
            </motion.h2>

            <div className="space-y-6 md:space-y-0">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default MidSection
