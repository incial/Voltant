import React from 'react'
import ChatButton from '../components/common/ChatButton'
import HeroSection from '../components/common/SectionComponents/HeroSection'
import SeamlessChargingSection from '../components/common/SectionComponents/SeamlessChargingSection'
import MidSection from '../components/common/SectionComponents/MidSection'
import Charger from '../components/common/SectionComponents/charger'
import { ACData } from '../utils/sectionData'

const AC = () => (
  <>
    <ChatButton phoneNumber='+971506419857' />
    <div className='flex flex-col min-h-screen bg-white px-0 overflow-hidden'>
      <HeroSection
        title={ACData.hero.title}
        showSubtitle={ACData.hero.showSubtitle}
        subtitle={ACData.hero.subtitle}
        breadcrumbs={ACData.hero.breadcrumbs}
        heroImage={ACData.hero.heroImage}
      />
      <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
        <SeamlessChargingSection
          title={ACData.seamlessCharging.title}
          paragraphs={ACData.seamlessCharging.paragraphs}
        />
      </div>
      <section className='w-full py-16'>
        <MidSection
          backgroundImage={ACData.midSection.backgroundImage}
          sectionTitle={ACData.midSection.sectionTitle}
          features={ACData.midSection.features}
        />
      </section>
    </div>
    <footer>
      <Charger 
        title={ACData.chargerData.title}
        subtitle={ACData.chargerData.subtitle}
        chargerModels={ACData.chargerData.chargerModels}
        specifications={ACData.chargerData.specifications}
        buttonText={ACData.chargerData.buttonText}
        buttonText2={ACData.chargerData.buttonText2}
        showButton={ACData.chargerData.showButton}
        showButton2={ACData.chargerData.showButton2}
      />
    </footer>
  </>
)

export default AC
