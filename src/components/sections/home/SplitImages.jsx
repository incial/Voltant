"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  {
    id: "ev",
    title: "EV Charging Infrastructure",
    description:
      "Powering the future of mobility with smart, efficient, and scalable EV charging solutions—designed for homes, businesses, and public spaces.",
    button: "Learn More",
    img: "/assets/images/Home/split/split2.png",
    icon: "/assets/icons/battery.png",
    link: "/ev-charging",
  },
  {
    id: "pollution",
    title: "Waste to Energy Solutions",
    description:
      "From smart modular containerized plants to large-scale anaerobic digestion solutions, we transform organic waste into sustainable energy.",
    button: "Learn More",
    img: "/assets/images/Home/split/split1.png",
    icon: "/assets/icons/waterpure.png",
    link: "/waste-to-energy",
  },
];

const SplitImages = () => {
  const [activeId, setActiveId] = useState(images[0].id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex md:flex-row flex-col md:h-screen w-full">
      {images.map((item) => {
        const isActive = activeId === item.id;
        const showContent = isActive || isMobile;

        return (
          <motion.div
            key={item.id}
            layout
            className="relative cursor-pointer overflow-hidden"
            onMouseEnter={() => !isMobile && setActiveId(item.id)}
            style={{
              flexBasis: isMobile ? "100%" : isActive ? "66.66%" : "33.33%",
              transition: "flex-basis 0.8s cubic-bezier(0.83, 0, 0.17, 1)",
              minHeight: isMobile ? "100vh" : "100%",
            }}
          >
            {/* Icon */}
            <div className="absolute top-4 md:top-12 right-4 md:right-12 w-8 md:w-16 h-8 md:h-16 z-20">
              <Image
                src={item.icon}
                alt={`${item.id} icon`}
                fill
                className="object-contain"
              />
            </div>

            {/* Background Image */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1 }}
              animate={{ scale: !isMobile && isActive ? 1.02 : 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                priority={item.id === images[0].id}
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </motion.div>

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/30 p-6 md:p-12 text-white flex flex-col justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative flex flex-col">
                {/* Vertical line */}
                <motion.div
                  className="absolute top-0 left-0 bottom-0 w-[2px] bg-white rounded-full"
                  initial={{ height: 0 }}
                  animate={{ height: showContent ? "100%" : 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                />

                <div className="ml-8 md:ml-12">
                  <motion.h2
                    className="text-xl md:text-3xl font-semibold mb-3 md:mb-4"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{
                      y: showContent ? 0 : 40,
                      opacity: showContent ? 1 : 0,
                    }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    className="text-sm md:text-base max-w-md mb-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{
                      y: showContent ? 0 : 30,
                      opacity: showContent ? 1 : 0,
                    }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {item.description}
                  </motion.p>

                  <Link href={item.link}>
                    <motion.button
                      className="border border-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-black transition-colors text-sm md:text-base"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{
                        opacity: showContent ? 1 : 0,
                        scale: showContent ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.button}
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SplitImages;
