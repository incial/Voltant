import React from 'react'
import { Navbar, Footer } from '../../components/layout'
import { ChatButton } from '../../components/features'
import { HeroSection, SeamlessChargingSection, MidSection, ProfilesSection } from '../../components/sections/shared'
import { engineeringWorksData } from '../../data/ev-charging/engineering-works'

const EngineeringWorks = () => (
  <div className='bg-white w-full min-h-screen flex flex-col items-center relative'>
    <ChatButton phoneNumber='+971506419857' />
    <main className='w-full'>
      <HeroSection
        title={engineeringWorksData.hero.title}
        showSubtitle={engineeringWorksData.hero.showSubtitle}
        subtitle={engineeringWorksData.hero.subtitle}
        breadcrumbs={engineeringWorksData.hero.breadcrumbs}
        heroImage={engineeringWorksData.hero.heroImage}
      />
      <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
        <SeamlessChargingSection
          title={engineeringWorksData.seamlessCharging.title}
          paragraphs={engineeringWorksData.seamlessCharging.paragraphs}
        />
      </div>
      <section className='w-full py-16'>
        <MidSection
          backgroundImage={engineeringWorksData.midSection.backgroundImage}
          sectionTitle={engineeringWorksData.midSection.sectionTitle}
          features={engineeringWorksData.midSection.features}
        />
      </section>
      <ProfilesSection
        sectionTitle={engineeringWorksData.profiles.sectionTitle}
        leftProfiles={engineeringWorksData.profiles.leftProfiles}
        rightProfiles={engineeringWorksData.profiles.rightProfiles}
        buttonText={engineeringWorksData.profiles.buttonText}
        showButton={engineeringWorksData.profiles.showButton}
        downloads={engineeringWorksData.profiles.downloads}
      />
    </main>
    <footer className='w-full' />
  </div>
)

export default EngineeringWorks