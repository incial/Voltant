/**
 * Product Page Template
 * Reusable template for product/service pages
 * Reduces code duplication across similar pages
 * @module components/templates/ProductPageTemplate
 */

import React from "react";
import { motion } from "framer-motion";
import { ChatButton } from "@/components/features";
import {
  HeroSection,
  SeamlessChargingSection,
  MidSection,
  ProfilesSection,
  HowItWorksSection,
  Charger,
} from "@/components/sections/shared";
import { fadeIn } from "@/lib/motion";
import { OptimizedImage } from "@/components/ui";
import { isIOS } from "@/utils/device";

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
  variant = "charger",
  phoneNumber = "+971506419857",
  children,
}) => {
  if (!data) {
    console.error("ProductPageTemplate: data prop is required");
    return null;
  }

  const {
    hero,
    seamlessCharging,
    midSection,
    profiles,
    howItWorks,
    chargerData,
  } = data;

  // Determine which sections to show based on variant
  const showCharger = variant === "charger" && chargerData;
  const showHowItWorks =
    (variant === "cpo" || variant === "service") && howItWorks;
  const showProfiles =
    profiles && (variant !== "charger" || profiles.showButton);

  return (
    <>
      {/* WhatsApp Chat Button */}
      <ChatButton phoneNumber={phoneNumber} />

      <div className="flex flex-col min-h-screen bg-white px-0 overflow-hidden">
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
          <div className="w-full flex flex-col items-center justify-center px-0 md:px-20">
            <SeamlessChargingSection
              title={seamlessCharging.title}
              paragraphs={seamlessCharging.paragraphs}
            />
          </div>
        )}

        {/* Mid Section with Features */}
        {midSection && (
          <motion.section
            className="w-full py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            variants={fadeIn}
          >
            <MidSection
              backgroundImage={midSection.backgroundImage}
              sectionTitle={midSection.sectionTitle}
              features={midSection.features}
              variant={variant === "cpo" ? "cpo" : undefined}
            />
          </motion.section>
        )}

        {/* Image + Description + Download Section (Smart Waste) */}
        {data.imageSection && data.downloads?.profile?.enabled && (
          <section className="w-full py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4">
              {/* Image */}
              <div className="text-center">
                <OptimizedImage
                  src={data.imageSection.image}
                  alt={data.imageSection.alt}
                  className="mx-auto w-full max-w-4xl object-contain mb-10"
                  width={1024}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Description */}
              <div className="max-w-3xl mx-auto">
                {data.imageSection.description.map((p, i) => (
                  <p
                    key={i}
                    className="text-[#9F9F9F] font-light leading-[28px] sm:leading-[32px] md:leading-[38px] mb-10 text-justify text-body"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Download Button - Native anchor for iOS Safari compatibility */}
              <div className="flex flex-col md:flex-row items-center justify-start max-w-3xl mx-auto mt-4 gap-4">
                <a
                  href={data.downloads.profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-normal text-center leading-none px-6 py-4 rounded-full border-[#7F7F7F] border-solid border-2 hover:bg-[rgba(127,127,127,0.05)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.12)] text-body"
                  aria-label={data.downloads.profile.label}
                >
                  {data.downloads.profile.label}
                </a>
                {isIOS && (
                  <p className="text-xs text-gray-500 max-w-[240px]">
                    Tip: Tap Share → Save to Files to store this brochure on
                    iPhone.
                  </p>
                )}
              </div>
            </div>
          </section>
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
        <footer className="border-t-0" style={{ borderTop: "0" }}>
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
