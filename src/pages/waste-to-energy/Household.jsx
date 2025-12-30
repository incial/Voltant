import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ChatButton } from '../../components/features'

// Import common section components
import { HeroSection, SeamlessChargingSection, MidSection, ProfilesSection } from '../../components/sections/shared'

// Import data
import { householdData } from '../../data/waste-to-energy/household'

const Household = () => {
  return (
    <>
      {/* Use the ChatButton component */}
      <ChatButton phoneNumber='+971506419857' />
      <div className='flex flex-col min-h-screen bg-white px-0 overflow-hidden'>
        <HeroSection 
          title={householdData.hero.title}
          showSubtitle={householdData.hero.showSubtitle}
          subtitle={householdData.hero.subtitle}
          breadcrumbs={householdData.hero.breadcrumbs}
          heroImage={householdData.hero.heroImage}
        />
        
        <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
          <SeamlessChargingSection 
            title={householdData.seamlessCharging.title}
            paragraphs={householdData.seamlessCharging.paragraphs}
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
            backgroundImage={householdData.midSection.backgroundImage}
            sectionTitle={householdData.midSection.sectionTitle}
            features={householdData.midSection.features}
          />
        </motion.section>

        {/* Image Section */}
        {householdData.imageSection && (
          <motion.section
            className='w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className='max-w-7xl mx-auto'>
              <img 
                src={householdData.imageSection.image}
                alt={householdData.imageSection.alt}
                className='w-full h-auto object-contain rounded-lg'
              />
            </div>
          </motion.section>
        )}

        <ProfilesSection 
          sectionTitle={householdData.profiles.sectionTitle}
          leftProfiles={householdData.profiles.leftProfiles}
          rightProfiles={householdData.profiles.rightProfiles}
          paragraph={householdData.profiles.paragraph}
          buttonText={householdData.profiles.buttonText}
          showButton={householdData.profiles.showButton}
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

export default Household