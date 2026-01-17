"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceCard = ({ title, image, path }) => {
  return (
    <Link
      href={path}
      className="relative group overflow-hidden cursor-pointer w-full"
    >
      {/* Mobile styling */}
      <div className="md:hidden block relative aspect-square rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="absolute bottom-3 left-3 z-10 p-2">
          <h3 className="text-sm font-medium text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Desktop styling */}
      <motion.div
        className="hidden md:block relative w-full max-w-[370px] h-[300px] rounded-xl overflow-hidden group"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div
          className="absolute inset-0"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.12, rotate: -2.5 },
          }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="370px"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
          <h3 className="text-xl md:text-2xl font-semibold text-white transition-transform duration-500 transform group-hover:-translate-y-2">
            {title}
          </h3>
          <div className="h-0 overflow-hidden transition-all duration-500 group-hover:h-10 mt-2 opacity-0 group-hover:opacity-100">
            <span className="text-white text-sm">View Details</span>
            <span className="ml-2 text-white">→</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
