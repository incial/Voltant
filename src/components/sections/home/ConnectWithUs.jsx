import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ConnectWithUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-[#7f7f7f] rounded-[40px] p-6 md:p-8">
          <h2 className="text-center text-[#7F7F7F] font-bold mb-6 text-3xl md:text-4xl">
            Connect With Us
          </h2>
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            {/* Left side - Contact Info */}
            <div className="flex flex-col gap-5">
              <div className="text-[#7f7f7f]">
                <p className="text-lg md:text-xl font-light mb-2">Email:</p>
                <p className="text-lg md:text-xl font-normal">contact@voltant.energy</p>
              </div>
              
              <div className="text-[#7f7f7f]">
                <p className="text-lg md:text-xl font-light mb-2">Phone:</p>
                <p className="text-lg md:text-xl font-normal">+971 50 671 9857</p>
              </div>
            </div>
            
            {/* Right side - WhatsApp Button */}
            <a 
              href="https://wa.me/971506719857" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#7f7f7f] hover:bg-[#666666] transition-colors rounded-[15px] px-4 py-3 flex items-center gap-4 shrink-0"
            >
              <p className="text-white text-base font-light whitespace-nowrap">
                Connect with us through
              </p>
              <FaWhatsapp 
                size={27} 
                className="text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs; 