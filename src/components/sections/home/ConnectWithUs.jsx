import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ConnectWithUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card */}
        <div
          className="relative rounded-[40px] p-6 md:p-10 overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/Home/Connect.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-center text-white font-bold mb-6 text-3xl md:text-4xl">
              Connect With Us
            </h2>

            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              
              {/* Left side - Contact Info */}
              <div className="flex flex-col gap-5 text-white">
                <div>
                  <p className="text-lg md:text-xl font-light mb-1">Email:</p>
                  <p className="text-lg md:text-xl font-normal">
                    contact@voltant.energy
                  </p>
                </div>

                <div>
                  <p className="text-lg md:text-xl font-light mb-1">Phone:</p>
                  <p className="text-lg md:text-xl font-normal">
                    +971 50 671 9857
                  </p>
                </div>
              </div>

              {/* Right side - WhatsApp Button */}
              <a
                href="https://wa.me/971506719857"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6BBE45] hover:bg-[#5aa83b] transition-colors rounded-[15px] px-6 py-3 flex items-center gap-3 shrink-0"
              >
                <p className="text-white text-base font-light whitespace-nowrap">
                  Connect with us through
                </p>
                <FaWhatsapp size={26} className="text-white" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConnectWithUs;
