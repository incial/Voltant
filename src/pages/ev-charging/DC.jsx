import React from 'react'
import { ChatButton } from '../../components/features'
import { HeroSection, SeamlessChargingSection, MidSection, Charger } from '../../components/sections/shared'
import { dcChargersData } from '../../data/ev-charging/dc-chargers'

const DC = () => (
  <>
    <ChatButton phoneNumber='+971506419857' />
    <div className='flex flex-col min-h-screen bg-white px-0 overflow-hidden'>
      <HeroSection
        title={dcChargersData.hero.title}
        showSubtitle={dcChargersData.hero.showSubtitle}
        subtitle={dcChargersData.hero.subtitle}
        breadcrumbs={dcChargersData.hero.breadcrumbs}
        heroImage={dcChargersData.hero.heroImage}
      />
      <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
        <SeamlessChargingSection
          title={dcChargersData.seamlessCharging.title}
          paragraphs={dcChargersData.seamlessCharging.paragraphs}
        />
      </div>
      <section className='w-full py-16'>
        <MidSection
          backgroundImage={dcChargersData.midSection.backgroundImage}
          sectionTitle={dcChargersData.midSection.sectionTitle}
          features={dcChargersData.midSection.features}
        />
      </section>
    </div>
    <footer className='border-t-0' style={{ borderTop: '0' }}>
      <Charger
        title={dcChargersData.chargerData.title}
        subtitle={dcChargersData.chargerData.subtitle}
        chargerModels={dcChargersData.chargerData.chargerModels}
        specifications={dcChargersData.chargerData.specifications}
        buttonText={dcChargersData.chargerData.buttonText}
        buttonText2={dcChargersData.chargerData.buttonText2}
        showButton={dcChargersData.chargerData.showButton}
        showButton2={dcChargersData.chargerData.showButton2}
        pdfUrl={dcChargersData.chargerData.pdfUrl}
  pdfUrl2={dcChargersData.chargerData.pdfUrl2}
      />
    </footer>
  </>
)

export default DC
