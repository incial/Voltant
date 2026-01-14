/**
 * Product Page Template
 * Reusable template for product/service pages
 * Reduces code duplication across similar pages
 * @module components/templates/ProductPageTemplate
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ChatButton } from '../features';
import { 
  HeroSection, 
  SeamlessChargingSection, 
  MidSection, 
  ProfilesSection,
  HowItWorksSection,
  Charger 
} from '../sections/shared';
import { fadeIn } from '../../lib/motion';

/**
 * Product Page Template Component
 * 
 * @param {Object} props
 * @param {Object} props.data - Page data object containing all section data
 * @param {string} props.variant - Page variant ('charger' | 'waste' | 'cpo' | 'service')
 * @param {string} [props.phoneNumber] - WhatsApp phone number
 * @param {React.ReactNode} [props.children] - Additional content to render
 */
const ProductPageTemplate = ({ 
  data, 
  variant = 'charger',
  phoneNumber = '+971506419857',
  children 
}) => {
  if (!data) {
    console.error('ProductPageTemplate: data prop is required');
    return null;
  }

  const { hero, seamlessCharging, midSection, profiles, howItWorks, chargerData } = data;

  // Determine which sections to show based on variant
  const showCharger = variant === 'charger' && chargerData;
  const showHowItWorks = (variant === 'cpo' || variant === 'service') && howItWorks;
  const showProfiles = profiles && (variant !== 'charger' || profiles.showButton);

  return (
    <>
      {/* WhatsApp Chat Button */}
      <ChatButton phoneNumber={phoneNumber} />
      
      <div className='flex flex-col min-h-screen bg-white px-0 overflow-hidden'>
        {/* Hero Section */}
        {hero && (
          <HeroSection
            title={hero.title}
            showSubtitle={hero.showSubtitle}
            subtitle={hero.subtitle}
            breadcrumbs={hero.breadcrumbs}
            heroImage={hero.heroImage}
          />
        )}

        {/* Description/Seamless Charging Section */}
        {seamlessCharging && (
          <div className='w-full flex flex-col items-center justify-center px-0 md:px-20'>
            <SeamlessChargingSection
              title={seamlessCharging.title}
              paragraphs={seamlessCharging.paragraphs}
            />
          </div>
        )}

        {/* Mid Section with Features */}
        {midSection && (
          <motion.section
            className='w-full py-16'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1 }}
            variants={fadeIn}
          >
            <MidSection
              backgroundImage={midSection.backgroundImage}
              sectionTitle={midSection.sectionTitle}
              features={midSection.features}
              variant={variant === 'cpo' ? 'cpo' : undefined}
            />
          </motion.section>
        )}

        {/* How It Works Section (for CPO and service pages) */}
        {showHowItWorks && (
          <HowItWorksSection
            sectionTitle={howItWorks.sectionTitle}
            steps={howItWorks.steps}
          />
        )}

        {/* Profiles Section */}
        {showProfiles && (
          <ProfilesSection
  sectionTitle={profiles.sectionTitle}
  layoutType={profiles.layoutType}
  items={profiles.items}
  leftProfiles={profiles.leftProfiles}
  rightProfiles={profiles.rightProfiles}
  paragraph={profiles.paragraph}
  buttonText={profiles.buttonText}
  showButton={profiles.showButton}
  downloads={profiles.downloads}
/>
        )}

        {/* Additional custom content */}
        {children}
      </div>

      {/* Charger Section Footer (for charger pages) */}
      {showCharger && (
        <footer className='border-t-0' style={{ borderTop: '0' }}>
          <Charger
            title={chargerData.title}
            subtitle={chargerData.subtitle}
            chargerModels={chargerData.chargerModels}
            specifications={chargerData.specifications}
            buttonText={chargerData.buttonText}
            buttonText2={chargerData.buttonText2}
            showButton={chargerData.showButton}
            showButton2={chargerData.showButton2}
            pdfUrl={chargerData.pdfUrl}
            pdfUrl2={chargerData.pdfUrl2}
          />
        </footer>
      )}

      {/* Empty footer for non-charger pages */}
      {!showCharger && (
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </>
  );
};

/**
 * Charger Product Page Template
 * Pre-configured for AC/DC charger pages
 */
export const ChargerPageTemplate = ({ data, ...props }) => (
  <ProductPageTemplate data={data} variant="charger" {...props} />
);

/**
 * Waste to Energy Page Template
 * Pre-configured for waste-to-energy product pages
 */
export const WastePageTemplate = ({ data, ...props }) => (
  <ProductPageTemplate data={data} variant="waste" {...props} />
);

/**
 * CPO Page Template
 * Pre-configured for CPO service pages
 */
export const CPOPageTemplate = ({ data, ...props }) => (
  <ProductPageTemplate data={data} variant="cpo" {...props} />
);

/**
 * Service Page Template
 * Pre-configured for general service pages
 */
export const ServicePageTemplate = ({ data, ...props }) => (
  <ProductPageTemplate data={data} variant="service" {...props} />
);

export default ProductPageTemplate;
