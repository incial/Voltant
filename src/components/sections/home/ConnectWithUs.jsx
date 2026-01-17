"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

const ConnectWithUs = () => {
  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="relative rounded-[40px] px-6 py-8 md:px-10 md:py-10 overflow-hidden">
          {/* Background Image */}
          <Image
            src="/assets/images/Home/ConnecwithusBg.png"
            alt="Connect with us background"
            fill
            className="object-cover rounded-[40px] z-0"
            quality={75}
            sizes="(max-width: 768px) 100vw, 80vw"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 rounded-[40px] z-10" />

          {/* Content */}
          <div className="relative z-20">
            <h2 className="text-center text-white font-bold mb-6 md:mb-10 text-2xl md:text-3xl lg:text-4xl">
              Connect With Us
            </h2>

            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
              {/* Contact Info */}
              <div className="flex flex-col gap-5 text-white">
                <div>
                  <p className="text-base md:text-lg font-light mb-1">
                    Email us at
                  </p>
                  <a
                    href="mailto:contact@voltant.energy"
                    className="text-base md:text-lg font-normal hover:text-gray-300 transition-colors"
                  >
                    contact@voltant.energy
                  </a>
                </div>
                <div>
                  <p className="text-base md:text-lg font-light mb-1">
                    Call us at
                  </p>
                  <a
                    href="tel:+971506719857"
                    className="text-base md:text-lg font-normal hover:text-gray-300 transition-colors"
                  >
                    +971 50 641 9857
                  </a>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/971506419857"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4AB757] text-white px-6 py-3 md:px-7 md:py-4 rounded-full flex items-center gap-3 hover:bg-[#3a9246] transition-colors shadow-lg w-full md:w-auto justify-center"
              >
                <span className="text-base md:text-lg font-normal">
                  Connect with us through
                </span>
                <FaWhatsapp className="text-xl md:text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
