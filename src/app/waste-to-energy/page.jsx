"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import { WASTE_TO_ENERGY_PROFILE_PDF } from "@/constants/pdfs";
import { isIOS } from "@/utils/device";

const services = [
  {
    title: (
      <>
        Containerized
        <br />
        Plant
      </>
    ),
    image: "/assets/images/WateTOEnergy/Containerized_Plant.png",
    path: "/waste-to-energy/containerized-plant",
  },
  {
    title: (
      <>
        Large Scale
        <br />
        Plant
      </>
    ),
    image: "/assets/images/WateTOEnergy/Large_Scale_plant.png",
    path: "/waste-to-energy/large-scale",
  },
  {
    title: "Household",
    image: "/assets/images/WateTOEnergy/biogas.png",
    path: "/waste-to-energy/household",
  },
  {
    title: (
      <>
        Smart Waste
        <br />
        Segregation
        <br />
        Bins
      </>
    ),
    image: "/assets/images/WateTOEnergy/bins.png",
    path: "/waste-to-energy/smart-waste",
  },
];

const WasteToEnergyPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isIosDevice, setIsIosDevice] = useState(false);

  useEffect(() => {
    setIsIosDevice(isIOS);
  }, []);

  const brochureUrl = WASTE_TO_ENERGY_PROFILE_PDF.url;

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden min-h-screen flex flex-col font-cairo bg-white">
        {/* Hero Section */}
        <div className="relative h-[550px]">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/assets/images/WateTOEnergy/main.png"
              alt="Waste to Energy"
              fill
              className={`object-cover object-[70%_80%] transition-opacity duration-700 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              priority
              onLoad={() => setImageLoaded(true)}
              sizes="100vw"
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-800 z-10 flex items-center justify-center">
                <div className="w-6 h-6 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <div className="absolute inset-0 bg-black opacity-40" />
          </div>

          {/* Hero Content */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 z-10 max-w-[85%] px-2">
            <h1 className="text-2xl font-semibold text-white mb-4 leading-snug">
              Waste to Energy <br /> Solutions
            </h1>

            <p className="text-sm text-white font-light w-full max-w-[280px] mb-6 leading-relaxed">
              From smart, modular containerized plants to large-scale anaerobic
              digestion solutions, we transform organic waste into sustainable
              energy
            </p>

            <a
              href={brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs sm:text-sm font-normal text-center leading-none px-4 py-2 sm:px-5 sm:py-3 rounded-full border-white border-solid border-2 text-white hover:bg-white hover:text-gray-800 transition-colors duration-300"
            >
              Download Brochure
            </a>
            {isIosDevice && (
              <p className="mt-2 text-xs text-white/80">
                Tip: Tap Share → Save to Files to keep this brochure on iPhone.
              </p>
            )}
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="p-4 sm:p-8 py-12 sm:py-16 bg-white">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                path={service.path}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src="/assets/images/WateTOEnergy/main.png"
              alt="Waste to Energy"
              fill
              className={`object-cover object-[50%_45%] transition-opacity duration-700 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              priority
              onLoad={() => setImageLoaded(true)}
              sizes="100vw"
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-800 z-10 flex items-center justify-center">
                <div className="w-6 h-6 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <div className="absolute inset-0 bg-black opacity-40" />
          </div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-white text-left w-full max-w-[450px] ml-[100px] mb-1"
          >
            <h1 className="text-[2.75rem] leading-tight font-semibold m-0 mb-6">
              Waste to Energy <br /> Solutions
            </h1>
            <p className="text-lg text-white font-light w-full max-w-[400px] leading-relaxed">
              From smart, modular containerized plants to large-scale anaerobic
              digestion solutions, we transform organic waste into sustainable
              energy
            </p>
            <a
              href={brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-lg font-medium text-center px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Download Brochure
            </a>
            {isIosDevice && (
              <p className="mt-4 text-sm text-white/80">
                Tip: Tap Share → Save to Files to keep this brochure on iPhone.
              </p>
            )}
          </motion.div>
        </section>

        {/* Services Grid Section */}
        <section className="py-16 px-8 md:px-16 lg:px-32 bg-white">
          <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  image={service.image}
                  path={service.path}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WasteToEnergyPage;
