import React from 'react'
import ChatButton from '../components/common/ChatButton'
import HeroSection from '../components/common/SectionComponents/HeroSection'
import SeamlessChargingSection from '../components/common/SectionComponents/SeamlessChargingSection'
import MidSection from '../components/common/SectionComponents/MidSection'
import Charger from '../components/common/SectionComponents/charger'
import { DCData } from '../utils/sectionData'

const DC = () => (
  <>
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
      <section className='w-full py-16'>
        <MidSection
          backgroundImage={DCData.midSection.backgroundImage}
          sectionTitle={DCData.midSection.sectionTitle}
          features={DCData.midSection.features}
        />
      </section>
    </div>
    <footer>
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
    </footer>
  </>
)

export default DC
