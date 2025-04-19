import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ChatButton from "../components/common/ChatButton";

// Import common section components
import HeroSection from '../components/common/SectionComponents/HeroSection';
import SeamlessChargingSection from '../components/common/SectionComponents/SeamlessChargingSection';
import MidSection from '../components/common/SectionComponents/MidSection';
import ProfilesSection from '../components/common/SectionComponents/ProfilesSection';

// Import engineering works data
import { containerizedData } from "../utils/sectionData";

function Containerized() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center relative">
      {/* Navbar */}
      <div className="w-full z-50">
        <Navbar />
      </div>
      
      <ChatButton phoneNumber="971555555555" />
      
      <main className="w-full">
        <HeroSection 
          title={containerizedData.hero.title}
          breadcrumbs={containerizedData.hero.breadcrumbs}
          heroImage={containerizedData.hero.heroImage}
          showSubtitle={containerizedData.hero.showSubtitle}
        />
        
        <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
          <SeamlessChargingSection 
            title={containerizedData.seamlessCharging.title}
            paragraphs={containerizedData.seamlessCharging.paragraphs}
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
            backgroundImage={containerizedData.midSection.backgroundImage}
            sectionTitle={containerizedData.midSection.sectionTitle}
            features={containerizedData.midSection.features}
          />
        </motion.section>
        
        <ProfilesSection 
          sectionTitle={containerizedData.profiles.sectionTitle}
          leftProfiles={containerizedData.profiles.leftProfiles}
          rightProfiles={containerizedData.profiles.rightProfiles}
          buttonText={containerizedData.profiles.buttonText}
          showButton={containerizedData.profiles.showButton}
        />
      </main>
      
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <Footer />
      </motion.footer>
    </div>
  );
}

export default Containerized;