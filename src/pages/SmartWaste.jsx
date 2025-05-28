import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ChatButton from '../components/common/ChatButton'

// Import common section components
import HeroSection from '../components/common/SectionComponents/HeroSection'
import SeamlessChargingSection from '../components/common/SectionComponents/SeamlessChargingSection'
import MidSection from '../components/common/SectionComponents/MidSection'
import ProfilesSection from '../components/common/SectionComponents/ProfilesSection'

// Import data
import { smartWasteData } from '../utils/sectionData'

const SmartWaste = () => {
  return (
    <>
      {/* Use the ChatButton component */}
      <ChatButton phoneNumber='+971506419857' />

      <div className='flex flex-col min-h-screen bg-white px-0 overflow-hidden'>        <HeroSection
          title={smartWasteData.hero.title}
          showSubtitle={smartWasteData.hero.showSubtitle}
          subtitle={smartWasteData.hero.subtitle}
          breadcrumbs={smartWasteData.hero.breadcrumbs}
          heroImage={smartWasteData.hero.heroImage}
        />

        <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>          <SeamlessChargingSection
            title={smartWasteData.seamlessCharging.title}
            paragraphs={smartWasteData.seamlessCharging.paragraphs}
          />
        </div>

        <motion.section
          className='w-full py-16'
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
        >          <MidSection
            backgroundImage={smartWasteData.midSection.backgroundImage}
            sectionTitle={smartWasteData.midSection.sectionTitle}
            features={smartWasteData.midSection.features}
          />
        </motion.section>        <ProfilesSection
          sectionTitle={smartWasteData.profiles.sectionTitle}
          leftProfiles={smartWasteData.profiles.leftProfiles}
          rightProfiles={smartWasteData.profiles.rightProfiles}
          buttonText={smartWasteData.profiles.buttonText}
          showButton={smartWasteData.profiles.showButton}
        />
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >

      </motion.footer>
    </>
  )
}

export default SmartWaste
