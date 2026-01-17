"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    title: "AC Chargers",
    image: "/assets/images/EV_charging/Ac_charger.png",
    path: "/ev-charging/ac-chargers",
  },
  {
    title: "DC Chargers",
    image: "/assets/images/EV_charging/Dc_charger.png",
    path: "/ev-charging/dc-chargers",
  },
  {
    title: "Engineering Works",
    image: "/assets/images/EV_charging/Engineering_works.png",
    path: "/ev-charging/engineering-works",
  },
  {
    title: "CPO",
    image: "/assets/images/EV_charging/Cpo1.png",
    path: "/ev-charging/cpo",
  },
  {
    title: "More",
    image: "/assets/images/EV_charging/More.png",
    path: "/ev-charging/more",
  },
];

const EvChargingPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden min-h-screen flex flex-col font-cairo bg-white">
        {/* Hero Section */}
        <div className="relative h-[550px]">
          {/* Image Background */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/assets/images/EV_charging/EV_main1.png"
              alt="EV Charging"
              fill
              className={`object-cover transition-opacity duration-700 ${
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </div>
          {/* Hero Content */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 z-10 max-w-[85%] px-2">
            <h1 className="text-2xl font-semibold text-white mb-4 leading-snug">
              EV Charging <br /> Infrastructure
            </h1>
            <p className="text-sm text-white font-light w-full max-w-[280px] mb-6 leading-relaxed">
              Powering the future of mobility with smart, efficient, and
              scalable EV charging solutions—designed for homes, businesses, and
              public spaces.
            </p>
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="bg-white p-4 sm:p-8 py-12 sm:py-16">
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
        <section className="relative w-full h-screen">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src="/assets/images/EV_charging/EV_main1.png"
              alt="EV Charging"
              fill
              className={`object-cover transition-opacity duration-700 ${
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-[100px] -translate-y-1/2 z-10 text-white text-left w-full max-w-[450px] px-4 md:px-0"
          >
            <h1 className="text-[2.75rem] leading-tight font-semibold m-0 mb-6">
              EV Charging <br /> Infrastructure
            </h1>
            <p className="text-lg text-white font-light w-full max-w-[400px] leading-relaxed">
              Powering the future of mobility with smart, efficient, and
              scalable EV charging solutions—designed for homes, businesses, and
              public spaces.
            </p>
          </motion.div>
        </section>

        {/* Services Grid Section */}
        <section className="py-16 px-32 bg-white">
          <div className="mx-auto max-w-[1500px] px-8">
            <div className="grid grid-cols-3 gap-6">
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

export default EvChargingPage;
