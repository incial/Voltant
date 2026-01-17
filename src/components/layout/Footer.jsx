"use client";

import React from "react";
import Image from "next/image";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { Icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: FaXTwitter, href: "https://twitter.com", label: "X/Twitter" },
  { Icon: FaWhatsapp, href: "https://wa.me/+971506419857", label: "WhatsApp" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00251a] text-white relative py-8 md:py-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/images/Home/Footer.png"
          alt="Footer background"
          fill
          className="object-cover"
          style={{ objectFit: "cover" }}
          quality={75}
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Mobile Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center md:hidden">
        <Image
          src="/assets/images/Home/Logo_white.png"
          alt="Voltant Energy Logo"
          width={180}
          height={45}
          className="w-[180px] h-auto mb-6"
          style={{ width: "140px", height: "auto" }}
        />

        <div className="flex justify-center space-x-5 mb-6">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:scale-110 transition-transform"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-center text-xs">
          © Copyright {currentYear} Voltant Energy. All Rights Reserved
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-10 relative z-20 py-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-6">
            <Image
              src="/assets/images/Home/Logo_white.png"
              alt="Voltant Energy Logo"
              width={140}
              height={35}
              className="w-[200px] h-auto"
              style={{ width: "200px", height: "auto" }}
            />
            <p className="text-xs md:text-sm">
              © Copyright {currentYear} Voltant Energy. All Rights Reserved and
              Designed by{" "}
              <a
                href="https://incial.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
              >
                Incial
              </a>
            </p>
          </div>

          <div className="flex space-x-4 lg:space-x-6 items-center">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl md:text-[22px] hover:opacity-80 transition-opacity"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
