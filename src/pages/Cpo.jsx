import React from 'react';

import ChatButton from '../components/common/ChatButton';
import HeroSection from '../components/common/SectionComponents/HeroSection';
import SeamlessChargingSection from '../components/common/SectionComponents/SeamlessChargingSection';
import MidSection from '../components/common/SectionComponents/MidSection';
import ProfilesSection from '../components/common/SectionComponents/ProfilesSection';

import { cpoData } from '../utils/sectionData';

const Cpo = () => (
  <>
    <ChatButton phoneNumber='+971506419857' />
    <div className='flex flex-col min-h-screen bg-white px-0 overflow-hidden'>
      <HeroSection 
        title={cpoData.hero.title}
        showSubtitle={cpoData.hero.showSubtitle}
        subtitle={cpoData.hero.subtitle}
        breadcrumbs={cpoData.hero.breadcrumbs}
        heroImage={cpoData.hero.heroImage}
      />
      <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
        <SeamlessChargingSection 
          title={cpoData.seamlessCharging.title}
          paragraphs={cpoData.seamlessCharging.paragraphs}
        />
      </div>
      <section className='w-full py-16'>
        <MidSection 
          backgroundImage={cpoData.midSection.backgroundImage}
          sectionTitle={cpoData.midSection.sectionTitle}
          features={cpoData.midSection.features}
        />
      </section>
      <ProfilesSection 
        sectionTitle={cpoData.profiles.sectionTitle}
        leftProfiles={cpoData.profiles.leftProfiles}
        rightProfiles={cpoData.profiles.rightProfiles}
        buttonText={cpoData.profiles.buttonText}
        showButton={cpoData.profiles.showButton}
      />
    </div>
    <footer />
  </>
);

export default Cpo;
