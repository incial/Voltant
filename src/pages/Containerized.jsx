import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import ChatButton from '../components/common/ChatButton'

// Import common section components
import HeroSection from '../components/common/SectionComponents/HeroSection'
import SeamlessChargingSection from '../components/common/SectionComponents/SeamlessChargingSection'
import MidSection from '../components/common/SectionComponents/MidSection'
import ProfilesSection from '../components/common/SectionComponents/ProfilesSection'

// Import data
import { containerizedData } from '../utils/sectionData'

const Containerized = () => {
  return (
    <>
      {/* Use the ChatButton component */}
      <ChatButton phoneNumber='+971506419857' />

      <div className='flex flex-col min-h-screen bg-white px-0 overflow-hidden'>
        <HeroSection
          title={containerizedData.hero.title}
          showSubtitle={containerizedData.hero.showSubtitle}
          subtitle={containerizedData.hero.subtitle}
          breadcrumbs={containerizedData.hero.breadcrumbs}
          heroImage={containerizedData.hero.heroImage}
        />

        <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
          <SeamlessChargingSection
            title={containerizedData.seamlessCharging.title}
            paragraphs={containerizedData.seamlessCharging.paragraphs}
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
        >
          <MidSection
            backgroundImage={containerizedData.midSection.backgroundImage}
            sectionTitle={containerizedData.midSection.sectionTitle}
            features={containerizedData.midSection.features}
          />
        </motion.section>

        <ProfilesSection
          sectionTitle={containerizedData.profiles.sectionTitle}
          leftProfiles={containerizedData.profiles.leftProfiles}
          rightProfiles={containerizedData.profiles.rightProfiles}
          buttonText={containerizedData.profiles.buttonText}
          showButton={containerizedData.profiles.showButton}
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

export default Containerized
