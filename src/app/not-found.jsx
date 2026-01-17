"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  // Set page title on component mount
  useEffect(() => {
    document.title = "404 - Page Not Found | Voltant Energy";
    return () => {
      document.title = "Voltant Energy";
    };
  }, []);

  // Animation variants
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const numberVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8 + i * 0.1,
      },
    }),
  };

  // Magnifying glass animation variants
  const glassVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.5,
        delay: 0.2,
      },
    },
  };

  // Search results animation variants
  const searchResultsVariants = {
    hidden: { scaleX: 0, opacity: 0, originX: 0 },
    visible: (i) => ({
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1 + i * 0.15,
      },
    }),
  };

  // Document animation variants
  const documentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 2.2,
      },
    },
  };

  // Cross mark animation variants
  const crossVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 2.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-4 py-12 sm:py-16">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        {/* Storyset-inspired Search Animation SVG */}
        <div className="w-full max-w-xs sm:max-w-md mb-8 sm:mb-10 relative">
          <motion.svg
            viewBox="0 0 300 220"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            initial="hidden"
            animate="visible"
          >
            {/* Background circle */}
            <motion.circle
              cx="150"
              cy="110"
              r="100"
              fill="rgba(74, 183, 87, 0.05)"
              stroke="rgba(74, 183, 87, 0.2)"
              strokeWidth="1"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: { duration: 1, ease: "easeOut" },
              }}
            />

            {/* Search/404 Group */}
            <g transform="translate(75, 70)">
              {/* Magnifying glass */}
              <motion.g variants={glassVariants}>
                <motion.circle
                  cx="60"
                  cy="60"
                  r="40"
                  fill="none"
                  stroke="#4AB757"
                  strokeWidth="6"
                  variants={pathVariants}
                />
                <motion.line
                  x1="90"
                  y1="90"
                  x2="120"
                  y2="120"
                  stroke="#4AB757"
                  strokeWidth="6"
                  strokeLinecap="round"
                  variants={pathVariants}
                />
                {/* Handle shine */}
                <motion.path
                  d="M35 40 Q45 30 55 35"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={pathVariants}
                />
              </motion.g>

              {/* 404 text inside magnifying glass */}
              <motion.text
                x="60"
                y="70"
                textAnchor="middle"
                fill="#4AB757"
                fontWeight="bold"
                fontSize="24"
                variants={numberVariants}
              >
                404
              </motion.text>
            </g>

            {/* Search results lines */}
            <motion.rect
              x="50"
              y="160"
              width="60"
              height="8"
              rx="4"
              fill="#4AB757"
              opacity="0.7"
              custom={0}
              variants={searchResultsVariants}
            />
            <motion.rect
              x="50"
              y="175"
              width="120"
              height="8"
              rx="4"
              fill="#4AB757"
              opacity="0.5"
              custom={1}
              variants={searchResultsVariants}
            />
            <motion.rect
              x="50"
              y="190"
              width="90"
              height="8"
              rx="4"
              fill="#4AB757"
              opacity="0.3"
              custom={2}
              variants={searchResultsVariants}
            />

            {/* Document icon with cross */}
            <g transform="translate(220, 160)">
              <motion.g variants={documentVariants}>
                <rect
                  x="0"
                  y="0"
                  width="30"
                  height="40"
                  rx="3"
                  fill="none"
                  stroke="#4AB757"
                  strokeWidth="2"
                />
                <line
                  x1="7"
                  y1="10"
                  x2="23"
                  y2="10"
                  stroke="#4AB757"
                  strokeWidth="2"
                />
                <line
                  x1="7"
                  y1="17"
                  x2="23"
                  y2="17"
                  stroke="#4AB757"
                  strokeWidth="2"
                />
                <line
                  x1="7"
                  y1="24"
                  x2="15"
                  y2="24"
                  stroke="#4AB757"
                  strokeWidth="2"
                />
              </motion.g>
              <motion.g variants={crossVariants}>
                <line
                  x1="5"
                  y1="5"
                  x2="25"
                  y2="35"
                  stroke="#FF5555"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <line
                  x1="25"
                  y1="5"
                  x2="5"
                  y2="35"
                  stroke="#FF5555"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </motion.g>
            </g>

            {/* Animated dots */}
            <motion.circle
              cx="40"
              cy="130"
              r="4"
              fill="#4AB757"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -10, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  delay: 1,
                  repeatDelay: 0.5,
                },
              }}
            />
            <motion.circle
              cx="270"
              cy="100"
              r="3"
              fill="#4AB757"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -8, 0],
                transition: {
                  repeat: Infinity,
                  duration: 1.8,
                  delay: 1.2,
                  repeatDelay: 0.6,
                },
              }}
            />
            <motion.circle
              cx="230"
              cy="50"
              r="5"
              fill="#4AB757"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -12, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2.2,
                  delay: 0.7,
                  repeatDelay: 0.4,
                },
              }}
            />
          </motion.svg>
        </div>

        {/* Text content */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-green-400"
          variants={textVariants}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg px-3"
          variants={textVariants}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </motion.p>

        {/* Back to home button */}
        <motion.div
          variants={textVariants}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white hover:bg-opacity-10 py-2.5 sm:py-3 px-6 sm:px-8 rounded-full font-medium border-2 border-green-400 text-green-400 transition-colors"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
