import React from 'react';

import { ChatButton } from '../../components/features';
import { HeroSection, SeamlessChargingSection, MidSection, HowItWorksSection, ProfilesSection } from '../../components/sections/shared';

import { cpoData } from '../../data/ev-charging/cpo';

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
      <HowItWorksSection 
        sectionTitle={cpoData.howItWorks.sectionTitle}
        steps={cpoData.howItWorks.steps}
      />
      <ProfilesSection 
        sectionTitle={cpoData.profiles.sectionTitle}
        paragraph={cpoData.profiles.paragraph}
        buttonText={cpoData.profiles.buttonText}
        showButton={cpoData.profiles.showButton}
      />
    </div>
    <footer />
  </>
);

export default Cpo;
