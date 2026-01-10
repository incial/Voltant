import React from 'react'
import { ChatButton } from '../../components/features'
import {
  HeroSection,
  SeamlessChargingSection,
  MidSection
} from '../../components/sections/shared'
import { smartWasteData } from '../../data/waste-to-energy/smart-waste'
import { isIOS } from '../../utils/device'

const SmartWaste = () => {
  const iosDevice = isIOS;

  return (
    <>
      <ChatButton phoneNumber='+971506419857' />

      <div className='flex flex-col min-h-screen bg-white px-0 overflow-hidden'>
        {/* Hero */}
        <HeroSection
          title={smartWasteData.hero.title}
          showSubtitle={smartWasteData.hero.showSubtitle}
          subtitle={smartWasteData.hero.subtitle}
          breadcrumbs={smartWasteData.hero.breadcrumbs}
          heroImage={smartWasteData.hero.heroImage}
        />

        {/* Intro */}
        <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
          <SeamlessChargingSection
            title={smartWasteData.seamlessCharging.title}
            paragraphs={smartWasteData.seamlessCharging.paragraphs}
          />
        </div>

        {/* Features */}
        <section className='w-full py-16'>
          <MidSection
            backgroundImage={smartWasteData.midSection.backgroundImage}
            sectionTitle={smartWasteData.midSection.sectionTitle}
            features={smartWasteData.midSection.features}
          />
        </section>

        {/* Image + Description + Download */}
        {smartWasteData.imageSection && smartWasteData.downloads?.profile?.enabled && (
          <section className='w-full py-12 md:py-20'>
            <div className='max-w-6xl mx-auto px-4'>
              {/* Image */}
              <div className='text-center'>
                <img
                  src={smartWasteData.imageSection.image}
                  alt={smartWasteData.imageSection.alt}
                  className='mx-auto w-full max-w-4xl object-contain mb-10'
                />
              </div>

              {/* Description */}
              <div className='max-w-3xl mx-auto'>
                {smartWasteData.imageSection.description.map((p, i) => (
                  <p
                    key={i}
                    className='text-[#9F9F9F] text-sm sm:text-base md:text-lg font-light
                               leading-[28px] sm:leading-[32px] md:leading-[38px]
                               mb-10 text-justify'
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Download Button - Native anchor for iOS Safari compatibility */}
              <div className='flex items-center justify-start max-w-3xl mx-auto mt-4'>
                <a
                  href={smartWasteData.downloads.profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-sm sm:text-base md:text-lg font-normal text-center leading-none
                             px-6 py-3 rounded-full border-[#7F7F7F] border-solid border-2
                             hover:bg-[rgba(127,127,127,0.05)]
                             transition-colors duration-300
                             focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.12)]'
                  aria-label={smartWasteData.downloads.profile.label}
                >
                  {smartWasteData.downloads.profile.label}
                </a>
                {iosDevice && (
                  <p className='ml-4 text-xs text-gray-500 max-w-[240px]'>
                    Tip: Tap Share → Save to Files to store this brochure on iPhone.
                  </p>
                )}
              </div>
            </div>
          </section>
        )}
      </div>

      <footer />
    </>
  )
}

export default SmartWaste
