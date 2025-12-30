import React from 'react'
import { ChatButton } from '../../components/features'
import { HeroSection, SeamlessChargingSection, MidSection, ProfilesSection } from '../../components/sections/shared'
import { smartWasteData } from '../../data/waste-to-energy/smart-waste'

const SmartWaste = () => (
  <>
    <ChatButton phoneNumber='+971506419857' />
    <div className='flex flex-col min-h-screen bg-white px-0 overflow-hidden'>
      <HeroSection
        title={smartWasteData.hero.title}
        showSubtitle={smartWasteData.hero.showSubtitle}
        subtitle={smartWasteData.hero.subtitle}
        breadcrumbs={smartWasteData.hero.breadcrumbs}
        heroImage={smartWasteData.hero.heroImage}
      />
      <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
        <SeamlessChargingSection
          title={smartWasteData.seamlessCharging.title}
          paragraphs={smartWasteData.seamlessCharging.paragraphs}
        />
      </div>
      <section className='w-full py-16'>
        <MidSection
          backgroundImage={smartWasteData.midSection.backgroundImage}
          sectionTitle={smartWasteData.midSection.sectionTitle}
          features={smartWasteData.midSection.features}
        />
      </section>
      <ProfilesSection
        sectionTitle={smartWasteData.profiles.sectionTitle}
        leftProfiles={smartWasteData.profiles.leftProfiles}
        rightProfiles={smartWasteData.profiles.rightProfiles}
        buttonText={smartWasteData.profiles.buttonText}
        showButton={smartWasteData.profiles.showButton}
        downloads={smartWasteData.downloads}
      />
    </div>
    <footer />
  </>
)

export default SmartWaste
