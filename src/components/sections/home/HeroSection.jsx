"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const heroFrames = [
  {
    src: "/assets/images/Home/Hero/hero1.png",
    title: (
      <>
        For a Sustainable Tomorrow,
        <br />
        Save Energy Today.
      </>
    ),
  },
  {
    src: "/assets/images/Home/Hero/hero2.png",
    title: (
      <>
        Turning Waste into Power,
        <br /> Fueling a Greener Future.
      </>
    ),
  },
  {
    src: "/assets/images/Home/Hero/hero3.png",
    title: (
      <>
        Maximize Efficiency,
        <br /> Minimize Waste.
      </>
    ),
  },
];

const SLIDE_DURATION = 8000;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Carousel timer
  useEffect(() => {
    if (!isReady) return;

    let startTime = performance.now();
    let animationFrame;

    const tick = (now) => {
      const elapsed = now - startTime;
      const localProgress = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(localProgress);

      if (localProgress >= 1) {
        startTime = now;
        setProgress(0);
        setCurrentIndex((prev) => (prev + 1) % heroFrames.length);
      }

      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [isReady]);

  const handleFirstImageLoad = useCallback(() => {
    setIsReady(true);
  }, []);

  const currentFrame = heroFrames[currentIndex];

  return (
    <section className="hero-section relative w-full h-screen overflow-hidden">
      {/* Hero Images */}
      <div className="absolute inset-0 z-[1]">
        {heroFrames.map((frame, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={frame.src}
              alt={`Hero slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={85}
              sizes="100vw"
              onLoad={index === 0 ? handleFirstImageLoad : undefined}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(144, 238, 144, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      {/* Social Icons (Desktop) */}
      {isReady && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
          className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 flex-col gap-5 z-20"
        >
          {[FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaXTwitter].map(
            (Icon, idx) => (
              <a
                key={idx}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-1 hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            )
          )}
        </motion.div>
      )}

      {/* Caption */}
      {isReady && (
        <motion.div
          key={`caption-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute z-10 text-white text-left bottom-20 left-6 sm:left-8 lg:left-16 xl:left-24 max-w-[600px]"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight drop-shadow-lg">
            {currentFrame.title}
          </h1>
        </motion.div>
      )}

      {/* Progress Indicators */}
      {isReady && (
        <div className="absolute bottom-6 lg:bottom-8 left-0 right-0 flex justify-center gap-4 lg:gap-6 z-10">
          {heroFrames.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className="h-1 rounded-[2px] overflow-hidden transition-all duration-300"
                style={{
                  width: isActive ? "90px" : "48px",
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}
              >
                <div
                  className="h-full rounded-[2px] bg-white"
                  style={{
                    width: isActive ? `${progress * 100}%` : "0%",
                    transition: "width 100ms linear",
                  }}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Loading Indicator */}
      {!isReady && (
        <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
