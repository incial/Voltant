import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import ChatButton from '../components/common/ChatButton'

// Import common section components
import HeroSection from '../components/common/SectionComponents/HeroSection'
import SeamlessChargingSection from '../components/common/SectionComponents/SeamlessChargingSection'
import MidSection from '../components/common/SectionComponents/MidSection'
import Charger from '../components/common/SectionComponents/charger'
// Import data
import { DCData } from '../utils/sectionData'


const DC = () => {
  return (
    <>

      {/* Use the ChatButton component */}
      <ChatButton phoneNumber='+971506419857' />

      <div className='flex flex-col min-h-screen bg-white px-0 overflow-hidden'>
        <HeroSection
          title={DCData.hero.title}
          showSubtitle={DCData.hero.showSubtitle}
          subtitle={DCData.hero.subtitle}
          breadcrumbs={DCData.hero.breadcrumbs}
          heroImage={DCData.hero.heroImage}
        />

        <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
          <SeamlessChargingSection
            title={DCData.seamlessCharging.title}
            paragraphs={DCData.seamlessCharging.paragraphs}
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
            backgroundImage={DCData.midSection.backgroundImage}
            sectionTitle={DCData.midSection.sectionTitle}
            features={DCData.midSection.features}
          />
        </motion.section>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <Charger
          title={DCData.chargerData.title}
          subtitle={DCData.chargerData.subtitle}
          chargerModels={DCData.chargerData.chargerModels}
          specifications={DCData.chargerData.specifications}
          buttonText={DCData.chargerData.buttonText}
          buttonText2={DCData.chargerData.buttonText2}
          showButton={DCData.chargerData.showButton}
          showButton2={DCData.chargerData.showButton2}
        />

      </motion.footer>
    </>
  )
}

export default DC
