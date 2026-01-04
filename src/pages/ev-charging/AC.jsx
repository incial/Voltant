import React from 'react'
import { ChatButton } from '../../components/features'
import { HeroSection, SeamlessChargingSection, MidSection, Charger } from '../../components/sections/shared'
import { acChargersData } from '../../data/ev-charging/ac-chargers'

const AC = () => (
  <>
    <ChatButton phoneNumber='+971506419857' />
    <div className='flex flex-col min-h-screen bg-white px-0 overflow-hidden'>
      <HeroSection
        title={acChargersData.hero.title}
        showSubtitle={acChargersData.hero.showSubtitle}
        subtitle={acChargersData.hero.subtitle}
        breadcrumbs={acChargersData.hero.breadcrumbs}
        heroImage={acChargersData.hero.heroImage}
      />
      <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
        <SeamlessChargingSection
          title={acChargersData.seamlessCharging.title}
          paragraphs={acChargersData.seamlessCharging.paragraphs}
        />
      </div>
      <section className='w-full py-16'>
        <MidSection
          backgroundImage={acChargersData.midSection.backgroundImage}
          sectionTitle={acChargersData.midSection.sectionTitle}
          features={acChargersData.midSection.features}
        />
      </section>
    </div>
    <footer className='border-t-0'>
      <Charger 
        title={acChargersData.chargerData.title}
        subtitle={acChargersData.chargerData.subtitle}
        chargerModels={acChargersData.chargerData.chargerModels}
        specifications={acChargersData.chargerData.specifications}
        buttonText={acChargersData.chargerData.buttonText}
        buttonText2={acChargersData.chargerData.buttonText2}
        showButton={acChargersData.chargerData.showButton}
        showButton2={acChargersData.chargerData.showButton2}
      />
    </footer>
  </>
)

export default AC
