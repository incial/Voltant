import React from "react";
 
import { motion } from 'framer-motion';
import { ChatButton } from "../../components/features";

// Import common section components
import { HeroSection, SeamlessChargingSection, MidSection, ProfilesSection } from '../../components/sections/shared';

// Import engineering works data
import { largeScaleData } from "../../data/waste-to-energy/large-scale";

function LargeScale() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center relative">
      {/* Navbar */}
      
      <ChatButton phoneNumber="+971506419857" />
      
      <main className="w-full">
        <HeroSection 
          title={largeScaleData.hero.title}
          showSubtitle={largeScaleData.hero.showSubtitle}
          subtitle={largeScaleData.hero.subtitle}
          breadcrumbs={largeScaleData.hero.breadcrumbs}
          heroImage={largeScaleData.hero.heroImage}
        />
        
        <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
          <SeamlessChargingSection 
            title={largeScaleData.seamlessCharging.title}
            paragraphs={largeScaleData.seamlessCharging.paragraphs}
          />
        </div>
        
        <motion.section 
          className='w-full py-16'
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={{ 
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
        >
          <MidSection 
            backgroundImage={largeScaleData.midSection.backgroundImage}
            sectionTitle={largeScaleData.midSection.sectionTitle}
            features={largeScaleData.midSection.features}
          />
        </motion.section>
        
        <ProfilesSection 
          sectionTitle={largeScaleData.profiles.sectionTitle}
          leftProfiles={largeScaleData.profiles.leftProfiles}
          rightProfiles={largeScaleData.profiles.rightProfiles}
          buttonText={largeScaleData.profiles.buttonText}
          showButton={largeScaleData.profiles.showButton}
          downloads={largeScaleData.profiles.downloads}
        />
      </main>
      
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
      </motion.footer>
    </div>
  );
}

export default LargeScale;